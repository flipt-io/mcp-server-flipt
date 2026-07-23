import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import dotenv from 'dotenv';
import { FliptApiError, FliptClientV2 } from './services/fliptClientV2';
import { Rollout } from './services/types';
import { VERSION } from './version';

dotenv.config();

const fliptClient = new FliptClientV2();

const server = new McpServer(
  {
    name: 'Flipt v2 MCP Server',
    version: VERSION,
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// The environment argument is shared by almost every tool; when omitted it
// falls back to FLIPT_ENVIRONMENT (or 'default').
const environmentKey = z
  .string()
  .min(1)
  .optional()
  .describe("Environment key; defaults to the server's configured environment");

type ToolResult = {
  content: { type: 'text'; text: string }[];
  _meta?: { uri: string };
  isError?: boolean;
};

function ok(data: unknown, uri?: string): ToolResult {
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(data, null, 2),
      },
    ],
    ...(uri ? { _meta: { uri } } : {}),
  };
}

function fail(action: string, error: any): ToolResult {
  console.error(`Error ${action}:`, error);
  let message: string = error?.message ?? String(error);
  if (error instanceof FliptApiError && error.isConflict) {
    message += ' (the resource changed since it was read; fetch it again and retry)';
  }
  return {
    content: [
      {
        type: 'text',
        text: `Failed to ${action}: ${message}`,
      },
    ],
    isError: true,
  };
}

function uri(env: string, ...parts: string[]): string {
  return ['flipt:/', 'environments', env, ...parts].join('/');
}

// Environment tools

server.tool('list_environments', 'List all environments', {}, async _args => {
  try {
    return ok(await fliptClient.listEnvironments());
  } catch (error: any) {
    return fail('list environments', error);
  }
});

server.tool(
  'list_branches',
  'List branch environments of an environment',
  { environmentKey },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(await fliptClient.listBranches(env));
    } catch (error: any) {
      return fail(`list branches of environment ${env}`, error);
    }
  }
);

server.tool(
  'create_branch',
  'Create a branch environment for making isolated changes',
  {
    environmentKey,
    key: z.string().min(1).describe('The branch key'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const branch = await fliptClient.createBranch(env, args.key);
      return ok(branch, uri(env, 'branches', args.key));
    } catch (error: any) {
      return fail(`create branch ${args.key} in environment ${env}`, error);
    }
  }
);

server.tool(
  'delete_branch',
  'Delete a branch environment',
  {
    environmentKey,
    branchKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      await fliptClient.deleteBranch(env, args.branchKey);
      return ok({ deleted: args.branchKey });
    } catch (error: any) {
      return fail(`delete branch ${args.branchKey} in environment ${env}`, error);
    }
  }
);

server.tool(
  'propose_branch',
  'Propose the changes on a branch environment back to its base (opens a merge proposal in the configured SCM)',
  {
    environmentKey,
    branchKey: z.string().min(1),
    title: z.string().optional(),
    body: z.string().optional(),
    draft: z.boolean().optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const proposal = await fliptClient.proposeBranch(env, args.branchKey, {
        title: args.title,
        body: args.body,
        draft: args.draft,
      });
      return ok(proposal);
    } catch (error: any) {
      return fail(`propose branch ${args.branchKey} in environment ${env}`, error);
    }
  }
);

server.tool(
  'list_branch_changes',
  'List the commits made on a branch environment',
  {
    environmentKey,
    branchKey: z.string().min(1),
    from: z.string().optional().describe('List changes after this revision (exclusive)'),
    limit: z.number().int().positive().optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(await fliptClient.listBranchChanges(env, args.branchKey, args.from, args.limit));
    } catch (error: any) {
      return fail(`list changes of branch ${args.branchKey} in environment ${env}`, error);
    }
  }
);

// Namespace tools

server.tool(
  'list_namespaces',
  'List namespaces in an environment',
  { environmentKey },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(await fliptClient.listNamespaces(env));
    } catch (error: any) {
      return fail(`list namespaces in environment ${env}`, error);
    }
  }
);

server.tool(
  'get_namespace',
  'Get a namespace',
  {
    environmentKey,
    key: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const namespace = await fliptClient.getNamespace(env, args.key);
      return ok(namespace, uri(env, 'namespaces', args.key));
    } catch (error: any) {
      return fail(`get namespace ${args.key}`, error);
    }
  }
);

server.tool(
  'create_namespace',
  'Create a namespace',
  {
    environmentKey,
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const namespace = await fliptClient.createNamespace(
        env,
        args.key,
        args.name,
        args.description
      );
      return ok(namespace, uri(env, 'namespaces', args.key));
    } catch (error: any) {
      return fail(`create namespace ${args.key}`, error);
    }
  }
);

