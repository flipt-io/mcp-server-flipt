#!/usr/bin/env node

// Import the server from the compiled index.js file
const { startServer } = require('../dist/index.js');

// Start the server
startServer();

console.log('Flipt MCP Server started. Press Ctrl+C to stop.'); 