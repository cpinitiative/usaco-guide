"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/70553",
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
      children: ["Instead of trying to directly construct a final array, we fix the maximum difference ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 86
      }, this), " and check if it is achievable in under ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 129
      }, this), " operations. If all elements can be moved into some interval of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 203
      }, this), ", then it is clear that all larger values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 251
      }, this), " will work. Hence, the condition is monotonic, and we can binary search on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 329
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For an array to have a maximum difference of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 46
      }, this), ", all elements must be in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, L + d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 85
      }, this), ", where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), " is any integer. This means that our operations must move values of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i < L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), " into the range by increasing them to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 48
      }, this), ", and handling values where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i > L + d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 79
      }, this), " similarly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we know what ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 17
      }, this), " is, we can quickly calculate the number\r\nof operations needed to fit all elements in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, L + d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 55
      }, this), " using prefix sums and binary\r\nsearch, which we will elaborate on more later."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-choosing-l",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-choosing-l",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Choosing L"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Intuition tells us that setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 33
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L+d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 40
      }, this), " to some value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 63
      }, this), " is optimal. This\r\nis true, and we can informally justify this by drawing parallels to the minimizing sums\r\nproblem, which is explored in ", _jsxDEV(_components.a, {
        href: "https://usaco.guide/CPH.pdf#page=271",
        rel: "nofollow",
        target: "_blank",
        children: "CPH 6.4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 31
      }, this), ". A more\r\nthorough explanation is in the spoiler below."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-calculating-the-final-answer",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-calculating-the-final-answer",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Calculating the Final Answer"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With the knowledge that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 25
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L+d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 32
      }, this), " must equal some value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 63
      }, this), ", we can\r\niterate on each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 17
      }, this), " and try calculating the cost associated with setting it to\r\na value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 12
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L+d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 19
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[L, R]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 13
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R=L+d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 29
      }, this), ", the cost of fitting all the elements into the range is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{a_i < L} (L - a_i) + \\sum_{a_i > R} (a_i - R)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In other words, we sum the costs of moving values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i < L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 54
      }, this), " to equal ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 73
      }, this), ",\r\nand the costs for moving values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i > R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 36
      }, this), " to equal ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 55
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we sort our array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 22
      }, this), ", then a prefix and a suffix of values will need to be\r\nmoved within range. We use binary search to find the prefix and suffix of values\r\nthat need to be adjusted, and prefix sums to sum up the relevant values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 76
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
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
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N \\log A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 60
      }, this), " is the maximum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 88
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
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
