const visit = require(`unist-util-visit`);
const katex = require(`katex`);
const remarkMath = require(`remark-math`);

// renderToString results in <span class="katex">...</span>
// we want to inject data-latex="..."

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  visit(markdownAST, `inlineMath`, node => {
    node.type = `html`;
    let latex = node.value;
    node.value = katex.renderToString(latex, {
      displayMode: false,
      ...pluginOptions,
    });
    node.value = `${node.value.slice(
      0,
      6
    )} data-latex="$${latex}$" ${node.value.slice(6)}`;
  });

  visit(markdownAST, `math`, node => {
    node.type = `html`;
    let latex = node.value;
    node.value = katex.renderToString(latex, {
      displayMode: true,
      ...pluginOptions,
    });
    node.value = `${node.value.slice(
      0,
      6
    )} data-latex="$$${latex}$$" ${node.value.slice(6)}`;
  });
};

module.exports.setParserPlugins = () => [remarkMath];
