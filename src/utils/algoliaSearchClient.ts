import { algoliasearch } from 'algoliasearch';

const searchClient = algoliasearch(
  process.env.ALGOLIA_API_KEY || '3CFULMFIDW',
  process.env.ALGOLIA_APP_ID || 'cdfadff49930ec4dc3327807edd10b8c'
);

export default searchClient;
