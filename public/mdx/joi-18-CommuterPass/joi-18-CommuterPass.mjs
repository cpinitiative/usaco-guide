"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Use Dijkstra's to calculate distances from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 47
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 52
        }, this), ", and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 61
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Consider a subset of directed edges where each directed edge is part of a\r\nshortest path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 23
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 30
        }, this), ". Note that this subset is a DAG, and can be\r\nfound by keeping track of the parents of every node when running Dijkstra's with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 85
        }, this), " as the starting node."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["An optimal path will either be in the form ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\rightarrow x \\rightarrow y \\rightarrow\r\nv"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 47
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v \\rightarrow x \\rightarrow y \\rightarrow u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 10
        }, this), ", where\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\rightarrow y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 4
        }, this), " is a path on the DAG. Note that any path on the DAG is a valid commuter pass\r\noption."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Without loss of generality, assume that our path has the form\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\rightarrow x \\rightarrow y \\rightarrow v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 4
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Define ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dp}_1(i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 11
        }, this), " as the minimum distance from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 57
        }, this), " to any node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 73
        }, this), " such that\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 4
        }, this), " is on a path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 26
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 33
        }, this), " in the DAG."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Define ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dp}_2(i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 11
        }, this), " as the minimum distance from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 57
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 64
        }, this), " if the commuter pass\r\nedges used are on a path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 34
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 41
        }, this), " in the DAG."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For each parent of a node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 30
        }, this), ", our transitions are:\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\begin{aligned}\r\n \\text{dp}_1(i) &= \\min\\!\\left\\{ \\text{dp}_1(i),\\; \\text{dist}_u(i),\\; \\text{dp}_1(\\text{par}_i) \\right\\}, \\\\\r\n \\text{dp}_2(i) &= \\min\\!\\left\\{ \\text{dp}_2(i),\\; \\text{dp}_1(i) + \\text{dist}_v(i),\\; \\text{dp}_2(\\text{par}_i) \\right\\}.\r\n\\end{aligned}"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the source node is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 26
        }, this), ", then the answer is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dp}_2(t)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 50
        }, this), ". To handle the case\r\nwhere the optimal path has the form ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v \\rightarrow x \\rightarrow y \\rightarrow u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 40
        }, this), ", we repeat the algorithm for the source node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 131
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Alternatively, the answer could be the distance from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 57
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 64
        }, this), " without using the\r\ncommuter pass."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
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
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Alternatively,\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/thecodingwizard/competitive-programming/blob/master/JOI/JOI%2018-commuterpass.cpp",
        rel: "nofollow",
        target: "_blank",
        children: "Nathan's implementation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 1
      }, this), ".\r\nNote that the DP definitions in Nathan's implementation are slightly different\r\nthan above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
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
