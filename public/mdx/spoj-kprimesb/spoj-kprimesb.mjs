"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: ["In this particular case ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "A_i"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 25
    }, this), " - previously mentioned in the tutorial section - denotes how many numbers are divisible with ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "V_i"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 124
    }, this), ", the prime numbers from the input."]
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
