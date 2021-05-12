/*eslint-disable */
module.exports = ({ mdast }) => {
  return node => {
    mdast.data = JSON.stringify(node);
  };
};
