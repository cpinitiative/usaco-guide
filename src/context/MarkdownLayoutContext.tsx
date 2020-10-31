import { createContext } from 'react';
import * as React from 'react';
import { ModuleInfo, ModuleLinkInfo } from '../models/module';
import { SolutionInfo } from '../models/solution';
import { BlogPostInfo } from '../models/blogPost';

const MarkdownLayoutContext = createContext<{
  markdownLayoutInfo: ModuleInfo | SolutionInfo | BlogPostInfo;
  sidebarLinks: ModuleLinkInfo[];
  conf: React.Dispatch<React.SetStateAction<Boolean>>;
}>(null);

export default MarkdownLayoutContext;
