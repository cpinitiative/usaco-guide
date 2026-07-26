import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  checkRateLimit,
  clearPurgeInterval,
  clearRateLimitMap,
  MAX_REQUESTS,
  PURGE_INTERVAL_MS,
  WINDOW_MS,
} from '../lib/rateLimit';

describe('rateLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    clearRateLimitMap();
  });

  afterEach(() => {
    vi.useRealTimers();
    clearPurgeInterval();
    clearRateLimitMap();
  });

  // ─── Basic happy-path ────────────────────────────────────────────────────────

  it('allows the first request', () => {
    expect(checkRateLimit('ip-1')).toBe(true);
  });

  it(`allows exactly ${MAX_REQUESTS} requests within one window`, () => {
    for (let i = 0; i < MAX_REQUESTS; i++) {
      expect(checkRateLimit('ip-batch'), `attempt ${i + 1}`).toBe(true);
    }
  });

  it('blocks the request that exceeds the limit', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('ip-block');
    expect(checkRateLimit('ip-block')).toBe(false);
  });

  it('stays blocked for additional requests within the same window', () => {
    for (let i = 0; i < MAX_REQUESTS + 10; i++) checkRateLimit('ip-sustained');
    expect(checkRateLimit('ip-sustained')).toBe(false);
  });

  it('allows requests again after the window expires', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('ip-reset');
    expect(checkRateLimit('ip-reset')).toBe(false);

    vi.advanceTimersByTime(WINDOW_MS + 1000);
    expect(checkRateLimit('ip-reset')).toBe(true);
  });

  // ─── Identifier isolation ────────────────────────────────────────────────────

  it('isolates counters per identifier — exhausting one does not affect another', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('ip-a');
    expect(checkRateLimit('ip-a')).toBe(false);
    // Different identifier must still be allowed
    expect(checkRateLimit('ip-b')).toBe(true);
  });

  it('treats empty string identifier as the shared "unknown" bucket', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('');
    expect(checkRateLimit('')).toBe(false);
  });

  it('treats whitespace-only identifier as the shared "unknown" bucket', () => {
    // Exhaust the unknown bucket
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('unknown');
    // Whitespace string should map to the same bucket and therefore be blocked
    expect(checkRateLimit('   ')).toBe(false);
  });

  it('treats "unknown" identifier as a rate-limited shared bucket (not an escape hatch)', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('unknown');
    expect(checkRateLimit('unknown')).toBe(false);
  });

  // ─── Window boundary precision ───────────────────────────────────────────────

  it('does not reset early — still blocked 1 ms before window expiry', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('ip-boundary');
    vi.advanceTimersByTime(WINDOW_MS - 1);
    expect(checkRateLimit('ip-boundary')).toBe(false);
  });

  it('resets exactly at window expiry + 1 ms', () => {
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('ip-exact');
    vi.advanceTimersByTime(WINDOW_MS + 1);
    expect(checkRateLimit('ip-exact')).toBe(true);
  });

  // ─── Purge interval ──────────────────────────────────────────────────────────

  it('purges expired entries after PURGE_INTERVAL_MS', () => {
    // Fill and expire an entry
    for (let i = 0; i < MAX_REQUESTS; i++) checkRateLimit('ip-purge');
    vi.advanceTimersByTime(WINDOW_MS + 1);   // entry is now expired
    vi.advanceTimersByTime(PURGE_INTERVAL_MS); // purge fires

    // After purge, a new window should start fresh
    expect(checkRateLimit('ip-purge')).toBe(true);
  });

  // ─── Return-value consistency ────────────────────────────────────────────────

  it('returns boolean true/false, not truthy/falsy', () => {
    const result = checkRateLimit('ip-types');
    expect(typeof result).toBe('boolean');
  });
});
