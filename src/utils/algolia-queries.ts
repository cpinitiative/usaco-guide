import { moduleIDToSectionMap } from '../../content/ordering';
import { AlgoliaProblemInfo } from '../models/problem';
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
  data: allProblemInfo {
    edges {
      node {
        uniqueId
        name
        source
        tags
        url
        isStarred
        difficulty
        solution {
          kind
          label
          labelTooltip
          url
          sketch
        }
        module {
          frontmatter {
            id
            title
          }
        }
      }
    }
  }
}`;

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
    transformer: ({ data }): AlgoliaProblemInfo[] => {
      const res: AlgoliaProblemInfo[] = [];
      data.data.edges.forEach(({ node }) => {
        // some problems appear in multiple modules
        const existingProblem = res.find(x => x.objectID === node.uniqueId);
        // some problems (from extraProblems.json) don't have modules associated with them
        const moduleInfo = node.module
          ? {
              id: node.module.frontmatter.id,
              title: node.module.frontmatter.title,
            }
          : null;
        if (existingProblem) {
          existingProblem.tags = [
            ...new Set([...existingProblem.tags, ...(node.tags || [])]),
          ];
          if (moduleInfo) existingProblem.problemModules.push(moduleInfo);
        } else {
          res.push({
            objectID: node.uniqueId,
            name: node.name,
            source: node.source,
            tags: node.tags || [],
            url: node.url,
            difficulty: node.difficulty,
            isStarred: node.isStarred,
            // this removes null fields from the problem info solution
            // graphql doesn't do this for us so we need to do it manually
            solution: node.solution
              ? (Object.fromEntries(
                  Object.entries(node.solution).filter(([_, v]) => v != null)
                ) as any)
              : null,
            problemModules: moduleInfo ? [moduleInfo] : [],
          });
        }
      });
      return res;
    },
    indexName: process.env.ALGOLIA_INDEX_NAME + '_problems',
    matchFields: [
      'source',
      'name',
      'tags',
      'url',
      'difficulty',
      'isStarred',
      'tags',
      'problemModules',
      'solution',
    ],
  },
];

module.exports = queries;
