# Flipt MCP Servers

[![CI](https://github.com/flipt-io/mcp-server-flipt/actions/workflows/ci.yml/badge.svg)](https://github.com/flipt-io/mcp-server-flipt/actions/workflows/ci.yml)
[![mcp-server-flipt](https://img.shields.io/npm/v/@flipt-io/mcp-server-flipt?label=%40flipt-io%2Fmcp-server-flipt)](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt)
[![mcp-server-flipt-v2](https://img.shields.io/npm/v/@flipt-io/mcp-server-flipt-v2?label=%40flipt-io%2Fmcp-server-flipt-v2)](https://www.npmjs.com/package/@flipt-io/mcp-server-flipt-v2)

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers for [Flipt](https://flipt.io), allowing AI assistants to interact with feature flags.

This repository contains two packages, one per major Flipt version:

| Package | Flipt version | npm | Docker |
| --- | --- | --- | --- |
| [`packages/mcp-server-flipt`](packages/mcp-server-flipt) | [Flipt v1](https://docs.flipt.io/v1) | `@flipt-io/mcp-server-flipt` | `ghcr.io/flipt-io/mcp-server-flipt` |
| [`packages/mcp-server-flipt-v2`](packages/mcp-server-flipt-v2) | [Flipt v2](https://docs.flipt.io/v2) | `@flipt-io/mcp-server-flipt-v2` | `ghcr.io/flipt-io/mcp-server-flipt-v2` |

Not sure which one you need? If your Flipt server has environments and Git-backed storage, it is v2 — use `@flipt-io/mcp-server-flipt-v2`. See each package's README for installation, configuration, and the full tool catalog.

## Quick start

Flipt v2:

```bash
npx -y @flipt-io/mcp-server-flipt-v2
```

Flipt v1:

```bash
npx -y @flipt-io/mcp-server-flipt
```

## Development

This is a [pnpm](https://pnpm.io) workspace.

```bash
pnpm install       # install all dependencies
pnpm -r build      # build both packages
pnpm -r test       # test both packages
pnpm -r check      # typecheck both packages
pnpm lint          # lint both packages
pnpm fmt           # format both packages

# scope a command to one package
pnpm --filter @flipt-io/mcp-server-flipt-v2 dev
```

## Releasing

- v1: push a `vX.Y.Z` tag (unchanged legacy scheme)
- v2: push a `mcp-server-flipt-v2@X.Y.Z` tag

Each tag publishes the matching package to npm and its image to ghcr.io via the [publish workflow](.github/workflows/publish.yml). Bump versions with `pnpm version <bump> --no-git-tag-version` inside the package directory (the `version` lifecycle script keeps `src/version.ts` in sync), then create the tag manually using the scheme above.

## License

Apache 2.0
