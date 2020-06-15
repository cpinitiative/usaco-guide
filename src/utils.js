import ModuleOrdering from "../content/ordering";

export const getModule = (allModules, division) => {
  return ModuleOrdering[division].map(k => {
    // rip spaghetti code, clean this up
    if (typeof k === "object") {
      return {
        name: k.name,
        items: k.items.map(k2 => {
          if (!allModules.hasOwnProperty(k2)) {
            throw "Module not found: " + k2;
          }
          return {
            ...allModules[k2],
            slug: `/${division}/${allModules[k2].frontmatter.id}`
          };
        })
      }
    } else {
      if (!allModules.hasOwnProperty(k)) {
        throw "Module not found: " + k;
      }
      return {
        ...allModules[k],
        slug: `/${division}/${allModules[k].frontmatter.id}`
      };
    }
  });
};