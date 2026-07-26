import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createMocks } from 'node-mocks-http';
import fetchMetadataHandler from '@/pages/api/fetch-metadata';
import { checkRateLimit, getClientIdentifier, clearRateLimitMap } from '@/lib/rateLimit';
import { server } from '@/../test/setup/msw';

// Mock the rate limit functions
vi.mock('@/lib/rateLimit', () => ({
  ...vi.importActual('@/lib/rateLimit'),
  checkRateLimit: vi.fn(() => true),
  getClientIdentifier: vi.fn(() => 'test-client'),
  clearRateLimitMap: vi.fn(),
}));

describe('fetch-metadata API route', () => {
  beforeEach(() => {
    // Clear the rate limit store before each test
    clearRateLimitMap();
    // Reset the MSW handlers
    server.resetHandlers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('GET requests', () => {
    it('should return 405 Method Not Allowed', async () => {
      const { req, res } = createMocks({
        method: 'GET',
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(405);
      expect(res._getData()).toEqual(
        expect.objectContaining({ error: 'Method not allowed' })
      );
      expect(res._getHeaders()).toHaveProperty('Allow', 'POST');
    });
  });

  describe('POST requests', () => {
    it('should return 400 if url is missing', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {},
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Missing url parameter' })
      );
    });

    it('should return 400 if url is not a string', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { url: 123 },
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Invalid url parameter' })
      );
    });

    it('should return 400 if url is too long', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { url: 'a'.repeat(2001) },
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Invalid url parameter' })
      );
    });

    it('should return 400 if url is invalid', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { url: 'not-a-url' },
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Invalid URL format' })
      );
    });

    it('should return 400 if url is not from an allowed domain', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { url: 'https://evil.com/problem' },
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({
          error: expect.stringContaining('is not allowed'),
        })
      );
    });

    it('should return 200 with parsed data for a valid URL', async () => {
      // Use a Codeforces URL
      const testUrl = 'https://codeforces.com/problemset/problem/1/A';

      const { req, res } = createMocks({
        method: 'POST',
        body: { url: testUrl },
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(200);
      const jsonData = res._getJsonData();
      expect(jsonData).toHaveProperty('data');
      expect(jsonData.data).toMatchObject({
        source: 'CF',
        // We don't check the exact values because they depend on the MSW mock,
        // but we can check that they are present and reasonable.
        name: expect.any(String),
        uniqueId: expect.stringContaining('CF-'),
      });
    });

    it('should return 429 if rate limit is exceeded', async () => {
      // Mock the checkRateLimit to return false on the second call
      const checkRateLimitMock = vi.mocked(checkRateLimit);
      checkRateLimitMock.mockImplementationOnce(() => true);  // First call (inside the handler) - allow
      // Actually, the handler calls checkRateLimit once. Let's make it return false.
      // We'll just mock it to return false.
      checkRateLimitMock.mockReturnValue(false);

      const { req, res } = createMocks({
        method: 'POST',
        body: { url: 'https://codeforces.com/problemset/problem/1/A' },
      });

      await fetchMetadataHandler(req, res);

      expect(res._getStatusCode()).toBe(429);
      expect(res._getJsonData()).toEqual(
        expect.objectContaining({ error: 'Too many requests' })
      );
    });
  });
});