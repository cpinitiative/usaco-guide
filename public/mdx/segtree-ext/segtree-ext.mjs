"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      id: "user-content-walking-on-a-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-walking-on-a-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Walking on a Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You want to support queries of the following form on an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1,\\ldots,a_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 63
      }, this), "\r\n(along with point updates)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Find the first ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 18
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i\\ge x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 32
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Of course, you can do this in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 31
      }, this), " time with a max segment\r\ntree and binary searching on the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 40
      }, this), " such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(a_1,\\ldots,a_i)\\ge x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), ". But try to do this in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 52
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---hotel-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---hotel-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Hotel Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead of binary searching and querying the segment tree separately, let's do\r\nthem together!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Assume that you know that the answer is in some range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 55
      }, this), ". Let\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "mid = \\left \\lfloor{\\frac{l + r}{2}}\\right \\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(a_l, \\dots, a_{mid}) \\geq x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 4
      }, this), ", then we know that the answer is in the\r\nrange ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, mid]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 7
      }, this), ". Otherwise, the answer is in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[mid + 1, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 57
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Imagine that the segment tree is a decision tree. We start at the root and move\r\ndown. When we're at some node that contains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(a_l, \\dots, a_r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 45
      }, this), " and we know\r\nthat the answer is in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 33
      }, this), ", we move to the left child if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(a_l, \\dots, a_{mid}) \\geq x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "; otherwise, we move to the right child."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is convenient because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(a_l, \\dots, a_{mid})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 28
      }, this), " is already stored in the\r\nleft child, so we can find it in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 34
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---ordered-set",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---ordered-set",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Ordered Set"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, we coordinate compress all the values, and keep track of the frequency of each value in the array we build our segment tree on.\r\nWe can answer the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{INSERT}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 1
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{DELETE}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 20
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{COUNT}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 43
      }, this), " queries using\r\nthe sum segment tree from the ", _jsxDEV(_components.a, {
        href: "/gold/PURS",
        children: "PURS"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 31
      }, this), " module. Answering the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{K-TH}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 1
      }, this), " queries in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 28
      }, this), " time requires us to use\r\nsegment tree walking."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{freq}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 5
      }, this), " equal the number of times ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 50
      }, this), " occurs in our set.\r\nIn our array of coordinate compressed values, we want to find the first\r\nindex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 7
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=0}^{x} \\texttt{freq}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 21
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\geq K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 58
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the previous problem, we were walking on the prefix maximum of our array. Here, we are walking on the prefix sum of our array. The difference here is that if we know our answer is in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 187
      }, this), ", then\r\nchecking the maximum in our left and right children is enough to know if we\r\nshould walk left or right. But with sum, we also need to consider the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, l)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 77
      }, this), " and how it might affect our answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To keep track of the prefix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, l)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 29
      }, this), ", we first set our prefix result to be a neutral value. By neutral value, we mean the identity of the operation (for addition it's 0, for multiplication it's 1, etc.).\r\nEvery time we walk right, we add the left child's value to our prefix result."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 196,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q\\log{Q})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 199,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 433,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-non-commutative-combiner-functions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-non-commutative-combiner-functions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Non-Commutative Combiner Functions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 437,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Previously, we only considered commutative operations like ", _jsxDEV(_components.code, {
        children: "+"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 439,
        columnNumber: 60
      }, this), " and ", _jsxDEV(_components.code, {
        children: "max"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 439,
        columnNumber: 68
      }, this), ".\r\nHowever, segment trees allow you to answer range queries for any associative\r\noperation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 439,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---point-set-range-composite",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---point-set-range-composite",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Point Set Range Composite"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 447,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The segment tree from the prerequisite module should suffice. You can also use\r\ntwo BITs as described\r\n", _jsxDEV(_components.a, {
        href: "https://ioinformatics.org/journal/v9_2015_39_44.pdf",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 451,
        columnNumber: 1
      }, this), ", although it's more\r\ncomplicated."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 449,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using T = AR<mi, 2>;\r\nT comb(const T &a, const T &b) { return {a[0] * b[0], a[1] * b[0] + b[1]}; }\r\n\r\ntemplate <class T> struct BIT {\r\n\tconst T ID = {1, 0};\r\n\tint SZ = 1;\r\n\tV<T> x, bit[2];\r\n\tvoid init(int N) {\r\n\t\twhile (SZ <= N) SZ *= 2;\r\n\t\tx = V<T>(SZ + 1, ID);\r\n\t\tF0R(i, 2) bit[i] = x;\r\n\t\tFOR(i, 1, N + 1) re(x[i]);\r\n\t\tbuild();\r\n\t}\r\n\tvoid build() {\r\n\t\tFOR(i, 1, SZ) {\r\n\t\t\tbit[0][i] = comb(bit[0][i], x[i]);\r\n\t\t\tint j = i + (i & -i);\r\n\t\t\tassert(j <= SZ);\r\n\t\t\tbit[0][j] = comb(bit[0][j], bit[0][i]);\r\n\t\t}\r\n\t\tROF(i, 1, SZ) {\r\n\t\t\tbit[1][i] = comb(x[i], bit[1][i]);\r\n\t\t\tint j = i - (i & -i);\r\n\t\t\tbit[1][j] = comb(bit[1][i], bit[1][j]);\r\n\t\t}\r\n\t}\r\n\tvoid upd0(int p) {\r\n\t\tT lans = ID, rans = ID;\r\n\t\tfor (int P = p, lo = p - 1, hi = p + 1; P < SZ; P += P & -P) {\r\n\t\t\tfor (; hi < P; hi += hi & -hi) rans = comb(rans, bit[1][hi]);\r\n\t\t\tfor (; lo > P - (P & -P); lo -= lo & -lo) lans = comb(bit[0][lo], lans);\r\n\t\t\tassert(lo == P - (P & -P));\r\n\t\t\tbit[0][P] = comb(lans, x[p]);\r\n\t\t\tif (p != P) bit[0][P] = comb(bit[0][P], comb(rans, x[P]));\r\n\t\t}\r\n\t}\r\n\tvoid upd1(int p) {\r\n\t\tT lans = ID, rans = ID;\r\n\t\tfor (int P = p, lo = p - 1, hi = p + 1; P; P -= P & -P) {\r\n\t\t\tfor (; hi < P + (P & -P); hi += hi & -hi) rans = comb(rans, bit[1][hi]);\r\n\t\t\tfor (; lo > P; lo -= lo & -lo) lans = comb(bit[0][lo], lans);\r\n\t\t\tassert(hi == P + (P & -P));\r\n\t\t\tbit[1][P] = comb(x[p], rans);\r\n\t\t\tif (p != P) bit[1][P] = comb(comb(x[P], lans), bit[1][P]);\r\n\t\t}\r\n\t}\r\n\tvoid upd(int p, T u) {\r\n\t\tassert(0 < p && p < SZ);\r\n\t\tx[p] = u;\r\n\t\tupd0(p);\r\n\t\tupd1(p);\r\n\t}\r\n\tT query(int a, int b) {\r\n\t\tassert(0 < a && a <= b && b < SZ);\r\n\t\tT lans = ID, rans = ID;\r\n\t\tfor (int A; (A = a + (a & -a)) <= b; a = A) lans = comb(lans, bit[1][a]);\r\n\t\tfor (int B; (B = b - (b & -b)) >= a; b = B) rans = comb(bit[0][b], rans);\r\n\t\tassert(a == b);\r\n\t\treturn comb(comb(lans, x[a]), rans);\r\n\t}\r\n};\r\n\r\nBIT<T> B;\r\nint N, Q;\r\n\r\nint main() {\r\n\tsetIO();\r\n\tre(N, Q);\r\n\tB.init(N);\r\n\tF0R(i, Q) {\r\n\t\tint t, p, c, d;\r\n\t\tre(t, p, c, d);\r\n\t\t++p;\r\n\t\tif (t == 0) {\r\n\t\t\tB.upd(p, {c, d});\r\n\t\t} else {\r\n\t\t\tT res = B.query(p, c);\r\n\t\t\tps(res[0] * d + res[1]);\r\n\t\t}\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 454,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 454,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---subarray-sum-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---subarray-sum-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Subarray Sum Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 539,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Hint: In each node of the segment tree, you'll need to store four pieces of\r\ninformation."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 541,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In each node of the segment tree that stores information about the range\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 545,
        columnNumber: 1
      }, this), " we store the following information:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 544,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The maximum subarray sum in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 547,
          columnNumber: 41
        }, this), ". (Let this be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "G"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 547,
          columnNumber: 64
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 547,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The maximum subarray sum in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 548,
          columnNumber: 41
        }, this), " if it must contain ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_l"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 548,
          columnNumber: 69
        }, this), ". (Let\r\nthis be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 549,
          columnNumber: 11
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 548,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The maximum subarray sum in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 550,
          columnNumber: 41
        }, this), " if it must contain ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 550,
          columnNumber: 69
        }, this), ". (Let\r\nthis be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "R"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 551,
          columnNumber: 11
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The total sum of the range. (Let this be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 552,
          columnNumber: 44
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 552,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 547,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we combine two nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 554,
        columnNumber: 27
      }, this), " (left child) and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 554,
        columnNumber: 48
      }, this), " (right child) to make node\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 555,
        columnNumber: 1
      }, this), ","]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 554,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "w.G = \\max(u.G, v.G, u.R + v.L)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 557,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 557,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "w.L = \\max(u.L, u.S + v.L)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 558,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 558,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "w.R = \\max(u.R + v.S, v.R)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 559,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 559,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "w.S = u.S + v.S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 560,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 560,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 557,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can thus handle updates and queries efficiently."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 562,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nconst ll MAXN = 200001;\r\n\r\nstruct Node {\r\n\tll g_max, l_max, r_max, sum;\r\n\tNode operator+(Node b) {\r\n\t\treturn {max(max(g_max, b.g_max), r_max + b.l_max), max(l_max, sum + b.l_max),\r\n\t\t        max(b.r_max, r_max + b.sum), sum + b.sum};\r\n\t}\r\n};\r\n\r\nll n, a[MAXN];\r\nNode segtree[4 * MAXN];\r\n\r\nvoid build(ll l = 1, ll r = n, ll node = 1) {\r\n\tif (l == r) segtree[node] = {max(0ll, a[l]), max(0ll, a[l]), max(0ll, a[l]), a[l]};\r\n\telse {\r\n\t\tll mid = (l + r) / 2;\r\n\t\tbuild(l, mid, node * 2);\r\n\t\tbuild(mid + 1, r, node * 2 + 1);\r\n\t\tsegtree[node] = segtree[node * 2] + segtree[node * 2 + 1];\r\n\t}\r\n}\r\nvoid update(ll pos, ll val, ll l = 1, ll r = n, ll node = 1) {\r\n\tif (l == r) segtree[node] = {max(0ll, val), max(0ll, val), max(0ll, val), val};\r\n\telse {\r\n\t\tll mid = (l + r) / 2;\r\n\t\tif (pos > mid) update(pos, val, mid + 1, r, node * 2 + 1);\r\n\t\telse update(pos, val, l, mid, node * 2);\r\n\t\tsegtree[node] = segtree[node * 2] + segtree[node * 2 + 1];\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tiostream::sync_with_stdio(false);\r\n\tcin.tie(0);\r\n\tll q;\r\n\tcin >> n >> q;\r\n\tfor (int i = 1; i <= n; i++) cin >> a[i];\r\n\tbuild();\r\n\r\n\twhile (q--) {\r\n\t\tll x, y;\r\n\t\tcin >> x >> y;\r\n\t\tupdate(x, y);\r\n\t\tcout << segtree[1].g_max << '\\n';\r\n\t}\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 564,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 564,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 619,
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
