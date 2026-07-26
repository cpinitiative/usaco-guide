"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_family_bronze_open18.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
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
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By finding the closest common ancestor and the distances from the ancestor to the two cows, we can uniquely identify their relationship."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
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
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 292,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 294,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Similar to solution 1, but we find the common ancestor of the two cows more efficiently."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 296,
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
      lineNumber: 298,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 300,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 300,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-solution-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 538,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 540,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's first create a map from each cow to its parent. Now let's handle this case by case."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 542,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 544,
            columnNumber: 4
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 544,
            columnNumber: 12
          }, this), " being siblings is equivalent to them having the same parent."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 544,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 546,
            columnNumber: 4
          }, this), " being a *-mother of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 546,
            columnNumber: 28
          }, this), " is equivalent to ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 546,
            columnNumber: 49
          }, this), " equaling some ancestor of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 546,
            columnNumber: 79
          }, this), ". We can iterate over the ancestors of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 546,
            columnNumber: 121
          }, this), " by starting with our current cow being ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 546,
            columnNumber: 164
          }, this), " and then repeatedly setting the current cow to its parent."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 546,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 546,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 548,
            columnNumber: 4
          }, this), " being a *-aunt of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 548,
            columnNumber: 26
          }, this), " is equivalent ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 548,
            columnNumber: 44
          }, this), " and some ancestor of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 548,
            columnNumber: 69
          }, this), " being siblings. We can handle this by combining cases 1 and 2."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 548,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 548,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["We can handle ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 550,
            columnNumber: 18
          }, this), " being a *-mother of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 550,
            columnNumber: 42
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 550,
            columnNumber: 50
          }, this), " being a *-aunt of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 550,
            columnNumber: 72
          }, this), " by swapping ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 550,
            columnNumber: 88
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 550,
            columnNumber: 96
          }, this), " and applying the same logic."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 550,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 552,
            columnNumber: 7
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 552,
            columnNumber: 15
          }, this), "'s oldest ancestors are the same, then they are related."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 552,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 552,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Otherwise, if none of the cases above apply, then ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "X"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 554,
            columnNumber: 54
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "Y"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 554,
            columnNumber: 62
          }, this), " are not related."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 554,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 554,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 544,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 556,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 558,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 558,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 558,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-video-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 634,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Amogha Pokkulandra"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 636,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-video-solution-code",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution-code",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 640,
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
