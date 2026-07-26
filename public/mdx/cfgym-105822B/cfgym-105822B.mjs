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
        href: "https://codeforces.com/gym/105822/attachments/download/31492/MITIT_2025_Spring_Editorials_1.pdf#page=2",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
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
      children: ["We must obtain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 16
      }, this), " pairs of equal numbers.\r\nTo make two indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 31
      }, this), " contain the same value, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|sticks[i_1]-sticks[i_2]|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 61
      }, this), " operations are needed.\r\nTherefore, it is optimal to sort the array and make adjacent pairs of numbers equal."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, we sort the input array, and compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "diff[i]=sticks[i+1]-sticks[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 44
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0<i<n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 80
      }, this), ".\r\nThe problem now reduces to choosing two indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 49
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 59
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "diff[i_1]+diff[i_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 75
      }, this), " is minimized.\r\nHowever, ", _jsxDEV(_components.strong, {
        children: "the two pairs cannot share any number"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 10
      }, this), ", so ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 66
      }, this), " cannot be adjacent\r\nto each other (if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2=i_1+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 19
      }, this), ", the pairs would be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1, i_1+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 51
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1+1, i_1+2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 68
      }, this), ", which overlap)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without loss of generality, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1 < i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 29
      }, this), ".\r\nWe loop over ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2\\leq i_2<n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 14
      }, this), " (since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 37
      }, this), " is impossible). By fixing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "diff[i_2], i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 71
      }, this), " must be in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\leq i_1<i_2-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 99
      }, this), ", and we can maintain a prefix minimum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "diff[i_1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 158
      }, this), " to obtain the best ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "diff[i_1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 189
      }, this), " for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 210
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
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
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
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
