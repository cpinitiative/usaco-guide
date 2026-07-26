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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2016_solutions.zip",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-approach-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 17
      }, this), " time with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 52
      }, this), "\r\nmemory."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the elements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 21
      }, this), " be nodes of a graph and each potential swap be an edge\r\nbetween two nodes. Notice how this graph is a binary tree. We effectively want\r\nto perform some swaps to minimize the BFS order of this tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{merge}(A, B, C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 5
      }, this), " denote the tree with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 52
      }, this), " as the root and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 72
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), " as the subtrees of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 24
      }, this), "'s left and right children respectively. We can\r\ncompute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{merge}(A, B, C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 9
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(|B| + |C|)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 38
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can now formulate a basic DP state. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 44
      }, this), " be the version of node\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "'s subtree after some swaps such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i = j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 42
      }, this), " initially and the BFS order\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 4
      }, this), " is minimal. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 31
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 39
      }, this), " be node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 51
      }, this), "'s left and right children\r\nrespectively. The following recurrence holds:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j] = \\begin{cases}\r\n    \\texttt{merge}(j, dp[l][A_l], dp[r][A_r]) & \\text{if } j < \\min(A_l, A_r)\\\\\r\n    \\texttt{merge}(A_l, dp[l][j], dp[r][A_r]) & \\text{if } A_l < \\min(j, A_r)\\\\\r\n    \\min(\\texttt{merge}(A_r, dp[l][j], dp[r][A_l]), \\texttt{merge}(A_r, dp[l][A_l], dp[r][j])) & \\text{otherwise}\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The answer to the problem is thus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[1][A_1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 35
      }, this), ". If we compute this DP naively,\r\nwe get a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 10
      }, this), " solution that uses ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal(N^2 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 55
      }, this), "\r\nmemory (since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sum\\text{subtree size}) = \\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 15
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To improve this solution, notice that for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 48
      }, this), ", we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j = A[k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 61
      }, this), " only if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " is a child of an ancestor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 34
      }, this), ". Since there are only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 60
      }, this), "\r\nancestors of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 14
      }, this), " and each has at most 2 children, this allows us to cut the time\r\n(and memory) complexity down to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 33
      }, this), "! For convenience, we\r\nstill refer to the original DP state in the rest of this solution."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, this DP still uses too much memory. There are two things we need to do\r\nto fix this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Process the tree in reverse BFS order (i.e. starting from node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 66
        }, this), " and working\r\nback to node 1). This allows us to free up the memory used by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dp[l]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 65
        }, this), " and\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dp[r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 3
        }, this), " after we process some node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 38
        }, this), ". This cuts the memory used down to\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N \\log N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 3
        }, this), ", but is still slightly too much."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Only compute the states that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dp[1][A_1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 32
        }, this), " depends on. For example, the value\r\nof ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dp[2][A_1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 6
        }, this), " is irrelevant if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A_1 < \\min(A_2, A_3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 36
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "These two optimizations save us just enough memory to get AC."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 50,
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
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-approach-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Some magic DP. See the discussion on\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/44769?#comment-293999",
        rel: "nofollow",
        target: "_blank",
        children: "CF"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 145,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 22
      }, this), ", can be reduced to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 147,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-approach-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 473,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Maintain some collection of heaps and compute the sequence in order. I think\r\nthis is similar to what the official solution does, although I don't completely\r\nunderstand it."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 475,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 479,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 481,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 481,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 481,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 483,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 483,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 483,
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
