import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useContext, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SolutionInfo } from '../../../models/solution';
import { ModuleInfo } from '../../../models/module';

export default function getGithubUrl() {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  if (!moduleLayoutInfo) return null;

  const markdownInfo = moduleLayoutInfo.markdownLayoutInfo;
  const relativePath = markdownInfo.fileRelativePath;
  let githubUrl = 'https://github.com/cpinitiative/usaco-guide/blob/master/';

  if (markdownInfo instanceof ModuleInfo) {
    // /\d_.*/.test(relativePath)
    githubUrl += 'content/' + relativePath;
  } else {
    githubUrl += 'solutions/' + relativePath;
  }
  githubUrl = githubUrl.replace(' ', '%20'); // is there some function that can automatically escape chars?
  return githubUrl;
}
