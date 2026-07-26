import { http, HttpResponse } from 'msw';

const FALLBACK_ERROR = 'No handler found for this URL';

export const handlers = [
  // Parser API routes
  http.get('https://codeforces.com/problemset/problem/:id/:letter', () => {
    return HttpResponse.text('<div class="title">D. Test Problem</div>');
  }),
  http.get('https://cses.fi/problemset/task/:id', () => {
    return HttpResponse.text('<html><h1>Test Task</h1></html>');
  }),
  http.get('https://atcoder.jp/contests/:contest/tasks/:task', () => {
    return HttpResponse.text('<span class="h2">\n  abc001_a - Test\n</span>');
  }),
  http.get('https://www.codechef.com/problems/:id', () => {
    return HttpResponse.text('<title>Test Problem | CodeChef Practice</title>');
  }),
  http.get('https://www.usaco.org/index.php', () => {
    return HttpResponse.text(
      '<html><h2> USACO 2021 February Contest, Gold </h2><h2> Problem 1. Test </h2></html>'
    );
  }),
  http.get('https://codeforces.com/api/problemset.problems', () => {
    return HttpResponse.json({
      status: 'OK',
      result: { problems: [{ contestId: 1917, index: 'D', name: 'Test', timeLimit: 2, memoryLimit: 256, points: 1000, rating: 1500 }] },
    });
  }),
  http.get('https://codeforces.com/api/contest.standings', () => {
    return HttpResponse.json({
      status: 'OK',
      result: { problems: [{ index: 'A', name: 'Test', timeLimit: 2, memoryLimit: 256 }] },
    });
  }),
  http.get('https://api.github.com/repos/usaco-guide/usaco.guide/git/refs/heads', () => {
    return HttpResponse.json([{ ref: 'refs/heads/main', object: { sha: 'abc123' } }]);
  }),
  http.get('https://api.github.com/repos/usaco-guide/usaco.guide/branches/:name', ({ params }) => {
    const branchName = (params as { name?: string }).name;
    if (branchName?.startsWith('problem-suggestion/test')) {
      return HttpResponse.json({ name: branchName });
    }
    return HttpResponse.json({ message: 'Branch not found' }, { status: 404 });
  }),
  http.post('https://api.github.com/repos/usaco-guide/usaco.guide/git/refs', () => {
    return HttpResponse.json({ ref: 'refs/heads/test-branch', object: { sha: 'abc123' } });
  }),
  http.get('https://api.github.com/repos/usaco-guide/usaco.guide/contents/:path', () => {
    return HttpResponse.json({
      sha: 'content-sha',
      content: Buffer.from('{"test": []}').toString('base64'),
    });
  }),
  http.put('https://api.github.com/repos/usaco-guide/usaco.guide/contents/:path', () => {
    return HttpResponse.json({
      sha: 'new-content-sha',
      content: Buffer.from('{"test": []}').toString('base64'),
    });
  }),
  http.post('https://api.github.com/repos/usaco-guide/usaco.guide/pulls', () => {
    return HttpResponse.json({
      number: 1,
      html_url: 'https://github.com/usaco-guide/usaco.guide/pull/1',
    });
  }),
  http.post('https://api.github.com/repos/usaco-guide/usaco.guide/pulls/:id/requested_reviewers', () => {
    return HttpResponse.json([]);
  }),
  http.delete('https://api.github.com/repos/usaco-guide/usaco.guide/pulls/:id/requested_reviewers', () => {
    return HttpResponse.json([]);
  }),
  http.post('https://api.github.com/repos/usaco-guide/usaco.guide/issues/:id/labels', () => {
    return HttpResponse.json([]);
  }),
  http.post('https://api.github.com/repos/usaco-guide/usaco.guide/issues', () => {
    return HttpResponse.json({
      number: 42,
      html_url: 'https://github.com/usaco-guide/usaco.guide/issues/42',
    });
  }),
  http.get('https://api.github.com/repos/usaco-guide/usaco.guide/pulls/:id/requested_reviewers', () => {
    return HttpResponse.json({ users: [], teams: [] });
  }),
];

export const errorHandlers = [
  http.get('https://codeforces.com/problemset/problem/:id/:letter', () => {
    return HttpResponse.text('Not Found', { status: 404 });
  }),
  http.get('https://api.github.com/repos/unknown/repo/git/refs/heads', () => {
    return HttpResponse.json({ message: 'Not Found' }, { status: 404 });
  }),
  http.get('https://api.github.com/repos/usaco-guide/usaco.guide/branches/nonexistent', () => {
    return HttpResponse.json({ message: 'Not Found' }, { status: 404 });
  }),
];

export const validateUrlHandlers = [
  http.get('http://evil.internal/', () => {
    return HttpResponse.text('hacked', { status: 200 });
  }),
  http.get('http://127.0.0.1/', () => {
    return HttpResponse.text('internal', { status: 200 });
  }),
  http.get('http://10.0.0.1/', () => {
    return HttpResponse.text('internal', { status: 200 });
  }),
  http.get('http://localhost/', () => {
    return HttpResponse.text('internal', { status: 200 });
  }),
  http.get('http://169.254.169.254/', () => {
    return HttpResponse.text('metadata', { status: 200 });
  }),
  http.get('http://[::1]/', () => {
    return HttpResponse.text('internal', { status: 200 });
  }),
  http.get('http://metadata.google.internal/', () => {
    return HttpResponse.text('metadata', { status: 200 });
  }),
];
