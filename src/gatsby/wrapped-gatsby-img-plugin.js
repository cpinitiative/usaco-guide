/*eslint-disable */

const interopDefault = exp =>
  exp && typeof exp === `object` && `default` in exp ? exp[`default`] : exp;

const getPlugin = ({
  xdmNode,
  getNode,
  getNodesByType,
  reporter,
  cache,
  pathPrefix,
  ...helpers
}) => {
  async function transformer(markdownAST) {
    const requiredPlugin = interopDefault(require('./custom-gatsby-img.js'));

    await requiredPlugin(
      {
        markdownAST,
        markdownNode: xdmNode,
        getNode,
        getNodesByType,
        get files() {
          return getNodesByType(`File`);
        },
        pathPrefix,
        reporter,
        cache,
        ...helpers,
      },
      {
        maxWidth: 832,
        quality: 100,
        disableBgImageOnAlpha: true,
      }
    );

    return markdownAST;
  }
  return [() => transformer, {}];
};

module.exports = stuff => getPlugin(stuff);
