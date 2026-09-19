# Builds either MCP server package; select with --build-arg PACKAGE=mcp-server-flipt-v2.
# The default builds the v1 server so Smithery's config keeps working unchanged.
FROM node:22-alpine AS builder

ARG PACKAGE=mcp-server-flipt

RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter "@flipt-io/${PACKAGE}" build

# Produces /out with dist, bin, package.json, and prod-only node_modules
RUN pnpm --filter "@flipt-io/${PACKAGE}" deploy --prod --legacy /out

FROM node:22-alpine AS release

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /out /app

ENV NODE_ENV=production

# Make sure the CLI script is executable
RUN chmod +x bin/cli.js

# Change ownership of the application files to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

ENTRYPOINT ["node", "bin/cli.js"]
