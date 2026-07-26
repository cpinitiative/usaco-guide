"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-meet-in-the-middle",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-meet-in-the-middle",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Meet In The Middle"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-naive-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-naive-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Naive Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Loop through all subsets in the array and if the sum is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 66
      }, this), ", then\r\nincrease our answer. Worst case this does about ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{40}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 49
      }, this), " operations, which is\r\nway too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-meet-in-the-middle-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-meet-in-the-middle-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Meet in the Middle Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can divide the given array into two separate arrays. Let's say that the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " array runs from indexes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 41
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{n}{2}-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 48
      }, this), ", and the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 73
      }, this), " array\r\nruns from indexes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{n}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 19
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 36
      }, this), ". Both arrays will have at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "20"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 73
      }, this), "\r\nelements, so we can loop through all subsets of these two arrays in at most\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{21}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), " operations, which is perfectly fine."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now that we've got the subset sums of these two separate arrays, we need to\r\nrecombine them to search for our answer. For every ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 52
      }, this), " in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 74
      }, this), ",\r\nwe can simply check how many elements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x - \\texttt{sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 42
      }, this), " there are in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), ". This can be done using simple binary search."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Time Complexity: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\cdot 2^{N/2})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 18
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 202,
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
