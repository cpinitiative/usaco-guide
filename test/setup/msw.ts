/// <reference types="vitest/globals" />
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// List of domains that the parsers fetch from
const ALLOWED_DOMAINS = [
  'codeforces.com',
  'usaco.org',
  'cses.fi',
  'atcoder.jp',
  'codechef.com',
];

// Simple HTML template for a problem page
const getMockHtml = (domain: string, path: string): string => {
  // Extract a plausible problem name from the path or domain
  const pathParts = path.split('/').filter(Boolean);
  let problemName = 'Problem';
  if (pathParts.length > 0) {
    // Try to get a meaningful identifier from the path
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && lastPart.length > 0) {
      problemName = lastPart.replace(/[^a-zA-Z0-9]/g, ' ');
    }
  }

  // Return a simple HTML structure that the parsers can extract
  switch (domain) {
    case 'codeforces.com':
      return `<html><div class="title">${problemName}</div></html>`;
    case 'usaco.org':
      return `<html><h2>Problem ${problemName}</h2></html>`;
    case 'cses.fi':
      return `<html><h1>${problemName}</h1></html>`;
    case 'atcoder.jp':
      return `<html><span class="h2">${problemName}</span></html>`;
    case 'codechef.com':
      return `<html><title>${problemName} Practice</title></html>`;
    default:
      return `<html><h1>${problemName}</h1></html>`;
  }
};

// Request handlers
const handlers = [
  // Mock the GitHub OAuth token endpoint
  http.post('https://github.com/login/oauth/access_token', () => {
    // Return a mock token response
    return HttpResponse.json({
      access_token: 'mock-github-token',
      token_type: 'bearer',
      scope: '',
    });
  }),

  // Mock all GET requests to the allowed domains
  ...ALLOWED_DOMAINS.flatMap(domain =>
    [
      // Handle the main domain
      http.get(`*://${domain}/*`, ({ request }) => {
        const url = new URL(request.url);
        const html = getMockHtml(domain, url.pathname);
        return new HttpResponse(html, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }),
      // Handle www subdomain
      http.get(`*://www.${domain}/*`, ({ request }) => {
        const url = new URL(request.url);
        const html = getMockHtml(domain, url.pathname);
        return new HttpResponse(html, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }),
    ]
  ),
];

// Create a server instance
const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

export { server, handlers };
