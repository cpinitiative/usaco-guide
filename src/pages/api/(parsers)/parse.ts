import axios from 'axios';
import parseAc from './ac';
import parseCC from './cc';
import parseCf from './cf';
import parseCses from './cses';
import parseUsaco from './usaco';
import { sanitizeTitle } from './sanitize';

export const parsers = {
  'codeforces.com': parseCf,
  'usaco.org': parseUsaco,
  'cses.fi': parseCses,
  'atcoder.jp': parseAc,
  'codechef.com': parseCC,
};

const ALLOWED_DOMAINS = Object.keys(parsers);

function extractHostname(url: string): string | null {
  try {
    const parsed = new URL(url);
    return parsed.hostname.toLowerCase();
  } catch {
    return null;
  }
}

function isPrivateOrSpecialIP(hostname: string): boolean {
  const privateRanges = [
    /^localhost$/,
    /^127\./,
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[01])\./,
    /^192\.168\./,
    /^169\.254\./,
    /^0\./,
    /^\[?::1\]?$/,
    /^\[?fe80:/i,
    /^metadata\.google\.internal$/,
    /^metadata\./,
  ];
  return privateRanges.some(regex => regex.test(hostname));
}

function isAllowedSubdomain(hostname: string, domain: string): boolean {
  if (hostname === domain) return true;
  if (hostname === `www.${domain}`) return true;
  return false;
}

function validateUrl(url: string): void {
  const hostname = extractHostname(url);
  if (!hostname) {
    throw new Error('Invalid URL format');
  }
  if (isPrivateOrSpecialIP(hostname)) {
    throw new Error('URL points to a private or special network address');
  }
  const allowed = ALLOWED_DOMAINS.some(
    domain => isAllowedSubdomain(hostname, domain)
  );
  if (!allowed) {
    throw new Error(
      `URL hostname "${hostname}" is not in the allowed list: ${ALLOWED_DOMAINS.join(', ')}`
    );
  }
}

const browserHeaders = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Language': 'en-US,en;q=0.9',
  DNT: '1',
  Connection: 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Cache-Control': 'max-age=0',
};

async function fetchWithRetry(url: string, maxRetries = 3): Promise<string> {
  validateUrl(url);

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const headers = browserHeaders;
      const delay = attempt * 2000;

      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      const config = {
        headers,
        timeout: 15000,
        maxRedirects: 3,
        validateStatus: (status: number) => status < 400,
        maxContentLength: 10 * 1024 * 1024, // 10MB max response
        maxBodyLength: 10 * 1024 * 1024,
      };

      const response = await axios.get(url, config);
      if (response.status >= 400) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      }

      let finalUrl: string | undefined;
      try {
        finalUrl = (response.request as any).res?.responseUrl;
      } catch {
        finalUrl = undefined;
      }

      if (finalUrl) {
        const finalHostname = extractHostname(finalUrl);
        if (
          !finalHostname ||
          !ALLOWED_DOMAINS.some(
            domain =>
              finalHostname === domain || finalHostname.endsWith('.' + domain)
          )
        ) {
          throw new Error(
            `Redirect target "${finalUrl}" is not in the allowed list`
          );
        }
      }

      return response.data;
    } catch (error) {
      if (attempt === maxRetries - 1) {
        throw error;
      }
    }
  }

  throw new Error('All retry attempts failed');
}

