export const ALGOLIA_INDEX_NAME =
  typeof process !== 'undefined' && process.env?.GATSBY_ALGOLIA_INDEX_NAME
    ? `${process.env.GATSBY_ALGOLIA_INDEX_NAME}_problems`
    : 'dev_problems';

export const ALGOLIA_APP_ID =
  typeof process !== 'undefined' && process.env?.GATSBY_ALGOLIA_APP_ID
    ? process.env.GATSBY_ALGOLIA_APP_ID
    : '';

export const ALGOLIA_SEARCH_KEY =
  typeof process !== 'undefined' && process.env?.GATSBY_ALGOLIA_SEARCH_KEY
    ? process.env.GATSBY_ALGOLIA_SEARCH_KEY
    : '';
