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
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A crucial observation is that if we can make a number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 55
      }, this), ", ", _jsxDEV(_components.strong, {
        children: ["we can make any number ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x + k\\cdot a_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 85
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 60
      }, this), ", where k is a non-negative integer.\r\nWe may be tempted to rewrite this as so: if we can make ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 57
      }, this), ", we can make all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\equiv x \\mod a_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 78
      }, this), ".\r\nIf this is indeed the case, we can run a simple 0/1 DP to figure out what mods we can assemble, and to answer a query ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 119
      }, this), ", we can simply output ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[b_i \\mod a_0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 147
      }, this), ".\r\nHowever, this solution has a flaw; try to think about why before moving on!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The issue occurs when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x > a_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 23
      }, this), ". For example, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 50
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a = \\{3, 5\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 62
      }, this), ", we\r\ncan construct 8, but we cannot construct 2, even though ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2 \\equiv 8 \\mod a_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 57
      }, this), ".\r\nFortunately, this only requires a minor fix for our DP. Try to think of it\r\nyourself, but feel free to consult the below implementation if you get stuck!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NA)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The time limit is quite tight for this problem.\r\nWith ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\leq 5000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i \\leq 50000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 24
      }, this), ", we end up getting around ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2.5\\text{e}8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 67
      }, this), " operations.\r\nHere are a few optimizations I had to use:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["I use a ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{vis}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 11
        }, this), " array in my implementation, and clearing it on every iteration turned out to be too slow. So instead of simply storing true/false for whether an element is visisted, I stored how many times that element had been visited across all iterations instead, taking advantage of the fact that in each iteration, all elements will be visited exactly once, thus implying that after iteration ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 408
        }, this), ", each element should have been visited a total of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 462
        }, this), " times. Another alternative is simply inverting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{vis}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 513
        }, this), " on each subsequent iteration: i.e. on iteration 1, false = not visited, true =\r\nvisisted; but on iteration 2, false = visited, true = not visited; etc."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Theoretically, all the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 26
        }, this), "'s in the above editorial can be replaced with an\r\narbitrary ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 13
        }, this), "; in fact, the condition that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 48
        }, this), " is sorted doesn't even\r\nmatter. However, we choose it simply for being the smallest value, which\r\nmarginally boosts execution time; using ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 43
        }, this), " instead actually causes TLE for\r\nthe following code."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While reading the following code, it may be helpful to consider that our DP is equivalent to running a shortest-path algorithm on a graph where each node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\in [0, a_0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 155
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 176
      }, this), " outgoing, weighted edges to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i + a_j) \\text{ \\% }a_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 208
      }, this), " with weight ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 247
      }, this), ", for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j \\in [0, n)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 263
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
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
