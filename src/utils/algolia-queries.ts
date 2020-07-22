import { moduleIDToSectionMap } from '../../content/ordering';
import extractSearchableText from './extract-searchable-text';

const pageQuery = `{
  pages: allMdx(filter: {fileAbsolutePath: {regex: "/content/"}}) {
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
        mdxAST
      }
    }
  }
}`;

function pageToAlgoliaRecord({
  node: { id, frontmatter, fields, mdxAST, ...rest },
}) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
    content: extractSearchableText(mdxAST),
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
