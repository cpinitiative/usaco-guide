import { OAuthApp } from '@octokit/oauth-app';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const app = new OAuthApp({
  clientType: 'github-app',
  clientId: process.env.GATSBY_EDITOR_CLIENT_ID ?? '',
  clientSecret: process.env.EDITOR_CLIENT_SECRET ?? '',
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  console.log(request.query.code);
  const { authentication: token } = await app.createToken({
    code: request.query.code as string,
  });
  response.redirect(302, `/editor/pr?token=${token.token}`);
}
