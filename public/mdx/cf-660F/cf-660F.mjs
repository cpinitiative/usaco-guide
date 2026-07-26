"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
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
      lineNumber: 1,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/44259",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 5
      }, this), " uses a divide and conquer approach. However, like many divide and conquer optimization problems, this can also be solved using the ", _jsxDEV(_components.a, {
        href: "/plat/convex-hull-trick",
        children: "convex hull trick"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 198
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, define the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pre}[i] = \\sum_{i = 1}^i a_i"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ips}[i] = \\sum_{i = 1}^i a_i \\cdot i"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We would like to find the score of some subarray ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 50
      }, this), ", defined as"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i = l}^r a_i\\cdot(i - l+1)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By expanding this expression, we can express this in terms of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{pre}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 63
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ips}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 82
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i = l}^r a_i\\cdot(i - l+1) = \\texttt{ips}[r]-\\texttt{ips}[l-1]-(l-1)(\\texttt{pre}[r]-\\texttt{pre}[l-1])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For this problem, we need to choose a contiguous subarray in order to maximize the required score. Let us define a function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 125
      }, this), ", such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 140
      }, this), " denotes the maximum score of a subarray that ends at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 200
      }, this), ". We can thus define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 224
      }, this), " as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\nf(r) &= \\max_{1 \\leq l \\leq r} \\{\\texttt{ips}[r] - \\texttt{ips}[l - 1] - (l - 1)(\\texttt{pre}[r] - \\texttt{pre}[l - 1])\\}\\\\\r\n&=\\max_{1 \\leq l \\leq r} \\{\\texttt{ips}[r] - \\texttt{ips}[l - 1] - (l - 1)\\texttt{pre}[r] + (l - 1)\\texttt{pre}[l - 1]\\}\\\\\r\n&=\\max_{1 \\leq l \\leq r} \\{\\texttt{ips}[r] - \\texttt{ips}[l - 1] - l \\cdot \\texttt{pre}[r] + \\texttt{pre}[r] + l \\cdot \\texttt{pre}[l - 1] - \\texttt{pre}[l - 1]\\}\\\\\r\n&= \\max_{1 \\leq l \\leq r} \\{(\\texttt{ips}[l - 1] - \\texttt{pre}[l - 1] + l \\cdot \\texttt{pre}[l - 1]) - l \\cdot \\texttt{pre}[r]\\} + \\texttt{ips}[r] + \\texttt{pre}[r]\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We rearrange the equation such that terms that depend only on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 63
      }, this), " are wrapped in parenthesis inside of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 108
      }, this), " statement and terms that depend only on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 155
      }, this), " are moved outside of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 184
      }, this), " statement. Note that there is only a single term that depends on both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 261
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 269
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Because of this property, we can use the convex hull trick. Each value can be represented as a linear function of the form"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "g_l(x) = l \\cdot x + (\\texttt{ips}[l - 1] - \\texttt{pre}[l - 1] + l \\cdot \\texttt{pre}[l - 1])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The original equation can thus be expressed as:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(r) = \\max_{1 \\leq l \\leq r} \\{g_l(\\texttt{pre}[r])\\} + \\texttt{ips}[r] + \\texttt{pre}[r]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
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
      lineNumber: 52,
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
