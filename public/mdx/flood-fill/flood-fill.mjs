"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Flood fill"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), " is an algorithm that identifies and labels the connected\r\ncomponent that a particular cell belongs to in a multidimensional array."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example, suppose that we want to split the following grid into components of\r\nconnected cells with the same number."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Let's start the flood fill from the top-left cell. The color scheme will be red\r\nfor the node currently being processed, blue for nodes already visited, and\r\nuncolored for nodes not yet visited."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "As opposed to an explicit graph where the edges are given, a grid is an implicit\r\ngraph. This means that the neighbors are just the nodes directly adjacent in the\r\nfour cardinal directions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Usually, grids given in problems will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 42
      }, this), " by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 49
      }, this), ", so the first line of the\r\ninput contains the numbers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 36
      }, this), ". In this example, we will use a\r\ntwo-dimensional integer array to store the grid, but depending on the problem, a\r\ntwo-dimensional character array or a two-dimensional boolean array may be more\r\nappropriate. Then, there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 30
      }, this), " rows, each with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 50
      }, this), " numbers containing the\r\ncontents of each square in the grid. Example input might look like the following\r\n(varies between problems):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "3 4\r\n1 1 2 1\r\n2 3 2 1\r\n1 3 3 3\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "And we’ll want to input the grid as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 278,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 345,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["When doing flood fill, we will maintain an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N\\times M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 356,
        columnNumber: 44
      }, this), " array of booleans to keep\r\ntrack of which squares have been visited, and a global variable to maintain the\r\nsize of the current component we are visiting. Make sure to store the grid, the\r\nvisited array, dimensions, and the current size variable globally."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 356,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that we want to recursively call the search function for the squares\r\nabove, below, and to the left and right of our current square. Due to its\r\nrecursive nature, floodfill can be thought of as a modified version of\r\n", _jsxDEV(_components.a, {
        href: "/silver/graph-traversal",
        children: "DFS"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 364,
        columnNumber: 1
      }, this), ". The algorithm to\r\nfind the size of a connected component in a grid using flood fill is as follows\r\n(we’ll also maintain a 2D visited array)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 361,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The code below shows the global/static variables we need to maintain while doing\r\nflood fill and the flood fill algorithm itself:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 368,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---counting-rooms",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---counting-rooms",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Counting Rooms"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 530,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 534,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A non-recursive implementation of flood fill adds adjacent nodes to a stack or queue, similar to ", _jsxDEV(_components.a, {
        href: "/silver/graph-traversal",
        children: "BFS"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 549,
        columnNumber: 98
      }, this), ", and is usually implemented as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 549,
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
      lineNumber: 783,
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
