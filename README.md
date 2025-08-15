# Flipt MCP Server

[![mcp-server-flipt](https://img.shields.io/npm/v/@flipt-io/mcp-server-flipt?label=%40flipt-io%2Fmcp-server-flipt)](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/flipt-io/mcp-server-flipt)](https://archestra.ai/mcp-catalog/flipt-io__mcp-server-flipt)
[![smithery badge](https://smithery.ai/badge/@flipt-io/mcp-server-flipt)](https://smithery.ai/install/@flipt-io/mcp-server-flipt)
[![MseeP.ai Security Assessment Badge](https://mseep.net/mseep-audited.png)](https://mseep.ai/app/flipt-io-mcp-server-flipt)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [Flipt](https://flipt.io), allowing AI assistants to interact with feature flags.

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

- `FLIPT_API_URL`: The URL of the Flipt API (default: <http://localhost:8080>)
- `FLIPT_API_KEY`: The API key to use for the Flipt API (optional)

You can set these in a `.env` file in the directory where you run the server.

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the project
npm run build

# Start the server
npm start

# Format code
npm run fmt

# Lint code
npm run lint
```

## License

Apache 2.0
