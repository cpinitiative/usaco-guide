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
      id: "user-content-general-outline",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general-outline",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General Outline"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that you have a rooted tree where each vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 55
      }, this), " has a value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 71
      }, this), ".\r\nAlso, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 10
      }, this), " is not the root then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 35
      }, this), " has a parent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 52
      }, this), " satisfying\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v_{p_i} \\le v_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), ". Given that each vertex has at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 55
      }, this), " children, find the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 78
      }, this), "\r\nsmallest values in the tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-approaches",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approaches",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approaches"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Approach 1:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), " Use a priority queue initially containing only the root. At each\r\nstep, extract the vertex with smallest value from the priority queue and insert\r\nall of its children into the queue. Since we insert ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 53
      }, this), " vertices\r\nin the priority queue, this runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KD\\log (KD))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 37
      }, this), " time. You can\r\nthink of this as Dijkstra on a tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Approach 2:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), " Suppose that we know that the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 47
      }, this), "-th smallest value is an\r\ninteger in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0,A]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 22
      }, this), ". Then for any ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x\\in [0,A]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 44
      }, this), " we can check whether\r\nthere are less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 21
      }, this), " values in the tree less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 66
      }, this), " in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " time with a simple DFS that breaks once you find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 68
      }, this), " values.\r\nThis approach runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KD\\log A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 23
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We'll focus on the first approach."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that you want to find the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 35
      }, this), " objects with the smallest values in some\r\n(potentially very large) search space."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["First, we need to impose a tree structure satisfying the properties mentioned\r\nabove. Say that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 19
        }, this), " lies in the subtree of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 46
        }, this), " if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 53
        }, this), " lies above (or is equal\r\nto) ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 7
        }, this), " in the tree."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Let the \"root\" be the object of smallest value. Every object must lie in the\r\nsubtree of the root."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The children of the root should partition the entire search space (aside from\r\nthe root) into a bounded number of disjoint subspaces."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Of course, each child should also have the smallest value in its subtree."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Essentially, we start with the entire search space and then we ", _jsxDEV(_components.em, {
        children: "fracture"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 64
      }, this), " it\r\ninto ", _jsxDEV(_components.em, {
        children: "subspaces"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 6
      }, this), " based on the children of the root. Then we can finish with\r\neither of the two approaches."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-k-th-smallest-spanning-tree-usaco-camp-2018",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-k-th-smallest-spanning-tree-usaco-camp-2018",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 4
      }, this), "-th Smallest Spanning Tree (USACO Camp 2018)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's look at an example."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-problem-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problem-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Given a graph with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N\\le 50"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 22
        }, this), " vertices and at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\binom{N}{2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 53
        }, this), " edges, find\r\nthe ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "K"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 7
        }, this), "-th (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "K\\le 10^4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 15
        }, this), ") smallest spanning tree."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
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
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://www.youtube.com/watch?v=EG_HfFMM0lE",
        rel: "nofollow",
        target: "_blank",
        children: "Video (by tehqin)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For this problem, the objects are spanning trees. The root is the minimum\r\nspanning tree (which can be calculated with Kruskal's algorithm), and contains\r\nall objects in its subtree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The idea is to designate a small number of children of the root, each of which\r\nshould be formed by modifying the root slightly. If we can somehow ensure that\r\neach object has at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 25
      }, this), " \"children\" then we only need to consider\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 1
      }, this), " spanning trees in order to find the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 55
      }, this), "-th smallest."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first step is to consider the easier problem of finding the second MST. To\r\ndo this, we can choose to exclude one edge of the MST and then find the smallest\r\npossible replacement for it. Let the edges in the MST be labeled ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\ldots N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 66
      }, this), ".\r\nThen one idea is to let the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 29
      }, this), "-th child subspace of the root to consist of all\r\nspanning trees not including edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 35
      }, this), " of the minimum spanning tree for each\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\in [1,N-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Unfortunately, this doesn't work because the child subspaces overlap. We can\r\ninstead let the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 17
      }, this), "-th child subspace contain all spanning trees that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["include the first ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 85,
          columnNumber: 21
        }, this), " edges of the MST"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["do not include the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 86,
          columnNumber: 22
        }, this), "-th edge of the MST"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\in [1,N-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 10
      }, this), ". Every spanning tree other than the root is contained\r\nwithin exactly one of these child subspaces, which is what we want. After\r\nsorting the edges in increasing order of weight once, we can compute the MST\r\nwithin each child subspace in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M\\alpha (N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 31
      }, this), " time with DSU."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Overall, the runtime is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NMK\\alpha(N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 25
      }, this), " for storing the information\r\nabout each spanning tree and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NK\\log (NK))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 30
      }, this), " for maintaining the\r\npriority queue of objects so that we can extract the minimum. Note that with the\r\nsecond approach mentioned in the first section the running time would instead be\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NMK\\alpha(N)\\log ans)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this), ", which may be too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\ntypedef bitset<1225> B;\r\ntypedef vector<int> vi;\r\n\r\nstruct DSU {  // for Kruskal's\r\n\tvi e;\r\n\tvoid init(int n) { e = vi(n, -1); }\r\n\tint get(int x) { return e[x] < 0 ? x : e[x] = get(e[x]); }\r\n\tbool sameSet(int a, int b) { return get(a) == get(b); }\r\n\tint size(int x) { return -e[get(x)]; }\r\n\tbool unite(int x, int y) {  // union by size\r\n\t\tx = get(x), y = get(y);\r\n\t\tif (x == y) return 0;\r\n\t\tif (e[x] > e[y]) swap(x, y);\r\n\t\te[x] += e[y];\r\n\t\te[y] = x;\r\n\t\treturn 1;\r\n\t}\r\n};\r\n\r\nint N, M, K;\r\nvector<array<int, 3>> ed;\r\n\r\nstruct Partition {\r\n\tB ban;\r\n\tvi span;\r\n\tint wei = 0,\r\n\t    fix = 0;  // \"fix\" smallest edges must be contained in spanning tree\r\n\tPartition(B _ban, int _fix) : ban(_ban), fix(_fix) {\r\n\t\tDSU D;\r\n\t\tD.init(N);  // now find MST within subspace\r\n\t\tfor (int i = 0; i < M; ++i)\r\n\t\t\tif (!ban[i] && D.unite(ed[i][1], ed[i][2]))\r\n\t\t\t\tspan.push_back(i),\r\n\t\t\t\t    wei += ed[i][0];  // run Kruskal's ignoring banned edges\r\n\t}\r\n};\r\nbool operator<(const Partition &l, const Partition &r) {\r\n\treturn l.wei > r.wei;\r\n}  // for pq\r\n\r\nint main() {\r\n\tcin >> N >> M >> K;\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, c;\r\n\t\tcin >> a >> b >> c;\r\n\t\ted.push_back({c, a - 1, b - 1});\r\n\t}\r\n\tsort(begin(ed), end(ed));\r\n\tpriority_queue<Partition> pq;\r\n\tpq.push({B(), 0});  // start with MST\r\n\tfor (int i = 1; i <= K; ++i) {\r\n\t\tif (!pq.size()) {\r\n\t\t\tcout << \"-1\\n\";\r\n\t\t\texit(0);\r\n\t\t}\r\n\t\tauto a = pq.top();\r\n\t\tpq.pop();\r\n\t\tassert(a.span.size() == N - 1);\r\n\t\tif (i == K) {\r\n\t\t\tcout << a.wei << \"\\n\";\r\n\t\t\texit(0);\r\n\t\t}  // print K-th smallest\r\n\t\twhile (a.fix < a.span.size()) {  // insert O(N) children\r\n\t\t\tB t = a.ban;\r\n\t\t\tt[a.span[a.fix]] = 1;\r\n\t\t\tauto A = Partition(t, a.fix);\r\n\t\t\tif (A.span.size() == N - 1) pq.push(A);\r\n\t\t\ta.fix++;\r\n\t\t}\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-robotic-cow-herd",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-robotic-cow-herd",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Robotic Cow Herd"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "As with the analysis, for each location you should"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "sort the controllers of that location by cost"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "add the controller of minimum cost for each location to the cost of the\r\ncheapest robot"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "subtract that minimum cost from every controller at that location (so now the\r\nminimum cost controller for each location is just zero)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Importantly, we should then sort the locations by their respective\r\nsecond-minimum controller costs."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-approach-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Binary search on the cost ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 27
      }, this), " of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 38
      }, this), "-th robot. If we can compute the costs\r\nof all robots with cost at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 33
      }, this), " or say that there are more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 69
      }, this), " in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 1
      }, this), " time, then we can solve this problem in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N+K\\log \\max(c))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 1
      }, this), " time (similar to \"Approach 2\" above). This\r\nis the approach that the first analysis solution takes, although it includes an\r\nextra ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 7
      }, this), " factor due to ", _jsxDEV(_components.code, {
        children: "upper_bound"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 30
      }, this), ". I have removed this in my solution\r\nbelow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\ntypedef long long ll;\r\ntypedef vector<int> vi;\r\ntypedef pair<ll, ll> pl;\r\n\r\n#define f first\r\n#define s second\r\n\r\nint N, K;\r\nll tot;  // sum of cheapest\r\nvector<vi> v;\r\n\r\nll mx;\r\nll res;\r\nint num;\r\n\r\nvoid dfs(int pos, ll cur, int id) {\r\n\tif (cur > mx || num == K) return;\r\n\tres += cur;\r\n\tnum++;\r\n\tif (id + 1 < v[pos].size()) dfs(pos, cur + v[pos][id + 1] - v[pos][id], id + 1);\r\n\tfor (int i = pos + 1; i < v.size(); ++i) {\r\n\t\tll CUR = cur + v[i][1];\r\n\t\tif (num == K || CUR > mx) break;\r\n\t\tdfs(i, CUR, 1);\r\n\t}\r\n}\r\n\r\nvoid get() {\r\n\tres = num = 0;\r\n\tdfs(0, tot, 0);\r\n}\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tfreopen(\"roboherd.in\", \"r\", stdin);\r\n\tfreopen(\"roboherd.out\", \"w\", stdout);\r\n\tcin >> N >> K;\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tint m;\r\n\t\tcin >> m;\r\n\t\tvi p(m);\r\n\t\tfor (int &x : p) cin >> x;\r\n\t\tsort(begin(p), end(p));\r\n\t\ttot += p[0];\r\n\t\tfor (int j = m - 1; j >= 0; --j) p[j] -= p[0];\r\n\t\tif (p.size() > 1) v.push_back(p);\r\n\t}\r\n\tsort(begin(v), end(v));  // sort by second-cheapest\r\n\tll lo = 0, hi = 1e13;\r\n\twhile (lo < hi) {\r\n\t\tmx = (lo + hi + 1) / 2;\r\n\t\tget();\r\n\t\tif (num < K) lo = mx;\r\n\t\telse hi = mx - 1;\r\n\t}\r\n\tmx = lo;\r\n\tget();\r\n\tcout << res + (K - num) * (mx + 1) << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 200,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 200,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-approach-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There's also an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N+K\\log K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 17
      }, this), " time solution with a priority\r\nqueue that constructs the robots in increasing order of cost. As before, we want\r\neach robot to have a bounded number of \"child\" robots. However, if you look at\r\nmy DFS function above, it seems that every robot can have up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 65
      }, this), " children!\r\nNevertheless, the DFS takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 29
      }, this), " rather than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(KN)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 58
      }, this), " time\r\ndue to the break statement, which works since we sorted by second-cheapest\r\nrobot."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 268,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In fact, we can modify the DFS function so that every robot has at most three\r\nrather than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 13
      }, this), " children."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "void dfs(int pos, ll cur, int id) {\r\n\tif (cur > mx || num == K) return;\r\n\tres += cur;\r\n\tnum++;\r\n\tif (id + 1 < v[pos].size()) dfs(pos, cur + v[pos][id + 1] - v[pos][id], id + 1);\r\n\tif (pos + 1 < v.size()) {\r\n\t\tif (id == 1) dfs(pos + 1, cur - v[pos][1] + v[pos + 1][1], 1);\r\n\t\tif (id) dfs(pos + 1, cur + v[pos + 1][1], 1);\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 279,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now I'll describe how the priority queue solution works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 292,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First start with the robot of minimum cost. The robot with second-minimum cost\r\ncan be formed by just choosing the second-minimum controller for the first\r\nlocation. After this, we have a few options:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 294,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "We can choose the third-minimum controller for the first location."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 298,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "We can discard the second-minimum controller for the first location and select\r\nthe second-minimum controller for the second location (and never again change\r\nthe controller selected for the first location)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "We can keep the second-minimum controller for the first location and select\r\nthe second-minimum controller for the second location (and never again change\r\nthe controller selected for the first location)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 302,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 298,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["None of these options can result in a robot of lower cost. In general, suppose\r\nthat we have a robot and are currently selecting the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 54
      }, this), "-th cheapest controller\r\nfor the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 308,
        columnNumber: 9
      }, this), "-th location. Then the transitions are as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 306,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Select the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 310,
          columnNumber: 14
        }, this), "-th cheapest controller for the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 310,
          columnNumber: 51
        }, this), "-th location instead."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 310,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j=2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 311,
          columnNumber: 6
        }, this), ", select the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 311,
          columnNumber: 24
        }, this), "-st cheapest controller for the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 311,
          columnNumber: 59
        }, this), "-th location\r\ninstead and also select the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 312,
          columnNumber: 31
        }, this), "-nd cheapest controller for the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 312,
          columnNumber: 66
        }, this), "-st."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Keep the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 313,
          columnNumber: 12
        }, this), "-th cheapest controller for the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 313,
          columnNumber: 47
        }, this), "-th location and also select\r\nthe ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 314,
          columnNumber: 7
        }, this), "-nd cheapest controller for the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 314,
          columnNumber: 42
        }, this), "-st."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 310,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since there exists exactly one way to get from the cheapest robot to every\r\npossible robot, we can use a priority queue."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 316,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\ntypedef long long ll;\r\ntypedef pair<int, int> pi;\r\ntypedef vector<int> vi;\r\ntypedef pair<ll, pi> T;\r\n\r\n#define f first\r\n#define s second\r\n\r\nint N, K;\r\nll tot;  // sum of cheapest\r\nvector<vi> v;\r\npriority_queue<T, vector<T>, greater<T>> pq;\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tfreopen(\"roboherd.in\", \"r\", stdin);\r\n\tfreopen(\"roboherd.out\", \"w\", stdout);\r\n\tcin >> N >> K;\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tint m;\r\n\t\tcin >> m;\r\n\t\tvi p(m);\r\n\t\tfor (int &x : p) cin >> x;\r\n\t\tsort(begin(p), end(p));\r\n\t\ttot += p[0];\r\n\t\tfor (int j = m - 1; j >= 0; --j) p[j] -= p[0];\r\n\t\tif (p.size() > 1) v.push_back(p);\r\n\t}\r\n\tsort(begin(v), end(v));  // sort by second-cheapest\r\n\tpq.push({0, {0, 0}});\r\n\tll ans = 0;\r\n\tfor (int i = 0; i < K; ++i) {\r\n\t\tauto a = pq.top();\r\n\t\tpq.pop();\r\n\t\tans += tot + a.f;\r\n\t\tint pos = a.s.f, id = a.s.s;\r\n\t\tif (id + 1 < v[pos].size())\r\n\t\t\tpq.push({a.f + v[pos][id + 1] - v[pos][id], {pos, id + 1}});\r\n\t\tif (pos + 1 < v.size()) {\r\n\t\t\tif (id == 1) pq.push({a.f - v[pos][1] + v[pos + 1][1], {pos + 1, 1}});\r\n\t\t\tif (id) pq.push({a.f + v[pos + 1][1], {pos + 1, 1}});\r\n\t\t}\r\n\t}\r\n\tcout << ans << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 319,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-other-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-other-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Other Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 371,
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
