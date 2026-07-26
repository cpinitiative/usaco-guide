"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
        href: "https://codeforces.com/blog/entry/111194",
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
      children: ["First, note that outcomes between opponents are known beforehand: opponent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 76
      }, this), "\r\nalways beats opponent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 23
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i > j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 30
      }, this), ", so opponent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 51
      }, this), " has exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 67
      }, this), " wins\r\nfrom inter-opponent matches regardless of what you do."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When you play opponent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 24
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If you ", _jsxDEV(_components.strong, {
          children: "beat"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 10
        }, this), " them: they end with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 39
        }, this), " wins."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If you ", _jsxDEV(_components.strong, {
          children: "lose"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 10
        }, this), " to them: they end with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 42
        }, this), " wins (gaining one over you)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-counting-opponents-who-beat-you",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-counting-opponents-who-beat-you",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Counting Opponents Who Beat You"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you beat a subset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 22
      }, this), " of opponents (with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|S| = k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 45
      }, this), "), you have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 66
      }, this), " wins.\r\nOpponents with index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\geq k + 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 22
      }, this), " always end up with more wins than you.\r\nThe only opponent on the boundary is opponent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 47
      }, this), ": they have exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 74
      }, this), "\r\nwins from other matches, and beat you if you lost to them, pushing them above\r\nyou. So beating opponent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 26
      }, this), " saves you exactly one place."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimal-strategy",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimal-strategy",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimal Strategy"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We iterate over each valid ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 28
      }, this), " (number of opponents you beat) and compute the\r\nbest achievable place:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.strong, {
            children: "Case 1:"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 27,
            columnNumber: 3
          }, this), " Beat any ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 27,
            columnNumber: 24
          }, this), " opponents within budget ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "m"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 27,
            columnNumber: 52
          }, this), ". Greedily take the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 27,
            columnNumber: 75
          }, this), "\r\ncheapest opponents and check feasibility with prefix sums on sorted costs.\r\nThis gives place ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "n - k + 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 29,
            columnNumber: 20
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.strong, {
            children: "Case 2:"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 31,
            columnNumber: 3
          }, this), " Beat ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 31,
            columnNumber: 20
          }, this), " opponents, specifically including opponent ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k + 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 31,
            columnNumber: 67
          }, this), ", within\r\nbudget ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "m"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 32,
            columnNumber: 10
          }, this), ". Remove opponent ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k + 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 32,
            columnNumber: 31
          }, this), " from consideration, take the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k - 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 32,
            columnNumber: 68
          }, this), "\r\ncheapest remaining opponents, and add ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "a_{k+1}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 33,
            columnNumber: 41
          }, this), " to the cost. If this fits in\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "m"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 34,
            columnNumber: 3
          }, this), ", place improves to ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "n - k"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 34,
            columnNumber: 26
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We take the minimum place over all valid ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 42
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
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
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
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
