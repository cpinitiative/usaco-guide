"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      children: ["We can store two variables: one for the XOR of the numbers in group 0 and another for those in group 1.\r\nLet's call these ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 18
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 28
      }, this), " for brevity.\r\nThis means for queries of type 2, we output either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 52
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 61
      }, this), " depending on the parameter."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-type-1-queries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-type-1-queries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Type 1 Queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's only consider ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 21
      }, this), " for now.\r\nSay we had to flip ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 20
      }, this), " when it was initially ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 48
      }, this), ", so we have to \"remove\" ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 76
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 87
      }, this), ".\r\nNotice that since XORing is its own inverse (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\oplus x = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 46
      }, this), "), we can remove ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 79
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 90
      }, this), " by setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 107
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0 \\oplus a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 116
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["On the other hand, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 23
      }, this), " was a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 35
      }, this), " it would become a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 57
      }, this), ", and we need to add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 81
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 90
      }, this), ".\r\nFascinatingly, setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 24
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0 \\oplus a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 33
      }, this), " does just what we want as well, since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\oplus 0 = x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 88
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The logic for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 15
      }, this), " goes much the same way, and so\r\nthe two values are updated the same way: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0 := G_0 \\oplus a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_1 := G_1 \\oplus a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 70
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-efficient-updates",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-efficient-updates",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Efficient Updates"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To update ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 11
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 21
      }, this), ", for a given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 40
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 48
      }, this), ", we must find the XOR of all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 81
      }, this), " that are contained in the range."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This can be done in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 21
      }, this), " time by using prefix sums (or prefix XORs in this case)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
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
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n + q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
