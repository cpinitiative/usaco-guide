import * as fs from 'fs';
import importFresh from 'import-fresh';
import * as path from 'path';
import { SECTIONS } from './content/ordering';
import { createXdmNode } from './src/gatsby/create-xdm-node';
import {
  checkInvalidUsacoMetadata,
  getProblemInfo,
  getProblemURL,
  ProblemMetadata,
} from './src/models/problem';
const { execSync } = require('child_process');

// Questionable hack to get full commit history so that timestamps work
try {
  execSync(
    `git fetch --unshallow https://github.com/cpinitiative/usaco-guide.git`
  );
} catch (e) {
  console.warn(
    'Git fetch failed. Ignore this if developing or building locally.'
  );
}

// ideally problems would be its own query with
// source nodes: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes

exports.onCreateNode = async api => {
  const { node, actions, loadNodeContent, createContentDigest, createNodeId } =
    api;

  const { createNodeField, createNode, createParentChildLink } = actions;

  if (node.internal.type === `File` && node.ext === '.mdx') {
    const content = await loadNodeContent(node);
    const xdmNode = await createXdmNode(
      {
        id: createNodeId(`${node.id} >>> Xdm`),
        node,
        content,
      },
      api
    );
    createNode(xdmNode);
    createParentChildLink({ parent: node, child: xdmNode });
  }

  function transformObject(obj, id) {
    const problemInfoNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type: 'ProblemInfo',
      },
    };
    createNode(problemInfoNode);
    createParentChildLink({ parent: node, child: problemInfoNode });
  }

  const isExtraProblems =
    node.internal.mediaType === 'application/json' &&
    node.sourceInstanceName === 'content' &&
    node.relativePath.endsWith('extraProblems.json');
  if (
    node.internal.mediaType === 'application/json' &&
    node.sourceInstanceName === 'content' &&
    (node.relativePath.endsWith('.problems.json') || isExtraProblems)
  ) {
    const content = await loadNodeContent(node);
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch {
      const hint = node.absolutePath
        ? `file ${node.absolutePath}`
        : `in node ${node.id}`;
      throw new Error(`Unable to parse JSON: ${hint}`);
    }

    const moduleId = parsedContent['MODULE_ID'];
    if (!moduleId && !isExtraProblems) {
      throw new Error(
        'Module ID not found in problem JSON file: ' + node.absolutePath
      );
    }

    const freshOrdering = importFresh<any>('./content/ordering');
    if (!isExtraProblems && !(moduleId in freshOrdering.moduleIDToSectionMap)) {
      throw new Error(
        '.problems.json moduleId does not correspond to module: ' +
          moduleId +
          ', path: ' +
          node.absolutePath
      );
    }

    Object.keys(parsedContent).forEach(tableId => {
      if (tableId === 'MODULE_ID') return;
      try {
        parsedContent[tableId].forEach((metadata: ProblemMetadata) => {
          checkInvalidUsacoMetadata(metadata);
          const freshOrdering = importFresh<any>('./content/ordering');
          transformObject(
            {
              ...getProblemInfo(metadata, freshOrdering),
              module: moduleId,
            },
            createNodeId(
              `${node.id} ${tableId} ${metadata.uniqueId} >>> ProblemInfo`
            )
          );
        });
      } catch (e) {
        console.error(
          'Failed to create problem info for',
          parsedContent[tableId]
        );
        throw new Error(e);
      }
    });

    if (moduleId) {
      // create a node that contains all of a module's problems
      const id = createNodeId(`${node.id} >>> ModuleProblemLists`);
      const problemLists = Object.keys(parsedContent)
        .filter(x => x !== 'MODULE_ID')
        .map(listId => ({
          listId,
          problems: parsedContent[listId].map(x => {
            const freshOrdering = importFresh<any>('./content/ordering');

            return {
              ...getProblemInfo(x, freshOrdering),
            };
          }),
        }));
      const data = {
        problemLists,
        moduleId,
      };
      const problemInfoNode = {
        ...data,
        id,
        children: [],
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(data),
          type: 'ModuleProblemLists',
        },
      };
      createNode(problemInfoNode);
      createParentChildLink({ parent: node, child: problemInfoNode });
    }
  } else if (
    node.internal.type === 'Xdm' &&
    node.fileAbsolutePath.includes('content')
  ) {
    const ordering = importFresh<any>('./content/ordering');
    if (!(node.frontmatter.id in ordering.moduleIDToSectionMap)) {
      throw new Error(
        'module id does not show up in ordering: ' +
          node.frontmatter.id +
          ', path: ' +
          node.absolutePath
      );
    }
    createNodeField({
      name: 'division',
      node,
      value: ordering.moduleIDToSectionMap[node.frontmatter.id],
    });

    // https://angelos.dev/2019/09/add-support-for-modification-times-in-gatsby/
    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();
    createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  fs.readFile('./src/redirects.txt', (err, data) => {
    if (err) throw new Error('error: ' + err);
    (data + '')
      .split('\n')
      .filter(line => line.charAt(0) !== '#')
      .map(line => {
        const tokens = line.split('\t');
        return {
          from: tokens[0],
          to: tokens[1],
        };
      })
      .forEach(({ from, to }) => {
        createRedirect({
          fromPath: from,
          toPath: to,
          redirectInBrowser: true,
          isPermanent: true,
        });
      });
  });

  const result = await graphql(`
    query {
      modules: allXdm(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        edges {
          node {
            frontmatter {
              id
              redirects
              prerequisites
            }
            fields {
              division
            }
            fileAbsolutePath
          }
        }
      }

      solutions: allXdm(
        filter: { fileAbsolutePath: { regex: "/solutions/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              id
              redirects
            }
          }
        }
      }

      problems: allProblemInfo {
        edges {
          node {
            uniqueId
            name
            url
            tags
            source
            solution {
              kind
              label
              labelTooltip
              sketch
              url
            }
            difficulty
            module {
              frontmatter {
                id
                title
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  // Check to make sure problems with the same unique ID have consistent information, and that there aren't duplicate slugs
  const problems = result.data.problems.edges;
  let problemSlugs = {}; // maps slug to problem unique ID
  let problemInfo = {}; // maps unique problem ID to problem info
  let problemURLToUniqueID = {}; // maps problem URL to problem unique ID
  let urlsThatCanHaveMultipleUniqueIDs = ['https://cses.fi/107/list/'];
  problems.forEach(({ node }) => {
    let slug = getProblemURL(node);
    if (
      problemSlugs.hasOwnProperty(slug) &&
      problemSlugs[slug] !== node.uniqueId
    ) {
      throw new Error(
        `The problems ${problemSlugs[slug]} and ${node.uniqueId} have the same slugs!`
      );
    }
    if (problemInfo.hasOwnProperty(node.uniqueId)) {
      const a = node,
        b = problemInfo[node.uniqueId];
      // Some problems with no corresponding module gets put into extraProblems.json.
      // If a problem has a module, then it should be removed from extraProblems.json.
      if (!a.module || !b.module) {
        throw new Error(
          `The problem ${node.uniqueId} is in both extraProblems.json and in another module at the same time. Remove this problem from extraProblems.json.`
        );
      }
      if (a.name !== b.name || a.url !== b.url || a.source !== b.source) {
        throw new Error(
          `The problem ${node.uniqueId} appears in both ${
            node.module.frontmatter.id
          } - ${node.module.frontmatter.title} and ${
            problemInfo[node.uniqueId].module.frontmatter.id
          } - ${
            problemInfo[node.uniqueId].module.frontmatter.title
          } but has different information! They need to have the same name / url / source.`
        );
      }
    }
    if (
      problemURLToUniqueID.hasOwnProperty(node.url) &&
      problemURLToUniqueID[node.url] !== node.uniqueId &&
      !urlsThatCanHaveMultipleUniqueIDs.includes(node.url)
    ) {
      throw new Error(
        `The URL ${node.url} is assigned to both problem unique ID ${
          problemURLToUniqueID[node.url]
        } and ${
          node.uniqueId
        }. Is this correct? (If this is correct, add the URL to \`urlsThatCanHaveMultipleUniqueIDs\` in gatsby-node.ts)`
      );
    }
    problemSlugs[slug] = node.uniqueId;
    problemInfo[node.uniqueId] = node;
    problemURLToUniqueID[node.url] = node.uniqueId;
  });
  // End problems check

  const moduleTemplate = require.resolve(`./src/templates/moduleTemplate.tsx`);
  const modules = result.data.modules.edges;
  modules.forEach(({ node }) => {
    if (!node.fields?.division) return;
    const path = `/${node.fields.division}/${node.frontmatter.id}`;

    if (node.frontmatter.redirects) {
      node.frontmatter.redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: path,
          redirectInBrowser: true,
          isPermanent: true,
        });
      });
    }

    createPage({
      path,
      component: moduleTemplate,
      context: {
        id: node.frontmatter.id,
      },
    });

    const freshOrdering = importFresh<any>('./content/ordering');
    if (node.frontmatter.prerequisites)
      for (const prereq of node.frontmatter.prerequisites) {
        if (!(prereq in freshOrdering.moduleIDToSectionMap)) {
          console.warn(
            'Module ' +
              node.fileAbsolutePath +
              ': Prerequisite "' +
              prereq +
              '" is not a module'
          );
        }
      }
  });
  const solutionTemplate = require.resolve(
    `./src/templates/solutionTemplate.tsx`
  );
  const solutions = result.data.solutions.edges;
  solutions.forEach(({ node }) => {
    try {
      // we want to find all problems that this solution can be an internal solution for
      const problemsForThisSolution = problems.filter(
        ({ node: problemNode }) => problemNode.uniqueId === node.frontmatter.id
      );
      if (problemsForThisSolution.length === 0) {
        throw new Error(
          "Couldn't find corresponding problem for internal solution with frontmatter ID " +
            node.frontmatter.id +
            '. If this problem is no longer in any module, add it to content/extraProblems.json.'
        );
      }
      // let's also check that every problem has this as its internal solution -- if an internal solution exists, we should always use it
      const problemsThatAreMissingInternalSolution =
        problemsForThisSolution.filter(
          x => x.node.solution?.kind !== 'internal'
        );
      if (problemsThatAreMissingInternalSolution.length > 0) {
        problemsThatAreMissingInternalSolution.forEach(({ node }) => {
          console.error(
            'Problem ' +
              node.uniqueId +
              " isn't linked to its corresponding internal solution in module " +
              node.module.frontmatter.title +
              ' - ' +
              node.module.frontmatter.id
          );
        });
        throw new Error(
          'Internal solution ' +
            node.frontmatter.id +
            " isn't linked to all of its problems (see above). Did you forget to update the solution metadata of a module after adding an internal solution?"
        );
      }
      const problem = problemsForThisSolution[0];
      const path = `${getProblemURL({
        uniqueId: problem.node.uniqueId,
        source: problem.node.source,
        name: problem.node.name,
      })}/solution`;
      if (node.frontmatter.redirects) {
        node.frontmatter.redirects.forEach(fromPath => {
          createRedirect({
            fromPath,
            toPath: path,
            redirectInBrowser: true,
            isPermanent: true,
          });
        });
      }
      createPage({
        path: path,
        component: solutionTemplate,
        context: {
          id: node.frontmatter.id,
        },
      });
    } catch (e) {
      console.error(
        'Failed to generate internal solution for ' + node.frontmatter.id
      );
      throw e;
    }
  });

  // Generate Syllabus Pages //
  const syllabusTemplate = require.resolve(
    `./src/templates/syllabusTemplate.tsx`
  );
  SECTIONS.forEach(division => {
    createPage({
      path: `/${division}`,
      component: syllabusTemplate,
      context: {
        division: division,
      },
    });
  });
  // End Generate Syllabus Pages //
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Xdm implements Node {
      body: String
      fileAbsolutePath: String
      frontmatter: XdmFrontmatter
      isIncomplete: Boolean
      toc: TableOfContents
      mdast: String
    }
  
    type XdmFrontmatter implements Node {
      id: String
      title: String
      author: String
      contributors: String
      description: String
      prerequisites: [String]
      redirects: [String]
      frequency: Int
    }
    
    type Heading {
      depth: Int
      value: String
      slug: String
    }
    
    type TableOfContents {
      cpp: [Heading]
      java: [Heading]
      py: [Heading]
    }
    
    type ModuleProblemLists implements Node {
      moduleId: String
      problemLists: [ModuleProblemList]
    }
    
    type ModuleProblemList {
      listId: String!
      problems: [ModuleProblemInfo]
    }
    
    type ProblemInfo implements Node {
      uniqueId: String!
      name: String!
      url: String!
      source: String!
      isStarred: Boolean!
      difficulty: String
      tags: [String]
      solution: ProblemSolutionInfo
      inModule: Boolean!
      module: Xdm @link(by: "frontmatter.id")
    }
    
    type ModuleProblemInfo {
      uniqueId: String!
      name: String!
      url: String!
      source: String!
      isStarred: Boolean!
      difficulty: String
      tags: [String]
      solution: ProblemSolutionInfo
    }
    
    type ProblemSolutionInfo {
      kind: String!
      label: String
      labelTooltip: String
      url: String
      sketch: String
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions, stage, loaders, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.mdx$/,
          use: [
            loaders.js(),
            {
              loader: path.resolve(__dirname, 'src/gatsby/webpack-xdm.js'),
              options: {},
            },
          ],
        },
      ],
    },
  });
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
    });
  }
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
