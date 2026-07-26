"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob2_platinum_jan23.html",
        rel: "nofollow",
        target: "_blank",
        children: "official editorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 5
      }, this), "\r\nprovides a thorough solution for this problem, but here are a few details to pay attention to."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Doing a Floyd-Warshall at the start of the algorithm is necessary because,\r\nalthough the bitmask DP enumerates the next ", _jsxDEV(_components.em, {
        children: "unvisited"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 45
      }, this), " node,\r\nit may be optimal or even necessary to go through a node we've already visited in order to get there."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For instance, consider the following adjacency list:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "1 -> 2\r\n2 -> 1\r\n1 -> 3\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To get from node 2 to node 3, we ", _jsxDEV(_components.strong, {
        children: "have"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 34
      }, this), " to pass through node 1 no matter what."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Also, it may seem more intuitive to define the bitmask DP as ", _jsxDEV(_components.code, {
        children: "dp[mask][i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 62
      }, this), ",\r\nwhere ", _jsxDEV(_components.code, {
        children: "mask"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 7
      }, this), " represents the nodes we've currently visited (in reverse order),\r\nand ", _jsxDEV(_components.code, {
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 5
      }, this), " represents the node we're currently at."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The issue with this definition, however, is that our state has no idea what the final set of visited nodes is,\r\nmeaning we have no way of accurately computing the effect of traversing an edge."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
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
