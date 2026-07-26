"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "There are two parts to the solution:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Finding the array ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "F"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 22
        }, this), " such that the substring ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[i:i + F_i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 50
        }, this), " is a substring\r\nof ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 7
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "F_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 15
        }, this), " is maximal."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Binary searching for the answer."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-part-1---finding-f",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-part-1---finding-f",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Part 1 - Finding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 21
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This is the hardest part of the problem. We will solve it using a suffix array\r\nand LCP."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, join ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 21
      }, this), " together with a ", _jsxDEV(_components.code, {
        children: "~"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 41
      }, this), " character and build the suffix array\r\nof the resulting string. Using this suffix array, we can then build the LCP\r\narray. (If you are unfamiliar with this, check out\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/edu/course/2/lesson/2",
        rel: "nofollow",
        target: "_blank",
        children: "this Codeforces course"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), ".)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Recall that the LCP of two suffixes is the range minimum of the elements of the\r\nLCP array between those two suffixes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we want ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 15
      }, this), " to be maximal, we thus only need to check two suffixes for\r\neach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 6
      }, this), " - the two closest suffixes to the suffix starting on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 63
      }, this), "! We can\r\nfind the indices of these two suffixes using a ", _jsxDEV(_components.code, {
        children: "std::set"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This part of the algorithm runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + M) \\log (N + M))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 36
      }, this), " time (but\r\nslower suffix array constructions are fast enough to pass as well)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-part-2---binary-searching",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-part-2---binary-searching",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Part 2 - Binary Searching"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Binary search works because if we can achieve a minimum length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 64
      }, this), ", then we can\r\nalso achieve a minimum length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k < l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 31
      }, this), " (since we don't necessarily need a\r\nsubstring of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 21
      }, this), "; we only need the lengths of all substrings to be of\r\nlength ", _jsxDEV(_components.strong, {
        children: "at least"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 8
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 21
      }, this), ".)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here's how we check whether we can achieve a certain minimum length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 69
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 5
      }, this), " be whether we can make ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[i : N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 36
      }, this), " using substrings from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 69
      }, this), " of size\r\nat least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 10
      }, this), ". Clearly, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 27
      }, this), " is true for any ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j \\in [i + l, i + F_i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 51
      }, this), ", then\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), " is also true."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To check whether such a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 25
      }, this), " exists, we can store all indices where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 68
      }, this), " is\r\ntrue in a set and check whether any of them lie in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[i + l, i + F_i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 62
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This part of the algorithm runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 36
      }, this), " time (or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), " time if you do the check in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 53
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
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
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstring s, t, u;\r\nint n, m, l;\r\nint ord[200005], nord[200005], suff[200005], rev[200005], p = 1;\r\nint lcp[200005][20], match[100000], h = 0;\r\nset<int> topgear;\r\n\r\nvoid build_suffix_arr() {\r\n\tu = s + '~' + t;\r\n\tl = n + m + 1;\r\n\r\n\tord[l] = -1;\r\n\tfor (int i = 0; i < l; i++) ord[i] = u[i], suff[i] = i;\r\n\tauto cmp = [](int A, int B) {\r\n\t\tif (ord[A] == ord[B]) return ord[A + p] < ord[B + p];\r\n\t\treturn ord[A] < ord[B];\r\n\t};\r\n\twhile (p <= l) {\r\n\t\tsort(suff, suff + l, cmp);\r\n\t\tnord[suff[0]] = 0;\r\n\t\tfor (int i = 1; i < l; i++) {\r\n\t\t\tnord[suff[i]] = nord[suff[i - 1]];\r\n\t\t\tif (cmp(suff[i - 1], suff[i])) nord[suff[i]]++;\r\n\t\t}\r\n\t\tfor (int i = 0; i < l; i++) ord[i] = nord[i];\r\n\t\tp <<= 1;\r\n\t}\r\n\r\n\tfor (int i = 0; i < l; i++) rev[suff[i]] = i;\r\n\tfor (int i = 0; i < l; i++) {\r\n\t\tif (rev[i]) {\r\n\t\t\tint j = suff[rev[i] - 1];\r\n\t\t\twhile (u[i + h] == u[j + h]) h++;\r\n\t\t\tlcp[rev[i]][0] = h;\r\n\t\t}\r\n\t\th = max(h - 1, 0);\r\n\t}\r\n\r\n\tfor (int i = n + 1; i < l; i++) topgear.insert(rev[i]);\r\n\tfor (int j = 1; j < 20; j++) {\r\n\t\tfor (int i = 0; i <= l - (1 << j); i++) {\r\n\t\t\tlcp[i][j] = min(lcp[i][j - 1], lcp[i + (1 << j - 1)][j - 1]);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nint rmq(int l, int r) {\r\n\tint level = 31 - __builtin_clz(r - l + 1);\r\n\treturn min(lcp[l][level], lcp[r - (1 << level) + 1][level]);\r\n}\r\n\r\nbool check(int len) {\r\n\tset<int> good;\r\n\tgood.insert(n);\r\n\tfor (int i = n - 1; ~i; i--) {\r\n\t\tset<int>::iterator lb = good.lower_bound(i + len);\r\n\t\tif (lb != good.end() && *lb <= i + match[i]) good.insert(i);\r\n\t}\r\n\treturn !*good.begin();\r\n}\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tcin >> s >> t;\r\n\tn = s.size(), m = t.size();\r\n\r\n\tbuild_suffix_arr();\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tset<int>::iterator lb = topgear.lower_bound(rev[i]);\r\n\t\tif (lb != topgear.end()) match[i] = max(match[i], rmq(rev[i] + 1, *lb));\r\n\t\tif (lb != topgear.begin()) {\r\n\t\t\tlb--;\r\n\t\t\tmatch[i] = max(match[i], rmq(*lb + 1, rev[i]));\r\n\t\t}\r\n\t}\r\n\r\n\tint l = 0, r = n;\r\n\twhile (l != r) {\r\n\t\tint mid = (l + r + 1) / 2;\r\n\t\tif (check(mid)) l = mid;\r\n\t\telse r = mid - 1;\r\n\t}\r\n\tcout << (l ? l : -1);\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
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
