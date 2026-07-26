"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: ["The difficulty of this problem is with how we choose to implement the BFS. We present\r\ntwo solutions with the first being faster and the second being easier to write\r\n(note that the second solution may TLE). The differences lies with how the grid is\r\n", _jsxDEV(_components.a, {
      href: "/gold/string-hashing",
      children: "hashed"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "."]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 8,
    columnNumber: 1
  }, this);
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsxDEV(MDXLayout, {
    ...props,
    children: _jsxDEV(_createMdxContent, {
      ...props
    }, undefined, false, {
      fileName: "<source.js>"
    }, this)
  }, undefined, false, {
    fileName: "<source.js>"
  }, this) : _createMdxContent(props);
}
return {
  default: MDXContent
};
