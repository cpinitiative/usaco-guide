"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^2L)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will use ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/47764",
        rel: "nofollow",
        target: "_blank",
        children: "connected component DP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 13
      }, this), " to\r\nsolve this problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, sort the buildings by height. We will now \"insert\" them into the final\r\npermutation at various positions and count the number of ways to do so."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j][k][m]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 5
      }, this), " denote the number of ways to insert the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 68
      }, this), " buildings\r\ninto the permutation such that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["There were ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 14
        }, this), " \"connected components\" (i.e. subarrays with all positions\r\nfilled)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The \"total cost\" (assuming that all empty positions contain ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_{i + 1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 63
        }, this), ", where\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_{n + 1} = \\infty"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), ") is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 28
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 3
        }, this), " of the endpoints of the permutation have been filled so far."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{?, ?, 3, ?, 2, 1\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 14
      }, this), " (a half-filled permutation of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{1, 2, 3, 4, 5, 6\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), ") would be counted in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[3][2][5][1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 45
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that we don't cwere about the relative orders of the connected components\r\nfor each DP state. (Imagine that they're just free-floating components that we\r\ncan pluck out of space and join.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we transition from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 25
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 40
      }, this), ", all the empty positions will\r\nchange from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 13
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{i + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 22
      }, this), ", so the change in total cost (given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 70
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), ") would thus be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\Delta_{j, m} = (2j - m)(a_{i + 1} - a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 20
      }, this), ". Each connected\r\ncomponent contributes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2(a_{i + 1} - a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 23
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\Delta_{j, m}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 47
      }, this), " except for those\r\ncontaining endpoints, which only contribute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{i + 1} - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 45
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We now have five cases to consider when calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j][k][m]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 53
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We ", _jsxDEV(_components.strong, {
          children: "inserted"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 6
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 19
        }, this), " to form a new component that doesn't contain an endpoint\r\nof the permutation.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["There were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i - 1][j - 1][k - \\Delta_{j, m}][m]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 36,
              columnNumber: 16
            }, this), " ways to do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 36,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We ", _jsxDEV(_components.strong, {
          children: "inserted"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 6
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 19
        }, this), " to form a new component that contains an endpoint of the\r\npermutation.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["This is only possible if ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m > 0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 39,
              columnNumber: 30
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 39,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["If so, there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(3 - m) \\cdot dp[i - 1][j - 1][k - \\Delta_{j, m}][m - 1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 40,
              columnNumber: 23
            }, this), "\r\nways to do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 40,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We ", _jsxDEV(_components.strong, {
          children: "appended"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 6
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 19
        }, this), " to an existing component such that it doesn't contain an\r\nend of the permutation.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["There were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "2j - m"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 44,
              columnNumber: 16
            }, this), " component endpoints to choose from, so there were\r\n", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(2j - m) \\cdot dp[i - 1][j][k - \\Delta_{j, m}][m]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 45,
              columnNumber: 5
            }, this), " ways to do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 44,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We ", _jsxDEV(_components.strong, {
          children: "appended"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 6
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 19
        }, this), " to an existing component such that it contains of the\r\npermutation.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["This is only possible if ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m > 0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 48,
              columnNumber: 30
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 48,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["If ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m = 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 49,
              columnNumber: 8
            }, this), ", then there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "2j"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 49,
              columnNumber: 33
            }, this), " component endpoints to choose from, so\r\nthere were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "2j \\cdot dp[i - 1][j][k - \\Delta_{j, m}][m - 1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 50,
              columnNumber: 16
            }, this), " ways to do\r\nthis."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["If ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m = 2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 52,
              columnNumber: 8
            }, this), ", and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j = 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 52,
              columnNumber: 21
            }, this), ", then ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i = n"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 52,
              columnNumber: 35
            }, this), " must hold and so there were\r\n", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i - 1][j][k - \\Delta_{j, m}][m - 1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 53,
              columnNumber: 5
            }, this), " ways to do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 52,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Otherwise, there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j - 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 54,
              columnNumber: 27
            }, this), " component endpoints to choose from (we can't\r\nchoose the other component containing an endpoint of the permutation!), so\r\nthere were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(j - 1) \\cdot dp[i - 1][j][k - \\Delta_{j, m}][m - 1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 56,
              columnNumber: 16
            }, this), " ways to do\r\nthis."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 54,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We inserted ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 15
        }, this), " to ", _jsxDEV(_components.strong, {
          children: "join"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 24
        }, this), " two existing components.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["If ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m = 2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 59,
              columnNumber: 8
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i = n"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 59,
              columnNumber: 20
            }, this), ", then there can only be two components left, so there\r\nwere ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i - 1][j + 1][k - \\Delta_{j, m}][m]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 60,
              columnNumber: 10
            }, this), " ways to do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 59,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["If ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m = 2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 61,
              columnNumber: 8
            }, this), " otherwise, then there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j(j - 1)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 61,
              columnNumber: 43
            }, this), " ordered pairs of components\r\nto choose from, so there were\r\n", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j(j - 1) \\cdot dp[i - 1][j + 1][k - \\Delta_{j, m}][m]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 63,
              columnNumber: 5
            }, this), " ways to do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 61,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["If ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "m = 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 64,
              columnNumber: 8
            }, this), ", then there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j^2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 64,
              columnNumber: 33
            }, this), " ordered pairs of components to choose\r\nfrom, so there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j^2 \\cdot dp[i - 1][j + 1][k - \\Delta_{j, m}][m]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 65,
              columnNumber: 25
            }, this), " ways\r\nto do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 64,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Otherwise, there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j(j + 1)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 67,
              columnNumber: 27
            }, this), " ordered pairs of components to choose from,\r\nso there were ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j(j + 1) \\cdot dp[i - 1][j + 1][k - \\Delta_{j, m}][m]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 68,
              columnNumber: 19
            }, this), " ways\r\nto do this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 67,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nconst ll MOD = 1e9 + 7;\r\n\r\nint a[102];\r\nll dp[102][102][1002][3];\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tint n, l;\r\n\tcin >> n >> l;\r\n\tif (n == 1) return cout << 1, 0;\r\n\tfor (int i = 1; i <= n; i++) cin >> a[i];\r\n\tsort(a + 1, a + n + 1);\r\n\ta[n + 1] = 10000;\r\n\tdp[0][0][0][0] = 1;\r\n\tfor (int i = 1; i <= n; i++) {\r\n\t\tfor (int j = 1; j <= i; j++) {\r\n\t\t\tfor (int k = 0; k <= l; k++) {\r\n\t\t\t\tfor (int m = 0; m <= 2; m++) {\r\n\t\t\t\t\tint cost_diff = (2 * j - m) * (a[i + 1] - a[i]);\r\n\t\t\t\t\tif (cost_diff > k || i + j + 1 - m > n) continue;\r\n\r\n\t\t\t\t\t// Case 1\r\n\t\t\t\t\tdp[i][j][k][m] += dp[i - 1][j - 1][k - cost_diff][m];\r\n\t\t\t\t\t// Case 2\r\n\t\t\t\t\tif (m)\r\n\t\t\t\t\t\tdp[i][j][k][m] +=\r\n\t\t\t\t\t\t    (3 - m) * dp[i - 1][j - 1][k - cost_diff][m - 1];\r\n\t\t\t\t\t// Case 3\r\n\t\t\t\t\tdp[i][j][k][m] += (2 * j - m) * dp[i - 1][j][k - cost_diff][m];\r\n\t\t\t\t\t// Case 4\r\n\t\t\t\t\tif (m == 1)\r\n\t\t\t\t\t\tdp[i][j][k][m] += 2 * j * dp[i - 1][j][k - cost_diff][m - 1];\r\n\t\t\t\t\tif (m == 2) {\r\n\t\t\t\t\t\tif (i == n)\r\n\t\t\t\t\t\t\tdp[i][j][k][m] += dp[i - 1][j][k - cost_diff][m - 1];\r\n\t\t\t\t\t\telse if (j > 1)\r\n\t\t\t\t\t\t\tdp[i][j][k][m] +=\r\n\t\t\t\t\t\t\t    (j - 1) * dp[i - 1][j][k - cost_diff][m - 1];\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// Case 5\r\n\t\t\t\t\tif (m == 2) {\r\n\t\t\t\t\t\tif (i == n)\r\n\t\t\t\t\t\t\tdp[i][j][k][m] += dp[i - 1][j + 1][k - cost_diff][m];\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\tdp[i][j][k][m] +=\r\n\t\t\t\t\t\t\t    j * (j - 1) * dp[i - 1][j + 1][k - cost_diff][m];\r\n\t\t\t\t\t} else if (m == 1)\r\n\t\t\t\t\t\tdp[i][j][k][m] += j * j * dp[i - 1][j + 1][k - cost_diff][m];\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\tdp[i][j][k][m] +=\r\n\t\t\t\t\t\t    j * (j + 1) * dp[i - 1][j + 1][k - cost_diff][m];\r\n\r\n\t\t\t\t\tdp[i][j][k][m] %= MOD;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tll ans = 0;\r\n\tfor (int i = 0; i <= l; i++) ans += dp[n][1][i][2];\r\n\tcout << ans % MOD;\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 71,
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
