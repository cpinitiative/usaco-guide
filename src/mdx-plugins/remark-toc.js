/*eslint-disable */

import GithubSlugger from 'github-slugger';
import { toString as mdastToPlainString } from 'mdast-util-to-string';
import mdastToStringWithKatex from './mdast-to-string.js';

export default ({ tableOfContents }) => {
  tableOfContents['cpp'] = [];
  tableOfContents['java'] = [];
  tableOfContents['py'] = [];
  const slugger = new GithubSlugger();

  function process(node, curLang = null) {
    if (node.type === 'heading') {
      const val = {
        depth: node.depth,
        // The displayed label keeps rendered KaTeX and HTML-escaped text, but
        // the slug must match the heading id, which rehype-slug derives from
        // the plain text. Slugging the escaped/rendered form instead produced
        // dead anchors for every heading containing ' & < > or math
        // ("Knuth's Optimization" -> knuth39s-optimization, id knuths-optimization).
        value: mdastToStringWithKatex(node),
        slug: slugger.slug(mdastToPlainString(node), false),
      };
      if (curLang !== null) {
        tableOfContents[curLang].push(val);
      } else {
        tableOfContents['cpp'].push(val);
        tableOfContents['java'].push(val);
        tableOfContents['py'].push(val);
      }
    } else if (node.name === 'CPPSection') {
      if (curLang !== null) {
        throw new Error(
          'Error generating table of contents -- nested language sections is not allowed.'
        );
      }
      curLang = 'cpp';
    } else if (node.name === 'JavaSection') {
      if (curLang !== null) {
        throw new Error(
          'Error generating table of contents -- nested language sections is not allowed.'
        );
      }
      curLang = 'java';
    } else if (node.name === 'PySection') {
      if (curLang !== null) {
        throw new Error(
          'Error generating table of contents -- nested language sections is not allowed.'
        );
      }
      curLang = 'py';
    }

    // We don't want to generate table of contents for headers inside spoilers, since those
    // links won't work unless the spoiler is expanded.
    if (node.name === 'Spoiler') return;

    for (let child of node.children || []) {
      process(child, curLang);
    }
  }

  return node => {
    process(node);
  };
};
