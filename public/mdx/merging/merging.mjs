"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-merging-data-structures",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-merging-data-structures",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Merging Data Structures"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Obviously ", _jsxDEV(_components.a, {
        href: "http://www.cplusplus.com/reference/list/list/splice/",
        rel: "nofollow",
        target: "_blank",
        children: "linked lists"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 11
      }, this), "\r\ncan be merged in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 18
      }, this), " time. But what about sets or vectors?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Let's consider a tree rooted at node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 38
      }, this), ", where each node has a color."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For each node, let's store a set containing only that node, and we want to merge\r\nthe sets in the nodes subtree together such that each node has a set consisting\r\nof all colors in the nodes subtree. Doing this allows us to solve a variety of\r\nproblems, such as query the number of distinct colors in each subtree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-naive-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-naive-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Naive Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that we want merge two sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 37
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 45
      }, this), " of sizes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 58
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 66
      }, this), ",\r\nrespectively. One possibility is the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "for (int x : b) a.insert(x);\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["which runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(m\\log (n+m))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 15
      }, this), " time, yielding a runtime of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), " in the worst case. If we instead maintain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 68
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 76
      }, this), "\r\nas sorted vectors, we can merge them in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n+m)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 41
      }, this), " time, but\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), " is also too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-better-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-better-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Better Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With just one additional line of code, we can significantly speed this up."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "if (a.size() < b.size()) swap(a, b);\r\nfor (int x : b) a.insert(x);\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that ", _jsxDEV(_components.a, {
        href: "http://www.cplusplus.com/reference/utility/swap/",
        rel: "nofollow",
        target: "_blank",
        children: "swap"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 11
      }, this), " exchanges two\r\nsets in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 9
      }, this), " time. Thus, merging a smaller set of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 68
      }, this), " into the\r\nlarger one of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 20
      }, this), " takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(m\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 30
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Claim:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this), " The solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 33
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this), " When merging two sets, you move from the smaller set to the larger\r\nset. If the size of the smaller set is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 40
      }, this), ", then the size of the resulting set\r\nis at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 13
      }, this), ". Thus, an element that has been moved ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 56
      }, this), " times will be in a\r\nset of size at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 22
      }, this), ", and since the maximum size of a set is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 68
      }, this), " (the\r\nroot), each element will be moved at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 43
      }, this), ") times."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-full-code",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-full-code",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Full Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n\r\nusing namespace std;\r\n\r\nconst int MAX_N = 2e5;\r\n\r\n// nodes will be 1-indexed like in the problem\r\nvector<int> adj[MAX_N + 1];\r\n\r\nset<int> colors[MAX_N + 1];\r\nint distinct_num[MAX_N + 1];\r\n\r\nvoid process_colors(int curr, int parent) {\r\n\tfor (int n : adj[curr]) {\r\n\t\tif (n != parent) {\r\n\t\t\tprocess_colors(n, curr);\r\n\t\t\t// make x the larger set always\r\n\t\t\tif (colors[curr].size() < colors[n].size()) {\r\n\t\t\t\tswap(colors[curr], colors[n]);\r\n\t\t\t}\r\n\t\t\tfor (int item : colors[n]) { colors[curr].insert(item); }\r\n\t\t}\r\n\t}\r\n\tdistinct_num[curr] = colors[curr].size();\r\n}\r\n\r\nint main() {\r\n\tint n;\r\n\tcin >> n;\r\n\tfor (int i = 1; i <= n; i++) {\r\n\t\tint a;\r\n\t\tcin >> a;\r\n\t\tcolors[i].insert(a);\r\n\t}\r\n\tfor (int i = 1; i < n; i++) {\r\n\t\tint a;\r\n\t\tint b;\r\n\t\tcin >> a >> b;\r\n\t\tadj[a].push_back(b);\r\n\t\tadj[b].push_back(a);\r\n\t}\r\n\tprocess_colors(1, 0);\r\n\tfor (int i = 1; i <= n; i++) { cout << distinct_num[i] << (i < n ? \" \" : \"\\n\"); }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-generalizing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generalizing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generalizing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can also merge other standard library data structures such as ", _jsxDEV(_components.code, {
        children: "std::map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 66
      }, this), " or\r\n", _jsxDEV(_components.code, {
        children: "std:unordered_map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 1
      }, this), " in the same way. However,\r\n", _jsxDEV(_components.a, {
        href: "https://en.cppreference.com/w/cpp/algorithm/swap",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "std::swap"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 118,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this), " does not always\r\nrun in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 8
      }, this), " time. For example, swapping\r\n", _jsxDEV(_components.a, {
        href: "http://www.cplusplus.com/reference/array/array/swap/",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "std::array"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 120,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 1
      }, this), "s takes time\r\nlinear in the sum of the sizes of the arrays, and the same goes for\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/11080",
        rel: "nofollow",
        target: "_blank",
        children: "GCC policy-based data structures"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 1
      }, this), " such\r\nas ", _jsxDEV(_components.code, {
        children: "__gnu_pbds::tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 4
      }, this), " or ", _jsxDEV(_components.code, {
        children: "__gnu_pbds::gp_hash_table"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 26
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To swap two policy-based data structures ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.code, {
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 50
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 57
      }, this), " time,\r\nuse ", _jsxDEV(_components.code, {
        children: "a.swap(b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 5
      }, this), " instead. Note that for standard library data structures,\r\n", _jsxDEV(_components.code, {
        children: "swap(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), " is equivalent to ", _jsxDEV(_components.code, {
        children: "a.swap(b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 30
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
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
      lineNumber: 129,
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
