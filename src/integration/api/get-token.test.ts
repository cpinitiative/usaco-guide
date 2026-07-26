import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createMocks } from 'node-mocks-http';
import getTokenHandler from '@/pages/api/get-token';
import { OAuthApp } from '@octokit/oauth-app';
import { server } from '@/../test/setup/msw';

// Mock environment variables and rate limit
vi.mock('@/lib/rateLimit', () => ({
  ...vi.importActual('@/lib/rateLimit'),
  checkRateLimit: vi.fn(() => true),
  getClientIdentifier: vi.fn(() => 'test-client'),
}));

describe('get-token API route', () => {
  beforeEach(() => {
    // Reset MSW handlers before each test
    server.resetHandlers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('OPTIONS requests', () => {
    it('should return 204 for allowed origins', async () => {
      const { req, res } = createMocks({
        method: 'OPTIONS',
        headers: {
          origin: 'https://usaco.guide',
        },
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(204);
      expect(res._getHeaders()['access-control-allow-origin']).toBe(
        'https://usaco.guide'
      );
    });

    it('should return 403 for disallowed origins', async () => {
      const { req, res } = createMocks({
        method: 'OPTIONS',
        headers: {
          origin: 'https://evil.com',
        },
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(403);
    });
  });

  describe('POST requests', () => {
    it('should return 405 for non-POST, non-OPTIONS methods', async () => {
      const { req, res } = createMocks({
        method: 'GET',
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(405);
    });

    it('should return 400 if code is missing', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {},
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Missing code parameter' })
      );
    });

    it('should return 400 if code is not a string', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { code: 123 },
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Invalid code parameter' })
      );
    });

    it('should return 403 if origin is not allowed', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { code: 'test-code' },
        headers: {
          origin: 'https://evil.com',
        },
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(403);
    });

    it('should return 200 with a token for a valid request', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { code: 'valid-code' },
        headers: {
          origin: 'https://usaco.guide',
        },
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
      const jsonData = res._getJsonData();
      expect(jsonData).toHaveProperty('token');
      expect(typeof jsonData.token).toBe('string');
      expect(jsonData.token.length).toBeGreaterThan(0);
    });

    it('should return 500 if token generation fails', async () => {
      // Mock the OAuthApp.createToken to throw an error
      vi.spyOn(OAuthApp.prototype, 'createToken')
        .mockRejectedValue(new Error('Token generation failed'));

      const { req, res } = createMocks({
        method: 'POST',
        body: { code: 'invalid-code' },
        headers: {
          origin: 'https://usaco.guide',
        },
      });

      await getTokenHandler(req, res);

      expect(res._getStatusCode()).toBe(500);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Failed to create token' })
      );
    });
  });
});