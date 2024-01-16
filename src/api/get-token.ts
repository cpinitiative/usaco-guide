import { OAuthApp } from '@octokit/oauth-app';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

const app = new OAuthApp({
  clientType: 'github-app',
  clientId: process.env.GATSBY_EDITOR_CLIENT_ID ?? '',
  clientSecret: process.env.EDITOR_CLIENT_SECRET ?? '',
});
interface RequestBody {
  code: string;
}
export default async function handler(
  request: GatsbyFunctionRequest<RequestBody>,
  response: GatsbyFunctionResponse
) {
  const {
    authentication: { token },
  } = await app.createToken({
    code: request.body.code,
  });
  response.json({ token });
}
