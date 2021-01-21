import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useContext, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SolutionInfo } from '../../../models/solution';
import { ModuleInfo } from '../../../models/module';

export default function getSuffix() {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const markdownInfo = moduleLayoutInfo.markdownLayoutInfo;
  const relativePath = markdownInfo.fileRelativePath;
  let suffix = '';
  if (markdownInfo instanceof ModuleInfo) {
    // /\d_.*/.test(relativePath)
    suffix = 'content/' + relativePath;
  } else {
    suffix = 'solutions/' + relativePath;
  }
  return suffix;
}
