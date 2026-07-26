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
        href: "https://vthspc.cs.vt.edu/assets/files/outlines-vths-2016-20584eee6ff9cc2b00f5b30baf0c4d22.pdf#page=20",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
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
      children: ["We can use Dijkstra's, keeping track of the current length of the program\r\n(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 2
      }, this), "), the direction the turtle faces (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dir}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 52
      }, this), ") and the moves\r\nit has already made to reach its current location (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{moves}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 52
      }, this), "). If there\r\nis an ice castle in front of the turtle, it should only be melted if the turtle\r\nwill move there immediately. If the turtle doesn't move onto the square\r\nimmediately, then it will either:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "return to the square later, in which case the turtle has wasted moves before\r\nreturning."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "never move onto the square, in which case the turtle wasted a move melting the\r\nice castle.\r\nSo, we only need to melt ice castles if the turtle moves forward immediately after."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "At each location, the turtle can:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "move forward if there is an empty square."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "melt an ice castle and then move forward if there is an ice castle."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["turn.\r\nAs we make moves, we add the instructions to the string ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{moves}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 57
        }, this), ". Once we\r\nreach the diamond, we can print out the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{moves}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 41
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
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
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2\\log N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 56
      }, this), " is the side length of\r\nthe board."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
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
