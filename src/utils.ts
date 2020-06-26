import ModuleOrdering, { moduleIDToDivisionMap } from '../content/ordering';
import { ModuleInfo, ModuleLinkInfo } from './module';

export const getModule = (allModules, division) => {
  return ModuleOrdering[division].map(k => {
    // rip spaghetti code, clean this up
    if (typeof k === 'object') {
      return {
        name: k.name,
        items: k.items.map(k2 => {
          if (!allModules.hasOwnProperty(k2)) {
            throw 'Module not found: ' + k2;
          }
          return {
            ...allModules[k2 as string],
            slug: `/${division}/${allModules[k2 as string].frontmatter.id}`,
          };
        }),
      };
    } else {
      if (!allModules.hasOwnProperty(k)) {
        throw 'Module not found: ' + k;
      }
      return {
        ...allModules[k],
        slug: `/${division}/${allModules[k].frontmatter.id}`,
      };
    }
  });
};

export function graphqlToModuleLinks(
  allMdx: any
): { [moduleID: string]: ModuleLinkInfo } {
  return allMdx.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = new ModuleLinkInfo(
      cur.node.frontmatter.id,
      moduleIDToDivisionMap[cur.node.frontmatter.id],
      cur.node.frontmatter.title
    );
    return acc;
  }, {});
}

export function graphqlToModuleInfo(mdx: any): ModuleInfo {
  console.log(mdx.frontmatter);
  return new ModuleInfo(
    mdx.frontmatter.id,
    moduleIDToDivisionMap[mdx.frontmatter.id],
    mdx.frontmatter.title,
    mdx.body,
    mdx.frontmatter.author,
    mdx.frontmatter.prerequisites,
    mdx.frontmatter.description,
    mdx.frontmatter.frequency
  );
}
