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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The largest rectangle must have the same height as the shortest bar that it\r\ncontains. For each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 20
      }, this), ", consider the largest rectangle with height ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{heights}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 68
      }, this), " such\r\nthat bar ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 10
      }, this), " is the shortest bar it contains. The answer is simply the largest\r\nof these ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 10
      }, this), " rectangles."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the heights of these rectangles are fixed, we just want them to be as wide\r\nas possible. Notice how the rectangle of bar ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 46
      }, this), " is bounded by the the closest\r\nshorter bars on each side of bar ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 34
      }, this), " (or the ends of the histogram if these bars\r\ndon't exist)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use a monotone stack twice to find the closest shorter bars on each side\r\nof each bar. See\r\n", _jsxDEV(_components.a, {
        href: "/gold/stacks#application-nearest-smaller-element",
        children: "the stacks module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\r\nfor more details."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
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
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Actually, we only need to go through the heights in one direction. When we see\r\n", _jsxDEV(_components.code, {
        children: "(i, heights[i])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this), ", we process all rectangles with right end at ", _jsxDEV(_components.code, {
        children: "i-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 64
      }, this), " and height\r\ngreater than ", _jsxDEV(_components.code, {
        children: "heights[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 14
      }, this), ". Note how we process the rectangles that end at the\r\nlast height by emptying the stack."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 103,
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
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Alternatively, one can add ", _jsxDEV(_components.code, {
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 28
      }, this), " to the list of ", _jsxDEV(_components.code, {
        children: "heights"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 48
      }, this), " so we don't have\r\nto treat rectangles that end at the last height in ", _jsxDEV(_components.code, {
        children: "heights"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 52
      }, this), " as a special case."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
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
