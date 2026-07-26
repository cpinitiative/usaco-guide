"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 1,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We are given ", _jsxDEV(_components.code, {
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 14
      }, this), " places of interest and ", _jsxDEV(_components.code, {
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 41
      }, this), " possible hiking trails between them. Among these places, ", _jsxDEV(_components.code, {
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 102
      }, this), " are marked as ", _jsxDEV(_components.strong, {
        children: "special"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 120
      }, this), ". Each trail connects two places and has a certain cost."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The goal is to build hiking trails so that:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Every place is connected to every other place."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["There is ", _jsxDEV(_components.strong, {
          children: "exactly one path between any two places"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 12
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Exactly ", _jsxDEV(_components.code, {
          children: "w"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 11
        }, this), " trails connect a ", _jsxDEV(_components.strong, {
          children: "special place and a regular place"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 32
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.strong, {
          children: "total cost of the chosen trails is minimized"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 7
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solving-without-special-edges",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solving-without-special-edges",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solving without Special Edges"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we ignore the constraint on special–regular edges, the problem simply becomes finding a ", _jsxDEV(_components.strong, {
        children: "Minimum Spanning Tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 92
      }, this), ", which can be solved using ", _jsxDEV(_components.strong, {
        children: "Kruskal's algorithm with a DSU"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 145
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tackling-special-edges-using-lagrangian-relaxation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tackling-special-edges-using-lagrangian-relaxation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tackling Special Edges using Lagrangian Relaxation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To control the number of special–regular edges in the spanning tree, we introduce a parameter ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 95
      }, this), ". For every edge that connects a special node with a regular node, we temporarily modify its cost by adding ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 206
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "So the modified cost becomes:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        children: "cost' = cost + λ * type"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        children: "type = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 7
      }, this), " if the edge connects a special node and a regular node, otherwise ", _jsxDEV(_components.code, {
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 84
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 4
      }, this), " is ", _jsxDEV(_components.strong, {
        children: "large"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 11
      }, this), ", special edges become expensive and the MST will include fewer of them. If ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 96
      }, this), " is ", _jsxDEV(_components.strong, {
        children: "small or negative"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 103
      }, this), ", special edges become cheaper and the MST will include more of them. This means the number of special edges chosen in the MST changes ", _jsxDEV(_components.strong, {
        children: "monotonically"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 259
      }, this), " with ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 282
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Because of this behavior, we can ", _jsxDEV(_components.strong, {
        children: ["binary search on ", _jsxDEV(_components.code, {
          children: "λ"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 53
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 34
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Run the MST using the modified costs."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Count how many special edges appear in the resulting tree."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the count is ", _jsxDEV(_components.strong, {
          children: ["at least ", _jsxDEV(_components.code, {
            children: "w"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 37,
            columnNumber: 30
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 19
        }, this), ", we increase ", _jsxDEV(_components.code, {
          children: "λ"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 49
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, we decrease ", _jsxDEV(_components.code, {
          children: "λ"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 26
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Eventually we find the largest ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 32
      }, this), " such that the MST still contains at least ", _jsxDEV(_components.code, {
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 78
      }, this), " special edges. Since we added ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 112
      }, this), " to each of those edges artificially, we subtract ", _jsxDEV(_components.code, {
        children: "w * λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 165
      }, this), " from the final cost to recover the real minimum cost."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-impossibility-check",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-impossibility-check",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Impossibility Check"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Before we binary search, we must verify if a spanning tree with exactly ", _jsxDEV(_components.code, {
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 73
      }, this), " special edges is even structurally possible. If the graph geometry forces us to use more or fewer special edges just to keep the graph connected, our binary search will push ", _jsxDEV(_components.code, {
        children: "λ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 251
      }, this), " to infinity and produce an incorrect result."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To prevent this, we determine the absolute boundaries for the number of special edges any valid spanning tree can contain:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Maximum special edges:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 3
        }, this), " Run Kruskal's algorithm strictly prioritizing ", _jsxDEV(_components.strong, {
          children: "special edges"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 76
        }, this), " over ", _jsxDEV(_components.strong, {
          children: "regular edges"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 99
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Minimum special edges:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 3
        }, this), " Run Kruskal's algorithm strictly prioritizing ", _jsxDEV(_components.strong, {
          children: "regular edges"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 76
        }, this), " over ", _jsxDEV(_components.strong, {
          children: "special edges"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 99
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If the graph cannot be fully connected, or if ", _jsxDEV(_components.code, {
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 47
      }, this), " falls strictly outside this ", _jsxDEV(_components.code, {
        children: "[min, max]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 79
      }, this), " range, it is impossible. We immediately output ", _jsxDEV(_components.code, {
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 139
      }, this), " and terminate before any binary search occurs."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 68,
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
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((m \\log m + m \\alpha(n)) \\cdot \\log C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
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
