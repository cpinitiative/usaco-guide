"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-distance-of-a-point-from-a-line-segment",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-distance-of-a-point-from-a-line-segment",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Distance of a Point from a Line Segment"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Before solving for two segments, we must understand how to find the shortest distance from a single point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 107
      }, this), " to a line segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 129
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we project point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 21
      }, this), " onto the infinite line containing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "AB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 59
      }, this), ", the position of the projection can be described by a scalar ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 125
      }, this), ". If we express the line as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A + t \\cdot \\vec{AB}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 156
      }, this), ", we can calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 197
      }, this), " using the dot product:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "t = \\frac{\\vec{AP} \\cdot \\vec{AB}}{|\\vec{AB}|^2}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This scalar ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 13
      }, this), " tells us where the closest point lies relative to the segment:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "t \\le 0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 7
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 5
        }, this), ": The projection falls before ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 48
        }, this), ". The closest point on the segment is the endpoint ", _jsxDEV(_components.strong, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "A"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 104
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 102
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "t \\ge 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 18,
            columnNumber: 7
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 5
        }, this), ": The projection falls after ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 47
        }, this), ". The closest point on the segment is the endpoint ", _jsxDEV(_components.strong, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "B"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 18,
            columnNumber: 103
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 101
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "0 < t < 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 7
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 5
        }, this), ": The projection falls strictly between ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 60
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 68
        }, this), ". The closest point is the projection itself: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A + t \\cdot \\vec{AB}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 117
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The distance is then simply the Euclidean distance between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 60
      }, this), " and this closest point."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-distance-between-line-segments",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-distance-between-line-segments",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Distance between Line Segments"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now consider two segments, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 38
      }, this), ". We can visualize the relationship between them using an iterative process:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Pick an arbitrary point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 29
        }, this), " on segment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 46
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Find the point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 20
        }, this), " on segment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 37
        }, this), " that is closest to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 62
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["From ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 10
        }, this), ", find the point ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 32
        }, this), " on segment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 49
        }, this), " that is closest to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 74
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_2=P_3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 8
      }, this), ", then the line segments are intersecting. So the shortest distance is 0. (Trivial case)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Otherwise keep repeating the process till you get to a point where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 68
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 75
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n+2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 86
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n+3}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 97
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_n = P_{n+2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 113
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n+1} = P_{n+3}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 133
      }, this), ". This means that we have reached the last loop. Here we can observe that ", _jsxDEV(_components.strong, {
        children: "always"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 226
      }, this), " at least one of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 253
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P_{n+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 262
      }, this), " is an endpoint of a line segment."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Edge Case: This may NOT be true when the line segments are parallel. In that case, the shortest distance can be obtained from a set of infinite points which contains at least one of the endpoints."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Therefore, to solve the problem for any case, we simply calculate the minimum of four values:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}(A, S_2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 5
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}(B, S_2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 5
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}(C, S_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 5
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}(D, S_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 5
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-proof",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-proof",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Proof"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Why does this observation hold true?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can formalize this using calculus. The distance function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(t, u)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 61
      }, this), " between a point on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 90
      }, this), " (parameterized by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 114
      }, this), ") and a point on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 134
      }, this), " (parameterized by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 158
      }, this), ") is a ", _jsxDEV(_components.strong, {
        children: "convex function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 168
      }, this), " over the domain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 1] \\times [0, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 204
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For a convex function defined on a square domain, the minimum value must occur either:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "At a stationary point"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 5
        }, this), " where the gradient is zero. This corresponds to the case where the segments are parallel (infinite stationary points) or intersecting (distance is 0)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "On the boundary"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 5
        }, this), " of the domain."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If the lines are skew (non-parallel and non-intersecting), there is no stationary point with gradient zero inside the square. Thus, the minimum ", _jsxDEV(_components.em, {
        children: "must"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 145
      }, this), " occur on the boundary of the domain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 1] \\times [0, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 188
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The boundary of this domain corresponds to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 44
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 51
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 58
      }, this), ", or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 68
      }, this), ". Geometrically, these parameter values correspond exactly to the ", _jsxDEV(_components.strong, {
        children: "endpoints"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 139
      }, this), " of the segments."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
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
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 22
      }, this), " per test case."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
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
