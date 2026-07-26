"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/104763",
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
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First observe that if any number is present on more than 2 dominoes or if a domino has the same number repeated twice, as then,\r\nit is impossible to create the 2 sets. This is because both cases would result in one group having two numbers (we can't fit 3 items in 2 groups without\r\nthat happening)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can turn this problem into\r\na graph problem by drawing edges between dominoes that share numbers (the main motivation for this is that we have 2 sets, which reminds us of bipartite splits). Specifically, let domino ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 188
      }, this), " have the two numbers\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 11
      }, this), ". Then we draw an edge between dominoes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 64
      }, this), " if and only if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i = a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 83
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i = b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 98
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j = b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 113
      }, this), "\r\nor ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j = b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 4
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, suppose that we have a way to create the 2 sets, with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{n}2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 60
      }, this), " dominoes in each set.\r\nSince each number appears only once in each set, this graph is bipartite."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This leads us to the following assertion: It is possible to construct the two sets\r\n", _jsxDEV(_components.a, {
        href: "https://artofproblemsolving.com/wiki/index.php/Iff",
        rel: "nofollow",
        target: "_blank",
        children: "if and only if"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), " the graph constructed as above is bipartite. We proved\r\nthe only if clause above, all that remains is to prove the if clause."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Suppose the graph is bipartite. Divide the graph into two sets according to the bipartite split of the graph. We wish to prove\r\nthat no numbers are repeated twice in either of these sets. However, since an edge exists between any two dominoes which share\r\na number, it is impossible for two dominoes which share a number to be in the same set (if it were possible, we would have a\r\ncycle of length 1, which is odd, contradicting the fact that the graph is bipartite). So, given a bipartite split of the graph,\r\nwe can easliy construct our 2 desired sets."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The implementation of this is relatively straight forward; Simply check if the graph is bipartite or not, and output accordingly."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
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
