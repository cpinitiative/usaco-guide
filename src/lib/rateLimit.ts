const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export const WINDOW_MS = 60_000; // 1 minute
export const MAX_REQUESTS = 30;
// Purge expired entries every 10 minutes to prevent unbounded memory growth
export const PURGE_INTERVAL_MS = 600_000;

let purgeInterval: ReturnType<typeof setInterval> | null = null;

/**
 * Start the background purge interval. Called lazily on first use so tests
 * can import the module without spawning a timer unless they want one.
 */
function ensurePurgeInterval(): void {
  if (purgeInterval !== null) return;
  purgeInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, PURGE_INTERVAL_MS);
  // Allow the process to exit even if the interval is still running
  purgeInterval.unref?.();
}

/** Exposed for test cleanup */
export function clearPurgeInterval(): void {
  if (purgeInterval !== null) {
    clearInterval(purgeInterval);
    purgeInterval = null;
  }
}

/** Exposed for tests that need a clean slate */
export function clearRateLimitMap(): void {
  rateLimitMap.clear();
}

export function checkRateLimit(identifier: string): boolean {
  ensurePurgeInterval();

  // Treat blank/missing identifiers as a shared "unknown" bucket so they
  // still get rate-limited rather than bypassing the check entirely.
  const key = identifier && identifier.trim() ? identifier.trim() : 'unknown';

  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

/**
 * Extract a trusted client identifier from the request.
 *
 * Security note (F-06):
 * - On Vercel the runtime populates `req.ip` from the verified client IP and
 *   the `x-real-ip` header is set by the edge network. Both are reliable.
 * - `x-forwarded-for` is NOT trusted here because a client can inject any
 *   value and Next.js/Vercel append rather than overwrite it, making the
 *   first entry attacker-controlled.
 * - In development `req.ip` is typically `::1` (loopback) which is fine.
 */
export function getClientIdentifier(
  req: { ip?: string; headers?: Record<string, string | string[] | undefined> }
): string {
  // 1. Vercel / Next.js runtime-populated IP (cannot be spoofed by clients)
  if (req.ip && req.ip !== '::1' && req.ip !== '127.0.0.1') {
    return req.ip;
  }

  // 2. x-real-ip set by a trusted reverse-proxy (Vercel edge, nginx with
  //    `proxy_set_header X-Real-IP $remote_addr`). Unlike x-forwarded-for this
  //    header is a single value and is overwritten, not appended, by the proxy.
  const xRealIp = req.headers?.['x-real-ip'];
  if (xRealIp && typeof xRealIp === 'string' && xRealIp.trim()) {
    return xRealIp.trim();
  }

  // 3. Fall back to req.ip even if loopback (development environments)
  if (req.ip) return req.ip;

  // 4. Last resort — treat as unknown shared bucket so it is still limited
  return 'unknown';
}
