#!/usr/bin/env node

// Keeps src/version.ts in sync with package.json. Runs automatically via the
// `version` lifecycle script on `npm version <bump>`.
const fs = require('fs');
const path = require('path');
const { version } = require('../package.json');

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'version.ts'),
  `export const VERSION = '${version}';\n`
);
