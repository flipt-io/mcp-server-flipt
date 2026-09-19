// Hand-written types for the Flipt v1 REST API, mirroring the OpenAPI spec at
// https://github.com/flipt-io/flipt/blob/main/rpc/flipt/openapi.yaml (v1.x).

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

export interface Namespace {
  key: string;
  name?: string;
  description?: string;
  protected?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface NamespaceList {
  namespaces: Namespace[];
  nextPageToken?: string;
  totalCount?: number;
}

export interface Variant {
  id: string;
  namespaceKey?: string;
  flagKey?: string;
  key: string;
  name?: string;
  description?: string;
  attachment?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Flag {
  namespaceKey?: string;
  key: string;
  name?: string;
  description?: string;
  enabled?: boolean;
  type?: FlagType;
  variants?: Variant[];
  defaultVariant?: Variant;
  metadata?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

export interface FlagList {
  flags: Flag[];
  nextPageToken?: string;
  totalCount?: number;
}

export interface Constraint {
  id: string;
  namespaceKey?: string;
  segmentKey?: string;
  type: ConstraintComparisonType;
  property: string;
  operator: string;
  value?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Segment {
  namespaceKey?: string;
  key: string;
  name?: string;
  description?: string;
  matchType?: SegmentMatchType;
  constraints?: Constraint[];
  createdAt?: string;
  updatedAt?: string;
}

export interface SegmentList {
  segments: Segment[];
  nextPageToken?: string;
  totalCount?: number;
}

export interface Distribution {
  id: string;
  ruleId?: string;
  variantId: string;
  rollout: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Rule {
  id: string;
  namespaceKey?: string;
  flagKey?: string;
  segmentKey?: string;
  segmentKeys?: string[];
  segmentOperator?: SegmentOperator;
  distributions?: Distribution[];
  rank?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface RuleList {
  rules: Rule[];
  nextPageToken?: string;
  totalCount?: number;
}

export interface RolloutSegment {
  segmentKey?: string;
  segmentKeys?: string[];
  segmentOperator?: SegmentOperator;
  value?: boolean;
}

export interface RolloutThreshold {
  percentage: number;
  value: boolean;
}

export interface Rollout {
  id: string;
  namespaceKey?: string;
  flagKey?: string;
  type?: RolloutType;
  rank?: number;
  description?: string;
  segment?: RolloutSegment;
  threshold?: RolloutThreshold;
  createdAt?: string;
  updatedAt?: string;
}

// Quirk preserved from the Flipt v1 API: the rollout list response exposes
// rollouts under a `rules` property.
export interface RolloutList {
  rules: Rollout[];
  nextPageToken?: string;
}

export interface EvaluationRequest {
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
