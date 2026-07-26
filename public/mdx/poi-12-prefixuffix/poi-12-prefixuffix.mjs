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
      lineNumber: 1,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We are given a string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 23
      }, this), " of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 37
      }, this), ". We need to choose a ", _jsxDEV(_components.strong, {
        children: "prefix"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 62
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "U"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 73
      }, this), " and a ", _jsxDEV(_components.strong, {
        children: "suffix"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 83
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "U'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 94
      }, this), " of the same length such that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["They are ", _jsxDEV(_components.strong, {
          children: "cyclically equivalent"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 12
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["They ", _jsxDEV(_components.strong, {
          children: "do not overlap"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 8
        }, this), " in the original string."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Their length is ", _jsxDEV(_components.strong, {
          children: "maximized"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 19
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If the ", _jsxDEV(_components.strong, {
        children: "cyclic equivalence"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 8
      }, this), " condition did not exist, the problem would reduce to finding the ", _jsxDEV(_components.strong, {
        children: "longest prefix that is also a suffix without overlapping"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 96
      }, this), ". This is a classic application of the ", _jsxDEV(_components.strong, {
        children: "KMP prefix function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 195
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, because cyclic equivalence is allowed, the prefix and suffix may match ", _jsxDEV(_components.strong, {
        children: "after a rotation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 81
      }, this), ", so we must detect such matches efficiently. This is handled using ", _jsxDEV(_components.strong, {
        children: "rolling hash"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 169
      }, this), " to compare substrings quickly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-visualising-the-requirement",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-visualising-the-requirement",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Visualising the Requirement"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can think of the structure of the string as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "Index:  0       i                 n-i-L    n-i      n\r\nString: |---U---|---V---| . . . . . |---V---|---U---|\r\nLength:     i       L                   L       i\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "U"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 3
        }, this), " is the prefix that must match the suffix."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "V"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 3
        }, this), " is a middle segment that appears on both sides of the center."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The prefix and suffix must ", _jsxDEV(_components.strong, {
          children: "not overlap"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 30
        }, this), ", so ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2i \\le n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 50
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The middle parts ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "V"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 20
        }, this), " must match as well to satisfy the ", _jsxDEV(_components.strong, {
          children: "cyclic rotation condition"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 58
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus the final candidate length becomes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-algorithm-idea",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-algorithm-idea",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Algorithm Idea"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, compute the ", _jsxDEV(_components.strong, {
        children: "prefix function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 20
      }, this), " (", _jsxDEV(_components.code, {
        children: "pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 41
      }, this), ") using ", _jsxDEV(_components.strong, {
        children: "KMP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 53
      }, this), ". This gives all possible lengths of borders ", _jsxDEV(_components.code, {
        children: "prefix = suffix"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 105
      }, this), " of the string."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Next, we need to handle the ", _jsxDEV(_components.strong, {
        children: "cyclic rotation part"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 29
      }, this), ". For this we compute an auxiliary array ", _jsxDEV(_components.code, {
        children: "best[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 94
      }, this), " which stores the ", _jsxDEV(_components.strong, {
        children: ["maximum length ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 138
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 121
      }, this), " such that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["substring ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s[i \\dots i+L-1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 13
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["matches substring ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s[n-i-L \\dots n-1-i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 21
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This comparison must be fast because it occurs many times. Therefore we use ", _jsxDEV(_components.strong, {
        children: "rolling hash"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 77
      }, this), " so each substring comparison takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 129
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We fill ", _jsxDEV(_components.code, {
        children: "best[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 9
      }, this), " from right to left:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Start with ", _jsxDEV(_components.code, {
          children: "best[i] = best[i+1] + 2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 14
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Shrink it until the two substrings match and the segments do not overlap."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Finally:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Start with ", _jsxDEV(_components.code, {
          children: "ans = best[0]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 15
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Iterate over all border lengths using the prefix function."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If a border length ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 23
        }, this), " satisfies ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2i \\le n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 37
        }, this), ", update\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "ans = \\max(ans, i + best[i])"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 4
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This effectively combines:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "KMP"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 63,
          columnNumber: 3
        }, this), " to enumerate valid prefix–suffix candidates."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Rolling hash"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 3
        }, this), " to verify the cyclic rotation structure efficiently."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The result is the ", _jsxDEV(_components.strong, {
        children: "maximum valid length"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 19
      }, this), " satisfying all conditions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 68,
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
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
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
