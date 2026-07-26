"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-video-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By David Zhou"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 197,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's consider a simpler problem: given a graph, find the shortest cycle that\r\npasses through node 1."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 199,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["What does a cycle through node 1 look like? In any cycle through node 1, there\r\nexists two nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 18
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 26
      }, this), " on that cycle such that there is a path from 1 to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 1
      }, this), " and 1 to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 14
      }, this), ", and there is an edge between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 48
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 56
      }, this), ". The length of this\r\ncycle is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(1, u) + dist(1, v) + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 205,
        columnNumber: 10
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One might now try to use BFS to find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(1, i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 207,
        columnNumber: 38
      }, this), " for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 207,
        columnNumber: 60
      }, this), " in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 1
      }, this), " time and then check for each edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 56
      }, this), " whether\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(1, u) + dist(1, v) + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 1
      }, this), " is minimal."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 207,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Of course, this means that we might count a \"cycle\" like\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\rightarrow x \\rightarrow u \\rightarrow v \\rightarrow x \\rightarrow 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 1
      }, this), ".\r\nHowever, this doesn't matter for our original problem, since the shortest cycle\r\nwill always be shorter than such a \"cycle\"."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 211,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There's one problem with this approach though: if the edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 60
      }, this), " is on the\r\npath from node 1 to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 26
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\rightarrow u \\rightarrow v \\rightarrow 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 36
      }, this), "\r\nisn't a cycle! And this time, it does matter in our original problem!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Fortunately, there's a relatively simple fix."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 220,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of first finding all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(1, i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 222,
        columnNumber: 30
      }, this), " and then checking for the minimum, do\r\nboth at the same time during the BFS."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now to prevent \"backtracking\", we only consider ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(1, u) + dist(1, v) + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 49
      }, this), " as\r\na minimum if we're currently at node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 38
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(1, u) \\leq dist(1, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 46
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 225,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This algorithm runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 24
      }, this), " time. Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 57
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 65
      }, this), " are so\r\nsmall, we can just apply this algorithm for all nodes instead of just node 1."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The final complexity of this solution is thus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N(N + M))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 47
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 231,
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
      lineNumber: 233,
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
