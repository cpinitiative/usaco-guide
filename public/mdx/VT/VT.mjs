"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Often, when running operations or dynamic programming on trees, we only need to\r\nkeep track of a few key nodes and their relationships. If we are able to isolate\r\nthe few relevant nodes that keep the structure of the tree intact, while still\r\nmaintaining the relationships between key nodes, we can cut our time complexity\r\ndown significantly."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---leaf-color",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---leaf-color",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Leaf Color"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can sum the number of vertex sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 38
      }, this), " that satisfy the condition with degree\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), " vertices having color ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 27
      }, this), " across all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c \\in [1,N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 42
      }, this), " to obtain an answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 11
      }, this), " to be the number of induced subgraphs that are trees\r\nrooted at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 11
      }, this), " such that all ", _jsxDEV(_components.strong, {
        children: "leaves"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 29
      }, this), " have color ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 51
      }, this), ". When transitioning,\r\ninitialize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v] = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 12
      }, this), ". Transitions are as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["For every child ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "u"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 19
          }, this), " of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "v"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 26
          }, this), ", we can either attach one of the induced subgraphs\r\nthat are trees containing ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "u"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 50,
            columnNumber: 29
          }, this), " or ignore ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "u"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 50,
            columnNumber: 43
          }, this), " completely:"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[v] = \\texttt{dp}[v] \\cdot (1 + \\texttt{dp}[u])"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["However, if ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "a_v \\neq c"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 56,
            columnNumber: 15
          }, this), ", then we have to remove the case where the induced\r\nsubgraph is just ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "v"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 57,
            columnNumber: 20
          }, this), " itself, because this violates the condition:"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[v] = \\texttt{dp}[v] - 1"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To extract our answer, we can iterate over every possible root ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 64
      }, this), " of our\r\ninduced subgraph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_r =c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 6
        }, this), ", then we can directly add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[v]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 41
        }, this), " to our answer."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, we need to make sure that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 66,
          columnNumber: 40
        }, this), " is not degree ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 66,
          columnNumber: 58
        }, this), " in any of the\r\ninduced subgraphs we add. Thus, we subtract all the cases when ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 66
        }, this), " is attached\r\nto exactly one of its children."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, our answer will be"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{a_r = c} \\texttt{dp}[r] + \\sum_{a_r \\neq c} \\left( \\texttt{dp[r]} - \\sum_{s \\in \\text{Children}(r)} \\texttt{dp[s]} \\right)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The time complexity for this approach is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 42
      }, this), ", because for each\r\ncolor, we iterate over all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 28
      }, this), " nodes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here is a (TLE) code that demonstrates this approach:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\n\r\nconstexpr int MAX_N = 2e5 + 1;\r\nconstexpr int MOD = 998244353;\r\n\r\nint n, a[MAX_N];\r\nll dp[MAX_N], ans;\r\nvector<int> adj[MAX_N];\r\n\r\nint dfs_dp(int v, int p, int c) {\r\n\tdp[v] = 1;\r\n\tfor (int u : adj[v]) {\r\n\t\tif (u == p) continue;\r\n\t\tdp[v] *= (dfs_dp(u, v, c) + 1);\r\n\t\tdp[v] %= MOD;\r\n\t}\r\n\tif (a[v] != c) dp[v]--;\r\n\r\n\tans += dp[v];\r\n\tans %= MOD;\r\n\r\n\tif (a[v] != c) {\r\n\t\tfor (int u : adj[v]) {\r\n\t\t\tif (u == p) continue;\r\n\t\t\tans += MOD - dp[u];\r\n\t\t\tans %= MOD;\r\n\t\t}\r\n\t}\r\n\r\n\treturn dp[v];\r\n}\r\n\r\nint main() {\r\n\tcin >> n;\r\n\r\n\tfor (int i = 0; i < n; i++) { cin >> a[i]; }\r\n\r\n\tfor (int i = 1; i < n; i++) {\r\n\t\tint u, v;\r\n\t\tcin >> u >> v;\r\n\t\tu--;\r\n\t\tv--;\r\n\t\tadj[u].push_back(v);\r\n\t\tadj[v].push_back(u);\r\n\t}\r\n\r\n\tfor (int col = 1; col <= n; col++) { dfs_dp(0, 0, col); }\r\n\r\n\tcout << ans;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-virtual-tree-optimization",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-virtual-tree-optimization",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Virtual Tree Optimization"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 137,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To accelerate our dynamic programming approach, we can observe that our dynamic\r\nprogramming transitions are relatively simple when involving certain types of\r\nnodes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The most simple case of this is when a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 45
      }, this), " has no nodes of color ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 71
      }, this), " in its\r\nsubtree. Here, we can simply conclude ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[v]}=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 39
      }, this), ", because it is\r\nimpossible to construct an induced subgraph in the subtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 63
      }, this), " with leaves of\r\ncolor ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 7
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 143,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Another case of simple transitions is when only one child ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 59
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 66
      }, this), " has any\r\nnodes of color ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 16
      }, this), ". Then, from our previously established dp transitions, we\r\nobserve that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 14
      }, this), " is equivalent to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[u]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 148,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 5
      }, this), " be the set of nodes excluding these two cases. More formally, if we let\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_c = \\{ v \\in V \\mid a_v = c \\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 153,
        columnNumber: 1
      }, this), ", then"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 152,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = S_c \\cup \\{\\text{LCA}(u,v) \\mid u, v \\in S_c\\}."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 155,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 11
      }, this), " to be the ", _jsxDEV(_components.em, {
        children: "virtual tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 25
      }, this), " or ", _jsxDEV(_components.em, {
        children: "auxillary tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 43
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 63
      }, this), ". We can also\r\ndefine ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p'_v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 8
      }, this), ", the virtual parent of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 38
      }, this), " as the lowest node in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 64
      }, this), " such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p'_v \\neq v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{LCA}(p'_v,v) = p'_v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 19
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 52
      }, this), " as a virtual child of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p'_v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 162,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here is an example of a virtual tree, with nodes in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 53
      }, this), " colored purple, and the rest of the virtual tree in blue:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/5_Plat/assets/vtree_example.png",
        alt: "VTree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From here, we can calculate our dp values similarly to before, except we only\r\nprocess nodes in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 18
      }, this), ", and we consider virtual children instead of direct\r\nchildren."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that when calculating our answer, we also only need to consider nodes in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 1
      }, this), ". Nodes not in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 19
      }, this), " can not be the root because only one of their children\r\nhave nodes of color ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 21
      }, this), " in their subtree, meaning that we will end up with a\r\ndegree ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 8
      }, this), " node not of color ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 30
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, our time complexity will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sum_c |S|)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 35
      }, this), ", since we iterate\r\nover the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 14
      }, this), " for each distinct color."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 178,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the following section, we prove that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|S|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 41
      }, this), " is bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(S_c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 61
      }, this), ",\r\nand also demonstrate how to construct a virtual tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-virtual-tree-construction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-virtual-tree-construction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Virtual Tree Construction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A well-known method to construct the virtual tree of set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 58
      }, this), " is as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Sort the points in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 188,
          columnNumber: 22
        }, this), " by DFS order, and add them to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 188,
          columnNumber: 58
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Calculate the LCA of any two adjacent key points in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 189,
          columnNumber: 55
        }, this), ", and add that to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 189,
          columnNumber: 78
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 189,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Build the virtual tree based on the ancestor-descendant relationship of the\r\noriginal tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For a rough proof of correctness, consider the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Observe that a vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v \\in S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 195,
          columnNumber: 25
        }, this), " must either satisfy ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v \\in S_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 195,
          columnNumber: 55
        }, this), " or there exist\r\nat least two distinct children of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 196,
          columnNumber: 37
        }, this), " with key points in their subtrees."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.p, {
        children: ["The former is taken care of immediately in step 1. In the latter case, as a\r\nproperty of DFS order, there must exist key points ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a,b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 199,
          columnNumber: 54
        }, this), " in the subtree of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 199,
          columnNumber: 78
        }, this), "\r\nsuch that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a,b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 200,
          columnNumber: 13
        }, this), " are in distinct subtrees and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a,b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 200,
          columnNumber: 48
        }, this), " are adjacent in the DFS\r\norder when only considering key points. Because ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 201,
          columnNumber: 51
        }, this), " is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{LCA}(a,b)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 201,
          columnNumber: 58
        }, this), ", our\r\nconstruction necessarily holds true. A corollary of our construction is that\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "|S|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 203,
          columnNumber: 3
        }, this), " is indeed bounded by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(|S_0|)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 203,
          columnNumber: 30
        }, this), " - in fact, a tight bound is\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "|S| \\leq 2 \\cdot |S_0|-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 204,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Below is an implementation for the task, which also contains general code for\r\nconstructing virtual trees. Because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_c |S|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 37
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O(n)}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 53
      }, this), ", and we\r\nsort by DFS order, our final time complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 49
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\n\r\nconstexpr int MAX_N = 2e5 + 1;\r\nconstexpr int LG = 18;\r\nconstexpr int MOD = 998244353;\r\n\r\nint n, a[MAX_N];\r\nll dp[MAX_N], ans;\r\nint tin[MAX_N], tout[MAX_N], d[MAX_N], lift[MAX_N][LG], timer;\r\nvector<int> adj[MAX_N], vadj[MAX_N], at_a[MAX_N];\r\n\r\nvoid dfs(int v, int p) {\r\n\tat_a[a[v]].push_back(v);\r\n\ttin[v] = timer++;\r\n\r\n\tlift[v][0] = p;\r\n\tfor (int i = 1; i < LG; i++) { lift[v][i] = lift[lift[v][i - 1]][i - 1]; }\r\n\r\n\tfor (int u : adj[v]) {\r\n\t\tif (u == p) { continue; }\r\n\t\tdfs(u, v);\r\n\t}\r\n\r\n\ttout[v] = timer++;\r\n}\r\n\r\nint is_ancestor(int u, int v) { return tin[u] <= tin[v] && tout[v] <= tout[u]; }\r\n\r\nint lca(int u, int v) {\r\n\tif (is_ancestor(u, v)) { return u; }\r\n\tif (is_ancestor(v, u)) { return v; }\r\n\r\n\tfor (int i = LG - 1; i >= 0; i--) {\r\n\t\tif (!is_ancestor(lift[u][i], v)) { u = lift[u][i]; }\r\n\t}\r\n\treturn lift[u][0];\r\n}\r\n\r\nbool sort_tin(const int &a, const int &b) { return tin[a] < tin[b]; }\r\n\r\nvector<int> vtree(const vector<int> &key) {\r\n\tif (key.empty()) return {};\r\n\r\n\tvector<int> res = key;\r\n\tsort(res.begin(), res.end(), sort_tin);\r\n\r\n\tfor (int i = 1; i < (int)key.size(); i++) {\r\n\t\tres.push_back(lca(res[i - 1], res[i]));\r\n\t}\r\n\r\n\tsort(res.begin(), res.end(), sort_tin);\r\n\tres.erase(unique(res.begin(), res.end()), res.end());\r\n\r\n\tfor (int v : res) { vadj[v].clear(); }\r\n\r\n\tfor (int i = 1; i < (int)res.size(); i++) {\r\n\t\tvadj[lca(res[i - 1], res[i])].push_back(res[i]);\r\n\t}\r\n\r\n\treturn res;\r\n}\r\n\r\nint main() {\r\n\tcin >> n;\r\n\r\n\tfor (int i = 0; i < n; i++) { cin >> a[i]; }\r\n\r\n\tfor (int i = 1; i < n; i++) {\r\n\t\tint u, v;\r\n\t\tcin >> u >> v;\r\n\t\tu--;\r\n\t\tv--;\r\n\t\tadj[u].push_back(v);\r\n\t\tadj[v].push_back(u);\r\n\t}\r\n\r\n\tdfs(0, 0);\r\n\r\n\tfor (int col = 1; col <= n; col++) {\r\n\t\tvector<int> vt = vtree(at_a[col]);\r\n\t\treverse(vt.begin(), vt.end());\r\n\r\n\t\tfor (int v : vt) {\r\n\t\t\tdp[v] = 1;\r\n\t\t\tfor (int u : vadj[v]) {\r\n\t\t\t\tdp[v] *= (dp[u] + 1);\r\n\t\t\t\tdp[v] %= MOD;\r\n\t\t\t}\r\n\t\t\tif (a[v] != col) { dp[v]--; }\r\n\r\n\t\t\tans += dp[v];\r\n\t\t\tans %= MOD;\r\n\t\t\tif (a[v] != col) {\r\n\t\t\t\tfor (int u : vadj[v]) {\r\n\t\t\t\t\tans += MOD - dp[u];\r\n\t\t\t\t\tans %= MOD;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tcout << ans << '\\n';\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 212,
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
      lineNumber: 321,
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
