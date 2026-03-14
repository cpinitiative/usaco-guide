import { getDatabase } from "./database";
import {
  MdxContent,
  ProblemInfo,
  MdxFrontmatter,
  ModuleProblemLists,
} from "../types/content";
import { ProblemDifficulty, ProblemSolutionInfo } from "../models/problem";

/**
 * Query solution by ID
 */
export async function querySolution(id: string): Promise<MdxContent | null> {
  const db = await getDatabase();
  const row = db
    .prepare("SELECT * FROM mdx_content WHERE id = ? AND type = ?")
    .get(id, "solution") as any;

  if (!row) return null;

  return deserializeMdxContent(row);
}

/**
 * Query module by ID
 */
export async function queryModule(id: string): Promise<MdxContent | null> {
  const db = await getDatabase();
  const row = db
    .prepare("SELECT * FROM mdx_content WHERE id = ? AND type = ?")
    .get(id, "module") as any;

  if (!row) return null;

  return deserializeMdxContent(row);
}

export async function queryModuleProblemsLists(
  id: string,
): Promise<ModuleProblemLists | null> {
  const db = await getDatabase();
  const rows = db
    .prepare(
      "SELECT list_id, problems_json FROM module_problem_lists WHERE module_id = ?",
    )
    .all(id) as any[];

  if (rows.length === 0) return null;

  const problemLists = rows.map((row) => ({
    listId: row.list_id,
    problems: JSON.parse(row.problems_json) as ProblemInfo[],
  }));

  return {
    moduleId: id,
    problemLists,
  };
}

/**
 * Query all module frontmatter
 */
export async function queryAllModuleFrontmatter(): Promise<
  Array<{ filePath: string; frontmatter: MdxFrontmatter; division: string }>
> {
  const db = await getDatabase();
  const rows = db.prepare("SELECT * FROM module_frontmatter").all() as any[];

  return rows.map((row) => ({
    filePath: row.file_path,
    frontmatter: JSON.parse(row.frontmatter_json),
    division: row.division,
  }));
}

/**
 * Query problem by unique ID
 */
export async function queryProblem(
  uniqueId: string,
): Promise<ProblemInfo | null> {
  const db = await getDatabase();
  const row = db
    .prepare("SELECT problem_data_json FROM problems WHERE unique_id = ?")
    .get(uniqueId) as any;

  if (!row) return null;

  const problem: ProblemInfo = JSON.parse(row.problem_data_json);

  // Load module if module_id exists
  if (problem.moduleId) {
    const mod = await queryModule(problem.moduleId);
    problem.module = mod || null;
  }

  return problem;
}

/**
 * Query all problems (for getStaticPaths)
 */
export async function queryAllProblemIds(): Promise<string[]> {
  const db = await getDatabase();
  const rows = db.prepare("SELECT unique_id FROM problems").all() as any[];

  return rows.map((row) => row.unique_id);
}

/**
 * Query modules by division
 * Returns an object mapping module IDs to MdxContent for the given division
 * Optimized to exclude large fields (body, toc, mdast) for listing pages
 */
export async function queryModulesByDivision(
  division: string,
): Promise<{ [key: string]: MdxContent }> {
  const db = await getDatabase();
  // Only select fields needed for listing pages to reduce payload size
  const rows = db
    .prepare(
      `
      SELECT 
        id,
        file_path,
        frontmatter_json,
        cpp_oc,
        java_oc,
        py_oc,
        division,
        git_author_time
      FROM mdx_content 
      WHERE division = ? AND type = ?
    `,
    )
    .all(division, "module") as any[];

  const result: { [key: string]: MdxContent } = {};
  for (const row of rows) {
    const content = deserializeMdxContentLight(row);
    result[content.frontmatter.id] = content;
  }

  return result;
}

/**
 * Query problem data by division
 * Returns an array of objects containing problem IDs and their module IDs for problems in modules of the given division
 */
export async function queryProblemDataByDivision(
  division: string,
): Promise<Array<{ id: string; moduleId: string }>> {
  const db = await getDatabase();
  // Join problems with module_frontmatter to get division
  const rows = db
    .prepare(
      `
      SELECT DISTINCT p.unique_id as id, p.module_id as moduleId
      FROM problems p
      INNER JOIN module_frontmatter mf ON p.module_id = mf.module_id
      WHERE mf.division = ? AND p.in_module = 1
    `,
    )
    .all(division) as Array<{ id: string; moduleId: string }>;

  return rows;
}

