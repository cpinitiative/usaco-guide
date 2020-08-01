import { moduleIDToSectionMap } from '../../content/ordering';
import extractSearchableText from './extract-searchable-text';

const pageQuery = `{
  pages: allMdx(filter: {fileAbsolutePath: {regex: "/content/"}}) {
    edges {
      node {
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
    objectID: frontmatter.id,
    ...frontmatter,
    ...fields,
    ...rest,
    content: extractSearchableText(mdxAST),
  };
}

const problemsQuery = `{
  data: allMdx(filter: {fileAbsolutePath: {regex: "/content/"}}) {
    edges {
      node {
        problems {
          source
          name
          id
          difficulty
          starred
          tags
          sol
          solQuality
          uniqueID
        }
      }
    }
  }
}`;

function problemToAlgoliaRecord({ uniqueID, ...rest }) {
  return {
    objectID: uniqueID,
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
    indexName: process.env.ALGOLIA_INDEX_NAME + '_modules',
    matchFields: ['title', 'description', 'content', 'id', 'division'],
  },
  {
    query: problemsQuery,
    transformer: ({ data }) => {
      let res = [];
      data.data.edges.forEach(edge => {
        res = [...res, ...edge.node.problems.map(problemToAlgoliaRecord)];
      });
      return res;
    },
    indexName: process.env.ALGOLIA_INDEX_NAME + '_problems',
    matchFields: [
      'source',
      'name',
      'id',
      'difficulty',
      'starred',
      'tags',
      'sol',
      'solQuality',
    ],
  },
];

module.exports = queries;
