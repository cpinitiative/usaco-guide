/*eslint-disable */

const mdastToStringWithKatex = require('./mdast-to-string');
const mdastToString = require('mdast-util-to-string');
const Slugger = require('github-slugger');

module.exports = ({ tableOfContents }) => {
  tableOfContents['cpp'] = [];
  tableOfContents['java'] = [];
  tableOfContents['py'] = [];
  const slugger = new Slugger();

  function process(node, curLang = null) {
    if (node.type === 'heading') {
      const val = {
        depth: node.depth,
        value: mdastToStringWithKatex(node),
        slug: slugger.slug(mdastToString(node), false),
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
    for (let child of node.children || []) {
      process(child, curLang);
    }
  }

  return node => {
    console.log(node);
    process(node);
  };
};
