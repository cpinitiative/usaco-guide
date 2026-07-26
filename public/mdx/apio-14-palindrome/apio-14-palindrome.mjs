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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, construct the\r\n", _jsxDEV(_components.a, {
        href: "https://web.archive.org/web/20220130034214/https://adilet.org/blog/palindromic-tree/",
        rel: "nofollow",
        target: "_blank",
        children: "palindromic tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\r\nfrom the string. There are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 28
      }, this), " distinct palindromes, so our tree\r\nwill have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 11
      }, this), " nodes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In addition to the standard information about a node's palindrome that we store\r\nin it (e.g. length and suffix link), store the number of times each node's\r\npalindrome was the maximum suffix. Let this number be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 55
      }, this), " for the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 69
      }, this), "-th node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since each node's palindrome is a substring of the palindromes of the nodes in\r\nits subtree, the sum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 25
      }, this), " in node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 39
      }, this), "'s subtree gives us the number of\r\noccurrences of node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 21
      }, this), "'s palindrome in the string."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can then do a DFS to find the number of occurrences of each distinct\r\npalindrome in the string and then we simply check which one has the greatest\r\noccurrence value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
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
      lineNumber: 21,
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
        children: "\\mathcal{O}(N)"
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
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n#define FOR(i, x, y) for (int i = x; i < y; i++)\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nstruct Node {\r\n\tint nxt[26], sufflink;\r\n\tll len, cnt;\r\n\tvector<int> edges;\r\n} tree[303030];\r\n\r\nstring s;\r\nint suff, num;\r\nll ans = 0;\r\n\r\nvoid add_letter(int pos) {\r\n\tint curr = suff, curr_len = 0;\r\n\tint letter = s[pos] - 'a';\r\n\r\n\twhile (true) {\r\n\t\tcurr_len = tree[curr].len;\r\n\t\tif (pos - 1 - curr_len > -1 && s[pos - 1 - curr_len] == s[pos]) break;\r\n\t\tcurr = tree[curr].sufflink;\r\n\t}\r\n\tif (tree[curr].nxt[letter]) {\r\n\t\tsuff = tree[curr].nxt[letter];\r\n\t\ttree[suff].cnt++;\r\n\t\treturn;\r\n\t}\r\n\r\n\tsuff = ++num;\r\n\ttree[num].len = tree[curr].len + 2;\r\n\ttree[num].cnt = 1;\r\n\ttree[curr].nxt[letter] = num;\r\n\r\n\tif (tree[num].len == 1) {\r\n\t\ttree[num].sufflink = 2;\r\n\t\ttree[2].edges.push_back(num);\r\n\t\treturn;\r\n\t}\r\n\r\n\twhile (true) {\r\n\t\tcurr = tree[curr].sufflink;\r\n\t\tcurr_len = tree[curr].len;\r\n\t\tif (pos - 1 - curr_len > -1 && s[pos - 1 - curr_len] == s[pos]) {\r\n\t\t\ttree[num].sufflink = tree[curr].nxt[letter];\r\n\t\t\ttree[tree[curr].nxt[letter]].edges.push_back(num);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nvoid init() {\r\n\tnum = 2, suff = 2;\r\n\ttree[1].len = -1, tree[1].sufflink = 1;\r\n\ttree[2].len = 0, tree[2].sufflink = 1;\r\n\ttree[1].edges.push_back(2);\r\n}\r\n\r\nvoid dfs(int node = 1) {\r\n\tfor (int i : tree[node].edges) {\r\n\t\tdfs(i);\r\n\t\ttree[node].cnt += tree[i].cnt;\r\n\t}\r\n\tans = max(ans, tree[node].len * tree[node].cnt);\r\n}\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tcin >> s;\r\n\tinit();\r\n\tFOR(i, 0, s.size()) add_letter(i);\r\n\tdfs();\r\n\tcout << ans;\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
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