server.tool(
  'update_namespace',
  'Update a namespace (only the provided fields change)',
  {
    environmentKey,
    key: z.string().min(1),
    name: z.string().optional(),
    description: z.string().optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const namespace = await fliptClient.updateNamespace(env, args.key, {
        name: args.name,
        description: args.description,
      });
      return ok(namespace, uri(env, 'namespaces', args.key));
    } catch (error: any) {
      return fail(`update namespace ${args.key}`, error);
    }
  }
);

server.tool(
  'delete_namespace',
  'Delete a namespace',
  {
    environmentKey,
    key: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(await fliptClient.deleteNamespace(env, args.key));
    } catch (error: any) {
      return fail(`delete namespace ${args.key}`, error);
    }
  }
);

// Flag tools

server.tool(
  'list_flags',
  'List flags in a namespace',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flags = await fliptClient.listFlags(env, args.namespaceKey);
      return ok(flags, uri(env, 'namespaces', args.namespaceKey, 'flags'));
    } catch (error: any) {
      return fail(`list flags in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'get_flag',
  'Get a flag, including its variants, rules, and rollouts',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.getFlag(env, args.namespaceKey, args.flagKey);
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`get flag ${args.flagKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'create_flag',
  'Create a flag',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    type: z.enum(['VARIANT_FLAG_TYPE', 'BOOLEAN_FLAG_TYPE']).optional(),
    enabled: z.boolean().optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.createFlag(env, args.namespaceKey, {
        key: args.key,
        name: args.name,
        description: args.description,
        type: args.type,
        enabled: args.enabled,
      });
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.key));
    } catch (error: any) {
      return fail(`create flag ${args.key} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'update_flag',
  'Update a flag (only the provided fields change)',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    name: z.string().optional(),
    description: z.string().optional(),
    enabled: z.boolean().optional(),
    defaultVariant: z.string().optional(),
    metadata: z.record(z.any()).optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.updateFlag(env, args.namespaceKey, args.flagKey, {
        name: args.name,
        description: args.description,
        enabled: args.enabled,
        defaultVariant: args.defaultVariant,
        metadata: args.metadata,
      });
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`update flag ${args.flagKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'delete_flag',
  'Delete a flag',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(await fliptClient.deleteFlag(env, args.namespaceKey, args.flagKey));
    } catch (error: any) {
      return fail(`delete flag ${args.flagKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'toggle_flag',
  'Enable or disable a flag',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    enabled: z.boolean(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.toggleFlag(env, args.namespaceKey, args.flagKey, args.enabled);
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`toggle flag ${args.flagKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

// Variant tools (variants live inside the flag document)

server.tool(
  'create_variant',
  'Add a variant to a flag',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().optional(),
    description: z.string().optional(),
    attachment: z.string().optional().describe('Optional JSON value attached to the variant'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.createVariant(env, args.namespaceKey, args.flagKey, {
        key: args.key,
        name: args.name,
        description: args.description,
        attachment: parseAttachment(args.attachment),
      });
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`create variant ${args.key} on flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'update_variant',
  'Update a variant of a flag (only the provided fields change)',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().optional(),
    description: z.string().optional(),
    attachment: z.string().optional().describe('Optional JSON value attached to the variant'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.updateVariant(env, args.namespaceKey, args.flagKey, {
        key: args.key,
        name: args.name,
        description: args.description,
        attachment: parseAttachment(args.attachment),
      });
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`update variant ${args.key} on flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'delete_variant',
  'Remove a variant from a flag',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    key: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.deleteVariant(env, args.namespaceKey, args.flagKey, args.key);
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`delete variant ${args.key} on flag ${args.flagKey}`, error);
    }
  }
);

// Rule tools (rules live inside the flag document and are addressed by index)

server.tool(
  'create_rule',
  'Add a targeting rule to a variant flag. Rules are ordered; use position to insert before the end.',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    segments: z.array(z.string().min(1)).min(1).describe('Segment keys the rule matches'),
    segmentOperator: z.enum(['OR_SEGMENT_OPERATOR', 'AND_SEGMENT_OPERATOR']).optional(),
    distributions: z
      .array(
        z.object({
          variant: z.string().min(1).describe('Variant key'),
          rollout: z
            .number()
            .min(0)
            .max(100)
            .describe('Percentage of entities receiving this variant'),
        })
      )
      .optional(),
    position: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe('Index to insert the rule at; defaults to the end'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.createRule(
        env,
        args.namespaceKey,
        args.flagKey,
        {
          segments: args.segments,
          segmentOperator: args.segmentOperator,
          distributions: args.distributions,
        },
        args.position
      );
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`create rule on flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'delete_rule',
  'Remove a targeting rule from a flag by its index (get_flag shows rules in order)',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleIndex: z.number().int().min(0),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.deleteRule(
        env,
        args.namespaceKey,
        args.flagKey,
        args.ruleIndex
      );
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`delete rule ${args.ruleIndex} on flag ${args.flagKey}`, error);
    }
  }
);

// Distribution tools (distributions live inside a rule)

server.tool(
  'create_distribution',
  'Add a variant distribution to a targeting rule',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleIndex: z.number().int().min(0),
    variant: z.string().min(1).describe('Variant key'),
    rollout: z.number().min(0).max(100).describe('Percentage of entities receiving this variant'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.createDistribution(
        env,
        args.namespaceKey,
        args.flagKey,
        args.ruleIndex,
        {
          variant: args.variant,
          rollout: args.rollout,
        }
      );
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`create distribution on rule ${args.ruleIndex} of flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'delete_distribution',
  'Remove a variant distribution from a targeting rule',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    ruleIndex: z.number().int().min(0),
    variant: z.string().min(1).describe('Variant key'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.deleteDistribution(
        env,
        args.namespaceKey,
        args.flagKey,
        args.ruleIndex,
        args.variant
      );
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`delete distribution on rule ${args.ruleIndex} of flag ${args.flagKey}`, error);
    }
  }
);

// Rollout tools (rollouts live inside the flag document and are addressed by index)

server.tool(
  'create_rollout',
  'Add a rollout rule to a boolean flag. Provide exactly one of segment or threshold. Rollouts are ordered; use position to insert before the end.',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    description: z.string().optional(),
    segment: z
      .object({
        segments: z.array(z.string().min(1)).min(1),
        value: z.boolean().describe('Flag value returned when the segment matches'),
        segmentOperator: z.enum(['OR_SEGMENT_OPERATOR', 'AND_SEGMENT_OPERATOR']).optional(),
      })
      .optional(),
    threshold: z
      .object({
        percentage: z.number().min(0).max(100),
        value: z.boolean().describe('Flag value returned inside the percentage'),
      })
      .optional(),
    position: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe('Index to insert the rollout at; defaults to the end'),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      if (!args.segment === !args.threshold) {
        throw new Error('provide exactly one of segment or threshold');
      }
      const rollout: Rollout = args.segment
        ? { type: 'SEGMENT_ROLLOUT_TYPE', description: args.description, segment: args.segment }
        : {
            type: 'THRESHOLD_ROLLOUT_TYPE',
            description: args.description,
            threshold: args.threshold,
          };
      const flag = await fliptClient.createRollout(
        env,
        args.namespaceKey,
        args.flagKey,
        rollout,
        args.position
      );
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`create rollout on flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'delete_rollout',
  'Remove a rollout rule from a flag by its index (get_flag shows rollouts in order)',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    rolloutIndex: z.number().int().min(0),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const flag = await fliptClient.deleteRollout(
        env,
        args.namespaceKey,
        args.flagKey,
        args.rolloutIndex
      );
      return ok(flag, uri(env, 'namespaces', args.namespaceKey, 'flags', args.flagKey));
    } catch (error: any) {
      return fail(`delete rollout ${args.rolloutIndex} on flag ${args.flagKey}`, error);
    }
  }
);

// Segment tools

server.tool(
  'list_segments',
  'List segments in a namespace',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const segments = await fliptClient.listSegments(env, args.namespaceKey);
      return ok(segments, uri(env, 'namespaces', args.namespaceKey, 'segments'));
    } catch (error: any) {
      return fail(`list segments in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'get_segment',
  'Get a segment, including its constraints',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const segment = await fliptClient.getSegment(env, args.namespaceKey, args.segmentKey);
      return ok(segment, uri(env, 'namespaces', args.namespaceKey, 'segments', args.segmentKey));
    } catch (error: any) {
      return fail(`get segment ${args.segmentKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'create_segment',
  'Create a segment',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    matchType: z.enum(['ALL_MATCH_TYPE', 'ANY_MATCH_TYPE']).optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const segment = await fliptClient.createSegment(env, args.namespaceKey, {
        key: args.key,
        name: args.name,
        description: args.description,
        matchType: args.matchType,
      });
      return ok(segment, uri(env, 'namespaces', args.namespaceKey, 'segments', args.key));
    } catch (error: any) {
      return fail(`create segment ${args.key} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'update_segment',
  'Update a segment (only the provided fields change)',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
    name: z.string().optional(),
    description: z.string().optional(),
    matchType: z.enum(['ALL_MATCH_TYPE', 'ANY_MATCH_TYPE']).optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const segment = await fliptClient.updateSegment(env, args.namespaceKey, args.segmentKey, {
        name: args.name,
        description: args.description,
        matchType: args.matchType,
      });
      return ok(segment, uri(env, 'namespaces', args.namespaceKey, 'segments', args.segmentKey));
    } catch (error: any) {
      return fail(`update segment ${args.segmentKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

server.tool(
  'delete_segment',
  'Delete a segment',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(await fliptClient.deleteSegment(env, args.namespaceKey, args.segmentKey));
    } catch (error: any) {
      return fail(`delete segment ${args.segmentKey} in namespace ${args.namespaceKey}`, error);
    }
  }
);

// Constraint tools (constraints live inside the segment document)

server.tool(
  'create_constraint',
  'Add a constraint to a segment',
  {
    environmentKey,
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
    const env = fliptClient.env(args.environmentKey);
    try {
      const segment = await fliptClient.createConstraint(env, args.namespaceKey, args.segmentKey, {
        type: args.type,
        property: args.property,
        operator: args.operator,
        value: args.value,
        description: args.description,
      });
      return ok(segment, uri(env, 'namespaces', args.namespaceKey, 'segments', args.segmentKey));
    } catch (error: any) {
      return fail(`create constraint on segment ${args.segmentKey}`, error);
    }
  }
);

server.tool(
  'delete_constraint',
  'Remove a constraint from a segment by its index (get_segment shows constraints in order)',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    segmentKey: z.string().min(1),
    constraintIndex: z.number().int().min(0),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      const segment = await fliptClient.deleteConstraint(
        env,
        args.namespaceKey,
        args.segmentKey,
        args.constraintIndex
      );
      return ok(segment, uri(env, 'namespaces', args.namespaceKey, 'segments', args.segmentKey));
    } catch (error: any) {
      return fail(`delete constraint ${args.constraintIndex} on segment ${args.segmentKey}`, error);
    }
  }
);

// Evaluation tools

server.tool(
  'evaluate_boolean_flag',
  'Evaluate a boolean flag for an entity',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    entityId: z.string().min(1),
    context: z.record(z.string()).optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(
        await fliptClient.evaluateBoolean({
          environmentKey: env,
          namespaceKey: args.namespaceKey,
          flagKey: args.flagKey,
          entityId: args.entityId,
          context: args.context ?? {},
        })
      );
    } catch (error: any) {
      return fail(`evaluate boolean flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'evaluate_variant_flag',
  'Evaluate a variant flag for an entity',
  {
    environmentKey,
    namespaceKey: z.string().min(1),
    flagKey: z.string().min(1),
    entityId: z.string().min(1),
    context: z.record(z.string()).optional(),
  },
  async args => {
    const env = fliptClient.env(args.environmentKey);
    try {
      return ok(
        await fliptClient.evaluateVariant({
          environmentKey: env,
          namespaceKey: args.namespaceKey,
          flagKey: args.flagKey,
          entityId: args.entityId,
          context: args.context ?? {},
        })
      );
    } catch (error: any) {
      return fail(`evaluate variant flag ${args.flagKey}`, error);
    }
  }
);

server.tool(
  'evaluate_batch',
  'Evaluate multiple flags in one request',
  {
    requests: z
      .array(
        z.object({
          environmentKey,
          namespaceKey: z.string().min(1),
          flagKey: z.string().min(1),
          entityId: z.string().min(1),
          context: z.record(z.string()).optional(),
        })
      )
      .min(1),
  },
  async args => {
    try {
      return ok(
        await fliptClient.evaluateBatch({
          requests: args.requests.map(request => ({
            environmentKey: fliptClient.env(request.environmentKey),
            namespaceKey: request.namespaceKey,
            flagKey: request.flagKey,
            entityId: request.entityId,
            context: request.context ?? {},
          })),
        })
      );
    } catch (error: any) {
      return fail('evaluate batch', error);
    }
  }
);

// Prompts for common tasks

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

server.prompt(
  'list_enabled_flags',
  {
    namespaceKey: z.string().min(1),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `List all enabled flags in namespace "${args.namespaceKey}".`,
        },
      },
    ],
  })
);

server.prompt(
  'propose_changes',
  {
    branchKey: z.string().min(1),
    title: z.string().optional(),
  },
  args => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Propose the changes on branch environment "${args.branchKey}"${args.title ? ` with title "${args.title}"` : ''}.`,
        },
      },
    ],
  })
);

function parseAttachment(attachment?: string): unknown {
  if (attachment === undefined) {
    return undefined;
  }
  try {
    return JSON.parse(attachment);
  } catch {
    throw new Error('attachment must be valid JSON');
  }
}

// Function to start the server
function startServer() {
  // Connect the server to STDIO transport
  const transport = new StdioServerTransport();
  server.connect(transport);
  console.error('Flipt v2 MCP Server running');
}

// If this file is run directly, start the server
if (require.main === module) {
  startServer();
}

// Export for use in other modules
export { server, startServer };
