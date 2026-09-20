---
name: release
description: Release the v1 or v2 Flipt MCP server package — bump version, commit, tag with the correct per-package tag scheme, push, and monitor the npm + ghcr publish. Use when the user asks to release, publish, cut a version, or tag either @flipt-io/mcp-server-flipt (v1) or @flipt-io/mcp-server-flipt-v2.
---

# Release a package

Releases one package per invocation. Arguments (ask if missing): which package (`v1` or `v2`) and the bump (`patch` | `minor` | `major` | explicit `X.Y.Z`).

| | v1 | v2 |
|---|---|---|
| npm package | `@flipt-io/mcp-server-flipt` | `@flipt-io/mcp-server-flipt-v2` |
| directory | `packages/mcp-server-flipt` | `packages/mcp-server-flipt-v2` |
| **git tag** | `vX.Y.Z` | `mcp-server-flipt-v2@X.Y.Z` |
| docker image | `ghcr.io/flipt-io/mcp-server-flipt` | `ghcr.io/flipt-io/mcp-server-flipt-v2` |

Tags drive `.github/workflows/publish.yml` (npm + ghcr, each image also tagged `:latest`).

**CRITICAL — tag scheme:** a `vX.Y.Z` tag ALWAYS publishes the **v1** package, regardless of what was bumped. Never create a `v*` tag for a v2 release, and never let `pnpm version` auto-tag (its default tag is `v*`). Always pass `--no-git-tag-version` and create the tag by hand.

## Procedure

### 1. Preflight

```bash
git switch main && git pull --ff-only
git status --short          # must be clean; abort if not
pnpm install
pnpm -r check && pnpm lint && pnpm -r test && pnpm -r build
```

All gates must pass before bumping. Also confirm CI is green on origin/main (`gh run list --branch main --limit 3`). If releasing a fix that just merged, make sure it's actually in main.

### 2. Bump

Run **inside the package directory** (the `version` lifecycle script regenerates `src/version.ts` and `git add`s it — a test fails if it drifts, so never edit version fields by hand):

```bash
cd packages/<dir>
pnpm version <patch|minor|major|X.Y.Z> --no-git-tag-version
cd ../..
```

Confirm `packages/<dir>/src/version.ts` matches the new `package.json` version and both are staged/modified. Set `NEW_VERSION` from the package.json.

### 3. Commit and tag

```bash
git add packages/<dir>/package.json packages/<dir>/src/version.ts
# v1:
git commit -m "chore(release): mcp-server-flipt v${NEW_VERSION}"
git tag "v${NEW_VERSION}"
# v2:
git commit -m "chore(release): mcp-server-flipt-v2 ${NEW_VERSION}"
git tag "mcp-server-flipt-v2@${NEW_VERSION}"
```

Double-check with `git tag --points-at HEAD` that exactly one tag exists and it matches the intended package's scheme before pushing.

### 4. Push

Confirm with the user before pushing — this publishes to npm and ghcr and cannot be unpublished cleanly.

```bash
git push origin main
git push origin <tag>       # push the tag explicitly; never `git push --tags`
```

### 5. Monitor the publish

```bash
gh run list --workflow=publish.yml --limit 1   # grab the run id for this tag
gh run watch <run-id> --exit-status
```

If it fails: `gh run view <run-id> --log-failed`. Common causes: npm auth (`NPM_API_KEY` secret), Docker build. To retry after a fix that requires a code change, delete the tag locally and remotely (`git tag -d <tag> && git push origin :refs/tags/<tag>`), land the fix, and re-tag — only safe if nothing published; if npm already published, bump a fresh patch version instead (npm versions are immutable).

Verify the artifacts:

```bash
npm view @flipt-io/<package> version    # should print NEW_VERSION
docker manifest inspect ghcr.io/flipt-io/<dir>:${NEW_VERSION} > /dev/null && echo ok
```

### 6. GitHub release

```bash
gh release create <tag> --title "<tag>" --generate-notes --notes-start-tag <prev-tag-same-package>
```

`--notes-start-tag` matters: tags from the *other* package are interleaved in history, so let-GitHub-guess would produce notes spanning the wrong package. Find the previous tag with `git tag --list 'v*' --sort=-v:refname | head` (v1) or `git tag --list 'mcp-server-flipt-v2@*' --sort=-v:refname | head` (v2). For a package's first release, omit `--notes-start-tag`.

### 7. Report

Summarize to the user: new version, tag, npm + ghcr links, release URL, and anything skipped or failed.

## Notes

- v1 releases also serve the Smithery listing (root `smithery.yaml` — v1 only); no extra step, but if env var names changed since last release, verify that file was kept in sync.
- Never run `pnpm publish` locally; publishing is CI-only via the tag.
- If both packages need releasing, do two full passes (two commits, two tags) — the workflow parses one package per tag.
