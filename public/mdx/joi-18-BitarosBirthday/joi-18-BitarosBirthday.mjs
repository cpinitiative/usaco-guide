"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
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
      children: ["Let's solve the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "q = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 17
      }, this), " subtask first. Let's reverse the graph so that in this query, we are solving for the longest path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 128
      }, this), " to an unblocked node. Here, we can just use DP to compute the longest path to every possible node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 230
      }, this), ". If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 238
      }, this), " stores the longest path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 283
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 290
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}_v = \\max(\\texttt{dp}_v, \\texttt{dp}_u + 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 300
      }, this), ", over all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 367
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 377
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 385
      }, this), " are connected by an edge and is reachable from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 436
      }, this), " in the reverse graph. Since it is guaranteed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v < u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 485
      }, this), ", this can be done with a single sweep."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, let's bring in sqrt decomposition. The variable in question is the number of blocked nodes, denoted as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 109
      }, this), ". Let's denote ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = \\sqrt{10^5}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 127
      }, this), " and suppose all queries have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\geq B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 174
      }, this), ". Since the sum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 203
      }, this), " over all queries is bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 238
      }, this), ", there can be no more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{10^5}{B} = B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 272
      }, this), " queries. The number of queries is small enough that  we can run an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 360
      }, this), " DP algorithm each time, leading to a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}({Bn})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 414
      }, this), " runtime."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To handle queries with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y < B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 24
      }, this), ", we have to do some preprocessing. For each node, we can store the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 99
      }, this), " longest paths that ends at that node, each originating from a different initial node. This needs to be done with careful pruning of paths with different lengths originating from the same node. This precomputation is approximately ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Bm + n \\log(Bn))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 333
      }, this), ", since we need to sort the longest paths after we process each node. To answer queries, we can just loop through the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 481
      }, this), " longest paths of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 502
      }, this), ", and find the longest one  starting at an unblocked node. This will also take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}({Bn})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 584
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Bm + n \\log(Bn) + Bn)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
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
