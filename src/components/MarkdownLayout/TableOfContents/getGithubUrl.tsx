import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useContext, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SolutionInfo } from '../../../models/solution';
import { ModuleInfo } from '../../../models/module';

export default function getInfoToEdit() {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const markdownInfo = moduleLayoutInfo.markdownLayoutInfo;
  const relativePath = markdownInfo.fileRelativePath;
  const githubUrlPrefix =
    'https://github.com/cpinitiative/usaco-guide/blob/master/';
  const rawGithubUrlPrefix =
    'https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/';
  let suffix = '';
  if (markdownInfo instanceof ModuleInfo) {
    // /\d_.*/.test(relativePath)
    suffix = 'content/' + relativePath;
  } else {
    suffix = 'solutions/' + relativePath;
  }

  const escapeSpaces = url => url.replace(' ', '%20');
  const githubUrl = escapeSpaces(githubUrlPrefix + suffix);
  const rawGithubUrl = escapeSpaces(rawGithubUrlPrefix + suffix);
  // is there some function that can automatically escape chars?

  // https://www.scrapingbee.com/blog/web-scraping-javascript/
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const getContents = async () => {
    const data = await fetch(rawGithubUrl);
    const text = await data.text();
    console.log('TEXT', text); // ok what do I do with this
  };

  getContents();
  return githubUrl;
}
