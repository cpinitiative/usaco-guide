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
      children: ["First, instead of trying to tackle the problem for arbitrary values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 72
      }, this), ", let's\r\ntry calculating the number of steps it takes for each node to reach node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 74
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When at a fountain, we will only ever take the two most beautiful outgoing trails.\r\nLet's consider a graph, where we draw edges between ", _jsxDEV(_components.strong, {
        children: "states"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 53
      }, this), ". Each state is\r\nrepresented as a pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 23
      }, this), ", where:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 3
        }, this), " is our current node"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "f"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 3
        }, this), " represents whether we are taking the most beautiful trail\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "f=0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 12,
              columnNumber: 5
            }, this), " means we can take the most beautiful trail"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 12,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "f=1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 13,
              columnNumber: 5
            }, this), " means we can only take the second most beautiful trail"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 13,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, we want to find the distance from every other state to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 61
      }, this), ". Finding\r\nthe distances to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 18
      }, this), " can be handled in a similar fashion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use our graph traversal method of choice to traverse from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 66
      }, this), " out\r\nto all of our other states. To handle this, we construct a reversed graph, and\r\ntraverse out from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 19
      }, this), " to other states. After calculating the distances,\r\nwe know that the distance from any node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 41
      }, this), " to our state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 58
      }, this), " is the distance\r\nfrom ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 6
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 18
      }, this), ". We handle ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 38
      }, this), " similarly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Alright, so now we know how to calculate the distance from every node to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 74
      }, this), ". How\r\ndo we handle large values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 30
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the fact that each state will directly map to another state, forming\r\na successor graph. Thus, if we arrive at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 42
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 54
      }, this), " at any point,\r\none of the following must happen:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We arrive at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 16
        }, this), ", and end up in a cycle where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 49
        }, this), " is not present"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We arrive at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(p, f)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 16
        }, this), ", and cycle back to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(p, f)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 44
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We arrive at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(p, f)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 16
        }, this), ", encounter ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(p, 1-f)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 36
        }, this), ", and loop back to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(p, f)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 65
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say our state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 15
      }, this), " falls under the second scenario, where it ends up in a\r\ncycle of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 17
      }, this), ". Then, for a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 39
      }, this), " to\r\nbe able to reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 18
      }, this), " after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 33
      }, this), " trails, the following must be true for\r\nsome non-negative integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 27
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = \\text{dist}((p, f), (i, 0)) + c \\cdot n."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Scenarios 1 and 3 can be handled in a similar fashion. For scenario 3, we have to store the time that we visit the state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(p, 1 - f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 122
      }, this), " in our cycle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With this, we can solve each query in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 39
      }, this), " by checking each node\r\nand seeing if it ends up at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 29
      }, this), ", using the three cases outlined above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
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
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M + NQ)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
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
