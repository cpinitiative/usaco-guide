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

  const syllabusTemplate = require.resolve(`./src/templates/syllabusTemplate.js`);
  createPage({
    path: "/",
    component: syllabusTemplate,
    context: {
      division: 0
    },
  });
  createPage({
    path: "/intro",
    component: syllabusTemplate,
    context: {
      division: 0
    },
  });
  createPage({
    path: "/general",
    component: syllabusTemplate,
    context: {
      division: 1
    },
  });
  createPage({
    path: "/bronze",
    component: syllabusTemplate,
    context: {
      division: 2
    },
  });
  createPage({
    path: "/silver",
    component: syllabusTemplate,
    context: {
      division: 3
    },
  });
  createPage({
    path: "/gold",
    component: syllabusTemplate,
    context: {
      division: 4
    },
  });
  createPage({
    path: "/plat",
    component: syllabusTemplate,
    context: {
      division: 5
    },
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