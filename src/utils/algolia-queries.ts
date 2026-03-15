import { moduleIDToSectionMap } from '../../content/ordering';
import {
  queryAllModuleFrontmatter,
  queryAllProblemDashboardInfo,
  queryModule,
  queryModuleIdAndTitleFromProblemBySolutionId,
  queryProblem,
  querySolution,
} from '../lib/queryContent';
import {
  AlgoliaEditorModuleFile,
  AlgoliaEditorSolutionFile,
} from '../models/algoliaEditorFile';
import { AlgoliaProblemInfo } from '../models/problem';
import extractSearchableText from './extract-searchable-text';

export async function getModuleRecords() {
  const modules = await queryAllModuleFrontmatter();

  return modules
    .filter(m => m.frontmatter.id in moduleIDToSectionMap)
    .map(async m => {
      const fullModule = await queryModule(m.frontmatter.id);
      return {
        objectID: m.frontmatter.id,
        title: m.frontmatter.title,
        description: m.frontmatter.description,
        division: m.division,
        content: fullModule?.mdast
          ? extractSearchableText(fullModule.mdast)
          : '',
      };
    });
}

export async function getProblemRecords() {
  const problems = await queryAllProblemDashboardInfo();
  const modules = await queryAllModuleFrontmatter();
  const moduleFiles = modules.map(m => ({
    title: m.frontmatter.title,
    id: m.frontmatter.id,
    path: m.filePath,
  }));
  const records: AlgoliaProblemInfo[] = [];

  for (const problemInfo of problems) {
    const fullProblem = await queryProblem(problemInfo.uniqueId);
    if (!fullProblem) continue;

    const existingProblem = records.find(
      x => x.objectID === fullProblem.uniqueId
    );
    const problemModules = await queryModuleIdAndTitleFromProblemBySolutionId(
      fullProblem.uniqueId
    );
    const problemModulesWithPath = problemModules.map(module => {
      const moduleFile = moduleFiles.find(m => m.id === module.id);
      return {
        id: module.id,
        title: module.title,
        path: moduleFile?.path || '',
      };
    });

    if (existingProblem) {
      existingProblem.tags = [
        ...new Set([...existingProblem.tags, ...(fullProblem.tags || [])]),
      ];

      problemModulesWithPath.forEach(module => {
        if (!existingProblem.problemModules.find(m => m.id === module.id)) {
          existingProblem.problemModules.push(module);
        }
      });
    } else {
      records.push({
        objectID: fullProblem.uniqueId,
        name: fullProblem.name,
        source: fullProblem.source,
        tags: fullProblem.tags || [],
        url: fullProblem.url,
        difficulty: fullProblem.difficulty,
        isStarred: fullProblem.isStarred || false,
        solution: fullProblem.solution
          ? (Object.fromEntries(
              Object.entries(fullProblem.solution).filter(([_, v]) => v != null)
            ) as any)
          : null,
        problemModules: problemModulesWithPath,
      });
    }
  }

  return records;
}

export async function getEditorFileRecords() {
  const modules = await queryAllModuleFrontmatter();
  const problems = await queryAllProblemDashboardInfo();

  const moduleFiles: AlgoliaEditorModuleFile[] = modules.map(m => ({
    title: m.frontmatter.title,
    id: m.frontmatter.id,
    path: m.filePath,
  }));

  const solutionFiles: AlgoliaEditorSolutionFile[] = [];

  for (const problemInfo of problems) {
    const fullProblem = await queryProblem(problemInfo.uniqueId);
    if (!fullProblem) continue;

    const solution = await querySolution(problemInfo.uniqueId);
    const problemModules = await queryModuleIdAndTitleFromProblemBySolutionId(
      problemInfo.uniqueId
    );
    const problemModulesWithPath = problemModules.map(module => {
      const moduleFile = moduleFiles.find(m => m.id === module.id);
      return {
        id: module.id,
        title: module.title,
        path: moduleFile?.path || '',
      };
    });

    const existingFile = solutionFiles.find(
      file => file.id === problemInfo.uniqueId
    );

    if (existingFile) {
      problemModulesWithPath.forEach(module => {
        if (!existingFile.problemModules.find(m => m.id === module.id)) {
          existingFile.problemModules.push(module);
        }
      });

      if (fullProblem.solution) {
        existingFile.solutions.push({ ...fullProblem.solution });
      }
    } else {
      const newFile: AlgoliaEditorSolutionFile = {
        id: problemInfo.uniqueId,
        title: fullProblem.name,
        source: fullProblem.source,
        solutions: fullProblem.solution ? [{ ...fullProblem.solution }] : [],
        path: solution ? solution.fileAbsolutePath : null,
        problemModules: problemModulesWithPath,
      };
      solutionFiles.push(newFile);
    }
  }

  return [
    ...moduleFiles.map<
      { kind: 'module'; objectID: string } & AlgoliaEditorModuleFile
    >(x => ({
      ...x,
      kind: 'module',
      objectID: x.id,
    })),
    ...solutionFiles.map<
      { kind: 'solution'; objectID: string } & AlgoliaEditorSolutionFile
    >(x => ({
      ...x,
      kind: 'solution',
      objectID: x.id,
    })),
  ];
}

export async function getAlgoliaRecords() {
  const indexPrefix = process.env.ALGOLIA_INDEX_NAME ?? 'dev';

  const [moduleRecords, problemRecords, fileRecords] = await Promise.all([
    Promise.all(await getModuleRecords()),
    getProblemRecords(),
    getEditorFileRecords(),
  ]);

  return [
    {
      records: moduleRecords,
      indexName: indexPrefix + '_modules',
      matchFields: ['title', 'description', 'content', 'id', 'division'],
    },
    {
      records: problemRecords,
      indexName: indexPrefix + '_problems',
      matchFields: [
        'source',
        'name',
        'tags',
        'url',
        'difficulty',
        'isStarred',
        'tags',
        'problemModules',
        'solution',
      ],
    },
    {
      records: fileRecords,
      indexName: indexPrefix + '_editorFiles',
      matchFields: [
        'kind',
        'title',
        'id',
        'source',
        'solutions',
        'path',
        'problemModules',
      ],
    },
  ];
}

export default getAlgoliaRecords;
