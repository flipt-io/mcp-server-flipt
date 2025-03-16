import * as dotenv from 'dotenv';

// Import from the generated API
import { BearerAuthAuthentication, createConfiguration } from '../generated/api/index';
import { ServerConfiguration } from '../generated/api/servers';
import {
  FlagsServiceApi,
  NamespacesServiceApi,
  SegmentsServiceApi,
  RulesServiceApi,
  RolloutsServiceApi,
  VariantsServiceApi,
  ConstraintsServiceApi,
  DistributionsServiceApi,
  EvaluationServiceApi,
} from '../generated/api/index';
import { CreateFlagRequestTypeEnum } from '../generated/api/models/CreateFlagRequest';
import { CreateSegmentRequestMatchTypeEnum } from '../generated/api/models/CreateSegmentRequest';
import { UpdateSegmentRequestMatchTypeEnum } from '../generated/api/models/UpdateSegmentRequest';

/**
 * FliptClient implementation using the generated API code
 */
export class FliptClient {
  private flagsApi: FlagsServiceApi;
  private namespacesApi: NamespacesServiceApi;
  private segmentsApi: SegmentsServiceApi;
  private rulesApi: RulesServiceApi;
  private rolloutsApi: RolloutsServiceApi;
  private variantsApi: VariantsServiceApi;
  private constraintsApi: ConstraintsServiceApi;
  private distributionsApi: DistributionsServiceApi;
  private evaluationApi: EvaluationServiceApi;

  private baseUrl: string;
  private apiKey: string | undefined;

  constructor() {
    // Load environment variables
    dotenv.config();

    this.baseUrl = process.env.FLIPT_URL || 'http://localhost:8080';
    this.apiKey = process.env.FLIPT_API_KEY || undefined;

    const serverConfig = new ServerConfiguration<{}>(this.baseUrl, {});

    const config = createConfiguration({
      baseServer: serverConfig,
    });

    if (this.apiKey) {
      config.authMethods.default = new BearerAuthAuthentication({
        getToken: () => Promise.resolve(this.apiKey as string),
      });
    }

    this.flagsApi = new FlagsServiceApi(config);
    this.namespacesApi = new NamespacesServiceApi(config);
    this.segmentsApi = new SegmentsServiceApi(config);
    this.rulesApi = new RulesServiceApi(config);
    this.rolloutsApi = new RolloutsServiceApi(config);
    this.variantsApi = new VariantsServiceApi(config);
    this.constraintsApi = new ConstraintsServiceApi(config);
    this.distributionsApi = new DistributionsServiceApi(config);
    this.evaluationApi = new EvaluationServiceApi(config);
  }

  // Namespace methods
  async createNamespace(key: string, name: string, description?: string) {
    try {
      const response = await this.namespacesApi.createNamespace({
        key,
        name,
        description,
      });
      return response;
    } catch (error) {
      console.error('Error creating namespace:', error);
      throw error;
    }
  }

  async updateNamespace(key: string, name: string, description?: string) {
    try {
      const response = await this.namespacesApi.updateNamespace(key, {
        name,
        description,
      });
      return response;
    } catch (error) {
      console.error('Error updating namespace:', error);
      throw error;
    }
  }

  async deleteNamespace(key: string) {
    try {
      await this.namespacesApi.deleteNamespace(key);
      return { success: true };
    } catch (error) {
      console.error('Error deleting namespace:', error);
      throw error;
    }
  }

  async listNamespaces() {
    try {
      const response = await this.namespacesApi.listNamespaces();

      // The response is a NamespaceList object, not a response with a data property
      if (response && response.namespaces) {
        return response.namespaces;
      } else {
        console.error('Unexpected response structure:', response);
        return [];
      }
    } catch (error) {
      console.error('Error getting namespaces:', error);
      return [];
    }
  }

