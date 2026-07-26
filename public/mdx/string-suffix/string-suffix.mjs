"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "A lot of problems can be solved with Suffix Arrays, Suffix Automata, or Suffix\r\nTrees. The solution may just be slightly easier/harder with the various data\r\nstructures."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-suffix-automaton",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-suffix-automaton",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Suffix Automaton"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "Suffix Automaton"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 5
      }, this), " is a directed acyclic word graph (DAWG), such that each\r\npath in the graph traces out a distinct substring of the original string."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-suffix-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-suffix-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Suffix Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "Suffix Tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 5
      }, this), " is a trie that contains all suffixes of a string. Naively,\r\nthis would take up ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 20
      }, this), " memory, but ", _jsxDEV(_components.em, {
        children: "path compression"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 51
      }, this), " enables it\r\nto be represented and computed in linear memory."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-generate-suffix-array-from-suffix-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generate-suffix-array-from-suffix-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generate Suffix Array from Suffix Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A suffix array can be generated by the suffix tree by taking the dfs traversal\r\nof the suffix tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-generate-suffix-tree-from-suffix-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generate-suffix-tree-from-suffix-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generate Suffix Tree from Suffix Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Of course, the above operation can be reversed as well. Each element in the\r\nsuffix array corresponds to a leaf in the suffix tree. The LCP array stores\r\ninformation about the Lowest Common Ancestor of two adjacent elements in the\r\nsuffix array. Using these two pieces of information, we can construct the suffix\r\ntree from the suffix array in linear time."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-generate-suffix-tree-from-suffix-automaton",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generate-suffix-tree-from-suffix-automaton",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generate Suffix Tree from Suffix Automaton"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "One interesting thing about Suffix Trees and Suffix Automata is that the link\r\ntree of a Suffix Automaton is equivalent to the Suffix Tree of the reversed\r\nstring. Since Suffix Automata are much easier to create than Suffix Trees, we\r\ncan use this as an alternate method to build a Suffix Tree, all in linear time\r\ntoo!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-example---standing-out",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---standing-out",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Standing Out"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-with-suffix-automaton---standing-out",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-with-suffix-automaton---standing-out",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution With Suffix Automaton - Standing Out"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 254,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <cstdio>\r\n#include <cstring>\r\n#include <vector>\r\n\r\nFILE *IN, *OUT;\r\ntypedef long long ll;\r\nconst int MN = 1e5 + 10, MM = MN * 2;\r\nchar s[MN];\r\nstd::vector<int> down[MM];\r\nint N, v[MM], c[MM][26], l[MM], d[MM], topo[MM], T, X;\r\nll f[MN], cnt[MM];\r\nbool u[MM];\r\n\r\n/*\r\nKey Variables:\r\n\r\ns: input strings\r\ndown: link tree of automaton\r\nv: information regarding which cow each node belongs to\r\nc: child array of automaton\r\nl: link (of automaton)\r\nd: depth (of automaton)\r\ntopo: toposort (of automaton)\r\nT, X: counters for toposort and automaton\r\nf: answer\r\ncnt: number of ways to reach a node from the root\r\nu: visited array for toposort\r\n*/\r\n\r\n// add cow b to value a\r\n// value = -1: no cow assigned\r\n// value = -2: multiple cows assigned\r\n// value = 0..N: cow id\r\nvoid merge(int &a, int b) {\r\n\tif (!~a) a = b;\r\n\telse if (~b && a != b) a = -2;\r\n}\r\n\r\n// template automaton code\r\nint append(int p, char x) {\r\n\tif (~c[p][x]) {\r\n\t\tint q = c[p][x];\r\n\t\tif (d[q] == d[p] + 1) return q;\r\n\t\telse {\r\n\t\t\t++X;\r\n\t\t\tfor (int i = 0; i < 26; ++i) c[X][i] = c[q][i];\r\n\t\t\tl[X] = l[q], d[X] = d[p] + 1;\r\n\t\t\tl[q] = X;\r\n\t\t\tfor (; ~p && c[p][x] == q; p = l[p]) c[p][x] = l[q];\r\n\t\t\treturn l[q];\r\n\t\t}\r\n\t}\r\n\tint n = ++X;\r\n\td[n] = d[p] + 1;\r\n\tfor (; ~p && !~c[p][x]; p = l[p]) c[p][x] = n;\r\n\tif (!~p) l[n] = 0;\r\n\telse {\r\n\t\tint q = c[p][x];\r\n\t\tif (d[q] == d[p] + 1) l[n] = q;\r\n\t\telse {\r\n\t\t\t++X;\r\n\t\t\tfor (int i = 0; i < 26; ++i) c[X][i] = c[q][i];\r\n\t\t\tl[X] = l[q], d[X] = d[p] + 1;\r\n\t\t\tl[n] = l[q] = X;\r\n\t\t\tfor (; ~p && c[p][x] == q; p = l[p]) c[p][x] = l[q];\r\n\t\t}\r\n\t}\r\n\treturn n;\r\n}\r\n\r\n// DFS along links\r\nvoid dfs2(int n = 0) {\r\n\tfor (int x : down[n]) {\r\n\t\tdfs2(x);\r\n\t\tmerge(v[n], v[x]);\r\n\t}\r\n}\r\n// DFS along suffix automaton. This builds the toposort\r\nvoid dfs(int n = 0) {\r\n\tu[n] = 1;\r\n\tfor (int i = 0; i < 26; ++i) {\r\n\t\tint y = c[n][i];\r\n\t\tif (~y && !u[y]) dfs(y);\r\n\t}\r\n\ttopo[T++] = n;\r\n}\r\n\r\nint main(void) {\r\n\tIN = fopen(\"standingout.in\", \"r\"), OUT = fopen(\"standingout.out\", \"w\");\r\n\tmemset(v, -1, sizeof v);\r\n\tmemset(c, -1, sizeof c);\r\n\tfscanf(IN, \"%d\", &N);\r\n\td[0] = 0, l[0] = -1;\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tfscanf(IN, \" %s\", s);\r\n\t\tint n = 0;\r\n\t\tfor (int j = 0; s[j]; ++j) {\r\n\t\t\tn = append(n, s[j] - 'a');  // build automaton\r\n\t\t\tmerge(v[n], i);\r\n\t\t}\r\n\t}\r\n\t// build link tree\r\n\tfor (int i = 1; i <= X; ++i) down[l[i]].push_back(i);\r\n\tdfs();   // dfs link tree\r\n\tdfs2();  // dfs automaton\r\n\tcnt[0] = 1;\r\n\tfor (int i = T - 1, x; i >= 0; --i) {\r\n\t\tx = topo[i];\r\n\t\tfor (int j = 0; j < 26; ++j)\r\n\t\t\tif (~c[x][j])\r\n\t\t\t\tcnt[c[x][j]] += cnt[x];  // count number of paths from root to a node\r\n\t\tif (v[x] >= 0)\r\n\t\t\tf[v[x]] += cnt[x];  // if this node is associated with a unique cow,\r\n\t\t\t                    // add to answer\r\n\t}\r\n\tfor (int i = 0; i < N; ++i) fprintf(OUT, \"%lld\\n\", f[i]);\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-suffix-structure-problems-array-automaton-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-suffix-structure-problems-array-automaton-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Suffix Structure Problems (Array, Automaton, Tree)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 379,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-extending-palindromic-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-extending-palindromic-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Extending Palindromic Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 383,
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
      lineNumber: 392,
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
