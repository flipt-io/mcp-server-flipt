#!/usr/bin/env node

// Import the server from the compiled index.js file
try {
  const { startServer } = require('../dist/index.js');

  // Start the server
  startServer();
} catch (error) {
  console.error('Error starting Flipt v2 MCP Server:', error.message);
  process.exit(1);
}
