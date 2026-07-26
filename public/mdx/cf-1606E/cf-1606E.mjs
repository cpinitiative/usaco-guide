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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/96454",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
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
      children: ["Let's consider our first round, where we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 47
      }, this), " players and no damage\r\nhas been dealt so far. Then, after this first round, any player with\r\nhealth in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, n-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 21
      }, this), " will be killed. In general, if we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 71
      }, this), " heroes, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 87
      }, this), " damage has been dealt so far, then any hero with health in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[j + 1, j + i - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 160
      }, this), " will be killed in this round."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice that the ranges of health values that get killed in each around are disjoint. This indicates that we should do our counting based on\r\nthe results from each round."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The only thing that affects which range of values gets killed in a round\r\nare the number of heroes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 26
      }, this), " that are alive, and the damage ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 61
      }, this), ". Instead of thinking from the perspective of assigning health to the heroes currently alive, we instead assign health to the heroes that die, as\r\nthe round that a hero dies in directly maps to a range of possible health values."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With this approach in mind, let's formulate a DP state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 56
      }, this), ", which equals the number of ways we can assign health to the heroes that were killed, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 165
      }, this), " of them are still alive and a total of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 208
      }, this), " damage has been dealt to all the heroes. Then, we have to consider\r\nthree separate cases for the outcome of a round."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If no hero dies, we still need to consider this as a round that has been completed. Thus, we perform the following transition:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j + i - 1] \\mathrel{+}= \\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If some, but not all heroes die, then we know that the heroes who died had health values in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[j + 1, j + i - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 103
      }, this), ". Also, we have to choose which heroes out of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 173
      }, this), " heroes currently alive will die. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 214
      }, this), " be the new number of heroes after this round. Then, we have the following transition:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[k][j + i - 1] \\mathrel{+}= \\texttt{dp}[i][j] \\cdot {i \\choose i - k} \\cdot (\\min(x - j, i - 1))^{i-k}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Lastly, if all the heros die, then we handle the transition in the exact\r\nsame way as the previous one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
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
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 X)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
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
