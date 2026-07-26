"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
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
      children: ["Firstly, a note on notation: let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 34
      }, this), " denote the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 51
      }, this), "th Fibonacci number. That is,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "F_i =\r\n\\begin{cases}\r\n\t0 & i = 0 \\\\\r\n\t1 & i = 1 \\\\\r\n\tF_{i - 1} + F_{i - 2} & i \\geq 2 \\\\\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this problem, we will build a segment tree over the array. For a leaf node in the segment tree with value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 110
      }, this), ", we will store a pair of values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(F_{v - 1}, F_v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 146
      }, this), ". For all non-leaf nodes, we will store a pair of values equal to the pair-sum of its children. That is, if a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 279
      }, this), " has children ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 296
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 304
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u = (v_0 + w_0, v_1 + w_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 314
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will use the term ", _jsxDEV(_components.em, {
        children: "cycle by k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 22
      }, this), " to denote transforming some pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(F_{i - 1}, F_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 68
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(F_{i - 1 + k}, F_{i + k})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 90
      }, this), ". By default, the term ", _jsxDEV(_components.em, {
        children: "cycle"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 141
      }, this), " refers to ", _jsxDEV(_components.em, {
        children: "cycle by 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 159
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each update, we need to cycle each leaf node by some amount ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 65
      }, this), " such that the value in a node affected goes from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(F_{v - 1}, F_v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 118
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(F_{v - 1 + x}, F_{v + x})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 140
      }, this), ". We can do this using matrix exponentiation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First note that for a matrix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{pmatrix} F_{i - 1} & F_i \\end{pmatrix}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 30
      }, this), ", we can cycle it by multiplying by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 113
      }, this), ". That is,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{pmatrix} F_i & F_{i + 1} \\end{pmatrix} = \\begin{pmatrix} F_{i - 1} & F_i \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Inductively, we can cycle by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 30
      }, this), " by multiplying multiple times:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{pmatrix} F_{i - 1 + k} & F_{i + k} \\end{pmatrix} = \\begin{pmatrix} F_{i - 1} & F_i \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}^k"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can use binary exponentiation to quickly compute powers of the two-by-two matrix."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Secondly, we need to utilize the distributive property of matrix multiplication to same-size matrices. That is, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 116
      }, this), " is a one-by-two matrix for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\in [1, n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 149
      }, this), ", then the following property is satisfied:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(m_1 + m_2 + \\dots + m_n) \\cdot \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix} = m_1 \\cdot \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix} + m_2 \\cdot \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix} + \\dots + m_n \\cdot \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In that way, we can utilize lazy propagation on the segment tree. We will store an integer tag in each node denoting the lazy update, which denotes that we must cycle every node in its subtree by the value of the tag. When propagating, we can simply update the node by binary exponentiating and then multiplying, then storing it in the lazy tag. Querying works as normal on the segment tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
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
      lineNumber: 43,
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
