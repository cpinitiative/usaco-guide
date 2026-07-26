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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2015_solutions.zip",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-making-cycles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-making-cycles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Making Cycles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Imagine we have a bipartite graph where each spot is a node and each person is\r\nan edge between the two spots they're willing to take."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If any node has degree equal to 0, then it's not possible to assign the teams."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If any node has degree equal to 1, then we must assign the person willing to\r\ntake that spot to it. After assigning that person, we can delete the node and\r\nedge from the graph."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can repeatedly assign people to and delete nodes with degree equal to 1 by\r\nusing a BFS. After doing this, all nodes will have degree greater than 1."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, if any node has degree greater than 2, then by the pigeonhole\r\nprinciple, there must be a node with degree equal to less than 2, which isn't\r\npossible."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, we are left with several disjoint simple cycles. Since this is a bipartite\r\ngraph, these cycle lengths are all even."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-using-knapsack-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-knapsack-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using Knapsack DP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the set of all cycles be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 30
      }, this), " and let the difference in strengths from the\r\nnodes we previously deleted be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Consider a single cycle. Notice how if a person/edge is assigned to some side,\r\nthen the next person must be assigned to the opposite side."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that each cycle contributes a fixed amount to the difference in\r\nstrengths! Let the absolute value of this amount for the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 58
      }, this), "-th cycle be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 74
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We now only need to check whether there exist 2 disjoint sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 63
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 71
      }, this), " such\r\nthat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S \\cup T = C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 6
      }, this), " and"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left |d + \\sum_{i \\in T} V_i - \\sum_{i \\in S} V_i \\right | \\leq K"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is the same as checking whether a subset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 47
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 54
      }, this), " exists such that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left |d + \\sum_{i \\in C} V_i - 2 \\sum_{i \\in S} V_i \\right | \\leq K"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can check this using knapsack DP in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 40
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since we are only checking whether we can obtain some value, we can use a bitset\r\nto speed this up."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The final complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NK / 64)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 25
      }, this), ", which is fast enough for 100\r\npoints."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
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
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nmultiset<pair<int, int>> graph[60001];\r\nbool visited[60001];\r\nbitset<600001> possible;\r\nint tot = 0, sm = 0;\r\n\r\nvoid dfs(int node) {\r\n\tvisited[node] = true;\r\n\tif (!graph[node].size()) return;\r\n\tint nxt, cost;\r\n\ttie(nxt, cost) = *graph[node].begin();\r\n\r\n\ttot += cost;\r\n\tif (!visited[nxt]) {\r\n\t\tgraph[nxt].erase(graph[nxt].find({node, -cost}));\r\n\t\tgraph[node].clear();\r\n\t\tdfs(nxt);\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tint n, k;\r\n\tscanf(\"%d %d\", &n, &k);\r\n\tfor (int i = 1; i <= 2 * n; i++) {\r\n\t\tint l, r, s;\r\n\t\tscanf(\"%d %d %d\", &l, &r, &s);\r\n\t\tgraph[l].insert({n + r, s});\r\n\t\tgraph[n + r].insert({l, -s});\r\n\t}\r\n\r\n\tqueue<int> q;\r\n\tfor (int i = 1; i <= 2 * n; i++) {\r\n\t\tif (graph[i].size() == 1) q.push(i);\r\n\t\tif (graph[i].size() == 0) return printf(\"NO\\n\"), 0;\r\n\t}\r\n\twhile (q.size()) {\r\n\t\tint curr = q.front();\r\n\t\tq.pop();\r\n\t\tif (graph[curr].size() == 0) return printf(\"NO\\n\"), 0;\r\n\t\tint nxt, cost;\r\n\t\ttie(nxt, cost) = *graph[curr].begin();\r\n\t\ttot += cost;\r\n\r\n\t\tgraph[curr].clear();\r\n\t\tgraph[nxt].erase(graph[nxt].find({curr, -cost}));\r\n\t\tif (graph[nxt].size() == 1) q.push(nxt);\r\n\t}\r\n\r\n\tvector<int> items;\r\n\tif (tot) items.push_back(abs(tot));\r\n\tfor (int i = 1; i <= 2 * n; i++)\r\n\t\tif (!visited[i] && graph[i].size()) {\r\n\t\t\ttot = 0;\r\n\t\t\tgraph[i].erase(graph[i].begin());\r\n\t\t\tdfs(i);\r\n\t\t\tif (tot) items.push_back(abs(tot));\r\n\t\t}\r\n\tsm = accumulate(items.begin(), items.end(), 0);\r\n\r\n\tpossible[0] = 1;\r\n\tfor (int i : items) possible |= possible << i;\r\n\tfor (int i = 0; i <= sm; i++)\r\n\t\tif (possible[i] && abs(2 * i - sm) <= k) return printf(\"YES\\n\"), 0;\r\n\tprintf(\"NO\\n\");\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
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
