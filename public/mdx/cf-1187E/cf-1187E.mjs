"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/68111",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (C++)"
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
      id: "user-content-explanation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice that choosing a leaf node is more optimal than\r\nchoosing anything in the middle because that way we have the entire size of the\r\nrest of the tree as a part of the leftover connected component. This hints for a\r\nDP on Trees solution, where we choose one leaf node, work our way up through\r\nthat leaf node's ancestors and work our way down for each of our ancestor's\r\nsiblings, incorporating the maximum possible cost for each of their subtrees.\r\nFor example, for the following tree:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/gold/cf-1187E/tree.png",
        alt: "Tree Visualization"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If we select the 4th node as our starting point, then the process would look\r\nlike the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Work our way up to 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Work our way down to 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Work our way up to 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Work our way down to 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We need to maintain the cost of two different scenarios for each node: working\r\nup from a leaf node to the current node and working down from the current node\r\nthroughout its whole subtree, meaning that we have to maintain 2 DP arrays.\r\nLet's define the DP transitions for each of the arrays. We will use ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 69
      }, this), " for\r\nthe cost of working down and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 30
      }, this), " for the cost of working up and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sz"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 68
      }, this), " for the\r\nsize of a subtree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\nsz[u] &= 1 + \\sum_{c\\in child(u)} sz[c] \\\\\r\ndp_1[u] &= sz[u] + \\sum_{c\\in child(u)} dp_1[c]\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can calculate this DP array with a single DFS search. Now, for the second DP\r\narray:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_2[u] = \\max_{c\\in child(u)} (((sz[u] - sz[c])\\cdot (\\texttt{distance to initial node}+1)) + dp_2[c] + \\sum_{d\\in sibling(c)}dp_1[d])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There is still one problem though. The cost of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sz[u] - sz[c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 48
      }, this), " is multiplied by\r\nthe number of nodes between the current node and the initial node inclusive.\r\nHowever, we can't anticipate this number beforehand, and we might have some\r\nancestor node later on which would have preferred a higher distance over a higher\r\ncost. This means that we need to incorporate the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sz[u] - sz[c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 50
      }, this), " for every\r\nancestor node when initializing the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 37
      }, this), " value for leaf nodes. That way we, it\r\nwill be incorporated into the cost beforehand and we don't need to worry about\r\nchoosing the wrong initial node with an inoptimal ending cost."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can calculate these initial values with another DFS search before the one\r\ncalculating the values for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 28
      }, this), ". That way we can remove the term including\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sz[u] - sz[c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), " from the recurrence formula for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 49
      }, this), ". To calculate these\r\ninitial values, we notice that every time we go down by one depth, we add size\r\nof all the siblings and parent combined two times, one for the parent, and once\r\nfor the current node. We also add the cost of all the ancestor's siblings and\r\nparent combined once more. Let's say ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_2[u]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 38
      }, this), " is the initial cost for a leaf\r\nnode ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 6
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_1[u]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 15
      }, this), " is the cost of the ancestor's siblings and parent\r\ncombined till ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 15
      }, this), ". Then we can calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_1[u]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_2[u]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 55
      }, this), " using the\r\nfollowing recurrence:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\np_1[u] &= p_1[p] + sz[p] - sz[u] \\\\\r\np_2[u] &= p_2[p] + p_1[u] + sz[p] - sz[u]\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 65,
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
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 74,
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
