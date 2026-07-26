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
    children: [_jsxDEV(_components.p, {
      children: ["To review, a ", _jsxDEV(_components.strong, {
        children: "directed"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 14
      }, this), " graph consists of edges that can only be traversed in\r\none direction. Additionally, an ", _jsxDEV(_components.strong, {
        children: "acyclic"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 33
      }, this), " graph defines a graph which does not\r\ncontain cycles, meaning you are unable to traverse across one or more edges and\r\nreturn to the node you started on. Putting these definitions together, a\r\n", _jsxDEV(_components.strong, {
        children: "directed acyclic"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " graph, sometimes abbreviated as DAG, is a graph which has\r\nedges which can only be traversed in one direction and does not contain cycles."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-topological-sort",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-topological-sort",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Topological Sort"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Topological_sorting",
        rel: "nofollow",
        target: "_blank",
        children: "topological sort"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 3
      }, this), " of a\r\ndirected acyclic graph is a linear ordering of its vertices such that for every\r\ndirected edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u\\to v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 15
      }, this), " from vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 36
      }, this), " to vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 50
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 55
      }, this), " comes before ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 72
      }, this), " in\r\nthe ordering."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two common ways to topologically sort, one involving DFS and the other\r\ninvolving BFS."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "DFS"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-bfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "BFS"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 252,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The BFS version is known as\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm",
        rel: "nofollow",
        target: "_blank",
        children: "Kahn's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 254,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-a-cycle",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-a-cycle",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding a Cycle"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 415,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "We can modify the DFS algorithm above to return a directed cycle in the case where a\r\ntopological sort does not exist.\r\nTo find the cycle, we add each node we visit onto the stack\r\nuntil we detect a node already on the stack."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 419,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, suppose that our stack currently consists of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1,s_2,\\ldots,s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 424,
        columnNumber: 59
      }, this), "\r\nand we then visit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u=s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 19
      }, this), " for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j\\le i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 36
      }, this), ".\r\nIf that's the case, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j\\to s_{j+1}\\to \\cdots\\to s_i\\to s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 426,
        columnNumber: 26
      }, this), " is a cycle.\r\nWe can reconstruct the cycle without explicitly storing the stack b\r\nmarking ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 9
      }, this), " as not part of the stack and recursively backtracking\r\nuntil ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 429,
        columnNumber: 7
      }, this), " is reached again."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 424,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 636,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["One useful property of directed acyclic graphs is, as the name suggests, that no\r\ncycles exist. If we consider each node in the graph as a state, we can perform\r\ndynamic programming on the graph if we process the states in an order that\r\nguarantees for every edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u\\to v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 649,
        columnNumber: 27
      }, this), " that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 649,
        columnNumber: 41
      }, this), " is processed before ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 649,
        columnNumber: 65
      }, this), ".\r\nFortunately, this is the exact definition of a topological sort!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 646,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In this task, we must find the longest path in a DAG."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 654,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---longest-flight-route",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---longest-flight-route",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Longest Flight Route"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 656,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[v]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 658,
        columnNumber: 5
      }, this), " denote the length of the longest path ending at the node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 658,
        columnNumber: 70
      }, this), ".\r\nClearly"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 658,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[v]=\\max_{\\text{edge } u\\to v \\text{ exists}}dp[u]+1,"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 661,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 665,
        columnNumber: 4
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 665,
        columnNumber: 11
      }, this), " is node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 665,
        columnNumber: 23
      }, this), ". If we process the states in topological order, it is\r\nguaranteed that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[u]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 666,
        columnNumber: 17
      }, this), " will already have been computed before computing\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[v]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 667,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 665,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that the implementation of this idea below uses Kahn's algorithm for\r\ntopological sorting:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 669,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 919,
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
