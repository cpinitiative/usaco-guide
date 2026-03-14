export const ALGOLIA_INDEX_NAME =
  typeof process !== "undefined" && process.env?.ALGOLIA_INDEX_NAME
    ? `${process.env.ALGOLIA_INDEX_NAME}_problems`
    : "dev_problems";

export const ALGOLIA_APP_ID =
  typeof process !== "undefined" && process.env?.ALGOLIA_APP_ID
    ? process.env.ALGOLIA_APP_ID
    : "";

export const ALGOLIA_SEARCH_KEY =
  typeof process !== "undefined" && process.env?.ALGOLIA_SEARCH_KEY
    ? process.env.ALGOLIA_SEARCH_KEY
    : "";
