"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
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
      children: "By Vivian Han"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "See video code below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
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
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Adapted from /CPH.pdf#page=61"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-basic-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-basic-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Basic Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first version of the algorithm does not contain any optimizations. We simply\r\nuse backtracking to generate all possible paths from the upper-left corner to\r\nthe lower-right corner and count the number of such paths."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Running time: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "483"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 18
        }, this), " seconds"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Number of recursive calls: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "76"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 31
        }, this), " billion"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimization-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimization-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimization 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If the path reaches the lower-right square before it has visited all other\r\nsquares of the grid, it is clear that it will not be possible to complete the\r\nsolution. Using this observation, we can terminate the search immediately if we\r\nreach the lower-right square too early."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Running time: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "119"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 17
        }, this), " seconds"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Number of recursive calls: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "20"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 30
        }, this), " billion"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimization-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimization-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimization 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If the path touches a wall and can turn either left or right, the grid splits\r\ninto two parts that contain unvisited squares. In this case, we cannot visit all\r\nsquares anymore, so we can terminate the search."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Running time: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1.8"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 17
        }, this), " seconds"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Number of recursive calls: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "221"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 30
        }, this), " million"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimization-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimization-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimization 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The idea of Optimization 2 can be generalized: if the path cannot continue\r\nforward but can turn either left or right, the grid splits into two parts that\r\nboth contain unvisited squares. It is clear that we cannot visit all squares\r\nanymore, so we can terminate the search."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Running time: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0.6"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 17
        }, this), " seconds"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Number of recursive calls: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "69"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 30
        }, this), " million"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now is a good moment to stop optimizing the algorithm and see what we have\r\nachieved. The running time of the original algorithm was ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "483"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 58
      }, this), " seconds, and now\r\nafter the optimizations, the running time is only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0.6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 51
      }, this), " seconds. Thus, the\r\nalgorithm became nearly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 25
      }, this), " times faster after the optimizations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["For C++ users, this will be enough pruning to make the program run in time under\r\nworst case conditions. However, for Java and Python users, this is still too\r\nslow (Java takes around ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1.2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 25
      }, this), " seconds for the worst case). Thus, we will need to\r\nfurther optimize our search."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimization-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimization-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimization 4"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If the path creates a dead end that is not the bottom left corner, either the\r\npath will fail to visit all squares (the path may stop at the dead end or pass\r\nover it, sealing a square off) or the path will end in the wrong location. Thus,\r\nwe want to avoid creating dead ends. For example, if the square to the left of\r\nour current location is blocked on three sides (including our current location),\r\nthen the next step must be to the left in order to avoid creating a dead end.\r\nAfter this optimization, the program runs in under ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 52
      }, this), " second."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 80,
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
      lineNumber: 88,
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
