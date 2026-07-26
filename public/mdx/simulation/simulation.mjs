"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Since there's no formal algorithm involved, the intent of the problem is to\r\nassess competence with one's programming language of choice and knowledge of\r\nbuilt-in data structures. At least in USACO Bronze, when a problem statement\r\nsays to find the end result of some process, or to find when something occurs,\r\nit's usually sufficient to simulate the process naively."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can simulate the process. Store an array that keeps track of which shell is\r\nat which location, and Bessie's swapping can be simulated by swapping elements\r\nin the array. Then, we can count how many times Elsie guesses each shell, and\r\nthe maximum points she can earn is the maximum amount of times a shell is\r\nguessed."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 148,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 152,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can simulate the process of pouring buckets. The amount of milk poured from\r\nbucket ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 8
      }, this), " to bucket ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 22
      }, this), " is the smaller of the amount of milk in bucket ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 73
      }, this), "\r\n(which is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 156,
        columnNumber: 11
      }, this), ") and the remaining space in bucket ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 156,
        columnNumber: 52
      }, this), " (which is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_j - m_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 156,
        columnNumber: 66
      }, this), ").\r\nWe can just handle all of these operations in order, using an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 157,
        columnNumber: 69
      }, this), " to store\r\nthe maximum capacities of each bucket, and an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 158,
        columnNumber: 53
      }, this), " to store the current\r\nmilk level in each bucket, which we update during the process. Example code is\r\nbelow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 154,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-easier",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-easier",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Easier"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 288,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-harder",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-harder",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Harder"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 292,
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
