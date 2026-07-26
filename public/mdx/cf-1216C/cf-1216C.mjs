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
      children: "By Varun Ragunath"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/69954",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 167,
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
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are many ways to solve the problem, but the easiest way is to imagine cutting the white sheet."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Everytime the white sheet is covered by a black sheet, we can imagine cutting the intersection between the black and white sheets. Then, if the area of the final white sheet after being cut by the two rectangles is greater than zero, there is a portion of the white sheet that is visible."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, when considering cutting the sheet, the portion that is being cut must cut from entirely ", _jsxDEV(_components.code, {
        className: "language-math",
        children: " x_{1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 99
      }, this), "->", _jsxDEV(_components.code, {
        className: "language-math",
        children: " x_{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 109
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: " y_{1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 121
      }, this), "->", _jsxDEV(_components.code, {
        className: "language-math",
        children: " y_{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 131
      }, this), " or else there will be a portion of the white sheet still shown. We only cut when a black sheet completely covers the entire width or length of the white sheet, otherwise there will still be bits and pieces shown."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are 4 instances of which a white sheet can cover a black sheet."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 178,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textbf{Top: }"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 1
      }, this), " From the top, if the white sheet is completely covered from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: " x_{1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 78
      }, this), "->", _jsxDEV(_components.code, {
        className: "language-math",
        children: " x_{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 88
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: " y_{1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 100
      }, this), "->", _jsxDEV(_components.code, {
        className: "language-math",
        children: " y_{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 110
      }, this), " and intersects some part of a black sheet, then change the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 178
      }, this), " (top of the rectangle) to the bottom of the black rectangle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 180,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textbf{Bottom: }"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 1
      }, this), " From the bottom, if the white sheet is completely covered from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: " x_{1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 84
      }, this), "->", _jsxDEV(_components.code, {
        className: "language-math",
        children: " x_{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 94
      }, this), " and intersects some part of a black sheet, then change the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_{1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 162
      }, this), " (bottom of the rectangle) to the top of the black rectangle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 182,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textbf{Left: }"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this), " From the left, if the white sheet is completely covered from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 80
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 89
      }, this), " and intersects some part of a black sheet, then change the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 154
      }, this), " (left edge of the rectangle) to the right edge of the black rectangle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textbf{Right: }"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 1
      }, this), " From the right, if the white sheet is completely covered from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 82
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 91
      }, this), " and intersects some part of a black sheet, then change the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 156
      }, this), " (right edge of the rectangle) to the left edge of the black rectangle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Also, keep in mind to make sure that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 38
      }, this), " is always ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "<"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 54
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 58
      }, this), " and the same with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 82
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_2."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 92
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since there are no for loops or any sort of repetitions, the time complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 81
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 190,
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
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 194,
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
