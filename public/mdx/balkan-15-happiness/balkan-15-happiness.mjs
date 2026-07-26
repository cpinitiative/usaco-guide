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
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Isn't it convenient how the problem statement tells us what we have to do? (Try\r\nto prove the necessary condition described in the statement yourself.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We need a data structure that supports the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Insert numbers into a multiset ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 34
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Erase numbers from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 22
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Check whether there exists some number ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x < \\sum_{i \\in M} i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 42
        }, this), " such that\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\sum_{i \\in M, i \\leq x}i < x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-1---sparse-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1---sparse-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1 - Sparse Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since we want to handle range queries with updates, the obvious option would be\r\nto use a BIT or segment tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, the numbers that we want to insert can get very large (up to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^{12}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "). Since we have to answer queries online, using a BIT is out of the\r\nquestion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Luckily, we can simply use a sparse segment tree instead!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We still need to find a way to check whether the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 50
      }, this), " described above exists\r\nthough."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The key observation is that if we know that"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\leq \\sum_{i \\in M, i \\leq k}i"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 10
      }, this), ", then we also know that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "l \\leq \\sum_{i \\in M, i \\leq l}i"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l \\in (k, \\sum_{i \\in M, i \\leq k}i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 9
      }, this), ". This is true because"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "l \\leq \\sum_{i \\in M, i \\leq k}i \\leq \\sum_{i \\in M, i \\leq l}i"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that the next number we need to check is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i \\in M, i \\leq k}i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we choose the numbers that we check this way, then we will only check\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log 10^{12})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), " numbers for each query (since the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 63
      }, this), "-th number we\r\ncheck is always at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^i - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 26
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The complexity of this algorithm is thus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KQ \\log^2 10^{12})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 42
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-code",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"happiness.h\"\r\n\r\nstruct Node {\r\n\tlong long l, r, val;\r\n\tNode *lc, *rc;\r\n\r\n\tNode(long long L, long long R) : l(L), r(R), val(0), lc(nullptr), rc(nullptr) {}\r\n\r\n\tvoid update(long long p, long long v) {\r\n\t\tval += v;\r\n\t\tif (l != r) {\r\n\t\t\tlong long mid = (l + r) / 2;\r\n\t\t\tif (p > mid) {\r\n\t\t\t\tif (!rc) rc = new Node(mid + 1, r);\r\n\t\t\t\trc->update(p, v);\r\n\t\t\t} else {\r\n\t\t\t\tif (!lc) lc = new Node(l, mid);\r\n\t\t\t\tlc->update(p, v);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tlong long query(long long a, long long b) {\r\n\t\tif (r < a || l > b) return 0;\r\n\t\tif (r <= b && l >= a) return val;\r\n\t\tlong long ret = 0;\r\n\t\tif (lc) ret += lc->query(a, b);\r\n\t\tif (rc) ret += rc->query(a, b);\r\n\t\treturn ret;\r\n\t}\r\n};\r\n\r\nNode *root;\r\n\r\nbool check() {\r\n\tlong long curr = 1, sm = root->val;\r\n\twhile (curr < sm) {\r\n\t\tlong long t = root->query(1, curr);\r\n\t\tif (t < curr) return false;\r\n\t\tcurr = t + 1;\r\n\t}\r\n\treturn true;\r\n}\r\n\r\nbool init(int coinsCount, long long maxCoinSize, long long coins[]) {\r\n\troot = new Node(1, maxCoinSize);\r\n\tfor (int i = 0; i < coinsCount; i++) root->update(coins[i], coins[i]);\r\n\treturn check();\r\n}\r\n\r\nbool is_happy(int event, int coinsCount, long long coins[]) {\r\n\tfor (int i = 0; i < coinsCount; i++) root->update(coins[i], event * coins[i]);\r\n\treturn check();\r\n}\n"
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
      id: "user-content-solution-2---buckets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2---buckets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2 - Buckets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A smarter solution is to split the elements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 48
      }, this), " into the buckets\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2^i, 2^{i + 1})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), " for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 29
      }, this), " from 0 to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log 10^{12}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 43
      }, this), ". Notice how there are\r\nexactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log 10^{12} + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 9
      }, this), " buckets."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Why is this convenient?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Firstly, only the two least elements in each bucket could potentially be bad\r\n(since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2^k + a) + (2^k + b) \\geq 2^{k + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 8
      }, this), "). This narrows down the number of\r\nelements we need to check significantly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Secondly, we can store the sum of the elements in each bucket and be able to\r\nfind the prefix sums of buckets in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log 10^{12})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 36
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use multisets to store the elements in the buckets, so the complexity of\r\nthis algorithm is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KQ (\\log 10^{12} + \\log KQ))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 19
      }, this), ". In practice, this\r\nsolution runs faster than the first solution."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-code-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 131,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"happiness.h\"\r\n#include <bits/stdc++.h>\r\n\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nmultiset<ll> todo[40];\r\nll SUM[40];\r\n\r\nvoid ad(ll x, int b) {\r\n\tint p = 0;\r\n\twhile ((1LL << (p + 1)) <= x) p++;\r\n\tif (b == 1) {\r\n\t\ttodo[p].insert(x), SUM[p] += x;\r\n\t} else {\r\n\t\ttodo[p].erase(todo[p].find(x)), SUM[p] -= x;\r\n\t}\r\n}\r\n\r\nbool ok() {\r\n\tll sum = 0;\r\n\tfor (int i = 0; i < 40; ++i)\r\n\t\tif (todo[i].size() > 0) {\r\n\t\t\tll x = *begin(todo[i]);\r\n\t\t\tif (sum + 1 < x) return 0;\r\n\t\t\tif (todo[i].size() > 1 && sum + x + 1 < *next(begin(todo[i]))) return 0;\r\n\t\t\tsum += SUM[i];\r\n\t\t}\r\n\treturn 1;\r\n}\r\n\r\nbool init(int coinsCount, long long maxCoinSize, long long coins[]) {\r\n\tfor (int i = 0; i < coinsCount; ++i) ad(coins[i], 1);\r\n\treturn ok();\r\n}\r\n\r\nbool is_happy(int event, int coinsCount, long long coins[]) {\r\n\tfor (int i = 0; i < coinsCount; ++i) {\r\n\t\tif (event == -1) ad(coins[i], -1);\r\n\t\telse ad(coins[i], 1);\r\n\t}\r\n\treturn ok();\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 133,
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
