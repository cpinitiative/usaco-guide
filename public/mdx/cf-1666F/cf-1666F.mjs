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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/contest/1666/attachments/download/15881/nerc-2021-tutorial.pdf",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial"
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
      children: "First we can solve an easier version of the problem where all the blocks are distinct."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice that if we process the blocks from largest to smallest, we can incrementally fill the even positions, starting from the bottom and working our way up to the top.\r\nIn addition, we can fill in the odd positions with whatever blocks we don't use in the even positions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can do this problem using dynamic programming.\r\nLet ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 5
      }, this), " be the number of ways to use the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 55
      }, this), " blocks and place ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 76
      }, this), " of those in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 96
      }, this), " bottommost even positions (and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 131
      }, this), " of them in the odd position)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two transitions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["To ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i + 1][j + 1]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 7
          }, this), ". If we add another even block, then there is only one place to put it."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["To ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "dp[i + 1][j]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 18,
            columnNumber: 7
          }, this), ". In this case we add the block to an odd position.\r\nNotice that we must place a block in between already placed larger blocks because of the condition that an even block is greater than its two neighboring odd blocks and later placed blocks will always be smaller.\r\nThis means that there will be ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\max(0, j - 1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 31
          }, this), " positions to insert the block. When all ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\frac{n}{2}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 88
          }, this), " even blocks are placed you can also insert it at the top of the stack.\r\nWe also have to subtract out the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i - j"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 21,
            columnNumber: 34
          }, this), " blocks that are already placed in odd positions."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "When the blocks can be of the same size, let's process them in groups of blocks that are all the same size."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are still two possible transitions.\r\nEither we put one block into an even position and the remaining into odd or all of them into odd positions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To determine the number of ways to insert the blocks into the odd positions, we can evaluate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\text{number of open spots} \\choose \\text{number of spots that we want to fill}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 94
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our final answer will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[n][\\frac{n}{2}]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 26
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
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
