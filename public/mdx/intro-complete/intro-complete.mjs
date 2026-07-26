"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["In many problems (especially in Bronze) it suffices to check all possible cases\r\nin the solution space, whether it be all elements, all pairs of elements, or all\r\nsubsets, or all permutations. Unsurprisingly, this is called ", _jsxDEV(_components.strong, {
        children: "complete search"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 62
      }, this), "\r\n(or ", _jsxDEV(_components.strong, {
        children: "brute force"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 5
      }, this), "), because it completely searches the entire solution space."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---maximum-distance",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---maximum-distance",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Maximum Distance"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can iterate through every pair of points and find the square of the distance\r\nbetween them, by squaring the formula for Euclidean distance:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{distance}[(x_1,y_1),(x_2,y_2)]^2 = (x_2-x_1)^2 + (y_2-y_1)^2."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Maintain the current maximum square distance in ", _jsxDEV(_components.code, {
        children: "max_squared"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 49
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "A couple notes:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 135,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Since we're iterating through all pairs of points, we start the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 137,
          columnNumber: 67
        }, this), " loop from\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j = i+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 3
        }, this), " so that point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 27
        }, this), " and point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 41
        }, this), " are never the same point.\r\nFurthermore, it makes it so that each pair is only counted once. In this\r\nproblem, it doesn't matter whether we double-count pairs or whether we allow\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 141,
          columnNumber: 3
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 141,
          columnNumber: 11
        }, this), " to be the same point, but in other problems where we're counting\r\nsomething rather than looking at the maximum, it's important to be careful\r\nthat we don't overcount."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Secondly, the problem asks for the square of the maximum Euclidean distance\r\nbetween any two points. Some students may be tempted to maintain the maximum\r\ndistance in an integer variable, and then square it at the end when\r\noutputting. However, the problem here is that while the square of the distance\r\nbetween two integer points is always an integer, the distance itself isn't\r\nguaranteed to be an integer. Thus, we'll end up shoving a non-integer value\r\ninto an integer variable, which truncates the decimal part."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 137,
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
      lineNumber: 291,
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
