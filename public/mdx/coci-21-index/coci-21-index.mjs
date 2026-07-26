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
        href: "https://hsin.hr/coci/archive/2020_2021/contest6_solutions.zip",
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
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O((N+Q\\log N)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-alternative-solution-1-persistent-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternative-solution-1-persistent-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternative Solution 1 (Persistent Segment Tree)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The factor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q\\log^2N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 15
      }, this), " from the solution above can be reduced to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 68
      }, this), "\r\nby replacing binary search with a segment tree walk."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-alternative-solution-2-wavelet-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternative-solution-2-wavelet-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternative Solution 2 (Wavelet Tree)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Similar as the Wavelet tree module problem. All you need to change is the recursive\r\nquery step."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N+Q\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\n// BeginCodeSnip{BitVector Prefix Summer}\r\nstruct PrefixSummer {\r\n\tconst int BITS = 64;\r\n\tvector<uint64_t> packed;\r\n\tvector<int> psums;\r\n\tvoid init(const vector<bool> &v) {\r\n\t\tpacked.resize(size(v) / BITS + 1);\r\n\t\tfor (int i = 0; i < size(v); ++i) {\r\n\t\t\tif (v.at(i)) packed.at(i / BITS) |= 1ULL << (i % BITS);\r\n\t\t}\r\n\t\tpsums = {0};\r\n\t\tfor (auto b : packed) psums.push_back(psums.back() + __builtin_popcountll(b));\r\n\t}\r\n\tint count_prefix(int r) {\r\n\t\treturn psums.at(r / BITS) +\r\n\t\t       __builtin_popcountll(packed.at(r / BITS) & ((1ULL << (r % BITS)) - 1));\r\n\t}\r\n\tint count() { return psums.back(); }\r\n};\r\n// EndCodeSnip\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tint N, Q;\r\n\tcin >> N >> Q;\r\n\tvector<int> A(N);\r\n\tfor (int &a : A) cin >> a;\r\n\r\n\tconst int MAX_BIT = 18;\r\n\tvector<PrefixSummer> num_lefts(MAX_BIT);\r\n\tfor (int b = MAX_BIT - 1; b >= 0; --b) {\r\n\t\tvector<int> A0, A1;\r\n\t\tvector<bool> bitvec;\r\n\t\tfor (int x : A) {\r\n\t\t\tif (x & (1 << b)) {\r\n\t\t\t\tbitvec.push_back(0);\r\n\t\t\t\tA1.push_back(x);\r\n\t\t\t} else {\r\n\t\t\t\tbitvec.push_back(1);\r\n\t\t\t\tA0.push_back(x);\r\n\t\t\t}\r\n\t\t}\r\n\t\tnum_lefts.at(b).init(bitvec);\r\n\t\tswap(A, A0);\r\n\t\tA.insert(end(A), begin(A1), end(A1));\r\n\t}\r\n\r\n\tauto range_h_index = [&](int l, int r) {\r\n\t\tint h = 0;\r\n\t\tint cites = 0;\r\n\t\tfor (int b = MAX_BIT - 1; b >= 0; --b) {\r\n\t\t\tint pr = num_lefts.at(b).count_prefix(r);\r\n\t\t\tint pl = num_lefts.at(b).count_prefix(l);\r\n\t\t\tint num_left = pr - pl;\r\n\t\t\tint num_right = r - l - num_left;\r\n\t\t\tif (cites + num_right >= h + (1 << b)) {\r\n\t\t\t\th += 1 << b;\r\n\t\t\t\tl = l - pl + num_lefts.at(b).count();\r\n\t\t\t\tr = r - pr + num_lefts.at(b).count();\r\n\t\t\t} else {\r\n\t\t\t\tcites += num_right;\r\n\t\t\t\tl = pl;\r\n\t\t\t\tr = pr;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn h;\r\n\t};\r\n\tfor (int q = 0; q < Q; ++q) {\r\n\t\tint l, r;\r\n\t\tcin >> l >> r;\r\n\t\tcout << range_h_index(l - 1, r) << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
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
