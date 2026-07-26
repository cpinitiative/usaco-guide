"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: ["Apparently\r\n", _jsxDEV(_components.a, {
      href: "https://www.cs.cmu.edu/~scandal/papers/treaps-spaa98.pdf",
      rel: "nofollow",
      target: "_blank",
      children: "this paper"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 1
    }, this), " proves\r\nthat this runs in ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "\\mathcal{O}(n\\log n)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 19
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
