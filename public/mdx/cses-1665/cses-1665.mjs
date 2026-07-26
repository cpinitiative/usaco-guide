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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, sort the people. This allows us to express the contribution of each team\r\nas ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\text{Skill of last person}) - (\\text{Skill of first person})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 4
      }, this), ". Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 74
      }, this), "\r\ndenote the skill of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 25
      }, this), "-th person."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j][k] ="
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " The number of ways we can form teams from the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 69
      }, this), " people\r\nsuch that there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 21
      }, this), " \"unfinished\" teams and the total penalty so far is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 76
      }, this), ". If the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 88
      }, this), "-th person is the least skilled in an unfinished team, we define its contribution to the penalty as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-s_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 191
      }, this), ". Similarly, finishing a team with person ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 239
      }, this), " contributes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 255
      }, this), " to the penalty. These definitions follow directly from the previous observation that the contribution of a team is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_r - s_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 376
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There are 4 cases when we transition from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 43
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 54
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We make a team consisting of only person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 44
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i - 1][j][k]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 14,
              columnNumber: 5
            }, this), " transitions to the state ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i][j][k]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 14,
              columnNumber: 48
            }, this), " (unfinished teams and penalty are not affected)."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 14,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We append person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 20
        }, this), " to an unfinished team.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["This transitions to the state ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i][j][k]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 16,
              columnNumber: 35
            }, this), " (again, unfinished teams and penalty are not affected). There are ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 16,
              columnNumber: 115
            }, this), " unfinished teams we can choose to extend, so ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i][j][k] \\mathrel{+}= j \\cdot dp[i - 1][j][k]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 16,
              columnNumber: 164
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We use person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 17
        }, this), " to \"finish\" an unfinished team.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["This transitions to the state ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i][j - 1][k + s_i]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 35
            }, this), " (one less unfinished team, and we add to penalty as discussed above). There are again ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 145
            }, this), " unfinished teams to choose from, so ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i][j - 1][k + s[i]] \\mathrel{+}= j \\cdot dp[i - 1][j][k]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 185
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 18,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We start a new unfinished team with person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 46
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["This transitions to the state ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "dp[i][j + 1][k - s[i]]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 20,
              columnNumber: 35
            }, this), " (one more unfinished team, and we subtract from penalty as discussed above)."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Two more things:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 3
        }, this), " in our DP array can be negative, so just add 5000 to each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 65
        }, this), "; there can be at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N/2 = 50"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 91
        }, this), " unfinished intervals, and each of them contributes at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "-100"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 161
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "dp[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 3
        }, this), " depends only on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "dp[i - 1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 27
        }, this), ", so we can drop the first dimension that\r\nwe store (to save memory)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I believe that this is called the \"open and close interval trick\". See\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/47764",
        rel: "nofollow",
        target: "_blank",
        children: "zscoder's blog post"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), " for more\r\ninformation and problems."]
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 \\cdot (X + K))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
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
