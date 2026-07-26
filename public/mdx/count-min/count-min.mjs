"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "We would like a data structure that can efficiently handle two types of operations:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Update index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 17
        }, this), " to value ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 30
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Report the minimum and the number of occurrences of the minimum on a range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 79
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use a normal segment tree to handle range queries, but slightly modify each node and the merge operation. Let each node be a pair of values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\texttt{val}, \\texttt{cnt})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 148
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{val}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 186
      }, this), " is the minimum value and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cnt}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 226
      }, this), " is the number occurrences of the minimum value."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 9
      }, this), " has two children ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 30
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 38
      }, this), ", then"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a.\\texttt{val} < b.\\texttt{val}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c = a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 46
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a.\\texttt{val} > b.\\texttt{val}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c = b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 46
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a.\\texttt{val} = b.\\texttt{val}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c = \\{a.\\texttt{val}, a.\\texttt{cnt} + b.\\texttt{cnt}\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 46
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---area-of-rectangles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---area-of-rectangles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Area of Rectangles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["We can use techniques introduced in ", _jsxDEV(_components.a, {
        href: "/plat/range-sweep?lang=cpp",
        children: "Range Queries with Sweep\r\nLine"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 37
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We sweep from left to right over the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 38
      }, this), "-coordinates, maintaining two events for\r\neach rectangle: one for the left boundary and one for the right boundary.\r\nMaintain a Lazy Segment Tree over the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 39
      }, this), "-coordinates."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["When we run into a left boundary of some rectangle with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 89,
          columnNumber: 59
        }, this), "-coordinates ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(y_0,\r\ny_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 89,
          columnNumber: 75
        }, this), ", increase each index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i \\in [y_0, y_1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 90,
          columnNumber: 30
        }, this), " by 1"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["When we run into a right boundary of some rectangle with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 91,
          columnNumber: 60
        }, this), "-coordinates\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(y_0, y_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 92,
          columnNumber: 3
        }, this), ", decrease each index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i \\in [y_0, y_1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 92,
          columnNumber: 37
        }, this), " by 1"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 16
      }, this), ", we simply need to count the number of non-zero indices which\r\ncorresponds to indices that are covered by at least one rectangle. How can we do\r\nthis?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead of counting the area covered by at least one rectangle, let's count the\r\namount of space covered by no rectangles. We can subtract this amount from the\r\ntotal number of indices to get the value we want."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can use a Segment Tree that counts the number of occurrences of the minimum\r\nvalue. Because the minimum value is at least zero (there can't be a negative\r\nnumber of rectangles at a position) the number of uncovered squares is equal to\r\nthe number of squares with value 0."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 219,
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
