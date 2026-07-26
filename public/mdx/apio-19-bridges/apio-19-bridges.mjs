"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["The main idea in this problem is to use square-root decomposition on queries.\r\nFor convenience, call type 1 queries ", _jsxDEV(_components.strong, {
        children: "updates"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 38
      }, this), " and type 2 queries\r\n", _jsxDEV(_components.strong, {
        children: "calculations"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, split the queries into blocks of about ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sqrt N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 47
      }, this), " queries. In each block,\r\nthere are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 11
      }, this), " updates or calculations. For each block:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Split the bridges into two groups: ", _jsxDEV(_components.strong, {
          children: "changed"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 38
        }, this), " and ", _jsxDEV(_components.strong, {
          children: "unchanged"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 54
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If we sort the calculations and unchanged bridges in decreasing order of\r\nweight, we can simply use DSU to find which nodes are connected from those\r\nbridges alone.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "These connected nodes are constant for all calculations in the current block"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 13,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["To handle the updates:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Iterate over the queries in the current block (without sorting)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 15,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "If the query is an update, simply update the bridge's weight"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 16,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["If the query is a calculation, iterate through each changed bridge and\r\nconnect the nodes if the weight limit is above the query's weight limit\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: "This works because this means the answer for the current query is\r\ndependent only on previous updates"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 19,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: "The key thing here is that we need a way to roll back DSU unions, since\r\nthe set of \"good\" bridges may differ from query to query"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 21,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: "To achieve this, we simply use DSU with path balancing only and keep a\r\nstack of previous DSU operations"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 23,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 19,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
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
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((Q + M) \\log N \\sqrt Q )"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, it is possible to remove the log factor as mentioned in ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/67129?#comment-514312",
        rel: "nofollow",
        target: "_blank",
        children: "this comment"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 66
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
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
