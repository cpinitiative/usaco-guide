"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-hints",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-hints",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Hints"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_hoofball_bronze_feb18.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Arpan Banerjee"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 224,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-bonus-silver-level",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bonus-silver-level",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bonus (Silver level)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 348,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that instead of cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 29
      }, this), " passing to the nearest cow, cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 65
      }, this), " passes to\r\ncow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 351,
        columnNumber: 5
      }, this), " where the array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1,a_2,\\dots,a_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 351,
        columnNumber: 27
      }, this), " is given as input (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\le a_i\\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 351,
        columnNumber: 66
      }, this), ").\r\nIn other words, the passing graph can be any ", _jsxDEV(_components.a, {
        href: "/silver/func-graphs",
        children: "functional graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 46
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 350,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Solve the problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 354,
        columnNumber: 22
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 354,
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
