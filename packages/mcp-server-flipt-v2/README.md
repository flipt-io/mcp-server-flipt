# Flipt v2 MCP Server

[![mcp-server-flipt-v2](https://img.shields.io/npm/v/@flipt-io/mcp-server-flipt-v2?label=%40flipt-io%2Fmcp-server-flipt-v2)](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt-v2)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [Flipt v2](https://docs.flipt.io/v2), allowing AI assistants to manage and evaluate feature flags.

Using Flipt v1? Use [`@flipt-io/mcp-server-flipt`](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt) instead.

## Features

- Manage environments and branch environments: list, branch, and propose changes back via your SCM
- List, create, update, and delete namespaces, flags, segments, variants, rules, rollouts, distributions, and constraints
- Evaluate boolean and variant flags (single and batch) for specific entities
- Toggle flags on/off
- Safe concurrent edits: every write passes Flipt v2's resource revision, so conflicting changes are rejected instead of silently overwritten

## Usage

Once the server is running, it will:

1. Set up a STDIO transport for MCP communication
2. Register tools and prompts for interacting with Flipt v2

### Node

You can install the package globally and run it:

```bash
npm install -g @flipt-io/mcp-server-flipt-v2 && mcp-server-flipt-v2
```

Or run it directly with npx:

```bash
npx -y @flipt-io/mcp-server-flipt-v2
```

### Docker

You can also run the server in a Docker container:

```bash
docker run -d --name mcp-server-flipt-v2 ghcr.io/flipt-io/mcp-server-flipt-v2:latest
```

## Configuration

The server can be configured using environment variables:

- `FLIPT_URL`: The URL of the Flipt API (default: <http://localhost:8080>)
- `FLIPT_API_KEY`: The API key to use for the Flipt API (optional)
- `FLIPT_ENVIRONMENT`: The environment used when a tool call does not specify one (default: `default`)

You can set these in a `.env` file in the directory where you run the server.

## Tools

Every tool that operates inside an environment accepts an optional `environmentKey`, falling back to `FLIPT_ENVIRONMENT`.

| Group | Tools |
| --- | --- |
| Environments | `list_environments`, `list_branches`, `create_branch`, `delete_branch`, `propose_branch`, `list_branch_changes` |
| Namespaces | `list_namespaces`, `get_namespace`, `create_namespace`, `update_namespace`, `delete_namespace` |
| Flags | `list_flags`, `get_flag`, `create_flag`, `update_flag`, `delete_flag`, `toggle_flag` |
| Variants | `create_variant`, `update_variant`, `delete_variant` |
| Rules | `create_rule`, `delete_rule` |
| Distributions | `create_distribution`, `delete_distribution` |
| Rollouts | `create_rollout`, `delete_rollout` |
| Segments | `list_segments`, `get_segment`, `create_segment`, `update_segment`, `delete_segment` |
| Constraints | `create_constraint`, `delete_constraint` |
| Evaluation | `evaluate_boolean_flag`, `evaluate_variant_flag`, `evaluate_batch` |

### Notes on the v2 data model

In Flipt v2, variants, rules, rollouts, distributions, and constraints live inside their parent flag or segment document rather than behind their own API endpoints. The corresponding tools read the parent document, apply the change, and write it back with the revision from the read, so a concurrent modification results in a conflict error instead of a lost update — fetch the resource again and retry.

Rules, rollouts, and constraints have no ids in v2; delete them by their index as shown by `get_flag` / `get_segment`. Variants and distributions are addressed by key.

## License

Apache 2.0
