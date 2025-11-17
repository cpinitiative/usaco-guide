import axios from 'axios';
import parseAc from './ac';
import parseCC from './cc';
import parseCf from './cf';
import parseCses from './cses';
import parseUsaco from './usaco';

export const parsers = {
  'codeforces.com': parseCf,
  'usaco.org': parseUsaco,
  'cses.fi': parseCses,
  'atcoder.jp': parseAc,
  'codechef.com': parseCC,
};

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
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const headers = browserHeaders;
      const delay = attempt * 2000; // 0s, 2s, 4s delays

      if (delay > 0) {
        console.log(
          `Retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`
        );
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      const config = {
        headers,
        timeout: 15000,
        maxRedirects: 5,
        validateStatus: (status: number) => status < 400, // Accept 3xx redirects
      };

      const response = await axios.get(url, config);
      if (response.status >= 400) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      }

      // Check if we got a challenge page instead of actual content
      /*
      if (
        response.data.includes('challenge-platform') ||
        response.data.includes('Just a moment') ||
        response.data.includes('cf-mitigated')
      ) {
        console.log(response.data);
        console.log(`Got challenge page on attempt ${attempt + 1}`);
        if (attempt === maxRetries - 1) {
          throw new Error('Cloudflare challenge page received - cannot bypass');
        }
        continue;
      }
      */

      return response.data;
    } catch (error) {
      console.error(
        `Attempt ${attempt + 1} failed:`,
        error instanceof Error ? error.message : error
      );

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
    // Extract contest ID and problem index from URL
    // First try: https://codeforces.com/problemset/problem/{contestId}/{index}
    let match = url.match(/\/problemset\/problem\/(\d+)\/([A-Z])/);
    let isProblemsetFormat = true;

    if (!match) {
      // Second try: https://codeforces.com/contest/{contestId}/problem/{index}
      match = url.match(/\/contest\/(\d+)\/problem\/([A-Z])/);
      isProblemsetFormat = false;
    }

    if (!match) return null;

    const [, contestIdStr, problemIndex] = match;
    const contestId = parseInt(contestIdStr, 10);
    console.log(`Contest ID: ${contestId}, Problem Index: ${problemIndex}`);

    let response;
    let problem: any = null;

    if (isProblemsetFormat) {
      // Try Codeforces API - fetch all problems and search for the specific one
      const apiUrl = 'https://codeforces.com/api/problemset.problems';
      console.log(`Trying Codeforces problemset API: ${apiUrl}`);

      response = await axios.get(apiUrl, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; USACO-Guide/1.0)',
        },
      });

      if (response.data.status === 'OK' && response.data.result.problems) {
        // Search for the specific problem in the problems array
        problem = response.data.result.problems.find(
          (p: any) => p.contestId === contestId && p.index === problemIndex
        );

        if (problem) {
          console.log(`Found problem via problemset API: ${problem.name}`);
        } else {
          console.log(
            `Problem ${contestId}${problemIndex} not found in problemset API response`
          );
        }
      }
    } else {
      // Try contest standings API for contest format
      const apiUrl = `https://codeforces.com/api/contest.standings?contestId=${contestId}`;
      console.log(`Trying Codeforces contest standings API: ${apiUrl}`);

      response = await axios.get(apiUrl, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; USACO-Guide/1.0)',
        },
      });

      if (response.data.status === 'OK' && response.data.result.problems) {
        // Search for the specific problem in the problems array
        problem = response.data.result.problems.find(
          (p: any) => p.index === problemIndex
        );

        if (problem) {
          console.log(
            `Found problem via contest standings API: ${problem.name}`
          );
        } else {
          console.log(
            `Problem ${problemIndex} not found in contest standings API response`
          );
        }
      }
    }

    if (problem) {
      // Return HTML structure that matches what parseCf expects
      return `
        <html>
          <head><title>${problem.name}</title></head>
          <body>
            <div class="problem-statement">
              <div class="header">
                <div class="title">${problem.index}. ${problem.name}</div>
                <div class="time-limit">Time limit: ${problem.timeLimit || 'Unknown'}</div>
                <div class="memory-limit">Memory limit: ${problem.memoryLimit || 'Unknown'}</div>
                ${problem.points ? `<div class="points">Points: ${problem.points}</div>` : ''}
                ${problem.rating ? `<div class="rating">Rating: ${problem.rating}</div>` : ''}
              </div>
              <div class="content">
                <p>Problem fetched via API. For full problem statement, visit: <a href="${url}">${url}</a></p>
                <p>Contest: ${problem.contestId}${problem.index}</p>
                ${problem.tags && problem.tags.length > 0 ? `<p>Tags: ${problem.tags.join(', ')}</p>` : ''}
                <p>Type: ${problem.type || 'PROGRAMMING'}</p>
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
  let html;

  try {
    if (url.includes('codeforces.com')) {
      try {
        html = await tryCodeforcesAPI(url);
      } catch (error) {
        console.log(
          'Codeforces API failed, trying Direct scraping fallback...'
        );
        const apiResult = await fetchWithRetry(url);
        if (apiResult) {
          html = apiResult;
        } else {
          throw new Error(
            `Failed to fetch Codeforces problem ${url}. Both direct scraping and API fallback failed. This may be due to Cloudflare protection or the problem not being available.`
          );
        }
      }
    } else {
      html = await fetchWithRetry(url);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    // Return fallback data instead of throwing
    html = '';
  }

  for (const [domain, parser] of Object.entries(parsers)) {
    if (url.includes(domain)) {
      try {
        return parser(url, html || '');
      } catch (error) {
        console.error(`Parser error for ${domain}:`, error);
        // Return fallback data based on domain
        if (domain === 'usaco.org') {
          const id = url.split('=').at(-1)?.trim() || 'unknown';
          return {
            uniqueId: `usaco-${id}`,
            name: 'unknown',
            source: 'unknown',
            solutionMetadata: {
              kind: 'USACO',
              usacoId: isNaN(+id) ? 0 : +id,
            },
          };
        }
        // For other domains, return a generic fallback
        return {
          uniqueId: 'unknown',
          name: 'unknown',
          source: 'unknown',
          solutionMetadata: {},
        };
      }
    }
  }

  // No parser found - return fallback
  return {
    uniqueId: 'unknown',
    name: 'unknown',
    source: 'unknown',
    solutionMetadata: {},
  };
}
