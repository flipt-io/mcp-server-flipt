import {
  BatchEvaluationRequest,
  Constraint,
  DeleteResponse,
  Distribution,
  EvaluationRequest,
  FLAG_TYPE_URL,
  FlagDocument,
  FlagType,
  ListBranchedEnvironmentChangesResponse,
  ListEnvironmentBranchesResponse,
  ListEnvironmentsResponse,
  ListNamespacesResponse,
  ListResourcesResponse,
  NamespaceResponse,
  ResourcePayload,
  ResourceResponse,
  Rollout,
  Rule,
  SEGMENT_TYPE_URL,
  SegmentDocument,
  SegmentMatchType,
  Variant,
} from './types';

const enc = encodeURIComponent;

export class FliptApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'FliptApiError';
    this.status = status;
  }

  // Flipt v2 rejects writes whose revision is stale.
  get isConflict(): boolean {
    return this.status === 409 || this.status === 412;
  }
}

interface RequestOptions {
  body?: unknown;
  query?: Record<string, string | number | undefined>;
}

/**
 * Thin hand-written client for the Flipt v2 REST API.
 *
 * Everything in v2 is scoped to an environment, and flags/segments are stored
 * as whole documents under the generic resources API. Sub-entity operations
 * (variants, rules, rollouts, constraints, distributions) are implemented as
 * read-merge-write on the parent document, passing the read revision back so
 * the server can reject concurrent modifications.
 */
export class FliptClientV2 {
  private readonly baseUrl: string;
  private readonly apiKey?: string;
  readonly defaultEnvironment: string;

  constructor() {
    this.baseUrl = (process.env.FLIPT_URL ?? 'http://localhost:8080').replace(/\/+$/, '');
    this.apiKey = process.env.FLIPT_API_KEY;
    this.defaultEnvironment = process.env.FLIPT_ENVIRONMENT ?? 'default';
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  // Resolves the environment for a tool call: explicit argument, else the
  // FLIPT_ENVIRONMENT default.
  env(environmentKey?: string): string {
    return environmentKey ?? this.defaultEnvironment;
  }

  private async request<T>(method: string, path: string, opts: RequestOptions = {}): Promise<T> {
    const url = new URL(this.baseUrl + path);
    for (const [key, value] of Object.entries(opts.query ?? {})) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
    });

    if (!response.ok) {
      throw new FliptApiError(response.status, await errorMessage(response));
    }

