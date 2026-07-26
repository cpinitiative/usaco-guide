"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-with-centroid-decomposition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-centroid-decomposition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Centroid Decomposition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This solution is a simple extension of\r\n", _jsxDEV(_components.a, {
        href: "/solutions/cses-2080",
        children: "CSES Fixed-Length Paths I's solution"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we want to count the number of paths of length between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 62
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 70
      }, this), " instead\r\nof a fixed length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 19
      }, this), ", a node with depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 42
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 49
      }, this), "'s ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 55
      }, this), "-th child's subtree\r\nwill contribute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{x = a - d}^{b - d}\\texttt{cnt}_{i - 1}[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 17
      }, this), " paths instead\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cnt}_{i - 1}[k - d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 4
      }, this), " paths to the answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We could calculate this is using a range-sum data-structure (e.g. a BIT).\r\nHowever this would add an additional ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 38
      }, this), " factor to the complexity which might be too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Another way is to calculate and maintain the partial sums of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cnt}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 62
      }, this), ".\r\nWe can calculate the partial sum in time proportional to the size of the subtree, and\r\neach time ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 11
      }, this), " is incremented we can update the partial sum in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 63
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This allows us to keep the total work done at each level of the centroid decomposition\r\nat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 4
      }, this), " and keep the overall time complexity at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 60
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-faster-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-faster-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Faster Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 119,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We use the same idea as the above solution but with prefix sums instead of a BIT\r\nand with ", _jsxDEV(_components.a, {
        href: "/plat/merging",
        children: "small-to-large merging"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 10
      }, this), " in a single DFS instead of\r\ncentroid decomposition. This is because we can merge two prefix sum arrays ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 76
      }, this), "\r\nand ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 5
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(\\min(|A|, |B|))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 12
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 11
      }, this), " denote the maximum depth in node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 50
      }, this), "'s subtree, then the number\r\nof operations ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 15
      }, this), " that our algorithm performs can be calculated by"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{aligned}\r\n\tS &= \\sum_{i = 1}^N \\left[1 + \\sum_{c \\in i\\text{'s children}} (1 + d_c) - \\max_{c \\in i \\text{'s children}}(d_c) \\right]\\\\\r\n\t  &= N + \\sum_{i = 1}^N \\left(\\sum_{c \\in i\\text{'s children}} (1 + d_c) - (d_i - 1) \\right)\r\n\\end{aligned}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now,"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i = 1}^N \\sum_{c \\in i\\text{'s children}} (1 + d_c) = N - 1 + \\sum_{i = 2}^N d_i"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "and"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i = 1}^N -(d_i - 1) = -\\sum_{i = 1}^N d_i + N"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Summing these two expressions and adding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 42
      }, this), " gives"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 148,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = 3N - 1 - d_1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["which is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 10
      }, this), ". Below is Ben's code implementing this idea:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 154,
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
