# Flipt MCP Server

A Model Context Protocol (MCP) server for [Flipt](https://flipt.io), allowing AI assistants to interact with feature flags.

## Features

- List, create, update, and delete namespaces, flags, segments, rules, and more
- Evaluate flags for specific entities
- Toggle flags on/off
- Manage constraints, variants, distributions, and rollouts

## Installation

You can install the package globally:

```bash
npm install -g @flipt-io/mcp-server-flipt
```

Or run it directly with npx:

```bash
npx @flipt-io/mcp-server-flipt
```

## Configuration

The server can be configured using environment variables:

- `MCP_SERVER_PORT`: The port to run the server on (default: 3000)
- `MCP_SERVER_HOST`: The host to bind to (default: localhost)
- `FLIPT_API_URL`: The URL of the Flipt API (default: <http://localhost:8080>)
- `FLIPT_API_KEY`: The API key to use for the Flipt API (optional)

You can set these in a `.env` file in the directory where you run the server.

## Usage

Once the server is running, it will:

1. Start an HTTP server with a status endpoint at `http://localhost:3000/status`
2. Set up a STDIO transport for MCP communication
3. Register tools and prompts for interacting with Flipt

The server is designed to be used with AI assistants that support the Model Context Protocol.

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
