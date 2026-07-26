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
      children: ["Define the number of teleportations starting from a planet as the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), " of that planet. For each planet that hasn't been visited,\r\nwe want to find its ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 21
      }, this), ". Call the planet we are performing\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dfs}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " from the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 25
      }, this), ". As we perform ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dfs}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 57
      }, this), " from the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), ", keep track of the planets seen, in order, in the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{path}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), " queue and keep track of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{steps}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 41
      }, this), ", the length of the path\r\n(which is also the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 20
      }, this), " of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 49
      }, this), "). When we reach\r\na planet that has already been visited (call this planet the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 62
      }, this), "),\r\nadd the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 9
      }, this), " of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 38
      }, this), " to the current\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{step}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), " count because we would continue to visit all of the planets that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), " would go on to visit."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Once we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{path}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 14
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{steps}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 34
      }, this), " we can calculate the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), " of all the planets in this ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{path}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 50
      }, this), ". We know the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " will always be the planet at the end of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{path}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 63
      }, this), ",\r\nbut it may appear elsewhere as well. We can break this down into two cases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\textit{repeat}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 8
        }, this), " was visited twice in the current ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{path}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 59
        }, this), ". The\r\nplanets in the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{path}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 19
        }, this), " between the two occurrences of the\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\textit{repeat}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 4
        }, this), " form a ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\textit{cycle}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 29
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\textit{repeat}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 8
        }, this), " only appears at the end of the current ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{path}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 65
        }, this), ".\r\nAll of the planets in the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{path}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 30
        }, this), " are not part of a ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\textit{cycle}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 64
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For planets inside a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{cycle}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 22
      }, this), ", the repeating planet when starting from\r\nthat planet is itself. For all the planets in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{path}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 51
      }, this), " but outside\r\nthe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{cycle}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 5
      }, this), ", the planet that repeats when starting from each planet\r\nwill still be the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 19
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the planets outside the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{cycle}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 31
      }, this), " all have paths ending at the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), ", each one's ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 31
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 56
      }, this), " less than the\r\nprevious'. So, as we iterate through the planets along the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{path}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 60
      }, this), " that\r\nare outside the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{cycle}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 17
      }, this), ", the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 39
      }, this), " will decrease by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 78
      }, this), "\r\neach time, starting from the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 30
      }, this), " with a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 54
      }, this), " of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{steps}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), ". Once we get to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{cycle}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 38
      }, this), ", the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 60
      }, this), "\r\nof the planets will all be equal to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pathlength}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 41
      }, this), " of the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{repeat}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), ", which is the length of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textit{cycle}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 47
      }, this), "."]
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
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
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
