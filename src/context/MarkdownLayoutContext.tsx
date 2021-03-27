import { createContext } from 'react';
// import * as React from 'react';
import {
  MarkdownLayoutSidebarModuleLinkInfo,
  ModuleInfo,
  ModuleLinkInfo,
  ModuleProgress,
} from '../models/module';
import { SolutionInfo } from '../models/solution';

// todo this should be split into ModuleInfoContext and SolutionInfoContext or something
const MarkdownLayoutContext = createContext<{
  markdownLayoutInfo: ModuleInfo | SolutionInfo;
  sidebarLinks: MarkdownLayoutSidebarModuleLinkInfo[];
  // active module IDs: the current module or all the module IDs that the internal solution problem appears in
  activeIDs: string[];
  // for internal solutions only, list of module IDs that this problem appears in
  appearsIn: string[];
  uniqueID: string;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (x: boolean) => void;
  moduleProgress: ModuleProgress;
  handleCompletionChange: (x: ModuleProgress) => void;
}>(null);

export default MarkdownLayoutContext;
