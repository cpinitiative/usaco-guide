"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Let's just focus on subtask 2, since subtask 1's solution is essentially the\r\nsame."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n\n\n", _jsxDEV(_components.p, {
      children: ["We're essentially just creating a\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Hamming_code",
        rel: "nofollow",
        target: "_blank",
        children: "Hamming code"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 106,
      columnNumber: 1
    }, this)]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 1,
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
