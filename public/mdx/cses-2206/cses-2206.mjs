"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we query the minimum cost to buy a pizza at point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 56
      }, this), ", we can split it into\r\ntwo cases (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\rightarrow j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 12
      }, this), ")"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["going downwards (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j < i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 21
        }, this), "): the cost would be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p_j-j+i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 49
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["going upwards (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j > i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 19
        }, this), "): the cost would be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p_j+j-i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 47
        }, this)]
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
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "+i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 16
      }, this), " are constant, we can first calculate the best cost and then\r\nadd ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "+i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 5
      }, this), " for the downwards cost and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 37
      }, this), " for the upwards cost."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, if we keep two min segtrees (one for going downwards and one for going\r\nupwards), we can keep track of the minimum cost by setting each value in the\r\ndownwards segtree to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_j-j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 22
      }, this), " and each value in the upwards segtree to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_j+j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 71
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To query, we can simulate going downwards or upwards from position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 68
      }, this), ". To go\r\ndownwards, we must buy pizza in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1\\dots k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 43
      }, this), " so we query the minimum\r\ncost in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1\\dots k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 19
      }, this), ". Going upwards is similar to going downwards, but\r\ninstead of buying pizza in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1\\dots k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 38
      }, this), ", we're buying pizza in the\r\nrange ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[k\\dots N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 7
      }, this), "; thus we query the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[k\\dots N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 45
      }, this), " in the upwards segtree."]
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
