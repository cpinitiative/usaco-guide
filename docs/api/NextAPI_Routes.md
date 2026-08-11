# Next.js API Routes

This document describes the Next.js API routes defined inside `src/pages/api`.
It explains each route, expected request format, response shape, environment
requirements, and how the route is used by the application.

## Overview

The Next.js API routes are standard HTTP endpoints available under `/api` during
runtime. They are part of the frontend application and are implemented as
server-side route handlers.

There are currently two top-level routes:

- `POST /api/get-token`
- `POST /api/fetch-metadata`

Additionally, the metadata route uses parser modules under
`src/pages/api/(parsers)` to support multiple online judge domains.

## 1. POST /api/get-token

### File

- `src/pages/api/get-token.ts`

### Purpose

Exchanges a GitHub OAuth authorization code for a GitHub access token. This
route is used by the editor/auth workflow when a GitHub OAuth code is returned
from the GitHub authorization flow.

### Request

- Method: `POST`
- Body: JSON

Example:

```json
{
	"code": "OAUTH_CODE_FROM_GITHUB"
}
```

### Response

Success:

```json
{
	"token": "GITHUB_ACCESS_TOKEN"
}
```

Failure cases:

- Missing `code` field: returns `400` with
  `{ "error": "Missing code parameter" }`
- Internal error from GitHub token exchange: returns `500` with
  `{ "error": "Failed to create token" }`

### Implementation notes

This route uses `@octokit/oauth-app` and creates a GitHub OAuth App instance
with:

- `clientId`: from `process.env.NEXT_PUBLIC_EDITOR_CLIENT_ID`
- `clientSecret`: from `process.env.EDITOR_CLIENT_SECRET`

### Required environment variables

- `NEXT_PUBLIC_EDITOR_CLIENT_ID` (used when provided; otherwise the code falls
  back to a built-in client ID)
- `EDITOR_CLIENT_SECRET` (used when provided; otherwise an empty secret is used)

### Security considerations

- This route should only be used in server-side trusted flow.
- The response contains a GitHub token, so the client must handle it securely.

## 2. POST /api/fetch-metadata

### File

- `src/pages/api/fetch-metadata.ts`

### Purpose

Fetches metadata for a given online judge problem URL. It is used in problem
suggestion and content editing workflows where the site needs automatic problem
metadata extraction.

### Request

- Method: `POST`
- Body: JSON

Example:

```json
{
	"url": "https://codeforces.com/problemset/problem/1917/D"
}
```

### Response

Success:

```json
{
  "data": {
    "uniqueId": "cf-1917D",
    "name": "Problem Title",
    "source": "CF",
    "solutionMetadata": { ... }
  }
}
```

Failure cases:

- Missing `url` field: returns `400` with `{ "error": "Missing url parameter" }`
- Any parser or network problem: returns `500` with
  `{ "error": "Failed to fetch metadata" }`

### Implementation notes

This route delegates parsing to `src/pages/api/(parsers)/parse.ts`. It sends a
JSON object containing the parsed metadata in `data`.

### Supported domains

The parser currently supports these domains:

- `codeforces.com`
- `usaco.org`
- `cses.fi`
- `atcoder.jp`
- `codechef.com`

If the submitted URL does not match one of these domains, the route throws an
error.

## Parser submodules

The parser layer is implemented in `src/pages/api/(parsers)` and is not directly
exposed as routes. It provides domain-specific parsing logic for the metadata
route.

### `src/pages/api/(parsers)/parse.ts`

- Acts as the central dispatcher for parser selection.
- Uses `axios` and a fallback strategy for Codeforces.
- Contains browser-like headers and retry logic.
- Chooses a parser by checking if the URL string contains known domains.

### Domain parser modules

- `src/pages/api/(parsers)/ac.ts`
  - Parses AtCoder URLs.
  - Outputs `source: 'AC'` and `solutionMetadata.kind: 'none'`.

- `src/pages/api/(parsers)/cc.ts`
  - Parses CodeChef URLs.
  - Outputs `source: 'CC'` and
    `solutionMetadata.kind: 'autogen-label-from-site'`.

- `src/pages/api/(parsers)/cf.ts`
  - Parses Codeforces URLs.
  - Outputs `source: 'CF'` and
    `solutionMetadata.kind: 'autogen-label-from-site'`.

- `src/pages/api/(parsers)/cses.ts`
  - Parses CSES URLs.
  - Outputs `source: 'CSES'` and `solutionMetadata.kind: 'none'`.

- `src/pages/api/(parsers)/usaco.ts`
  - Parses USACO URLs.
  - Outputs `source` equal to the contest division and
    `solutionMetadata.kind: 'USACO'`.

### Codeforces fallback behavior

For Codeforces URLs, `parse.ts` first attempts a small API-driven fallback via
the Codeforces public API. If this fallback fails, it fetches the page HTML
directly with retries.

## Developer guidance

### Adding a new parser

1. Create a new parser module in `src/pages/api/(parsers)`.
2. Add the domain key and parser function to the `parsers` object in
   `src/pages/api/(parsers)/parse.ts`.
3. Ensure the parser returns an object with:
   - `uniqueId`
   - `name`
   - `source`
   - `solutionMetadata`
4. Add tests if the project has a test harness for API parsers.

### Local development

- Next API routes run automatically in `next dev`.
- Confirm that environment variables are available when the app starts.
- If using GitHub OAuth locally, ensure the callback and client credentials are
  configured for your local domain.

### Error handling

- Use the route response status codes consistently.
- For `fetch-metadata`, the route returns a generic `500` message on parser
  errors. Developers should inspect server logs for full details.

## Summary

The Next.js `/api` layer in this project is intentionally small and focused on
two responsibilities:

- exchanging GitHub OAuth codes for tokens
- fetching online judge problem metadata

The parser modules are the key extensible part of this layer.
