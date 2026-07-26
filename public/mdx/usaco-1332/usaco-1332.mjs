"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob1_platinum_open23.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (Java)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
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
      children: ["Let's first try to solve the problem without updates on a single string.\r\nNotice that it is always optimal to take the earliest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 55
      }, this), " and then the earliest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 81
      }, this), " and then the earliest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 107
      }, this), " after that and so on because it maximizes the number of places you can search to find the next letter of \"bessie\"."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now let's try to solve the problem without updates for all substrings.\r\nLet ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 5
      }, this), " be the number of positions of the string we have processed so far such that if we apply the greedy strategy described above, the next character we need to add is the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 179
      }, this), "th character (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 196
      }, this), " indexed) of the string \"bessie\". We also need to add the substring starting from the current index. If the current letter of the string is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 339
      }, this), ", then the next letter we need to add is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 383
      }, this), " so in this case we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 410
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 417
      }, this), ". In every other case, we need to add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 462
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 469
      }, this), " because the next character we add to fill \"bessie\" is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 531
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Notice that we can represent the transition from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 50
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 58
      }, this), " as a system of linear recurrences which depend on the letter."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["B:", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 3
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[0] = 0 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[1] = dp[0] + 1 + dp[1] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[2] = dp[2] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[3] = dp[3] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[4] = dp[4] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[5] = dp[5] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "newans = ans \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["E:", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 3
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[0] = dp[0] + 1 + dp[5] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[1] = 0 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[2] = dp[1] + dp[2] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[3] = dp[3] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[4] = dp[4] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[5] = 0 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "newans = ans + (n - i + 1) * dp[5] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["S:", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 3
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[0] = dp[0] + 1 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[1] = dp[1] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[2] = 0 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[3] = dp[2] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[4] = dp[3] + dp[4] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[5] = dp[5] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "newans = ans \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I:", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 3
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[0] = dp[0] + 1 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[1] = dp[1] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[2] = dp[2] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[3] = dp[3] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[4] = 0 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[5] = dp[4] + dp[5] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "newans = ans \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Identity (Any letter other than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 33
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 38
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 43
      }, this), ", or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 51
      }, this), "):", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 56
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[0] = dp[0] + 1 \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[1] = dp[1] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[2] = dp[2] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[3] = dp[3] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[4] = dp[4] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ndp[5] = dp[5] \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "newans = ans \\\\"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can represent these linear recurrences with matrices where each letter of the string has its respective matrix. Now, multiplying all these matrices together will allow us to compute our answer. Note that since matrix multiplication is non commutative, we need to pay attention to the order of the two matrices that we are multiplying. In this case, we multiply matrices representing earlier indexes by matrices represting later indexes (rather than matrices representing later indexes by matrices represting later indexes)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can optimize updates by building a segment tree on the matrices and updating each node with the respective matrix based on the given letter."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 106,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that if the letter is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 28
      }, this), ", we need to set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "mat[5][6]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 48
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n - i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 63
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 5
      }, this), "-th column ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 \\leq i \\leq 6)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 19
      }, this), " of each matrix represents ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 65
      }, this), ", the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 82
      }, this), "th column of each matrix represents the answer, and the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 141
      }, this), "th column of each matrix is a constant ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 183
      }, this), " so we can add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 201
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 208
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 219
      }, this), " at every index."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To extract the answer from the matrices, we can multiply the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\times 8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 62
      }, this), " matrix representing our initial state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 0, 0, 0, 0, 0, 0, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 113
      }, this), " by the product of all the matrices and look at the value in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 204
      }, this), "nd to last column, which we defined to be the answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This ends up being equivalent to the value located at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "mat[7][6]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 55
      }, this), " of the product of all the matrices."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
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
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The constant factor for this solution is high, so you may need to do some of the following optimizations to pass the test cases:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Use C++."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We can skip all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 119,
          columnNumber: 20
        }, this), "s while multiplying the matrices to speed up the multiplication."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Use fastio and '\\n' instead of endl."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Build the segtree in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 25
        }, this), " rather than updating each index individually in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N \\log N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 90
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Use pragmas (Ofast, O3, unroll-loops, etc ...)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 2
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 2
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
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
