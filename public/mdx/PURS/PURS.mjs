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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["Most gold range query problems require you to support following tasks in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 1
      }, this), " time each on an array of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 53
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Update the element at a single position (point)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Query the sum of some consecutive subarray."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Both ", _jsxDEV(_components.strong, {
        children: "segment trees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.strong, {
        children: "binary indexed trees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 28
      }, this), " can accomplish this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "segment tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 3
      }, this), " allows you to do point update and range query in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), " time each for ", _jsxDEV(_components.strong, {
        children: "any"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 37
      }, this), " associative operation, not just\r\nsummation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
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
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can skip more advanced applications such as ", _jsxDEV(_components.strong, {
        children: "lazy propagation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 49
      }, this), " for now.\r\nThey will be covered in ", _jsxDEV(_components.a, {
        href: "/plat/seg-ext",
        children: "platinum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dynamic-range-minimum-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dynamic-range-minimum-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dynamic Range Minimum Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-recursive-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-recursive-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Recursive Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-iterative-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-iterative-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Iterative Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 346,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Though less extensible, this implementation is shorter and has a better constant factor.\r\nThe ranges it operates on are also end-exclusive, unlike the previous one which\r\nis end-inclusive."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 348,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 352,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dynamic-range-sum-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dynamic-range-sum-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dynamic Range Sum Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 538,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-recursive-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-recursive-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Recursive Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 542,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 544,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-iterative-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-iterative-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Iterative Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 828,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 830,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 830,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 830,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-binary-indexed-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-binary-indexed-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Binary Indexed Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1016,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The implementation is shorter than segment tree, but maybe more confusing at\r\nfirst glance."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1018,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-resources-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1021,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dynamic-range-sum-queries-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dynamic-range-sum-queries-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dynamic Range Sum Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1044,
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
      lineNumber: 1046,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-finding-the-k-th-element",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-the-k-th-element",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1254,
        columnNumber: 15
      }, this), "-th Element"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1254,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that we want a data structure that supports all the operations as a\r\n", _jsxDEV(_components.code, {
        children: "set"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1257,
        columnNumber: 1
      }, this), " in C++ in addition to the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1256,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "order_of_key(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1259,
          columnNumber: 3
        }, this), ": counts the number of elements in the set that are strictly\r\nless than ", _jsxDEV(_components.code, {
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1260,
          columnNumber: 13
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 1259,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "find_by_order(k)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1261,
          columnNumber: 3
        }, this), ": similar to ", _jsxDEV(_components.code, {
          children: "find"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1261,
          columnNumber: 34
        }, this), ", returns the iterator corresponding to\r\nthe ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1262,
          columnNumber: 7
        }, this), "-th lowest element in the set (0-indexed)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 1261,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-order-statistic-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-order-statistic-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Order Statistic Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1264,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Luckily, such a built-in data structure already exists in C++.\r\nHowever, it's only supported on GCC, so Clang users are out of luck."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1266,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-a-bit",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-a-bit",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With a BIT"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1288,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, if all updates are in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1,N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1290,
        columnNumber: 42
      }, this), ",\r\nwe can do the same thing with a BIT."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1290,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-a-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-a-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With a Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1301,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Covered in ", _jsxDEV(_components.a, {
        href: "/plat/seg-ext",
        children: "Platinum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1303,
        columnNumber: 12
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1303,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-inversion-counting",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-inversion-counting",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Inversion Counting"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1305,
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
      lineNumber: 1309,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 1465,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-general",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1476,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-usaco",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-usaco",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "USACO"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1480,
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
