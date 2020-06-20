import ModuleOrdering, { divisions } from './content/ordering';

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Generate Module Pages //
  const moduleTemplate = require.resolve(`./src/templates/moduleTemplate.tsx`);
  Object.keys(ModuleOrdering).forEach(division => {
    const processItem = item => {
      if (typeof item === 'object') {
        // this is a nested module
        item.items.forEach(x => processItem(x));
      } else {
        createPage({
          path: `/${division}/${item}`,
          component: moduleTemplate,
          context: {
            // additional data can be passed via context
            id: item,
            division: division,
          },
        });
      }
    };
    ModuleOrdering[division].forEach(item => processItem(item));
  });
  // End Generate Module Pages //

  // Generate Syllabus Pages //
  const syllabusTemplate = require.resolve(
    `./src/templates/syllabusTemplate.js`
  );
  divisions.forEach(division => {
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
    type MarkdownRemarkFrontmatter implements Node {
      prerequisites: [[String]]
    }
  `;
  createTypes(typeDefs);
};
