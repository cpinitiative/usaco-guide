import algoliasearch from 'algoliasearch/lite';

export const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID ?? '3CFULMFIDW',
  process.env.ALGOLIA_API_KEY ?? 'b1b046e97b39abe6c905e0ad1df08d9e'
);
