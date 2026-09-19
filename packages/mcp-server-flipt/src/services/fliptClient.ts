import * as dotenv from 'dotenv';

import {
  BatchEvaluationRequest,
  Flag,
  FlagList,
  Namespace,
  NamespaceList,
  Rollout,
  RolloutList,
  Rule,
  RuleList,
  Segment,
  SegmentList,
  Constraint,
  Distribution,
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
}

/**
 * Thin hand-written client for the Flipt v1 REST API.
 */
export class FliptClient {
  private baseUrl: string;
  private apiKey: string | undefined;

  constructor() {
    // Load environment variables
    dotenv.config();

    this.baseUrl = (process.env.FLIPT_URL ?? 'http://localhost:8080').replace(/\/+$/, '');
    this.apiKey = process.env.FLIPT_API_KEY || undefined;
  }

  private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const response = await fetch(this.baseUrl + path, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new FliptApiError(response.status, await errorMessage(response));
    }

    const text = await response.text();
    return (text ? JSON.parse(text) : undefined) as T;
  }

  // Namespace methods
  async createNamespace(key: string, name: string, description?: string): Promise<Namespace> {
    try {
      return await this.request<Namespace>('POST', '/api/v1/namespaces', {
        key,
        name,
        description,
      });
    } catch (error) {
      console.error('Error creating namespace:', error);
      throw error;
    }
  }

  async updateNamespace(key: string, name: string, description?: string): Promise<Namespace> {
    try {
      return await this.request<Namespace>('PUT', `/api/v1/namespaces/${enc(key)}`, {
        name,
        description,
      });
    } catch (error) {
      console.error('Error updating namespace:', error);
      throw error;
    }
  }

  async deleteNamespace(key: string) {
    try {
      await this.request<void>('DELETE', `/api/v1/namespaces/${enc(key)}`);
      return { success: true };
    } catch (error) {
      console.error('Error deleting namespace:', error);
      throw error;
    }
  }

  async listNamespaces(): Promise<Namespace[]> {
    try {
      const response = await this.request<NamespaceList>('GET', '/api/v1/namespaces');
      return response?.namespaces ?? [];
    } catch (error) {
      console.error('Error getting namespaces:', error);
      return [];
    }
  }

  async getNamespace(key: string): Promise<Namespace> {
    try {
      return await this.request<Namespace>('GET', `/api/v1/namespaces/${enc(key)}`);
    } catch (error) {
      console.error(`Error getting namespace ${key}:`, error);
      throw error;
    }
  }

  // Flag methods
  async createFlag(
    namespaceKey: string,
    key: string,
    name: string,
    description?: string,
    enabled?: boolean,
    type?: string
  ): Promise<Flag> {
    try {
      return await this.request<Flag>('POST', `/api/v1/namespaces/${enc(namespaceKey)}/flags`, {
        key,
        name,
        description,
        enabled: enabled ?? true,
        type: type === 'VARIANT_FLAG_TYPE' ? 'VARIANT_FLAG_TYPE' : 'BOOLEAN_FLAG_TYPE',
      });
    } catch (error) {
      console.error('Error creating flag:', error);
      throw error;
    }
  }

  async updateFlag(
    namespaceKey: string,
    key: string,
    name: string,
    description?: string,
    enabled?: boolean
  ): Promise<Flag> {
    try {
      return await this.request<Flag>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(key)}`,
        {
          name,
          description,
          enabled,
        }
      );
    } catch (error) {
      console.error('Error updating flag:', error);
      throw error;
    }
  }

  async deleteFlag(namespaceKey: string, key: string) {
    try {
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(key)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting flag:', error);
      throw error;
    }
  }

  async listFlags(namespaceKey: string): Promise<Flag[]> {
    try {
      const response = await this.request<FlagList>(
        'GET',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags`
      );
      return response?.flags ?? [];
    } catch (error) {
      console.error(`Error getting flags for namespace ${namespaceKey}:`, error);
      return [];
    }
  }

  async getFlag(namespaceKey: string, key: string): Promise<Flag> {
    try {
      return await this.request<Flag>(
        'GET',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(key)}`
      );
    } catch (error) {
      console.error(`Error getting flag ${key} in namespace ${namespaceKey}:`, error);
      throw error;
    }
  }

  // Segment methods
  async createSegment(
    namespaceKey: string,
    key: string,
    name: string,
    description?: string,
    matchType?: string
  ): Promise<Segment> {
    try {
      return await this.request<Segment>(
        'POST',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments`,
        {
          key,
          name,
          description,
          matchType: matchType === 'ALL_MATCH_TYPE' ? 'ALL_MATCH_TYPE' : 'ANY_MATCH_TYPE',
        }
      );
    } catch (error) {
      console.error('Error creating segment:', error);
      throw error;
    }
  }

  async updateSegment(
    namespaceKey: string,
    key: string,
    name: string,
    description?: string,
    matchType?: string
  ): Promise<Segment> {
    try {
      return await this.request<Segment>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments/${enc(key)}`,
        {
          name,
          description,
          matchType: matchType === 'ALL_MATCH_TYPE' ? 'ALL_MATCH_TYPE' : 'ANY_MATCH_TYPE',
        }
      );
    } catch (error) {
      console.error('Error updating segment:', error);
      throw error;
    }
  }

  async deleteSegment(namespaceKey: string, key: string) {
    try {
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments/${enc(key)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting segment:', error);
      throw error;
    }
  }

  async listSegments(namespaceKey: string): Promise<Segment[]> {
    try {
      const response = await this.request<SegmentList>(
        'GET',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments`
      );
      return response?.segments ?? [];
    } catch (error) {
      console.error(`Error getting segments for namespace ${namespaceKey}:`, error);
      return [];
    }
  }

  async getSegment(namespaceKey: string, key: string): Promise<Segment> {
    try {
      return await this.request<Segment>(
        'GET',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments/${enc(key)}`
      );
    } catch (error) {
      console.error(`Error getting segment ${key} in namespace ${namespaceKey}:`, error);
      throw error;
    }
  }

  // Rule methods
  async createRule(
    namespaceKey: string,
    flagKey: string,
    segmentKey: string,
    rank?: number,
    segmentOperator?: string
  ): Promise<Rule> {
    try {
      return await this.request<Rule>(
        'POST',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules`,
        {
          segmentKey,
          rank: rank || 1,
          segmentOperator: segmentOperator || 'OR_SEGMENT_OPERATOR',
        }
      );
    } catch (error) {
      console.error('Error creating rule:', error);
      throw error;
    }
  }

  async updateRule(
    namespaceKey: string,
    flagKey: string,
    id: string,
    segmentKey?: string,
    segmentOperator?: string
  ): Promise<Rule> {
    try {
      return await this.request<Rule>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules/${enc(id)}`,
        {
          id,
          segmentKey,
          segmentOperator,
        }
      );
    } catch (error) {
      console.error('Error updating rule:', error);
      throw error;
    }
  }

  async deleteRule(namespaceKey: string, flagKey: string, id: string) {
    try {
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules/${enc(id)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting rule:', error);
      throw error;
    }
  }

  async orderRules(namespaceKey: string, flagKey: string, ruleIds: string[]) {
    try {
      await this.request<void>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules/order`,
        { ruleIds }
      );
      return { success: true };
    } catch (error) {
      console.error('Error ordering rules:', error);
      throw error;
    }
  }

  async listRules(namespaceKey: string, flagKey: string): Promise<Rule[]> {
    try {
      const response = await this.request<RuleList>(
        'GET',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules`
      );
      return response?.rules ?? [];
    } catch (error) {
      console.error(`Error getting rules for flag ${flagKey} in namespace ${namespaceKey}:`, error);
      return [];
    }
  }

  // Rollout methods
  async createRollout(
    namespaceKey: string,
    flagKey: string,
    rank: number,
    description?: string,
    segment?: any,
    threshold?: any
  ): Promise<Rollout> {
    try {
      return await this.request<Rollout>(
        'POST',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rollouts`,
        {
          rank,
          description,
          segment,
          threshold,
        }
      );
    } catch (error) {
      console.error('Error creating rollout:', error);
      throw error;
    }
  }

  async updateRollout(
    namespaceKey: string,
    flagKey: string,
    id: string,
    description?: string,
    segment?: any,
    threshold?: any
  ): Promise<Rollout> {
    try {
      return await this.request<Rollout>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rollouts/${enc(id)}`,
        {
          id,
          description,
          segment,
          threshold,
        }
      );
    } catch (error) {
      console.error('Error updating rollout:', error);
      throw error;
    }
  }

  async deleteRollout(namespaceKey: string, flagKey: string, id: string) {
    try {
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rollouts/${enc(id)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting rollout:', error);
      throw error;
    }
  }

  async orderRollouts(namespaceKey: string, flagKey: string, rolloutIds: string[]) {
    try {
      await this.request<void>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rollouts/order`,
        { rolloutIds }
      );
      return { success: true };
    } catch (error) {
      console.error('Error ordering rollouts:', error);
      throw error;
    }
  }

  async listRollouts(namespaceKey: string, flagKey: string): Promise<Rollout[]> {
    try {
      const response = await this.request<RolloutList>(
        'GET',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rollouts`
      );
      // Quirk of the Flipt v1 API: the rollout list nests rollouts under 'rules'
      return response?.rules ?? [];
    } catch (error) {
      console.error(
        `Error getting rollouts for flag ${flagKey} in namespace ${namespaceKey}:`,
        error
      );
      return [];
    }
  }

  // Constraint methods
  async createConstraint(
    namespaceKey: string,
    segmentKey: string,
    type: string,
    property: string,
    operator: string,
    value?: string,
    description?: string
  ): Promise<Constraint> {
    try {
      return await this.request<Constraint>(
        'POST',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments/${enc(segmentKey)}/constraints`,
        {
          type,
          property,
          operator,
          value,
          description,
        }
      );
    } catch (error) {
      console.error('Error creating constraint:', error);
      throw error;
    }
  }

  async updateConstraint(
    namespaceKey: string,
    segmentKey: string,
    id: string,
    type: string,
    property: string,
    operator: string,
    value?: string,
    description?: string
  ): Promise<Constraint> {
    try {
      return await this.request<Constraint>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments/${enc(segmentKey)}/constraints/${enc(id)}`,
        {
          id,
          type,
          property,
          operator,
          value,
          description,
        }
      );
    } catch (error) {
      console.error('Error updating constraint:', error);
      throw error;
    }
  }

  async deleteConstraint(namespaceKey: string, segmentKey: string, id: string) {
    try {
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/segments/${enc(segmentKey)}/constraints/${enc(id)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting constraint:', error);
      throw error;
    }
  }

  // Variant methods
  async createVariant(
    namespaceKey: string,
    flagKey: string,
    key: string,
    name?: string,
    description?: string,
    attachment?: string
  ): Promise<Variant> {
    try {
      return await this.request<Variant>(
        'POST',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/variants`,
        {
          key,
          name: name || key,
          description,
          attachment,
        }
      );
    } catch (error) {
      console.error('Error creating variant:', error);
      throw error;
    }
  }

  async updateVariant(
    namespaceKey: string,
    flagKey: string,
    id: string,
    key: string,
    name?: string,
    description?: string,
    attachment?: string
  ): Promise<Variant> {
    try {
      return await this.request<Variant>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/variants/${enc(id)}`,
        {
          id,
          key,
          name: name || key,
          description,
          attachment,
        }
      );
    } catch (error) {
      console.error('Error updating variant:', error);
      throw error;
    }
  }

  async deleteVariant(namespaceKey: string, flagKey: string, id: string) {
    try {
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/variants/${enc(id)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting variant:', error);
      throw error;
    }
  }

  // Distribution methods
  async createDistribution(
    namespaceKey: string,
    flagKey: string,
    ruleId: string,
    variantId: string,
    rollout: number
  ): Promise<Distribution> {
    try {
      return await this.request<Distribution>(
        'POST',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules/${enc(ruleId)}/distributions`,
        {
          variantId,
          rollout,
        }
      );
    } catch (error) {
      console.error('Error creating distribution:', error);
      throw error;
    }
  }

  async updateDistribution(
    namespaceKey: string,
    flagKey: string,
    ruleId: string,
    id: string,
    variantId: string,
    rollout: number
  ): Promise<Distribution> {
    try {
      return await this.request<Distribution>(
        'PUT',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules/${enc(ruleId)}/distributions/${enc(id)}`,
        {
          id,
          variantId,
          rollout,
        }
      );
    } catch (error) {
      console.error('Error updating distribution:', error);
      throw error;
    }
  }

  async deleteDistribution(
    namespaceKey: string,
    flagKey: string,
    ruleId: string,
    id: string,
    variantId?: string
  ) {
    try {
      // The API requires the distribution's variantId as a query param; look
      // it up from the rule when the caller doesn't have it.
      let variant = variantId;
      if (!variant) {
        const rules = await this.listRules(namespaceKey, flagKey);
        const rule = rules.find(r => r.id === ruleId);
        variant = rule?.distributions?.find(d => d.id === id)?.variantId;
        if (!variant) {
          throw new Error(`distribution ${id} not found on rule ${ruleId} of flag ${flagKey}`);
        }
      }
      await this.request<void>(
        'DELETE',
        `/api/v1/namespaces/${enc(namespaceKey)}/flags/${enc(flagKey)}/rules/${enc(ruleId)}/distributions/${enc(id)}?variantId=${enc(variant)}`
      );
      return { success: true };
    } catch (error) {
      console.error('Error deleting distribution:', error);
      throw error;
    }
  }

  // Evaluation methods
  async evaluateBoolean(
    namespaceKey: string,
    flagKey: string,
    entityId: string,
    context: Record<string, string> = {}
  ) {
    try {
      return await this.request<unknown>('POST', '/evaluate/v1/boolean', {
        namespaceKey,
        flagKey,
        entityId,
        context,
      });
    } catch (error) {
      console.error('Error evaluating boolean flag:', error);
      throw error;
    }
  }

  async evaluateVariant(
    namespaceKey: string,
    flagKey: string,
    entityId: string,
    context: Record<string, string> = {}
  ) {
    try {
      return await this.request<unknown>('POST', '/evaluate/v1/variant', {
        namespaceKey,
        flagKey,
        entityId,
        context,
      });
    } catch (error) {
      console.error('Error evaluating variant flag:', error);
      throw error;
    }
  }

  async evaluateBatch(
    requests: Array<{
      namespaceKey: string;
      flagKey: string;
      entityId: string;
      context?: Record<string, string>;
    }>
  ) {
    try {
      const batch: BatchEvaluationRequest = {
        requests: requests.map(req => ({
          namespaceKey: req.namespaceKey,
          flagKey: req.flagKey,
          entityId: req.entityId,
          context: req.context || {},
        })),
      };
      return await this.request<unknown>('POST', '/evaluate/v1/batch', batch);
    } catch (error) {
      console.error('Error evaluating batch:', error);
      throw error;
    }
  }

  // Utility methods
  getBaseUrl(): string {
    return this.baseUrl;
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
