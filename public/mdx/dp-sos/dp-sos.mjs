"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Sum Over Subsets (SOS)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " is a technique used to efficiently calculate the sum of values for all subsets of a given set or bitmask."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-sum-over-subsets-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sum-over-subsets-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sum over Subsets Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 19
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 28
      }, this), " elements. Our goal is to calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 69
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = 0, 1, 2, \\dots, 2^n - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 84
      }, this), ". Here, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 121
      }, this), " represents the sum of values in array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 166
      }, this), " for all subsets (submasks) ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 197
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 204
      }, this), ". That is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "F(x) = \\sum_{i \\subseteq x} A[i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F(5)=A[0]+A[1]+A[4]+A[5]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 14
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-brute-force",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-brute-force",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Brute Force"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The naive solution would be to iterate over all pair of masks, summing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 72
      }, this), " only when one of them is a subset of the other (i.e., ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\ \\&\\ x = i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 133
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This solution has a time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^n \\cdot 2^n) = O(4^n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 40
      }, this), ", which is too slow for large values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 117
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimized-solution-iterating-over-submasks",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimized-solution-iterating-over-submasks",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimized Solution: Iterating Over Submasks"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of iterating over all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 31
      }, this), " bitmasks for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 50
      }, this), ", we can optimize by iterating only over the subset masks of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 114
      }, this), " using the formula ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i = (i - 1)\\ \\&\\  x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 136
      }, this), ", which efficiently generates all valid subsets of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 208
      }, this), " in reverse order. This approach skips unnecessary combinations, significantly reducing the number of iterations and improving the time complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: " \\mathcal{O}(3^n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-faster-solution-using-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-faster-solution-using-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Faster Solution using Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While the previous method is better, it still has some redundancy. For example, if a bitmask ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 94
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 102
      }, this), " unset bits, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 123
      }, this), " is summed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 140
      }, this), " times. By grouping masks that frequently appear together, we can precompute and reuse their sums to eliminate repeated additions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-subset-mask-partitioning-with-sx-i",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subset-mask-partitioning-with-sx-i",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subset Mask Partitioning with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(x, i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 36
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We define the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(x, i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 19
      }, this), " of subsets of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 43
      }, this), " as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(x, i) = \\{y \\subseteq x \\mid y \\oplus x < 2^i\\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 146,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In simpler terms, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(x, i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 19
      }, this), " contains all subset masks of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 58
      }, this), " whose bits match those of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 88
      }, this), " except for the rightmost ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 117
      }, this), " bits."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 152,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(\\mathbf{101}1010, 4) = \\{\\mathbf{101}0000,\\mathbf{101}0010,\\mathbf{101}1000,\\mathbf{101}1010\\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 153,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can decompose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(x, i+1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 157,
        columnNumber: 18
      }, this), " as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 157,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 159,
          columnNumber: 12
        }, this), "-th bit of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 159,
          columnNumber: 26
        }, this), " is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 159,
          columnNumber: 33
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S(x, i+1) = S(x, i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 159,
          columnNumber: 43
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 12
        }, this), "-th bit of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 26
        }, this), " is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 33
        }, this), ":\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Subsets with the ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 161,
              columnNumber: 24
            }, this), "-th bit ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "1: S(x, i)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 161,
              columnNumber: 35
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 161,
            columnNumber: 5
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Subsets with the ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 162,
              columnNumber: 24
            }, this), "-th bit ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "0 : S(x \\oplus 2^i, i)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 162,
              columnNumber: 35
            }, this), ".\r\nThus:"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 162,
            columnNumber: 5
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 161,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S(x, i+1) =\r\n\\begin{cases}\r\nS(x, i) & \\text{if the $i$-th bit is 0} \\\\\r\nS(x, i) \\cup S(x \\oplus 2^i, i) & \\text{if the $i$-th bit is 1}\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 164,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using the above partitioning, we define a DP table ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[x][i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 52
      }, this), " where:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[x][i] = \\sum_{y \\in S(x, i)} A[y]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\cdot 2^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-optimized-memory-usage",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimized-memory-usage",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimized Memory Usage"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[x][i+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 7
      }, this), " only depends on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[x][i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 36
      }, this), ", we can reuse the DP array."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-sos-dp-as-n-dimensional-prefix-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sos-dp-as-n-dimensional-prefix-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "SOS DP as N-Dimensional Prefix Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 248,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Before we move on, let's revisit 2D prefix sums. Given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\times m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 56
      }, this), " array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 75
      }, this), ", the prefix sum array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 101
      }, this), " is defined as:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[i][j] = \\sum_{a \\leq i} \\sum_{b \\leq j} A[a][b]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 252,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The standard approach uses inclusion-exlcusion:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 256,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[i][j] = S[i][j - 1] + S[i - 1][j] - S[i - 1][j - 1] + A[i][j]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "While this approach works for 2D grids, it has a significant limitation: as the number of dimensions increases, the number of terms we need to add or subtract also increases exponentially, making it inefficient for higher-dimensional grids."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 262,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A simple and more scalable approach would be to sweep along each axis one at a time and compute the prefix sum step by step:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 264,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This approach generalizes to higher dimensions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's say we want to calculate the prefix sum array for 4D grid. We can calculate this by sweeping along each axis of a 4D grid, one at a time:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 311,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["After sweeping along the x-axis, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[i][j][k][l]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 313,
          columnNumber: 36
        }, this), " contains the sum of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A[a][b][c][d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 313,
          columnNumber: 72
        }, this), " where:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "a \\leq i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 314,
              columnNumber: 4
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 314,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "b = j, c = k,"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 315,
              columnNumber: 4
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "d = l"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 315,
              columnNumber: 24
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 315,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 314,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["After sweeping along the y-axis, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[i][j][k][l]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 316,
          columnNumber: 36
        }, this), " contains the sum of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A[a][b][c][d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 316,
          columnNumber: 72
        }, this), " where:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "a \\leq i, b \\leq j"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 317,
              columnNumber: 4
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 317,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "c = k,"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 318,
              columnNumber: 4
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "d = l"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 318,
              columnNumber: 17
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 318,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 317,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 316,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["After sweeping along the z-axis, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[i][j][k][l]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 319,
          columnNumber: 36
        }, this), " contains the sum of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A[a][b][c][d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 319,
          columnNumber: 72
        }, this), " where:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "a \\leq i, b \\leq j, c \\leq k"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 320,
              columnNumber: 4
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 320,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "d = l"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 321,
              columnNumber: 4
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 321,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 320,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Finally, after sweeping along the w-axis, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[i][j][k][l]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 322,
          columnNumber: 45
        }, this), " contains the sum of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A[a][b][c][d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 322,
          columnNumber: 81
        }, this), " where:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "a \\leq i, b \\leq j, c \\leq k,"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 323,
              columnNumber: 4
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "d \\leq l"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 323,
              columnNumber: 40
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 323,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 323,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 322,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 313,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we extend this idea to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 27
      }, this), " dimensions, here's what happens after sweeping along the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 88
      }, this), "-th axis. For each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 110
      }, this), "-dimensional vector ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 133
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 138
      }, this), " contains the sum of the values in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 179
      }, this), " where the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 199
      }, this), " coordinates are less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 243
      }, this), ", and the remaining coordinates match ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 284
      }, this), ". Sound familiar?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 325,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's compare it to the SOS problem. If we think of each bit in a bitmask as its own axis, then a bitmask ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 107
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 116
      }, this), " bits can be viewed as an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 145
      }, this), "-dimensional vector, where each coordinate is either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 201
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 208
      }, this), ". A submask of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 226
      }, this), " corresponds to an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 248
      }, this), "-dimensional vector where each coordinate is less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 318
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Therefore, when we interpret the bitmask as an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 48
      }, this), "-dimensional vector, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 72
      }, this), " aligns with the definition of an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 112
      }, this), "-dimensional prefix sum!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 329,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By applying the sweeping algorithm along each axis, we get the memory-optimized SOS DP solution mentioned earlier, demonstrating that SOS DP is indeed an ", _jsxDEV(_components.strong, {
        children: "n-dimensional prefix sum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 155
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 331,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 364,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, think of each word as a combination of letters represented by a bitmask. For example, ", _jsxDEV(_components.code, {
        children: "bcd"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 366,
        columnNumber: 94
      }, this), " = ", _jsxDEV(_components.code, {
        children: "0b1110"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 366,
        columnNumber: 102
      }, this), ", and ", _jsxDEV(_components.code, {
        children: "ada"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 366,
        columnNumber: 116
      }, this), " = ", _jsxDEV(_components.code, {
        children: "0b1001"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 366,
        columnNumber: 124
      }, this), ", where each bit stands for a letter. We'll also keep track of how often each bitmask appears in the dictionary."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 366,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Next, we use SOS DP to compute the number of words disjoint from the mask (i.e., words containing ", _jsxDEV(_components.strong, {
        children: "none of the vowels"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 368,
        columnNumber: 99
      }, this), " in mask). This means the word's bitmask must be a subset of the complement of mask (~mask)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 368,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Once this is calculated, the number of valid words for a subset is simply ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n - sos[\\sim mask]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 75
      }, this), " because a word is valid if it contains ", _jsxDEV(_components.strong, {
        children: "at least one vowel"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 135
      }, this), " from the subset, meaning it is not disjoint from mask. Finally, we square the count of valid words for every subset, XOR all those squared values together, and that gives us the answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 370,
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
      lineNumber: 372,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M \\cdot 2^M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 374,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-general-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 445,
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