    return (await response.json()) as T;
  }

  // Environments

  listEnvironments(): Promise<ListEnvironmentsResponse> {
    return this.request('GET', '/api/v2/environments');
  }

  listBranches(environmentKey: string): Promise<ListEnvironmentBranchesResponse> {
    return this.request('GET', `/api/v2/environments/${enc(environmentKey)}/branches`);
  }

  createBranch(environmentKey: string, key: string) {
    return this.request('POST', `/api/v2/environments/${enc(environmentKey)}/branches`, {
      body: { environmentKey, key },
    });
  }

  proposeBranch(
    environmentKey: string,
    branchKey: string,
    options: { title?: string; body?: string; draft?: boolean }
  ) {
    return this.request(
      'POST',
      `/api/v2/environments/${enc(environmentKey)}/branches/${enc(branchKey)}`,
      { body: { environmentKey, key: branchKey, ...options } }
    );
  }

  deleteBranch(environmentKey: string, branchKey: string): Promise<unknown> {
    return this.request(
      'DELETE',
      `/api/v2/environments/${enc(environmentKey)}/branches/${enc(branchKey)}`
    );
  }

  listBranchChanges(
    environmentKey: string,
    branchKey: string,
    from?: string,
    limit?: number
  ): Promise<ListBranchedEnvironmentChangesResponse> {
    return this.request(
      'GET',
      `/api/v2/environments/${enc(environmentKey)}/branches/${enc(branchKey)}/changes`,
      { query: { from, limit } }
    );
  }

  // Namespaces

  listNamespaces(environmentKey: string): Promise<ListNamespacesResponse> {
    return this.request('GET', `/api/v2/environments/${enc(environmentKey)}/namespaces`);
  }

  getNamespace(environmentKey: string, key: string): Promise<NamespaceResponse> {
    return this.request(
      'GET',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(key)}`
    );
  }

  createNamespace(
    environmentKey: string,
    key: string,
    name?: string,
    description?: string
  ): Promise<NamespaceResponse> {
    return this.request('POST', `/api/v2/environments/${enc(environmentKey)}/namespaces`, {
      body: { environmentKey, key, name: name ?? key, description },
    });
  }

  async updateNamespace(
    environmentKey: string,
    key: string,
    updates: { name?: string; description?: string }
  ): Promise<NamespaceResponse> {
    const { namespace, revision } = await this.getNamespace(environmentKey, key);
    return this.request('PUT', `/api/v2/environments/${enc(environmentKey)}/namespaces`, {
      body: {
        environmentKey,
        key,
        name: updates.name ?? namespace.name,
        description: updates.description ?? namespace.description,
        protected: namespace.protected,
        revision,
      },
    });
  }

  async deleteNamespace(environmentKey: string, key: string): Promise<DeleteResponse> {
    const { revision } = await this.getNamespace(environmentKey, key);
    return this.request(
      'DELETE',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(key)}`,
      { query: { revision } }
    );
  }

  // Generic resources (flags and segments are typed payloads on this API)

  private listResources<P extends ResourcePayload>(
    environmentKey: string,
    namespaceKey: string,
    typeUrl: string
  ): Promise<ListResourcesResponse<P>> {
    return this.request(
      'GET',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(namespaceKey)}/resources/${enc(typeUrl)}`
    );
  }

  private getResource<P extends ResourcePayload>(
    environmentKey: string,
    namespaceKey: string,
    typeUrl: string,
    key: string
  ): Promise<ResourceResponse<P>> {
    return this.request(
      'GET',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(namespaceKey)}/resources/${enc(typeUrl)}/${enc(key)}`
    );
  }

  private createResource<P extends ResourcePayload>(
    environmentKey: string,
    namespaceKey: string,
    payload: P
  ): Promise<ResourceResponse<P>> {
    return this.request(
      'POST',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(namespaceKey)}/resources`,
      { body: { environmentKey, namespaceKey, key: payload.key, payload } }
    );
  }

  private updateResource<P extends ResourcePayload>(
    environmentKey: string,
    namespaceKey: string,
    payload: P,
    revision: string
  ): Promise<ResourceResponse<P>> {
    return this.request(
      'PUT',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(namespaceKey)}/resources`,
      { body: { environmentKey, namespaceKey, key: payload.key, payload, revision } }
    );
  }

  private async deleteResource(
    environmentKey: string,
    namespaceKey: string,
    typeUrl: string,
    key: string
  ): Promise<DeleteResponse> {
    const { revision } = await this.getResource(environmentKey, namespaceKey, typeUrl, key);
    return this.request(
      'DELETE',
      `/api/v2/environments/${enc(environmentKey)}/namespaces/${enc(namespaceKey)}/resources/${enc(typeUrl)}/${enc(key)}`,
      { query: { revision } }
    );
  }

  // Flags

  listFlags(environmentKey: string, namespaceKey: string) {
    return this.listResources<FlagDocument>(environmentKey, namespaceKey, FLAG_TYPE_URL);
  }

  getFlag(environmentKey: string, namespaceKey: string, key: string) {
    return this.getResource<FlagDocument>(environmentKey, namespaceKey, FLAG_TYPE_URL, key);
  }

  createFlag(
    environmentKey: string,
    namespaceKey: string,
    flag: {
      key: string;
      name?: string;
      description?: string;
      type?: FlagType;
      enabled?: boolean;
    }
  ) {
    return this.createResource<FlagDocument>(environmentKey, namespaceKey, {
      '@type': FLAG_TYPE_URL,
      key: flag.key,
      name: flag.name ?? flag.key,
      description: flag.description,
      type: flag.type ?? 'VARIANT_FLAG_TYPE',
      enabled: flag.enabled ?? false,
    });
  }

  deleteFlag(environmentKey: string, namespaceKey: string, key: string) {
    return this.deleteResource(environmentKey, namespaceKey, FLAG_TYPE_URL, key);
  }

  // Fetches the flag, applies `mutate` to the document, and writes it back
  // with the revision from the read.
  private async mutateFlag(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    mutate: (flag: FlagDocument) => FlagDocument
  ) {
    const { resource, revision } = await this.getFlag(environmentKey, namespaceKey, flagKey);
    return this.updateResource(environmentKey, namespaceKey, mutate(resource.payload), revision);
  }

  updateFlag(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    updates: {
      name?: string;
      description?: string;
      enabled?: boolean;
      defaultVariant?: string;
      metadata?: Record<string, unknown>;
    }
  ) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => ({
      ...flag,
      name: updates.name ?? flag.name,
      description: updates.description ?? flag.description,
      enabled: updates.enabled ?? flag.enabled,
      defaultVariant: updates.defaultVariant ?? flag.defaultVariant,
      metadata: updates.metadata ?? flag.metadata,
    }));
  }

  toggleFlag(environmentKey: string, namespaceKey: string, flagKey: string, enabled: boolean) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => ({ ...flag, enabled }));
  }

  // Variants (embedded in the flag document, addressed by key)

  createVariant(environmentKey: string, namespaceKey: string, flagKey: string, variant: Variant) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const variants = flag.variants ?? [];
      if (variants.some(v => v.key === variant.key)) {
        throw new Error(`variant "${variant.key}" already exists on flag "${flagKey}"`);
      }
      return {
        ...flag,
        variants: [...variants, { ...variant, name: variant.name ?? variant.key }],
      };
    });
  }

  updateVariant(environmentKey: string, namespaceKey: string, flagKey: string, variant: Variant) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const variants = flag.variants ?? [];
      const existing = variants.find(v => v.key === variant.key);
      if (!existing) {
        throw new Error(`variant "${variant.key}" does not exist on flag "${flagKey}"`);
      }
      return {
        ...flag,
        variants: variants.map(v =>
          v.key === variant.key
            ? {
                ...v,
                name: variant.name ?? v.name,
                description: variant.description ?? v.description,
                attachment: variant.attachment ?? v.attachment,
              }
            : v
        ),
      };
    });
  }

  deleteVariant(environmentKey: string, namespaceKey: string, flagKey: string, key: string) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const variants = flag.variants ?? [];
      if (!variants.some(v => v.key === key)) {
        throw new Error(`variant "${key}" does not exist on flag "${flagKey}"`);
      }
      return { ...flag, variants: variants.filter(v => v.key !== key) };
    });
  }

  // Rules (embedded in the flag document, addressed by index)

  createRule(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    rule: Rule,
    position?: number
  ) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const rules = [...(flag.rules ?? [])];
      rules.splice(position ?? rules.length, 0, rule);
      return { ...flag, rules };
    });
  }

  deleteRule(environmentKey: string, namespaceKey: string, flagKey: string, ruleIndex: number) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const rules = [...(flag.rules ?? [])];
      assertIndex(rules, ruleIndex, 'rule', flagKey);
      rules.splice(ruleIndex, 1);
      return { ...flag, rules };
    });
  }

  // Distributions (embedded in a rule, addressed by variant key)

  createDistribution(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    ruleIndex: number,
    distribution: Distribution
  ) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const rules = [...(flag.rules ?? [])];
      assertIndex(rules, ruleIndex, 'rule', flagKey);
      const distributions = rules[ruleIndex].distributions ?? [];
      if (distributions.some(d => d.variant === distribution.variant)) {
        throw new Error(
          `distribution for variant "${distribution.variant}" already exists on rule ${ruleIndex} of flag "${flagKey}"`
        );
      }
      rules[ruleIndex] = { ...rules[ruleIndex], distributions: [...distributions, distribution] };
      return { ...flag, rules };
    });
  }

  deleteDistribution(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    ruleIndex: number,
    variant: string
  ) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const rules = [...(flag.rules ?? [])];
      assertIndex(rules, ruleIndex, 'rule', flagKey);
      const distributions = rules[ruleIndex].distributions ?? [];
      if (!distributions.some(d => d.variant === variant)) {
        throw new Error(
          `no distribution for variant "${variant}" on rule ${ruleIndex} of flag "${flagKey}"`
        );
      }
      rules[ruleIndex] = {
        ...rules[ruleIndex],
        distributions: distributions.filter(d => d.variant !== variant),
      };
      return { ...flag, rules };
    });
  }

  // Rollouts (embedded in the flag document, addressed by index)

  createRollout(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    rollout: Rollout,
    position?: number
  ) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const rollouts = [...(flag.rollouts ?? [])];
      rollouts.splice(position ?? rollouts.length, 0, rollout);
      return { ...flag, rollouts };
    });
  }

  deleteRollout(
    environmentKey: string,
    namespaceKey: string,
    flagKey: string,
    rolloutIndex: number
  ) {
    return this.mutateFlag(environmentKey, namespaceKey, flagKey, flag => {
      const rollouts = [...(flag.rollouts ?? [])];
      assertIndex(rollouts, rolloutIndex, 'rollout', flagKey);
      rollouts.splice(rolloutIndex, 1);
      return { ...flag, rollouts };
    });
  }

  // Segments

  listSegments(environmentKey: string, namespaceKey: string) {
    return this.listResources<SegmentDocument>(environmentKey, namespaceKey, SEGMENT_TYPE_URL);
  }

  getSegment(environmentKey: string, namespaceKey: string, key: string) {
    return this.getResource<SegmentDocument>(environmentKey, namespaceKey, SEGMENT_TYPE_URL, key);
  }

  createSegment(
    environmentKey: string,
    namespaceKey: string,
    segment: {
      key: string;
      name?: string;
      description?: string;
      matchType?: SegmentMatchType;
    }
  ) {
    return this.createResource<SegmentDocument>(environmentKey, namespaceKey, {
      '@type': SEGMENT_TYPE_URL,
      key: segment.key,
      name: segment.name ?? segment.key,
      description: segment.description,
      matchType: segment.matchType ?? 'ALL_MATCH_TYPE',
    });
  }

  deleteSegment(environmentKey: string, namespaceKey: string, key: string) {
    return this.deleteResource(environmentKey, namespaceKey, SEGMENT_TYPE_URL, key);
  }

  private async mutateSegment(
    environmentKey: string,
    namespaceKey: string,
    segmentKey: string,
    mutate: (segment: SegmentDocument) => SegmentDocument
  ) {
    const { resource, revision } = await this.getSegment(environmentKey, namespaceKey, segmentKey);
    return this.updateResource(environmentKey, namespaceKey, mutate(resource.payload), revision);
  }

  updateSegment(
    environmentKey: string,
    namespaceKey: string,
    segmentKey: string,
    updates: { name?: string; description?: string; matchType?: SegmentMatchType }
  ) {
    return this.mutateSegment(environmentKey, namespaceKey, segmentKey, segment => ({
      ...segment,
      name: updates.name ?? segment.name,
      description: updates.description ?? segment.description,
      matchType: updates.matchType ?? segment.matchType,
    }));
  }

  // Constraints (embedded in the segment document, addressed by index)

  createConstraint(
    environmentKey: string,
    namespaceKey: string,
    segmentKey: string,
    constraint: Constraint
  ) {
    return this.mutateSegment(environmentKey, namespaceKey, segmentKey, segment => ({
      ...segment,
      constraints: [...(segment.constraints ?? []), constraint],
    }));
  }

  deleteConstraint(
    environmentKey: string,
    namespaceKey: string,
    segmentKey: string,
    constraintIndex: number
  ) {
    return this.mutateSegment(environmentKey, namespaceKey, segmentKey, segment => {
      const constraints = [...(segment.constraints ?? [])];
      assertIndex(constraints, constraintIndex, 'constraint', segmentKey);
      constraints.splice(constraintIndex, 1);
      return { ...segment, constraints };
    });
  }

  // Evaluation

  evaluateBoolean(request: EvaluationRequest): Promise<unknown> {
    return this.request('POST', '/evaluate/v1/boolean', { body: request });
  }

  evaluateVariant(request: EvaluationRequest): Promise<unknown> {
    return this.request('POST', '/evaluate/v1/variant', { body: request });
  }

  evaluateBatch(request: BatchEvaluationRequest): Promise<unknown> {
    return this.request('POST', '/evaluate/v1/batch', { body: request });
  }
}

function assertIndex(items: unknown[], index: number, kind: string, parentKey: string): void {
  if (!Number.isInteger(index) || index < 0 || index >= items.length) {
    throw new Error(
      `${kind} index ${index} is out of range for "${parentKey}" (${items.length} ${kind}s)`
    );
  }
}

async function errorMessage(response: Response): Promise<string> {
  const fallback = `${response.status} ${response.statusText}`;
  try {
    const body = await response.text();
    if (!body) {
      return fallback;
    }
    try {
      const parsed = JSON.parse(body);
      return parsed.message ?? parsed.error ?? body;
    } catch {
      return body;
    }
  } catch {
    return fallback;
  }
}
