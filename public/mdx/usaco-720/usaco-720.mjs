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
        href: "https://usaco.org/current/data/sol_mincross_platinum_feb17.html",
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
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posA}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 5
      }, this), " denote the position of cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 51
      }, this), " in array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{A}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 64
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posB}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " denote the position of cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 47
      }, this), " in array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{B}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 60
      }, this), " (where\r\narrays ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{A}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 8
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{B}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 25
      }, this), " represent the two sides of the road).\r\nObserve that two cows ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 23
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 31
      }, this), " will cross if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posA}[i] < \\texttt{posA}[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posB}[i] > \\texttt{posB}[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use the above fact to compute the initial number of crossings. Using an\r\nOrder Statistics Tree, we can initially store all\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posB}[\\texttt{A}[i]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), ". To obtain the number of cows that cross with cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 82
      }, this), ", we can erase all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posB}[\\texttt{A}[j]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 104
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 145
      }, this), "\r\nand query for the number of elements in the tree that are less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posB}[\\texttt{A}[i]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 69
      }, this), ". To optimize erasing, we can loop from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 139
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 146
      }, this), " and erase each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{posB}[\\texttt{A}[i]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 165
      }, this), " before each query."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To handle cyclic shifts, we only care about moving the first cow to the\r\nlast position. All other crossings will hold constant. Consider shifting\r\narray ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{B}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 7
      }, this), " to the left:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["To detach existing crossings from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{B}[1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 37
        }, this), ", we must subtract\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{posA}[\\texttt{B}[1]]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 3
        }, this), " because we know for all positions ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 68
        }, this), " such that\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j < \\texttt{posA}[\\texttt{B}[1]]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 3
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{A}[j]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 39
        }, this), " is attached to some\r\nposition ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{B}[k]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 12
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k > 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 38
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Now, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{B}[1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 8
        }, this), " becomes ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{B}[N]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 32
        }, this), ". The number of new crossings is\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N - \\texttt{posA}[\\texttt{B}[N]]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 3
        }, this), " because we know for all positions ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 72
        }, this), " such\r\nthat ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j > \\texttt{posA}[\\texttt{B}[N]]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 8
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{A}[j]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 44
        }, this), " is attached to some\r\nposition ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{B}[k]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 12
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k < N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 38
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our answer is the minimum crossings out of all cyclic shifts.\r\nNote that we may have to consider shifting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 44
      }, this), " as well."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
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
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
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
