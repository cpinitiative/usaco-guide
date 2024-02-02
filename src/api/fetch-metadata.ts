import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import parse from './(parsers)/parse';
interface RequestBody {
  url: string;
}
export default async function handler(
  request: GatsbyFunctionRequest<RequestBody>,
  response: GatsbyFunctionResponse
) {
  console.log(request.body.url, 'url');
  response.json({ data: await parse(request.body.url) });
}
