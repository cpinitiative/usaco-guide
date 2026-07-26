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
        href: "http://www.usaco.org/current/data/sol_taming_gold_feb18.html",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This solution is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 18
      }, this), " which is faster than the official editorial's but not required since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\leq 100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 106
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
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
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 5
      }, this), " be the the minimum number of changes that must be made\r\nto the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 14
      }, this), " entries so that there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 44
      }, this), " breakouts among the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 74
      }, this), "\r\nentries."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There are three cases when we calculate the current value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 62
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "If the log was tampered with and the cows would NOT breakout:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Compared to the previous day, the breakout number won't change. However, we need one\r\nmore change of the log, so we transfer from ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[i][j-1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 17,
              columnNumber: 49
            }, this), ".\n", _jsxDEV(_components.pre, {
              children: _jsxDEV(_components.code, {
                className: "language-math",
                children: "\\texttt{dp}[i][j]=\\texttt{dp}[i][j-1]+1"
              }, undefined, false, {
                fileName: "<source.js>"
              }, this)
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 5
            }, this), "\n"]
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
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If the log was tampered with and the cows would breakout (Notice that ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "a[j] \\neq 0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 73
          }, this), "):"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Compared to the previous day the breakout number increases by 1. We also\r\nneed one more change of the log, so we transfer from ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[i-1][j-1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 25,
              columnNumber: 58
            }, this), ".\n", _jsxDEV(_components.pre, {
              children: _jsxDEV(_components.code, {
                className: "language-math",
                children: "\\texttt{dp}[i][j]=\\texttt{dp}[i-1][j-1]+1"
              }, undefined, false, {
                fileName: "<source.js>"
              }, this)
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 26,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "If the log was NOT tampered with:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Then the ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 31,
              columnNumber: 14
            }, this), "-th breakout would be on the ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(j-a[j])"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 31,
              columnNumber: 46
            }, this), "-th day, so we transfer from\r\n", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[i-1][j-a[j]-1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 32,
              columnNumber: 5
            }, this), ".\n", _jsxDEV(_components.pre, {
              children: _jsxDEV(_components.code, {
                className: "language-math",
                children: "\\texttt{dp}[i][j] = \\texttt{dp}[i-1][j-a[j]-1]+\\texttt{range\\_ans}[j-a[j]][j]);"
              }, undefined, false, {
                fileName: "<source.js>"
              }, this)
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 33,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 31,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{range\\_ans}[l][r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), " represents the minimum cost to replace the range\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[l]...a[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0...(r-l)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 20
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, our final DP relation is"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j] = \\min\\begin{cases} \\texttt{dp}[i][j-1]+1\\\\\r\n\\texttt{dp}[i-1][j-1]+1\\\\\r\n\\texttt{dp}[i-1][j-a[j]-1] + \\texttt{range\\_ans}[j-a[j]][j])\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that if the indices are out of bounds, the value is not considered."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
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
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
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
