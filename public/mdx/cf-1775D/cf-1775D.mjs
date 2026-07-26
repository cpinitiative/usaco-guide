"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/111286",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
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
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first observation we need to make is that all spiders which share a common\r\nfactor form a complete graph where all pairs of spiders in this group are friends with each other."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, we can enumerate the prime factors of all spiders and keep track\r\nfor each factor the spiders which divide it to store the edges in an efficient manner.\r\nTwo spiders are friends iff they're both in some prime factor's list together."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, doing a naive BFS from the starting node will take too long.\r\nTo optimize this, we have to make another optimization, which is that\r\nit's always optimal to \"use\" a prime at most once in our path."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, take the path where the number of legs are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "15"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 57
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 63
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 72
      }, this), "\r\nwhere we've used the common divisor ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 37
      }, this), " two times.\r\nHere, we can cut out ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 22
      }, this), " and move directly from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "15"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 49
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 57
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This allows us to do an optimized BFS from the starting spider\r\nby keeping a global list of visited prime factors.\r\nFor each spider, we iterate through its prime factors and see\r\nwhich ones haven't been used.\r\nIf a factor hasn't been used, then it's standard BFS with backtracking."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
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
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}\\left(n \\left(\\sqrt{A} + \\log n\\right)\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 88
      }, this), " is the largest number of legs among the spiders."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 220,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Maintaining all the possible edges between any two spiders is too inefficient."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since the complete graphs for the spiders are grouped by prime factors, we\r\nbuild a graph that groups spiders by prime factors. We do this\r\nby creating nodes representing prime factors, and connecting them\r\nto the spiders divisible by that prime factor."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 224,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can now notice that the length of the path in the original\r\nproblem is the length of the shortest path over our newly reformulated graph,\r\ndivided by 2 plus 1, accounting for the starting node."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 229,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The number of vertices is the amount of prime factors plus the amount of nodes,\r\nwhich is at most double ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 234,
        columnNumber: 25
      }, this), ".\r\nAs for the number of edges, consider that any integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 55
      }, this), " has at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log{n}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 71
      }, this), " prime factors, since factorizing out each prime factor at least halves ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 152
      }, this), ". Thus, the number of edges is bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 197
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 233,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With these parameters for our altered graph, BFS now becomes feasible."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 237,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 239,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O\\left(N\\frac{\\log N}{\\log\\log N}+\\frac A{\\log A}+N\\log\\log A\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 22
      }, this), "\r\nwhere ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A=\\max(a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 7
      }, this), ".  For practical purposes, this is bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log N+A\\log A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 66
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 241,
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
