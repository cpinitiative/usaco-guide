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
  try {
    const data = await parse(request.body.url);
    response.json({ data });
  } catch (error) {
    console.error('Error parsing URL:', error);
    response.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      url: request.body.url,
    });
  }
}
