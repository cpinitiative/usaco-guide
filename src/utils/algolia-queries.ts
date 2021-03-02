import { moduleIDToSectionMap } from '../../content/ordering';
import extractSearchableText from './extract-searchable-text';
import {string} from "prop-types";

function transform(tags: string, starred: string, diff: string): string {
  const omniData = tags + " " + starred + " " + diff;
  console.log(omniData);
  return omniData;
}

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
        frontmatter {
          id
          title
        }
        problems {
          source
          name
          id
          difficulty
          starred
          tags
          solID
          solQuality
          url
          uniqueID
        }
      }
    }
  }
}`;

function problemToAlgoliaRecord({ uniqueID, ...rest }, problemModules) {
  return {
    objectID: uniqueID,
    ...rest,
    ...problemModules,
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
      let problemModules = {};
      data.data.edges.forEach(edge => {
        edge.node.problems.forEach(x => {
          if (!(x.id in problemModules)) {
            problemModules[x.id] = [];
          }
          problemModules[x.id].push({
            id: edge.node.frontmatter.id,
            title: edge.node.frontmatter.title,
            difficulty: edge.node.problems.difficulty,
          });
        });
      });
      data.data.edges.forEach(edge => {
        edge.node.problems.forEach(x => {
          if (!!res.find(existing => existing.objectID === x.uniqueID)) return;

          res.push(problemToAlgoliaRecord(x, problemModules[x.id]));
        });
      });
      console.log(res);
      return res;
    },
    indexName: process.env.ALGOLIA_INDEX_NAME + '_problems',
    matchFields: [
      'source',
      'name',
      'id',
      'difficulty',
      'starred',
      'solID',
      'solQuality',
      'url',
      // I think these two are causing Algolia to constantly re-update bc they're arrays/objects
      // and gatsby-plugin-algolia doesn't do deep comparisons (?)
      // 'tags',
      // 'problemModules',
    ],
  },
];

module.exports = queries;
