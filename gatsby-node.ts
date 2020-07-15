import { SECTIONS } from './content/ordering';

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const ordering = require('./content/ordering');
    createNodeField({
      name: 'division',
      node,
      value: MODULE_ORDERING.moduleIDToDivisionMap[node.frontmatter.id],
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
  modules.forEach(({ node }, index) => {
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
  `;
  createTypes(typeDefs);
};
