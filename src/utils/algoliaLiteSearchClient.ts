import { liteClient } from 'algoliasearch/lite';

const appId = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;

let liteSearchClient: ReturnType<typeof liteClient>;

if (!appId || !apiKey) {
  liteSearchClient = {
    search: () =>
      Promise.resolve({
        hits: [],
        nbHits: 0,
        page: 0,
        nbPages: 0,
        hitsPerPage: 0,
        processingTimeMS: 0,
        query: '',
        params: '',
      }),
  } as unknown as ReturnType<typeof liteClient>;
} else {
  liteSearchClient = liteClient(appId, apiKey);
}

export default liteSearchClient;
