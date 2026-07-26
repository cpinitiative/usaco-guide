"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-stacks",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-stacks",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Stacks"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A stack is a ", _jsxDEV(_components.strong, {
        children: "Last In First Out"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 14
      }, this), " (LIFO) data structure that supports three\r\noperations, all in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 20
      }, this), " time. Think of it like a real-world stack of\r\npapers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-application---nearest-smaller-element",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application---nearest-smaller-element",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application - Nearest Smaller Element"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Consider the following problem:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Given an array, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 107,
          columnNumber: 19
        }, this), ", of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 107,
          columnNumber: 27
        }, this), " (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1 \\le N \\le 10^5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 107,
          columnNumber: 32
        }, this), ") integers, for every index\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 3
        }, this), ", find the rightmost index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 33
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j < i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 47
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i > a_j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 59
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["To solve this, let's store a stack of pairs of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "value, index"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 48
      }, this), " and iterate over\r\nthe array from left to right. For some index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 46
      }, this), ", we will compute\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 1
      }, this), ", the rightmost index for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 44
      }, this), ", as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 132,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Keep popping the top element off the stack as long as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "value \\ge a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 136,
          columnNumber: 57
        }, this), ". This is\r\nbecause we know that the pair containing ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "value"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 137,
          columnNumber: 44
        }, this), " will never be the solution to\r\nany index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j > i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 13
        }, this), ", since ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 28
        }, this), " is less than or equal to than ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "value"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 64
        }, this), " and has\r\nan index further to the right."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "value < a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 140,
          columnNumber: 6
        }, this), ", set ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{ans}[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 140,
          columnNumber: 25
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "index"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 140,
          columnNumber: 46
        }, this), ", because a stack stores the\r\nmost recently added values first (or in this case, the rightmost ones),\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "index"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 3
        }, this), " will contain the rightmost value which is less than ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 63
        }, this), ". Then, add\r\n(", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i, i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 143,
          columnNumber: 4
        }, this), ") to the stack."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The stack we used is called a ", _jsxDEV(_components.strong, {
        children: "monotonic stack"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 31
      }, this), " because we keep popping off\r\nthe top element of the stack which maintains it's monotonicity (the same\r\nproperty needed for algorithms like binary search) because the elements in the\r\nstack are increasing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 145,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 152,
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
      lineNumber: 249,
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
