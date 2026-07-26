"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
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
      children: "We want to place the smaller image (robot image) over the larger image (floor image) such that the number of matching pixels is maximized."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the robot image (mask) be an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\times m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 34
      }, this), " grid, and the floor image be an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_1 \\times m_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 79
      }, this), " grid, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\le n_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 108
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m \\le m_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 124
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a fixed placement ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 23
      }, this), ", we count:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=0}^{n-1} \\sum_{j=0}^{m-1} [\\text{mask}_{i,j} = \\text{floor}_{i+y, j+x}]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since values are only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 23
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 30
      }, this), ", we split this into two independent contributions:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["positions where both are ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 28
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["positions where both are ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 28
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Define indicator arrays:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "A_{i,j} = \\text{mask}_{i,j}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "B_{i,j} = \\text{floor}_{i,j}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then matches of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 17
      }, this), " are:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum A_{i,j} \\cdot B_{i+y, j+x}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To count matches of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 21
      }, this), ", observe:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 - A_{i,j}) \\cdot (1 - B_{i+y, j+x})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus total matches become:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum A_{i,j} \\cdot B_{i+y, j+x} + \\sum (1 - A_{i,j}) \\cdot (1 - B_{i+y, j+x})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We compute both terms separately and add them."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-converting-to-polynomial-multiplication",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-converting-to-polynomial-multiplication",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Converting to Polynomial Multiplication"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We reduce the 2D problem into 1D using row-major flattening."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Map position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 14
      }, this), " to index:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{index} = i \\cdot m_1 + j"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Construct arrays:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Flattened mask → ", _jsxDEV(_components.code, {
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 94,
          columnNumber: 20
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Flattened floor → ", _jsxDEV(_components.code, {
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 95,
          columnNumber: 21
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To correctly simulate sliding, we ", _jsxDEV(_components.strong, {
        children: "reverse"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 35
      }, this), " array ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 53
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now the contribution:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum A_{i,j} \\cdot B_{i+y, j+x}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "becomes a standard convolution."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["After multiplication, each index in the resulting array corresponds to a specific shift.\r\nFor a placement ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 17
      }, this), ", the corresponding index is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "i = (y \\cdot m_1 + x) + (|a| - 1)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This value gives the number of matching ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 41
      }, this), " pixels for this placement."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We repeat the same process for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 - A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 32
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 - B)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 46
      }, this), " to count matching ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 74
      }, this), " pixels, and add the results:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{matches} = c_1[i] + c_2[i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We iterate over all valid placements ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 38
      }, this), " and keep track of those achieving the maximum value."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 132,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimising-using-fft",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimising-using-fft",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimising using FFT"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 137,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finding this using brute force runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\cdot m \\cdot n_1 \\cdot m_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 40
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using Fast Fourier Transform (FFT), convolution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 57
      }, this), " time, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N = n_1 \\cdot m_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 93
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 163,
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
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 22
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N = n_1 \\cdot m_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 52
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 167,
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
