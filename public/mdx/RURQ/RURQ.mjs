"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
      id: "user-content-bit-revisited",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bit-revisited",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "BIT Revisited"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Binary Indexed Trees can support range increments and range sum queries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, we can reduce the problem of performing range add and range sum queries\r\ninto an easier problem: adding on a suffix, and querying the sum of a prefix\r\nof our array."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let our array be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 18
      }, this), ", and the prefix sum array of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 51
      }, this), " be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 58
      }, this), ". If we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 73
      }, this), " to\r\nthe range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[p, n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 11
      }, this), ", then, for every ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\geq p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 37
      }, this), ", we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\cdot (i - p + 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 56
      }, this), " to\r\neach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 6
      }, this), " in the range. To query the prefix of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, p]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 49
      }, this), ", we can consider the\r\nfollowing process:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Find the sum of all the range additions affecting the index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 64
        }, this), ". Let this number be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 88
        }, this), ". For now, we evaluate their contribution to be equal to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p \\cdot x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 148
        }, this), ". We can keep track of all the range additions that affect each indice using a BIT."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Step 1 obviously overcounts. To fix this overcounting, note that for each suffix addition query, the true contribution to the array only differs by a constant amount compared to the value obtained by step 1. This value is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\cdot (p - 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 226
        }, this), ", if we update the suffix of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[p, n]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 272
        }, this), " by adding ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 291
        }, this), ". Thus, we use a separate BIT that keeps track of all of the corrections to the contribution evaluated by step 1."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can perform range addition and range summation queries by performing multiple suffix addition and prefix sum queries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
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
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-lazy-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lazy-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lazy Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Lazy segment trees allow us to efficiently perform range updates and range queries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Lazy segment trees allow us to perform range updates and range queries in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 157,
        columnNumber: 1
      }, this), " time. In order to perform range updates in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 158,
        columnNumber: 1
      }, this), ", we lazily apply updates to the nodes. That is, we store\r\nupdates on the nodes that compose the range we are updating, and lazily apply\r\nthe updates when we walk down the tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 156,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As an example, let's consider writing a lazy segment tree that supports range\r\naddition and range summation. We would have our tree nodes contain the sum on\r\nthe range, and keep a separate array keeping track of the lazy additions we\r\nhave to do for each node. If we were to add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 45
      }, this), " to our array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[0 \\ldots n - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 62
      }, this), ",\r\nthen we would need to set a lazy update at the root of our tree indicating that\r\nwe need to add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 16
      }, this), " to the entire range. Then, if we were to query a subarray of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 168,
        columnNumber: 1
      }, this), ", we need to \"push down\" the updates at the root down to its children."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It is crucial that we always push down all the previous updates when traversing\r\ndown the tree. If we don't, the following things can happen:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 170,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "If we have two updates that affect two nodes, where one node is an ancestor of another, then one of the updates will be ignored."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The updates will be applied in incorrect order, which matters if the updates are not commutative."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For a concrete example for why point 1 can be an issue, consider the following\r\nsequence of updates."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "+3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 4
        }, this), " to all values on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[1, 4]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 26
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "+5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 180,
          columnNumber: 4
        }, this), " to all values on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[1, 2]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 180,
          columnNumber: 26
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Query sum on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[1, 8]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 181,
          columnNumber: 17
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If we don't push down the updates when traversing down the tree, then the first\r\nupdate will get ignored in our sum query."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-horrible-queries-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-horrible-queries-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Horrible Queries Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q \\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 282,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This question asks you to support the following types of queries:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 284,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Add a value to all elements within the range ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "[a,b]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 286,
            columnNumber: 48
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 286,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 286,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Set all values within the range ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "[a,b]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 288,
            columnNumber: 35
          }, this), " to a certain value."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 288,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Find the sum of all values in range ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "[a,b]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 290,
            columnNumber: 39
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 290,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 290,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the first two types of queries. A lazy tag will be created in each node\r\nof the tree for each type. In this solution, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{lzAdd}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 46
      }, this), " will represent the\r\nlazy tag for the range add query and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{lzSet}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 38
      }, this), " will represent the lazy\r\ntag for the range set query."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 292,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Given the two different types of update queries, a total of four different\r\nsituations might take place after any update:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 297,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Range add when ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzSet}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 300,
            columnNumber: 18
          }, this), " equals 0: Simply add the new value to the\r\npre-existing value."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 300,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 300,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Range add when ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzSet}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 303,
            columnNumber: 18
          }, this), " doesn't equal 0: Add the new value to\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzSet}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 304,
            columnNumber: 3
          }, this), " and clear ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzAdd}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 304,
            columnNumber: 30
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 303,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 303,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Range set when ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzAdd}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 306,
            columnNumber: 18
          }, this), " equals 0: Simply update the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzSet}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 306,
            columnNumber: 63
          }, this), "\r\nvalue."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 306,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 306,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Range set when ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzAdd}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 309,
            columnNumber: 18
          }, this), " doesn't equal 0: Again, simply update the\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{lzSet}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 310,
            columnNumber: 3
          }, this), " value since a set update will override all previous add\r\nupdates."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 309,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given the mechanics behind the ", _jsxDEV(_components.code, {
        children: "push_down"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 32
      }, this), " function, all you need is a regular\r\nrange-sum segment tree to solve the question."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 313,
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
      lineNumber: 316,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 318,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Lazy segment trees are notorious for being difficult to make generic. The\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/atcoder/ac-library/blob/master/atcoder/lazysegtree.hpp",
        rel: "nofollow",
        target: "_blank",
        children: "AtCoder template"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 447,
        columnNumber: 1
      }, this), "\r\nis an example of a fully generic template."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 446,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Below is an implementation of the focus problem using a somewhat generic\r\ntemplate. The idea is that we supply an ", _jsxDEV(_components.code, {
        children: "Info"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 451,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        children: "Tag"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 451,
        columnNumber: 52
      }, this), " class into the template.\r\nThe ", _jsxDEV(_components.code, {
        children: "Tag"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 5
      }, this), " class handles lazy updates, and how lazy updates interact with each other.\r\nMeanwhile, the ", _jsxDEV(_components.code, {
        children: "Info"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 453,
        columnNumber: 16
      }, this), " class handles the tree values, and how lazy updates are applied\r\nto given tree values."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 450,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Some key implementation details:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 456,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "We must give lazy tags and tree values neutral values. That is, we need to set the values inside the classes to some value that won't affect our answers."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 458,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For the ", _jsxDEV(_components.code, {
          children: "apply"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 459,
          columnNumber: 12
        }, this), " function in the ", _jsxDEV(_components.code, {
          children: "Info"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 459,
          columnNumber: 36
        }, this), " and ", _jsxDEV(_components.code, {
          children: "Tag"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 459,
          columnNumber: 47
        }, this), " functions, we need to ensure that we aren't applying neutral updates to any nodes."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 459,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 458,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
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
