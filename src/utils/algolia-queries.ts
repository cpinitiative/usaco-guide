import { moduleIDToSectionMap } from '../../content/ordering';

const pageQuery = `{
  pages: allMdx {
    edges {
      node {
        id
        frontmatter {
          id
          title
          description
        }
        fields {
          division
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.pages.edges
        .filter(x => x.node.frontmatter.id in moduleIDToSectionMap)
        .map(pageToAlgoliaRecord),
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },
];

module.exports = queries;
