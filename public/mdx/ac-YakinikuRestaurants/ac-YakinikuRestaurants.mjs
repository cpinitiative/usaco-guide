"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["Let's consider a naive solution first. If we fix the range of restaurants that\r\nwe visit, then we should always visit them in order from left to right. This\r\nwill cause us to lose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_l + A_{l + 1} + ... + A_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 23
      }, this), " units of happiness. Then, each ticket\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), " should be spent at the restaurant ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\in [l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 39
      }, this), " with the largest value of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B_{i, j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), ". Naively, this approach will run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Luckily for us, our happiness function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C(l, r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 40
      }, this), " satisfies the Quadrangle Inequality!\r\nTo see why, let's use the alternative definition of this inequality provided in the main module:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["A function ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "C(l, r)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 14
        }, this), " satisfies the Quadrangle Inequality iff, when we increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 83
        }, this), ", decrementing ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "l"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 101
        }, this), " can only grow more expensive. Formally, for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "l \\leq r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 153
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "C(l - 1, r) - C(l, r) \\leq C(l - 1, r + 1) - C(l, r + 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 165
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we're seeking to maximize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C(l, r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 33
      }, this), ", we instead look to show that incrementing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 86
      }, this), "\r\ncan only ", _jsxDEV(_components.em, {
        children: "diminish"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 10
      }, this), " the additional happiness we gain by decrementing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 70
      }, this), ". This is\r\nrather intuitive: since the happiness gained from each ticket is equal to the maximum\r\nof all restaurants in our range, the impact of adding a single restaurant decreases\r\nas our range grows larger and larger."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Formally, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 15
      }, this), " denote ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max_{j \\in [l + 1, r]} B_{j,i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 28
      }, this), ", the max happiness we can get\r\nfrom ticket ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 13
      }, this), ". Then, decrementing from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 42
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 53
      }, this), " changes our happiness by"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=1}^m \\max(B_{l,i} -C_i,0) - A_l"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["All ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 5
      }, this), " can only increase when we increment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 47
      }, this), ", and thus the above expression\r\ncan only decrease."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, we can apply the divide-and-conquer method described in the main module to\r\nsolve this problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 23
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
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
        children: "\\mathcal{O}(NM \\log N)"
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
