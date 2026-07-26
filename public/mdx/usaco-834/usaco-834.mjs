"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_sort_silver_open18.html",
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
    }, this), "\n", _jsxDEV(_components.h1, {
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
      children: "By I-Chen Chou"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note: The video solution might not be the same as other solutions. Code in C++ and Java."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 12,
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
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For any ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 9
      }, this), ", the value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 24
      }, this), " represents a lower bound on the total number of bubble passes required to sort the array. If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 127
      }, this), " is positive, it indicates that the element needs to move left by at least that amount. If it is negative, it is still a valid lower bound since the element does not need to move further left."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To understand why max(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 23
      }, this), ") is correct, consider any element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 67
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 79
      }, this), " is positive (meaning it is to the right of its correct position). For this to happen, there must be some larger element to the left of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 224
      }, this), ". Due to how bubble sort works, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 261
      }, this), " will necessarily move left in every pass until it reaches its correct position, and its ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 355
      }, this), " value decreases by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 384
      }, this), " with each pass."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now consider an element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 25
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 37
      }, this), " equals ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 54
      }, this), " (the element is already in its correct position). Such an element may or may not move left, but it will not move right. For it to move right, the element immediately to its right would need to be smaller, which implies there is a larger element to its left, causing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 324
      }, this), " to move left instead. Thus, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 358
      }, this), " equals ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 375
      }, this), " remains unchanged or decreases."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As a result, max(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 18
      }, this), "), if positive, decreases by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 56
      }, this), " during each bubble sort iteration. After counting the number of iterations needed to sort the array, we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 168
      }, this), " to account for the final iteration performed by the algorithm, as indicated in the pseudocode."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
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
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
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
