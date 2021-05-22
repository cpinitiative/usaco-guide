/*eslint-disable */

module.exports = () => {
  function process(node) {
    if (node.type === 'html') {
      node.type = 'mdxJsxTextElement';
      node.name = 'RAWHTML';
      node.children = [
        {
          type: 'text',
          value: node.value,
        },
      ];
    }
    for (let child of node.children || []) {
      process(child);
    }
  }

  return node => {
    process(node);
  };
};