/**
 * Query problem slugs for problems that have corresponding solutions with the same id
 * Replicates the logic from src/pages/problems/[slug]/solution/index.tsx lines 95-113
 * Returns an array of slugs for problems that have matching solutions
 * Optimized with a single SQL JOIN query instead of N queries
 */
export async function queryProblemSlugsForSolutionsIds(): Promise<string[]> {
  const db = await getDatabase();

  // Single query: join solution_frontmatter with problems and problem_slugs
  // to get all slugs for problems that have corresponding solutions
  const rows = db
    .prepare(
      `
      SELECT DISTINCT ps.slug
      FROM solution_frontmatter sf
      INNER JOIN problems p ON sf.solution_id = p.unique_id
      INNER JOIN problem_slugs ps ON p.unique_id = ps.unique_id
    `,
    )
    .all() as Array<{ slug: string }>;

  return rows.map((row) => row.slug);
}

/**
 * Query solution by problem slug
 * Takes a slug and returns the corresponding solution
 */
export async function querySolutionByProblemSlug(
  slug: string,
): Promise<MdxContent | null> {
  const db = await getDatabase();

  // Get the unique_id from the slug
  const slugRow = db
    .prepare("SELECT unique_id FROM problem_slugs WHERE slug = ?")
    .get(slug) as { unique_id: string } | null;

  if (!slugRow) {
    return null;
  }

  const uniqueId = slugRow.unique_id;

  // Get the solution using the unique_id
  const solutionRow = db
    .prepare("SELECT * FROM mdx_content WHERE id = ? AND type = ?")
    .get(uniqueId, "solution") as any;

  if (!solutionRow) {
    return null;
  }

  return deserializeMdxContent(solutionRow);
}

/**
 * Query module IDs and titles for all modules that contain a problem
 * Replicates the logic from src/pages/problems/[slug]/solution/index.tsx lines 39-44
 * Finds all modules that contain this problem by searching module_problem_lists,
 * then filters to ensure each module exists (has frontmatter)
 * Returns only modules that actually exist (matching the !!problem.module filter)
 */
export async function queryModuleIdAndTitleFromProblemBySolutionId(
  uniqueId: string,
): Promise<{ id: string; title: string }[]> {
  const db = await getDatabase();

  // Find all modules that contain this problem by querying module_problem_lists
  const moduleListRows = db
    .prepare(
      `
      SELECT module_id, list_id, problems_json 
      FROM module_problem_lists
    `,
    )
    .all() as any[];

  const moduleIds = new Set<string>();

  // Check each module's problem lists to see if they contain this problem
  for (const row of moduleListRows) {
    const problemList: ProblemInfo[] = JSON.parse(row.problems_json);
    const hasProblem = problemList.some((p) => p.uniqueId === uniqueId);

    if (hasProblem) {
      moduleIds.add(row.module_id);
    }
  }

  // If no modules found via module_problem_lists, check if the problem has a direct module_id
  if (moduleIds.size === 0) {
    const problemRow = db
      .prepare(
        "SELECT module_id FROM problems WHERE unique_id = ? AND module_id IS NOT NULL",
      )
      .get(uniqueId) as { module_id: string } | null;

    if (problemRow?.module_id) {
      moduleIds.add(problemRow.module_id);
    }
  }

  // Get module IDs and titles from module_frontmatter, ensuring modules exist
  // This filters out any modules that don't have frontmatter (matching !!problem.module check)
  if (moduleIds.size === 0) {
    return [];
  }

  const placeholders = Array.from(moduleIds)
    .map(() => "?")
    .join(",");
  const rows = db
    .prepare(
      `
    SELECT 
      module_id as id,
      json_extract(frontmatter_json, '$.title') as title
    FROM module_frontmatter
    WHERE module_id IN (${placeholders})
  `,
    )
    .all(...Array.from(moduleIds)) as { id: string; title: string }[];

  return rows;
}

export async function queryAllModuleIdsAndTitles(): Promise<
  Array<{ id: string; title: string }>
