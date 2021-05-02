/*eslint-disable */
const visit = require('unist-util-visit');
const katex = require('katex').renderToString;
const unified = require('unified');
const parse = require('rehype-parse');
const toText = require('hast-util-to-text');

const assign = Object.assign;

const parseHtml = unified().use(parse, { fragment: true, position: false });

const source = 'rehype-katex';

const customRehypeKatex = options => {
  const settings = options || {};
  const throwOnError = settings.throwOnError || false;

  return transformMath;

  function transformMath(tree, file) {
    visit(tree, 'element', onelement);

    function onelement(element) {
      const classes = element.properties.className || [];
      const inline = classes.includes('math-inline');
      const displayMode = classes.includes('math-display');

      if (!inline && !displayMode) {
        return;
      }

      const value = toText(element);

      let result;

      try {
        result = katex(
          value,
          assign({}, settings, { displayMode: displayMode, throwOnError: true })
        );
      } catch (error) {
        const fn = throwOnError ? 'fail' : 'message';
        const origin = [source, error.name.toLowerCase()].join(':');

        file[fn](error.message, element.position, origin);

        result = katex(
          value,
          assign({}, settings, {
            displayMode: displayMode,
            throwOnError: false,
            strict: 'ignore',
          })
        );
      }

      if (element.tagName === 'div') element.tagName = 'MATHDIV';
      else if (element.tagName === 'span') element.tagName = 'MATHSPAN';
      else throw 'unknown tag?';

      element.children = [
        {
          type: 'text',
          value: result,
        },
      ];
      element.properties['latex'] = value;
      // element.children = parseHtml.parse(result).children
    }
  }
};

module.exports = customRehypeKatex;
