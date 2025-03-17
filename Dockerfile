FROM node:22.12-alpine AS builder

COPY . /app

WORKDIR /app

RUN --mount=type=cache,target=/root/.npm npm install

FROM node:22.12-alpine AS release

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/bin /app/bin
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json

ENV NODE_ENV=production

# Install dependencies as root
RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts --omit=dev

# Make sure the CLI script is executable
RUN chmod +x bin/cli.js

# Change ownership of the application files to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

ENTRYPOINT ["node", "bin/cli.js"]