import algoliasearch from 'algoliasearch/lite';

export const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID ?? '3CFULMFIDW',
  process.env.GATSBY_ALGOLIA_SEARCH_KEY ?? 'cdfadff49930ec4dc3327807edd10b8c'
);
