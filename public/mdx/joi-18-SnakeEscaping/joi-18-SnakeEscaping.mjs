"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["We use SOS DP to compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "super[mask]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 26
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sub[mask]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 44
      }, this), ", which denote\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum\\limits_{mask\\in S} a_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum\\limits_{S\\in mask} a_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 35
      }, this), " respectively."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a query, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 18
      }, this), " be the set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 36
      }, this), "'s, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 43
      }, this), " be the set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 61
      }, this), "'s, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 72
      }, this), " be\r\nthe set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 12
      }, this), "'s. By Pigeonhole principle, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min\\{A,B,C\\}\\le 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 44
      }, this), ", and I claim we\r\ncan answer queries in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(2^{\\min\\{A,B,C\\}})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 23
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If a query has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|C|\\le 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 16
      }, this), ", we can brute force over all the subsets with 0's at A\r\nand 1's at B. Since there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{|C|}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 31
      }, this), " subsets, this takes\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^{|C|})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), " operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Otherwise, we can answer queries with the ", _jsxDEV(_components.strong, {
        children: "principle of inclusion-exclusion"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 43
      }, this), ".\r\nThe answer is simply ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum\\limits_{a\\in A} super[B | a] (-1)^{|a|}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 22
      }, this), ", which we\r\ncan calculate in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^{|A|})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 18
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The answer is also ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum\\limits_{b\\in B} sub[C | b] (-1)^{|B|-|b|}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 20
      }, this), ", which we\r\ncan calculate in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^{|B|})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 18
      }, this), ". They can be computed efficiently with\r\nsubmask enumeration. For a detailed explanation on how submask enumeration\r\nworks, check\r\n", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/algebra/all-submasks.html",
        rel: "nofollow",
        target: "_blank",
        children: "cp-algorithms"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^L\\cdot L+2^{\\frac{L}{3}}Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "super"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 12
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sub"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 24
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^L\\cdot L)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 33
      }, this), " with SOS DP, and we\r\nprocess each query in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O} (2^{\\frac L3})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 23
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-java",
        children: "import java.io.*;\r\nimport java.util.*;\r\n\r\npublic class snake_escaping {\r\n\tstatic class FastReader {\r\n\t\tBufferedReader br;\r\n\t\tStringTokenizer st;\r\n\r\n\t\tpublic FastReader() {\r\n\t\t\tbr = new BufferedReader(new InputStreamReader(System.in));\r\n\t\t}\r\n\r\n\t\tString next() {\r\n\t\t\twhile (st == null || !st.hasMoreElements()) {\r\n\t\t\t\ttry {\r\n\t\t\t\t\tst = new StringTokenizer(br.readLine());\r\n\t\t\t\t} catch (IOException e) { e.printStackTrace(); }\r\n\t\t\t}\r\n\t\t\treturn st.nextToken();\r\n\t\t}\r\n\r\n\t\tint nextInt() { return Integer.parseInt(next()); }\r\n\t}\r\n\r\n\tpublic static class Pair implements Comparable<Pair> {\r\n\t\tint vtx;\r\n\t\tint val;\r\n\t\tpublic Pair(int a, int b) {\r\n\t\t\tthis.vtx = a;\r\n\t\t\tthis.val = b;\r\n\t\t}\r\n\t\tpublic int compareTo(Pair other) {\r\n\t\t\tif (this.val < other.val) return -1;\r\n\t\t\tif (this.val > other.val) return 1;\r\n\t\t\tif (this.vtx < other.vtx) return -1;\r\n\t\t\treturn 1;\r\n\t\t}\r\n\t}\r\n\tstatic int MOD = 998244353;\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tFastReader br = new FastReader();\r\n\t\tint L = br.nextInt();\r\n\t\tint Q = br.nextInt();\r\n\t\tfinal int[] S = new int[1 << L];\r\n\t\tfinal int[] sup = new int[1 << L];\r\n\t\tfinal int[] sub = new int[1 << L];\r\n\t\tfinal int[] btcnt = new int[1 << L];  // Precompute bitcount to speed up\r\n\t\tString s = br.next();\r\n\t\tfor (int i = 0; i < (1 << L); i++) {\r\n\t\t\tS[i] = (int)s.charAt(i) - '0';\r\n\t\t\tsup[i] = sub[i] = S[i];\r\n\t\t\tbtcnt[i] = Integer.bitCount(i);\r\n\t\t}\r\n\t\t// SOS DP!!\r\n\t\tfor (int b = 0; b < L; b++) {\r\n\t\t\tfor (int m = 0; m < (1 << L); m++) {\r\n\t\t\t\tif (((m >>> b) & 1) == 0) {\r\n\t\t\t\t\tsup[m] += sup[m ^ (1 << b)];\r\n\t\t\t\t} else {\r\n\t\t\t\t\tsub[m] += sub[m ^ (1 << b)];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tStringBuilder sb =\r\n\t\t    new StringBuilder();  // I'm using stringbuilder to reduce the\r\n\t\t                          // number of times I print because calling\r\n\t\t                          // System.out.println 10^6 times is slow\r\n\r\n\t\tint A;\r\n\t\tint B;\r\n\t\tint C;\r\n\t\tint ca;\r\n\t\tint cb;\r\n\t\tint cc;\r\n\t\tlong ans;\r\n\t\tfor (int i = 0; i < Q; i++) {\r\n\t\t\ts = br.next();\r\n\t\t\tA = 0;\r\n\t\t\tB = 0;\r\n\t\t\tC = 0;\r\n\t\t\tca = 0;\r\n\t\t\tcb = 0;\r\n\t\t\tcc = 0;\r\n\t\t\tans = 0;\r\n\t\t\tfor (int j = 0; j < L; j++) {\r\n\t\t\t\tif (s.charAt(j) == '0') {\r\n\t\t\t\t\tA |= (1 << (L - j - 1));\r\n\t\t\t\t\tca++;\r\n\t\t\t\t} else if (s.charAt(j) == '1') {\r\n\t\t\t\t\tB |= (1 << (L - j - 1));\r\n\t\t\t\t\tcb++;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tC |= (1 << (L - j - 1));\r\n\t\t\t\t\tcc++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (ca <= cb && ca <= cc) {\r\n\t\t\t\tfor (int m = A; m != 0; m = (m - 1) & A) {\r\n\t\t\t\t\tans += (1 - 2 * ((btcnt[m]) & 1)) * sup[B | m];\r\n\t\t\t\t}\r\n\t\t\t\tans += sup[B];\r\n\t\t\t} else if (cb <= ca && cb <= cc) {\r\n\t\t\t\tfor (int m = B; m != 0; m = (m - 1) & B) {\r\n\r\n\t\t\t\t\tans += (1 - 2 * ((btcnt[m]) & 1)) * sub[C | (B ^ m)];\r\n\t\t\t\t}\r\n\t\t\t\tans += sub[C | B];\r\n\r\n\t\t\t} else {\r\n\t\t\t\tfor (int m = C; m != 0; m = (m - 1) & C) { ans += S[m | B]; }\r\n\r\n\t\t\t\tans += S[B];\r\n\t\t\t}\r\n\t\t\tsb.append(ans).append(\"\\n\");\r\n\t\t\tif ((i & ((1 << 17) - 1)) == 0) {  // sb can have a lot of memory\r\n\t\t\t\tSystem.out.println(sb.toString());\r\n\t\t\t\tsb = new StringBuilder();\r\n\t\t\t}\r\n\t\t}\r\n\t\tSystem.out.println(sb.toString());\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
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
