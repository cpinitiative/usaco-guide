"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the node that Gigel goes to from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 43
      }, this), " be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 50
      }, this), ". Since the graph made\r\nfrom the directed edges ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\rightarrow t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 25
      }, this), " is a\r\n", _jsxDEV(_components.a, {
        href: "/silver/func-graphs",
        children: "functional graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), ", we can use\r\n", _jsxDEV(_components.a, {
        href: "/plat/bin-jump",
        children: "binary jumping"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " or any other efficient method to find the final\r\nnode."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now we only need to find all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 30
      }, this), " and we are done! However, this isn't as\r\nstraightforward as it sounds..."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-a-simpler-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-a-simpler-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "A simpler problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's consider a simpler problem: suppose we root the tree at node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 68
      }, this), " and Gigel\r\ncan only move down the tree (don't worry about the leaves). In this problem, we\r\ncan find all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 14
      }, this), " (and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[t_i] - dist(i, t_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 25
      }, this), ") using a simple tree DP:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 5
      }, this), " be the node in the subtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 43
      }, this), " (excluding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 58
      }, this), " itself) such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[dp[i]] - dist(i, dp[i])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " is maximized. Additionally, we store this value in\r\nthe DP array. We can find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 27
      }, this), " by taking the best of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 57
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 65
      }, this), " over all\r\nchildren ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 10
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 17
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This algorithm runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 24
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-finding-all-t_i",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-all-t_i",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 16
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Obviously, the solution to the simpler problem doesn't solve the general\r\nproblem: we might need to move up into a node's parent!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To address this issue, we can first do a DFS to find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 54
      }, this), " as defined above, and\r\nthen do a second DFS to allow moving outside our subtree. See the\r\n", _jsxDEV(_components.a, {
        href: "/gold/all-roots",
        children: "solving for all roots module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), " if you're unfamiliar with this\r\ntechnique. Essentially, we find the best destination from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 59
      }, this), " if we move up into\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "'s parent and then compare that with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After doing this, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 19
      }, this), " is simply ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 37
      }, this), " as desired."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-finding-the-final-destination",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-the-final-destination",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding the final destination"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two ways we can go about finding Gigel's final location."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We can implement ", _jsxDEV(_components.a, {
          href: "/plat/bin-jump",
          children: "binary jumping"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 21
        }, this), " on our array containing the next location"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "We try to reach a cycle, and then take our remaining jumps modulo the cycle size"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first method is a tad easier to implement, but introduces a log factor."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      }, this), "Implementation 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N \\log{K})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 143,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 145,
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
