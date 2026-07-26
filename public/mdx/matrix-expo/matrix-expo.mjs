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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-example---fibonacci",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---fibonacci",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Fibonacci"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The Fibonacci numbers are defined as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\nF_0 &= 0 \\\\\r\nF_1 &= 1 \\\\\r\nF_{n+1} &= F_{n} + F_{n-1}\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can also write them using the following matrix recurrence:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = \\begin{bmatrix}1&1\\\\1&0\\end{bmatrix}^n=\\begin{bmatrix}F_{n+1} & F_n \\\\ F_n & F_{n-1}\\end{bmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-proof-by-induction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-proof-by-induction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Proof by Induction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Base case (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 12
      }, this), "):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "A^1 = \\begin{bmatrix}1 & 1 \\\\ 1 & 0\\end{bmatrix} = \\begin{bmatrix}F_2 & F_1 \\\\ F_1 & F_0\\end{bmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Inductive step (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 17
      }, this), "):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "A^{n+1}=A\\,A^n=\\begin{bmatrix}\r\n1 & 1 \\\\ 1 & 0\r\n\\end{bmatrix}\\begin{bmatrix}\r\nF_{n+1} & F_{n} \\\\ F_{n} & F_{n-1}\r\n\\end{bmatrix}=\\begin{bmatrix}\r\nF_{n+1}+F_n & F_{n}+F_{n-1} \\\\  F_{n+1} & F_{n}\r\n\\end{bmatrix}=\\begin{bmatrix}\r\nF_{n+2} & F_{n+1} \\\\ F_{n+1} & F_{n}\r\n\\end{bmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With this, we've shown that the formula holds for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\in \\mathbb{N}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 55
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
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
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-finding-the-right-matrix---generalized-linear-recurrences",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-the-right-matrix---generalized-linear-recurrences",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding the Right Matrix - Generalized Linear Recurrences"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can generalize the technique above to calculate values in any linear recurrence. The tricky part is finding the correct matrix for the problem. Let's see how we can find this matrix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 166,
        columnNumber: 186
      }, this), ". We know that following equation must hold:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 166,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\t\\begin{bmatrix}\r\n    M_{1,1} & M_{1, 2} & \\dots \\\\\r\n    \\vdots & \\ddots & \\vdots \\\\\r\n    M_{k, 1} & \\dots & M_{k, k}\r\n    \\end{bmatrix}\r\n\t\\begin{bmatrix}\r\n\ta_1 \\\\ \\vdots \\\\ a_k\r\n\t\\end{bmatrix} =\r\n\t\\begin{bmatrix}\r\n\ta_2 \\\\ \\vdots \\\\ a_{k + 1}\r\n\t\\end{bmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here, we use the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1, \\dots, a_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 28
      }, this), " to find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{k+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 54
      }, this), ". We can also discard ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 85
      }, this), " since it won't be used to calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{k+2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 127
      }, this), ". If we think about the matrix multiplication, we notice that there is a diagonal of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 221
      }, this), "s shifted to the right by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 250
      }, this), " since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i \\rarr a_{i + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 260
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 286
      }, this), ". So now we have (using ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 317
      }, this), " as an example):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 182,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "M =\t\\begin{bmatrix}\r\n\t0 & 1 & 0 & 0 & 0 \\\\\r\n\t0 & 0 & 1 & 0 & 0 \\\\\r\n\t0 & 0 & 0 & 1 & 0 \\\\\r\n\t0 & 0 & 0 & 0 & 1 \\\\\r\n    M_{5, 1} & M_{5, 2} & M_{5, 3} & M_{5, 4} & M_{5, 5}\r\n    \\end{bmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To find the bottom row, we use the recurrence formula:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 194,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "M =\t\\begin{bmatrix}\r\n\t0 & 1 & 0 & 0 & 0 \\\\\r\n\t0 & 0 & 1 & 0 & 0 \\\\\r\n\t0 & 0 & 0 & 1 & 0 \\\\\r\n\t0 & 0 & 0 & 0 & 1 \\\\\r\n    c_5 & c_4 & c_3 & c_2 & c_1\r\n    \\end{bmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With this ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 205,
        columnNumber: 11
      }, this), ", the equation always holds."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 205,
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
      lineNumber: 207,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K^3 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 209,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-takeaway",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-takeaway",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Takeaway"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 299,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The takeaway here is not the exact matrix used in linear recurrences, but the method in deriving it. The process of thinking about a vector before and after applying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 167
      }, this), ", then deducing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 186
      }, this), " through logic, is a technique that generalizes far beyond standard linear recurrences. For example, see if you can find the equation needed and correct matrix (using ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 356
      }, this), " as an example) to solve this modified recurrence for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i > k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 417
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 301,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i = c_1a_{i-1} + c_2a_{i-2} + ... + c_ka_{i-k} + C"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 303,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 7
      }, this), " is a given constant."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
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
      lineNumber: 330,
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
