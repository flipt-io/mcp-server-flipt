import { FliptApiError, FliptClientV2 } from '../services/fliptClientV2';
import { FlagDocument, SegmentDocument } from '../services/types';

const fetchMock = jest.fn();
global.fetch = fetchMock as any;

function jsonResponse(body: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: '',
    json: async () => body,
    text: async () => JSON.stringify(body),
  };
}

function flagDoc(overrides: Partial<FlagDocument> = {}): FlagDocument {
  return {
    '@type': 'flipt.core.Flag',
    key: 'my-flag',
    name: 'My Flag',
    description: '',
    type: 'VARIANT_FLAG_TYPE',
    enabled: false,
    ...overrides,
  };
}

function segmentDoc(overrides: Partial<SegmentDocument> = {}): SegmentDocument {
  return {
    '@type': 'flipt.core.Segment',
    key: 'my-segment',
    name: 'My Segment',
    matchType: 'ALL_MATCH_TYPE',
    ...overrides,
  };
}

// The GET issued by a read-merge-write, returning the given payload.
function mockRead(payload: FlagDocument | SegmentDocument, revision = 'rev-1') {
  fetchMock.mockResolvedValueOnce(
    jsonResponse({
      resource: { namespaceKey: 'default', key: payload.key, payload },
      revision,
    })
  );
}

// The write that follows; echoes the request back like the server would.
function mockWrite() {
  fetchMock.mockResolvedValueOnce(jsonResponse({ resource: {}, revision: 'rev-2' }));
}

function lastRequest(): { url: URL; method: string; headers: Record<string, string>; body: any } {
  const [url, init] = fetchMock.mock.calls[fetchMock.mock.calls.length - 1];
  return {
    url: new URL(url.toString()),
    method: init.method,
    headers: init.headers,
    body: init.body !== undefined ? JSON.parse(init.body) : undefined,
  };
}

