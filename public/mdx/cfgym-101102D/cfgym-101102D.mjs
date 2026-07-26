"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: "Let's first simplify this problem, and then generalize the solution of that problem to this one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say we had a matrix of all ", _jsxDEV(_components.code, {
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 28
      }, this), "'s and ", _jsxDEV(_components.code, {
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 38
      }, this), "'s. How many submatrices of all ", _jsxDEV(_components.code, {
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 73
      }, this), "'s are there?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's first define a 2D array, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{longest\\_consec}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 32
      }, this), ", that contains the number of consecutive ", _jsxDEV(_components.code, {
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 100
      }, this), "'s that are directly to the right for each cell (including the cell itself).\r\nFor example, this matrix..."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["would have the following ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{longest\\_consec}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 26
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now, we go through each column and then for each row in reverse,\r\nfind out for each cell the number of all ", _jsxDEV(_components.code, {
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 42
      }, this), "'s submatrices where the cell is the upper left corner."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "How would we do this?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, let's initialize a stack ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{rel\\_streaks}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 33
      }, this), " which will have elements with two properties:\r\nthe value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{longest\\_consec}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 14
      }, this), " for that element and the difference in row number\r\n(aka distance) between that element and the next element in the stack."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Also initialize a number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{curr\\_sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 26
      }, this), ", which, after processing, will contain\r\nthe number of submatrices of all ", _jsxDEV(_components.code, {
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 34
      }, this), "'s that start at each cell."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, let's say we just started at a particular cell. How should we change our value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{curr\\_sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 88
      }, this), "?\r\nLet's not consider the new matrices of one row that just got added first, and just consider the previous arrays.\r\nTo be able to be extended into the current cell, they need to have a column-wise width\r\nless than the current value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{longest\\_consec}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 32
      }, this), ".\r\nTo subtract these newly invalid submatrices, we keep on popping the stack while the first part of the\r\nfirst element is larger than the current width and adjusting the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{curr\\_sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 75
      }, this), " as needed."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, for each step, we just need to add the current element on to the stack and add to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{curr\\_sum}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 92
      }, this), "\r\nthe value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{longest\\_consec}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 14
      }, this), " for that cell."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given that we figured out that simpler problem, we can apply this to the actual problem.\r\nLet's make a modified version of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{longest\\_consec}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 34
      }, this), ", where each cell contains the\r\nnumber of consecutive elements to the right with the same value as the current cell."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After that, we run almost the exact same algorithm, only now resetting all the necessary\r\nvariables when we encounter a number different than the previous ones we were processing."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 85,
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
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(RC)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 22
      }, this), " for each of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 52
      }, this), " test cases"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 90,
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
