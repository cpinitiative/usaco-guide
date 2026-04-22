# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS base

WORKDIR /app

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    NEXT_TELEMETRY_DISABLED=1

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    ca-certificates \
    git \
    g++ \
    make \
    python3 \
  && rm -rf /var/lib/apt/lists/* \
  && corepack enable

FROM base AS deps

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

FROM deps AS dev

ENV NODE_ENV=development

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "yarn tsx scripts/load-content.ts && yarn next dev --hostname 0.0.0.0"]
