"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/58991",
        rel: "nofollow",
        target: "_blank",
        children: "official editorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 5
      }, this), " mentions a solution using an Aho-Corasick Automaton built over the query strings. We run the initial string through the automaton to locate all occurrence positions of each query. The answer can easily be identified for each query by using a sliding window."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "More intuitively, instead of building an Aho-Corasick automaton over the queries, let us build a suffix automaton over the input string. Like before, we will need all occurrence positions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 13
      }, this), ", let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "pos[s]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this), " denote the ending position of the first occurrence of any string that corresponds to state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 122
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["When we create a new state ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 30
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "pos[s] = len[s] - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 40
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["When we clone state ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 23
        }, this), " to create a state ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 45
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "pos[s] = pos[t]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 55
        }, this), "\r\nWith this method,  we can easily initialize ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "pos"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 45
        }, this), " without any extra time complexity. Let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "occ_P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 90
        }, this), " be the set of positions where a string ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 137
        }, this), " begins in the string. If state ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 172
        }, this), " corresponds to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 191
        }, this), ", then clearly ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(pos[p] - |P| + 1) \\in occ_P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 209
        }, this), ". To find the remainder of occurrence positions, we can take advantage of the structure of the suffix automaton."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["All states where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 18
      }, this), " is a suffix is a candidate for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "occ_P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 53
      }, this), ". Thus, we simply do a BFS/DFS on the ", _jsxDEV(_components.em, {
        children: "suffix-link tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 98
      }, this), ", or the tree formed by building a tree out of the suffix links and rooted at the initial state, starting from state that we arrive at when we run ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 263
      }, this), " through the suffix automaton. There is a technicality that more than one state may have the same occurrence position. Namely, this happens only with cloned states; thus, we redefine ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "pos[s] = -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 449
      }, this), " for all cloned states ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 485
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can preprocess all queries, and solve them all with a single BFS/DFS."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
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