describe('FliptClientV2', () => {
  const env = { ...process.env };

  beforeEach(() => {
    fetchMock.mockReset();
    process.env = { ...env };
    delete process.env.FLIPT_URL;
    delete process.env.FLIPT_API_KEY;
    delete process.env.FLIPT_ENVIRONMENT;
  });

  afterAll(() => {
    process.env = env;
  });

  describe('request plumbing', () => {
    it('defaults to http://localhost:8080 and the default environment', () => {
      const client = new FliptClientV2();
      expect(client.getBaseUrl()).toBe('http://localhost:8080');
      expect(client.env()).toBe('default');
      expect(client.env('production')).toBe('production');
    });

    it('reads FLIPT_URL (trimming trailing slashes) and FLIPT_ENVIRONMENT', () => {
      process.env.FLIPT_URL = 'https://flipt.example.com/';
      process.env.FLIPT_ENVIRONMENT = 'staging';
      const client = new FliptClientV2();
      expect(client.getBaseUrl()).toBe('https://flipt.example.com');
      expect(client.env()).toBe('staging');
    });

    it('sends a bearer token when FLIPT_API_KEY is set', async () => {
      process.env.FLIPT_API_KEY = 'secret';
      fetchMock.mockResolvedValueOnce(jsonResponse({ environments: [] }));
      await new FliptClientV2().listEnvironments();
      expect(lastRequest().headers.Authorization).toBe('Bearer secret');
    });

    it('omits the Authorization header without an API key', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ environments: [] }));
      await new FliptClientV2().listEnvironments();
      expect(lastRequest().headers.Authorization).toBeUndefined();
    });

    it('encodes path segments and query params', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ changes: [] }));
      await new FliptClientV2().listBranchChanges('prod/env', 'my branch', 'abc', 5);
      const { url } = lastRequest();
      expect(url.pathname).toBe('/api/v2/environments/prod%2Fenv/branches/my%20branch/changes');
      expect(url.searchParams.get('from')).toBe('abc');
      expect(url.searchParams.get('limit')).toBe('5');
    });

    it('throws FliptApiError with the server message on non-2xx', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ message: 'flag not found' }, 404));
      await expect(new FliptClientV2().getFlag('default', 'default', 'nope')).rejects.toThrow(
        'flag not found'
      );
    });

    it('flags 409/412 responses as conflicts', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ message: 'stale revision' }, 409));
      const error = await new FliptClientV2()
        .toggleFlag('default', 'default', 'my-flag', true)
        .catch(e => e);
      expect(error).toBeInstanceOf(FliptApiError);
      expect(error.isConflict).toBe(true);
    });
  });

  describe('read-merge-write', () => {
    it('create_variant appends and passes the read revision through', async () => {
      const existing = { key: 'a', name: 'A' };
      mockRead(flagDoc({ variants: [existing] }), 'rev-42');
      mockWrite();

      await new FliptClientV2().createVariant('default', 'default', 'my-flag', { key: 'b' });

      const { method, url, body } = lastRequest();
      expect(method).toBe('PUT');
      expect(url.pathname).toBe('/api/v2/environments/default/namespaces/default/resources');
      expect(body.revision).toBe('rev-42');
      expect(body.payload.variants).toEqual([existing, { key: 'b', name: 'b' }]);
    });

    it('rejects a duplicate variant key without writing', async () => {
      mockRead(flagDoc({ variants: [{ key: 'a' }] }));
      await expect(
        new FliptClientV2().createVariant('default', 'default', 'my-flag', { key: 'a' })
      ).rejects.toThrow('already exists');
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('toggle_flag flips only enabled, preserving falsy fields', async () => {
      mockRead(flagDoc({ description: '', enabled: false, defaultVariant: '' }));
      mockWrite();

      await new FliptClientV2().toggleFlag('default', 'default', 'my-flag', true);

      const { body } = lastRequest();
      expect(body.payload.enabled).toBe(true);
      expect(body.payload.description).toBe('');
      expect(body.payload.defaultVariant).toBe('');
    });

    it('update_flag merges with ?? so explicit false survives', async () => {
      mockRead(flagDoc({ enabled: true, description: 'keep me' }));
      mockWrite();

      await new FliptClientV2().updateFlag('default', 'default', 'my-flag', { enabled: false });

      const { body } = lastRequest();
      expect(body.payload.enabled).toBe(false);
      expect(body.payload.description).toBe('keep me');
    });

    it('delete_rule removes exactly the indexed rule', async () => {
      const rules = [{ segments: ['s1'] }, { segments: ['s2'] }, { segments: ['s3'] }];
      mockRead(flagDoc({ rules }));
      mockWrite();

      await new FliptClientV2().deleteRule('default', 'default', 'my-flag', 1);

      expect(lastRequest().body.payload.rules).toEqual([
        { segments: ['s1'] },
        { segments: ['s3'] },
      ]);
    });

    it('rejects an out-of-range rule index without writing', async () => {
      mockRead(flagDoc({ rules: [{ segments: ['s1'] }] }));
      await expect(
        new FliptClientV2().deleteRule('default', 'default', 'my-flag', 3)
      ).rejects.toThrow('out of range');
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('create_rule inserts at the requested position', async () => {
      const rules = [{ segments: ['s1'] }, { segments: ['s2'] }];
      mockRead(flagDoc({ rules }));
      mockWrite();

      await new FliptClientV2().createRule(
        'default',
        'default',
        'my-flag',
        { segments: ['new'] },
        1
      );

      expect(lastRequest().body.payload.rules).toEqual([
        { segments: ['s1'] },
        { segments: ['new'] },
        { segments: ['s2'] },
      ]);
    });

    it('create_constraint appends to the segment document', async () => {
      mockRead(segmentDoc({ constraints: [] }), 'rev-7');
      mockWrite();

      const constraint = {
        type: 'STRING_COMPARISON_TYPE' as const,
        property: 'plan',
        operator: 'eq',
        value: 'pro',
      };
      await new FliptClientV2().createConstraint('default', 'default', 'my-segment', constraint);

      const { body } = lastRequest();
      expect(body.revision).toBe('rev-7');
      expect(body.payload.constraints).toEqual([constraint]);
    });

    it('deletes fetch the current revision first', async () => {
      mockRead(flagDoc(), 'rev-9');
      fetchMock.mockResolvedValueOnce(jsonResponse({ revision: 'rev-10' }));

      await new FliptClientV2().deleteFlag('default', 'default', 'my-flag');

      const { method, url } = lastRequest();
      expect(method).toBe('DELETE');
      expect(url.pathname).toBe(
        '/api/v2/environments/default/namespaces/default/resources/flipt.core.Flag/my-flag'
      );
      expect(url.searchParams.get('revision')).toBe('rev-9');
    });
  });

  describe('evaluation', () => {
    it('posts to /evaluate/v1 with environmentKey in the body', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ enabled: true }));
      await new FliptClientV2().evaluateBoolean({
        environmentKey: 'staging',
        namespaceKey: 'default',
        flagKey: 'my-flag',
        entityId: 'user-1',
        context: {},
      });

      const { url, body } = lastRequest();
      expect(url.pathname).toBe('/evaluate/v1/boolean');
      expect(body.environmentKey).toBe('staging');
    });
  });
});
