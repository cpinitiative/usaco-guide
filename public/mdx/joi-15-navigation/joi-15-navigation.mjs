"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: ["We essentially want to root the tree at ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "T"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 41
    }, this), " and always move to the parent of the\r\ncurrent node until we end up at ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "T"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 33
    }, this), "."]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 2,
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
