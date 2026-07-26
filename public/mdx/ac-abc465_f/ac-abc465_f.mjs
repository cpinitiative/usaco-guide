"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://atcoder.jp/contests/abc465/editorial/22567",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (C++)"
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
      children: ["Each drink's ID is a 6-digit string. Treat every digit position as its own axis\r\ntaking values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 15
      }, this), "–", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 19
      }, this), ". Then each drink is a single point in a ", _jsxDEV(_components.strong, {
        children: "6-dimensional\r\ngrid"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 63
      }, this), ", and a query asks for the total size over a 6-dimensional box — one\r\ninterval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x_k, y_k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 10
      }, this), " per axis. This is exactly what a prefix sum handles, just\r\nin six dimensions instead of two."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-building-the-6d-prefix-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-building-the-6d-prefix-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Building the 6D prefix sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The array ", _jsxDEV(_components.code, {
        children: "ps[11][11][11][11][11][11]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 11
      }, this), " is the prefix sum array. Each size is\r\nrecorded as ", _jsxDEV(_components.code, {
        children: "ps[d0+1][d1+1]…[d5+1] = size"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 13
      }, this), " so that we don't have to use casework\r\nto deal with 0-indexed subtraction during queries."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "precompute()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " then turns this into a prefix sum. In 2D you sweep right and then\r\ndown; here you sweep once along ", _jsxDEV(_components.strong, {
        children: "each"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 33
      }, this), " of the 6 dimensions. The code does this\r\ncompactly: for each dimension ", _jsxDEV(_components.code, {
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 31
      }, this), ", it visits every cell, steps one index back\r\nalong axis ", _jsxDEV(_components.code, {
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 12
      }, this), " (", _jsxDEV(_components.code, {
        children: "tr[i]--"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 17
      }, this), "), and adds that neighboring cell's value. After all six\r\nsweeps, ", _jsxDEV(_components.code, {
        children: "ps[a1][a2]…[a6]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 9
      }, this), " stores the total size of every drink whose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 70
      }, this), "-th digit\r\nsatisfies ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_k \\le a_k - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 11
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 37
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-answering-a-query-with-inclusionexclusion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-answering-a-query-with-inclusionexclusion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Answering a query with inclusion–exclusion"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A query gives two bound strings ", _jsxDEV(_components.code, {
        children: "s1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 33
      }, this), " (lower) and ", _jsxDEV(_components.code, {
        children: "s2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 50
      }, this), " (upper), i.e. a range\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x_k, y_k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " per axis. Summing over a box from a prefix-sum array is the\r\ninclusion–exclusion trick, generalized:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["a 1D range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[x, y]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 14
        }, this), " is ", _jsxDEV(_components.code, {
          children: "ps(y) − ps(x − 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 26
        }, this), ";"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["a 2D box is ", _jsxDEV(_components.code, {
          children: "ps(y0,y1) − ps(x0−1,y1) − ps(y0,x1−1) + ps(x0−1,x1−1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 15
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For 6 axes there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^6 = 64"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 22
      }, this), " corners. The code iterates a 6-bit mask; for each\r\naxis it picks either the upper endpoint ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 41
      }, this), " (index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_k + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 54
      }, this), ", pushed into\r\n", _jsxDEV(_components.code, {
        children: "query_pos"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), " and counted by ", _jsxDEV(_components.code, {
        children: "cnt"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 28
      }, this), ") or the position just below the lower endpoint\r\n(index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 8
      }, this), ", representing \"", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\le x_k - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 29
      }, this), "\"). It then reads ", _jsxDEV(_components.code, {
        children: "ps"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 60
      }, this), " at that corner and\r\nadds or subtracts it, subtracting when ", _jsxDEV(_components.code, {
        children: "cnt"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 40
      }, this), " is odd — equivalently, when an odd\r\nnumber of axes use the lower endpoint (the two have the same parity because there\r\nare 6 axes). One more case matters: if some axis has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_k > y_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 54
      }, this), ", then no digit\r\ncan simultaneously be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ge x_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 23
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\le y_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 37
      }, this), " on that axis, so the query box holds\r\nno drinks and the answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 29
      }, this), ". The code checks this first and short-circuits,\r\nsince inclusion–exclusion assumes valid bounds."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
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
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(10^6 + Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
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
