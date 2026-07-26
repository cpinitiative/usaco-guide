"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    del: "del",
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
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["tl;dr some operations are around 32-64x faster compared to a boolean array. See\r\nthe ", _jsxDEV(_components.a, {
        href: "http://www.cplusplus.com/reference/bitset/bitset/",
        rel: "nofollow",
        target: "_blank",
        children: "C++ Reference"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 5
      }, this), " for the\r\noperations you can perform."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-knapsack",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-knapsack",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Knapsack"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Of course, the first step is to generate the sizes of each connected component."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A naive knapsack solution would be as follows. For each\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le i\\le \\texttt{comps.size()}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 1
      }, this), ", let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 40
      }, this), " if there exists a\r\nsubset of the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 21
      }, this), " components whose sizes sum to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 55
      }, this), ". Then the answer will\r\nbe stored in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 14
      }, this), ". This runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 45
      }, this), " and is too slow\r\nif implemented naively, but we can use bitset to speed it up!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note: you can't store all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 27
      }, this), " bitsets in memory at the same time (more on that\r\nbelow)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-full-solution---school-excursion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-full-solution---school-excursion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Full Solution - School Excursion"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Challenge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 1
      }, this), ": This solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\approx 0.3\\text{s}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 38
      }, this), " when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 65
      }, this), " and\r\nthere are no edges. Find a faster solution which can also be sped up with bitset\r\n(my solution runs in 0.03s)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-cowpatibility-gold",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-cowpatibility-gold",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Cowpatibility (Gold)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 246,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Label the cows from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\ldots N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 21
      }, this), ". For two cows ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 49
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 57
      }, this), " set ", _jsxDEV(_components.code, {
        children: "adj[x][y]=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 65
      }, this), " if\r\nthey share a common flavor. Then the number of pairs of cows that are compatible\r\n(counting each pair where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 27
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 35
      }, this), " are distinct twice) is equal to the sum of\r\n", _jsxDEV(_components.code, {
        children: "adj[x].count()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 1
      }, this), " over all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 27
      }, this), ". It remains to compute ", _jsxDEV(_components.code, {
        children: "adj[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 54
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 71
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Unfortunately, storing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 24
      }, this), " bitsets each with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 46
      }, this), " bits takes up\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{50000^2}{32}\\cdot 4=312.5\\cdot 10^6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 1
      }, this), " bytes of memory, which is greater\r\nthan USACO's ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "256"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 14
      }, this), " megabyte limit. We can reduce the memory usage by half in\r\nexchange for a slight increase in time by first computing the adjacency bitsets\r\nfor all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x\\in [0,N/2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 9
      }, this), ", and then for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x\\in [N/2,N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 42
      }, this), " afterwards."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 255,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, we read in all of the flavors."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 261,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Then for each flavor, we can look at all pairs of cows that share that flavor\r\nand update the adjacency lists for those ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x\\in [0,HALF)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 298,
        columnNumber: 42
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 297,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "adj[i].count()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 1
      }, this), " runs quickly enough since its runtime is divided by the bitset\r\nconstant. However, looping over all cows in ", _jsxDEV(_components.code, {
        children: "flav[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 45
      }, this), " is too slow if say,\r\n", _jsxDEV(_components.code, {
        children: "flav[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 1
      }, this), " contains all cows. Then the nested loop could take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\Theta(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 62
      }, this), " time!\r\nOf course, we can instead write the nested loop in a way that takes advantage of\r\nfast bitset operations once again."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The full main function is as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 339,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Apparently no test case contains more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "25000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 373,
        columnNumber: 44
      }, this), " distinct colors, so we don't\r\nactually need to split the calculation into two halves."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 373,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-lots-of-triangles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lots-of-triangles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lots of Triangles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 376,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["First, we read in the input data. ", _jsxDEV(_components.code, {
        children: "cross(a,b,c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 380,
        columnNumber: 35
      }, this), " is positive iff ", _jsxDEV(_components.code, {
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 380,
        columnNumber: 66
      }, this), " lies to the\r\nleft of the line from ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 381,
        columnNumber: 23
      }, this), " to ", _jsxDEV(_components.code, {
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 381,
        columnNumber: 30
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 380,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["There are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 421,
        columnNumber: 11
      }, this), " possible lots. Trying all possible lots and\r\ncounting the number of trees that lie within each in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 422,
        columnNumber: 54
      }, this), " for a\r\ntotal time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 423,
        columnNumber: 26
      }, this), " should solve somewhere between 2 and\r\n5 test cases. Given a triangle ", _jsxDEV(_components.code, {
        children: "t[0], t[1], t[2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 424,
        columnNumber: 32
      }, this), " with positive area, tree ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 424,
        columnNumber: 76
      }, this), "\r\nlies within it iff ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 20
      }, this), " is to the left of each of sides\r\n", _jsxDEV(_components.code, {
        children: "(t[0],t[1])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 426,
        columnNumber: 1
      }, this), ",", _jsxDEV(_components.code, {
        children: "(t[1],t[2])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 426,
        columnNumber: 15
      }, this), ", and ", _jsxDEV(_components.code, {
        children: "(t[2],t[0])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 426,
        columnNumber: 34
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 421,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The analysis describes how to count the number of trees within a lot in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 459,
        columnNumber: 1
      }, this), ", which is sufficient to solve the problem. However,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 460,
        columnNumber: 1
      }, this), " is actually sufficient as long as we divide by the bitset\r\nconstant. Let ", _jsxDEV(_components.code, {
        children: "b[i][j][k]=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 15
      }, this), " if ", _jsxDEV(_components.code, {
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 33
      }, this), " lies to the left of side ", _jsxDEV(_components.code, {
        children: "(i,j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 62
      }, this), ". Then ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 76
      }, this), "\r\nlies within triangle ", _jsxDEV(_components.code, {
        children: "(t[0],t[1],t[2])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 462,
        columnNumber: 22
      }, this), " as long as\r\n", _jsxDEV(_components.code, {
        children: "b[t[0]][t[1]][x]=b[t[1]][t[2]][x]=b[t[2]][t[0]][x]=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 463,
        columnNumber: 1
      }, this), ". We can count the number\r\nof ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 464,
        columnNumber: 4
      }, this), " such that this holds true by taking the bitwise AND of the bitsets for\r\nall three sides and then counting the number of bits in the result."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 458,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-fast-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-fast-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Fast Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 467,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "bitset<300> b[300][300];\r\n\r\nint main() {\r\n\tinput();\r\n\tfor (int i = 0; i < N; ++i)\r\n\t\tfor (int j = 0; j < N; ++j)\r\n\t\t\tif (j != i)\r\n\t\t\t\tfor (int k = 0; k < N; ++k)\r\n\t\t\t\t\tif (cross(v[i], v[j], v[k]) > 0) b[i][j][k] = 1;\r\n\tvector<int> res(N - 2);\r\n\tfor (int i = 0; i < N; ++i)\r\n\t\tfor (int j = i + 1; j < N; ++j)\r\n\t\t\tfor (int k = j + 1; k < N; ++k) {\r\n\t\t\t\tvector<int> t = {i, j, k};\r\n\t\t\t\tif (cross(v[t[0]], v[t[1]], v[t[2]]) < 0) swap(t[1], t[2]);\r\n\t\t\t\tauto z = b[t[0]][t[1]] & b[t[1]][t[2]] & b[t[2]][t[0]];\r\n\t\t\t\tres[z.count()]++;\r\n\t\t\t}\r\n\tfor (int i = 0; i < N - 2; ++i) cout << res[i] << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 469,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 469,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-knapsack-again",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-knapsack-again",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Knapsack Again"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 492,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "(GP of Bytedance 2020 F)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 494,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Given ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 496,
          columnNumber: 9
        }, this), " (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n\\le 2\\cdot 10^4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 496,
          columnNumber: 14
        }, this), ") positive integers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_1,\\ldots,a_n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 496,
          columnNumber: 52
        }, this), "\r\n(", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i\\le 2\\cdot 10^4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 497,
          columnNumber: 4
        }, this), "), find the max possible sum of a subset of\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_1,\\ldots,a_n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 498,
          columnNumber: 3
        }, this), " whose sum does not exceed ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 498,
          columnNumber: 46
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 496,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 496,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the case when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum a_i\\ge c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 500,
        columnNumber: 24
      }, this), ". The intended solution runs in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\cdot \\max(a_i))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 501,
        columnNumber: 1
      }, this), "; see\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/bqi343/USACO/blob/master/Implementations/content/various/Knapsack.h",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 502,
        columnNumber: 1
      }, this), "\r\nfor more information. However, we'll solve it with bitset instead."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 500,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As with the first problem in this module, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 505,
        columnNumber: 47
      }, this), " if there\r\nexists a subset of the first numbers components that sums to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 506,
        columnNumber: 62
      }, this), ". This solution\r\nruns in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\cdot \\sum a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 9
      }, this), " time, which is too slow even if we use\r\nbitset."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 505,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Taking inspiration from ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/67664",
        rel: "nofollow",
        target: "_blank",
        children: "this"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 25
      }, this), " CF blog\r\npost, we'll first shuffle the integers randomly and perform the DP with the\r\nfollowing modification:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 510,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\left|\\frac{ci}{n}-j\\right| \\ge X"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 514,
          columnNumber: 6
        }, this), " for some ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "X"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 514,
          columnNumber: 51
        }, this), " that we choose, then set\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[i][j]=0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 515,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 514,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 514,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we only need to keep track of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2X+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 517,
        columnNumber: 37
      }, this), " values for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 517,
        columnNumber: 60
      }, this), ", this solution\r\nruns in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(nX)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 518,
        columnNumber: 9
      }, this), " time, which is fast enough with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X=5\\cdot 10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 518,
        columnNumber: 59
      }, this), " using\r\nbitset."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 517,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It turns out that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X\\approx \\max a_i\\cdot \\sqrt n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 19
      }, this), " (up to a constant) suffices\r\nfor correctness with high probability (briefly mentioned\r\n", _jsxDEV(_components.a, {
        href: "https://www.cc.gatech.edu/~rpeng/CS4540_F20/ps1.pdf",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 523,
        columnNumber: 1
      }, this), "). I'm not totally\r\nsure about the details, but intuitively, the random shuffle reduces the optimal\r\nsubset to some distribution with variance at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\max a_i)^2\\cdot n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 525,
        columnNumber: 51
      }, this), ". In the\r\nspecial case where each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 526,
        columnNumber: 25
      }, this), " is either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 526,
        columnNumber: 41
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 526,
        columnNumber: 48
      }, this), ", we can bound the\r\nprobability of failure using the Catalan numbers. I think it is something like\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e^{-\\frac{m^2}{n}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 528,
        columnNumber: 1
      }, this), " if we let the bitset have size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m\\cdot \\max a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 528,
        columnNumber: 53
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 521,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 530,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-other-applications",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-other-applications",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Other Applications"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 584,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Use to speed up the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 586,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Gaussian Elimination in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N^3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 588,
          columnNumber: 27
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 588,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Bipartite matching in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N^3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 589,
          columnNumber: 25
        }, this), " (dense graph with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 589,
          columnNumber: 62
        }, this), " vertices on\r\neach side)\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Though ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\mathcal{O}(NM)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 591,
              columnNumber: 12
            }, this), "\r\n", _jsxDEV(_components.a, {
              href: "https://codeforces.com/blog/entry/83036?#comment-703057",
              rel: "nofollow",
              target: "_blank",
              children: "Kuhn's algorithm"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 592,
              columnNumber: 5
            }, this), "\r\nis probably fast enough ..."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 591,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 591,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 589,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["BFS through dense graph in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N^2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 594,
          columnNumber: 30
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 594,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.del, {
          children: ["In general, passing solutions with an additional factor of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "N"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 595,
            columnNumber: 64
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 595,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 588,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Operations such as ", _jsxDEV(_components.code, {
        children: "_Find_first()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 597,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        children: "_Find_next()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 597,
        columnNumber: 40
      }, this), " mentioned in Errichto's\r\nblog can be helpful."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 597,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "A comment regarding the last two applications:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 610,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In USACO Camp, a similar problem appeared with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N\\le 10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 614,
        columnNumber: 48
      }, this), " and a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 614,
        columnNumber: 66
      }, this), " second time\r\nlimit (presumably to allow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log ^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 615,
        columnNumber: 28
      }, this), " solutions to pass). I had\r\nalready done this problem but ", _jsxDEV(_components.del, {
        children: "forgot how I had solved it"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 616,
        columnNumber: 31
      }, this), " decided to try\r\nsomething new. Try to guess what I did!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 614,
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
