// const visit = require('unist-util-visit');

export default ({ markdownAST }, pluginOptions) => {
  // let newChildren = [];
  // for (let i = 0; i < markdownAST.children.length; i++) {
  // let child = markdownAST.children[i];
  // if (child.type === 'comment') {
  //   let res = re.exec(child.value);
  //   console.log(res);
  // }
  // newChildren.push(child);
  // let codeElements = [];
  // let activeCodeComment = false;
  // for (; i < markdownAST.children.length; i++) {
  //   let child = markdownAST.children[i];
  //   if (child.type === 'jsx' && child.value.startsWith('<code-comment'))
  //     activeCodeComment = true;
  //   if (activeCodeCoconst util = require("mdast-util-toc");
  // const yaml = require("js-yaml");
  //
  // // convert "in-string" to "inString"
  // const strToCamel = str => {
  //   return str.replace(/-(.)/g, (match, chr) => chr.toUpperCase());
  // };
  //
  // // convert "{'in-key': val}" to "{'inKey': val}"
  // const keysToCamel = obj => {
  //   if (obj) {
  //     const newObj = {};
  //     Object.keys(obj).forEach(k => {
  //       newObj[strToCamel(k)] = obj[k];
  //     });
  //     return newObj;
  //   }
  //   return obj;
  // };
  //
  // const transformer = (markdownAST, pluginOptions) => {
  //   // find position of TOC
  //   const index = markdownAST.children.findIndex(
  //     node => node.type === "code" && node.lang === "toc"
  //   );
  //
  //   // we have no TOC
  //   if (index === -1) {
  //     return;
  //   }
  //
  //   let prefs = {
  //     tight: false,
  //     fromHeading: 2,
  //     toHeading: 6,
  //     ...keysToCamel(pluginOptions)
  //   };
  //
  //   try {
  //     let parsePrefs = yaml.safeLoad(markdownAST.children[index].value);
  //     prefs = { ...prefs, ...keysToCamel(parsePrefs) };
  //   } catch (e) {
  //     console.log("Can't parse TOC-Configuration", e);
  //   }
  //
  //   // this ist the ast we nned consider
  //   let tocMarkdownAST = {
  //     ...markdownAST,
  //     children: []
  //   };
  //
  //   let depth;
  //
  //   // add all headings
  //   markdownAST.children.forEach(node => {
  //     if (node.type === "heading" && node.depth > prefs.fromHeading - 1) {
  //       tocMarkdownAST.children.push(node);
  //     }
  //   });
  //
  //   // calculate TOC
  //   const result = util(tocMarkdownAST, {
  //     maxDepth: prefs.toHeading,
  //     tight: prefs.tight,
  //     skip: Array.isArray(prefs.exclude) ? prefs.exclude.join("|") : prefs.exclude
  //   });
  //
  //   // insert the TOC≤
  //   markdownAST.children = [].concat(
  //     markdownAST.children.slice(0, index),
  //     {
  //       type: "html",
  //       value: '<div class="toc">'
  //     },
  //     result.map,
  //     {
  //       type: "html",
  //       value: "</div>"
  //     },
  //     markdownAST.children.slice(index + 1)
  //   );
  // };
  //
  // module.exports = ({ markdownAST }, pluginOptions) => {
  //   return transformer(markdownAST, pluginOptions);
  // };mment || (child.type === 'code' && child.lang)) {
  //     codeElements.push(markdownAST.children[i]);
  //   } else {
  //     if (codeElements.length > 0) i--;
  //     break;
  //   }
  //   if (child.type === 'jsx' && child.value === '</code-comment>')
  //     activeCodeComment = false;
  // }
  // if (codeElements.length > 0) {
  //   newChildren.push({
  //     type: 'jsx',
  //     value: '<code-section>',
  //   });
  //   for (let e of codeElements) newChildren.push(e);
  //   newChildren.push({
  //     type: 'jsx',
  //     value: '</code-section>',
  //   });
  // } else {
  //   newChildren.push(markdownAST.children[i]);
  // }
  // }
  // markdownAST.children = newChildren;
};
