"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Imagine you have a vertical line that \"sweeps\" the plane from left to right.\r\nThat's the main idea behind the sweep line."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You might be thinking \"wait - isn't keeping track of the sweep line at all\r\npossible positions super inefficient?\" And you'd be correct. However, we don't\r\nactually need to keep track of the sweep line at all possible positions - only\r\nat the \"critical\" positions (e.g. points and intersections)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-restaurant-customers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-restaurant-customers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Restaurant Customers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The solution uses a sweep line approach. Each interval is converted into two\r\nevents: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a_i, +1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 9
      }, this), " for an arrival and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(b_i, -1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 40
      }, this), " for a departure. This\r\nproduces ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 10
      }, this), " events in total."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "All events are sorted by time; if two events coincide, departures are processed\r\nbefore arrivals. Traversing the sorted list from left to right, we maintain a\r\ncounter of active customers. The counter is incremented on arrival events and\r\ndecremented on departure events. The maximum value reached during this traversal\r\nis the answer."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, intervals ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(5,8), (2,4), (3,9)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 24
      }, this), " yield the event sequence\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2,+1), (3,+1), (4,-1), (5,+1), (8,-1), (9,-1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), " with counters ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1,2,1,2,1,0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 64
      }, this), ".\r\nThe maximum is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 16
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Creating events takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 23
      }, this), ", sorting them takes\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), ", and the sweep is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 43
      }, this), ". Thus, the overall\r\ncomplexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
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
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-closest-pair",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-closest-pair",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Closest Pair"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 90,
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
      }, this), "Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will use a divide and conquer algorithm. First, sort the points by\r\nx-coordinate. Now, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 24
      }, this), " be the subarray of points in the current step. Then,\r\npartition ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 11
      }, this), " into two groups ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 31
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 39
      }, this), " representing the left and right halves\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 4
      }, this), ". Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 28
      }, this), " be the answer of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 64
      }, this), " respectively,\r\nand define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 12
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min(\\delta_l, \\delta_r)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 24
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 6
      }, this), " is the upperbound of the answer. If a more optimal answer exists,\r\nit must bridge the two halves of the array (i.e. one of its endpoints is in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 77
      }, this), "\r\nand the other is in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 21
      }, this), "). Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "mx"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 31
      }, this), " be the x-coordinate of any median of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 73
      }, this), ".\r\nDefine two sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 17
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 26
      }, this), " such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L' = \\{p_i | x_i \\leq mx, mx - x_i \\leq \\delta\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 1
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R' = \\{p_i | x_i \\geq mx, x_i - mx \\leq \\delta\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A brute force matching algorithm that computes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}(p, q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 48
      }, this), " for all\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p \\in L'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 1
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "q \\in R'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 13
      }, this), " would have a worst-case runtime of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\frac n 2)^2 = \\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 1
      }, this), " (recall that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 49
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 58
      }, this), " may have up to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac N 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 1
      }, this), " points). However, because we are searching for distances of at most\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), ", it suffices for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p \\in L'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 32
      }, this), " to check all points\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{q | q \\in R', p.y - \\delta \\leq q.y \\leq p.y + \\delta\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It can be shown that for each point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 37
      }, this), ", there is a constant number of points\r\nthat satisfy this property. Because each point in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 51
      }, this), " is at least\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta_r \\geq \\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this), " apart, arranging the points in the worst case would\r\nresult in 6 points in the corners and sides of the bounding rectangle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/5_Plat/assets/sweeplineboundingbox.png",
        alt: "Worst-case bounding box arrangement"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["To achieve the desired ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 24
      }, this), " complexity per layer, we need to be able\r\nto efficiently get the points sorted by both x-coordinate (for dividing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 73
      }, this), ") and\r\ny-coordinate (for matching between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 36
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 45
      }, this), "). This can be achieved by\r\ntaking advantage of the merge-sort-like algorithm: sort by x-coordinate in the\r\nbeginning, then for each step, merge the y-coordinates recursively."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Because each step now runs in linear time and there is a total of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lceil \\log n \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 1
      }, this), " steps, by the\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)",
        rel: "nofollow",
        target: "_blank",
        children: "master theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 1
      }, this), "\r\nour solution now runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 26
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 131,
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
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 138,
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
      }, this), "Solution 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 226,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Extending Solution 1, we can use a set instead of divide and conquer. Once\r\nagain, we define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 229,
        columnNumber: 18
      }, this), " as the shortest distance between two points so far.\r\nAfter sorting the points by x-coordinate, we iterate through them while\r\nmaintaining a running window containing the y-coordinates of all points in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x-\\delta,x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/5_Plat/assets/setsolutionboundingbox.png",
        alt: "Set Solution Sweep Line Bounding Box"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 234,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 234,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["As we visit point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 238,
        columnNumber: 19
      }, this), ", we utilize the set to consider all points with\r\ny-coordiate in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[P_y-\\delta, P_y+\\delta]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 16
      }, this), ". The set contains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[P_x-\\delta, P_x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 61
      }, this), "\r\nbecause of how it is maintained as a running window. Now we have the same\r\nbounding box as Solution 1, with at most 6 points inside."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 238,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each point, we recalculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\delta = \\min(\\delta, \\delta_p)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 243,
        columnNumber: 32
      }, this), ", and update our\r\nset accordingly. Each point is inserted and removed from the set at most once,\r\nso the algorithm yields ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 245,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 243,
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
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-line-segments",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-line-segments",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Line Segments"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 308,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---cow-steeplechase-ii",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---cow-steeplechase-ii",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Cow Steeplechase II"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 312,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's simplify the problem a little bit and focus on finding any overlapping\r\nsegments."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 314,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To find a pair of overlapping segments, use a sweep line approach by sweeping a\r\nvertical line across the scene from left to right, pausing at every segment\r\nendpoint."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We simulate this by sorting all the segment endpoints by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 58
      }, this), " and walking through\r\nthe sorted array (called 'events' in the code below). As we scan, we keep track\r\nof active segments using a set (called 'active_segments' in the code below).\r\nWhen we hit the beginning point of a segment, add it to the active set, and\r\nremove it from the active set when we hit the ending point of a segment."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 321,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Inserting or removing the active segments from the set takes\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 328,
        columnNumber: 1
      }, this), " per operation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The active set of segments is ordered by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 330,
        columnNumber: 42
      }, this), " coordinate. If two segments\r\noverlap, they are adjacent in the set, so every time we insert or remove a\r\nsegment, we check if the adjacent segments overlap."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 330,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here is an animation of how it works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 334,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 340,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 342,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 342,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 342,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 489,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-manhattan-mst",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-manhattan-mst",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Manhattan MST"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 493,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---grid-mst",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---grid-mst",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Grid MST"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 497,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The key observation is that although there are many points, they're spread\r\nacross a pretty small surface. Because of this, instead of using Kruskal's or\r\nPrim's algorithm, we can use Dijkstra's. Starting from an arbitrary point, we\r\nrun Dijkstra's algorithm with a priority queue that will sort the points by\r\ntheir distance to the MST."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 499,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 505,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(S^3\\log S)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 54
      }, this), " is the grid size"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 507,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 582,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-radial-sweep",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-radial-sweep",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Radial Sweep"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 589,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of a vertical line sweeping the plane from left to right, ", _jsxDEV(_components.strong, {
        children: "radial\r\nsweep"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 591,
        columnNumber: 67
      }, this), " involves a ray that rotates around a central point (like a radar\r\nscreen):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 591,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "https://i.gifer.com/7jnn.gif",
        alt: "Radar screen gif"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 595,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this case, we sort points/events by their\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Bearing_(angle)",
        rel: "nofollow",
        target: "_blank",
        children: "bearing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 598,
        columnNumber: 1
      }, this), " instead of by their\r\nx- and y-coordinates. Besides that, the mechanics are the same as those of\r\nnormal line sweep."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 597,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---seeing-the-boundary",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---seeing-the-boundary",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Seeing the Boundary"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 604,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this problem, there are three types of events: when our ray hits a fence\r\npost, enters a rock, or exits a rock."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 606,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The second and third types of events can be found for each rock by sorting the\r\nrays to its vertices by bearing and then taking the two endpoints of the sorted\r\nlist. These two rays are the two tangents to the rock."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 609,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can then perform a radial sweep to find the fence posts that Farmer Don can\r\nsee - these fence posts are simply the ones where the number of type-2 and\r\ntype-3 events we've processed so far are equal."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 613,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that some optimizations (e.g. not constructing the list of fence posts\r\nexplicitly) may be required to get 100 points."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 617,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 620,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 622,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N + Rp_i \\log R)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 622,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 622,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 733,
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
