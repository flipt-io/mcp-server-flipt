import { VERSION } from '../version';

const pkg = require('../../package.json');

describe('version', () => {
  it('src/version.ts matches package.json (run scripts/sync-version.js if this fails)', () => {
    expect(VERSION).toBe(pkg.version);
  });
});
