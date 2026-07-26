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
      children: "By David Zhou"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_pails_silver_feb16.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Java)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 261,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-1-dfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1-dfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1 (DFS)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 265,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can perform a DFS starting from the base state of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 54
      }, this), ", where both pails have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 86
      }, this), " units of milk."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 267,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that we need to use a 3D grid to correctly track visited states, though.\r\nThis is because the DFS may visit the same ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 44
      }, this), " state earlier in its processing but through a greater number of operations.\r\nTo properly track visited cells, we need to make sure the visited grid has a record for how many operations it took to reach each state every time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 269,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Simulating all six operations every time is enough to pass the constraints."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 273,
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
      lineNumber: 275,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(XYK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 277,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2-bfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2-bfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2 (BFS)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 470,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 472,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can directly simulate all operations using BFS."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 474,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this problem, we care about states ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 39
      }, this), " where pail ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 59
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 67
      }, this), " and pail\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 1
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 9
      }, this), " units of milk. We can perform a BFS starting from base state\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 478,
        columnNumber: 1
      }, this), " to compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 478,
        columnNumber: 21
      }, this), ", the minimum number of steps to reach\r\neach state. Afterwards, compute the answer by iterating over all states where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}[i][j] \\le K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 480,
        columnNumber: 1
      }, this), " and finding the minimum ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|i+j-M|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 480,
        columnNumber: 53
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 476,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For every transition in the BFS, we simulate all possible actions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 482,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Fill either pail completely to the top: set ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 484,
          columnNumber: 48
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "X"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 484,
          columnNumber: 55
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 484,
          columnNumber: 62
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 484,
          columnNumber: 69
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 484,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Empty either pail: set ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 485,
          columnNumber: 27
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 485,
          columnNumber: 34
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 485,
          columnNumber: 41
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 485,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Pour the contents of one pail into another without overflowing or running out\r\nof milk."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 486,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 484,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To perform operation 3, we can find the amount poured to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min(i, Y-j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 489,
        columnNumber: 61
      }, this), " or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min(j, X-i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 1
      }, this), " depending on which pail you pour from. Then add/subtract this\r\nquantity to each pail appropriately."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 489,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now iterate over all states ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 29
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}[i][j] \\le K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 44
      }, this), " and\r\ncompute the minimum ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|i+j-M|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 494,
        columnNumber: 21
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 493,
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
      lineNumber: 496,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 498,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(XY)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 498,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 498,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-3-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3 (DP)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 693,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 695,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The states in this problem are a combination of the milk amounts in each pail and the number of operations to reach such amounts."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 697,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{f}[i][j][l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 699,
        columnNumber: 5
      }, this), " represent if it is possible to reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 699,
        columnNumber: 62
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 699,
        columnNumber: 70
      }, this), " pail amounts in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 699,
        columnNumber: 90
      }, this), " operations.\r\nOur base case is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{f}[0][0][0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 700,
        columnNumber: 18
      }, this), " as true, since there is no milk initially.\r\nNow, iterate through all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 26
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\leq l<K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 40
      }, this), ", and all possible ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 70
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 78
      }, this), ". For any true state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{f}[i][j][l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 102
      }, this), ", mark ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{f}[i'][j'][l+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 128
      }, this), " as true for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i', j')"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 168
      }, this), "'s that can result from a single operation based on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 701,
        columnNumber: 230
      }, this), ".\r\nThe possible operations are explained in the previous solutions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 699,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The answer is the minimum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|i+j-m|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 704,
        columnNumber: 30
      }, this), " for all true ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{f}[i][j][l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 704,
        columnNumber: 53
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 704,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 706,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 708,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(XYK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 708,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 708,
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
