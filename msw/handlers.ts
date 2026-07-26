import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://github.com/login/oauth/access_token', () => {
    return HttpResponse.json({
      access_token: 'mock-access-token',
      token_type: 'bearer',
      scope: 'repo,user',
    });
  }),

  ...['codeforces.com', 'usaco.org', 'cses.fi', 'atcoder.jp', 'codechef.com'].flatMap(
    domain => [
      http.get(`https://${domain}/*`, () => {
        return HttpResponse.text(
          `<html><head><title>Test Problem - ${domain}</title></head><body>Content</body></html>`
        );
      }),
      http.get(`https://www.${domain}/*`, () => {
        return HttpResponse.text(
          `<html><head><title>Test Problem - www.${domain}</title></head><body>Content</body></html>`
        );
      }),
    ]
  ),
];
