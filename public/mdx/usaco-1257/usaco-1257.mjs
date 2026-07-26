"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob1_gold_dec22.html",
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
      children: "The difficulty in this problem comes from the fact that we can use both moonies and ice cream cones to bribe friends. If we only had one method of bribery, this would turn into a simple 0/1 knapsack problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To simplify, let's consider an optimal expenditure of ice cream cones and moonies. For every ice cream cone we spend on a given cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 133
      }, this), ", we are saving ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 152
      }, this), " moonie every ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 169
      }, this), " ice cream cones. Intuitively, we should distribute the ice cream cones across the friends with the lowest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 281
      }, this), ", because this maximizes the amount of moonies we can save."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This can be proven via ", _jsxDEV(_components.a, {
        href: "https://www.cs.cornell.edu/courses/cs482/2007su/exchange.pdf",
        rel: "nofollow",
        target: "_blank",
        children: "exchange argument"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 24
      }, this), ". Consider two cows ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 125
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 133
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_i > X_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 144
      }, this), ". If we spent ice cream cones on cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 192
      }, this), " instead of cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 211
      }, this), ", then each moonie we saved would need ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_i - X_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 253
      }, this), " more ice cream cones."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To transition this to a 0/1 knapsack problem, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 51
      }, this), " represent the maximum possible popularity achievable at state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 121
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["For ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "0 \\leq i \\leq B"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 7
          }, this), ", ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 26
          }, this), " represents the amount of ice cream cones used, while ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 83
          }, this), " moonies have been used."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["For ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "B < i \\leq B + A"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 7
          }, this), ", ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i - B"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 27
          }, this), " represents the amount of moonies used after using all usable ice cream cones."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Our state transition depends on the amount of moonies and ice cream cones we have left."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i > B"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 6
          }, this), ", we have already exhausted all ice cream cones, and can only use moonies to bribe friends."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Let ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "R = B - i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 7
          }, this), " represent the remaining amount of ice cream cones left at position ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 86
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: ["If the ", _jsxDEV(_components.code, {
                className: "language-math",
                children: "R"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 24,
                columnNumber: 11
              }, this), " is enough to fully bribe the current friend, we can choose to bribe that friend and use ", _jsxDEV(_components.code, {
                className: "language-math",
                children: "X_i \\cdot C_i"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 24,
                columnNumber: 103
              }, this), " ice cream cones in the process."]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 24,
              columnNumber: 4
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: ["If the ", _jsxDEV(_components.code, {
                className: "language-math",
                children: "R"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 26,
                columnNumber: 11
              }, this), " isn't enough to fully bribe the current friend, we spend ", _jsxDEV(_components.code, {
                className: "language-math",
                children: "C_i - \\lfloor\\frac{R}{X_i}\\rfloor"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 26,
                columnNumber: 72
              }, this), " moonies to bribe that friend, pushing our index to ", _jsxDEV(_components.code, {
                className: "language-math",
                children: "B + C_i - \\lfloor\\frac{R}{X_i}\\rfloor"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 26,
                columnNumber: 159
              }, this), " since all ice cream cones are considered exhausted."]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 26,
              columnNumber: 4
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 26,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We sort the friends by increasing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 35
      }, this), ". This gurantees that when we loop through our friends, we are using our ice creams on the friends with lower ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 150
      }, this), " first, before using any moonies. At the end, we take the maximum of our DP array as our answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\cdot (A + B))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
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