> {
  const db = await getDatabase();
  const rows = db
    .prepare(
      `
    SELECT 
      module_id as id,
      json_extract(frontmatter_json, '$.title') as title
    FROM module_frontmatter
  `,
    )
    .all() as { id: string; title: string }[];

  return rows;
}

export async function queryUsacoId(id: string): Promise<boolean> {
  const db = await getDatabase();
  const row = db.prepare("SELECT * FROM usaco_ids WHERE id = ?").get(id) as any;
  return !!row;
}

/**
 * Query all problem dashboard info
 * Returns an array of objects with properties: inModule, uniqueId, source, name, moduleId
 */
export async function queryAllProblemDashboardInfo(): Promise<
  Array<{
    inModule: boolean;
    uniqueId: string;
    source: string;
    name: string;
    moduleId: string | null;
  }>
> {
  const db = await getDatabase();
  const rows = db
    .prepare(
      `
      SELECT 
        in_module,
        unique_id,
        source,
        name,
        module_id
      FROM problems
    `,
    )
    .all() as any[];

  return rows.map((row) => ({
    inModule: Boolean(row.in_module),
    uniqueId: row.unique_id,
    source: row.source,
    name: row.name,
    moduleId: row.module_id,
  }));
}

/**
 * Query all problems for USACO divisions
 * Returns all problems with their associated module data if available
 */
export async function queryAllProblems(): Promise<ProblemInfo[]> {
  const db = await getDatabase();
  const rows = db
    .prepare(
      `
      SELECT 
        unique_id,
        name,
        url,
        source,
        source_description,
        is_starred,
        difficulty,
        tags_json,
        solution_json,
        in_module,
        module_id
      FROM problems
      ORDER BY source, name
    `,
    )
    .all() as any[];

  const problems: ProblemInfo[] = [];

  for (const row of rows) {
    const problem: ProblemInfo = {
      uniqueId: row.unique_id,
      name: row.name,
      url: row.url,
      source: row.source,
      sourceDescription: row.source_description,
      isStarred: Boolean(row.is_starred),
      difficulty: row.difficulty as ProblemDifficulty,
      tags: JSON.parse(row.tags_json || "[]"),
      solution: JSON.parse(row.solution_json || "{}") as ProblemSolutionInfo,
      inModule: Boolean(row.in_module),
      moduleId: row.module_id,
    };

    problems.push(problem);
  }

  return problems;
}

/**
 * Query problems by USACO divisions
 * Returns problems filtered to only include USACO division problems
 */
export async function queryUsacoDivisionProblems(): Promise<ProblemInfo[]> {
  const allProblems = await queryAllProblems();

  // Filter problems to only include USACO divisions
  return allProblems.filter(
    (problem) =>
      problem.source &&
      ["Bronze", "Silver", "Gold", "Platinum"].includes(problem.source),
  );
}

/**
 * Deserialize MdxContent from database row
 */
function deserializeMdxContent(row: any): MdxContent {
  return {
    body: row.body,
    fileAbsolutePath: row.file_path, // Note: may need to resolve to absolute
    frontmatter: JSON.parse(row.frontmatter_json),
    toc: JSON.parse(row.toc_json),
    cppOc: row.cpp_oc,
    javaOc: row.java_oc,
    pyOc: row.py_oc,
    mdast: row.mdast_json ? JSON.parse(row.mdast_json) : null,
    fields: {
      division: row.division || null,
      gitAuthorTime: row.git_author_time || null,
    },
  };
}

/**
 * Deserialize lightweight MdxContent from database row (without body, toc, mdast)
 * Used for listing pages where full content is not needed
 */
function deserializeMdxContentLight(row: any): MdxContent {
  return {
    body: "", // Empty body for listing pages
    fileAbsolutePath: row.file_path,
    frontmatter: JSON.parse(row.frontmatter_json),
    toc: { cpp: [], java: [], py: [] }, // Empty TOC for listing pages
    cppOc: row.cpp_oc,
    javaOc: row.java_oc,
    pyOc: row.py_oc,
    mdast: null, // No mdast for listing pages
    fields: {
      division: row.division || null,
      gitAuthorTime: row.git_author_time || null,
    },
  };
}
