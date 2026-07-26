/**
 * Generate a random ID string of the given length.
 *
 * Uses the Web Crypto API (available in all modern browsers and Node.js 19+)
 * so the output is cryptographically unpredictable.  Falls back to
 * Math.random() in environments that do not expose crypto (e.g. old Jest
 * environments without jsdom) — the fallback is intentionally documented as
 * non-cryptographic and should not be used for security-sensitive IDs.
 */
export default function generateRandomId(length = 10): string {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
      .map(b => chars[b % chars.length])
      .join('');
  }

  // Non-cryptographic fallback (development / test environments only)
  return Array.from({ length }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}
