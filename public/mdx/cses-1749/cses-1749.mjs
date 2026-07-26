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
      children: "Each query asks us to remove the element at a given position from what currently remains in the list."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The naive approach would be to shift the elements in the\r\narray after each removal, which costs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 39
      }, this), " per query, which\r\ndoesn't suffice here given the constraints. We need a data\r\nstructure that supports both ", _jsxDEV(_components.strong, {
        children: "k-th element queries"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 30
      }, this), " and\r\n", _jsxDEV(_components.strong, {
        children: "deletions"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), " efficiently."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["All three solutions below process each query in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 49
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log^2 n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 64
      }, this), ", giving ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(n \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 86
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(n\\log^2 n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 103
      }, this), " overall."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-1---indexed-set",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1---indexed-set",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1 - Indexed Set"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Store the ", _jsxDEV(_components.strong, {
        children: "original indices"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 11
      }, this), " of all still-present elements in an ", _jsxDEV(_components.a, {
        href: "/gold/PURS#finding-the-k-th-element",
        children: "indexed set"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 68
      }, this), ".\r\nThis C++ builtin data structure can process queries of the form \"remove element at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 93
      }, this), "\", and can\r\nalso access the original index at a position in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 49
      }, this), " time using ", _jsxDEV(_components.code, {
        children: "find_by_order"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 72
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-2---binary-search-on-bit",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2---binary-search-on-bit",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2 - Binary Search on BIT"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We maintain a Binary Indexed Tree (BIT) where each position is initialized to ", _jsxDEV(_components.code, {
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 79
      }, this), " (present) and gets set to ", _jsxDEV(_components.code, {
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 109
      }, this), " when removed.\r\nThe prefix sum ", _jsxDEV(_components.code, {
        children: "prefix_sum(i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 16
      }, this), " then counts how many elements are still present in positions ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 93
      }, this), " through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 105
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find the original index of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 35
      }, this), "-th remaining element, binary search for the smallest index where\r\n", _jsxDEV(_components.code, {
        children: "prefix_sum(index) == k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), ". Each step of the binary search does a BIT query, giving ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log^2 n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 83
      }, this), " per operation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-3---segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3---segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3 - Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 143,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Build a segment tree where each node stores the count of the present\r\nelements in its range. To find the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 36
      }, this), "-th remaining element,\r\n", _jsxDEV(_components.a, {
        href: "/plat/segtree-ext?lang=cpp#walking-on-a-segment-tree",
        children: "walk down the tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 1
      }, this), " as follows: if the left child\r\ncontains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\geq k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 10
      }, this), " elements, recurse left; otherwise, subtract the\r\nleft child's count from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 25
      }, this), " and recurse right."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 145,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This finds the answer in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 26
      }, this), " by descending exactly one root-to-leaf path."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
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
