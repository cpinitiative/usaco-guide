/* eslint @typescript-eslint/no-use-before-define: off */

// based on mdast-util-to-string
export default function extractSearchableText(node) {
  if (
    node.type === 'code' ||
    node.type === 'import' ||
    node.type === 'export' ||
    node.type === 'inlineMath' ||
    node.name === 'Resources'
  ) {
    return '';
  }
  return (
    (node.type === 'paragraph' || node.type === 'heading' ? ' ' : '') +
    ((node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
      '')
  );
}

function all(values) {
  const result = [];
  const length = values.length;
  let index = -1;

  while (++index < length) {
    result[index] = extractSearchableText(values[index]);
  }

  return result.join('');
}
