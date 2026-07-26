"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Lemma:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), " We can always recolour an edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 43
      }, this), " so that its colour is\r\ndifferent from those of the other edges incident to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 53
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 61
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " If we take away ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 28
      }, this), ", then there are at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 61
      }, this), " edges\r\nincident to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 21
      }, this), ". Since there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 42
      }, this), " colours in total, there must exist\r\nsome colour such that none of those edges have it (by the pigeonhole principle).\r\nTherefore, we can simply recolour ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 35
      }, this), " to that colour."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This means we can define the cost to traverse an edge as:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min(\\text{Cost to recolour it}, \\text{Cost to recolour same-coloured neighbours})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It may be tempting to use Dijkstra's algorithm at this point, but that will\r\nunfortunately result in a wrong answer. Consider the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The robot goes on the path ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\rightarrow v \\rightarrow w"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 30
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(u, v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 3
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(v, w)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 16
        }, this), " have the same colour."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["It's optimal to recolour ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(u, v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 28
        }, this), " when going ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\rightarrow v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 48
        }, this), ", but it's\r\noptimal to recolour the same-coloured neighbours of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(v, w)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 55
        }, this), " when going\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v \\rightarrow w"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 3
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this case, using Dijkstra's algorithm naively will count the cost to recolour\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " twice in our answer!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To amend this, let's define two DP arrays instead of just one:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 3
        }, this), " is the minimum cost to get to node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 56
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp2}[i][c]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 3
        }, this), " is the minimum cost to get to node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 59
        }, this), " if:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["The robot just traversed a ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "c"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 34,
              columnNumber: 32
            }, this), "-coloured edge to get to node ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 34,
              columnNumber: 65
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 34,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "We're meant to have recoloured that edge, but haven't yet."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 35,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["The robot will definitely leave node ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 36,
              columnNumber: 42
            }, this), " via another ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "c"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 36,
              columnNumber: 58
            }, this), "-coloured edge and\r\nwe will recolour all of its same-coloured neighbours."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 36,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can then use Dijkstra's algorithm and some casework to solve this problem in\r\namortized ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O((N + M) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 11
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
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
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O((N + M) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
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
