"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N + M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two cases when we can't make the graph strongly connected:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "The graph isn't a single connected component."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The graph contains a ", _jsxDEV(_components.a, {
          href: "/adv/BCC-2CC",
          children: "bridge"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 25
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first case can be checked with a simple DFS (i.e. check that it visits each\r\nnode)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The second case can be checked in the same DFS using Tarjan's bridge-finding\r\nalgorithm."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To construct the answer, set the direction of each edge to the direction in\r\nwhich we first traversed it in the DFS."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
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
