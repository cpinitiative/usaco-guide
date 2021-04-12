import * as fs from 'fs';
import { SECTIONS } from './content/ordering';
import PGS from './src/components/markdown/PGS';
import id_to_sol from './src/components/markdown/ProblemsList/DivisionList/id_to_sol';
import {
  getProblemURL,
  ProblemInfo,
  ProblemMetadata,
  ProblemSolutionInfo,
  probSources,
} from './src/models/problem';
import { books } from './src/utils/books';
import importFresh = require('import-fresh');

const mdastToStringWithKatex = require('./src/mdx-plugins/mdast-to-string');
const mdastToString = require('mdast-util-to-string');
const Slugger = require('github-slugger');
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
  console.error(e);
}

const getProblemInfo = (metadata: ProblemMetadata): ProblemInfo => {
  const ordering = importFresh<any>('./content/ordering');
  const { solutionMetadata, ...info } = metadata;

  if (
    !info.source ||
    !info.uniqueId ||
    info.isStarred === null ||
    info.isStarred === undefined ||
    !info.name ||
    !info.url
  ) {
    console.error("problem metadata isn't valid", metadata);
    throw new Error('Bad problem metadata');
  }

  let sol: ProblemSolutionInfo;
  if (solutionMetadata.kind === 'autogen-label-from-site') {
    const site = solutionMetadata.site;
    if (!probSources.hasOwnProperty(site) || probSources[site].length !== 3) {
      console.error(metadata);
      throw new Error(
        "Couldn't autogenerate solution label from problem site " + site
      );
    }
    sol = {
      kind: 'label',
      label: 'Check ' + site,
      labelTooltip: probSources[site][2],
    };
  } else if (solutionMetadata.kind === 'internal') {
    sol = {
      kind: 'internal',
    };
  } else if (solutionMetadata.kind === 'link') {
    sol = {
      kind: 'link',
      url: solutionMetadata.url,
      label: 'External Sol',
    };
  } else if (solutionMetadata.kind === 'CPH') {
    const getSec = (dictKey, book, sec) => {
      let url = book;
      if (sec[sec.length - 1] == ',') sec = sec.substring(0, sec.length - 1);
      if (!/^\d.*$/.test(sec)) return url;
      if (!(sec in PGS[dictKey]))
        throw `Could not find section ${sec} in source ${dictKey}`;
      url += '#page=' + PGS[dictKey][sec];
      return url;
    };
    let source = 'CPH';
    let cphUrl = getSec(source, books[source][0], solutionMetadata.section);
    sol = {
      kind: 'link',
      label: 'CPH ' + solutionMetadata.section,
      url: cphUrl,
    };
  } else if (solutionMetadata.kind === 'USACO') {
    if (!id_to_sol.hasOwnProperty(solutionMetadata.usacoId)) {
      throw new Error(
        "Couldn't find a corresponding USACO external solution for USACO problem ID " +
          solutionMetadata.usacoId
      );
    }
    sol = {
      kind: 'link',
      label: 'External Sol',
      url:
        `http://www.usaco.org/current/data/` +
        id_to_sol[solutionMetadata.usacoId],
    };
  } else if (solutionMetadata.kind === 'IOI') {
    let year = solutionMetadata.year;
    let num = year - 1994 + 20;
    sol = {
      kind: 'link',
      label: 'External Sol',
      url: `https://ioinformatics.org/page/ioi-${year}/` + num.toString(),
    };
  } else if (solutionMetadata.kind === 'none') {
    sol = null;
  } else if (solutionMetadata.kind === 'in-module') {
    sol = {
      kind: 'link',
      label: 'In Module',
      url: `https://usaco.guide/${
        ordering.moduleIDToSectionMap[solutionMetadata.moduleId]
      }/${solutionMetadata.moduleId}#problem-${info.uniqueId}`,
    };
  } else if (solutionMetadata.kind === 'sketch') {
    sol = {
      kind: 'sketch',
      sketch: solutionMetadata.sketch,
    };
  } else {
    throw new Error(
      'Unknown solution metadata ' + JSON.stringify(solutionMetadata)
    );
  }

  return {
    ...info,
    solution: sol,
  };
};

