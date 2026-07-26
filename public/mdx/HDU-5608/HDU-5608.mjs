"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: ["Same as computing prefix sums of ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "\\phi"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 34
    }, this), ", except we change the function ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "h"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 72
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
