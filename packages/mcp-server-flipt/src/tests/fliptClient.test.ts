import { FliptApiError, FliptClient } from '../services/fliptClient';

const fetchMock = jest.fn();
global.fetch = fetchMock as any;

function jsonResponse(body: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: '',
    json: async () => body,
    text: async () => (body === undefined ? '' : JSON.stringify(body)),
  };
}

function lastRequest(): {
  url: string;
  method: string;
  headers: Record<string, string>;
  body: any;
} {
  const [url, init] = fetchMock.mock.calls[fetchMock.mock.calls.length - 1];
  return {
    url: url.toString(),
    method: init.method,
    headers: init.headers,
    body: init.body !== undefined ? JSON.parse(init.body) : undefined,
  };
}

describe('FliptClient', () => {
  const env = { ...process.env };
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchMock.mockReset();
    process.env = { ...env };
    delete process.env.FLIPT_URL;
    delete process.env.FLIPT_API_KEY;
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    errorSpy.mockRestore();
  });

  afterAll(() => {
    process.env = env;
  });

  describe('request plumbing', () => {
    it('defaults to http://localhost:8080', () => {
      expect(new FliptClient().getBaseUrl()).toBe('http://localhost:8080');
    });

    it('reads FLIPT_URL, trimming trailing slashes', () => {
      process.env.FLIPT_URL = 'https://flipt.example.com/';
      expect(new FliptClient().getBaseUrl()).toBe('https://flipt.example.com');
    });

    it('sends a bearer token when FLIPT_API_KEY is set', async () => {
      process.env.FLIPT_API_KEY = 'secret';
      fetchMock.mockResolvedValueOnce(jsonResponse({ namespaces: [] }));
      await new FliptClient().listNamespaces();
      expect(lastRequest().headers.Authorization).toBe('Bearer secret');
    });

    it('encodes path segments', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ key: 'my flag' }));
      await new FliptClient().getFlag('my ns', 'my flag');
      expect(lastRequest().url).toBe(
        'http://localhost:8080/api/v1/namespaces/my%20ns/flags/my%20flag'
      );
    });

    it('throws FliptApiError with the server message on non-2xx', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ message: 'flag not found' }, 404));
      const error = await new FliptClient().getFlag('default', 'nope').catch(e => e);
      expect(error).toBeInstanceOf(FliptApiError);
      expect(error.status).toBe(404);
      expect(error.message).toBe('flag not found');
    });

    it('tolerates empty response bodies (deletes)', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse(undefined));
      await expect(new FliptClient().deleteFlag('default', 'my-flag')).resolves.toEqual({
        success: true,
      });
      expect(lastRequest().method).toBe('DELETE');
    });
  });

  describe('request shapes', () => {
    it('createFlag defaults to enabled boolean flag', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ key: 'my-flag' }));
      await new FliptClient().createFlag('default', 'my-flag', 'My Flag');
      const { method, url, body } = lastRequest();
      expect(method).toBe('POST');
      expect(url).toBe('http://localhost:8080/api/v1/namespaces/default/flags');
      expect(body).toMatchObject({
        key: 'my-flag',
        enabled: true,
        type: 'BOOLEAN_FLAG_TYPE',
      });
    });

    it('createFlag preserves enabled: false and variant type', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ key: 'my-flag' }));
      await new FliptClient().createFlag(
        'default',
        'my-flag',
        'My Flag',
        undefined,
        false,
        'VARIANT_FLAG_TYPE'
      );
      expect(lastRequest().body).toMatchObject({ enabled: false, type: 'VARIANT_FLAG_TYPE' });
    });

    it('createRule defaults rank and segment operator', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ id: 'r1' }));
      await new FliptClient().createRule('default', 'my-flag', 'my-segment');
      const { url, body } = lastRequest();
      expect(url).toBe('http://localhost:8080/api/v1/namespaces/default/flags/my-flag/rules');
      expect(body).toEqual({
        segmentKey: 'my-segment',
        rank: 1,
        segmentOperator: 'OR_SEGMENT_OPERATOR',
      });
    });

    it('evaluateBatch defaults per-request context', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ responses: [] }));
      await new FliptClient().evaluateBatch([
        { namespaceKey: 'default', flagKey: 'my-flag', entityId: 'user-1' },
      ]);
      const { url, body } = lastRequest();
      expect(url).toBe('http://localhost:8080/evaluate/v1/batch');
      expect(body.requests[0].context).toEqual({});
    });
  });

  describe('response handling', () => {
    it('list methods unwrap their collection', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ namespaces: [{ key: 'default' }] }));
      await expect(new FliptClient().listNamespaces()).resolves.toEqual([{ key: 'default' }]);
    });

    it('list methods swallow errors and return []', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ message: 'boom' }, 500));
      await expect(new FliptClient().listFlags('default')).resolves.toEqual([]);
    });

    it('deleteDistribution looks up the variantId from the rule when omitted', async () => {
      fetchMock.mockResolvedValueOnce(
        jsonResponse({
          rules: [{ id: 'r1', distributions: [{ id: 'd1', variantId: 'v1', rollout: 100 }] }],
        })
      );
      fetchMock.mockResolvedValueOnce(jsonResponse(undefined));

      await new FliptClient().deleteDistribution('default', 'my-flag', 'r1', 'd1');

      expect(lastRequest().url).toBe(
        'http://localhost:8080/api/v1/namespaces/default/flags/my-flag/rules/r1/distributions/d1?variantId=v1'
      );
    });

    it('deleteDistribution skips the lookup when variantId is provided', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse(undefined));

      await new FliptClient().deleteDistribution('default', 'my-flag', 'r1', 'd1', 'v9');

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(lastRequest().url).toContain('?variantId=v9');
    });

    it('listRollouts reads the rollouts from the rules property (v1 API quirk)', async () => {
      fetchMock.mockResolvedValueOnce(jsonResponse({ rules: [{ id: 'ro1' }] }));
      await expect(new FliptClient().listRollouts('default', 'my-flag')).resolves.toEqual([
        { id: 'ro1' },
      ]);
    });
  });
});
