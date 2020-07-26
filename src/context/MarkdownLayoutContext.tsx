import { createContext } from 'react';
import * as React from 'react';
import { ModuleInfo, ModuleLinkInfo } from '../models/module';
import { SolutionInfo } from '../models/solution';

const MarkdownLayoutContext = createContext<{
  markdownLayoutInfo: ModuleInfo | SolutionInfo;
  sidebarLinks: ModuleLinkInfo[];
}>(null);

export default MarkdownLayoutContext;
