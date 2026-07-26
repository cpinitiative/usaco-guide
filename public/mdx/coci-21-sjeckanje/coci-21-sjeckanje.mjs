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
        href: "https://dmoj.ca/problem/coci20c5p5/editorial",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial"
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
      children: ["For any segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 17
      }, this), " with at least three elements, if there exists ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 72
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l\\le i\\le i+2\\le r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 86
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i \\leq a_{i+2} \\leq a_{i+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 111
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i \\geq a_{i+2} \\geq a_{i+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 146
      }, this), ", then the segment can be split into two segments ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l, l+1, \\dots, i+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 227
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i+2, i+3, \\dots, r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 252
      }, this), ". It may be proven that the sum of the values of the two segments is at least as high as the value of the initial segment. More generally, if a segment isn't strictly increasing or strictly decreasing, we can split it into two segments without lowering the total value. Therefore, an optimal solution can be constructed with only strictly increasing or decreasing segments. This paves the way for several key properties."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 14
      }, this), " of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 28
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_i = A_{i+1} - A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 44
      }, this), ". If the current segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s = [l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 90
      }, this), " is increasing, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_i > 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 123
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\in [l, r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 137
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=l}^{r-1} D_i = \\text {max}(s) - \\text {min}(s)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 156
      }, this), ". If the current segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s = [l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 237
      }, this), " is decreasing, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_i < 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 270
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\in [l, r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 284
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1 \\cdot \\sum_{i=l}^{r-1} D_i = \\text {max}(s) - \\text {min}(s)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 303
      }, this), ". Between any two adjacent selected segments ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[a, b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 413
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[b+1, c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 426
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 438
      }, this), " must not included in our answer. With this formulation, adding integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 515
      }, this), " to all elements ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l, l+1, \\dots, r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 535
      }, this), " is equivalent to performing the point updates ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_{l-1}\\mathrel{+}=x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 600
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_{r}\\mathrel{-}=x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 627
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, the problem becomes selecting segments on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 48
      }, this), " rather than the original ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 77
      }, this), ", where each segment contributes the absolute value of the sum of its elements to the final answer. Every two neighboring segments must be separated by at least one element (see ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D_b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 258
      }, this), " above), and all elements in each segment must be either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "< 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 320
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "> 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 329
      }, this), ". One way to go from here is with a segment tree. Each Node stores the maximum value of its segment for each of the four cases of taking or not taking the first or last element, as well as the border elements of its segment.  When merging, we must pay attention to only combine two segments together if the signs of their border elements to be combined are the same to ensure that the combined segment continues to be either strictly increasing or decreasing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N + Q\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
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
