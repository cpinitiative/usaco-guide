"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
    children: [_jsxDEV(_components.h1, {
      id: "user-content-counting-reorders",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-counting-reorders",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Counting Reorders"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Calculate the number of ways you can reorder the characters of a string so that no two adjacent characters are the same."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-strategy-inclusion-exclusion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-strategy-inclusion-exclusion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Strategy: Inclusion-Exclusion"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The constraint \"no two adjacent characters are equal\" is difficult to count directly. Instead, we use the ", _jsxDEV(_components.strong, {
        children: "Principle of Inclusion-Exclusion (PIE)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 107
      }, this), " to transform the problem into counting arrangements with a specific number of \"bad\" connections."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-defining-bad-pairs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-defining-bad-pairs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Defining \"Bad Pairs\""]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let a ", _jsxDEV(_components.strong, {
        children: "Bad Pair"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 7
      }, this), " be an instance where two identical characters are placed next to each other (e.g., ", _jsxDEV(_components.code, {
        children: "AA"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 103
      }, this), "). We want to find the number of arrangements with ", _jsxDEV(_components.strong, {
        children: "exactly zero"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 158
      }, this), " Bad Pairs."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of counting \"exactly zero\" directly, PIE tells us to count arrangements where we have forced ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 102
      }, this), " specific adjacencies to be bad. The formula for arrangements with zero bad pairs is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{K=0}^{n-1} (-1)^K \\times (\\text{Ways to force } K \\text{ Bad Pairs})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-why-this-works",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-why-this-works",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Why this works"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we force ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 15
      }, this), " adjacencies, we aren't saying the string has only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 69
      }, this), " bad pairs; it might have more. However, the alternating sign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(-1)^K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 134
      }, this), " ensures that any arrangement that actually contains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 195
      }, this), " bad pairs (where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m > 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 216
      }, this), ") is counted a total of:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{k=0}^{m} \\binom{m}{k}(-1)^k = (1-1)^m = 0 \\text{ times}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This leaves only the arrangements with zero bad pairs in our final sum, each counted exactly once."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-connecting-pie-to-segments",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-connecting-pie-to-segments",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Connecting PIE to Segments"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To calculate the \"Ways to force ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 33
      }, this), " Bad Pairs,\" we treat each forced adjacency as a \"bond\" that merges two identical characters into a single block. If we have a string of total length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 186
      }, this), " and we use ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 201
      }, this), " bonds to force adjacencies, we are left with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 250
      }, this), " independent segments:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "i = n - K \\quad \\text{or} \\quad K = n - i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This motivates our Dynamic Programming: if we can count how many ways there are to form exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 97
      }, this), " segments, we can apply the PIE sign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(-1)^{n-i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 137
      }, this), " to that count to reach our final answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-step-by-step-explanation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-by-step-explanation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step-by-Step Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-1-preprocessing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-1-preprocessing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "1. Preprocessing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We count the frequency ", _jsxDEV(_components.code, {
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 24
      }, this), " of every character. We also precompute ", _jsxDEV(_components.strong, {
        children: "Binomial Coefficients"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 67
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n}{r}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 93
      }, this), " using Pascal's Triangle logic. This allows us to access combinations in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 180
      }, this), " time while processing DP."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-2-the-dynamic-programming-state",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2-the-dynamic-programming-state",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2. The Dynamic Programming State"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We define a DP state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 3
        }, this), ": We have processed the first ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 36
        }, this), " distinct character types."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 3
        }, this), ": The total number of ", _jsxDEV(_components.strong, {
          children: "segments"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 28
        }, this), " formed by these characters."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-3-the-transition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-3-the-transition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "3. The Transition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When introducing a new character with frequency ", _jsxDEV(_components.code, {
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 49
      }, this), ", we decide to split it into ", _jsxDEV(_components.code, {
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 81
      }, this), " segments  (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\le k \\le f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 96
      }, this), "). This transition involves:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.strong, {
            children: "Splitting the characters:"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 58,
            columnNumber: 4
          }, this), " Ways to divide ", _jsxDEV(_components.code, {
            children: "f"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 58,
            columnNumber: 49
          }, this), " identical items into ", _jsxDEV(_components.code, {
            children: "k"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 58,
            columnNumber: 74
          }, this), " non-empty segments (Stars and Bars Problem): ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\binom{f - 1}{k - 1}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 58,
            columnNumber: 123
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.strong, {
            children: "Merging with existing segments:"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 60,
            columnNumber: 4
          }, this), " Ways to interleave these ", _jsxDEV(_components.code, {
            children: "k"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 60,
            columnNumber: 65
          }, this), " new segments among the ", _jsxDEV(_components.code, {
            children: "j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 60,
            columnNumber: 92
          }, this), " segments already processed: ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\binom{j+k}{k}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 60,
            columnNumber: 124
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "The Update Rule:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j+k] += dp[i-1][j] \\times \\binom{f-1}{k-1} \\times \\binom{j+k}{k}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-4-final-parity-simplification",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-4-final-parity-simplification",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "4. Final Parity Simplification"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After processing all character groups, we aggregate the values in ", _jsxDEV(_components.code, {
        children: "dp[groups][i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 67
      }, this), " using the PIE sign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(-1)^{n-i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 102
      }, this), ". The sign depends on the parity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 150
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n-i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 6
        }, this), " is even, the sign is ", _jsxDEV(_components.strong, {
          children: "Positive (+)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 33
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n-i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 6
        }, this), " is odd, the sign is ", _jsxDEV(_components.strong, {
          children: "Negative (-)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 32
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is equivalent to checking if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(n + i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 35
      }, this), " is even: ", _jsxDEV(_components.code, {
        children: "if ((i + n) % 2 == 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 54
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
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
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Time Complexity: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N^2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 20
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 79,
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
