"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
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
      children: ["A brute force approach would check every pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 47
      }, this), " and compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(a_i, a_j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 68
      }, this), ".\r\nThis takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 \\log A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 12
      }, this), " time, which is too slow for large ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 72
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of directly checking whether ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(x, y) = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 38
      }, this), ", we count pairs by grouping them according to their gcd."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-how-to-group-them",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-how-to-group-them",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "How to group them?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "count[d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 3
        }, this), " = number of elements in the array divisible by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 61
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "pairs[d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), " = number of pairs whose gcd is exactly ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 53
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        children: "count[d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 4
      }, this), " elements are divisible by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 41
      }, this), ", then the number of unordered pairs among them is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{\\text{count}[d]}{2} = \\frac{\\text{count}[d] \\cdot (\\text{count}[d] - 1)}{2}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, this counts pairs whose gcd is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 41
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 46
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 52
      }, this), " and so on."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "So we must subtract the overcounted pairs."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-step-1-counting-multiples",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-1-counting-multiples",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step 1: Counting Multiples"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For every ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 11
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 20
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{maxVal}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 27
      }, this), ", we iterate over its multiples:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: _jsxDEV(_components.code, {
          children: "count[d] += freq[multiple]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After this loop, ", _jsxDEV(_components.code, {
        children: "count[d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 18
      }, this), " stores how many numbers are divisible by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 70
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This preprocessing runs in harmonic time:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{d=1}^{A} \\frac{A}{d} = \\mathcal{O}(A \\log A)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-step-2-inclusionexclusion-on-gcd",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-2-inclusionexclusion-on-gcd",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step 2: Inclusion–Exclusion on GCD"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We now compute ", _jsxDEV(_components.code, {
        children: "pairs[d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 16
      }, this), " from largest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 40
      }, this), " down to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 52
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a fixed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 13
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Start with all pairs divisible by ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 52,
            columnNumber: 38
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\text{total} = \\binom{\\text{count}[d]}{2}"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 54,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Subtract pairs already assigned to multiples of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 58,
            columnNumber: 52
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\text{pairs}[d] = \\text{total} - \\sum_{k \\ge 2} \\text{pairs}[k \\cdot d]"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Why does this work?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Every pair with gcd equal to some multiple ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 66,
          columnNumber: 46
        }, this), " was included in ", _jsxDEV(_components.code, {
          children: "total"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 66,
          columnNumber: 68
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Since we process in decreasing order of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 43
        }, this), ", all ", _jsxDEV(_components.code, {
          children: "pairs[k*d]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 52
        }, this), " are already computed."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Subtracting them leaves only pairs whose gcd is exactly ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 68,
          columnNumber: 59
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is classic ", _jsxDEV(_components.strong, {
        children: "Inclusion–Exclusion over divisors."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 17
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We are asked to count pairs that are ", _jsxDEV(_components.strong, {
        children: "coprime"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 38
      }, this), ", i.e., ", _jsxDEV(_components.code, {
        children: "gcd(x, y) = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 57
      }, this), ". So the answer is ", _jsxDEV(_components.code, {
        children: "pairs[1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 91
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
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
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(A \\log A + N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 22
      }, this), ","]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
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
