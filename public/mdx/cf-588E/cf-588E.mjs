"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/20971#:~:text=C%20(Author%3A,)",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that for each two nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 30
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 38
      }, this), ", the path between them is just ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 73
      }, this), " to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lca(u,v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 16
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lca(u,v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 23
      }, this), ". Also note the constraint of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a \\leq 10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 63
      }, this), " for\r\neach query. To answer each query, we only need to store the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 61
      }, this), " people with the\r\nsmallest ids for the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 32
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lca(u,v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 39
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 54
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lca(u,v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 61
      }, this), ", and\r\ncombine them. This can be done with binary lifting, which will store the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 74
      }, this), "\r\nsmallest ids for each vertex to their ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 39
      }, this), "'th ancestor."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can answer each query in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(a \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 29
      }, this), ". Even though the constant\r\nfactor is pretty bad, the problem limits give room for it. Note\r\nthat if you do store more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 32
      }, this), " smallest ids the problem will yield a MLE!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(a \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 22
      }, this), " for each query."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
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
