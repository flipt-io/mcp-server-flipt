# Flipt MCP Server

[![mcp-server-flipt](https://img.shields.io/npm/v/@flipt-io/mcp-server-flipt?label=%40flipt-io%2Fmcp-server-flipt)](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for [Flipt](https://flipt.io), allowing AI assistants to interact with feature flags.

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
docker run -d --name mcp-server-flipt FLIPT_API_URL=http://localhost:8080 flipt-io/mcp-server-flipt
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
