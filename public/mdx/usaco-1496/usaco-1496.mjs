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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob3_silver_feb25.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++, Python)"
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
      children: ["Instead of thinking forwards, consider thinking in reverse. A state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c, d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 69
      }, this), " could have originated from either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c, d - c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 112
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c - d, d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 128
      }, this), ". However, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c < d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 154
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c - d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 168
      }, this), " is negative, and so we can rule out ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c - d, d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 212
      }, this), ". Similarly, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d < c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 240
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d - c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 254
      }, this), " is negative, and we rule out ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c, d - c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 291
      }, this), ". In this way, we can trace ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c, d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 331
      }, this), " back to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 348
      }, this), " by choosing the only possible origination each time. To demonstrate this for sample's second test case, we can trace as follows: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 19)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 486
      }, this), " -> ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 11)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 499
      }, this), " -> ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 512
      }, this), " -> ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(5, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 524
      }, this), ", taking three operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, naively doing this is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\frac{\\max\\left(c,\\ d\\right)}{\\min\\left(a,\\ b\\right)})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 32
      }, this), ". To speed this up, we can perform multiple operations at once. Specfically, we may choose the origination ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c, d - c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 207
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "⌊\\frac{d}{c}⌋"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 220
      }, this), " times as long as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c < d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 253
      }, this), ", and the origination ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c - d, d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 282
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "⌊\\frac{c}{d}⌋"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 295
      }, this), " times as long as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d < c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 328
      }, this), ". This makes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 348
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 356
      }, this), " reduce extremely quickly to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 388
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 396
      }, this), ". However, when doing this we have to be careful not to undershoot below ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 472
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 479
      }, this), ". For instance, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c, d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 501
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 27)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 513
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 527
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 11)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 539
      }, this), ", instead of undershooting to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 578
      }, this), ", we go to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(8, 11)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 597
      }, this), " in two operations. This takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "⌊\\frac{d-b}{c}⌋"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 637
      }, this), " operations for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c < d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 670
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "⌊\\frac{c-a}{d}⌋"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 682
      }, this), " operations for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d < c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 715
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
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
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log\\frac{\\max\\left(c,d\\right)}{\\min\\left(a,b\\right)})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
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
