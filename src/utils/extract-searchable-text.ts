/* eslint @typescript-eslint/no-use-before-define: off */

import { type Parent } from 'mdast';
import { type Node } from 'unist';

// based on mdast-util-to-string
export default function extractSearchableText(node: Node): string {
  if (
    node.type === 'code' ||
    node.type === 'import' ||
    node.type === 'export' ||
    node.type === 'inlineMath' ||
    (typeof node === 'object' && 'name' in node && node.name === 'Resources')
  ) {
    return '';
  }
  return (
    (node.type === 'paragraph' || node.type === 'heading' ? ' ' : '') +
    ((node &&
      node &&
      typeof node === 'object' &&
      (('value' in node && node.value) ||
        ('alt' in node && node.alt) ||
        ('title' in node && node.title) ||
        // All node types from mdast that have children are of type Parent.
        ('children' in node && all((node as Parent).children)))) ||
      '')
  );
}

function all(values: Node[]): string {
  const result: string[] = [];
  const length = values.length;
  let index = -1;

  while (++index < length) {
    result[index] = extractSearchableText(values[index]);
  }

  return result.join('');
}
