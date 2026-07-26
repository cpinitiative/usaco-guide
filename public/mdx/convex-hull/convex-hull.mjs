"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "Convex Hull"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 5
      }, this), " is the subset of points that forms the smallest convex\r\npolygon which encloses all points in the set. To visualize this, imagine that\r\neach point is a pole. Then, imagine what happens if you were to wrap a rope\r\naround the outside of all the poles, and then pull infinitely hard, such that\r\nthe connections between any two points that lie on the edge of the rope are\r\nlines. The set of points that touch the rope is the convex hull."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-graham-scan",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-graham-scan",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Graham Scan"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-monotone-chain",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-monotone-chain",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Monotone Chain"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 233,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 254,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With the Monotone Chain algorithm, we start by sorting the given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 66
      }, this), " points in ascending order with respect to their ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 118
      }, this), " coordinates. If two points have the same ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 163
      }, this), " coordinate, then we will look at the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 204
      }, this), " coordinate."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 256,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Next, we will calculate the convex hull in two parts - the upper and the lower hull. Firstly, we observe that the starting and ending points of both upper and lower hulls are the same. They are the points with the lowest and highest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 234
      }, this), " value respectively, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 258
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 268
      }, this), ". We start by adding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 298
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 308
      }, this), " to the hull. (Note that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 338
      }, this), " doesn't necessarily have to be on the convex hull at the end). Then, starting from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 427
      }, this), ", we iterate through the sorted points and add them to the hull. Let's denote the current point being added as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 543
      }, this), " and the last point still on the hull as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 591
      }, this), ". When adding new points, we want to make sure that there is no right turn among all segments of the hull, just like in the Graham Scan algorithm discussed above. To achieve this, the segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{i-1}P_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 790
      }, this), " should always be on the right side of the segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{i-1}P_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 853
      }, this), ". This can be calculated by using a cross-product:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(P_i - P_{i-1}) \\times (P_k - P_{i-1}) < 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 260,
          columnNumber: 6
        }, this), ", the point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 260,
          columnNumber: 62
        }, this), " lies on the left side of the segment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_{i-1}P_k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 260,
          columnNumber: 105
        }, this), ". In this case, we have to remove point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 260,
          columnNumber: 157
        }, this), " from the hull and repeat this check."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(P_i - P_{i-1}) \\times (P_k - P_{i-1}) = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 261,
          columnNumber: 6
        }, this), ", the point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 261,
          columnNumber: 62
        }, this), " lies on the segment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_{i-1}P_k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 261,
          columnNumber: 88
        }, this), ". Whether to include multiple collinear points depends on the question, but for the given question above, we will remove the point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 261,
          columnNumber: 231
        }, this), " as well and repeat the check."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, the point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 262,
          columnNumber: 24
        }, this), " lies on the right side of the segment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_{i-1}P_k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 262,
          columnNumber: 68
        }, this), ". In this case, we can add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 262,
          columnNumber: 107
        }, this), " to the hull and process the next point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_{k+1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 262,
          columnNumber: 152
        }, this), " from the given point list."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After all the points have been processed, we have found the lower hull and will begin to find the upper hull in the same manner. This time, we add point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n-2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 154
      }, this), " to the hull and iterate from the end of the points, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n-3}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 216
      }, this), ", to the starting point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 249
      }, this), ". (The point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n-2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 267
      }, this), " also doesn't necessarily have to be the convex hull and could be removed if it causes a right turn)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 264,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["At the end, we have got all points of the convex hull in the counterclockwise order. To do this in the clockwise order, one only has to change the condition for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(P_i - P_{i-1}) \\times (P_k - P_{i-1})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 162
      }, this), " from more than 0 to less than 0. In this case, the upper hull will be found first and then the lower hull."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This algorithm takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 22
      }, this), " time to sort the points and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 74
      }, this), " time to calculate the hull, giving a final time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 153
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 268,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "An animation of  how it works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-rotating-calipers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-rotating-calipers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Rotating Calipers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 513,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 517,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 534,
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
