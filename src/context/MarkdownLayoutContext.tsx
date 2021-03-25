import { createContext } from 'react';
// import * as React from 'react';
import { ModuleInfo, ModuleLinkInfo, ModuleProgress } from '../models/module';
import { SolutionInfo } from '../models/solution';

const MarkdownLayoutContext = createContext<{
  markdownLayoutInfo: ModuleInfo | SolutionInfo;
  sidebarLinks: ModuleLinkInfo[];
  activeIDs: string[];
  appearsIn: string[];
  uniqueID: string;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (x: boolean) => void;
  moduleProgress: ModuleProgress;
  handleCompletionChange: (x: ModuleProgress) => void;
}>(null);

export default MarkdownLayoutContext;
