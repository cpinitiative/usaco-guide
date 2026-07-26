"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-subtask-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Assign a single stone to the first cup. The minimum cup is the one where Koala\r\ndoesn't have a majority."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int minValue(int N, int W) {\r\n\tfill(B, B + N, 0);\r\n\tB[0] = 1;\r\n\tplayRound(B, R);\r\n\tif (R[0] < 2) return 0;\r\n\telse\r\n\t\tfor (int i = 1; i < N; i++)\r\n\t\t\tif (!R[i]) return i;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Uses 1 turn."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-subtask-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Binary search for the maximum value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Assume we have a list of possible candidates for the maximum. Let this list be\r\nof length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 11
      }, this), ". Assign each candidate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lfloor \\frac{N}{L} \\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 38
      }, this), " stones. Koala\r\nwill always assign her stones so that the maximum cup gets a majority."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int maxValue(int N, int W) {\r\n\tvector<int> v;\r\n\tfor (int i = 0; i < N; i++) v.push_back(i);\r\n\twhile (v.size() != 1) {\r\n\t\tint k = W / v.size();\r\n\t\tfill(B, B + N, 0);\r\n\t\tfor (int i : v) B[i] = k;\r\n\t\tplayRound(B, R);\r\n\t\tv.clear();\r\n\t\tfor (int i = 0; i < N; i++)\r\n\t\t\tif (R[i] > k) v.push_back(i);\r\n\t}\r\n\treturn v[0];\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Uses 4 turns."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-subtask-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Assign cups 0 and 1 ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 21
      }, this), " stones until Koala treats them differently, at which\r\npoint we can tell which is greater."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can binary search for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 26
      }, this), ": if both 0 and 1 get more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 61
      }, this), " stones, increase\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this), " and otherwise, decrease ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 29
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9 + 10 + \\dots + 17 > 100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 7
      }, this), ", the maximum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 57
      }, this), " we need to try is 9,\r\nwhich improves our binary search significantly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int greaterValue(int N, int W) {\r\n\tint l = 1, r = 9;\r\n\twhile (l != r) {\r\n\t\tint mid = (l + r) / 2;\r\n\t\tB[0] = B[1] = mid;\r\n\t\tplayRound(B, R);\r\n\r\n\t\tif (R[0] > mid && R[1] > mid) l = mid + 1;\r\n\t\telse if (R[0] <= mid && R[1] <= mid) r = mid - 1;\r\n\t\telse return (R[0] < R[1]);\r\n\t}\r\n\tB[0] = B[1] = l;\r\n\tplayRound(B, R);\r\n\treturn (R[0] < R[1]);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Uses 3 turns."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-subtask-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 4"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, notice how ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "700 \\approx N \\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 19
      }, this), ". This suggests that we need a\r\nmergesort-like strategy."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since we have 200 stones at our disposal this time, we can use one turn to\r\ncompare two cups by assigning 100 stones to both of them and 0 stones to the\r\nother cups. Since we can compare cups efficiently, we can then use mergesort to\r\nfind the values of each cup."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "inline bool compare(int a, int b, int N, int W) {\r\n\tfill(B, B + N, 0);\r\n\tB[a] = B[b] = W;\r\n\tplayRound(B, R);\r\n\treturn (R[b] > W);\r\n}\r\nvector<int> mergesort(vector<int> v, int N, int W) {\r\n\tif (v.size() == 1) return v;\r\n\r\n\tvector<int> a, b;\r\n\ta.insert(a.begin(), v.begin(), v.begin() + (v.size() + 1) / 2);\r\n\tb.insert(b.begin(), v.begin() + (v.size() + 1) / 2, v.end());\r\n\ta = mergesort(a, N, W), b = mergesort(b, N, W);\r\n\r\n\tvector<int> sorted;\r\n\tint aptr = 0, bptr = 0;\r\n\twhile (aptr < a.size() && bptr < b.size()) {\r\n\t\tif (compare(a[aptr], b[bptr], N, W)) sorted.push_back(a[aptr++]);\r\n\t\telse sorted.push_back(b[bptr++]);\r\n\t}\r\n\tsorted.insert(sorted.end(), a.begin() + aptr, a.end());\r\n\tsorted.insert(sorted.end(), b.begin() + bptr, b.end());\r\n\r\n\treturn sorted;\r\n}\r\n\r\nvoid allValues(int N, int W, int *P) {\r\n\tif (W == 2 * N) {\r\n\t\tvector<int> v;\r\n\t\tfor (int i = 0; i < N; i++) v.push_back(i);\r\n\t\tvector<int> sorted = mergesort(v, N, W / 2);\r\n\t\tfor (int i = 0; i < N; i++) P[sorted[i]] = i + 1;\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Uses fewer than 700 turns."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-subtask-5",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-5",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 5"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We use a recursive strategy that solves for a known range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 59
      }, this), " in exactly\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L + R - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 1
      }, this), " moves by splitting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 32
      }, this), " into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 46
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[k + 1, R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 59
      }, this), " for some\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 1
      }, this), " in exactly 1 move."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 130,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Assign each cup we know to be in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 34
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = \\lfloor \\min(\\sqrt{2 * L}, \\frac{M}{R - L + 1}) \\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 1
      }, this), " stones and then\r\ncheck which positions Koala has placed more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 50
      }, this), " stones next to after the\r\nround. We can then find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 25
      }, this), " from this information, which will always be in the\r\nrange ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 7
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "void split(vector<int> v, int N, int W, int *P, int l = 1, int r = 100) {\r\n\tif (l == r) P[v[0]] = l;\r\n\telse {\r\n\t\tint x = min((int)sqrt(2 * l), W / (r - l + 1));\r\n\r\n\t\tfill(B, B + N, 0);\r\n\t\tfor (int i : v) B[i] = x;\r\n\r\n\t\tplayRound(B, R);\r\n\t\tvector<int> less, greater;\r\n\t\tfor (int i : v)\r\n\t\t\tif (R[i] > x) greater.push_back(i);\r\n\t\t\telse less.push_back(i);\r\n\r\n\t\tsplit(less, N, W, P, l, l + less.size() - 1);\r\n\t\tsplit(greater, N, W, P, r - greater.size() + 1, r);\r\n\t}\r\n}\r\n\r\nvoid allValues(int N, int W, int *P) {\r\n\tif (W == N) {\r\n\t\tvector<int> v;\r\n\t\tfor (int i = 0; i < N; i++) v.push_back(i);\r\n\t\tsplit(v, N, W, P);\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Uses 99 turns."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 169,
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
