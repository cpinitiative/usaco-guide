"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
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
      children: ["First, let's find an easy way to find the longest balanced subsequence (LBS) of a given string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 96
      }, this), ". To do this, we can employ a simple greedy algorithm: scan ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 159
      }, this), " from left to right, and when we encounter a ", _jsxDEV(_components.code, {
        children: ")"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 207
      }, this), ", pair it with any unpaired ", _jsxDEV(_components.code, {
        children: "("
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 238
      }, this), " seen so far. Here's a visual for this algorithm, where black lines show the pairs formed and the blue downstrokes represent the unpaired ", _jsxDEV(_components.code, {
        children: ")"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 379
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/advanced/cf-1924D/greedy.png",
        alt: "400|center"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that a blue downstroke is unpaired iff it is the first downstroke to go from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 83
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = i - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 94
      }, this), " for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\le 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 115
      }, this), ". Therefore, the total number of unpaired downstrokes is precisely the minimum ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 203
      }, this), " ever hit by our path. If we want an LBS of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 257
      }, this), " we must have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 275
      }, this), " paired downstrokes and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m - k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 302
      }, this), " unpaired downstrokes, so the question then becomes:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["How many paths with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 23
        }, this), " upstrokes and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 41
        }, this), " downstrokes touch, but do not cross, the line ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = k - m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 91
        }, this), "?"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For convenience, we can get rid of the \"do not cross\" condition by counting the number of paths that go below ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = k - m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 111
      }, this), " (inclusive), then subtracting the number of paths that go below ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = k - m - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 187
      }, this), ". This is equivalent to counting the number of strings with LBS length at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 281
      }, this), ", then subtracting those with LBS length at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 333
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To count the number of paths that go below ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = k - m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 44
      }, this), ", we consider three cases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "m \\le k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 3
        }, this), ". In this case, we always start below the line at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = 0 \\le k - m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 62
        }, this), ", so all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\binom{n + m}{m}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 88
        }, this), " paths are valid."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "n \\le k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 3
        }, this), ". In this case, we always end below the line at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = n - m \\le k - m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 60
        }, this), ", so all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\binom{n + m}{m}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 90
        }, this), " paths are valid."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "m \\gt k, n \\gt k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), ". In this case, since we start above the line and end above the line, we may apply the reflection bijection noted in ", _jsxDEV(_components.a, {
          href: "/adv/catalan#reflection",
          children: "the main module"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 138
        }, this), " to realize that we can instead count the number of paths that end at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = 2(k - m) - (n - m)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 250
        }, this), " = ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2k - m - n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 277
        }, this), ". We can verify that after this reflection, our new path will have ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 356
        }, this), " upstrokes and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n + m - k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 374
        }, this), " downstrokes, which generates a total of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\binom{n + m}{k}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 426
        }, this), " paths."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To finish, we just need to compute this expression for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 64
      }, this), ", then subtract the two values."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
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
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\max(n, m, k)^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Computing binomial coefficients can easily be done faster by preprocessing factorials, but that's not required for this problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
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
