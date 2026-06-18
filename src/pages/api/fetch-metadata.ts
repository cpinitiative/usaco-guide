import type { NextApiRequest, NextApiResponse } from 'next';
import parse from './(parsers)/parse';

interface RequestBody {
  url: string;
}
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { url } = request.body as RequestBody;
    if (!url) {
      return response.status(400).json({ error: 'Missing url parameter' });
    }
    console.log(url, 'url');
    response.json({ data: await parse(url) });
  } catch (error) {
    console.error('Error in fetch-metadata:', error);
    response.status(500).json({ error: 'Failed to fetch metadata' });
  }
}
