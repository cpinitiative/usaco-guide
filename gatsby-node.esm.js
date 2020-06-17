import { getModule } from "./src/utils";

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const moduleTemplate = require.resolve(`./src/templates/moduleTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
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

  const allModules = result.data.allMarkdownRemark.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = cur.node;
    return acc;
  }, {});
  const divisions = ["intro", "general", "bronze", "silver", "gold", "plat"];

  divisions.forEach(d => getModule(allModules, d).forEach((node) => {
    // todo spaghetti code
    if (node.hasOwnProperty("items")) {
      node.items.forEach(n => {
        createPage({
          path: `/${d}/${n.frontmatter.id}`,
          component: moduleTemplate,
          context: {
            // additional data can be passed via context
            id: n.frontmatter.id,
            division: d,
          },
        });
      });
      return;
    }
    createPage({
      path: `/${d}/${node.frontmatter.id}`,
      component: moduleTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
        division: d,
      },
    });
  }));

  const syllabusTemplate = require.resolve(`./src/templates/syllabusTemplate.js`);
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