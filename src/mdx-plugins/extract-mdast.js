/*eslint-disable */
export default ({ mdast }) => {
  return node => {
    mdast.data = JSON.stringify(node);
  };
};
