import { SECTIONS } from './content/ordering';

const mdastToString = require('mdast-util-to-string');
const Slugger = require('github-slugger');
const Problem = require('./src/models/problem').Problem; // needed to eval export

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === 'Mdx' &&
    node.fileAbsolutePath.includes('content')
  ) {
    const ordering = require('./content/ordering');
    createNodeField({
      name: 'division',
      node,
      value: ordering.moduleIDToSectionMap[node.frontmatter.id],
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      modules: allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        edges {
          node {
            frontmatter {
              id
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
    if (!node.fields.division) return;
    createPage({
      path: `/${node.fields.division}/${node.frontmatter.id}`,
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
    createPage({
      path: `/solutions/${node.frontmatter.id}`,
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
    
    type Problem {
      source: String!
      name: String!
      id: String!
      difficulty: String
      starred: Boolean
      tags: [String]
      sketch: String
      url: String
      isIntro: Boolean
      uniqueID: String
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
          let mdast = await resolve(source, args, context, {
            fieldName: 'mdast',
          });
          let cpp = [],
            java = [],
            py = [];
          // lol the spaghetti code going to be insane
          let cppCt = 0,
            javaCt = 0,
            pyCt = 0;
          const slugger = new Slugger();
          mdast.children.forEach(node => {
            if (node.type === 'jsx') {
              let str = 'exact match ' + node.value;
              cppCt += str.split('<CPPSection>').length - 1;
              javaCt += str.split('<JavaSection>').length - 1;
              pyCt += str.split('<PySection>').length - 1;
              cppCt -= str.split('</CPPSection>').length - 1;
              javaCt -= str.split('</JavaSection>').length - 1;
              pyCt -= str.split('</PySection>').length - 1;
            }
            if (node.type === 'heading') {
              let val = {
                depth: node.depth,
                value: mdastToString(node),
                slug: slugger.slug(mdastToString(node)),
              };
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
          });
          return {
            cpp,
            java,
            py,
          };
        },
      },
      problems: {
        type: `[Problem]`,
        async resolve(source, args, context, info) {
          const { resolve } = info.schema.getType('Mdx').getFields().mdxAST;
          let mdast = await resolve(source, args, context, {
            fieldName: 'mdast',
          });
          let problems = [];
          mdast.children.forEach(node => {
            if (
              node.type === 'export' &&
              node.value.includes('export const problems =')
            ) {
              let str = node.value.replace('export ', '') + '; problems';
              let res = eval(str);
              Object.keys(res).forEach(k => {
                problems.push(...res[k]);
              });
            }
          });
          return problems;
        },
      },
    },
  };
  createResolvers(resolvers);
};
