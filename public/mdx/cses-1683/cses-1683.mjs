"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N+M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Just run\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/bqi343/USACO/blob/master/Implementations/content/graphs%20(12)/DFS/SCCK.h",
        rel: "nofollow",
        target: "_blank",
        children: "Kosaraju's"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\r\nor\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/bqi343/USACO/blob/master/Implementations/content/graphs%20(12)/DFS/SCCT.h",
        rel: "nofollow",
        target: "_blank",
        children: "Tarjan's"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\r\nSCC algorithm on the graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then assign each component an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ID"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 31
      }, this), " (starting from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 51
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-kosarajus-scc",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-kosarajus-scc",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Kosaraju's SCC:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-with-tarjans-scc",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-tarjans-scc",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Tarjan's SCC"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
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
function _missingMdxReference(id, component, place) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\nIt’s referenced in your code at `" + place + "`" : ""));
}
