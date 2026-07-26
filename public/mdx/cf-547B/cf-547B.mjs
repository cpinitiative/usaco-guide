"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/18126",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1,
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
      lineNumber: 3,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's begin by considering bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 33
      }, this), ". If this bear is the shortest in a group, then that group only extends until we find another bear shorter than bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 153
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This means that for each bear, we want to find:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "The closest bear to the left that is shorter"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The closest bear to the right that is shorter"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say these are at indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{L}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 26
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{R}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 46
      }, this), ", respectively. We know that bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 95
      }, this), " is the shortest bear for any group that lies in between them, so the largest possible group where bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 202
      }, this), " is the shortest has size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{R}[i] - \\texttt{L}[i] - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 231
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, suppose that bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 24
      }, this), " can determine the strength of a group of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 74
      }, this), ". Then its height is potentially the maximum strength among all groups of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 156
      }, this), ". However, even though we store the ", _jsxDEV(_components.em, {
        children: "largest group"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 195
      }, this), " that bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 221
      }, this), " can be in, any smaller group nested in this larger group would also have bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 303
      }, this), " as its shortest bear. Thus, if a bear works for a group of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 371
      }, this), ", it can also work for all smaller group sizes. To account for this, we can iterate from largest group size to the smallest one, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{strengths}[i] = \\texttt{max}(\\texttt{strengths}[i],~\\texttt{strengths}[i+1])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 509
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find the nearest shorter bears ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{L}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 35
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{R}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 55
      }, this), ", we use a monotonic stack. As we iterate through bears, while the height of the bear at the top of the stack is greater than or equal to the height of the current bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 239
      }, this), ", we pop the top bear from the stack. After popping all such bears, the bear now at the top is the closest shorter bear, so we store its index in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{L}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 388
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{R}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 407
      }, this), ". Then we push bear ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 442
      }, this), " onto the stack."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
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
      lineNumber: 17,
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
