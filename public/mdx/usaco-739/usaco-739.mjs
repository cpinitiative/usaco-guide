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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Jay Fu"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_cownomics_silver_open17.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 171,
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
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We need to loop over all possible sets of 3 distinct positions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For each set of positions, we then go through all spotted cows and store their gene pattern at these three positions as an integer."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The way we do this is by interpreting the pattern as a base-4 integer.\r\nIf we map A to 0, T to 1, C to 2, and G to 3, the gene pattern CTG would be\r\nthe base-4 number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "213"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 19
      }, this), " (or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "32 + 4 + 3 = 39"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 29
      }, this), " in base 10)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The benefit of this approach is that it allows us to quickly\r\ncheck if two cows have the same pattern without doing a direct string comparison."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We then loop through the non-spotted cows, and create the integers the same way as above.\r\nIf any integer appears in both a plain cow and a spotted cow, then the current set of positions isn't valid.\r\nOtherwise, we can add one to our answer."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 186,
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
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 21
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
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
