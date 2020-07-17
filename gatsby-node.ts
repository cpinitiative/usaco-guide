import { SECTIONS } from './content/ordering';
const toString = require('mdast-util-to-string');
const Slugger = require('github-slugger');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
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
      allMdx {
        edges {
          node {
            frontmatter {
              title
              id
            }
            fields {
              division
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
  const modules = result.data.allMdx.edges;
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
          let mdast = await resolve(source, args, context, info);
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
                value: toString(node),
                slug: slugger.slug(toString(node)),
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
    },
  };
  createResolvers(resolvers);
};
