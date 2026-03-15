import { OAuthApp } from '@octokit/oauth-app';
import type { NextApiRequest, NextApiResponse } from 'next';

const app = new OAuthApp({
  clientType: 'github-app',
  clientId: process.env.PUBLIC_EDITOR_CLIENT_ID ?? '',
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

    if (!code) {
      return response.status(400).json({ error: 'Missing code parameter' });
    }

    const {
      authentication: { token },
    } = await app.createToken({
      code,
    });

    response.json({ token });
  } catch (error) {
    console.error('Error in get-token:', error);
    response.status(500).json({ error: 'Failed to create token' });
  }
}
