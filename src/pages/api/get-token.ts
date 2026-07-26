import { OAuthApp } from '@octokit/oauth-app';
import type { NextApiRequest, NextApiResponse } from 'next';
import { checkRateLimit, getClientIdentifier } from '../../lib/rateLimit';

// F-16: explicitly cap body size
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4kb',
    },
  },
};

function getClientSecret(): string {
  const secret = process.env.EDITOR_CLIENT_SECRET;
  if (!secret) {
    throw new Error(
      'EDITOR_CLIENT_SECRET is not configured. Set it in your environment variables.'
    );
  }
  return secret;
}

const clientId = process.env.NEXT_PUBLIC_EDITOR_CLIENT_ID;
if (!clientId) {
  throw new Error(
    'NEXT_PUBLIC_EDITOR_CLIENT_ID is not configured. Set it in your environment variables.'
  );
}

interface RequestBody {
  code: string;
}

function getAllowedOrigins(): string[] {
  const origins = [
    process.env.NEXT_PUBLIC_SITE_URL || 'https://usaco.guide',
    'https://usaco.guide',
  ];
  if (process.env.NODE_ENV !== 'production') {
    origins.push('http://localhost:3000');
  }
  return origins;
}

function isOriginAllowed(origin: string | undefined): boolean {
  if (!origin) return false;
  return getAllowedOrigins().some(allowed => allowed && origin === allowed);
}

/**
 * F-07: Set CORS response headers so the browser CORS policy is enforced in
 * addition to the server-side origin check.  Previously the handler validated
 * Origin but never emitted Access-Control-Allow-Origin, meaning browser CORS
 * enforcement was absent.
 */
function setCorsHeaders(response: NextApiResponse, origin: string): void {
  response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Vary by Origin so caches don't serve the wrong CORS header to different origins
  response.setHeader('Vary', 'Origin');
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ token: string } | { error: string }>
) {
  const origin = request.headers.origin as string | undefined;

  // F-07: Handle preflight before any auth/rate-limit checks
  if (request.method === 'OPTIONS') {
    if (isOriginAllowed(origin)) {
      setCorsHeaders(response, origin!);
      return response.status(204).end();
    }
    return response.status(403).end();
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!checkRateLimit(getClientIdentifier(request as { ip?: string; headers?: Record<string, string | string[]> }))) {
    return response.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    if (!isOriginAllowed(origin)) {
      return response.status(403).json({ error: 'Origin not allowed' });
    }

    // F-07: Emit CORS headers on every allowed response so the browser will
    // accept the response body for cross-origin requests
    setCorsHeaders(response, origin!);

    const { code } = request.body as RequestBody;

    if (!code) {
      return response.status(400).json({ error: 'Missing code parameter' });
    }

    if (typeof code !== 'string' || code.length > 200) {
      return response.status(400).json({ error: 'Invalid code parameter' });
    }

    const appClientId = process.env.NEXT_PUBLIC_EDITOR_CLIENT_ID;
    if (!appClientId) {
      return response.status(500).json({ error: 'Server misconfigured: missing client ID' });
    }

    const app = new OAuthApp({
      clientType: 'github-app',
      clientId: appClientId,
      clientSecret: getClientSecret(),
    });

    const {
      authentication: { token },
    } = await app.createToken({
      code,
    });

    response.json({ token });
  } catch {
    response.status(500).json({ error: 'Failed to create token' });
  }
}
