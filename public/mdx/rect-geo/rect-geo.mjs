"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Most problems in this category include only two or three squares or rectangles,\r\nin which case you can simply draw out cases on paper. This should logically lead\r\nto a solution."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---fence-painting",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---fence-painting",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Fence Painting"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-slow-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since all the intervals lie between the range, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 100]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 48
      }, this), ", we can mark each\r\ninterval of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 20
      }, this), " contained within each interval as painted using a loop.\r\nThen the answer will be the number of marked intervals."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\text{max coordinate})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["However, this solution would not work for higher constraints (ex. if the\r\ncoordinates were up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 24
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 119,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-fast-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-fast-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Fast Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Calculate the answer by adding the original lengths and subtracting the\r\nintersection length."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(b-a)+(d-c)-\\text{intersection}([a,b],[c,d])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_paint_bronze_dec15.html",
        rel: "nofollow",
        target: "_blank",
        children: "official analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 1
      }, this), "\r\nsplits computing the intersection length into several cases. However, we can do it\r\nin a simpler way. An interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x,x+1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 31
      }, this), " is contained within both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[a,b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 66
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[c,d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 1
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a\\le x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 12
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c\\le x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 22
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x<b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 32
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x<d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 43
      }, this), ", or in other words if,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(a,c)\\le x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x<\\min(b,d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 22
      }, this), ". So the length of the intersection is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min(b,d)-\\max(a,c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 1
      }, this), " if this quantity is positive and zero otherwise!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 131,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---blocked-billboard",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---blocked-billboard",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Blocked Billboard"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Think of this as the 2D analog of the previous example."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 215,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-slow-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((\\text{max coordinate})^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 221,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since all coordinates are in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[-1000,1000]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 40
      }, this), ", we can simply go through\r\neach of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2000^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 224,
        columnNumber: 13
      }, this), " possible visible squares and check which ones are visible\r\nusing nested for loops."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This wouldn't suffice if the coordinates were changed to be up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 353,
        columnNumber: 67
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 353,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-fast-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-fast-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Fast Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 355,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 357,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 357,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 357,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_billboard_bronze_dec17.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 359,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 359,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-common-formulas",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-common-formulas",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Common Formulas"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 594,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Certain tasks show up often in rectangle geometry problems. For example, many problems\r\ninvolve finding the overlapping area of two or more rectangles based on their coordinate points,\r\nor determining whether two rectangles intersect. Here, we'll discuss these formulas."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 602,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that these formulas only apply to rectangles which have sides parallel to the coordinate axes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 606,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-area",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-area",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding area"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 616,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The formula for finding the area of an individual rectangle is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w \\cdot l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 618,
        columnNumber: 64
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 618,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{length}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 620,
        columnNumber: 1
      }, this), " is the length of the vertical sides, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{width}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 620,
        columnNumber: 60
      }, this), " is the length of the horizontal sides."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 620,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{width} = \\texttt{tr}_x - \\texttt{bl}_x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 622,
          columnNumber: 4
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 622,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{length} = \\texttt{tr}_y - \\texttt{bl}_y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 623,
          columnNumber: 4
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 623,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{area} = \\texttt{width} \\cdot \\texttt{length}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 624,
          columnNumber: 4
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 624,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 622,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 626,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-checking-if-two-rectangles-intersect",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-checking-if-two-rectangles-intersect",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Checking if two rectangles intersect"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 663,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given two rectangles ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 665,
        columnNumber: 22
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 665,
        columnNumber: 30
      }, this), ", there are only two cases where they do not intersect:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 665,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{tr}_{a_y}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 667,
          columnNumber: 4
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\leq"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 667,
          columnNumber: 24
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{bl}_{b_y}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 667,
          columnNumber: 31
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{bl}_{a_y}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 667,
          columnNumber: 54
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\geq"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 667,
          columnNumber: 74
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{tr}_{b_y}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 667,
          columnNumber: 81
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 667,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{bl}_{a_x}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 4
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\geq"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 24
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{tr}_{b_x}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 31
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{tr}_{a_x}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 54
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\leq"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 74
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{bl}_{b_x}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 81
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 668,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 667,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In all other cases, the rectangles intersect."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 670,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 671,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-area-of-intersection",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-area-of-intersection",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding area of intersection"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 719,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We'll assume that the shape formed by the intersection of two rectangles is itself a rectangle."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 721,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, we'll find this rectangle's length and width.\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{width} = \\min(\\texttt{tr}_{a_x}, \\texttt{tr}_{b_x}) - \\max(\\texttt{bl}_{a_x}, \\texttt{bl}_{b_x})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 724,
        columnNumber: 1
      }, this), ".\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{length} = \\min(\\texttt{tr}_{a_y}, \\texttt{tr}_{b_y}) - \\max(\\texttt{bl}_{a_y}, \\texttt{bl}_{b_y})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 725,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 723,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If either of these values are negative, the rectangles do not intersect.\r\nIf they are zero, the rectangles intersect at a single point.\r\nMultiply the length and width to find the overlapping area."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 727,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 732,
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
      lineNumber: 775,
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