  async getNamespace(key: string) {
    try {
      const response = await this.namespacesApi.getNamespace(key);
      return response;
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
  ) {
    try {
      const flagType =
        type === 'VARIANT_FLAG_TYPE'
          ? CreateFlagRequestTypeEnum.VariantFlagType
          : CreateFlagRequestTypeEnum.BooleanFlagType;

      const response = await this.flagsApi.createFlag(namespaceKey, {
        key,
        name,
        description,
        enabled: enabled ?? true,
        type: flagType,
      });
      return response;
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
  ) {
    try {
      const response = await this.flagsApi.updateFlag(namespaceKey, key, {
        name,
        description,
        enabled,
      });
      return response;
    } catch (error) {
      console.error('Error updating flag:', error);
      throw error;
    }
  }

  async deleteFlag(namespaceKey: string, key: string) {
    try {
      await this.flagsApi.deleteFlag(namespaceKey, key);
      return { success: true };
    } catch (error) {
      console.error('Error deleting flag:', error);
      throw error;
    }
  }

  async listFlags(namespaceKey: string) {
    try {
      const response = await this.flagsApi.listFlags(namespaceKey);
      if (response && response.flags) {
        return response.flags;
      } else {
        console.error('Unexpected response structure:', response);
        return [];
      }
    } catch (error) {
      console.error(`Error getting flags for namespace ${namespaceKey}:`, error);
      return [];
    }
  }

  async getFlag(namespaceKey: string, key: string) {
    try {
      const response = await this.flagsApi.getFlag(namespaceKey, key);
      return response;
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
  ) {
    try {
      const segmentMatchType =
        matchType === 'ALL_MATCH_TYPE'
          ? CreateSegmentRequestMatchTypeEnum.AllMatchType
          : CreateSegmentRequestMatchTypeEnum.AnyMatchType;

      const response = await this.segmentsApi.createSegment(namespaceKey, {
        key,
        name,
        description,
        matchType: segmentMatchType,
      });
      return response;
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
  ) {
    try {
      const segmentMatchType =
        matchType === 'ALL_MATCH_TYPE'
          ? UpdateSegmentRequestMatchTypeEnum.AllMatchType
          : UpdateSegmentRequestMatchTypeEnum.AnyMatchType;

      const response = await this.segmentsApi.updateSegment(namespaceKey, key, {
        name,
        description,
        matchType: segmentMatchType,
      });
      return response;
    } catch (error) {
      console.error('Error updating segment:', error);
      throw error;
    }
  }

  async deleteSegment(namespaceKey: string, key: string) {
    try {
      await this.segmentsApi.deleteSegment(namespaceKey, key);
      return { success: true };
    } catch (error) {
      console.error('Error deleting segment:', error);
      throw error;
    }
  }

  async listSegments(namespaceKey: string) {
    try {
      const response = await this.segmentsApi.listSegments(namespaceKey);
      if (response && response.segments) {
        return response.segments;
      } else {
        console.error('Unexpected response structure:', response);
        return [];
      }
    } catch (error) {
      console.error(`Error getting segments for namespace ${namespaceKey}:`, error);
      return [];
    }
  }

  async getSegment(namespaceKey: string, key: string) {
    try {
      const response = await this.segmentsApi.getSegment(namespaceKey, key);
      return response;
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
  ) {
    try {
      const response = await this.rulesApi.createRule(namespaceKey, flagKey, {
        segmentKey,
        rank: rank || 1,
        segmentOperator: (segmentOperator as any) || 'OR_SEGMENT_OPERATOR',
      });
      return response;
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
  ) {
    try {
      const response = await this.rulesApi.updateRule(namespaceKey, flagKey, id, {
        id,
        segmentKey,
        segmentOperator: segmentOperator as any,
      });
      return response;
    } catch (error) {
      console.error('Error updating rule:', error);
      throw error;
    }
  }

  async deleteRule(namespaceKey: string, flagKey: string, id: string) {
    try {
      await this.rulesApi.deleteRule(namespaceKey, flagKey, id);
      return { success: true };
    } catch (error) {
      console.error('Error deleting rule:', error);
      throw error;
    }
  }

  async orderRules(namespaceKey: string, flagKey: string, ruleIds: string[]) {
    try {
      await this.rulesApi.orderRules(namespaceKey, flagKey, {
        ruleIds,
      });
      return { success: true };
    } catch (error) {
      console.error('Error ordering rules:', error);
      throw error;
    }
  }

  async listRules(namespaceKey: string, flagKey: string) {
    try {
      const response = await this.rulesApi.listRules(namespaceKey, flagKey);
      if (response && response.rules) {
        return response.rules;
      } else {
        console.error('Unexpected response structure:', response);
        return [];
      }
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
  ) {
    try {
      const response = await this.rolloutsApi.createRollout(namespaceKey, flagKey, {
        rank,
        description,
        segment,
        threshold,
      });
      return response;
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
  ) {
    try {
      const response = await this.rolloutsApi.updateRollout(namespaceKey, flagKey, id, {
        id,
        description,
        segment,
        threshold,
      });
      return response;
    } catch (error) {
      console.error('Error updating rollout:', error);
      throw error;
    }
  }

  async deleteRollout(namespaceKey: string, flagKey: string, id: string) {
    try {
      await this.rolloutsApi.deleteRollout(namespaceKey, flagKey, id);
      return { success: true };
    } catch (error) {
      console.error('Error deleting rollout:', error);
      throw error;
    }
  }

  async orderRollouts(namespaceKey: string, flagKey: string, rolloutIds: string[]) {
    try {
      await this.rolloutsApi.orderRollouts(namespaceKey, flagKey, {
        rolloutIds,
      });
      return { success: true };
    } catch (error) {
      console.error('Error ordering rollouts:', error);
      throw error;
    }
  }

  async listRollouts(namespaceKey: string, flagKey: string) {
    try {
      const response = await this.rolloutsApi.listRollouts(namespaceKey, flagKey);
      // The RolloutList model has 'rules' property instead of 'rollouts'
      if (response && response.rules) {
        return response.rules;
      } else {
        console.error('Unexpected response structure:', response);
        return [];
      }
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
  ) {
    try {
      const response = await this.constraintsApi.createConstraint(namespaceKey, segmentKey, {
        type: type as any, // Using 'any' to handle the enum conversion
        property,
        operator,
        value,
        description,
      });
      return response;
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
  ) {
    try {
      const response = await this.constraintsApi.updateConstraint(namespaceKey, segmentKey, id, {
        id,
        type: type as any, // Using 'any' to handle the enum conversion
        property,
        operator,
        value,
        description,
      });
      return response;
    } catch (error) {
      console.error('Error updating constraint:', error);
      throw error;
    }
  }

  async deleteConstraint(namespaceKey: string, segmentKey: string, id: string) {
    try {
      await this.constraintsApi.deleteConstraint(namespaceKey, segmentKey, id);
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
  ) {
    try {
      const response = await this.variantsApi.createVariant(namespaceKey, flagKey, {
        key,
        name: name || key,
        description,
        attachment,
      });
      return response;
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
  ) {
    try {
      const response = await this.variantsApi.updateVariant(namespaceKey, flagKey, id, {
        id,
        key,
        name: name || key,
        description,
        attachment,
      });
      return response;
    } catch (error) {
      console.error('Error updating variant:', error);
      throw error;
    }
  }

  async deleteVariant(namespaceKey: string, flagKey: string, id: string) {
    try {
      await this.variantsApi.deleteVariant(namespaceKey, flagKey, id);
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
  ) {
    try {
      const response = await this.distributionsApi.createDistribution(
        namespaceKey,
        flagKey,
        ruleId,
        {
          variantId,
          rollout,
        }
      );
      return response;
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
  ) {
    try {
      const response = await this.distributionsApi.updateDistribution(
        namespaceKey,
        flagKey,
        ruleId,
        id,
        {
          id,
          variantId,
          rollout,
        }
      );
      return response;
    } catch (error) {
      console.error('Error updating distribution:', error);
      throw error;
    }
  }

  async deleteDistribution(namespaceKey: string, flagKey: string, ruleId: string, id: string) {
    try {
      await this.distributionsApi.deleteDistribution(namespaceKey, flagKey, ruleId, id);
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
      const response = await this.evaluationApi.evaluateBoolean({
        namespaceKey,
        flagKey,
        entityId,
        context,
      });
      return response;
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
      const response = await this.evaluationApi.evaluateVariant({
        namespaceKey,
        flagKey,
        entityId,
        context,
      });
      return response;
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
      const response = await this.evaluationApi.evaluateBatch({
        requests: requests.map(req => ({
          namespaceKey: req.namespaceKey,
          flagKey: req.flagKey,
          entityId: req.entityId,
          context: req.context || {},
        })),
      });
      return response;
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
