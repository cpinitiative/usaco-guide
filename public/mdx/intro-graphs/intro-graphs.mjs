"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Graphs can be used to represent many things, from images to wireless signals,\r\nbut one of the simplest analogies is to a map. Consider a map with several\r\ncities and bidirectional roads connecting the cities. Some problems relating to\r\ngraphs are:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Is city ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "A"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 9,
            columnNumber: 13
          }, this), " connected to city ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "B"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 9,
            columnNumber: 35
          }, this), "? Consider a region to be a group of cities\r\nsuch that each city in the group can reach any other city in said group, but\r\nno other cities. How many regions are in this map, and which cities are in\r\nwhich region? (USACO Silver)"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["What's the shortest distance I have to travel to get from city ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "A"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 68
          }, this), " to city\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "B"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 15,
            columnNumber: 5
          }, this), "? (USACO Gold)"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For USACO Bronze, it suffices to learn the basics of how graphs are represented (usually ", _jsxDEV(_components.strong, {
        children: "adjacency lists"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 90
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-constructing-adjacency-lists",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-constructing-adjacency-lists",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Constructing Adjacency Lists"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Graphs are often given as input in the following format:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The first line will contain the number of nodes ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 51
        }, this), " and the number of edges ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 79
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Then follow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 15
        }, this), " lines, each containing a pair of integers specifying an edge of the graph."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, the undirected graph given in the ", _jsxDEV(_components.a, {
        href: "https://csacademy.com/lesson/graph_representation",
        rel: "nofollow",
        target: "_blank",
        children: "CSAcademy resource from above"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 48
      }, this), " would be represented as the following input:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "6 10\r\n2 4\r\n0 2\r\n0 4\r\n0 5\r\n5 3\r\n2 3\r\n1 3\r\n4 5\r\n4 1\r\n1 5\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["and could be visualized in the ", _jsxDEV(_components.a, {
        href: "https://csacademy.com/app/graph_editor/",
        rel: "nofollow",
        target: "_blank",
        children: "CSAcademy graph editor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 32
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/2_Bronze/assets/csa_graph.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The following code represents the graph using adjacency lists.\r\nOnce we have the graph in this representation, it is easy to print the number of neighbors of a node, or iterate over the neighbors of a node."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "deg(u) = 3\r\n{1, 3}\r\n{1, 4}\r\n{1, 5}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-what-does-a-bronze-graph-problem-look-like",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-what-does-a-bronze-graph-problem-look-like",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "What Does a Bronze Graph Problem Look Like?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 180,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "All of the problems below fall into at least one of the following two\r\ncategories:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 182,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "The graph's structure is special (it's a tree, path, or a cycle)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "To solve the problem, all you need to do is iterate over the adjacency list of\r\nevery vertex."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 185,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In addition, knowledge of ", _jsxDEV(_components.a, {
        href: "/silver/graph-traversal",
        children: "Silver-level graph topics"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 189,
        columnNumber: 27
      }, this), " is usually helpful but not strictly required to solve the problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 189,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-livestock-lineup",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-livestock-lineup",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Livestock Lineup"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["While the intended solution is to brute force all possible permutations of the cows in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\cdot C!)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 88
      }, this), " time, we can solve the problem in just ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 151
      }, this), " time if we represent the constraints using a graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-using-graphs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-using-graphs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution Using Graphs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 197,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Notice that since the input is guaranteed to be valid, we're always going to end\r\nup with \"chains\" of cows that we can arrange as we please. Using the sample given\r\nin the problem, we'd get a \"chain\" representation like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 207,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/2_Bronze/assets/chains.png",
        alt: "Chains"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 211,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that cows that are not part of any chain can be considered their own chains\r\nof length 1 for implementation purposes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With this representation in mind, we can iterate through the cows in\r\nlexicographical (alphabetical) order. When we visit a cow that could be a possible\r\nstart of a chain (a cow that has at most one required neighbor),\r\nwe repeatedly go through its neighbors, adding the cows we visit to the ordering, until we hit an end."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 216,
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
      lineNumber: 221,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-check-your-understanding",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-check-your-understanding",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Check Your Understanding"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 428,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 605,
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
