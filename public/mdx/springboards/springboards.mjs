"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Note: This was originally in Gold, but the practice problems were too hard ..."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "To solve this problem, we need a data structure that supports operations similar\r\nto the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Add a pair ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(a,b)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 15
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For any ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 12
        }, this), ", query the maximum value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 44
        }, this), " over all pairs satisfying\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a\\ge x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 4
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This can be solved with a segment tree, but a simpler option is to use a map. We\r\nrely on the fact that if there exist pairs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 44
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(c,d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 56
      }, this), " in the map such\r\nthat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a\\le c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b\\le d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 19
      }, this), ", we can simply ignore ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 50
      }, this), " (and the answers to\r\nfuture queries will not be affected). So at every point in time, the pairs\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a_1,b_1),(a_2,b_2),\\ldots,(a_k,b_k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), " that we store in the map will satisfy\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1 < a_2 < \\cdots < a_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_1 > b_2 > \\cdots > b_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Querying for a certain ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 26
        }, this), " can be done with a single ", _jsxDEV(_components.code, {
          children: "lower_bound"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 56
        }, this), " operation,\r\nas we just want the minimum ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 31
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i\\ge x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 45
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["When adding a pair ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(a',b')"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 22
        }, this), ", first check if there exists ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(a,b)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 61
        }, this), " already in\r\nthe map such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a\\ge a', b\\ge b'"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 21
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "If so, then do nothing."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 26,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Otherwise, insert ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(a',b')"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 27,
              columnNumber: 23
            }, this), " into the map and repeatedly delete pairs ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(a,b)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 27,
              columnNumber: 74
            }, this), "\r\nsuch that ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "a\\le a', b\\le b'"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 28,
              columnNumber: 15
            }, this), " from the map until none remain."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 27,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 14
      }, this), " insertions, then each query takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 52
      }, this), " time\r\nand adding a pair takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 25
      }, this), " time amortized."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You can check the\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_boards_gold_jan20.html",
        rel: "nofollow",
        target: "_blank",
        children: "analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), " for the\r\nfull solution to the original problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
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
      lineNumber: 71,
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
