"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-max-subarray-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-max-subarray-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Max Subarray Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---max-subarray-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---max-subarray-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Max Subarray Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the prefix sum array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[0], p[1], \\dots, p[n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 31
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[i]=\\sum_{j=1}^ix_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 63
      }, this), ". Then the sum of the subarray ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_{l+1\\dots r}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 116
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le l < r\\le n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 134
      }, this), ") is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[r]-p[l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 165
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a fixed right bound ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 25
      }, this), ", the maximum subarray sum over all valid ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 70
      }, this), " is"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[r]-\\min_{l < r}{p[l]}."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, we can keep a running minimum to store ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min\\limits_{l < r}{p[l]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 46
      }, this), " as we\r\niterate through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 17
      }, this), " in increasing order. This yields the maximum subarray sum for each possible\r\nright bound, and the maximum over all these values is our answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
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
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-2d-prefix-sums",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2d-prefix-sums",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2D Prefix Sums"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now, what if we wanted to process ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 35
      }, this), " queries for the sum over a subrectangle of\r\na 2D matrix with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 18
      }, this), " rows and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 31
      }, this), " columns? Let's assume both rows and columns\r\nare 1-indexed, and we use the following matrix as an example:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Naively, each sum query would then take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 41
      }, this), " time, for a total of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(QNM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this), ". This is too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's take the following example region, which we want to sum:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 274,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Manually summing all the cells, we have a submatrix sum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "7+11+9+6+1+3 = 37"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 60
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 325,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first logical optimization would be to do one-dimensional prefix sums of\r\neach row. Then, we'd have the following row-prefix sum matrix. The desired\r\nsubarray sum of each row in our desired region is simply the green cell minus\r\nthe red cell in that respective row. We do this for each row to get\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(28-1) + (14-4) = 37"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now, if we wanted to find a submatrix sum, we could break up the submatrix into\r\na subarray for each row, and then add their sums, which would be calculated\r\nusing the prefix sums method described earlier. Since the matrix has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 70
      }, this), " rows,\r\nthe time complexity of this is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(QN)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 32
      }, this), ". This might be fast enough for\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q=10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=10^3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 14
      }, this), ", but we can do better."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 382,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In fact, we can do two-dimensional prefix sums. In our two dimensional prefix\r\nsum array, we have"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 388,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[a][b]=\\sum_{i=1}^{a} \\sum_{j=1}^{b} \\texttt{arr}[i][j]."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 391,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This can be calculated as follows for row index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq i \\leq n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 395,
        columnNumber: 49
      }, this), " and column\r\nindex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq j \\leq m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 396,
        columnNumber: 7
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 395,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{aligned}\r\n\\texttt{prefix}[i][j] =& \\, \\texttt{prefix}[i-1][j]+ \\texttt{prefix}[i][j-1] \\\\\r\n\t&- \\texttt{prefix}[i-1][j-1]+ \\texttt{arr}[i][j]\r\n\\end{aligned}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 398,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 405,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[2][3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 17
      }, this), ". Try playing with the interactive widget\r\nbelow by clicking the buttons to see which numbers are added in each step.\r\nNotice how we overcount a subrectangle, and how we fix this by subtracting\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[i-1][j-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 407,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 414,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The submatrix sum between rows ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 416,
        columnNumber: 32
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 416,
        columnNumber: 40
      }, this), " and columns ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 416,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 416,
        columnNumber: 64
      }, this), ", can thus be\r\nexpressed as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 416,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{aligned}\r\n\\sum_{i=a}^{A} \\sum_{j=b}^{B} \\texttt{arr}[i][j]=&\\,\\texttt{prefix}[A][B]\r\n\t\t- \\texttt{prefix}[a-1][B] \\\\\r\n\t\t&- \\texttt{prefix}[A][b-1] + \\texttt{prefix}[a-1][b-1]\r\n\\end{aligned}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 419,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Summing the blue region from above using the 2D prefix sums method, we add the\r\nvalue of the green square, subtract the values of the red squares, and then add\r\nthe value of the gray square. In this example, we have"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 427,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "65-23-6+1 = 37,"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 431,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "as expected."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 435,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 486,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Try playing with the interactive widget below by clicking the buttons to see\r\nwhich numbers are added in each step."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 488,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 493,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since no matter the size of the submatrix we are summing, we only need to access\r\nfour values of the 2D prefix sum array, this runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 496,
        columnNumber: 54
      }, this), " per query\r\nafter an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 497,
        columnNumber: 10
      }, this), " preprocessing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 495,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---forest-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---forest-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Forest Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 499,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 639,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-difference-arrays",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-difference-arrays",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Difference Arrays"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 643,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation---greg-and-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation---greg-and-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation - Greg and Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 651,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's create an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 653,
        columnNumber: 23
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 653,
        columnNumber: 34
      }, this), " is the number of times operation ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 653,
        columnNumber: 74
      }, this), " is applied.\r\nThe important step is how we update it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 653,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For an interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 656,
        columnNumber: 17
      }, this), ", we can't loop through the interval and\r\nincrement each value, as that would be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(MK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 657,
        columnNumber: 40
      }, this), " and too slow.\r\nInstead, we increment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 658,
        columnNumber: 23
      }, this), " by one and decrement ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[r+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 658,
        columnNumber: 51
      }, this), " by one."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 656,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, we get the ", _jsxDEV(_components.em, {
        children: "actual"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 660,
        columnNumber: 17
      }, this), " array by computing its prefix sum array,\r\nresulting in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 661,
        columnNumber: 14
      }, this), " time complexity.\r\nThe second part, applying the operations, can be done exactly the same way."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 660,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation---greg-and-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation---greg-and-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation - Greg and Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 664,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 666,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N+M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 666,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 666,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 806,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-quiz",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quiz",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quiz"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 810,
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
