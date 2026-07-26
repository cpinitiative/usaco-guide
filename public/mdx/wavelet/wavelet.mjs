"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose we have a static array of integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_0, a_1, \\dots, a_{N-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 44
      }, this), " satisfying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le a_i<\\sigma"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 82
      }, this), ", and we want to\r\nanswer online queries of the following form:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Find the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 12
        }, this), "-th smallest element in the contiguous subarray ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a[l:r)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 63
        }, this), " (where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 79
        }, this), " is 0-indexed)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In this module, we will introduce the concept of a ", _jsxDEV(_components.em, {
        children: "Wavelet Tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 52
      }, this), " to answer these queries efficiently with respect to both time and memory. Each module solution will build on the previous one."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", _jsxDEV(_components.table, {
      children: [_jsxDEV(_components.thead, {
        children: _jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.th, {
            children: "Solution"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 12,
            columnNumber: 1
          }, this), _jsxDEV(_components.th, {
            children: "Query Time Complexity"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 12,
            columnNumber: 12
          }, this), _jsxDEV(_components.th, {
            children: "Memory Complexity"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 12,
            columnNumber: 36
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 1
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), _jsxDEV(_components.tbody, {
        children: [_jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.td, {
            children: "Module Solution 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 1
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(\\log \\sigma\\log N)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 14,
              columnNumber: 23
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 21
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(N\\log \\sigma)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 14,
              columnNumber: 47
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 45
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 1
        }, this), _jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.td, {
            children: "Module Solutions 2a / 2b"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 15,
            columnNumber: 1
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(\\log \\sigma)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 15,
              columnNumber: 30
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 15,
            columnNumber: 28
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(N\\log \\sigma)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 15,
              columnNumber: 49
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 15,
            columnNumber: 47
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 1
        }, this), _jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.td, {
            children: "Module Solution 3"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 1
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(\\log \\sigma)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 16,
              columnNumber: 23
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 21
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(N)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 16,
              columnNumber: 42
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 40
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 1
        }, this), _jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.td, {
            children: "Persistent Segment Tree"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 1
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(\\log \\sigma)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 17,
              columnNumber: 29
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 27
          }, this), _jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "O(N\\log \\sigma)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 17,
              columnNumber: 48
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 46
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 1
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Reading these resources is optional, unless you find the in-module explanations too succinct."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-range-kth-smallest-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-range-kth-smallest-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Range Kth Smallest: Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's start by building a segment tree on the values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, \\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 54
      }, this), ". A segment\r\ntree node corresponding to a range of values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[v_l, v_r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 46
      }, this), " will store"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A list containing the indices of the array ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 47
        }, this), " with values in that range, in increasing order."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the node is not a leaf (that is, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v_l + 1 < v_r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 40
        }, this), "), pointers to its two child nodes, corresponding to the ranges ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[v_l, (v_l+v_r)/2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 119
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[(v_l+v_r)/2, v_r)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 144
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A tree where each node stores a list of everything under it in sorted order is called a ", _jsxDEV(_components.strong, {
        children: "merge-sort tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 89
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To build this data structure, we start at the root node corresponding to the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0,\\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 84
      }, this), ",\r\npartition the indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0,N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 23
      }, this), " among its two children, and recursively build each child.\r\nThis takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log \\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 12
      }, this), " time and memory."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To answer a query, we again start at the root node, then recursively ", _jsxDEV(_components.a, {
        href: "/plat/segtree-ext?lang=cpp#walking-on-a-segment-tree",
        children: "walk"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 70
      }, this), " down the tree until we reach the leaf node corresponding to the answer value. To determine whether to walk down into the left\r\nchild or the right child of the current node, we first query the number of indices in the index vector of the left child in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l,r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 135
      }, this), " and store it into a variable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{num\\_left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 172
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k<\\texttt{num\\_left}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 6
        }, this), ", then the answer is the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 53
        }, this), "th-smallest value in the left child."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, the answer is the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(k-\\texttt{num\\_left})"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 32
        }, this), "-th smallest value in the right child."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Querying the count in a single node takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 43
      }, this), " time using binary search, and the tree has depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log \\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 104
      }, this), ", so in a total a query takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log \\sigma\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 150
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note: we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sigma=2^{30}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 14
      }, this), " so that every node has length equal to a power of two."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-range-kth-smallest-solution-2a",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-range-kth-smallest-solution-2a",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Range Kth Smallest: Solution 2a"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 149,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our goal in this section is to remove the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 43
      }, this), " factor from the query time\r\ncomplexity of solution 1 without changing the memory complexity. We'll continue\r\nto store a vector of integers at each segment tree node. Its length will be\r\nthe same as before, but it will represent something different."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's first consider what vector we should store at the root node to compute\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{num\\_left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 157,
        columnNumber: 1
      }, this), " without binary search. The simplest thing we could do is to\r\nstore the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{count\\_prefix}(\\texttt{this->l->inds}, r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 158,
        columnNumber: 21
      }, this), " for each possible ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 158,
        columnNumber: 91
      }, this), "\r\nfrom ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 6
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 13
      }, this), " inclusive. That is, all prefix sums of the length-", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 67
      }, this), " bitvector\r\nwith ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 6
      }, this), "th element equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 29
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 36
      }, this), " maps to the left child node, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 75
      }, this), " otherwise.\r\nThen ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{num\\_left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 6
      }, this), " can be computed in constant time just by\r\nsubtracting two prefix sums."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 156,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In general, at each non-leaf node of the segment tree, we can first construct a bit vector\r\nof length equal to the subsequence of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 39
      }, this), " associated with that node with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 74
      }, this), "s\r\nfor values that map to the left child node and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 166,
        columnNumber: 48
      }, this), "s for others, and then store\r\nits prefix sums at that node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 164,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To answer queries, unlike solution 1, we'll need to modify ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 60
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 68
      }, this), " as we\r\nwalk down the tree. Instead of representing the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 49
      }, this), "th through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 63
      }, this), "th indices of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 80
      }, this), ",\r\nthey'll now represent the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 27
      }, this), "th through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 41
      }, this), "th indices of the subsequence of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 77
      }, this), "\r\nassociated with the current node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 174,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note: The implementation avoids storing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{count\\_prefix}(\\texttt{this->l->inds}, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 41
      }, this), "\r\nsince it's always zero."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-2b",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2b",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2b"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 248,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The following solution has the same time and memory complexity as the previous one,\r\nbut the constant factor is much better. Specifically, it's more than twice as fast,\r\nand uses less than one tenth the memory!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To accomplish this, it concatenates the\r\nbitvectors at each level into a single bitvector of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 60
      }, this), " before taking prefix sums. This construction is known as the ", _jsxDEV(_components.strong, {
        children: "Wavelet Matrix."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 125
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 254,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The query process can be seen to be equivalent to that of the solution above\r\n(up to translating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 28
      }, this), " by a constant)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 257,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-range-kth-smallest-solution-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-range-kth-smallest-solution-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Range Kth Smallest: Solution 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here we discuss how to remove the factor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log \\sigma"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 45
      }, this), " from the memory complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 329,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The memory bottleneck in solution 2 is storing the prefix sums of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log \\sigma"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 67
      }, this), " length-", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 88
      }, this), " bitvectors,\r\nwhich takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log \\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 338,
        columnNumber: 13
      }, this), " integers using the most straightforward approach. However, if we can reduce this to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log \\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 338,
        columnNumber: 115
      }, this), "\r\n", _jsxDEV(_components.em, {
        children: "bits"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 339,
        columnNumber: 1
      }, this), " of information, we can pack these bits into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log \\sigma / W)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 339,
        columnNumber: 52
      }, this), " words where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 1
      }, this), " is the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Word_(computer_architecture)",
        rel: "nofollow",
        target: "_blank",
        children: "word"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 12
      }, this), " size (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "W=64"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 85
      }, this), " on a 64-bit architecture). This is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 127
      }, this), " words assuming ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^W>\\sigma"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 149
      }, this), " (that is, all the integers we're working with fit into a single word)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 337,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It remains to describe how to store a single length-", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 342,
        columnNumber: 53
      }, this), " bitvector in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 343,
        columnNumber: 1
      }, this), " bits while still allowing constant time prefix sum queries. Specifically,\r\nwe can store the original bitvector in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 344,
        columnNumber: 40
      }, this), " bits and only the sums of prefixes\r\nwith length divisible by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 26
      }, this), ", taking ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log N/W)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 38
      }, this), " bits, which is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 68
      }, this), " bits assuming ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^W>N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 89
      }, this), ". To answer a query for the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 346,
        columnNumber: 1
      }, this), "th prefix sum in constant time, we start with the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lfloor r/W\\rfloor\\cdot W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 346,
        columnNumber: 54
      }, this), "th prefix sum and then use\r\nbuilt-in operations that run in constant time to add the contribution of the\r\nremaining ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r\\%W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 348,
        columnNumber: 11
      }, this), " bits (like ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{\\_\\_builtin\\_popcountll}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 348,
        columnNumber: 29
      }, this), " to count the number of bits set in a 64-bit word)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 342,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 350,
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
      lineNumber: 436,
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
