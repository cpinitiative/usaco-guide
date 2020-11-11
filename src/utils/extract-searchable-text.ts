// based on mdast-util-to-string
export default function extractSearchableText(node) {
  if (
    node.type === 'code' ||
    node.type === 'import' ||
    node.type === 'export' ||
    node.type === 'jsx' ||
    node.type === 'inlineMath'
  )
    return '';
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
  var result = [];
  var length = values.length;
  var index = -1;

  while (++index < length) {
    result[index] = extractSearchableText(values[index]);
  }

  return result.join('');
}
