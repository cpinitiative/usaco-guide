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
        href: "https://usaco.org/current/data/sol_prob3_bronze_dec24.html",
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
      children: ["Notice that modifying exactly one character can only affect at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 69
      }, this), " substrings."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, had the string been ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{ABCDEF}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 34
      }, this), " and the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{C}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 58
      }, this), " was modified to a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{Z}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 87
      }, this), ", the affected substrings would now be, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{ABZ}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 137
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{BZD}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 151
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{ZDE}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 169
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using this, we first precompute a map representing the counts of each moo that was originally present in the string. Then, we can try every single possible edit to the string, with a total of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(26N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 193
      }, this), " possible modifications. While trying every single possible edit to a specific position, due to only three substrings being affected, the global answer does not change by much. So, we can adjust the frequencies of moo's based on the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 444
      }, this), " substrings being affected after every modification, and check whether any moo's exceeded a frequency of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 552
      }, this), " due to the modifications. It is important to reverse the specific position back to its original character after the modifications, since only one position can be modified at a time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If any moo substring ever reaches a frequency of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 50
      }, this), " before or after modifications, it is added to the set of answers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While technically the time complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 42
      }, this), ", the factor of 26 in this case is significant because it represents the number of letters we brute-force over."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
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
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(CN)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 47
      }, this), " is the number of letters in the alphabet (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "26"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 93
      }, this), " in this case)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
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
