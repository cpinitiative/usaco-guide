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
        href: "http://www.usaco.org/current/data/sol_radio_gold_jan16.html",
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
      id: "user-content-video-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note: The video solution might not be the same as other solutions. Code in C++."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The key ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 9
      }, this), " observation to make here is already stated in the problem\r\nstatement: \"Farmer John can either stay put at his current location, or take one\r\nstep forward\", and likewise for Bessie. Thus, when constructing our\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), ", we can set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 27
      }, this), " equal to the best distance at\r\nFarmer John's move ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 20
      }, this), " and Bessie's move ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 42
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that it is hard to calculate a cumulative distance if we leave the string\r\nunprocessed (meaning that we read from the string directly). To resolve this, we\r\ncan simply calculate the coordinates ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i,j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 38
      }, this), " at every step of Bessie and Farmer\r\nJohn's path. In our implementation, we map each character to their appropriate\r\n", _jsxDEV(_components.code, {
        children: "dx"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), ", ", _jsxDEV(_components.code, {
        children: "dy"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 7
      }, this), " arrays in order to apply the appropriate changes, storing Farmer\r\nJohn's position at move ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 25
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{jl}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 32
      }, this), " and Bessie's position at move\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bl}[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 8
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After this is done, we start building our ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 43
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Either one of the following happens:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Farmer John takes a step ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "(i+1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 29,
            columnNumber: 29
          }, this), ":\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i+1][j] = \\min(\\texttt{dp}[i+1][j], \\texttt{dp}[i][j] + \\text{dist}(\\texttt{jl}[i+1], \\texttt{bl}[j]))"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 30,
            columnNumber: 4
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Bessie takes a step ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "(j+1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 32,
            columnNumber: 24
          }, this), ":\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i][j+1] = \\min(\\texttt{dp}[i][j+1], \\texttt{dp}[i][j] + \\text{dist}(\\texttt{jl}[i], \\texttt{bl}[j+1]))"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 33,
            columnNumber: 4
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Both Farmer John and Bessie take steps ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "(i+1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 35,
            columnNumber: 43
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "(j+1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 35,
            columnNumber: 55
          }, this), ":\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i+1][j+1] = \\min(\\texttt{dp}[i+1][j+1], \\texttt{dp}[i][j] + \\text{dist}(\\texttt{jl}[i+1], \\texttt{bl}[j+1]))"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 36,
            columnNumber: 4
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
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
        children: "\\mathcal{O}(NM)"
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
