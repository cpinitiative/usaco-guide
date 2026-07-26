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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-static-array-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-static-array-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Static Array Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Given a static array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[1],A[2],\\ldots,A[N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this), ", you want to answer queries in the\r\nform"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[l]\\ominus A[l+1]\\ominus \\cdots \\ominus A[r]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ominus"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 7
      }, this), " denotes an associative operation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In a ", _jsxDEV(_components.a, {
        href: "/gold/tree-euler#sparse-tables",
        children: "previous module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 6
      }, this), ", it was shown that we can\r\nget ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 5
      }, this), " time queries with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 40
      }, this), " time preprocessing\r\nwhen ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ominus"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 6
      }, this), " denotes ", _jsxDEV(_components.code, {
        children: "min"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 24
      }, this), ". But how do we generalize to other associative\r\noperations?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use ", _jsxDEV(_components.strong, {
        children: "divide & conquer"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 12
      }, this), " to answer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 43
      }, this), " queries offline in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), " time or online in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N+Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 46
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-offline-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-offline-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Offline Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that all queries satisfy ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L\\le l\\le r\\le R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 34
      }, this), " (initially, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 65
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R=N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "). Letting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M=\\left\\lfloor \\frac{L+R}{2}\\right\\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 17
      }, this), ", we can compute"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "lef[l]=A[l]\\ominus A[l+1]\\ominus \\cdots \\ominus A[M]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L\\le l\\le M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 9
      }, this), " and"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "rig[r]=A[M+1]\\ominus A[M+2] \\ominus \\cdots\\ominus A[r]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M< r\\le R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 10
      }, this), ". Then the answer for all queries satisfying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l\\le M< r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 66
      }, this), " is\r\nsimply ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lef[l]\\ominus rig[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 8
      }, this), " due to the associativity condition. After that, we\r\nrecurse on all query intervals completely contained within ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L,M]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 60
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[M+1,R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 72
      }, this), "\r\nindependently."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The code below should work if ", _jsxDEV(_components.code, {
        children: "min"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 31
      }, this), " is replaced by ", _jsxDEV(_components.strong, {
        children: "any"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 52
      }, this), " associative\r\noperation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---rmq",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---rmq",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - RMQ"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstatic const int MAXN = 200000 + 5;\r\n\r\nint n, q, A[MAXN], B[MAXN];\r\nvector<int> x, ans;\r\nint lef[MAXN], rig[MAXN];\r\n\r\nvoid divi(int l, int r, vector<int> v) {\r\n\tif (v.size() == 0) return;\r\n\r\n\tif (l == r) {\r\n\t\tfor (int _ : v) ans[_] = x[l];\r\n\t\treturn;\r\n\t}\r\n\r\n\tint m = (l + r) / 2;\r\n\r\n\tlef[m] = x[m];\r\n\tfor (int i = m - 1; i >= l; i--) lef[i] = min(x[i], lef[i + 1]);\r\n\r\n\trig[m + 1] = x[m + 1];\r\n\tfor (int i = m + 2; i < r + 1; i++) rig[i] = min(rig[i - 1], x[i]);\r\n\r\n\tvector<int> todo[2];\r\n\tfor (int t : v) {\r\n\t\tint a = A[t], b = B[t];\r\n\t\tif (a <= m && m < b) {  // we can answer the query immediately\r\n\t\t\tans[t] = min(min(lef[a], x[m]), rig[b]);\r\n\t\t\tcontinue;\r\n\t\t}\r\n\t\t// otherwise\r\n\t\t// either [a,b] is contained within [l,m]   -> it's placed into todo[0]\r\n\t\t// or     [a,b] is contained within [m+1,r] -> it's placed into todo[1]\r\n\t\ttodo[a > m].push_back(t);\r\n\t}\r\n\r\n\tdivi(l, m, todo[0]);\r\n\tdivi(m + 1, r, todo[1]);\r\n}\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tcin >> n >> q;\r\n\r\n\tx.resize(n);\r\n\tfor (int i = 0; i < n; i++) cin >> x[i];\r\n\r\n\tfor (int i = 0; i < q; i++) {\r\n\t\tcin >> A[i] >> B[i];\r\n\t\tA[i]--, B[i]--;\r\n\t}\r\n\r\n\tvector<int> query(q);\r\n\tiota(query.begin(), query.end(), 0);\r\n\r\n\tans.resize(q);\r\n\r\n\tdivi(0, n - 1, query);\r\n\r\n\tfor (int i = 0; i < q; i++) cout << ans[i] << '\\n';\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-online-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-online-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Online Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We do the same thing as above, except we store all computes values of ", _jsxDEV(_components.code, {
        children: "lef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 71
      }, this), " and\r\n", _jsxDEV(_components.code, {
        children: "rig"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 1
      }, this), " within a 2D array using ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 31
      }, this), " memory, similarly as sparse\r\ntable."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---rmq-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---rmq-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - RMQ"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the code below, ", _jsxDEV(_components.code, {
        children: "dat"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 20
      }, this), " performs the roles that both ", _jsxDEV(_components.code, {
        children: "lef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 55
      }, this), " and ", _jsxDEV(_components.code, {
        children: "rig"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 65
      }, this), " do in the\r\nprevious solution. Let ", _jsxDEV(_components.code, {
        children: "comb(l,r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 24
      }, this), " equal\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[l]\\ominus A[l+1]\\ominus \\cdots \\ominus A[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 1
      }, this), ". For example, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n=20"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 66
      }, this), " and we\r\nonly consider levels ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 22
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 30
      }, this), " then we get"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "dat[0][i]=comb(i,9)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 146,
          columnNumber: 3
        }, this), " for ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 146,
          columnNumber: 29
        }, this), " in ", _jsxDEV(_components.code, {
          children: "[0,9]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 146,
          columnNumber: 36
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "dat[0][i]=comb(10,i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 3
        }, this), " for ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 30
        }, this), " in ", _jsxDEV(_components.code, {
          children: "[10,19]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 37
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "dat[1][i]=comb(i,4)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 148,
          columnNumber: 3
        }, this), " for ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 148,
          columnNumber: 29
        }, this), " in ", _jsxDEV(_components.code, {
          children: "[0,4]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 148,
          columnNumber: 36
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "dat[1][i]=comb(5,i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 149,
          columnNumber: 3
        }, this), " for ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 149,
          columnNumber: 29
        }, this), " in ", _jsxDEV(_components.code, {
          children: "[5,9]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 149,
          columnNumber: 36
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "dat[1][i]=comb(i,14)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 150,
          columnNumber: 3
        }, this), " for ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 150,
          columnNumber: 30
        }, this), " in ", _jsxDEV(_components.code, {
          children: "[10,14]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 150,
          columnNumber: 37
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "dat[1][i]=comb(15,i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 151,
          columnNumber: 3
        }, this), " for ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 151,
          columnNumber: 30
        }, this), " in ", _jsxDEV(_components.code, {
          children: "[15,19]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 151,
          columnNumber: 37
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "mask[0..4]=0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 152,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "mask[5..9]=2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 153,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 153,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "mask[10..14]=1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "mask[15..19]=3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 146,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Examples of queries:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 157,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["To query ", _jsxDEV(_components.code, {
          children: "comb(0,16)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 159,
          columnNumber: 12
        }, this), " we first count the number of trailing zeroes in\r\n", _jsxDEV(_components.code, {
          children: "mask[0]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 3
        }, this), " XOR ", _jsxDEV(_components.code, {
          children: "mask[16]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 17
        }, this), ", which is ", _jsxDEV(_components.code, {
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 38
        }, this), ". So our answer is\r\n", _jsxDEV(_components.code, {
          children: "min(dat[0][0],dat[0][16])"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 161,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["To query ", _jsxDEV(_components.code, {
          children: "comb(12,18)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 162,
          columnNumber: 12
        }, this), " we first count the number of trailing zeroes in\r\n", _jsxDEV(_components.code, {
          children: "mask[12]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 163,
          columnNumber: 3
        }, this), " XOR ", _jsxDEV(_components.code, {
          children: "mask[18]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 163,
          columnNumber: 18
        }, this), ", which is ", _jsxDEV(_components.code, {
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 163,
          columnNumber: 39
        }, this), ". So our answer is\r\n", _jsxDEV(_components.code, {
          children: "min(dat[1][12],dat[1][18])"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 164,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 162,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstatic const int MAXN = 200000 + 5;\r\n\r\nint n, q;\r\nvector<int> x, ans;\r\n\r\nint dat[18][MAXN];  // 18 = ceil(log2(n))\r\nint mask[MAXN];\r\n\r\nvoid divi(int l, int r, int lev) {  // generate dat and mask\r\n\tif (l == r) return;\r\n\r\n\tint m = (l + r) / 2;\r\n\r\n\tdat[lev][m] = x[m];\r\n\tfor (int i = m - 1; i >= l; i--) dat[lev][i] = min(x[i], dat[lev][i + 1]);\r\n\r\n\tdat[lev][m + 1] = x[m + 1];\r\n\tfor (int i = m + 2; i <= r; i++) dat[lev][i] = min(dat[lev][i - 1], x[i]);\r\n\r\n\tfor (int i = m + 1; i <= r; i++) mask[i] ^= (1 << lev);\r\n\r\n\tdivi(l, m, lev + 1);\r\n\tdivi(m + 1, r, lev + 1);\r\n}\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tcin >> n >> q;\r\n\r\n\tx.resize(n);\r\n\tfor (int i = 0; i < n; i++) cin >> x[i];\r\n\r\n\tdivi(0, n - 1, 0);\r\n\r\n\tfor (int i = 0; i < q; i++) {\r\n\t\tint a, b;\r\n\t\tcin >> a >> b;\r\n\t\ta--, b--;\r\n\r\n\t\tif (a == b) {\r\n\t\t\tcout << x[a] << '\\n';\r\n\t\t} else {  // find level where info is stored\r\n\t\t\t      // ctz gives number of trailing zeroes\r\n\t\t\tint bits = __builtin_ctz(mask[a] ^ mask[b]);\r\n\t\t\tcout << min(dat[bits][a], dat[bits][b]) << '\\n';\r\n\t\t}\r\n\t}\r\n\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 166,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 166,
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
      lineNumber: 234,
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
