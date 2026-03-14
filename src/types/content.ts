import { SectionID } from "../../content/ordering";
import { ModuleFrequency } from "../models/module";
import { ProblemDifficulty, ProblemSolutionInfo } from "../models/problem";

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
  // Problem-specific fields
  source?: string;
  difficulty?: string;
  tags?: string[];
  isStarred?: boolean;
  solution?: ProblemSolutionInfo;
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

  mdast?: string;

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

export interface ModuleProblemList {
  listId: string;

  problems: ProblemInfo[];
}

export interface ModuleProblemLists {
  moduleId: string;

  problemLists: ModuleProblemList[];
}
