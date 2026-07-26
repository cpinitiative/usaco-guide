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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-segment-tree-beats",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-segment-tree-beats",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Segment Tree Beats"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---the-child-and-sequence",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---the-child-and-sequence",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - The Child and Sequence"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First consider a lazy segment tree. A pseudocode for the update function looks\r\nsomething like:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "function update(upd_left, upd_right, upd_value, tree_node, tree_left, tree_right)\r\n\tif upd_right < tree_left or tree_right < upd_left\r\n\t\treturn\r\n\tif upd_left ≤ tree_left and tree_right ≤ upd_right\r\n\t\tapply update\r\n\t\treturn\r\n\tpush lazy updates down\r\n\r\n\tlet tree_mid = (tree_left + tree_right) / 2\r\n\tlet left_child = 2 * tree_node\r\n\tlet right_child = 2 * tree_node + 1\r\n\tupdate(upd_left, upd_right, upd_value, left_child, tree_left, tree_mid)\r\n\tupdate(upd_left, upd_right, upd_value, right_child, tree_mid + 1, tree_right)\r\n\tmerge values from children\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["At first, this problem may seem like an ordinary lazy segment tree problem, but\r\nthe range modulo updates prevent updates from stacking. That is, for a given\r\nnode, it is difficult to calculate what the sum value of the node will be after\r\nan update. Furthermore, in the lazy array, modulo, unlike sum, does not satisfy\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\mod a \\mod b = x \\mod (a + b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), " or any other simple identity. How do we get\r\naround this?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As it turns out, we can take advantage of an important property of modulo.\r\n", _jsxDEV(_components.strong, {
        children: "Modulo either does not affect a number, or decreases it by at least half of\r\nwhat it was"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), ". If the number in question is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 45
      }, this), ", and the modulo was by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 72
      }, this), ", then\r\nthis can be proved using casework:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m > x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 20
        }, this), " is unaffected by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 41
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m \\le x / 2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 6
        }, this), ", then after the modulo operation ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 53
        }, this), " must be strictly less\r\nthan ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 8
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x / 2 < m \\leq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\mod m = x - m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 31
        }, this), ". This then reduces to the\r\nsecond case."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let us ignore operations of type 3 for the time being. Because of this property\r\nof modulo, an element with value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 34
      }, this), " will get decreased at most\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lceil \\log a \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), " times (although a greater number of updates may not\r\naffect the element). Taking this into account, we can slightly modify the modulo\r\nupdate function to incorporate these optimizations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "function update(upd_left, upd_right, upd_value, tree_node, tree_left, tree_right)\r\n\tlet cur_max = the maximum element in [tree_left, tree_right]\r\n\r\n\tif upd_right < tree_left or tree_right < upd_left or cur_max < upd_value\r\n\t\treturn\r\n\tif tree_left = tree_right\r\n\t\tapply update\r\n\t\treturn\r\n\r\n\tlet tree_mid = (tree_left + tree_right) / 2\r\n\tlet left_child = 2 * tree_node\r\n\tlet right_child = 2 * tree_node + 1\r\n\tupdate(upd_left, upd_right, upd_value, left_child, tree_left, tree_mid)\r\n\tupdate(upd_left, upd_right, upd_value, right_child, tree_mid + 1, tree_right)\r\n\tmerge values from children\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Note:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this), " Because we are no longer doing range updates with lazy propagation,\r\nthere is no need for a lazy tag."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will store ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cur\\_max}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 15
      }, this), " in a separate array as a separate (mergeable)\r\nvalue. Although it is possible that a single query processes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 62
      }, this), "\r\nnodes, over all queries this amortizes to the acceptable time complexity of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((n + q)\\log a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Consider adding in operations of type 3. Although the implementation is\r\nrelatively straightforward (simply a point update on segment tree), the proof of\r\ncomplexity from the previous section falls apart because elements can be\r\nincreased back to their maximum value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define the entropy of the array to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{k = 1}^n \\lceil \\log a_k \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 39
      }, this), ",\r\nor equivalently, the maximum number of modulo operations to decrease the array\r\nto its base state of all 0s. Note that each update operation runs in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{\\Omega}(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), ", so if there are no point updates, then the time\r\ncomplexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log a \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 15
      }, this), ". Each point update increases the\r\nentropy by a fixed amount ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lceil \\log a \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 27
      }, this), ". If there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "q_p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 64
      }, this), " point\r\nupdates, then the total entropy over all updates is bounded by\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\log a + q_p \\log a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 1
      }, this), ". If we factor out these point update operations, each\r\nmodulo update is still bounded by the total entropy. This means that even with\r\npoint updates, our solution still runs in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log a \\log n + q_p \\log a) = \\mathcal{O}((n + q)\\log n \\log a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 87,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although strictly speaking, ", _jsxDEV(_components.strong, {
        children: "The Child and Sequence"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 29
      }, this), " is not a segment tree\r\nbeats problem, the techniques used in it are closely related. In short, segment\r\ntree beats is a technique that allows a non-polylogarithmic range update\r\ncomplexity that amortizes to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 30
      }, this), " or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log^2 n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation---the-child-and-sequence",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation---the-child-and-sequence",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation - The Child and Sequence"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---range-chmin-chmax-add-set-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---range-chmin-chmax-add-set-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Range Chmin Chmax Add Set Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 196,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The solution to ", _jsxDEV(_components.code, {
        children: "The Child and Sequence"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 17
      }, this), " uses a simplified but similar solution\r\nto segment tree beats. For the problem above, let us divide it into three\r\nsubtasks:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 198,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Allow only operations 0 and 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Allow only operations 0, 2, and 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "All operations are allowed"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Build a segment tree over the range. In each node of the segment tree, maintain\r\nfour values: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 14
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 30
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 48
      }, this), ", and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 1
      }, this), ", which correspond respectively to the sum of the elements of\r\nsaid range, the strict maximum value, the strict second largest value (if there\r\nis no such value, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-\\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 19
      }, this), "), and the number of occurrences of the maximum\r\nelement. We would like to perform the following operations:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["For each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i \\in [l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 12
        }, this), ", let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A[i] = \\min(A[i], x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 32
        }, this), " (this operation will\r\nhenceforth be referred as ", _jsxDEV(_components.em, {
          children: "chmin"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 216,
          columnNumber: 29
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Query ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\sum_{i = l}^r A[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 217,
          columnNumber: 9
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 215,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The issue, again, is that in lazy propagation, it is difficult to update the sum\r\nto reflect the chmin update. We will use a similar strategy to the previous task\r\nwhere we build a seemingly slow solution, and then optimize it to pass in time."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Firstly, if the update value is larger than the maximum value in the range\r\n(stored in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 224,
        columnNumber: 12
      }, this), "), then we can return as the update will not effect\r\nany element in the range. Secondly, if the update value is between\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 22
      }, this), ", the new sum can be easily calculated\r\nusing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 227,
        columnNumber: 7
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "function update(upd_left, upd_right, upd_value, tree_node, tree_left, tree_right)\r\n\tif upd_right < tree_left or tree_right < upd_left or max1 < upd_value\r\n\t\treturn\r\n\tif upd_left < tree_left and tree_right < upd_right and max2 < upd_value\r\n\t\tapply update\r\n\t\treturn\r\n\tpush lazy updates down\r\n\r\n\tlet tree_mid = (tree_left + tree_right) / 2\r\n\tlet left_child = 2 * tree_node\r\n\tlet right_child = 2 * tree_node + 1\r\n\tupdate(upd_left, upd_right, upd_value, left_child, tree_left, tree_mid)\r\n\tupdate(upd_left, upd_right, upd_value, right_child, tree_mid + 1, tree_right)\r\n\tmerge values from children\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 229,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 229,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To prove that this runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((n + q) \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 246,
        columnNumber: 28
      }, this), ", we need to define a\r\nvariable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 247,
        columnNumber: 10
      }, this), " that represents the sum of the number of distinct elements\r\nover all intervals in the segment tree. This number is bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\log n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 67
      }, this), ",\r\nwhich is the sum of the sizes of every interval."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 246,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Why are queries slow? Because they could visit up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 54
      }, this), " nodes in any given\r\nquery. Define an ", _jsxDEV(_components.em, {
        children: "extra operation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 18
      }, this), " to be when a query is passed onto a node's\r\nchildren despite being in the query range. In other words, when a node satisfies\r\n", _jsxDEV(_components.code, {
        children: "query_left ≤ tree_left and tree_right ≤ query_right and upd_value ≤ max2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 254,
        columnNumber: 1
      }, this), ", an\r\nextra operation is performed."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Each time an extra operation is performed, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 44
      }, this), " decreases by at least 1,\r\nbecause both the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 18
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 39
      }, this), " elements are decreased to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 1
      }, this), ". Because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 14
      }, this), " does not increase, the complexity is bounded by\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max \\delta = \\mathcal{O}(n \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 257,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 262,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Sum range updates can be added without much modification to the existing code,\r\nby simply adding another lazy tag. The proof of the time complexity from the\r\nprevious part breaks down, but a tentative upper bound of the algorithm is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((n + q) \\log^2 n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 1
      }, this), ". A complete proof can be found\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/57319#part-3-the-time-complexity",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 264,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Store three more variables ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{min}_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 28
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{min}_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 46
      }, this), ", and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{min}_c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 1
      }, this), ". These will be implemented similar to their ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 62
      }, this), "\r\ncounterparts. Take note of the edge case when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{min}_1 = \\texttt{max}_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 47
      }, this), "\r\nor vice versa."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 272,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation---range-chmin-chmax-add-range-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation---range-chmin-chmax-add-range-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation - Range Chmin Chmax Add Range Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 277,
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
      lineNumber: 506,
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
