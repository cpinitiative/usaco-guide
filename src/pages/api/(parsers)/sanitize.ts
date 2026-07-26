/**
 * Shared sanitization utilities for all problem-metadata parsers.
 *
 * F-05: Scraped external HTML is passed through regex parsers and the raw
 * captured string was previously returned without any cleaning.  An attacker
 * who controls a problem title on an allowed domain (e.g. a user-created
 * AtCoder contest) could inject an XSS payload that survives into the UI.
 *
 * These helpers:
 *  1. Strip any residual HTML tags from the matched value.
 *  2. Decode HTML entities so stored text is plain Unicode.
 *  3. Collapse runs of whitespace to a single space.
 *  4. Hard-cap length to prevent DoS through large Firestore documents.
 */

const MAX_TITLE_LENGTH = 500;

/** Replace common named + numeric HTML entities with their Unicode equivalents. */
function decodeHtmlEntities(raw: string): string {
  return raw
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/gi, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

/**
 * Sanitize a problem title extracted from scraped HTML.
 *
 * Steps:
 *  1. Strip HTML tags AND their inner content for dangerous tags
 *     (script, style, iframe, object, embed).
 *  2. Strip remaining benign HTML tags (keep text content).
 *  3. Decode HTML entities.
 *  4. Collapse whitespace.
 *  5. Trim and cap at MAX_TITLE_LENGTH characters.
 */
export function sanitizeTitle(raw: string | null | undefined): string {
  if (!raw) return 'Unknown';

  // Step 1: remove dangerous tags including their content
  const withoutDangerousTags = raw.replace(
    /<(script|style|iframe|object|embed|noscript|template)[^>]*>[\s\S]*?<\/\1>/gi,
    ''
  );

  // Step 2: strip all remaining HTML tags (keep their text content)
  const stripped = withoutDangerousTags.replace(/<[^>]*>/g, '');

  // Step 3: decode HTML entities
  const decoded = decodeHtmlEntities(stripped);

  // Step 4 + 5: collapse whitespace, trim, cap length
  const collapsed = decoded.replace(/\s+/g, ' ').trim();
  return collapsed.slice(0, MAX_TITLE_LENGTH) || 'Unknown';
}
