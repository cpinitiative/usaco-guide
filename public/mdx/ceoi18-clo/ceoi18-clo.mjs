"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://archive.org/download/oi-ted-ceoi-archive/CEOI/2018/",
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
      children: "It might be tempting at first to do a 2-dimensional DP with the number of computer purchases and the number of customer orders, but that would result in a nasty and inefficient transition."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead, let's try grouping the two into a single array of \"transactions\". Each transation has three attributes: the change in the number of cores, the associated clock rate of the cores, and the change in the total profits.\r\nFor example, the example case would have a transaction array that looks like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Now we sort the array by clock rate in reverse, resulting in this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Notice that in this order, as long as a customer order comes after a computer purchase, the computer will be able to satisfy the order as long as there are enough cores."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This drastically simplifies the problem. Now we can simply define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max\\_profits}[t][c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 67
      }, this), " as the maximum profit we can gain from the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 146
      }, this), " transactions given that we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 182
      }, this), " cores left.\r\nGiven this, the rest of the problem is simple knapsack."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 107,
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
