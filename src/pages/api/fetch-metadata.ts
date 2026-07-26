import type { NextApiRequest, NextApiResponse } from 'next';
import parse from './(parsers)/parse';
import { checkRateLimit, getClientIdentifier } from '../../lib/rateLimit';

// F-16: explicitly cap body size so Next.js never buffers multi-megabyte payloads
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4kb',
    },
  },
};

// F-08: maximum URL length — prevents CPU-exhaustion via huge URL strings
const MAX_URL_LENGTH = 2000;

interface RequestBody {
  url: string;
}

const ALLOWED_DOMAINS = [
  'codeforces.com',
  'usaco.org',
  'cses.fi',
  'atcoder.jp',
  'codechef.com',
];

function extractHostname(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function isAllowedSubdomain(hostname: string, domain: string): boolean {
  if (hostname === domain) return true;
  if (hostname === `www.${domain}`) return true;
  if (hostname.endsWith(`.${domain}`)) return true;
  return false;
}

function validateUrl(url: string): void {
  const hostname = extractHostname(url);
  if (!hostname) {
    throw new Error('Invalid URL format');
  }
  const allowed = ALLOWED_DOMAINS.some(domain => isAllowedSubdomain(hostname, domain));
  if (!allowed) {
    throw new Error(`URL hostname "${hostname}" is not allowed`);
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!checkRateLimit(getClientIdentifier(request))) {
    return response.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const { url } = request.body as RequestBody;
    if (!url) {
      return response.status(400).json({ error: 'Missing url parameter' });
    }

    // F-08: type check and length cap BEFORE any further processing
    if (typeof url !== 'string' || url.length > MAX_URL_LENGTH) {
      return response.status(400).json({ error: 'Invalid url parameter' });
    }

    try {
      validateUrl(url);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message });
    }

    response.json({ data: await parse(url) });
  } catch {
    response.status(500).json({ error: 'Failed to fetch metadata' });
  }
}
