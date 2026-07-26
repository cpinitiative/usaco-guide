"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "If we can preprocess a rooted tree such that every subtree corresponds to a\r\ncontiguous range on an array, we can do updates and range queries on it!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 9,
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
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's use the below graph for a quick demo of the technique:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Here's the code we're going to use to perform a Euler Tour on the graph.\r\nNotice that it follows the same general structure as a normal depth-first search.\r\nIt's just that in this algorithm, we're keeping a few auxiliary variables we're\r\ngoing to use later on."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-tour-walkthrough",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tour-walkthrough",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tour Walkthrough"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 174,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Before the tour, our ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 22
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 43
      }, this), " arrays are initialized with\r\nzeros. In this visualization, the first row represents the node indices, the\r\nsecond row represents ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 23
      }, this), ", and the third represents ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 66
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For brevity's sake, in this walkthrough, we're going to use ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 61
      }, this), " instead\r\nof the full above function name."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 180,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "Current timer value: 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Since we call ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(1, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 15
      }, this), ", we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}[1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 42
      }, this), " to the current timer\r\nvalue of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 10
      }, this), ". Then, we proceed to call ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(2, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 40
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(3, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "Current timer value: 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 220,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 220,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now we must resolve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(2, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(3, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 44
      }, this), ". It does not\r\nmatter which order we process these in, so for this example, we start with\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(2, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 1
      }, this), ". Since the timer value is 1, we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}[2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 56
      }, this), " to 1 and\r\nincrement the timer. However, because node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 44
      }, this), " has no children, we don't call\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 1
      }, this), ". Instead, we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 31
      }, this), " to 2 because our current timer is\r\nnow 2."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 253,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "Current timer value: 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now we must resolve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(3, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 21
      }, this), ". Similar to before, we set\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}[3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 1
      }, this), " to the value of the timer (2 in this case) and increment the\r\ntimer. Then, we proceed to make the calls ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(4, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 295,
        columnNumber: 43
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(5, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 296,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 293,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "Current timer value: 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 298,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 298,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now we must resolve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(4, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(5, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 44
      }, this), ". First, we resolve\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(4, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 332,
        columnNumber: 1
      }, this), " by setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}[4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 332,
        columnNumber: 31
      }, this), " to the value of the timer (3 in\r\nthis case) and incrementing the timer. Then, since node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 333,
        columnNumber: 57
      }, this), " has no children, set\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 334,
        columnNumber: 1
      }, this), " to 4."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 331,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now the value of the timer is 4, and we must resolve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}(5, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 336,
        columnNumber: 54
      }, this), ". Similar\r\nto before, we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}[5]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 19
      }, this), " to 4. Since node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 56
      }, this), " also has no children,\r\nset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[5]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 338,
        columnNumber: 5
      }, this), " to 5."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 336,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "Current timer value: 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 340,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now, we must resolve the remaining ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[\\text{node}] = \\text{timer}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 373,
        columnNumber: 36
      }, this), "\r\ncalls. We first encounter and resolve node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 44
      }, this), ", setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 57
      }, this), " to 5.\r\nWe then do the same for node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 375,
        columnNumber: 30
      }, this), ", setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 375,
        columnNumber: 43
      }, this), " to 5. Our DFS\r\ntraversal is now complete."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 373,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Notice that after running ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dfs}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 409,
        columnNumber: 27
      }, this), ", each range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[\\texttt{start}[i], \\texttt{end}[i]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 409,
        columnNumber: 52
      }, this), "\r\ncontains all ranges ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[\\texttt{start}[j], \\texttt{end}[j]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 21
      }, this), " for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 69
      }, this), " in the\r\nsubtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 12
      }, this), ". Also, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[i]-\\texttt{start}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 23
      }, this), " is equal to the subtree\r\nsize of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 9
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 409,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's a small animation of the tour if you're still confused:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 414,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---subtree-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---subtree-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Subtree Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 420,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-lca",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lca",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "LCA"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 523,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-tutorial-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 529,
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
      lineNumber: 545,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-sparse-tables",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sparse-tables",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sparse Tables"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 693,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The above code does ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 695,
        columnNumber: 21
      }, this), " time preprocessing and allows LCA queries\r\nin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 696,
        columnNumber: 4
      }, this), " time. If we replace the segment tree that computes\r\nminimums with a ", _jsxDEV(_components.strong, {
        children: "sparse table"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 697,
        columnNumber: 17
      }, this), ", then we do ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 697,
        columnNumber: 46
      }, this), " time\r\npreprocessing and query in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 698,
        columnNumber: 28
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 695,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["The following is an example implementation of a sparse table and code that\r\nanswers LCA queries. Build time is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 705,
        columnNumber: 36
      }, this), ", and queries are\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 706,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 704,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 783,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 820,
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
      lineNumber: 838,
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
