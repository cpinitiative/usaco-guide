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
        href: "http://www.usaco.org/current/data/sol_bcs_bronze_open16.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Java)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can loop through all possible pairs of pieces and shift them to check if they\r\ncan make the original figurine. Since we cannot shift a piece so any '#' fall\r\noutside the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\times N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 13
      }, this), " grid, we need to find the sides of the pieces to\r\ndetermine how far to shift them."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["As we iterate the pieces, we find the left, right, top and bottom sides of the\r\npiece and store them in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 29
      }, this), " array. When we are shifting, we shift\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{piece[i]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{idy}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 21
      }, this), " units to the left and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{idx}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 58
      }, this), " units\r\nup, and shift ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{piece[j]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 15
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{jdy}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 35
      }, this), " units to the left and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{jdx}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " units up. This will send the piece at\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x + \\texttt{idx}, y + \\texttt{idy})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 43
      }, this), " and the piece at\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x + \\texttt{jdx}, y + \\texttt{jdy})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 43
      }, this), ". So, we see that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{idy}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " must be bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right} - n + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 35
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 64
      }, this), ",\r\nand ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{idx}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 5
      }, this), " must be bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bottom} - n + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 39
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{top}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), ", with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{jdy}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 22
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{jdx}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 41
      }, this), " bounded similarly.\r\nBecause of that, every '#' will fall inside the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\times N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 49
      }, this), " grid."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Once we have shifted the pieces, if there are two '#' in the same place, or if\r\nthe result of superimposing the pieces is not the same as the original figurine\r\n(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pieces[0]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 2
      }, this), "), then this shift will not work."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K^2 \\cdot N^6)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
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
