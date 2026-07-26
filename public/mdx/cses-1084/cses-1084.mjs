"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/83295",
        rel: "nofollow",
        target: "_blank",
        children: "Unofficial Editorial (C++)"
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
      children: ["We can use a greedy approach to solve this problem. First, we sort the applicants\r\nand apartments. We keep two pointers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 38
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 46
      }, this), " (initialized to 0), which\r\nkeep track of the current index of the applicant and apartment we are looking at\r\nrespectively. Then, while there are more applicants and apartments to look\r\nthrough, we repeatedly check the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "|\\texttt{applicants}[i] - \\texttt{apartments}[j]| \\leq k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 6
        }, this), ", we have found a\r\nsuitable apartment for the current applicant. Thus, we increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 68
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 73
        }, this), ", and\r\nour answer."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{apartments}[j]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 14
        }, this), " is either too big or too small for\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{applicants}[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 3
        }, this), ". We can increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 46
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 53
        }, this), " accordingly."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
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
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\log(n)+m\\log(m))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
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
      lineNumber: 166,
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
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use C++'s ", _jsxDEV(_components.code, {
        children: "std::multiset"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 18
      }, this), " to find an apartment that is in the range of an applicant's desired size."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 170,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Using lower bound, we can find the smallest apartment the applicant can tolerate."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "If none exists, we do nothing."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Otherwise, we remove it from the multiset and add one to our answer.\r\nRemoving it makes sure another applicant cannot take it."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Sorting the applicants by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 27
      }, this), " results in the desired apartment sizes\r\nfor each applicant being sorted in increasing value. This is built into the multiset."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Besides this, the spirit of the greedy algorithm is the same as in the previous solution."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 180,
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
      lineNumber: 182,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((n + m)\\log(n)+m\\log(m))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
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
