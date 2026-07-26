"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-overview",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-overview",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Overview"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A persistent data structure is a data structure that preserves the previous versions of itself when modified, allowing access to any historical version. In other words, once a change is made to the structure, both the original and modified versions remain accessible. This is particularly useful in scenarios where you need to keep track of the history of updates or backtrack to previous states of the data structure."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-persistent-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-persistent-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Persistent Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Persistent arrays are one of the simplest persistent data structures. A\r\npersistent array should be able to access and update its elements at given\r\ntimes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-fat-nodes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-fat-nodes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Fat Nodes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This approach (i.e. storing multiple values at each index without erasing old\r\nvalues) is known as ", _jsxDEV(_components.strong, {
        children: "fat nodes"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 21
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although easy to implement, fat nodes are only ", _jsxDEV(_components.strong, {
        children: "partially persistent"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 48
      }, this), ", meaning\r\nthat only the latest version of the data structure can be modified."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For most competitive programming problems involving persistent data structures,\r\nwe use ", _jsxDEV(_components.strong, {
        children: "path copying"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 8
      }, this), " instead."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-path-copying",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-path-copying",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Path Copying"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One can implement path copying to run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 42
      }, this), " time per query and\r\nupdate by using a binary-tree-like structure where array elements are the\r\nleaves."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This is very similar to a sparse segment tree. The key differences are that we\r\nhave multiple roots and every time we \"update\" a node, we actually create a new\r\nnode in its place (hence persistence)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Path copying is ", _jsxDEV(_components.strong, {
        children: "fully persistent"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 17
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-persistent-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-persistent-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Persistent Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since persistent arrays with path copying are so similar to sparse segment\r\ntrees, it's relatively straightforward to convert one into a persistent segment\r\ntree - just add range queries!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 129,
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
      lineNumber: 135,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since this problem involves range queries, we'll use some type of segment tree\r\nto solve it. (We can also use a Fenwick tree, but that's much harder to make\r\npersistent.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "When dealing with problems involving multiple dimensions, it's often helpful to\r\nview one of those dimensions as time. In this problem, we'll view the index of\r\neach array as its time dimension."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Using a persistent segment tree, we can then turn the problem into the\r\nfollowing:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Type 1 queries involve a point update on the segment tree at some time."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Type 2 queries involve a range query on the segment tree at some time."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Type 3 queries involve copying the root of the segment tree at some time and\r\nappending it to the array of segment tree roots."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 182,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-pointer-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-pointer-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Pointer Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 189,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-index-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-index-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Index Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 275,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Generally speaking, an index based implementation is faster than a pointer implementation."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application-1---static-2d-range-sums-on-large-grids",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application-1---static-2d-range-sums-on-large-grids",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application 1 - Static 2D Range Sums on Large Grids"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 389,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Persistent segment trees can be used for online 2D static range sum queries in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 392,
        columnNumber: 1
      }, this), " time (think of it like prefix sums)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 391,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that 2D Fenwick trees with coordinate compression often also work for this\r\n(and are easier to implement), but it's still good to know this application."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 394,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application-2---largest-interval-completely-inside-a-range",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application-2---largest-interval-completely-inside-a-range",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application 2 - Largest Interval Completely Inside a Range"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 397,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Consider the following problem:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 399,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Given ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 401,
          columnNumber: 9
        }, this), " intervals on the number line, answer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Q"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 401,
          columnNumber: 50
        }, this), " queries of the form \"what\r\nis the largest interval completely contained inside the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[x, y]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 402,
          columnNumber: 65
        }, this), "?\""]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 401,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.p, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "N, Q \\leq 10^5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 404,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 404,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 401,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since each interval has two dimensions (i.e. left and right endpoints ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 406,
        columnNumber: 71
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 1
      }, this), "), we can view it as a ", _jsxDEV(_components.em, {
        children: "point"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 29
      }, this), " on the number line at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 59
      }, this), " with \"value\"\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_i - l_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 408,
        columnNumber: 1
      }, this), " that was inserted at time ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 408,
        columnNumber: 39
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 406,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, each query becomes \"what is the most valuable point in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x, y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 71
      }, this), "\r\nthat was inserted at or before time ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 37
      }, this), "?\" This is much easier to handle, so we\r\ncan solve this problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(Q \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 27
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 410,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 414,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-persistent-heap",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-persistent-heap",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Persistent Heap"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 418,
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
