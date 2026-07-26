"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/74493",
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
      children: ["Notice that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p \\leq 7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 13
      }, this), ". This means that if we use a bitmask to represent different positions, there are a maximum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^7 = 128"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 118
      }, this), " different positions, which is manageable for bitmask DP."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Each person can be used in one of three ways. You can either choose them as an audience member, as a player for one position, or just ignore them."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, we sort people in decreasing audience strengths. Any later audience weight would be lower than the earlier person's audience weight, so it's optimal to always choose the earlier person for the audience, and the rest we consider for the position. Thus, we consider people with higher audience values earlier."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, we can do the DP. For intuition, we can think of this as a 2D DP ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][\\texttt{mask}]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 71
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 110
      }, this), " is the number of processed people. However, every time we process a new person, it only depends on the DP of the previous person. We implement this using a 1D DP called ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{newdp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 283
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As we process each person one by one, we build a new DP from the original DP, which we define as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{newdp} = \\texttt{copy(dp)}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 98
      }, this), ". Initially, this represents the option of ignoring the current person. For each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{mask}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 215
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{newdp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 234
      }, this), ", we know the number of people chosen for the team so far (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{popcount(mask)}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 309
      }, this), "), so among the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 356
      }, this), " processed people, the number of non-players is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - \\texttt{popcount(mask)}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 407
      }, this), ". Because people are sorted by decreasing audience strength, the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 507
      }, this), " non-players are the most optimal audience members, and any later non-players are ignored."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To consider a new person, we now have two options for the DP transition."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The first option is to add the person as an audience member, provided that the audience is not yet full. That is, we know that the audience isn't full if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i - \\texttt{popcount(mask)} < k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 157
        }, this), ", since the first ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 208
        }, this), " non-players are taken as audience members due to sorting.  In this case, the DP transition is: we either keep the current strength, or add this person to the audience to increase it:"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{newdp[mask]} = \\max(\\texttt{newdp[mask]}, \\texttt{dp[mask]} + \\texttt{audience\\_strength[person]})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The other option is to make this person a player. Since unset bits in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{mask}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 73
        }, this), " represent empty positions, we can try assigning this person to each of them. This will be fast enough because ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p \\leq 7"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 199
        }, this), ". For each position ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{pos},"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 229
        }, this), " given that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{new\\_mask} =\r\n\\texttt{mask}~\\vert~(1 \\ll \\texttt{pos})"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 256
        }, this), ", we try"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{newdp[new\\_mask]} = \\max(\\texttt{newdp[new\\_mask]},~\\texttt{dp[mask]} + \\texttt{position\\_strength[person][pos]})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After processing all people, the final answer is the DP value for the full subset of players."
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
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\cdot p\\cdot 2^p)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-alternate-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternate-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternate Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/74493?#comment-586020",
        rel: "nofollow",
        target: "_blank",
        children: "Minimum Cost Flow Solution"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 219,
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
