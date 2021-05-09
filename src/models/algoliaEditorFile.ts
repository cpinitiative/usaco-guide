export type AlgoliaEditorModuleFile = {
  title: string;
  id: string;
  // content/1_Bronze/Complete_Rec.mdx
  path: string;
};

export type AlgoliaEditorSolutionFile = {
  title: string;
  id: string;
  path: string;
  problemModules: AlgoliaEditorModuleFile[];
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
