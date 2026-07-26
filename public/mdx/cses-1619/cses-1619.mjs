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
    children: [_jsxDEV(_components.h1, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
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
      children: ["In this problem, we're given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 30
      }, this), " intervals with distinct start and end points,\r\nand we want to find the maximum number of intervals overlapping some point."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can use prefix sums to determine the number of intervals that cover any\r\nparticular point, and then find the maximum number in the sum."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A naïve approach is to create an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ctr}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 40
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ctr}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 62
      }, this), "\r\nis the number of intervals that cover each point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 50
      }, this), ". We can do this by looping\r\nthrough each interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[a,b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 23
      }, this), " and increasing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ctr}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 46
      }, this), " by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 67
      }, this), " for each\r\nindex in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a \\leq i \\leq b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 10
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This results in a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(nV)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 19
      }, this), " time complexity (where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0 \\leq a \\leq b \\leq V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "), which easily times out (think what happens when the\r\ninterval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, V]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 10
      }, this), " is queried ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 30
      }, this), " times)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can do better. It's easy to see that an increment of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 57
      }, this), " (before computation)\r\nin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 4
      }, this), " causes all subsequent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[i...V]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 44
      }, this), " (after\r\ncomputation) to increase by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 29
      }, this), ". We can also \"undo\" this operation by adding\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 9
      }, this), ". This concept can be conceptualized through increment\r\nand decrement points. An increment point increases (and decrement decreases) all\r\nsubsequent cells. Note that our decrement point is located at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 63
      }, this), " because the\r\ninterval is inclusive - decrementing at point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 47
      }, this), " turns the interval to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[A, B)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Example 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), ": Add two to each point in the interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 54
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Our array after adding 2 at our increment (start) point (before computation)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Our prefix sum after adding 2 at our increment (start) point (and computing)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Our prefix sum after subtracting 2 at our decrement point (and computing)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Observe that this works for multiple intervals."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Example 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), ": Add two to each point in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 41
      }, this), " and one to each point in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Adding interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 17
      }, this), " with increment point at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 50
      }, this), " and decrement at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4+1=5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 71
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Adding interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 17
      }, this), " with increment point at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 50
      }, this), " and decrement at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3+1=4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 71
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "After computation"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In this problem, our ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 22
      }, this), " is fixed at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 38
      }, this), ". As a result, when we encounter a\r\nstarting point, we can increment by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 37
      }, this), ", and for an endpoint, decrement by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 76
      }, this), ".\r\nWe actually cannot compute the prefix sum array directly since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V \\leq 10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 64
      }, this), ",\r\nand we will run out of memory when creating an array of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 62
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead, we can either coordinate compress and compute the prefix sum over\r\ninteresting intervals or sweep over the intervals while maintaining a running\r\nprefix sum."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 132,
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
      }, this), "Implementation 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If we put the start and end points into a list and sort them, all we need to do\r\nis find the max sum of values over all prefixes of the list."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 303,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Coordinate compress interval endpoints and only compute the prefix sum array for\r\ninteresting intervals."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 305,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 308,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 308,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 308,
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
