"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: ["In this section I will briefly walk over my understanding of min cost flow. I\r\nwould highly recommend reading through\r\n", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/graph/min_cost_flow.html",
        rel: "nofollow",
        target: "_blank",
        children: "CP-Algorithm's Min Cost Flow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "\r\nto understand the solution idea first. Additionally, check the\r\n", _jsxDEV(_components.a, {
        href: "https://www.topcoder.com/community/competitive-programming/tutorials/minimum-cost-flow-part-two-algorithms/",
        rel: "nofollow",
        target: "_blank",
        children: "TopCoder tutorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\r\nfor a more detailed explanation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-triangle-inequality",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-triangle-inequality",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Triangle Inequality"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In graph theory, the ", _jsxDEV(_components.strong, {
        children: "Triangle Inequality"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 22
      }, this), " states that if there is an edge\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u \\rightarrow v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), " with weight ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 31
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 40
      }, this), " be the shortest path to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 75
      }, this), "\r\n(for some reasonable definition of shortest path), then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_v - d_u \\leq w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 57
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-johnsons-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-johnsons-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Johnson's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The main idea of ", _jsxDEV(_components.strong, {
        children: "Johnson's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 18
      }, this), " is that if all edge weights are\r\npositive, then running Dijkstra's from each node would result in a\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(VE \\log E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), " algorithm. If there are any negative edges, ", _jsxDEV(_components.strong, {
        children: "Johnson's\r\nAlgorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 70
      }, this), " defines a potential function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 42
      }, this), ", such that for every edge\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u,v,w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), ", the following holds: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w>=\\pi(u)-\\pi(v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 31
      }, this), ". Then, each edge weight can be\r\ntransformed into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w \\rightarrow w + \\pi(v)-\\pi(u)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 18
      }, this), ", resulting in positive\r\nweight. This condition coincides with the ", _jsxDEV(_components.strong, {
        children: "Triangle Inequality"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 43
      }, this), ", so we can\r\narbitrarily pick a node and run a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(VE)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 35
      }, this), " shortest path algorithm to\r\ndetermine this function."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-minimum-cost-flow",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-minimum-cost-flow",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Minimum Cost Flow"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The general idea of Min Cost Flow is to repeatedly push flow along the shortest\r\npath. Since flow graphs have negative edges, each step naively would take\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(VE)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this), " time. To speed it up, we can use the same potential function\r\nfrom ", _jsxDEV(_components.strong, {
        children: "Johnson's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 6
      }, this), " to employ Dijkstra for this process. In this case\r\nwe ", _jsxDEV(_components.em, {
        children: "must"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 4
      }, this), " use distance from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 29
      }, this), ", the source node, as the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 58
      }, this), " function. At each\r\nstep, run Dijkstra's using the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 32
      }, this), " function, update the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 59
      }, this), " function to\r\nmatch the current distances, and then push flow along the shortest path,\r\nreversing edges as needed. Once flow is met or the sink is unreachable,\r\nterminate."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With all this being said, here is my implementation."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "template <int MN, int MM>\r\nstruct MCF  // MN = nodes, MM = edges [assume edges one-directional]\r\n{\r\n  public:\r\n\tint N, M, S, T;\r\n\tint flow[MM * 2], cap[MM * 2], hd[MN], nx[MM * 2], to[MM * 2], cost[MM * 2];\r\n\tint pi[MN], p[MN], d[MN];\r\n\tint vis[MN];\r\n\tvoid init(int n, int s, int t) {\r\n\t\tN = n, S = s, T = t;\r\n\t\tmemset(hd, -1, sizeof hd);\r\n\t}\r\n\tvoid adde1(int a, int b, int f, int c) {\r\n\t\tnx[M] = hd[a], hd[a] = M;\r\n\t\tto[M] = b, cost[M] = c, cap[M] = f;\r\n\t\tM++;\r\n\t}\r\n\tvoid adde(int a, int b, int f, int c) {\r\n\t\tadde1(a, b, f, c);\r\n\t\tadde1(b, a, 0, -c);\r\n\t}\r\n\tvoid setpi() {\r\n\t\tstd::queue<int> q;\r\n\t\tmemset(pi, 0x3e, sizeof pi);\r\n\t\tmemset(vis, 0, sizeof vis);\r\n\t\tq.push(S);\r\n\t\tpi[S] = 0;\r\n\t\tfor (int n; !q.empty();) {\r\n\t\t\tn = q.front();\r\n\t\t\tq.pop();\r\n\t\t\tfor (int id = hd[n], x; ~id; id = nx[id]) {\r\n\t\t\t\tif (cap[id] - flow[id] <= 0) continue;\r\n\t\t\t\tx = to[id];\r\n\t\t\t\tif (ckmin(pi[x], pi[n] + cost[id])) assert(++vis[x] <= N), q.push(x);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tstruct state {\r\n\t  public:\r\n\t\tint n, d;\r\n\t\tbool operator>(state o) const { return d > o.d; }\r\n\t};\r\n\tvoid dijk() {\r\n\t\tstd::priority_queue<state, std::vector<state>, std::greater<state>> q;\r\n\t\tmemset(p, -1, N * sizeof p[0]);\r\n\t\tmemset(vis, 0, N * sizeof vis[0]);\r\n\t\tmemset(d, 0x3e, N * sizeof d[0]);\r\n\r\n\t\td[S] = 0;\r\n\t\tq.push({S, 0});\r\n\t\tfor (int n; !q.empty();) {\r\n\t\t\tn = q.top().n;\r\n\t\t\tq.pop();\r\n\t\t\tif (vis[n]) continue;\r\n\t\t\tvis[n] = 1;\r\n\t\t\tfor (int id = hd[n], x, w; ~id; id = nx[id]) {\r\n\t\t\t\tif (cap[id] - flow[id] <= 0) continue;\r\n\t\t\t\tx = to[id];\r\n\t\t\t\tw = cost[id] + pi[n] - pi[x];\r\n\t\t\t\tif (ckmin(d[x], w + d[n])) p[x] = id, q.push({x, d[x]});\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tint mincost(int F) {\r\n\t\tsetpi();\r\n\t\tint C = 0;\r\n\t\twhile (F > 0) {\r\n\t\t\tdijk();\r\n\t\t\tif (d[T] == INF) return INF;\r\n\t\t\tint c = d[T] + pi[T] - pi[S], f = F;\r\n\t\t\tfor (int x = T; x != S; x = to[p[x] ^ 1]) ckmin(f, cap[p[x]] - flow[p[x]]);\r\n\t\t\tC += c * f;\r\n\t\t\tfor (int x = T; x != S; x = to[p[x] ^ 1]) {\r\n\t\t\t\tflow[p[x]] += f;\r\n\t\t\t\tflow[p[x] ^ 1] -= f;\r\n\t\t\t}\r\n\t\t\tF -= f;\r\n\t\t\tfor (int i = 0; i < N; ++i) pi[i] += d[i];\r\n\t\t}\r\n\t\treturn C;\r\n\t}\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Also check out\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/bqi343/USACO/blob/master/Implementations/content/graphs%20(12)/Flows%20(12.3)/MCMF.h",
        rel: "nofollow",
        target: "_blank",
        children: "Benq's Implementation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 1
      }, this), "\r\nand\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/kth-competitive-programming/kactl/blob/master/content/graph/MinCostMaxFlow.h",
        rel: "nofollow",
        target: "_blank",
        children: "KACTL's Implementation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 1
      }, this), "\r\n(which are a lot better than mine)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 189,
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
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-applications",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applications",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applications"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 199,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-assignment-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-assignment-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Assignment Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 201,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The assignment problem is best understood as a min cost max flow problem. In our\r\nformulation, we will assign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 29
      }, this), " workers to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "J"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 44
      }, this), " jobs, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "J \\ge W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 54
      }, this), ", and the cost of\r\nassigning the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 207,
        columnNumber: 15
      }, this), "th job to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 207,
        columnNumber: 32
      }, this), "th worker is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_{i,j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 207,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 205,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will create a flow network with a source node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 50
      }, this), ", job nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "J_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 65
      }, this), ", worker\r\nnodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "W_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 7
      }, this), ", and a sink node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 30
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 209,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We will have the following edges:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(S, J_i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 214,
          columnNumber: 3
        }, this), " with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(capacity, cost) = (1, 0)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 214,
          columnNumber: 19
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(J_i, W_j)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 3
        }, this), " with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(1, C_{i,j})"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 21
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(W_j, E)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 216,
          columnNumber: 3
        }, this), " with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(1, 0)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 216,
          columnNumber: 19
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The answer will be the minimum cost of the max flow of the graph. An example:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/hungarian_algo_graph.png",
        alt: "Hungarian Algorithm Flows Diagram"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 220,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 220,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To solve this, we will use the min cost max flow algorithm detailed above. In\r\nevery iteration of the algorithm, we will assign a job to a worker. In each\r\niteration, we will first assign the job to an auxiliary worker, then we will try\r\nto find an augmenting path with minimum cost. To optimize this, we will only run\r\nDijkstra on the worker nodes. For details, refer to the code."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "J"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 17
      }, this), " iterations (for each job) and each iteration takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(W^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 72
      }, this), "\r\ntime, the overall time complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(J W^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 229,
        columnNumber: 38
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 231,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "From Wikipedia (which is then copied from e-maxx):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 233,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint ckmin(int &a, int b) { return a > b ? ((a = b), true) : false; }\r\n\r\n/**\r\n * @return the jobs of each worker in the optimal assignment,\r\n * or -1 if the worker is not assigned\r\n */\r\ntemplate <class T> vector<int> hungarian(const vector<vector<T>> &C) {\r\n\tint J = C.size();\r\n\tint W = C[0].size();\r\n\tassert(J <= W);\r\n\r\n\t// job[w] = job assigned to w-th worker, or -1 if no job assigned\r\n\t// note: a W-th worker was added for convenience\r\n\tvector<int> job(W + 1, -1);\r\n\tvector<T> h(W);  // Johnson potentials\r\n\r\n\tconst T inf = numeric_limits<T>::max();\r\n\t// assign j_cur-th job using Dijkstra with potentials\r\n\tfor (int j_cur = 0; j_cur < J; j_cur++) {\r\n\t\tint w_cur = W;  // unvisited worker with minimum distance\r\n\t\tjob[w_cur] = j_cur;\r\n\r\n\t\tvector<T> dist(W + 1, inf);  // Johnson-reduced distances\r\n\t\tdist[W] = 0;\r\n\t\tvector<bool> vis(W + 1);     // whether visited yet\r\n\t\tvector<int> prv(W + 1, -1);  // previous worker on shortest path\r\n\t\twhile (job[w_cur] != -1) {   // Dijkstra step: pop min worker from heap\r\n\t\t\tT min_dist = inf;\r\n\t\t\tvis[w_cur] = true;\r\n\t\t\tint w_next = -1;  // next unvisited worker with minimum distance\r\n\r\n\t\t\t// consider extending shortest path by w_cur -> job[w_cur] -> w\r\n\t\t\tfor (int w = 0; w < W; w++) {\r\n\t\t\t\tif (!vis[w]) {\r\n\t\t\t\t\t// sum of reduced edge weights w_cur -> job[w_cur] -> w\r\n\t\t\t\t\tT edge = C[job[w_cur]][w] - h[w];\r\n\t\t\t\t\tif (w_cur != W) {\r\n\t\t\t\t\t\tedge -= C[job[w_cur]][w_cur] - h[w_cur];\r\n\t\t\t\t\t\tassert(edge >= 0);\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (ckmin(dist[w], dist[w_cur] + edge)) { prv[w] = w_cur; }\r\n\t\t\t\t\tif (ckmin(min_dist, dist[w])) { w_next = w; }\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tw_cur = w_next;\r\n\t\t}\r\n\r\n\t\tfor (int w = 0; w < W; w++) {  // update potentials\r\n\t\t\tckmin(dist[w], dist[w_cur]);\r\n\t\t\th[w] += dist[w];\r\n\t\t}\r\n\r\n\t\twhile (w_cur != W) {  // update job assignment\r\n\t\t\tjob[w_cur] = job[prv[w_cur]];\r\n\t\t\tw_cur = prv[w_cur];\r\n\t\t}\r\n\t}\r\n\r\n\treturn job;\r\n}\r\n\r\nint main() {\r\n\tint n;\r\n\tcin >> n;\r\n\tvector<vector<int>> c(n, vector<int>(n));\r\n\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tfor (int j = 0; j < n; j++) { cin >> c[i][j]; }\r\n\t}\r\n\r\n\tvector<int> mat = hungarian(c);\r\n\tint cost = 0;\r\n\tfor (int i = 0; i < n; i++) { cost += c[mat[i]][i]; }\r\n\tcout << cost << endl;\r\n\tfor (int i = 0; i < n; i++) { cout << mat[i] + 1 << ' ' << i + 1 << endl; }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 235,
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
