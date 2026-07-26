"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-tutorials",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorials",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorials"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "From the latter link (modified):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "Slope trick is a way to represent a function that satisfies the following\r\nconditions:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.ul, {
        children: ["\n", _jsxDEV(_components.li, {
          children: "It can be divided into multiple sections, where each section is a linear\r\nfunction (usually) with an integer slope."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.li, {
          children: "It is a convex/concave function. In other words, the slope of each section\r\nis non-decreasing or non-increasing when scanning the function from left to\r\nright."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It's generally applicable as a DP optimization."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The rest of this module assumes that you know the basic idea of this trick. In\r\nparticular, you should be able to solve the following problem (it's almost\r\nidentical to the first problem in zscoder's tutorial):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "It's ok if you found the explanations confusing; the example below should help\r\nclarify."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-buy-low-sell-high",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-buy-low-sell-high",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Buy Low Sell High"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-slow-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 5
      }, this), " denote the maximum amount of money you can have on day ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 71
      }, this), " if you\r\nhave exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 14
      }, this), " shares of stock on that day. The final answer will be\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[N][0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), ". This solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 35
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "vector<vl> dp = {{0}};\r\nint N;\r\n\r\nint main() {\r\n\tre(N);\r\n\tF0R(i, N) {\r\n\t\tint x;\r\n\t\tre(x);\r\n\t\tdp.pb(vl(i + 2, -INF));\r\n\t\tF0R(j, i + 1) {\r\n\t\t\tckmax(dp.bk[j + 1], dp[sz(dp) - 2][j] - x);\r\n\t\t\tckmax(dp.bk[j], dp[sz(dp) - 2][j]);\r\n\t\t\tif (j) ckmax(dp.bk[j - 1], dp[sz(dp) - 2][j] + x);\r\n\t\t}\r\n\t}\r\n\tint cnt = 0;\r\n\ttrav(t, dp) {\r\n\t\tpr(\"dp[\", cnt++, \"] = \");\r\n\t\tpr('{');\r\n\t\tF0R(i, sz(t)) {\r\n\t\t\tif (i) cout << \", \";\r\n\t\t\tcout << setw(3) << t[i];\r\n\t\t}\r\n\t\tps('}');\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If we run this on the first sample case, then we get the following table:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "Input:\r\n\r\n9\r\n10 5 4 7 9 12 6 2 10\r\n\r\nOutput:\r\n\r\ndp[0] = {  0}\r\ndp[1] = {  0, -10}\r\ndp[2] = {  0,  -5, -15}\r\ndp[3] = {  0,  -4,  -9, -19}\r\ndp[4] = {  3,  -2,  -9, -16, -26}\r\ndp[5] = {  7,   0,  -7, -16, -25, -35}\r\ndp[6] = { 12,   5,  -4, -13, -23, -35, -47}\r\ndp[7] = { 12,   6,  -1, -10, -19, -29, -41, -53}\r\ndp[8] = { 12,  10,   4,  -3, -12, -21, -31, -43, -55}\r\ndp[9] = { 20,  14,   7,  -2, -11, -21, -31, -41, -53, -65}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, the DP values look quite special! Specifically, let"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif[i][j]=dp[i][j]-dp[i][j+1]\\ge 0."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif[i][j]\\le dif[i][j+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 6
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j\\ge 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 41
      }, this), ". In other words, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 67
      }, this), " as\r\na function of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 15
      }, this), " is ", _jsxDEV(_components.strong, {
        children: "concave down"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-full-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-full-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Full Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll process the shares in order. Suppose that we are currently considering the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), "-th day, where shares are worth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 36
      }, this), ". We can replace (buy or sell a share)\r\nin the statement with (buy, then sell somewhere between 0 and 2 shares)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If we currently have ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 118,
            columnNumber: 24
          }, this), " shares and overall balance ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "b"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 118,
            columnNumber: 55
          }, this), ", then after buying,\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 119,
            columnNumber: 3
          }, this), " increases by one and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "b"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 119,
            columnNumber: 28
          }, this), " decreases by ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "p_i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 119,
            columnNumber: 45
          }, this), ". So we set\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i][j]=dp[i-1][j-1]-p_i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 120,
            columnNumber: 3
          }, this), " for all ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 120,
            columnNumber: 39
          }, this), ". Note that the differences between\r\nevery two consecutive elements of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 121,
            columnNumber: 37
          }, this), " have not changed."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 118,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If we choose to sell a share, this is equivalent to setting\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i][j]=\\max(dp[i][j],dp[i][j+1]+p_i)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 124,
            columnNumber: 3
          }, this), " for all ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 124,
            columnNumber: 52
          }, this), " at the same time. By the\r\nconcavity condition, ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i][j]=dp[i][j+1]+p_i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 125,
            columnNumber: 24
          }, this), " will hold for all ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 125,
            columnNumber: 68
          }, this), " less than\r\na certain threshold while ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i][j]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 126,
            columnNumber: 29
          }, this), " will remain unchanged for all others. So\r\nthis is equivalent to inserting ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "p_i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 127,
            columnNumber: 35
          }, this), " into the list of differences while\r\nmaintaining the condition that the differences are in sorted order."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["So choosing to sell between 0 and 2 shares is represented by adding ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "p_i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 130,
            columnNumber: 71
          }, this), " to\r\nthe list of differences two times. After that, we should pop the smallest\r\ndifference in the list because we can't end up with a negative amount of\r\nshares."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The implementation is quite simple; maintain a priority queue representing\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 1
      }, this), " that allows you to pop the minimum element. After adding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 67
      }, this), " elements,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 1
      }, this), " stores the current value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 35
      }, this), ". At the end, you add all the\r\ndifferences in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif[N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 213,
        columnNumber: 16
      }, this), " to go from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[N][N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 213,
        columnNumber: 36
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[N][0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 213,
        columnNumber: 50
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint N;\r\n\tcin >> N;\r\n\tpriority_queue<int, vector<int>, greater<int>> pq;\r\n\tlong long ans = 0;\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tint p;\r\n\t\tcin >> p;\r\n\t\tans -= p;\r\n\t\tpq.push(p);\r\n\t\tpq.push(p);\r\n\t\tpq.pop();\r\n\t}\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tans += pq.top();\r\n\t\tpq.pop();\r\n\t}\r\n\tcout << ans << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 215,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-extension",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-extension",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Extension"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 240,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.em, {
        children: "Stock Trading (USACO Camp)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 1
      }, this), ": What if your amount of shares can go negative, but\r\nyou can never have more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 243,
        columnNumber: 30
      }, this), " shares or less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 243,
        columnNumber: 54
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-potatoes--fertilizers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-potatoes--fertilizers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Potatoes & Fertilizers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 245,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-simplifying-the-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-simplifying-the-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Simplifying the Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of saying that moving fertilizer from segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 55
      }, this), " to segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 70
      }, this), " costs\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|i-j|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 1
      }, this), ", we'll say that it costs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 34
      }, this), " to move fertilizer from a segment to an\r\nadjacent segment."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1,a_2,\\ldots,a_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 19
      }, this), " after all the transfers be\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1',a_2',\\ldots,a_N'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 1
      }, this), ". If we know this final sequence, how much did the\r\ntransfers cost (in the best case scenario)? It turns out that this is just"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 255,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "C=\\sum_{i=1}^{N-1}\\left|\\sum_{j=1}^i(a_j-a_j')\\right|."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can show that this is a lower bound and that it's attainable. The term\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D=\\sum_{j=1}^i(a_j-a_j')"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 1
      }, this), " denotes the number of units of fertilizer that move\r\nfrom segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 14
      }, this), " to segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 29
      }, this), ". Namely, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 47
      }, this), " is positive then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 68
      }, this), " units of\r\nfertilizer moved from segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 31
      }, this), " to segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 46
      }, this), "; otherwise, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 64
      }, this), " units of\r\nfertilizer moved in the opposite direction. Note that it is never optimal to\r\nhave fertilizer moving in both directions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif_i=a_i-b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 5
      }, this), " and define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_j=\\sum_{i=1}^jdif_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 32
      }, this), " for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le j\\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 65
      }, this), ".\r\nSimilarly, define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif_i'=a_i'-b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 19
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_j'=\\sum_{i=1}^jdif_i'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 41
      }, this), ". Since we want\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif_i'\\ge 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 23
      }, this), ", we should have\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_0=d_0'\\le d_1'\\le \\cdots\\le d_N'=d_N."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 1
      }, this), " Conversely, every sequence\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(d_0',d_1',\\ldots,d_N')"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 1
      }, this), " that satisfies this property corresponds to a valid\r\nway to assign values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a_1',a_2',\\ldots,a_N')"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 275,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now you can verify that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C=\\sum_{i=1}^{N-1}|d_i-d_i'|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 25
      }, this), ". This makes sense since\r\nmoving one unit of fertilizer one position is equivalent to changing one of the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 1
      }, this), " by one (although ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_0,d_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 24
      }, this), " always remain the same)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 277,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-slow-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 281,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le i\\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 10
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le j\\le d_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 28
      }, this), ", let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 49
      }, this), " be the minimum cost\r\nto determine ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_0',d_1',\\ldots,d_i'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 14
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_i'\\le j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 48
      }, this), ". Note that by\r\ndefinition, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]\\ge dp[i][j+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 285,
        columnNumber: 13
      }, this), ". We can easily calculate these values in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\cdot d_N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 286,
        columnNumber: 1
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 283,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-full-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-full-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Full Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 288,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similar to before, this DP is concave up for a fixed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 290,
        columnNumber: 54
      }, this), "! Given a piecewise\r\nlinear function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_i(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 291,
        columnNumber: 17
      }, this), " that takes as input ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 291,
        columnNumber: 46
      }, this), " and outputs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 291,
        columnNumber: 62
      }, this), ", we need\r\nto support the following two operations to transform this function into\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_{i+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 290,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "|x-k|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 295,
          columnNumber: 7
        }, this), " to the function for some ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 295,
          columnNumber: 40
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 295,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Set ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(x)=\\min(f(x),f(x-1))"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 296,
          columnNumber: 7
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 296,
          columnNumber: 40
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 296,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 295,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Again, these can be done with a priority queue. Instead of storing the\r\nconsecutive differences, we store the points where the slope of the piecewise\r\nlinear function changes by one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 298,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The first operation corresponds to inserting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 302,
          columnNumber: 48
        }, this), " into the priority queue two\r\ntimes because the slope increases by two at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x=k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 303,
          columnNumber: 47
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 302,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The latter operation just corresponds to removing the greatest element of the\r\npriority queue."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 304,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 23
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\ntypedef long long ll;\r\n\r\nint N;\r\nll fst = 0;                 // value of DP function at 0\r\npriority_queue<ll> points;  // points where DP function changes slope\r\n\r\nint main() {\r\n\tcin >> N;\r\n\tvector<ll> dif(N + 1);\r\n\tfor (int i = 1; i <= N; ++i) {\r\n\t\tint a, b;\r\n\t\tcin >> a >> b;\r\n\t\tdif[i] = a - b + dif[i - 1];\r\n\t}\r\n\tassert(dif[N] >= 0);  // assume solution exists\r\n\tfor (int i = 1; i < N; ++i) {\r\n\t\tif (dif[i] < 0) fst -= dif[i], dif[i] = 0;\r\n\t\tfst += dif[i];\r\n\t\tpoints.push(dif[i]);\r\n\t\tpoints.push(dif[i]);\r\n\t\tpoints.pop();\r\n\t}\r\n\twhile (points.size()) {\r\n\t\tll a = points.top();\r\n\t\tpoints.pop();\r\n\t\tfst -= min(a, dif[N]);\r\n\t}\r\n\tcout << fst << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-usaco-landscaping",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-usaco-landscaping",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "USACO Landscaping"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 344,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This looks similar to the previous task (we're moving dirt instead of\r\nfertilizer), so it's not too hard to guess that slope trick is applicable."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 348,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-slow-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 351,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 353,
        columnNumber: 5
      }, this), " equal the minimum cost to move dirt around the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 353,
        columnNumber: 69
      }, this), "\r\nflowerbeds such that the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 354,
        columnNumber: 32
      }, this), " flowerbeds all have the correct amount of\r\ndirt while the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 355,
        columnNumber: 16
      }, this), "-th flowerbed has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 355,
        columnNumber: 37
      }, this), " extra units of dirt (or lacks ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 355,
        columnNumber: 71
      }, this), " units\r\nof dirt if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 356,
        columnNumber: 12
      }, this), " is negative). The answer will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[N][0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 356,
        columnNumber: 49
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 353,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-full-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-full-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Full Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 358,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This DP is concave up for any fixed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 360,
        columnNumber: 37
      }, this), ". To get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 360,
        columnNumber: 49
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 360,
        columnNumber: 64
      }, this), " we must\r\nbe able to support the following operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 360,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Shift the DP curve ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 363,
          columnNumber: 22
        }, this), " units to the right."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 363,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Shift the DP curve ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 364,
          columnNumber: 22
        }, this), " units to the left."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 364,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Z\\cdot |j|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 365,
          columnNumber: 7
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "DP[j]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 365,
          columnNumber: 23
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 365,
          columnNumber: 39
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 365,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Set ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "DP[j] = \\min(DP[j],DP[j-1]+X)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 366,
          columnNumber: 7
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "DP[j] = \\min(DP[j],DP[j+1]+Y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 366,
          columnNumber: 43
        }, this), " for\r\nall ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 367,
          columnNumber: 7
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 366,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 363,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As before, it helps to look at the differences ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif[j]=DP[j+1]-DP[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 369,
        columnNumber: 48
      }, this), " instead.\r\nWe'll maintain separate deques for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 36
      }, this), " depending on whether ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 63
      }, this), " or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j\\ge 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 371,
        columnNumber: 1
      }, this), ". We'll call these the left and right deques, respectively."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 369,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "The first two operations correspond to repeatedly popping the last element off\r\nof the left deque and adding it to the front of the right deque (or vice\r\nversa, depending on the direction of the shift)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 373,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The third operation corresponds to subtracting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Z"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 376,
          columnNumber: 50
        }, this), " from all elements of the\r\nleft deque and adding ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Z"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 377,
          columnNumber: 25
        }, this), " to all elements of the right deque."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 376,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The last operation corresponds to setting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dif[j]=\\max(dif[j],-Y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 378,
          columnNumber: 45
        }, this), " for all\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j < 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 379,
          columnNumber: 3
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dif[j] = \\min(dif[j],X)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 379,
          columnNumber: 15
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j\\ge 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 379,
          columnNumber: 49
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 378,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 373,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can implement the last operation by updating all of the differences in the\r\ndeques \"lazily.\" This solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sum A_i+\\sum B_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 382,
        columnNumber: 40
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 381,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n\r\nusing namespace std;\r\n\r\nint N, X, Y, Z;\r\nint difl, difr;  // \"lazy\" update\r\ndeque<int> L, R;\r\nlong long ans;\r\n\r\nvoid rig() {  // shift right A, so origin moves left\r\n\tif (L.size() == 0) L.push_back(-Y - difl);\r\n\tint t = L.back() + difl;\r\n\tL.pop_back();\r\n\tt = max(t, -Y);\r\n\tans -= t;\r\n\tR.push_front(t - difr);\r\n}\r\n\r\nvoid lef() {  // shift left B, so origin moves right\r\n\tif (R.size() == 0) R.push_front(X - difr);\r\n\tint t = R.front() + difr;\r\n\tR.pop_front();\r\n\tt = min(t, X);\r\n\tans += t;\r\n\tL.push_back(t - difl);\r\n}\r\n\r\nint main() {\r\n\tfreopen(\"landscape.in\", \"r\", stdin);\r\n\tfreopen(\"landscape.out\", \"w\", stdout);\r\n\tcin >> N >> X >> Y >> Z;\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tint A, B;\r\n\t\tcin >> A >> B;\r\n\t\tfor (int j = 0; j < A; ++j)\r\n\t\t\trig();  // or we can just do |A-B| shifts in one direction\r\n\t\tfor (int j = 0; j < B; ++j) lef();\r\n\t\tdifl -= Z,\r\n\t\t    difr += Z;  // adjust slopes differently for left and right of j=0\r\n\t}\r\n\tcout << ans << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 384,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-extension-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-extension-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Extension"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 429,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can solve this problem when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum A_i+\\sum B_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 431,
        columnNumber: 32
      }, this), " is not so small by\r\nmaintaining a map from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 432,
        columnNumber: 24
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dif[j+1]-dif[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 432,
        columnNumber: 31
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 432,
        columnNumber: 57
      }, this), " such that the latter\r\nquantity is nonzero. Then the operation \"add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Z\\cdot |j|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 433,
        columnNumber: 46
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "DP[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 433,
        columnNumber: 62
      }, this), " for all\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 434,
        columnNumber: 1
      }, this), "\" corresponds to a point update in the map (", _jsxDEV(_components.code, {
        children: "advance()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 434,
        columnNumber: 48
      }, this), " in the code below)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 431,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Code from Alex Wei."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 436,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\ntypedef long long ll;\r\n\r\nconst ll INF = 1LL << 60;\r\n\r\nifstream fin(\"landscape.in\");\r\nofstream fout(\"landscape.out\");\r\n\r\nconst int MAXN = 100005;\r\nll N, X, Y, Z, A, B;\r\nll ls, rs, lv, zp;\r\nmap<ll, ll> M;\r\n\r\nvoid fix_left(ll s) {\r\n\tif (ls >= s) return;\r\n\tauto it = M.begin();\r\n\twhile (ls + it->second <= s) {\r\n\t\tls += it->second;\r\n\t\tlv += ls * (next(it)->first - it->first);\r\n\t\tM.erase(it++);\r\n\t}\r\n\tit->second -= s - ls;\r\n\tls = s;\r\n}\r\n\r\nvoid fix_right(ll s) {\r\n\tif (rs <= s) return;\r\n\tauto it = --M.end();\r\n\twhile (rs - it->second >= s) {\r\n\t\trs -= it->second;\r\n\t\tM.erase(it--);\r\n\t}\r\n\tit->second += s - rs;\r\n\trs = s;\r\n}\r\n\r\nvoid advance() {\r\n\tll lo = M.begin()->first;\r\n\tif (zp < lo) lv += ls * (zp - lo);\r\n\telse lv += Z * (zp - lo);\r\n\tls -= Z, rs += Z;\r\n\tM[zp] += 2 * Z;\r\n}\r\n\r\nint main() {\r\n\tfin >> N >> X >> Y >> Z;\r\n\tls = -INF, rs = INF;\r\n\tM[0] = 2 * INF;\r\n\tfor (int i = 0; i < N; i++) {\r\n\t\tfin >> A >> B;\r\n\t\tzp += B - A;\r\n\t\tfix_left(-Y);\r\n\t\tfix_right(X);\r\n\t\tadvance();\r\n\t}\r\n\tll res = lv, s = ls;\r\n\tfor (auto it = M.begin(); it->first < zp; it++) {\r\n\t\ts += it->second;\r\n\t\tres += s * (next(it)->first - it->first);\r\n\t}\r\n\tfout << res << '\\n';\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 438,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 438,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 505,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Although we haven't provided any examples of this, some of the problems below\r\nwill require you to merge two slope containers (usually priority queues)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 507,
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
