#!/bin/bash

# Install dependencies
npm install

# Generate API client from OpenAPI spec
npm run generate-api

echo "Setup complete! API client has been generated." 