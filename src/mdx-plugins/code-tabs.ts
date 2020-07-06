const visit = require('unist-util-visit');

/*
The following code wraps each contiguous section of code tags with <code-section>

Apologies for the insanely messy code...
*/
export default ({ markdownAST }, pluginOptions) => {
  let newChildren = [];
  for (let i = 0; i < markdownAST.children.length; i++) {
    let codeElements = [];
    let activeCodeComment = false;
    for (; i < markdownAST.children.length; i++) {
      let child = markdownAST.children[i];
      if (child.type === 'jsx' && child.value.startsWith('<code-comment'))
        activeCodeComment = true;
      if (activeCodeComment || (child.type === 'code' && child.lang)) {
        codeElements.push(markdownAST.children[i]);
      } else {
        if (codeElements.length > 0) i--;
        break;
      }
      if (child.type === 'jsx' && child.value === '</code-comment>')
        activeCodeComment = false;
    }
    if (codeElements.length > 0) {
      newChildren.push({
        type: 'jsx',
        value: '<code-section>',
      });
      for (let e of codeElements) newChildren.push(e);
      newChildren.push({
        type: 'jsx',
        value: '</code-section>',
      });
    } else {
      newChildren.push(markdownAST.children[i]);
    }
  }
  markdownAST.children = newChildren;
  return markdownAST;
};
