exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const moduleTemplate = require.resolve(`./src/templates/moduleTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!node.frontmatter.slug) return;
    createPage({
      path: node.frontmatter.slug,
      component: moduleTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter implements Node {
      prerequisites: [[String]]
    }
  `;
  createTypes(typeDefs)
};