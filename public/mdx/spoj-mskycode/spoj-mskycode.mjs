"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: ["In this particular case the set ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "A_i"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 33
    }, this), " - previously mentioned in the tutorial section - denotes how many qudruples ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "\\{ V_1, V_2, V_3, V_4\\}"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 115
    }, this), " there are such that ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "i \\mid V_j, \\forall i \\in [1,4] "
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 161
    }, this), ". The global answer is ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "\\bigg| \\bigcup_{i=1}^{\\text{ maxval }} A_i \\bigg|"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 218
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
