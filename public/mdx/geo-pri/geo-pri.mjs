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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "You should know operations such as the cross product and dot product."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://github.com/bqi343/USACO/tree/master/Implementations/content/geometry%20(13)/Primitives",
          rel: "nofollow",
          target: "_blank",
          children: "My Templates"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-location-of-a-point",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-location-of-a-point",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Location of a Point"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To check the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 14
      }, this), " location towards the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 39
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 45
      }, this), " line we use following formula: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(P.y - P_1.y) * (P_2.x - P_1.x) - (P.x - P_1.x) * (P_2.y - P_1.y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 82
      }, this), "\r\nIf it's equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 18
      }, this), " it means that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 36
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 51
      }, this), " are collinear. Otherwise the value's sign indicated if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 112
      }, this), " is under the line - negative - or above the line - positive."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 22
      }, this), " for each test case."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-segment-intersection",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-segment-intersection",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Segment Intersection"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 146,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can quickly dismiss the segment intersection by treating them as rectangles having the segments as diagonals which can be easily done.\r\nIf it turns out the rectangles intersect then we just check if the segment's ends are on different sides of the other segment."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 152,
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
      lineNumber: 155,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-polygon-area",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-polygon-area",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Polygon Area"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 232,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 236,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Shoelace_formula",
        rel: "nofollow",
        target: "_blank",
        children: "Shoelace formula"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 238,
        columnNumber: 16
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 238,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 240,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-points-location-relative-to-polygon",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-points-location-relative-to-polygon",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Point's Location Relative to Polygon"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 308,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 312,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can cast a ray from the point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 314,
        columnNumber: 34
      }, this), " going in any fixed direction (people usually go to the right).\r\nIf the point is located on the outside of the polygon the ray will intersect its edges an even number of times.\r\nIf the point is on the inside of the polygon then it will intersect the edge an odd number of times."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 314,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This approach is called ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Point_in_polygon",
        rel: "nofollow",
        target: "_blank",
        children: "ray casting"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 318,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 320,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-lattice-points-in-polygon",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lattice-points-in-polygon",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lattice points in polygon"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 392,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 396,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's first focus on the lattice points on the polygon's boundary. We'll process each edge individually. The number of intersections of a line with lattice points is the greatest\r\ncommon divisor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_1.x - P_2.x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 399,
        columnNumber: 19
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_1.y - P_2.y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 399,
        columnNumber: 39
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 398,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now that we know the number of lattice points on the boundary we can find the number of lattice points inside the polygon using ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Pick%27s_theorem",
        rel: "nofollow",
        target: "_blank",
        children: "Pick's theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 129
      }, this), ".\r\nLet's denote ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 14
      }, this), " polygon's area, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 34
      }, this), " the number of integer points inside and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 78
      }, this), " the number of integer points on its boundary. Then, according to Pick's theorem, we have the following\r\nequation: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = i + b/2 - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 11
      }, this), ". Changing the order a little bit to get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i = A - b/2 + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 69
      }, this), ". We've found ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 100
      }, this), " and, as you've probably already solved ", _jsxDEV(_components.a, {
        href: "https://cses.fi/problemset/task/2191",
        rel: "nofollow",
        target: "_blank",
        children: "Polygon Area"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 143
      }, this), " from above,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 413,
        columnNumber: 1
      }, this), " can be computed using cross-product."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 410,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 415,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 417,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log P)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 417,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 417,
        columnNumber: 53
      }, this), " is the maximum difference between coordinates of points."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 417,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
      id: "user-content-angles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-angles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Angles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 510,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-5",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-5",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 514,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Working with angles only makes sense in the context of lines and segments. Therefore, let's consider the segments\r\nconnecting the initial position and each dot: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(pos_x, pos_y)-(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 517,
        columnNumber: 47
      }, this), ". One such segment is inside the field of\r\nview if and only if its slope is bigger than the lower bound and smaller than the upper bound. Since we're\r\nworking with angles, we'll convert the slopes into radians."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 516,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\alpha"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 10
      }, this), " as the angle formed by one line with the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ox}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 60
      }, this), " axis. Then we have:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 521,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{slope}=\\frac{\\Delta y}{\\Delta x}=\\tg{\\alpha} \\\\\r\n\\alpha=\\arctg{\\frac{\\Delta y}{\\Delta x}}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 522,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The movement of the field of view can be seen as a ", _jsxDEV(_components.a, {
        href: "/gold/sliding-window",
        children: "sliding window"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 527,
        columnNumber: 52
      }, this), " applied\r\non the sorted angles of the points. The angle of the field of vies could be large enough to see\r\npoints from the beginning of the sorted array, thus the array of angles should be duplicated - cyclic array."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 527,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-5",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-5",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 531,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 533,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 533,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 533,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-misc-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-misc-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Misc Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 625,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Some European Olympiads, like the CEOI, Balkan OI, and the Croatian OI, tend to\r\nhave a lot of geometry problems. These problems tend to be quite difficult as\r\nwell, so look for problems there when you run out of problems to practice!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 627,
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
