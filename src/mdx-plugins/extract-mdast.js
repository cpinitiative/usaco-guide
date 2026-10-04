/*eslint-disable */
export default ({ mdast }) => {
  return node => {
    mdast.data = node;
  };
};
