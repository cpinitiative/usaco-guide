import { Root } from 'mdast';
import { SectionID } from '../../content/ordering';
import { ModuleFrequency } from '../models/module';
import { ProblemDifficulty, ProblemSolutionInfo } from '../models/problem';

export interface Heading {
  depth: number;

  value: string;

  slug: string;
}

export interface TableOfContents {
  cpp: Heading[];

  java: Heading[];

  py: Heading[];
}

export interface ModuleFrontMatterDbRow {
  file_path: string;
  module_id: string;
  frontmatter_json: string;
  division: SectionID;
}

export interface MdxFrontmatter {
  id: string;
  title: string;
  description?: string | null;
  author?: string;
  contributors?: string;
  prerequisites?: string[];
  redirects?: string[];
  frequency?: ModuleFrequency;
  isIncomplete?: boolean;
  lastUpdated?: string;
  division?: SectionID;
  /**
   * Widens the content column for modules whose content (ex. the USACO
   * monthlies table) doesn't fit in the default width.
   */
  wide?: boolean;
  // Problem-specific fields
  source?: string;
  difficulty?: string;
  tags?: string[];
  isStarred?: boolean;
  solution?: ProblemSolutionInfo;
}

// from docs/MIGRATION.md
export interface MdxContentDbRow {
  /** frontmatter.id */
  id: string;
  type: 'module' | 'solution';
  /** Relative file path */
  file_path: string;
  /** JSON string of MdxFrontmatter */
  frontmatter_json: string;
  /** Compiled MDX body (string) */
  body: string;
  /** JSON string of TableOfContents */
  toc_json: string;
  /** JSON string of mdast */
  mdast_json: string | null;
  cpp_oc: number;
  java_oc: number;
  py_oc: number;
  division: SectionID | null;
  /** ISO timestamp or NULL */
  git_author_time: string | null;
  created_at: number;
}


export interface MdxContent {
  body: string;

  fileAbsolutePath: string;

  slug?: string;

  frontmatter: MdxFrontmatter;

  toc: TableOfContents;

  cppOc: number;

  javaOc: number;

  pyOc: number;

  mdast?: Root;

  fields?: Fields;
}

export interface Fields {
  gitAuthorTime: string | null;

  division: SectionID | null;
}

/*
export interface ProblemSolutionInfo {
  kind: 'internal' | 'link' | 'label' | 'sketch';

  label?: string;

  labelTooltip?: string | null;

  url?: string;

  sketch?: string;

  hasHints?: boolean;
}
*/

export interface ProblemDbRow {
  unique_id: string;
  name: string;
  url: string;
  source: string;
  source_description: string | null;
  is_starred: number; // SQLite boolean as INTEGER
  difficulty: ProblemDifficulty;
  tags_json: string; // JSON array of strings
  solution_json: string; // JSON string of ProblemSolutionInfo
  in_module: number; // SQLite boolean as INTEGER
  module_id: string | null; // Foreign key to mdx_content.id
  problem_data_json: string; // Full ProblemInfo as JSON for quick retrieval
}

export interface ProblemInfo {
  uniqueId: string;

  name: string;

  url: string;

  source: string;

  sourceDescription?: string;

  isStarred?: boolean;

  difficulty: ProblemDifficulty;

  tags: string[];

  solution: ProblemSolutionInfo;

  inModule?: boolean;

  moduleId?: string;

  module?: MdxContent;
}

export interface ModuleProblemListDbRow {
  id: number;
  module_id: string;
  list_id: string;
  problems_json: string;
}

export interface ModuleProblemList {
  listId: string;

  problems: ProblemInfo[];
}

export interface ModuleProblemLists {
  moduleId: string;

  problemLists: ModuleProblemList[];
}

export interface USACOIdDbRow {
  id: string;
}
