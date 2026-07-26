"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-treaps",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-treaps",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Treaps"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Like a regular binary search tree, treaps contain keys that can be inserted,\r\nerased, and searched for in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{\\Theta}(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 29
      }, this), ". However, regular\r\nbinary search trees suffer from imbalancing, which causes the tree to have up to\r\nan ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 4
      }, this), " depth and blows up the time complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/unbalanced_bst.png",
        alt: "Unbalanced Binary Search Tree"
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
      children: "A treap is a randomized binary search tree that stores two numbers in its nodes:\r\na value and a priority. The values of a treap will satisfy the binary search\r\ntree property (where all the nodes in the left subtree are strictly smaller than\r\nthe current node and all the nodes in the right subtree are strictly greater\r\nthan the current node), and the priorities will satisfy the heap property (where\r\nall descendants of a node will have smaller or equal priorities)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/treap.png",
        alt: "Treap"
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
      children: "Treaps have two main operations: splitting and merging. Other operations like\r\ninsert, erase, and searching can be implemented in terms of these operations."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-splitting",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-splitting",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Splitting"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        children: "split"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 5
      }, this), " method takes in a pointer to the root of a treap ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{root}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 62
      }, this), " and\r\na value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 9
      }, this), ", and returns two treaps denoted as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 48
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), ". Like the name suggests, it splits the tree such that all nodes\r\nin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 4
      }, this), " have keys less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 52
      }, this), " and all nodes in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), " have keys greater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can now implement it recursively. Let the left child of a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 67
      }, this), " be denoted\r\nas ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n.\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 4
      }, this), " and the right child as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n.\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 45
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{root} \\leq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 6
        }, this), ", then both the root and the left subtree belong to\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{left}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 3
        }, this), ". We now consider a call to ", _jsxDEV(_components.code, {
          children: "split"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 46
        }, this), " on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{root.right}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 57
        }, this), "\r\nand note its results as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{left'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 27
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{right'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 48
        }, this), ". Finally,\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{left}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 75,
          columnNumber: 3
        }, this), " contains ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{left'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 75,
          columnNumber: 28
        }, this), " and\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{right} = \\texttt{right'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{root} > x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 6
        }, this), ", then both the root and the right subtree belong to\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{right}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 3
        }, this), ". We now consider a call to ", _jsxDEV(_components.code, {
          children: "split"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 47
        }, this), " on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{root.left}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 58
        }, this), "\r\nand note its results as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{left'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 27
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{right'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 48
        }, this), ". Finally,\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{right}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 80,
          columnNumber: 3
        }, this), " contains ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{right'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 80,
          columnNumber: 29
        }, this), " and\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{left} = \\texttt{left'}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 81,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-merging",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-merging",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Merging"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        children: "merge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 5
      }, this), " method inverts the ", _jsxDEV(_components.code, {
        children: "split"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 32
      }, this), " method by taking in two treaps\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 21
      }, this), " and returns a single treap that has the\r\nnodes of both treaps. It works under the assumption that all keys\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\in \\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 1
      }, this), " are strictly smaller than all keys ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\in \\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 58
      }, this), ".\r\nFurthermore, we need to merge these two treaps such that the resultant treap\r\nstill satisfies the max heap property."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We root the resultant treap at the root node that has the higher priority, and\r\nrecursively call ", _jsxDEV(_components.code, {
        children: "merge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 18
      }, this), " on the other tree and the corresponding subtree of the\r\nchosen tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
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
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-implicit-treaps",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implicit-treaps",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implicit Treaps"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In their most basic form, treaps are not very useful (languages like C++\r\nand Java already have a built-in self-balancing binary tree that is much more\r\nefficient than treaps). However, with implicit treaps, we can efficiently\r\nperform operations on a regular array in fashion similar to segment trees and\r\nfenwick trees. The following operations are supported by implicit treaps:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Insert an element ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 21
        }, this), " at position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 37
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Delete the element at position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 172,
          columnNumber: 34
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Performing interval queries (sum, min, max, etc.)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Perform interval updates (add, set, reverse, etc.)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The key behind implicit treaps lies in their name. We will use the index of the\r\nnode to be its key. Because maintaining this value explicitly will result in up\r\nto ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 4
      }, this), " values to be updated per insertion/deletion, we will keep\r\nthis value implicitly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The index of a node is equal to the number of nodes less than it. It is\r\nimportant to note that these nodes can occur both in the left subtree of the\r\ncurrent node as well as the node's ancestors and the left subtree of its\r\nancestors."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that in an implicit treap, the merge function is largely unchanged because\r\nit does not depend on the key. In the split operation we go from the root down,\r\nso we simply maintain a running count of the size left subtree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "An implementation of the split operation may look something like:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In the split operation, because we are always comparing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cur\\_size}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 57
      }, this), " to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{val}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 220,
        columnNumber: 1
      }, this), ", we can simply eliminate the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{add}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 220,
        columnNumber: 45
      }, this), " parameter by\r\nsubtracting from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{val}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 18
      }, this), " each time. Our new code looks like:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 219,
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
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 306,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will use implicit treaps to represent the array. For each operation, divide\r\nit into two phases: cut and paste. For the cut phase, we split the array into\r\nthree parts: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 310,
        columnNumber: 14
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[a, b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 310,
        columnNumber: 24
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(b, n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 310,
        columnNumber: 38
      }, this), ". This can be accomplished using\r\ntwo split operations. For the paste phase, we can rearrange the sections such\r\nthat we merge them in the order ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 312,
        columnNumber: 33
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(b, n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 312,
        columnNumber: 42
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[a, b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 312,
        columnNumber: 51
      }, this), ". This can be done\r\nusing two merge operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 308,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Implicit treaps are also capable of updates/removals of elements, range queries, range updates, and range reversals."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 399,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Insert"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 403,
          columnNumber: 3
        }, this), " can be done with one split and two merges: We split the array\r\nbetween the index we want to insert, create a new node with the corresponding\r\nvalue, and merge the three sections together."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 403,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Delete"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 406,
          columnNumber: 3
        }, this), " can be done with two splits and one merge: We split the array into\r\nthree parts before and after the index, and merge the two parts together."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 406,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Range queries"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 408,
          columnNumber: 3
        }, this), " can be performed by maintaining additional data in each\r\nnode. We update this data whenever we update ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{size}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 409,
          columnNumber: 48
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 408,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Range updates"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 410,
          columnNumber: 3
        }, this), " can be performed by maintaining a lazy tag in each node (as\r\nin lazy propagation). When splitting or merging, we push these tags downwards\r\nand perform the corresponding operation."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Range reversals"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 413,
          columnNumber: 3
        }, this), " can be performed by maintaining a lazy ", _jsxDEV(_components.code, {
          children: "reversed"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 413,
          columnNumber: 62
        }, this), " tag in each node. When splitting or merging, we first swap the node's left and right children, then push the tag down."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 413,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 403,
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
      lineNumber: 416,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This code solves the above problem, but also provides a generalizable template for any range update/query."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 418,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 420,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 420,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 420,
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
      lineNumber: 633,
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
