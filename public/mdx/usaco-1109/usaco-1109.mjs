"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://usaco.org/current/data/sol_prob3_bronze_feb21.html",
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
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-vector-cross-product",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-vector-cross-product",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution (Vector Cross Product)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find the area of a triangle with a vertex at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 49
      }, this), ", a second vertex at\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x_1, y_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " and third vertex at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x_2, y_2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 34
      }, this), ", we can use the formula\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{x_1y_2 - y_1x_2}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), ". This value is positive if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{x_1}{y_1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 56
      }, this), " is\r\ngreater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{x_2}{y_2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 14
      }, this), ", since the slope becomes smaller, making it\r\nclockwise. Likewise, a negative area means the direction is counterclockwise."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the program, every time Farmer John lays down another fence, a new triangle\r\nis formed with his new position, the origin, and the previous position (the last\r\nfence he laid down). We can calculate the area of this new triangle. After he\r\nlays down all the fences, we can sum the areas of the multiple triangles to find\r\nif the final direction was positive (clockwise) or negative (counterclockwise)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Cross_product",
        rel: "nofollow",
        target: "_blank",
        children: "cross product"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 5
      }, this), " of two vectors\r\nis twice the signed area of the triangle between them. Every time Farmer John\r\nlays down a fence, we can treat it as a vector and compute the cross product of\r\nthis vector against the previous one. By adding the cross products together, we\r\nget twice the final area of the polygon formed by these vectors. Based on the\r\nsign of the area, we can know if it's counterclockwise or clockwise (vector\r\ndirecting up or down with the right hand rule). The process is also how the\r\nshoelace formula is proved."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
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
