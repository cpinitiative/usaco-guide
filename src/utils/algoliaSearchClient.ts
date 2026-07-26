import { algoliasearch } from 'algoliasearch';

const appId = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;

let searchClient: ReturnType<typeof algoliasearch>;

if (!appId || !apiKey) {
  searchClient = {
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
  } as unknown as ReturnType<typeof algoliasearch>;
} else {
  searchClient = algoliasearch(appId, apiKey);
}

export default searchClient;
