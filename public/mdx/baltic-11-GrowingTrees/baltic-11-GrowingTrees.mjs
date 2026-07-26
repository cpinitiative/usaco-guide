"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2011_solutions.zip",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log N + Q\\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's maintain an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 25
      }, this), ", which is sorted by height. To answer a query of type ", _jsxDEV(_components.code, {
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 83
      }, this), ", we can simply binary search on the endpoints of the query."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, we just need to support updates. Let's first binary search for the first position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 88
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[l] \\geq h"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 102
      }, this), ". Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r = l + c - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 121
      }, this), ". We just need to increment the range, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 175
      }, this), " by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 187
      }, this), " while keeping ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 205
      }, this), " sorted."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, we cannot just add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 29
      }, this), " to all elements in the range, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 63
      }, this), " because this might break the sorted order. This happens iff there is some index inside ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\in [l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 159
      }, this), ", such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[i] = a[r + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 184
      }, this), "; if we increment the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 229
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[i] > a[r + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 244
      }, this), ", which is an inversion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To prevent this error, we find another range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l', r']"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 46
      }, this), ", such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[i] = a[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 68
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\in [l', r']"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 90
      }, this), "; this can be found with binary search. Since all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 155
      }, this), " sastify ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[j] < a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 171
      }, this), ", we can increment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, l' - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 203
      }, this), " first. Then, since we need to increment a total of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 268
      }, this), " elements, we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c - (l' - l)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 290
      }, this), " elements left. We increment the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[r' - (c - (l' - l)) + 1, r']"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 343
      }, this), " by one."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that this doesn't create any inversions because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[r' + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 56
      }, this), " is greater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[r']"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 84
      }, this), " before the update: after the update, the array would be non-decreasing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Updates and queries can be handled with a lazy segment tree, but a binary indexed tree would suffice since we only need point queries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
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
