import { visit } from 'unist-util-visit';

export default function remarkExtractImages(options = {}) {
  if (!options.images) {
    options.images = [];
  }

  return tree => {
    visit(tree, (node, index, parent) => {
      // Process markdown images ![alt](src "title")
      if (node.type === 'image') {
        const src = node.url || '';
        const caption = node.title || node.alt || null;

        options.images.push({
          src,
          caption,
          originalImageLink: src, // For markdown images, the src is the original link
        });
      }

      // Process HTML img tags <img src="" alt="" title="">
      if (
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement'
      ) {
        if (node.name === 'img' && node.properties) {
          const src = node.properties.src || '';
          const caption = node.properties.title || node.properties.alt || null;

          options.images.push({
            src,
            caption,
            originalImageLink: src, // For HTML img tags, the src is the original link
          });
        }
      }

      // Process linked images (image wrapped in a link)
      if (node.type === 'link' && parent && index !== null) {
        const children = node.children || [];
        if (children.length === 1 && children[0].type === 'image') {
          const imageNode = children[0];
          const src = imageNode.url || '';
          const caption = imageNode.title || imageNode.alt || null;
          const originalImageLink = node.url || '';

          options.images.push({
            src,
            caption,
            originalImageLink:
              originalImageLink !== src ? originalImageLink : null,
          });
        }
      }
    });

    return tree;
  };
}