// ideally problems would be its own query with
// source nodes: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes

exports.onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createContentDigest,
  createNodeId,
}) => {
  const { createNodeField, createNode, createParentChildLink } = actions;

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

    Object.keys(parsedContent).forEach(tableId => {
      if (tableId === 'MODULE_ID') return;
      try {
        parsedContent[tableId].forEach((metadata: ProblemMetadata) => {
          transformObject(
            {
              ...getProblemInfo(metadata),
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
          problems: parsedContent[listId].map(x => ({
            ...getProblemInfo(x),
          })),
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
    node.internal.type === 'Mdx' &&
    node.fileAbsolutePath.includes('content')
  ) {
    const ordering = importFresh<any>('./content/ordering');
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
      modules: allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        edges {
          node {
            frontmatter {
              id
              redirects
            }
            fields {
              division
            }
          }
        }
      }

      solutions: allMdx(
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
      let a = node,
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
      const problemsThatAreMissingInternalSolution = problemsForThisSolution.filter(
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
    type MdxFrontmatter implements Node {
      prerequisites: [String]
      date: String
      redirects: [String]
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
      module: Mdx @link(by: "frontmatter.id")
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

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Mdx: {
      toc: {
        type: `TableOfContents`,
        async resolve(source, args, context, info) {
          const { resolve } = info.schema.getType('Mdx').getFields().mdxAST;
          const mdast = await resolve(source, args, context, {
            fieldName: 'mdast',
          });
          const cpp = [],
            java = [],
            py = [];
          // lol the spaghetti code going to be insane
          let cppCt = 0,
            javaCt = 0,
            pyCt = 0;
          // https://github.com/cpinitiative/usaco-guide/issues/966
          // We don't want to include headers inside spoilers
          let spoilerCt = 0;
          const slugger = new Slugger();
          mdast.children.forEach(node => {
            if (node.type === 'jsx') {
              const str = 'exact match ' + node.value;
              cppCt += str.split('<CPPSection>').length - 1;
              javaCt += str.split('<JavaSection>').length - 1;
              pyCt += str.split('<PySection>').length - 1;
              spoilerCt += str.split('<Spoiler').length - 1;
              cppCt -= str.split('</CPPSection>').length - 1;
              javaCt -= str.split('</JavaSection>').length - 1;
              pyCt -= str.split('</PySection>').length - 1;
              spoilerCt -= str.split('</Spoiler>').length - 1;
            }
            if (node.type === 'heading') {
              const val = {
                depth: node.depth,
                value: mdastToStringWithKatex(node),
                slug: slugger.slug(mdastToString(node)),
              };
              if (spoilerCt < 0) {
                throw "Spoiler count went negative -- shouldn't happen...";
              }
              if (spoilerCt === 0) {
                if (cppCt === 0 && javaCt === 0 && pyCt === 0) {
                  cpp.push(val);
                  java.push(val);
                  py.push(val);
                } else if (cppCt === 1 && javaCt === 0 && pyCt === 0) {
                  cpp.push(val);
                } else if (cppCt === 0 && javaCt === 1 && pyCt === 0) {
                  java.push(val);
                } else if (cppCt === 0 && javaCt === 0 && pyCt === 1) {
                  py.push(val);
                } else {
                  throw 'Generating table of contents ran into a weird error. CPP/Java/Py Section tags mismatched?';
                }
              }
            }
          });
          if (spoilerCt !== 0) {
            throw 'Spoiler count should end at zero...';
          }
          return {
            cpp,
            java,
            py,
          };
        },
      },
      isIncomplete: {
        type: `Boolean`,
        async resolve(source, args, context, info) {
          return source.rawBody.indexOf('<IncompleteSection') !== -1;
        },
      },
    },
  };
  createResolvers(resolvers);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  });
};
