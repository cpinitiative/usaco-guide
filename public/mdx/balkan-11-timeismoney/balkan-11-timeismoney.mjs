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
        href: "https://web.archive.org/web/20231020183408/http://www.boi2011.ro/resurse/tasks/timeismoney-sol.pdf",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For the first few test cases where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t=c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 36
      }, this), ", we can solve the problem by constructing an MST with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 96
      }, this), " being the weights. If we let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T = \\sum t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 129
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C = \\sum c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 146
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V = T \\cdot C = T^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 160
      }, this), " will be minimized when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 205
      }, this), " is minimized."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To solve the problem completely, we will have to minimize the product of those two sums, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V = C \\cdot T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 90
      }, this), ". The solution space contains all possible MSTs with their respective ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 175
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 183
      }, this), " values. We can view each of those possible solutions as a 2D-point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(T, C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 254
      }, this), ". There exists a curve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C(T) = \\frac{V}{T}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 285
      }, this), " such that every point on it has the same ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 347
      }, this), " value. As an inverse proportion function, it is convex, so the best solution must lie somewhere on the left-most curve, i.e. on the lower convex hull. Therefore, it suffices to check all points on the lower convex hull of our solution space to find the minimal ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 612
      }, this), " value. Nevertheless, we cannot really calculate the convex hull since it would require all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{M}{N-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 707
      }, this), " points to be known. Instead, we use another approach below."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["At the beginning, we choose two points on the lower convex hull, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 66
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 74
      }, this), ", as our starting points for our search. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 118
      }, this), " should be the point where we minimize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 160
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 168
      }, this), " where we minimize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 190
      }, this), ". We then want to find a point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 224
      }, this), " which is left-most from line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 257
      }, this), ". The area of the triangle ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ABP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 288
      }, this), " is proportional to the distance between the line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 343
      }, this), " and the point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 362
      }, this), ", given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|AB|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 373
      }, this), " is constant. Therefore, we only have to find out the triangle ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ABP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 442
      }, this), " with maximum area. Using the cross product, we get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-2A_{ABP} = AB \\times AP = (x_B - x_A)(y_P - y_A) - (y_B - y_A)(x_P - x_A) = y_P(x_B - x_A) - x_P(y_B - y_A) + x_A(y_B - y_A) - y_A(x_B - x_A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 499
      }, this), ". Note that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_A(y_B - y_A) - y_A(x_B - x_A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 655
      }, this), " is constant and can be ignored. Thus, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-A_{ABP}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 727
      }, this), " is proportional to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_P(x_B - x_A) - x_P(y_B - y_A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 757
      }, this), ". As our goal was to maximize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_{ABP}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 820
      }, this), ", we should here minimize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_P(x_B - x_A) - x_P(y_B - y_A)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 855
      }, this), " instead. This can be done by taking this value as the weight of our MST algorithm and then build the MST. The result would be our new point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1029
      }, this), ". If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1037
      }, this), " is on the right side of vector ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1072
      }, this), " (thus on the left side of line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1108
      }, this), "), it is also on the convex hull. We then use Divide-and-Conquer and solve the same problem with either points ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1223
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1228
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1235
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1240
      }, this), ". For each of these points, we update the current best solution if the new point is better. Otherwise, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1349
      }, this), " is on the right side of line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1382
      }, this), ", we do not have to search further with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1426
      }, this), " since it is not on the lower convex hull anymore."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 15
      }, this), " are positive integers, the lower convex hull between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 72
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 80
      }, this), " consists of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\leq (N-1) \\cdot t_{max} = 50745"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 96
      }, this), " points. For each of those ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 159
      }, this), " points, we run Kruskal's algorithm in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M \\log M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 201
      }, this), ". Therefore, the total time complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(kM \\log M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 266
      }, this), ". This suffices for the given test cases."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
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
