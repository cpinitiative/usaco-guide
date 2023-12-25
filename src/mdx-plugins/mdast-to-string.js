/*eslint-disable */
// modified from https://github.com/syntax-tree/mdast-util-to-string/blob/main/index.js

const katex = require('katex');

module.exports = toString;

const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag])
  );

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString(node) {
  if (node && node.type === 'inlineMath') {
    return katex.renderToString(node.value);
  }
  const nodeValue = node && (node.value || node.alt || node.title);
  return (
    (node &&
      ((nodeValue ? escapeHTML(nodeValue) : null) ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  );
}

function all(values) {
  const result = [];
  let index = -1;

  while (++index < values.length) {
    result[index] = toString(values[index]);
  }

  return result.join('');
}
