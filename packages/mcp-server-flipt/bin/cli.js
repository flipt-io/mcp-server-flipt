#!/usr/bin/env node

// Import the server from the compiled index.js file
try {
  const { startServer } = require('../dist/index.js');

  // Start the server
  startServer();

  // stderr, not stdout: stdout carries the JSON-RPC protocol stream
  console.error('Flipt MCP Server started. Press Ctrl+C to stop.');
} catch (error) {
  console.error('Error starting Flipt MCP Server:', error.message);
  process.exit(1);
} 