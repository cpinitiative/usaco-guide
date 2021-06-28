import { moduleIDToSectionMap } from '../../content/ordering';
import {
  AlgoliaEditorFile,
  AlgoliaEditorModuleFile,
  AlgoliaEditorSolutionFile,
} from '../models/algoliaEditorFile';
import { AlgoliaProblemInfo } from '../models/problem';
import extractSearchableText from './extract-searchable-text';

const pageQuery = `{
  pages: allXdm(filter: {fileAbsolutePath: {regex: "/content/"}}) {
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
        mdast
      }
    }
  }
}`;

function pageToAlgoliaRecord({
  node: { id, frontmatter, fields, mdast, ...rest },
}) {
  return {
    objectID: frontmatter.id,
    ...frontmatter,
    ...fields,
    ...rest,
    content: extractSearchableText(JSON.parse(mdast)),
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

export const filesQuery = `{
  data: allXdm(filter: {fileAbsolutePath: {regex: "/(content)|(solutions)/"}}) {
    edges {
      node {
        frontmatter {
          title
          id
        }
        parent {
          ... on File {
            relativePath
            sourceInstanceName
          }
        }
      }
    }
  }
  problems: allProblemInfo {
    edges {
      node {
        uniqueId
        name
        source
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
  {
    query: filesQuery,
    transformer: ({ data }): AlgoliaEditorFile[] => {
      const moduleFiles: AlgoliaEditorModuleFile[] = [];
      data.data.edges.forEach(({ node }) => {
        if (node.parent.sourceInstanceName === 'content') {
          moduleFiles.push({
            title: node.frontmatter.title,
            id: node.frontmatter.id,
            path: `${node.parent.sourceInstanceName}/${node.parent.relativePath}`,
          });
        }
      });
      const solutionFiles: AlgoliaEditorSolutionFile[] = [];
      data.problems.edges.forEach(({ node }) => {
        const module = moduleFiles.find(
          file => file.id === node.module?.frontmatter.id
        );
        const relativePath = data.data.edges.find(
          ({ node: fileNode }) =>
            fileNode.parent.sourceInstanceName === 'solutions' &&
            fileNode.frontmatter.id === node.uniqueId
        )?.node.parent.relativePath;
        const file: AlgoliaEditorSolutionFile = solutionFiles.find(
          file => file.id === node.uniqueId
        ) || {
          id: node.uniqueId,
          title: node.name,
          source: node.source,
          solutions: [],
          path: relativePath ? `solutions/${relativePath}` : null,
          problemModules: [],
        };
        if (solutionFiles.indexOf(file) !== -1) {
          solutionFiles.splice(solutionFiles.indexOf(file), 1);
        }
        if (module != null) {
          file.problemModules.push(module);
        }
        if (node.solution != null) {
          // for some reason not making a copy messes with algolia change detection
          file.solutions.push({ ...node.solution });
        }
        solutionFiles.push(file);
      });
      return [
        ...moduleFiles.map<
          { kind: 'module'; objectID: string } & AlgoliaEditorModuleFile
        >(x => ({
          ...x,
          kind: 'module',
          objectID: x.id,
        })),
        ...solutionFiles.map<
          { kind: 'solution'; objectID: string } & AlgoliaEditorSolutionFile
        >(x => ({
          ...x,
          kind: 'solution',
          objectID: x.id,
        })),
      ];
    },
    indexName: process.env.ALGOLIA_INDEX_NAME + '_editorFiles',
    matchFields: [
      'kind',
      'title',
      'id',
      'source',
      'solutions',
      'path',
      'problemModules',
    ],
  },
];

module.exports = queries;
