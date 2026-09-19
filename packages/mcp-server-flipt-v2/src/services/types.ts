// Hand-written types for the Flipt v2 REST API, mirroring the OpenAPI specs in
// https://github.com/flipt-io/flipt/tree/v2/rpc/v2 (environments) and
// https://github.com/flipt-io/flipt/blob/v2/rpc/flipt/openapi.yaml (evaluation).

export type FlagType = 'VARIANT_FLAG_TYPE' | 'BOOLEAN_FLAG_TYPE';
export type SegmentMatchType = 'ALL_MATCH_TYPE' | 'ANY_MATCH_TYPE';
export type SegmentOperator = 'OR_SEGMENT_OPERATOR' | 'AND_SEGMENT_OPERATOR';
export type RolloutType = 'SEGMENT_ROLLOUT_TYPE' | 'THRESHOLD_ROLLOUT_TYPE';
export type ConstraintComparisonType =
  | 'STRING_COMPARISON_TYPE'
  | 'NUMBER_COMPARISON_TYPE'
  | 'BOOLEAN_COMPARISON_TYPE'
  | 'DATETIME_COMPARISON_TYPE'
  | 'ENTITY_ID_COMPARISON_TYPE';

export const FLAG_TYPE_URL = 'flipt.core.Flag';
export const SEGMENT_TYPE_URL = 'flipt.core.Segment';

export interface Variant {
  key: string;
  name?: string;
  description?: string;
  attachment?: unknown;
}

// Distributions reference variants by key; rules reference segments by key.
// Unlike v1, none of the sub-entities embedded in a flag/segment have ids.
export interface Distribution {
  variant: string;
  rollout: number;
}

export interface Rule {
  segments: string[];
  segmentOperator?: SegmentOperator;
  distributions?: Distribution[];
}

export interface RolloutSegment {
  segments: string[];
  value?: boolean;
  segmentOperator?: SegmentOperator;
}

export interface RolloutThreshold {
  percentage: number;
  value: boolean;
}

export interface Rollout {
  type: RolloutType;
  description?: string;
  segment?: RolloutSegment;
  threshold?: RolloutThreshold;
}

export interface Constraint {
  type: ConstraintComparisonType;
  property: string;
  operator: string;
  value?: string;
  description?: string;
}

// In v2, flags and segments are stored as whole documents: variants, rules,
// rollouts, and constraints live inside them rather than behind their own
// endpoints.
export interface FlagDocument {
  '@type': typeof FLAG_TYPE_URL;
  key: string;
  name?: string;
  description?: string;
  type?: FlagType;
  enabled?: boolean;
  variants?: Variant[];
  rules?: Rule[];
  rollouts?: Rollout[];
  defaultVariant?: string;
  metadata?: Record<string, unknown>;
}

export interface SegmentDocument {
  '@type': typeof SEGMENT_TYPE_URL;
  key: string;
  name?: string;
  description?: string;
  matchType?: SegmentMatchType;
  constraints?: Constraint[];
}

export type ResourcePayload = FlagDocument | SegmentDocument;

export interface Resource<P extends ResourcePayload = ResourcePayload> {
  namespaceKey: string;
  key: string;
  payload: P;
}

// Every read returns a revision; every write must send the revision it read.
// Flipt v2 uses it for optimistic concurrency control.
export interface ResourceResponse<P extends ResourcePayload = ResourcePayload> {
  resource: Resource<P>;
  revision: string;
}

export interface ListResourcesResponse<P extends ResourcePayload = ResourcePayload> {
  resources: Resource<P>[];
  revision: string;
}

export interface DeleteResponse {
  revision: string;
}

export interface Namespace {
  key: string;
  name?: string;
  description?: string;
  protected?: boolean;
}

export interface NamespaceResponse {
  namespace: Namespace;
  revision: string;
}

export interface ListNamespacesResponse {
  items: Namespace[];
  revision: string;
}

export interface EnvironmentConfiguration {
  ref?: string;
  directory?: string;
  remote?: string;
  base?: string;
  scm?: string;
}

export interface Environment {
  key: string;
  name?: string;
  default?: boolean;
  configuration?: EnvironmentConfiguration;
}

export interface ListEnvironmentsResponse {
  environments: Environment[];
}

export interface EnvironmentProposalDetails {
  url?: string;
  state?: string;
}

export interface BranchEnvironment {
  environmentKey: string;
  key: string;
  ref?: string;
  proposal?: EnvironmentProposalDetails;
}

export interface ListEnvironmentBranchesResponse {
  branches: BranchEnvironment[];
}

export interface Change {
  revision?: string;
  message?: string;
  authorName?: string;
  authorEmail?: string;
  timestamp?: string;
  scmUrl?: string;
}

export interface ListBranchedEnvironmentChangesResponse {
  changes: Change[];
  proposalTitle?: string;
  proposalBody?: string;
}

// Flipt v2 serves evaluation on the /evaluate/v1 endpoints, but
// environmentKey is required in every request.
export interface EvaluationRequest {
  environmentKey: string;
  namespaceKey: string;
  flagKey: string;
  entityId: string;
  context: Record<string, string>;
  reference?: string;
  requestId?: string;
}

export interface BatchEvaluationRequest {
  requests: EvaluationRequest[];
  requestId?: string;
  reference?: string;
}
