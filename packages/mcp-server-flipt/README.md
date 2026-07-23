# Flipt MCP Server

[![mcp-server-flipt](https://img.shields.io/npm/v/@flipt-io/mcp-server-flipt?label=%40flipt-io%2Fmcp-server-flipt)](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt)
[![smithery badge](https://smithery.ai/badge/@flipt-io/mcp-server-flipt)](https://smithery.ai/install/@flipt-io/mcp-server-flipt)
[![MseeP.ai Security Assessment Badge](https://mseep.net/mseep-audited.png)](https://mseep.ai/app/flipt-io-mcp-server-flipt)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [Flipt v1](https://docs.flipt.io/v1), allowing AI assistants to interact with feature flags.

Using [Flipt v2](https://docs.flipt.io/v2)? Use [`@flipt-io/mcp-server-flipt-v2`](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt-v2) instead.

<img width="2060" alt="mcp" src="https://github.com/user-attachments/assets/cc32a6dd-5368-43c1-897a-a0ccfeeacaf0" />

## Features

- List, create, update, and delete namespaces, flags, segments, rules, and more
- Evaluate flags for specific entities
- Toggle flags on/off
- Manage constraints, variants, distributions, and rollouts

## Usage

Once the server is running, it will:

1. Set up a STDIO transport for MCP communication
2. Register tools and prompts for interacting with Flipt

The server is designed to be used with AI assistants that support the Model Context Protocol.

### Installing via Smithery

To install Flipt MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/install/@flipt-io/mcp-server-flipt):

```bash
npx -y @smithery/cli install @flipt-io/mcp-server-flipt --client claude
```

### Node

You can install the package globally and run it:

```bash
npm install -g @flipt-io/mcp-server-flipt && mcp-server-flipt
```

Or run it directly with npx:

```bash
npx -y @flipt-io/mcp-server-flipt
```

### Docker

You can also run the server in a Docker container:

```bash
docker run -d --name mcp-server-flipt ghcr.io/flipt-io/mcp-server-flipt:latest
```

## Configuration

The server can be configured using environment variables:

- `FLIPT_URL`: The URL of the Flipt API (default: <http://localhost:8080>)
- `FLIPT_API_KEY`: The API key to use for the Flipt API (optional)

You can set these in a `.env` file in the directory where you run the server.

## Development

This package lives in a [pnpm](https://pnpm.io) workspace; see the [repository README](https://github.com/flipt-io/mcp-server-flipt) for the full workflow.

```bash
# Install dependencies (from the repository root)
pnpm install

# Run in development mode
pnpm --filter @flipt-io/mcp-server-flipt dev

# Build the package
pnpm --filter @flipt-io/mcp-server-flipt build

# Start the server
pnpm --filter @flipt-io/mcp-server-flipt start
```

## License

Apache 2.0
