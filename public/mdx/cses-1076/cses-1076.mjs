"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution-1-maintaining-two-multisets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1-maintaining-two-multisets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1: Maintaining two multisets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To accomplish finding the sorted median of a sliding window, we can store the\r\nwindow within two sets: one containing the lower values of the window and the\r\nother containing the upper values. If we ensure that the size of the lower set\r\nis always greater than or equal to the size of the upper set, then the largest\r\nelement in the lower set will be the median. This works for all sizes of\r\nwindows. In odd windows, the size of the lower set will be one larger than the\r\nupper set, therefore its largest element will be the median. In even windows,\r\nthe problem calls for the smallest of the two centermost values so this strategy\r\nstill works."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To implement, we need a function that will handle inserting and removing\r\nelements in the window. For inserting, compare the incoming value to the current\r\nmedian and place it in the upper set if it is greater than the median, put it in\r\nthe lower set otherwise. If one set fills above its max size, transfer an\r\nelement to the other set. Erasing is more simple, just find the element and\r\nerase it."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
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
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2-fenwick-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2-fenwick-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2: Fenwick Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use a ", _jsxDEV(_components.a, {
        href: "/gold/PURS#binary-indexed-tree",
        children: "Fenwick tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 14
      }, this), " to simulate an order statistic tree/indexed set."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The Fenwick array (let's call it ", _jsxDEV(_components.code, {
        children: "fa"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 34
      }, this), ")can be treated as a frequency array. For example, if 5 is inserted into the window, ", _jsxDEV(_components.code, {
        children: "fa[5] += 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 123
      }, this), ". This enables us to binary search for an integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 185
      }, this), " such that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left(\\sum_{i=1}^{x} \\texttt{fa[i]}\\right)\\geq \\lceil k/2 \\rceil \\text{ and } \\left(\\sum_{i=1}^{x-1}\\texttt{fa[i]}\\right) <\\lceil k/2 \\rceil"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["and find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 10
      }, this), " from there. Clearly, the values of the array would need to be compressed, as an array of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 108
      }, this), " is infeasible. There will also be an extra ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 158
      }, this), " factor from using the Fenwick tree ", _jsxDEV(_components.code, {
        children: "sum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 200
      }, this), " operation, yielding a total time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\log^2{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 253
      }, this), ". Note that a more precise upper bound is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((n-k+1) \\cdot \\log^2{k} + n \\log{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 320
      }, this), " (there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(n-k+1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 382
      }, this), " windows), but it's tricky to express the maximum value of this in terms of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 467
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 475
      }, this), "; therefore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log^2{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 491
      }, this), " is better."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
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
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-3-order-statistic-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3-order-statistic-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3: Order Statistic Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 154,
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
      lineNumber: 156,
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
