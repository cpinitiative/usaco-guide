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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution-lis-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-lis-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution: LIS DP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I labeled the sequences ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 25
      }, this), " and ", _jsxDEV(_components.code, {
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 33
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can track the length of the LCIS ending at ", _jsxDEV(_components.code, {
        children: "b[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 47
      }, this), " in a list:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[j] = max(dp[j],dp[k]+1) \\text{ for all } k \\lt j \\text{ where } a[i] = b[j] \\text{ and } b[k] \\lt b[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can also create a parent list that stores the index to the last number in ", _jsxDEV(_components.code, {
        children: "dp[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 78
      }, this), " for each ", _jsxDEV(_components.code, {
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 95
      }, this), ", letting us reconstruct the subsequence at the end."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Looping through sequence ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 26
      }, this), ", we try to add to each subsequence in ", _jsxDEV(_components.code, {
        children: "dp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 68
      }, this), ". We track the current LCIS ending at elements of ", _jsxDEV(_components.code, {
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 122
      }, this), " that are smaller than ", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 148
      }, this), ", and store its index as ", _jsxDEV(_components.code, {
        children: "last"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 179
      }, this), " to extend it if ", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 202
      }, this), " matches a later element."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each ", _jsxDEV(_components.code, {
        children: "b[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 10
      }, this), ", we check if ", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 30
      }, this), " can extend the LCIS ending at ", _jsxDEV(_components.code, {
        children: "b[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 67
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "a[i] = b[j]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 6
          }, this), ", then the LCIS can be extended, and ", _jsxDEV(_components.code, {
            children: "dp[j]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 56
          }, this), " should be updated."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "a[i] \\gt b[j]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 6
          }, this), ", ", _jsxDEV(_components.code, {
            children: "a[i]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 23
          }, this), " could possibly be added later to the sequence, and we need to update the length of the LCIS."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "a[i] \\lt b[j]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 26,
            columnNumber: 6
          }, this), ", we don't do anything because ", _jsxDEV(_components.code, {
            children: "a[i]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 26,
            columnNumber: 52
          }, this), " cannot extend the subsequence."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After that, we find the length of the LCIS in ", _jsxDEV(_components.code, {
        children: "dp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 47
      }, this), " and reconstruct the sequence."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
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
