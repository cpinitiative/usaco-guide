import { liteClient } from 'algoliasearch/lite';

// Search-only key. Production sets NEXT_PUBLIC_ALGOLIA_SEARCH_KEY to a key
// restricted to the prod_* indices and usaco.guide referers; the fallback is
// for every other build and should be a key limited to the dev_* indices with
// a per-IP rate limit, since it ships in every clone and fork of this repo.
const liteSearchClient = liteClient(
  '3CFULMFIDW',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ||
    'cdfadff49930ec4dc3327807edd10b8c'
);

// Headless browsers (navigator.webdriver === true) have been scraping the
// /problems filter pages through rotating proxy IPs, firing enough live
// queries to exhaust our Algolia search quota (see #6458). They ignore
// robots.txt, so serve them empty results locally instead of hitting Algolia.
const isAutomatedBrowser =
  typeof navigator !== 'undefined' && navigator.webdriver;

const emptySearchResult = (indexName: string) => ({
  index: indexName,
  hits: [],
  nbHits: 0,
  nbPages: 0,
  page: 0,
  hitsPerPage: 0,
  facets: {},
  exhaustiveNbHits: true,
  processingTimeMS: 0,
  query: '',
  params: '',
});

const searchClient = isAutomatedBrowser
  ? {
      ...liteSearchClient,
      search: (requests => {
        const requestList = Array.isArray(requests)
          ? requests
          : requests.requests;
        return Promise.resolve({
          results: requestList.map(request =>
            emptySearchResult('indexName' in request ? request.indexName : '')
          ),
        });
      }) as typeof liteSearchClient.search,
    }
  : liteSearchClient;

export default searchClient;
