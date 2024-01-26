import axios from 'axios';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
interface RequestBody {
  url: string;
}
export default async function handler(
  request: GatsbyFunctionRequest<RequestBody>,
  response: GatsbyFunctionResponse
) {
  // const res = await axios.get(
  //   'https://codeforces.com/problemset/problem/1917/D'
  // );
  console.log(request.body.url, 'url');
  const res = await axios.get(request.body.url);
  response.json({ data: res.data });
}
