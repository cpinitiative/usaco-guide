"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["We can use a Segment Tree over the given array of bits. Assume, for now, that we are querying for the longest continuous subsegment of 1s. In a node of\r\nthe segment tree corresponding to range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 41
      }, this), ", we will store three pieces of information:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The longest prefix of 1s in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 41
        }, this), " (denote this as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 66
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The longest suffix of 1s in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 41
        }, this), " (denote this as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 66
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The longest subarray of 1s in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 43
        }, this), " (denote this as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 68
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The length of the subarray (equivalent to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r - l + 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 45
        }, this), ") (denote this as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 74
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To merge left child ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 21
      }, this), " and right child ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 41
      }, this), " to make node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 58
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a.P = a.L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c.P = a.L + b.P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 24
        }, this), "; otherwise, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c.P = a.P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 54
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b.S = b.L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c.S = b.L + a.S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 24
        }, this), "; otherwise, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c.S = b.S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 54
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "c.A = \\max(a.A, b.A, a.S + b.P)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "c.L = a.L + b.L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A bit flip operation corresponds to a point update on the segment tree and a longest homogeneous subarray query corresponds to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 132
      }, this), " value of\r\nthe root node. We can thus handle all operations efficiently. Note that using two segment trees that are inverses of each other (one for the 0s and one for the 1s)\r\nmakes the implementation easier."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
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
