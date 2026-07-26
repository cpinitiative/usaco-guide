"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The inclusion-exclusion principle relates to finding the size of the union of some sets."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Verbally it can be stated as following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The mathematical identity of the above is:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left| \\bigcup_{i=1}^n A_i \\right| = \\sum_{i=1}^n|A_i| - \\sum_{1\\leq i<j\\leq n} |A_i \\cap A_j| + \\sum _{1\\leq i<j<k\\leq n}|A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n-1} | A_1 \\cap \\cdots \\cap A_n |"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Written in a compact form:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\bigg|\\bigcup_{i=1}^nA_i \\bigg|= \\sum_{0 \\neq J \\in \\{1, 2,...,n\\} } (-1)^{|J|-1} \\bigg| \\bigcap_{j \\in J} A_j \\bigg|"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-mobius-function",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mobius-function",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Mobius Function"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/M%C3%B6bius_function",
        rel: "nofollow",
        target: "_blank",
        children: "Mobius function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 5
      }, this), " is a multiplicative function that comes in handy when dealing with inclusion-exclusion technique and divisors-related problems. It has values in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{-1, 0, 1\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 220
      }, this), "  depending on number's factorization."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mu(n)=\\begin{cases}\r\n1 & \\text{if $n$ is $1$},\\\\\r\n0 & \\text{if $n$ has a squared prime factor},\\\\\r\n(-1)^k & \\text{if $n$ is a product of $k$ distinct prime factors}.\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Below you can see the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "19"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 29
      }, this), " values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mu(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 44
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", _jsxDEV(_components.table, {
      children: [_jsxDEV(_components.thead, {
        children: _jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.th, {
            children: "n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 1
          }, this), _jsxDEV(_components.th, {
            children: "1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 5
          }, this), _jsxDEV(_components.th, {
            children: "2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 9
          }, this), _jsxDEV(_components.th, {
            children: "3"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 13
          }, this), _jsxDEV(_components.th, {
            children: "4"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 17
          }, this), _jsxDEV(_components.th, {
            children: "5"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 21
          }, this), _jsxDEV(_components.th, {
            children: "6"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 25
          }, this), _jsxDEV(_components.th, {
            children: "7"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 29
          }, this), _jsxDEV(_components.th, {
            children: "8"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 33
          }, this), _jsxDEV(_components.th, {
            children: "9"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 37
          }, this), _jsxDEV(_components.th, {
            children: "10"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 41
          }, this), _jsxDEV(_components.th, {
            children: "11"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 46
          }, this), _jsxDEV(_components.th, {
            children: "12"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 51
          }, this), _jsxDEV(_components.th, {
            children: "13"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 56
          }, this), _jsxDEV(_components.th, {
            children: "14"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 61
          }, this), _jsxDEV(_components.th, {
            children: "15"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 66
          }, this), _jsxDEV(_components.th, {
            children: "16"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 71
          }, this), _jsxDEV(_components.th, {
            children: "17"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 76
          }, this), _jsxDEV(_components.th, {
            children: "18"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 81
          }, this), _jsxDEV(_components.th, {
            children: "19"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 86
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 1
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), _jsxDEV(_components.tbody, {
        children: _jsxDEV(_components.tr, {
          children: [_jsxDEV(_components.td, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\mu(n)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 49,
              columnNumber: 3
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 1
          }, this), _jsxDEV(_components.td, {
            children: "1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 12
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 16
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 21
          }, this), _jsxDEV(_components.td, {
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 26
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 30
          }, this), _jsxDEV(_components.td, {
            children: "1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 35
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 39
          }, this), _jsxDEV(_components.td, {
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 44
          }, this), _jsxDEV(_components.td, {
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 48
          }, this), _jsxDEV(_components.td, {
            children: "1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 52
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 56
          }, this), _jsxDEV(_components.td, {
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 61
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 65
          }, this), _jsxDEV(_components.td, {
            children: "1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 70
          }, this), _jsxDEV(_components.td, {
            children: "1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 74
          }, this), _jsxDEV(_components.td, {
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 78
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 82
          }, this), _jsxDEV(_components.td, {
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 87
          }, this), _jsxDEV(_components.td, {
            children: "-1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 91
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 1
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's take a look at how the mobius function can be precomputed with a slightly modified sieve."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-applications",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applications",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applications"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-sqfree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sqfree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "SQFREE"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A perfect application for inclusion-exclusion principle and mobius function. In this particular case the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 110
      }, this), " - previously mentioned in the tutorial section - denotes how many numbers are divisible with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 209
      }, this), " and we're asked to find out ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\bigg| \\bigcup_{i=1}^{\\sqrt{n}} A_i \\bigg|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 243
      }, this), ". The precomputed mobius array tells whether to add or subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 351
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 77,
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
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(V \\log V + T \\cdot \\sqrt{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V = 1e7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 72
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-cowpatibility",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-cowpatibility",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Cowpatibility"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this particular case the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 33
      }, this), " - previously mentioned in the tutorial section - denotes how many pairs of cows have at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 133
      }, this), " ice cream flavors in common. From the total number of pairs subtract the union of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 219
      }, this), ". The global answer is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{n \\cdot(n-1)}{2}- \\bigg| \\bigcup_{i=1}^{5} A_i \\bigg|"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 130,
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
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-the-number-of-strings-that-match-a-certain-pattern",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-the-number-of-strings-that-match-a-certain-pattern",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "The number of strings that match a certain pattern"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-1-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A dynamic programming approach with bitmasking would look like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][mask] = \\text{the number of strings of length i that match all the patterns in set, but none other patterns. } "
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 1
      }, this), " The recurrence is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][mask \\& j]=dp[i-1][j]\\text{ where j is a set of patterns that match character c at position i}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The following code illustrates this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 222,
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
      lineNumber: 224,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M \\cdot N \\cdot 2^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 64
      }, this), " is size of each strings in patterns and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 108
      }, this), " is the size of patterns."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 226,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The problem can also be solved using the inclusion exclusion principle."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 268,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An important observation is that we can easily count the strings that satisfy some specific patterns. Simply iterate through the positions of all patterns. If all the patterns contain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 185
      }, this), " then we can use any letter from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 221
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "z"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 228
      }, this), " giving us ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "26"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 242
      }, this), " solution, otherwise we can only put the fixed letter contained by a pattern. The answer is the product."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Iterate over subsets - denoted by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 35
      }, this), " - of patterns consisting of exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 75
      }, this), " strings. For this specific subset count the number of string that can only match all the patterns in subset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 187
      }, this), ". Apply the inclusion-exclusion principle over all supersets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 251
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A \\subset B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 265
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 272,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "solve(A) = \\sum_{B \\supseteq A} (-1)^{|B|-k} \\cdot f(B)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 274,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "f(B)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 1
      }, this), " denotes the number of strings matching ", _jsxDEV(_components.em, {
        children: "at least"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 47
      }, this), " set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 62
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 278,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The global answer is:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 280,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans = \\sum_{A:|A|=k} solve(A)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 281,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 285,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\binom{N}{k} \\cdot 2^{N - k} \\cdot M \\cdot N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 287,
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
