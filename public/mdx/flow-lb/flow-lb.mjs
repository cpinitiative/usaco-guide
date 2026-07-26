"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["So far, every edge in our flow network has had a capacity that serves as an\r\n", _jsxDEV(_components.strong, {
        children: "upper bound"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " on the flow through it: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0 \\le f(e) \\le c(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 41
      }, this), ". We now consider\r\nnetworks where each edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 26
      }, this), " additionally has a ", _jsxDEV(_components.strong, {
        children: "lower bound"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 49
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ell(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 65
      }, this), ", so\r\nthat any valid flow must satisfy"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ell(e) \\le f(e) \\le c(e)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In other words, we're now ", _jsxDEV(_components.em, {
        children: "required"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 27
      }, this), " to push at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ell(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 55
      }, this), " units of flow\r\nalong ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 7
      }, this), ". This single extension is surprisingly powerful: many problems that\r\nlook nothing like flow (\"each task must be performed at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 63
      }, this), " times\", \"each\r\nperson sings between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 22
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 30
      }, this), " songs\") reduce to it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-feasible-circulation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-feasible-circulation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Feasible Circulation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's start with the simplest version, where there is ", _jsxDEV(_components.strong, {
        children: "no source or sink"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 55
      }, this), ".\r\nA ", _jsxDEV(_components.em, {
        children: "circulation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 3
      }, this), " is an assignment of flow to every edge such that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["every edge respects its bounds: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\ell(e) \\le f(e) \\le c(e)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 35
        }, this), ", and"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "conservation"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 3
        }, this), " holds at ", _jsxDEV(_components.em, {
          children: "every"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 29
        }, this), " vertex: the flow in equals the flow out."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The question is whether a valid circulation exists at all."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I will first illustrate the flow graph we can set up to solve this problem, then explain why it works. First, we create two new nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 135
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 143
      }, this), " and connect ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T \\rightarrow S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 159
      }, this), " with capacity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 191
      }, this), ". Then, we apply the following transformation to every edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e = u \\rightarrow v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 259
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Connect ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\rightarrow T"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 11
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S \\rightarrow v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 33
        }, this), " with capacity ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "l(e)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 65
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Reduce the capacity of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\rightarrow v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 26
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c(e) - l(e)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 47
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Flow_LB/transformation.png",
        alt: "800|center"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The idea is that in this transformed network, flow through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 60
      }, this), " will first be routed through the blue cycle (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u \\rightarrow T \\rightarrow S \\rightarrow v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 109
      }, this), ") until all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 166
      }, this), " units are saturated, and only the excess will pass through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 232
      }, this), " itself. This then means that all lower bounds will be satisfied iff all blue edges are saturated. To determine whether this is possible, we just need to run a maximum flow from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 413
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 420
      }, this), " and check whether the resultant flow is exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum l(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 472
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To recover the actual circulation, just take the flow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 55
      }, this), " found in the auxiliary\r\nnetwork and add back the lower bound: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(e) = g(e) + \\ell(e)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 39
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-feasible-flow-with-a-source-and-sink",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-feasible-flow-with-a-source-and-sink",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Feasible Flow With a Source and Sink"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now suppose we ", _jsxDEV(_components.em, {
        children: "do"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 16
      }, this), " have a source ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 35
      }, this), " and sink ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 48
      }, this), ", and we want any flow from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 79
      }, this), "\r\nto ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 4
      }, this), " respecting the lower bounds. The conservation constraint should hold\r\neverywhere ", _jsxDEV(_components.em, {
        children: "except"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 12
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 29
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We reduce this to the circulation case with one extra edge: add an edge from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this), " back to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 13
      }, this), " with lower bound ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 34
      }, this), " and capacity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 51
      }, this), ". This \"return edge\"\r\ncarries the net flow value back from the sink to the source, so conservation now\r\nholds at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 10
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 18
      }, this), " as well, and the whole network becomes a circulation\r\nproblem. Apply the construction above, and the flow value of the original network is\r\nexactly the flow sent along the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t \\to s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 33
      }, this), " edge."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-maximum--minimum-flow-with-lower-bounds",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-maximum--minimum-flow-with-lower-bounds",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Maximum / Minimum Flow With Lower Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Often we don't just want ", _jsxDEV(_components.em, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 26
      }, this), " feasible flow — we want the ", _jsxDEV(_components.strong, {
        children: "maximum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 58
      }, this), " (or\r\nminimum) flow from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 20
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 27
      }, this), " subject to the lower bounds. Do it in two phases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.strong, {
            children: "Find a feasible flow"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 72,
            columnNumber: 4
          }, this), " using the construction above.\r\nIf the blue edges can't be saturated, no valid flow exists and we stop."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.strong, {
            children: "Augment in the residual network."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 74,
            columnNumber: 4
          }, this), " Remove the auxiliary ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "S"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 74,
            columnNumber: 62
          }, this), ", ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "T"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 74,
            columnNumber: 67
          }, this), ", and the\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "t \\to s"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 75,
            columnNumber: 4
          }, this), " edge, then run an ordinary max flow from ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "s"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 75,
            columnNumber: 55
          }, this), " to ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "t"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 75,
            columnNumber: 62
          }, this), " on the leftover\r\nresidual graph. Adding these augmenting paths to the feasible flow keeps it\r\nfeasible (we only ever increase flow on edges that have spare capacity) while\r\npushing the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "s \\to t"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 78,
            columnNumber: 16
          }, this), " value as high as possible."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["For ", _jsxDEV(_components.strong, {
            children: "minimum"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 80,
            columnNumber: 8
          }, this), " flow, instead run a max flow from ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "t"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 80,
            columnNumber: 54
          }, this), " to ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "s"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 80,
            columnNumber: 61
          }, this), " in the residual\r\ngraph and ", _jsxDEV(_components.em, {
            children: "subtract"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 81,
            columnNumber: 14
          }, this), " it: we cancel as much circulating flow as possible while\r\nkeeping every edge above its lower bound."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 80,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 84,
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
