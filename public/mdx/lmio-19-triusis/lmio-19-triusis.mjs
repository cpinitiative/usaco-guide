"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_components.p, {
    children: [_jsxDEV(_components.strong, {
      children: "Bonus"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 201,
      columnNumber: 1
    }, this), ": Can you solve the case where the rabbit can jump at most ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "M"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 201,
      columnNumber: 69
    }, this), " units\r\ndown and at most ", _jsxDEV(_components.code, {
      className: "language-math",
      children: "M"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 18
    }, this), " units up?"]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 201,
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
