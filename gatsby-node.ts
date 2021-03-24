import { SECTIONS } from './content/ordering';
import importFresh = require('import-fresh');
import {
  ProblemInfo,
  ProblemMetadata,
  ProblemSolutionInfo,
  probSources,
} from './src/models/problem';
import PGS from './src/components/markdown/PGS';
import { books } from './src/utils/books';
import id_to_sol from './src/components/markdown/ProblemsList/DivisionList/id_to_sol';

const mdastToStringWithKatex = require('./src/mdx-plugins/mdast-to-string');
const mdastToString = require('mdast-util-to-string');
const Slugger = require('github-slugger');
const Problem = require('./src/models/problem').Problem; // needed to eval export
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (
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

    let problemJSON;
    try {
      problemJSON = importFresh(
        node.fileAbsolutePath.substring(0, node.fileAbsolutePath.length - 3) +
          'json'
      );
    } catch (e) {
      // ignore, there probably aren't any problems in that module
    }

    const getProblemInfo = (metadata: ProblemMetadata): ProblemInfo => {
      const { solutionMetadata, ...info } = metadata;

      let sol: ProblemSolutionInfo;
      if (solutionMetadata.kind === 'autogen-label-from-site') {
        const site = solutionMetadata.site;
        if (
          !probSources.hasOwnProperty(site) ||
          probSources[site].length !== 3
        ) {
          console.error(node.frontmatter.id, metadata);
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
          if (sec[sec.length - 1] == ',')
            sec = sec.substring(0, sec.length - 1);
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
            ordering.moduleIDToSectionMap[node.frontmatter.id]
          }/${node.frontmatter.id}#problem-${info.uniqueId}`,
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

    if (problemJSON) {
      createNodeField({
        node,
        name: 'problemLists',
        value: Object.keys(problemJSON).map(listId => ({
          listId,
          problems: problemJSON[listId].map(getProblemInfo),
        })),
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
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
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }
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
    const path = `/solutions/${node.frontmatter.id}`;
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
    
    type MdxFieldsProblems {
      listId: String!
      problems: [ProblemInfo]
    }
    
    type ProblemInfo {
      uniqueId: String!
      name: String!
      url: String!
      source: String!
      difficulty: String!
      isStarred: Boolean!
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
    
    type Problem {
      source: String!
      name: String!
      id: String!
      difficulty: String
      starred: Boolean
      tags: [String]
      solID: String
      solQuality: String
      url: String
      uniqueID: String
      tableID: String
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
      // todo: obsolete, delete
      problems: {
        type: `[Problem]`,
        async resolve(source, args, context, info) {
          const { resolve } = info.schema.getType('Mdx').getFields().mdxAST;
          const mdast = await resolve(source, args, context, {
            fieldName: 'mdast',
          });
          const problems = [];
          mdast.children.forEach(node => {
            if (
              node.type === 'export' &&
              node.value.includes('export const problems =')
            ) {
              const str = node.value.replace('export ', '') + '; problems';
              const res = eval(str);
              Object.keys(res).forEach(k => {
                const arr = [res[k]].flat();
                // console.log('ADIAIUHF');
                // console.log(arr);
                problems.push(
                  ...arr.map(problem => {
                    problem.tableID = k;
                    return problem;
                  })
                );
              });
            }
          });
          return problems;
        },
      },
      isIncomplete: {
        type: `Boolean`,
        async resolve(source, args, context, info) {
          const { resolve } = info.schema.getType('Mdx').getFields().mdxAST;
          const mdast = await resolve(source, args, context, {
            fieldName: 'mdast',
          });
          let incomplete = false;
          mdast.children.forEach(node => {
            if (
              node.type === 'jsx' &&
              node.value.includes('<IncompleteSection')
            ) {
              incomplete = true;
            }
          });
          return incomplete;
        },
      },
    },
  };
  createResolvers(resolvers);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  });
};
