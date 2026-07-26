"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In order to determine if a point is inside a polygon, we can imagine a ray being cast from that point towards any direction. Resulting in three possible scenarios:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 3,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "If the ray intersects with odd number of edges, then the point is inside."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "If the ray intersects with even number of edges, then the point is outside."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "If the origin point is on a line segment, then the point is on the edge."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This algorithm is known as the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.em, {
          children: "Ray Casting Algorithm"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 33
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-line-segment--line-segment-intersection",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-line-segment--line-segment-intersection",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Line segment & Line segment intersection"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given two line segments ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_1 = (p_1,p_2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 25
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_2 = (p_3,p_4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 47
      }, this), ", how can we efficiently check if they intersect each other? We will first have to use a concept from linear algebra called the ", _jsxDEV(_components.em, {
        children: "determinant"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 192
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We will define the determinant of two vectors as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\times"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 50
      }, this), ". Given two vectors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}=\\langle x_1,y_1 \\rangle"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 78
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{b}=\\langle x_2,y_2 \\rangle"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 116
      }, this), ". If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}\\times\\vec{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 154
      }, this), " gives a positive area then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 204
      }, this), " points to the left of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 236
      }, this), ", if it gives a negative area then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 280
      }, this), " points to the right of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 313
      }, this), ", and if it gives a zero area then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 357
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 371
      }, this), " are parallel."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To check if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 23
      }, this), " intersect with each other, is equal to checking if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 80
      }, this), " intersects with the line from line segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 129
      }, this), ", and checking if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 152
      }, this), " intersects with the line from line segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 201
      }, this), ". For the first of two condition to be true, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 251
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 261
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 272
      }, this), " must be on the opposite directions of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 316
      }, this), ". To define this mathematically, let"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a} = p_2-p_1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{b_1} = p_3-p_2"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{b_2} = p_4-p_2"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The condition will be true if and only if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}\\times\\vec{b_1} \\neq \\vec{a}\\times\\vec{b_2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 43
      }, this), ". Verifying the second of the two cases is equivalent to the procedure above, except ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 180
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 190
      }, this), " are switched with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 214
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 224
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As all geometry problem go, edge cases are a must. One edge case one might consider in our method above is that if both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}\\times\\vec{b_1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 121
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\vec{a}\\times\\vec{b_2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 150
      }, this), " are equal and are equal to 0, then they can still intersect as long as they overlap with each other. But let me let you in on a ", _jsxDEV(_components.em, {
        children: _jsxDEV(_components.strong, {
          children: "secret"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 304
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 303
      }, this), ", due to the way this problem is structured, all vertices are on lattice points, meaning that they have whole numbers as coordinates. And since one of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 470
      }, this), " is customizable (we get to pick the point the point cast its ray at), we can just set its coordinate to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\infty,1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 578
      }, this), ". This way, the ray will have a slope of close to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 640
      }, this), ", successfully avoiding all possible lattice point intersections. One trick to rule all the edge cases!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
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
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
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
