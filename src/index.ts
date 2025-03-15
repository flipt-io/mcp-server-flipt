import express from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import dotenv from 'dotenv';
import { FliptClient } from './services/fliptClient';

// Load environment variables
dotenv.config();

const PORT = process.env.MCP_SERVER_PORT ? parseInt(process.env.MCP_SERVER_PORT) : 3000;
const HOST = process.env.MCP_SERVER_HOST || 'localhost';

// Create Flipt client
const fliptClient = new FliptClient();

// Create MCP server
const server = new McpServer({
  name: 'Flipt MCP Server',
  version: '0.1.0',
});

// Define tools for reading, creating, updating, and deleting resources

// Namespace tools
server.tool('list_namespaces', {}, async args => {
  const namespaces = await fliptClient.listNamespaces();
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(namespaces, null, 2),
      },
    ],
  };
});
server.tool(
  'create_namespace',
  {
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
  },
  async args => {
    try {
      const namespace = await fliptClient.createNamespace(args.key, args.name, args.description);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(namespace, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.key}`,
        },
      };
    } catch (error: any) {
      console.error('Error creating namespace:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create namespace: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'update_namespace',
  {
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
  },
  async args => {
    try {
      const namespace = await fliptClient.updateNamespace(args.key, args.name, args.description);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(namespace, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.key}`,
        },
      };
    } catch (error: any) {
      console.error('Error updating namespace:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to update namespace: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_namespace',
  {
    key: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteNamespace(args.key);
      return {
        content: [
          {
            type: 'text',
            text: `Deleted namespace ${args.key}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting namespace:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete namespace: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Flag tools
server.tool(
  'list_flags',
  {
    namespaceKey: z.string().min(1),
  },
  async args => {
    try {
      const flags = await fliptClient.listFlags(args.namespaceKey);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(flags, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/flags`,
        },
      };
    } catch (error: any) {
      console.error(`Error listing flags for namespace ${args.namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to list flags: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'get_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
  },
  async args => {
    try {
      const flag = await fliptClient.getFlag(args.namespaceKey, args.flagKey);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(flag, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/flags/${args.flagKey}`,
        },
      };
    } catch (error: any) {
      console.error(`Error getting flag ${args.flagKey} in namespace ${args.namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to get flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'create_flag',
  {
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    enabled: z.boolean().optional(),
    type: z.enum(['VARIANT_FLAG_TYPE', 'BOOLEAN_FLAG_TYPE']),
  },
  async args => {
    try {
      const flag = await fliptClient.createFlag(
        args.namespaceKey,
        args.key,
        args.name,
        args.description,
        args.enabled,
        args.type
      );
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(flag, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/flags/${args.key}`,
        },
      };
    } catch (error: any) {
      console.error('Error creating flag:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'update_flag',
  {
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    enabled: z.boolean().optional(),
  },
  async args => {
    try {
      const flag = await fliptClient.updateFlag(
        args.namespaceKey,
        args.key,
        args.name,
        args.description,
        args.enabled
      );
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(flag, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/flags/${args.key}`,
        },
      };
    } catch (error: any) {
      console.error('Error updating flag:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to update flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_flag',
  {
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteFlag(args.namespaceKey, args.key);
      return {
        content: [
          {
            type: 'text',
            text: `Deleted flag ${args.key} in namespace ${args.namespaceKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting flag:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'toggle_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    enabled: z.boolean(),
  },
  async args => {
    try {
      const currentFlag = await fliptClient.getFlag(args.namespaceKey, args.flagKey);
      await fliptClient.updateFlag(
        args.namespaceKey,
        args.flagKey,
        currentFlag.name || 'Unnamed Flag',
        currentFlag.description,
        args.enabled
      );
      return {
        content: [
          {
            type: 'text',
            text: `Flag ${args.flagKey} in namespace ${args.namespaceKey} is now ${args.enabled ? 'enabled' : 'disabled'}`,
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/flags/${args.flagKey}`,
        },
      };
    } catch (error: any) {
      console.error('Error toggling flag:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to toggle flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Segment tools
server.tool(
  'list_segments',
  {
    namespaceKey: z.string().min(1),
  },
  async args => {
    try {
      const segments = await fliptClient.listSegments(args.namespaceKey);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(segments, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/segments`,
        },
      };
    } catch (error: any) {
      console.error(`Error listing segments for namespace ${args.namespaceKey}:`, error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to list segments: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'get_segment',
  {
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
  },
  async args => {
    try {
      const segment = await fliptClient.getSegment(args.namespaceKey, args.segmentKey);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(segment, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/segments/${args.segmentKey}`,
        },
      };
    } catch (error: any) {
      console.error(
        `Error getting segment ${args.segmentKey} in namespace ${args.namespaceKey}:`,
        error
      );
      return {
        content: [
          {
            type: 'text',
            text: `Failed to get segment: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'create_segment',
  {
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    matchType: z.enum(['ALL_MATCH_TYPE', 'ANY_MATCH_TYPE']),
  },
  async args => {
    try {
      const segment = await fliptClient.createSegment(
        args.namespaceKey,
        args.key,
        args.name,
        args.description,
        args.matchType
      );
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(segment, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/segments/${args.key}`,
        },
      };
    } catch (error: any) {
      console.error('Error creating segment:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create segment: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'update_segment',
  {
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    matchType: z.enum(['ALL_MATCH_TYPE', 'ANY_MATCH_TYPE']),
  },
  async args => {
    try {
      const segment = await fliptClient.updateSegment(
        args.namespaceKey,
        args.key,
        args.name,
        args.description,
        args.matchType
      );
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(segment, null, 2),
          },
        ],
        _meta: {
          uri: `flipt://namespaces/${args.namespaceKey}/segments/${args.key}`,
        },
      };
    } catch (error: any) {
      console.error('Error updating segment:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to update segment: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_segment',
  {
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteSegment(args.namespaceKey, args.key);
      return {
        content: [
          {
            type: 'text',
            text: `Deleted segment ${args.key} in namespace ${args.namespaceKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting segment:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete segment: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Evaluation tools
server.tool(
  'evaluate_boolean_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    entityId: z.string().min(1),
    context: z.record(z.string()).optional(),
  },
  async args => {
    try {
      const response = await fliptClient.evaluateBoolean(
        args.namespaceKey,
        args.flagKey,
        args.entityId,
        args.context
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error evaluating boolean flag:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to evaluate boolean flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'evaluate_variant_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    entityId: z.string().min(1),
    context: z.record(z.string()).optional(),
  },
  async args => {
    try {
      const response = await fliptClient.evaluateVariant(
        args.namespaceKey,
        args.flagKey,
        args.entityId,
        args.context
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error evaluating variant flag:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to evaluate variant flag: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'evaluate_batch',
  {
    requests: z.array(
      z.object({
        namespaceKey: z.string().min(1),
        flagKey: z.string().min(1),
        entityId: z.string().min(1),
        context: z.record(z.string()).optional(),
      })
    ),
  },
  async args => {
    try {
      const response = await fliptClient.evaluateBatch(args.requests);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error evaluating batch:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to evaluate batch: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Constraint tools
server.tool(
  'create_constraint',
  {
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
    type: z.enum([
      'STRING_COMPARISON_TYPE',
      'NUMBER_COMPARISON_TYPE',
      'BOOLEAN_COMPARISON_TYPE',
      'DATETIME_COMPARISON_TYPE',
      'ENTITY_ID_COMPARISON_TYPE',
    ]),
    property: z.string().min(1),
    operator: z.string().min(1),
    value: z.string().optional(),
    description: z.string().optional(),
  },
  async args => {
    try {
      const response = await fliptClient.createConstraint(
        args.namespaceKey,
        args.segmentKey,
        args.type,
        args.property,
        args.operator,
        args.value,
        args.description
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error creating constraint:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create constraint: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_constraint',
  {
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
    constraintId: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteConstraint(args.namespaceKey, args.segmentKey, args.constraintId);

      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted constraint ${args.constraintId} from segment ${args.segmentKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting constraint:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete constraint: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Variant tools
server.tool(
  'create_variant',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().optional(),
    description: z.string().optional(),
    attachment: z.string().optional(),
  },
  async args => {
    try {
      const response = await fliptClient.createVariant(
        args.namespaceKey,
        args.flagKey,
        args.key,
        args.name,
        args.description,
        args.attachment
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error creating variant:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create variant: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_variant',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    variantId: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteVariant(args.namespaceKey, args.flagKey, args.variantId);

      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted variant ${args.variantId} from flag ${args.flagKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting variant:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete variant: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Rule tools
server.tool(
  'create_rule',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    segmentKey: z.string().min(1),
    rank: z.number().int().optional(),
    segmentOperator: z.enum(['OR_SEGMENT_OPERATOR', 'AND_SEGMENT_OPERATOR']).optional(),
  },
  async args => {
    try {
      const response = await fliptClient.createRule(
        args.namespaceKey,
        args.flagKey,
        args.segmentKey,
        args.rank,
        args.segmentOperator
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error creating rule:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create rule: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_rule',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleId: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteRule(args.namespaceKey, args.flagKey, args.ruleId);

      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted rule ${args.ruleId} from flag ${args.flagKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting rule:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete rule: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'order_rules',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleIds: z.array(z.string().min(1)),
  },
  async args => {
    try {
      await fliptClient.orderRules(args.namespaceKey, args.flagKey, args.ruleIds);

      return {
        content: [
          {
            type: 'text',
            text: `Successfully reordered rules for flag ${args.flagKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error ordering rules:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to order rules: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Distribution tools
server.tool(
  'create_distribution',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleId: z.string().min(1),
    variantId: z.string().min(1),
    rollout: z.number().min(0).max(100),
  },
  async args => {
    try {
      const response = await fliptClient.createDistribution(
        args.namespaceKey,
        args.flagKey,
        args.ruleId,
        args.variantId,
        args.rollout
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error creating distribution:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create distribution: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_distribution',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleId: z.string().min(1),
    distributionId: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteDistribution(
        args.namespaceKey,
        args.flagKey,
        args.ruleId,
        args.distributionId
      );

      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted distribution ${args.distributionId} from rule ${args.ruleId}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting distribution:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete distribution: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Rollout tools
server.tool(
  'create_rollout',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    rank: z.number().int().min(1),
    description: z.string().optional(),
    segment: z
      .object({
        segmentKey: z.string().min(1),
        value: z.boolean().optional(),
      })
      .optional(),
    threshold: z
      .object({
        percentage: z.number().min(0).max(100),
        value: z.boolean(),
      })
      .optional(),
  },
  async args => {
    try {
      const response = await fliptClient.createRollout(
        args.namespaceKey,
        args.flagKey,
        args.rank,
        args.description,
        args.segment,
        args.threshold
      );

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error: any) {
      console.error('Error creating rollout:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create rollout: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'delete_rollout',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    rolloutId: z.string().min(1),
  },
  async args => {
    try {
      await fliptClient.deleteRollout(args.namespaceKey, args.flagKey, args.rolloutId);

      return {
        content: [
          {
            type: 'text',
            text: `Successfully deleted rollout ${args.rolloutId} from flag ${args.flagKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error deleting rollout:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to delete rollout: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  'order_rollouts',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    rolloutIds: z.array(z.string().min(1)),
  },
  async args => {
    try {
      await fliptClient.orderRollouts(args.namespaceKey, args.flagKey, args.rolloutIds);

      return {
        content: [
          {
            type: 'text',
            text: `Successfully reordered rollouts for flag ${args.flagKey}`,
          },
        ],
      };
    } catch (error: any) {
      console.error('Error ordering rollouts:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Failed to order rollouts: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

// Now let's add some prompts for common tasks
server.prompt(
  'create_boolean_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    flagName: z.string().min(1),
    description: z.string().optional(),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Create a new boolean flag named "${args.flagName}" with key "${args.flagKey}" in namespace "${args.namespaceKey}"${args.description ? ` with description "${args.description}"` : ''}.`,
        },
      },
    ],
  })
);

server.prompt(
  'create_variant_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    flagName: z.string().min(1),
    description: z.string().optional(),
    variantKeys: z.string().optional(),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Create a new variant flag named "${args.flagName}" with key "${args.flagKey}" in namespace "${args.namespaceKey}"${args.description ? ` with description "${args.description}"` : ''}${args.variantKeys ? ` with variants: ${args.variantKeys}` : ''}.`,
        },
      },
    ],
  })
);

server.prompt(
  'create_segment',
  {
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
    segmentName: z.string().min(1),
    description: z.string().optional(),
    constraintDescription: z.string().optional(),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Create a new segment named "${args.segmentName}" with key "${args.segmentKey}" in namespace "${args.namespaceKey}"${args.description ? ` with description "${args.description}"` : ''}${args.constraintDescription ? ` with constraints: ${args.constraintDescription}` : ''}.`,
        },
      },
    ],
  })
);

server.prompt(
  'evaluate_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    entityId: z.string().min(1),
    contextDescription: z.string().optional(),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Evaluate flag "${args.flagKey}" in namespace "${args.namespaceKey}" for entity "${args.entityId}"${args.contextDescription ? ` with context: ${args.contextDescription}` : ''}.`,
        },
      },
    ],
  })
);

server.prompt(
  'toggle_flag',
  {
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    enabled: z.enum(['true', 'false']),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `${args.enabled === 'true' ? 'Enable' : 'Disable'} flag "${args.flagKey}" in namespace "${args.namespaceKey}".`,
        },
      },
    ],
  })
);

// Function to start the server
function startServer() {
  // Set up HTTP server with STDIO transport
  const app = express();
  app.use(express.json());

  // Add a simple status endpoint
  app.get('/status', (req, res) => {
    res.json({ status: 'ok', server: 'Flipt MCP Server', version: '0.1.0' });
  });

  // Connect the server to STDIO transport
  const transport = new StdioServerTransport();
  server.connect(transport);

  // Start the HTTP server (for the status endpoint)
  const httpServer = app.listen(PORT, HOST, () => {
    console.log(`Flipt MCP Server running at http://${HOST}:${PORT}`);
    console.log(`Status endpoint available at http://${HOST}:${PORT}/status`);
    console.log('STDIO transport active for MCP communication');
  });

  return httpServer;
}

// If this file is run directly, start the server
if (require.main === module) {
  startServer();
}

// Export for use in other modules
export { server, startServer };
