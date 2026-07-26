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
        href: "http://www.usaco.org/current/data/sol_gymnastics_bronze_dec19.html",
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
      children: ["As the problem statement says, we tally how many sessions cow A finished ahead of cow B across all pairs.\r\nIf cow A outperforms cow B in all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 35
      }, this), " sessions, we increment our answer.\r\nWe get the final output once we iterate over all pairs."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
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
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By David Li"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K \\cdot N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-alternate-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternate-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternate Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We generate the ranking as we read the data."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can create a 2D array of booleans which states if cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 58
      }, this), " has a ranking higher than\r\ncow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 5
      }, this), " in any point of time. After reading every ranking, for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N(N-1)}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 68
      }, this), "\r\npairs we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b[A][B]=\\text{true}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 14
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 262,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then we iterate though all pairs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 37
      }, this), " time and check if they\r\nsatisfy the condition. At least one of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b[A][B]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 40
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b[B][A]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 54
      }, this), " must be true, and\r\nhence we only need to check if they are both true. If one of them is false, we\r\nincrement our ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{count}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 15
      }, this), " by 1. This is because if both are true, then\r\nthe pair switches ranking order at some point and is not valid. If only one is true,\r\nthen the pair maintained a consistent order."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that at least one of them must be true, since in every ranking either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A>B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 76
      }, this), "\r\nor ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B>A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 4
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 273,
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
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K \\cdot N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 278,
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