// Fallback function to try Codeforces API if direct scraping fails
async function tryCodeforcesAPI(url: string): Promise<string | null> {
  try {
    let match = url.match(/\/problemset\/problem\/(\d+)\/([A-Z])/);
    let isProblemsetFormat = true;

    if (!match) {
      match = url.match(/\/contest\/(\d+)\/problem\/([A-Z])/);
      isProblemsetFormat = false;
    }

    if (!match) return null;

    const [, contestIdStr, problemIndex] = match;
    const contestId = parseInt(contestIdStr, 10);
    let response;
    let problem: any = null;

    if (isProblemsetFormat) {
      const apiUrl = 'https://codeforces.com/api/problemset.problems';
      validateUrl(apiUrl);
      response = await axios.get(apiUrl, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; USACO-Guide/1.0)',
        },
      });

      if (response.data.status === 'OK' && response.data.result.problems) {
        problem = response.data.result.problems.find(
          (p: any) => p.contestId === contestId && p.index === problemIndex
        );
      }
    } else {
      const apiUrl = `https://codeforces.com/api/contest.standings?contestId=${contestId}`;
      validateUrl(apiUrl);
      response = await axios.get(apiUrl, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; USACO-Guide/1.0)',
        },
      });

      if (response.data.status === 'OK' && response.data.result.problems) {
        problem = response.data.result.problems.find(
          (p: any) => p.index === problemIndex
        );
      }
    }

    if (problem) {
      // Sanitize all API-sourced values before interpolating into HTML to
      // prevent XSS if the Codeforces API returns malicious content.
      const safeName = sanitizeTitle(problem.name);
      const safeIndex = sanitizeTitle(problem.index);
      const safeTimeLimit = sanitizeTitle(String(problem.timeLimit || 'Unknown'));
      const safeMemoryLimit = sanitizeTitle(String(problem.memoryLimit || 'Unknown'));
      const safePoints = problem.points ? sanitizeTitle(String(problem.points)) : null;
      const safeRating = problem.rating ? sanitizeTitle(String(problem.rating)) : null;
      const safeContestId = sanitizeTitle(String(problem.contestId || ''));
      const safeProblemIndex = sanitizeTitle(String(problem.index || ''));
      const safeType = sanitizeTitle(String(problem.type || 'PROGRAMMING'));
      // Tags are an array of strings — sanitize each element individually
      const safeTags: string[] =
        Array.isArray(problem.tags)
          ? problem.tags.map((t: unknown) => sanitizeTitle(String(t)))
          : [];
      // The problem URL was already validated by validateUrl() before this point,
      // but we HTML-encode it defensively for safe embedding in href attributes.
      const safeUrl = encodeURI(url);

      return `
        <html>
          <head><title>${safeName}</title></head>
          <body>
            <div class="problem-statement">
              <div class="header">
                <div class="title">${safeIndex}. ${safeName}</div>
                <div class="time-limit">Time limit: ${safeTimeLimit}</div>
                <div class="memory-limit">Memory limit: ${safeMemoryLimit}</div>
                ${safePoints ? `<div class="points">Points: ${safePoints}</div>` : ''}
                ${safeRating ? `<div class="rating">Rating: ${safeRating}</div>` : ''}
              </div>
              <div class="content">
                <p>Problem fetched via API. For full problem statement, visit: <a href="${safeUrl}">${safeUrl}</a></p>
                <p>Contest: ${safeContestId}${safeProblemIndex}</p>
                ${safeTags.length > 0 ? `<p>Tags: ${safeTags.join(', ')}</p>` : ''}
                <p>Type: ${safeType}</p>
              </div>
            </div>
          </body>
        </html>
      `;
    }
  } catch (error) {
    console.error('Codeforces API fallback failed:', error);
  }

  return null;
}

export default async function parse(url: string) {
  validateUrl(url);

  let html: string | null = null;

  try {
    if (url.includes('codeforces.com')) {
      // For Codeforces: try direct fetch first, fall back to API
      try {
        html = await fetchWithRetry(url);
      } catch {
        html = await tryCodeforcesAPI(url);
        if (!html) {
          throw new Error(
            `Failed to fetch Codeforces problem ${url}. Both direct scraping and API fallback failed.`
          );
        }
      }
    } else {
      // For all other domains: direct fetch
      html = await fetchWithRetry(url);
    }
  } catch (error) {
    throw new Error(
      `Failed to fetch html for url ${url}: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }

  if (!html) {
    throw new Error(
      `Failed to fetch html for url ${url}: No HTML content received`
    );
  }

  for (const [domain, parser] of Object.entries(parsers)) {
    if (url.includes(domain)) {
      return parser(url, html);
    }
  }
  throw new Error(`No parser found for this url.
Available parsers:
${Object.keys(parsers)
  .map(key => `  - ${key}`)
  .join('\n')}`);
}
