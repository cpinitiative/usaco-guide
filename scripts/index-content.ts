import Database from 'better-sqlite3';
import { readdir } from 'fs/promises';
import path from 'path';
import { CONTENT_DIR, SOLUTIONS_DIR } from '../src/lib/constants';
import { getWritableDatabase } from '../src/lib/database';
import type { ProblemMetadata } from '../src/models/problem';
import { MdxContent, ProblemInfo } from '../src/types/content';

main().catch(console.error);

export async function main() {
  console.log('Starting content indexing...');
  const startTime = Date.now();

  const db = await getWritableDatabase();

  try {
    // Create schema
    createSchema(db);

    // Index modules
    console.log('Indexing modules...');
    const moduleFiles = (
      await readdir(CONTENT_DIR, { recursive: true })
    ).filter((f: string) => f.endsWith('.mdx'));
    await indexMdxFiles(db, moduleFiles, 'module', CONTENT_DIR);

    // Index solutions
    console.log('Indexing solutions...');
    const solutionFiles = (
      await readdir(SOLUTIONS_DIR, { recursive: true })
    ).filter((f: string) => f.endsWith('.mdx'));
    await indexMdxFiles(db, solutionFiles, 'solution', SOLUTIONS_DIR);

    // Index problems
    console.log('Indexing problems...');
    await indexProblems(db);

    // Index frontmatter
    console.log('Indexing frontmatter...');
    await indexModuleFrontmatter(db);
    await indexSolutionFrontmatter(db);

    // Create problem slugs and USACO IDs
    console.log('Creating problem slugs...');
    await indexProblemSlugs(db);
    await indexUSACOIds(db);

    // Generate USACO divisions JSON file
    console.log('Generating USACO divisions JSON...');
    await generateUsacoDivisionsJson(db);

    // Vacuum database
    console.log('Optimizing database...');
    db.exec('VACUUM');

    const endTime = Date.now();
    console.log(`\n=== Content Indexed Successfully ===`);
    console.log(`Took ${(endTime - startTime) / 1000} seconds`);
    console.log(
      `Database size: ${(db.prepare('PRAGMA page_count').get() as any).page_count * 4096} bytes`
    );
  } finally {
    db.close();
  }
}

function createSchema(db: Database.Database): void {
  // Drop existing tables if rebuilding
  db.exec(`
    DROP TABLE IF EXISTS mdx_content;
    DROP TABLE IF EXISTS problems;
    DROP TABLE IF EXISTS module_problem_lists;
    DROP TABLE IF EXISTS module_frontmatter;
    DROP TABLE IF EXISTS solution_frontmatter;
    DROP TABLE IF EXISTS problem_slugs;
    DROP TABLE IF EXISTS usaco_ids;
  `);

  // Create tables
  db.exec(`
    CREATE TABLE mdx_content (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      file_path TEXT NOT NULL,
      frontmatter_json TEXT NOT NULL,
      body TEXT NOT NULL,
      toc_json TEXT NOT NULL,
      mdast_json TEXT,
      cpp_oc INTEGER NOT NULL DEFAULT 0,
      java_oc INTEGER NOT NULL DEFAULT 0,
      py_oc INTEGER NOT NULL DEFAULT 0,
      division TEXT,
      git_author_time TEXT,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
    );

    CREATE TABLE problems (
      unique_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      source TEXT NOT NULL,
      source_description TEXT,
      is_starred INTEGER DEFAULT 0,
      difficulty TEXT NOT NULL,
      tags_json TEXT NOT NULL,
      solution_json TEXT NOT NULL,
      in_module INTEGER DEFAULT 0,
      module_id TEXT,
      problem_data_json TEXT NOT NULL
    );

    CREATE TABLE module_problem_lists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_id TEXT NOT NULL,
      list_id TEXT NOT NULL,
      problems_json TEXT NOT NULL,
      UNIQUE(module_id, list_id)
    );

    CREATE TABLE module_frontmatter (
      file_path TEXT PRIMARY KEY,
      module_id TEXT NOT NULL,
      frontmatter_json TEXT NOT NULL,
      division TEXT NOT NULL,
      UNIQUE(module_id)
    );

    CREATE TABLE solution_frontmatter (
      file_path TEXT PRIMARY KEY,
      solution_id TEXT NOT NULL,
      frontmatter_json TEXT NOT NULL
    );

    CREATE TABLE problem_slugs (
      slug TEXT PRIMARY KEY,
      unique_id TEXT NOT NULL,
      UNIQUE(unique_id)
    );

    CREATE TABLE usaco_ids (
      id TEXT PRIMARY KEY
    );
  `);

  // Create indices
  db.exec(`
    CREATE INDEX idx_mdx_content_type ON mdx_content(type);
    CREATE INDEX idx_mdx_content_division ON mdx_content(division);
    CREATE INDEX idx_problems_module_id ON problems(module_id);
    CREATE INDEX idx_problems_source ON problems(source);
    CREATE INDEX idx_module_problem_lists_module_id ON module_problem_lists(module_id);
    CREATE INDEX idx_module_frontmatter_division ON module_frontmatter(division);
    CREATE INDEX idx_solution_frontmatter_solution_id ON solution_frontmatter(solution_id);
  `);
}

