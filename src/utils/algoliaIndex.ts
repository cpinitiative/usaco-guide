// Production builds set NEXT_PUBLIC_ALGOLIA_INDEX_NAME=prod. Every other build
// (local dev, Vercel previews, forks) searches the dev_* indices.
export const algoliaIndexPrefix =
  process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'dev';

export const algoliaIndexName = (
  suffix: 'modules' | 'problems' | 'editorFiles'
) => `${algoliaIndexPrefix}_${suffix}`;
