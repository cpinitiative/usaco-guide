"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_prob2_bronze_season26contest2.html",
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
      children: "We first notice a few facts that motivate a solution involving bitmasks:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 3
        }, this), " is small (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N \\le 20"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 17
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "We need to count how many solutions exist, this would require us to iterate across all cases."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The board can be represented as a binary integer, with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 56
      }, this), " denoting ", _jsxDEV(_components.code, {
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 69
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 77
      }, this), " denoting ", _jsxDEV(_components.code, {
        children: "O"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 90
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This problem can then be solved with simple bitmasks in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K \\cdot 2^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 57
      }, this), " time, where we try every possible subset and score it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Second, we can observe that many given moves are duplicates, because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K \\le 2 \\cdot 10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 70
      }, this), " is much greater than the number of possible moves. Specifically, because we only select three indices, there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 204
      }, this), " possible moves."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Based on this, we can optimize by storing the frequency of every move in a 3D array ", _jsxDEV(_components.code, {
        children: "freqMat[x][y][z]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 85
      }, this), ". It is also important to make sure that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y < z"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 144
      }, this), ", because it allows us to only consider ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N^3}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 191
      }, this), " possibilities instead of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N^3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 232
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
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
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3 \\cdot 2^{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
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
