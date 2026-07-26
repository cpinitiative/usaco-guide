"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-general-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Digit DP is a technique used to solve problems that asks you to find the number\r\nof integers within a range that satisfies some property based on the digits of\r\nthe integers. Typically, the ranges are between large integers (such as between\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^{18}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 8
      }, this), "), so looping through each integer and checking if it satisfies\r\nthe given property is too slow. Digit DP uses the digits of the integers to\r\nquickly count the number of integers with the given property in the range of\r\nintegers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---odometer",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---odometer",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Odometer"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-without-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-without-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Without Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can solve this problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Y - X)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 30
      }, this), " time by looping through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X\r\n\\ldots Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 75
      }, this), " and checking whether a given number is an interesting number. However,\r\nsince ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Y - X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 7
      }, this), " can be large, the naive solution is too slow, requiring us to\r\noptimize it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One way to optimize the brute force approach of looping from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 62
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 69
      }, this), " and\r\ncounting interesting numbers is by using dynamic programming. The DP approach\r\ninvolves considering all 9 digits one at a time to occupy at least half of the\r\nnumber."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[pos][k][under][started]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 5
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pos}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 49
      }, this), " is the current\r\nposition, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 11
      }, this), " is a counter to see if you have at least half of the same\r\ndigit, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{under}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 8
      }, this), " is whether you have gone below the actual number, and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{started}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), " is a boolean if you still have leading zeros. The transition\r\ninvolves looping through 9 digits to add to the current location and comparing\r\nwith the digit we want to occupy at least half of the number."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given the current state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[pos][k][under][started]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 25
      }, this), ", we loop through\r\nall digits from 0 to 9 and consider adding each of them to the current position.\r\nIf we add the digit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 21
      }, this), " to the current position, we update our state as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 6
        }, this), " is less than the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 27
        }, this), "-th digit of the actual number ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 61
        }, this), ", then we set\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{under}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 3
        }, this), " to true."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 6
        }, this), " is not zero or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{started}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 25
        }, this), " is already true, then we set ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{started}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 73
        }, this), " to\r\ntrue."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 6
        }, this), " is equal to the digit we are interested in, then we increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 72
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 6
        }, this), " is greater than ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\lfloor \\frac{i+1}{2} \\rfloor"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 26
        }, this), ", then we increment our\r\ncount of interesting numbers by 1."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We move on to the next position by setting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 46
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 53
        }, this), " and transitioning to\r\nthe next state."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This algorithm is fast enough as the number of digits is small and there are\r\nonly nine digits."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 82,
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
      lineNumber: 377,
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
      lineNumber: 381,
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
