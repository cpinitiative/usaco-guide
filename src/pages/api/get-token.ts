import { OAuthApp } from '@octokit/oauth-app';
import type { NextApiRequest, NextApiResponse } from 'next';

const app = new OAuthApp({
  clientType: 'github-app',
  clientId: process.env.NEXT_PUBLIC_EDITOR_CLIENT_ID ?? '',
  clientSecret: process.env.EDITOR_CLIENT_SECRET ?? '',
});

interface RequestBody {
  code: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ token: string } | { error: string }>
) {
  try {
    // Type assertion for request body
    const { code } = request.body as RequestBody;

    console.log('Received code in API:', code);

    if (!code) {
      return response.status(400).json({ error: 'Missing code parameter' });
    }

    console.log('Attempting to create token with code...');
    const {
      authentication: { token },
    } = await app.createToken({
      code,
    });

    console.log('Token created successfully');
    response.json({ token });
  } catch (error) {
    console.error('Error in get-token:', error);
    response.status(500).json({ error: 'Failed to create token' });
  }
}
