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
      children: ["First, let's consider a single query - what's the minimum number of dolls left\r\nover? A single nested doll consists of some dolls of increasing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 65
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "H_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 75
      }, this), ".\r\nIf we sort the dolls by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "H_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 25
      }, this), " and only consider their ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 55
      }, this), ", then the answer is\r\nthe minimum number of increasing subsequences needed to \"cover\" all the dolls."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It's well-known that the minimum number of increasing subsequences is equal to\r\nthe longest non-increasing subsequence (see\r\n", _jsxDEV(_components.a, {
        href: "/gold/lis/#application-2---minimum-number-of-increasing-sequences",
        children: "the LIS module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\r\nfor more details.) This gives us a way to answer a single query in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), " time!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "But what if we need to answer multiple queries?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we don't have to answer the queries online, let's sort them in decreasing\r\norder of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 10
      }, this), ". If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B_i = \\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 20
      }, this), " for each query, then we can simply do a line\r\nsweep on the dolls and queries, inserting dolls into the sequence and updating\r\nthe longest non-increasing subsequence as we get to them."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For variable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 14
      }, this), "s, we only want the longest non-increasing subsequence for\r\nsome prefixes of the sequence of dolls (not the whole sequence like before). We\r\ncan thus binary search on the DP array from finding the longest non-increasing\r\nsubsequence to find this answer. This is because the DP array stores, for each\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), ", the doll with the smallest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 33
      }, this), " with a non-increasing subsequence ending\r\non it with length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 19
      }, this), "."]
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
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O((N + Q) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
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