async function indexMdxFiles(
  db: Database.Database,
  files: string[],
  type: 'module' | 'solution',
  baseDir: string
): Promise<void> {
  const { parseMdxFile } = await import('../src/lib/parseMdxFile');
  const insertStmt = db.prepare(`
      INSERT INTO mdx_content (
        id, type, file_path, frontmatter_json, body, toc_json,
        mdast_json, cpp_oc, java_oc, py_oc, division, git_author_time
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

  // Batch git commands for performance
  const gitTimestamps = await getBatchGitTimestamps(
    files.map(f => path.join(baseDir, f))
  );

  const transaction = db.transaction(
    (items: Array<{ file: string; content: MdxContent }>) => {
      for (const { file, content } of items) {
        const relativePath = path.relative(baseDir, content.fileAbsolutePath);
        const gitTime = gitTimestamps.get(content.fileAbsolutePath) || null;

        insertStmt.run(
          content.frontmatter.id,
          type,
          relativePath,
          JSON.stringify(content.frontmatter),
          content.body,
          JSON.stringify(content.toc),
          content.mdast ? JSON.stringify(content.mdast) : null,
          content.cppOc,
          content.javaOc,
          content.pyOc,
          content.fields?.division || null,
          gitTime
        );
      }
    }
  );

  // Process files in batches with controlled concurrency
  const BATCH_SIZE = 10;
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    const items = await Promise.all(
      batch.map(async file => {
        const filePath = path.join(baseDir, file);
        const content = await parseMdxFile(filePath);
        return { file, content };
      })
    );
    transaction(items);
  }
}

async function getBatchGitTimestamps(
  filePaths: string[]
): Promise<Map<string, string>> {
  const { execSync } = await import('child_process');
  const timestamps = new Map<string, string>();

  // Batch files to avoid Windows command line length limit (~8191 chars)
  // Use smaller batches to be safe (50 files per batch, ~200 chars per path = ~10KB per batch)
  const BATCH_SIZE = 50;

  for (let i = 0; i < filePaths.length; i += BATCH_SIZE) {
    const batch = filePaths.slice(i, i + BATCH_SIZE);

    try {
      const result = execSync(
        `git log --format="%ct|%H" --name-only -- ${batch.map(f => `"${f}"`).join(' ')}`,
        { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
      );

      // Parse output
      const lines = result.split('\n');
      let currentTimestamp: string | null = null;

      for (const line of lines) {
        if (line.includes('|')) {
          const [timestamp] = line.split('|');
          currentTimestamp = new Date(parseInt(timestamp) * 1000).toISOString();
        } else if (line.trim() && currentTimestamp) {
          timestamps.set(path.resolve(line.trim()), currentTimestamp);
        }
      }
    } catch (error) {
      console.warn(
        `Failed to get git timestamps for batch ${Math.floor(i / BATCH_SIZE) + 1}:`,
        error
      );
    }
  }

  return timestamps;
}

async function indexProblems(db: Database.Database): Promise<void> {
  const { readdir, readFile } = await import('fs/promises');
  const { getProblemInfo, checkInvalidUsacoMetadata } = await import(
    '../src/models/problem'
  );
  const { moduleIDToSectionMap } = await import('../content/ordering');
  const freshOrdering = await import('../content/ordering');

  const allFiles = await readdir(CONTENT_DIR, { recursive: true });
  const problemFiles = allFiles.filter(
    (file): file is string =>
      typeof file === 'string' &&
      (file.endsWith('.problems.json') || file.endsWith('extraProblems.json'))
  );

  const insertProblemStmt = db.prepare(`
    INSERT OR REPLACE INTO problems (
      unique_id, name, url, source, source_description, is_starred,
      difficulty, tags_json, solution_json, in_module, module_id, problem_data_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertModuleProblemListStmt = db.prepare(`
    INSERT INTO module_problem_lists (module_id, list_id, problems_json)
    VALUES (?, ?, ?)
  `);

  const transaction = db.transaction(
    (
      problems: ProblemInfo[],
      moduleProblemLists: Array<{
        moduleId: string;
        problemLists: Array<{ listId: string; problems: ProblemInfo[] }>;
      }>
    ) => {
      // Insert problems
      for (const problem of problems) {
        insertProblemStmt.run(
          problem.uniqueId,
          problem.name,
          problem.url,
          problem.source,
          problem.sourceDescription || null,
          problem.isStarred ? 1 : 0,
          problem.difficulty,
          JSON.stringify(problem.tags),
          JSON.stringify(problem.solution),
          problem.inModule ? 1 : 0,
          problem.moduleId || null,
          JSON.stringify(problem)
        );
      }

      // Insert module problem lists
      for (const moduleList of moduleProblemLists) {
        for (const problemList of moduleList.problemLists) {
          insertModuleProblemListStmt.run(
            moduleList.moduleId,
            problemList.listId,
            JSON.stringify(problemList.problems)
          );
        }
      }
    }
  );

  const allProblems: ProblemInfo[] = [];
  const allModuleProblemLists: Array<{
    moduleId: string;
    problemLists: Array<{ listId: string; problems: ProblemInfo[] }>;
  }> = [];

  for (const file of problemFiles) {
    const filePath = path.join(CONTENT_DIR, file);
    const fileName = path.basename(file);
    const isExtraProblems = fileName === 'extraProblems.json';

    try {
      const content = await readFile(filePath, 'utf-8');
      let parsedContent;
      try {
        parsedContent = JSON.parse(content);
      } catch (error) {
        throw new Error(`Unable to parse JSON file: ${filePath}`);
      }

      const moduleId: string = parsedContent['MODULE_ID'];
      if (!moduleId && !isExtraProblems) {
        throw new Error(
          `MODULE_ID not found in problem JSON file: ${filePath}`
        );
      }

      if (!isExtraProblems && !(moduleId in moduleIDToSectionMap)) {
        throw new Error(
          `.problems.json moduleId does not correspond to module: '${moduleId}', path: ${filePath}`
        );
      }

      Object.keys(parsedContent).forEach(tableId => {
        if (tableId === 'MODULE_ID') return;
        try {
          parsedContent[tableId].forEach((metadata: ProblemMetadata) => {
            checkInvalidUsacoMetadata(metadata);
            const problemInfo = getProblemInfo(metadata, freshOrdering);

            // Note: We don't load the full module here, just store the moduleId
            // The module will be loaded lazily when querying if needed
            allProblems.push({
              ...problemInfo,
              moduleId: moduleId || undefined,
              inModule: !!moduleId,
            });
          });
        } catch (e) {
          console.error(
            'Failed to create problem info for',
            parsedContent[tableId]
          );
          throw new Error(e.toString());
        }
      });

      if (moduleId) {
        const problemLists = Object.keys(parsedContent)
          .filter(x => x !== 'MODULE_ID')
          .map(listId => ({
            listId,
            problems: parsedContent[listId].map((x: ProblemMetadata) => {
              return {
                ...getProblemInfo(x, freshOrdering),
              };
            }),
          }));
        allModuleProblemLists.push({
          problemLists,
          moduleId,
        });
      }
    } catch (error) {
      console.error(`Error processing problem file ${filePath}:`, error);
      throw error;
    }
  }

  // Deduplicate problems by unique_id (same problem can appear in multiple modules)
  // Keep the first occurrence, or one with a module if available
  const problemsMap = new Map<string, ProblemInfo>();
  for (const problem of allProblems) {
    if (!problemsMap.has(problem.uniqueId)) {
      problemsMap.set(problem.uniqueId, problem);
    } else {
      // If current problem has a module and existing one doesn't, prefer the one with module
      const existing = problemsMap.get(problem.uniqueId)!;
      if (problem.inModule && !existing.inModule) {
        problemsMap.set(problem.uniqueId, problem);
      }
    }
  }

  const uniqueProblems = Array.from(problemsMap.values());
  transaction(uniqueProblems, allModuleProblemLists);
}

async function indexModuleFrontmatter(db: Database.Database): Promise<void> {
  const { moduleIDToSectionMap } = await import('../content/ordering');
  const insertStmt = db.prepare(`
    INSERT INTO module_frontmatter (file_path, module_id, frontmatter_json, division)
    VALUES (?, ?, ?, ?)
  `);

  const rows = db
    .prepare(
      'SELECT id, file_path, frontmatter_json FROM mdx_content WHERE type = ?'
    )
    .all('module') as any[];

  const transaction = db.transaction(
    (
      items: Array<{ id: string; file_path: string; frontmatter_json: string }>
    ) => {
      for (const item of items) {
        const frontmatter = JSON.parse(item.frontmatter_json);

        if (!(frontmatter.id in moduleIDToSectionMap)) {
          throw new Error(
            `Module ID does not show up in moduleIDToSectionMap: ${frontmatter.id}, path: ${item.file_path}`
          );
        }

        const division = moduleIDToSectionMap[frontmatter.id];
        insertStmt.run(
          item.file_path,
          item.id,
          item.frontmatter_json,
          division
        );
      }
    }
  );

  transaction(rows);
}

async function indexSolutionFrontmatter(db: Database.Database): Promise<void> {
  const insertStmt = db.prepare(`
    INSERT INTO solution_frontmatter (file_path, solution_id, frontmatter_json)
    VALUES (?, ?, ?)
  `);

  const rows = db
    .prepare(
      'SELECT id, file_path, frontmatter_json FROM mdx_content WHERE type = ?'
    )
    .all('solution') as any[];

  const transaction = db.transaction(
    (
      items: Array<{ id: string; file_path: string; frontmatter_json: string }>
    ) => {
      for (const item of items) {
        insertStmt.run(item.file_path, item.id, item.frontmatter_json);
      }
    }
  );

  transaction(rows);
}

async function indexProblemSlugs(db: Database.Database): Promise<void> {
  const { getProblemURL } = await import('../src/models/problem');
  const insertStmt = db.prepare(`
    INSERT INTO problem_slugs (slug, unique_id)
    VALUES (?, ?)
  `);

  const rows = db
    .prepare('SELECT problem_data_json FROM problems')
    .all() as any[];
  const problemSlugs = new Map<string, string>();

  // Validate consistency (similar to validateProblemConsistency)
  for (const row of rows) {
    const problem: ProblemInfo = JSON.parse(row.problem_data_json);
    const slug = getProblemURL(problem);

    if (problemSlugs.has(slug) && problemSlugs.get(slug) !== problem.uniqueId) {
      throw new Error(
        `The problems ${problemSlugs.get(slug)} and ${problem.uniqueId} have the same slugs!`
      );
    }

    problemSlugs.set(slug, problem.uniqueId);
  }

  const transaction = db.transaction(
    (items: Array<{ slug: string; uniqueId: string }>) => {
      for (const { slug, uniqueId } of items) {
        insertStmt.run(slug, uniqueId);
      }
    }
  );

  const items = Array.from(problemSlugs.entries()).map(([slug, uniqueId]) => ({
    slug,
    uniqueId,
  }));
  transaction(items);
}

async function indexUSACOIds(db: Database.Database): Promise<void> {
  const insertStmt = db.prepare(`
    INSERT INTO usaco_ids (id)
    VALUES (?)
  `);

  const rows = db
    .prepare('SELECT problem_data_json FROM problems')
    .all() as any[];
  const usacoIds = new Set<string>();

  // Extract USACO IDs (similar to validateProblemConsistency)
  for (const row of rows) {
    const problem: ProblemInfo = JSON.parse(row.problem_data_json);
    if (problem.uniqueId.startsWith('usaco')) {
      usacoIds.add(problem.uniqueId);
    }
  }

  const transaction = db.transaction((ids: string[]) => {
    for (const id of ids) {
      insertStmt.run(id);
    }
  });

  transaction(Array.from(usacoIds));
}

async function generateUsacoDivisionsJson(
  db: Database.Database
): Promise<void> {
  const { writeFile } = await import('fs/promises');
  const { join } = await import('path');

  // Query all problems and filter for USACO divisions
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
    `
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
      difficulty: row.difficulty,
      tags: JSON.parse(row.tags_json || '[]'),
      solution: JSON.parse(row.solution_json || '{}'),
      inModule: Boolean(row.in_module),
      moduleId: row.module_id,
    };

    problems.push(problem);
  }

  // Filter problems to only include USACO divisions
  const usacoDivisionProblems = problems.filter(
    problem =>
      problem.source &&
      ['Bronze', 'Silver', 'Gold', 'Platinum'].includes(problem.source)
  );

  // Write to public directory
  const publicDir = join(process.cwd(), 'public');
  const outputPath = join(publicDir, 'usaco-divisions.json');

  await writeFile(
    outputPath,
    JSON.stringify({ problems: usacoDivisionProblems }, null, 2)
  );
  console.log(`USACO divisions JSON written to: ${outputPath}`);
}
