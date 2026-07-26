"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's define the function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{pref}(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 27
      }, this), " to return the sum of digits among all integers from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 98
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 105
      }, this), " inclusive.\r\nThen, the answer for each query will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{pref}(r) - \\mathtt{pref}(l-1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{pref}(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 18
      }, this), " using digit dp. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 57
      }, this), " be the number of digits in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 88
      }, this), ".\r\nThe maximum sum of digits among all numbers with at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 58
      }, this), " digits is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 72
      }, this), ".\r\nUnder the problem constraints, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 32
      }, this), " can be at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "16"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 51
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can define the following dp state:\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{dp[i][j][b]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), " = number of integers having exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 60
      }, this), " digits with sum of digits ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 90
      }, this), " and a freedom value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 117
      }, this), " (which is either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 138
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 145
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "b = 0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 6
          }, this), ", then the first ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 30
          }, this), " digits of the state is equivalent to the first ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 81
          }, this), " digits of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "x"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 95
          }, this), ".\r\nIn this case, when placing the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i+1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 34
          }, this), "'th digit, it cannot exceed the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i+1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 71
          }, this), "'th digit of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "x"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 89
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "b = 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 6
          }, this), ", then there exists some ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 38
          }, this), " where ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d < i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 48
          }, this), " and the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 64
          }, this), "-th digit that we placed is less than the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 109
          }, this), "-th digit of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "x"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 125
          }, this), ".\r\nIn this case, we already know our integer must be less than ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "x"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 63
          }, this), ", regardless of what digit we place next."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For transitions, we must consider the three cases where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 57
      }, this), " remains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 69
      }, this), ",\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " remains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 13
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 22
      }, this), " goes from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 36
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, the sum of digits among all integers with exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 60
      }, this), " digits and does not exceed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 91
      }, this), " is given by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{j=0}^{9n} \\sum_{b=0}^1 \\mathtt{dp[n][j][b]} \\cdot j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 107
      }, this), ".\r\nHowever, we still have to add the sum of digits for all numbers with less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 80
      }, this), " digits, which can be precalculated."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
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
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 22
      }, this), " for each query, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 63
      }, this), " is the length of the number."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-alternative-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternative-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternative Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{pref}(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 5
      }, this), " be the same function as in the solution above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's convert the number into a string and treat it as such."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{dp[i][b]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 8
      }, this), " to be the sum of digits and the amount of different numbers we can make in suffix starting from position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 133
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 138
      }, this), " is the same freedom value as in the solution above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's look at our transitions:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If the suffix is empty, the sum equals to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 45
        }, this), " and the amount equals to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 74
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, assume we try to place digit ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 43
        }, this), " in a position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 61
        }, this), ". Let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "num"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 70
        }, this), " be the amount of different numbers we can create in a suffix that starts at position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 161
        }, this), " after placing digit ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 187
        }, this), ", and let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "sum"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 200
        }, this), " be the sum of digits of such numbers. Then contribution of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 265
        }, this), " would be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d \\cdot num"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 278
        }, this), ", and contributions of all the other positions in suffix would be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "sum"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 357
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Our freedom value ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 21
        }, this), " goes from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 35
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 42
        }, this), " if we place digit ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 64
        }, this), " that is less than digit at position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 104
        }, this), ". We can't place digit ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 130
        }, this), " if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 137
        }, this), " is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 144
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 152
        }, this), " is greater than digit at position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 190
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The answer is the sum value at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathtt{dp[0][0]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
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
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 22
      }, this), " for each query, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 61
      }, this), " is the length of the number."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
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
