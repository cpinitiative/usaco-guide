import { getProblemURL } from '../models/problem';
import { MdxContent, ModuleProblemLists, ProblemInfo } from '../types/content';

export function validateProblemConsistency(problems: ProblemInfo[]): {
  usacoIds: Set<string>;
  problemSlugs: Map<string, string>;
  problemInfo: Map<string, ProblemInfo>;
  problemURLToUniqueID: Map<string, string>;
} {
  // Check to make sure problems with the same unique ID have consistent information, and that there aren't duplicate slugs
  // Also creates user solution pages for each problem
  const problemSlugs = new Map<string, string>(); // maps slug to problem unique ID
  const problemInfo = new Map<string, ProblemInfo>(); // maps unique problem ID to problem info
  const problemURLToUniqueID = new Map<string, string>(); // maps problem URL to problem unique ID
  const urlsThatCanHaveMultipleUniqueIDs = ['https://cses.fi/107/list/'];
  const usacoIds: Set<string> = new Set();
  problems.forEach(problem => {
    const slug = getProblemURL(problem);
    if (problemSlugs.has(slug) && problemSlugs.get(slug) !== problem.uniqueId) {
      throw new Error(
        `The problems ${problemSlugs.get(slug)} and ${problem.uniqueId} have the same slugs!`
      );
    }
    if (problemInfo.has(problem.uniqueId)) {
      const a = problem,
        b = problemInfo.get(problem.uniqueId);
      // Some problems with no corresponding module gets put into extraProblems.json.
      // If a problem has a module, then it should be removed from extraProblems.json.
      if (!a.module || !b.module) {
        throw new Error(
          `The problem ${problem.uniqueId} is in both extraProblems.json and in another module at the same time. Remove this problem from extraProblems.json.`
        );
      }
      if (a.name !== b.name || a.url !== b.url || a.source !== b.source) {
        throw new Error(
          `The problem ${problem.uniqueId} appears in both ${
            problem.module.frontmatter.id
          } - ${problem.module.frontmatter.title} and ${
            problemInfo.get(problem.uniqueId).module.frontmatter.id
          } - ${
            problemInfo.get(problem.uniqueId).module.frontmatter.title
          } but has different information! They need to have the same name / url / source.`
        );
      }
    }

    if (
      problemURLToUniqueID.has(problem.url) &&
      problemURLToUniqueID.get(problem.url) !== problem.uniqueId &&
      !urlsThatCanHaveMultipleUniqueIDs.includes(problem.url)
    ) {
      throw new Error(
        `The URL ${problem.url} is assigned to both problem unique ID ${problemURLToUniqueID.get(
          problem.url
        )} and ${
          problem.uniqueId
        }. Is this correct? (If this is correct, add the URL to \`urlsThatCanHaveMultipleUniqueIDs\` in validateData.ts)`
      );
    }

    // skipping usaco problems to be created with div_to_probs
    if (problem.uniqueId.startsWith('usaco')) {
      usacoIds.add(problem.uniqueId);
    }

    problemSlugs.set(slug, problem.uniqueId);
    problemInfo.set(problem.uniqueId, problem);
    problemURLToUniqueID.set(problem.url, problem.uniqueId);
  });

  return { usacoIds, problemSlugs, problemInfo, problemURLToUniqueID };
}

export function validateModuleProblems(
  modules: MdxContent[],
  moduleProblemLists: ModuleProblemLists[]
): void {
  const moduleIds = new Set(modules.map(m => m.frontmatter.id));
  for (const list of moduleProblemLists) {
    if (!moduleIds.has(list.moduleId)) {
      throw new Error(
        `ModuleProblemList references non-existent module: ${list.moduleId}`
      );
    }

    for (const problemList of list.problemLists) {
      for (const problem of problemList.problems) {
        if (!problem.uniqueId) {
          throw new Error(
            `Problem in module ${list.moduleId} missing uniqueId`
          );
        }
      }
    }
  }
}

export function validateSolutionRelationships(
  solutions: Map<string, MdxContent>,
  problems: ProblemInfo[]
): void {
  const problemsWithInternalSolutions = new Set<string>();
  solutions.forEach(solution => {
    try {
      // we want to find all problems that this solution can be an internal solution for
      const problemsForThisSolution = problems.filter(
        p => p.uniqueId === solution.frontmatter.id
      );
      problemsWithInternalSolutions.add(solution.frontmatter.id);
      if (problemsForThisSolution.length === 0) {
        throw new Error(
          `Couldn't find corresponding problem for internal solution with frontmatter ID ${solution.frontmatter.id}.
          If this problem is no longer in any module, add it to content/extraProblems.json.`
        );
      }
      // let's also check that every problem has this as its internal solution -- if an internal solution exists, we should always use it
      const problemsThatAreMissingInternalSolution =
        problemsForThisSolution.filter(p => p.solution?.kind !== 'internal');
      if (problemsThatAreMissingInternalSolution.length > 0) {
        problemsThatAreMissingInternalSolution.forEach(problem => {
          throw new Error(
            `Problem ${problem.uniqueId} isn't linked to its corresponding internal solution in module
             ${problem.module.frontmatter.id} - ${problem.module.frontmatter.title}`
          );
        });
        throw new Error(
          `Internal solution ${solution.frontmatter.id} isn't linked to all of its problems (see above). Did you forget to update the solution metadata of a module after adding an internal solution?`
        );
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  });

  // let hasProblemMissingInternalSolution = false;
  const internalProblems = problems.filter(
    x => x.solution?.kind === 'internal'
  );
  internalProblems.forEach(problem => {
    if (!problemsWithInternalSolutions.has(problem.uniqueId)) {
      // hasProblemMissingInternalSolution = true;
      throw new Error(
        `Problem ${problem.uniqueId} claims to have an internal solution but doesn't`
      );
    }
  });
}
