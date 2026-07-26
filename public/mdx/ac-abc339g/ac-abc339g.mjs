"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-official-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-official-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.a, {
        href: "https://atcoder.jp/contests/abc339/editorial/9270",
        rel: "nofollow",
        target: "_blank",
        children: "Official Solution"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 4
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This uses merge-sort tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log N+Q\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-alternative-solution-wavelet-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternative-solution-wavelet-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternative solution (Wavelet Tree)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similar as K-query from SPOJ, but you additionally need to store prefix sums of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 81
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O((N+Q)\\log M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 46
      }, this), " is the max value"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct PrefixSummer {\r\n\tconst int BITS = 64;\r\n\tvector<uint64_t> packed;\r\n\tvector<int> psums;\r\n\tvector<int64_t> psumA;\r\n\tvoid init(const vector<bool> &v, vector<int> A) {\r\n\t\tpacked.resize(size(v) / BITS + 1);\r\n\t\tfor (int i = 0; i < size(v); ++i) {\r\n\t\t\tif (v.at(i)) packed.at(i / BITS) |= 1ULL << (i % BITS);\r\n\t\t}\r\n\t\tpsums = {0};\r\n\t\tfor (auto b : packed) psums.push_back(psums.back() + __builtin_popcountll(b));\r\n\t\tpsumA = {0};\r\n\t\tfor (int x : A) psumA.push_back(psumA.back() + x);\r\n\t}\r\n\tint count_prefix(int r) {\r\n\t\treturn psums.at(r / BITS) +\r\n\t\t       __builtin_popcountll(packed.at(r / BITS) & ((1ULL << (r % BITS)) - 1));\r\n\t}\r\n\tint count() { return psums.back(); }\r\n\tint64_t sum(int l, int r) { return psumA.at(r) - psumA.at(l); }\r\n};\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tint N;\r\n\tcin >> N;\r\n\tvector<int> A(N);\r\n\tfor (int &a : A) cin >> a;\r\n\r\n\tconst int MAX_BIT = 30;\r\n\tvector<PrefixSummer> num_lefts(MAX_BIT);\r\n\tfor (int b = MAX_BIT - 1; b >= 0; --b) {\r\n\t\tvector<int> A0, A1;\r\n\t\tvector<bool> bitvec;\r\n\t\tfor (int x : A) {\r\n\t\t\tif (x & (1 << b)) {\r\n\t\t\t\tbitvec.push_back(0);\r\n\t\t\t\tA1.push_back(x);\r\n\t\t\t} else {\r\n\t\t\t\tbitvec.push_back(1);\r\n\t\t\t\tA0.push_back(x);\r\n\t\t\t}\r\n\t\t}\r\n\t\tswap(A, A0);\r\n\t\tA.insert(end(A), begin(A1), end(A1));\r\n\t\tnum_lefts.at(b).init(bitvec, A);\r\n\t}\r\n\tauto range_count = [&](int l, int r, int x) {\r\n\t\tint64_t ans = 0;\r\n\t\tfor (int b = MAX_BIT - 1; b >= 0; --b) {\r\n\t\t\tint pr = num_lefts.at(b).count_prefix(r);\r\n\t\t\tint pl = num_lefts.at(b).count_prefix(l);\r\n\t\t\tif (!(x & (1 << b))) {\r\n\t\t\t\tl = pl, r = pr;\r\n\t\t\t} else {\r\n\t\t\t\tans += num_lefts.at(b).sum(pl, pr);\r\n\t\t\t\tl = l - pl + num_lefts.at(b).count();\r\n\t\t\t\tr = r - pr + num_lefts.at(b).count();\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn ans;\r\n\t};\r\n\r\n\tint Q;\r\n\tcin >> Q;\r\n\tint64_t b = 0;\r\n\tfor (int q = 0; q < Q; ++q) {\r\n\t\tint64_t l, r, x;\r\n\t\tcin >> l >> r >> x;\r\n\t\tl ^= b, r ^= b, x ^= b;\r\n\t\tb = range_count(l - 1, r, x + 1);\r\n\t\tcout << b << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
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
