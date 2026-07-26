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
      children: "Greedy approach: always add the next cube on top of the tower with the smallest\r\npossible cube on top (or create a new tower if this isn't possible)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Equivalent to longest non-decreasing subsequence!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It's important to note that we cannot use brute force to find the tower with the\r\nsmallest possible cube on top because that will yield a time complexity of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), ", which is too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-1---binary-search--dynamic-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1---binary-search--dynamic-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1 - Binary Search + Dynamic Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can store existing towers using a dynamic array, where each tower's value is\r\nthe size of the cube on top. For each cube, we can run upper bound binary search\r\non the array to find the tower with the smallest top cube that's strictly larger\r\nthan the current cube. If we find a suitable tower, we add the cube to the top\r\nand change the tower's value to the size of the cube. If no such tower exists,\r\nappend a new tower to the end of the array. By doing so, we maintain the tower\r\narray in a sorted order (try and prove this for yourself). Our answer will be\r\nthe size of the array after all cubes have been processed."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
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
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2---multiset",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2---multiset",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2 - Multiset"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 137,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this approach, we store the towers using an ordered multiset (which can be\r\nrepresented as a\r\n", _jsxDEV(_components.a, {
        href: "/silver/intro-sorted-sets?lang=java#multisets",
        children: "TreeMap"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 1
      }, this), " in\r\nJava), where each tower's value is the size of the cube on top. For each cube,\r\nwe can use built-in methods (", _jsxDEV(_components.code, {
        children: "upper_bound"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 30
      }, this), " in C++, ", _jsxDEV(_components.code, {
        children: "higherKey"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 52
      }, this), " in Java) to find\r\nthe smallest-valued tower with a value strictly greater than the cube. If we\r\nfind a suitable tower, we add the cube to the top and change the tower's value\r\nto the size of the cube by removing the tower's previous value from the set and\r\nadding it's new value into it. If no such tower exists, we add a new tower to\r\nthe set. Our answer will be the total number of towers in the multiset (this\r\ntakes some extra work to find in Java) after all cubes have been processed."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 153,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 153,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 153,
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
