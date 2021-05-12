import { ProblemSolutionInfo } from './problem';

export type AlgoliaEditorModuleFile = {
  title: string;
  id: string;
  // content/1_Bronze/Complete_Rec.mdx
  path: string;
};

export type AlgoliaEditorSolutionFile = {
  title: string;
  id: string;
  source: string;
  path: string | null; // null if file doesn't yet exist
  problemModules: AlgoliaEditorModuleFile[];
  solutions: ProblemSolutionInfo[];
};

export type AlgoliaEditorFile =
  | ({
      kind: 'module';
      objectID: string;
    } & AlgoliaEditorModuleFile)
  | ({
      kind: 'solution';
      objectID: string;
    } & AlgoliaEditorSolutionFile);
