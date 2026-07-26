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
        href: "http://www.usaco.org/current/data/sol_reststops_silver_feb18.html",
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
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Vivian Han"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
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
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that early in the hike, there is a rest stop with tastiness ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 69
      }, this), ",\r\nbut later there is a rest stop with tastiness ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 47
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B>A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 57
      }, this), ". Then, it is never\r\noptimal for Bessie to spend any time at the first rest stop with tastiness ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 76
      }, this), ".\r\nIf she did, she could spend the same amount of time at the later rest stop\r\ninstead and earn more tastiness units; she would still never be behind Farmer\r\nJohn. So, the only rest stops that Bessie might stop at are those that have\r\nmore tastiness than any subsequent rest stops."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can find these \"right-maximal\" rest stops in a single right-to-left (or end-to-start)\r\nscan, keeping track of the largest tastiness seen so far.\r\nIf the current stop exceeds the largest value seen so far, it is \"right-maximal.\""
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 148,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, we can perform a greedy algorithm: never stop at non-right-maximal\r\nrest stops. Bessie should stop at a right-maximal rest stop as long as possible\r\n(i.e., until Farmer John catches up with her). Then she proceeds until the next\r\nright-maximal rest stop."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 152,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To see the correctness of this greedy algorithm, suppose Bessie did not spend as\r\nlong as possible at some right-maximal rest stop ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 158,
        columnNumber: 50
      }, this), ". Then she would leave this\r\nrest stop ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 11
      }, this), " seconds early, for some positive ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 48
      }, this), ". Suppose the next place\r\nBessie stops is rest stop ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 27
      }, this), ". We could improve Bessie's tastiness intake by\r\nhaving her spend ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 18
      }, this), " less second at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 37
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 46
      }, this), " more second at rest stop ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 75
      }, this), ".\r\nIt can be verified that Bessie will still never be behind Farmer John, and\r\nsince the tastiness at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 24
      }, this), " is greater than the tastiness at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 61
      }, this), ", we improved\r\nBessie's outcome. Therefore no optimal solution will leave a right-maximal rest\r\nstop early, and our greedy algorithm is correct."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 157,
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
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
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
