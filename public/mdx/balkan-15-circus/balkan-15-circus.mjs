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
    pre: "pre",
    strong: "strong",
    ul: "ul",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For the sake of convenience, we assume that position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 54
      }, this), " has a rope.\r\nAlso, we can sort the list of rope locations and relabel them as such. This does not affect the problem, but makes thinking about it easier."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Based on the problem's conditions, each consecutive jump\r\nbetween ropes cannot exceed the distance of the previous jump.\r\nIf we frame the problem as traversing outward from the rope at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 64
      }, this), ", this condition becomes reversed. To traverse from the rope at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 131
      }, this), " to another rope, the jumps we take must have non-decreasing lengths."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given the condition for a valid path, there is no case where we would want to reach position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 94
      }, this), " with more initial rope than required. Thus, we can model this problem as a single-source shortest paths problem, expanding outward from the rope at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 246
      }, this), " to calculate the required rope lengths. Naively computing distances takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 \\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 324
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-optimizing-calculating-distances",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimizing-calculating-distances",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimizing Calculating Distances"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 5
      }, this), " denote the initial rope length needed to reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 59
      }, this), " from rope ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 73
      }, this), ".\r\nIf we are at some node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 24
      }, this), ", and want to update our distances, our Dijkstra's code to push to new nodes might look something like this:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// i = the current node\r\n// s[i] = the rope length to go from i to m\r\nfor (int j = 0; j < n; j++) {\r\n\tif (abs(p[j] - p[i]) >= s[i]) { pq.push({abs(p[j] - p[i]), j}); }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that if we sort the list of positions ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 46
      }, this), ", a prefix and suffix of positions will allow for transitions. To use this property,\r\nwe split our distance calculations into two parts:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}_l[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 3
        }, this), " is the rope length needed to reach ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 57
        }, this), ", if the last jump was from the left."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}_r[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 3
        }, this), " is the rope length needed to reach ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 57
        }, this), ", if the last jump was from the right."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The directions for both distance definitions are from ", _jsxDEV(_components.strong, {
        children: "moving away"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 55
      }, this), " from a previous rope. For example, if we move from a rope at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 141
      }, this), " to position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 157
      }, this), " in our Dijkstra code, we would update ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dist}_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 199
      }, this), " for the rope at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 231
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dist}_l[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 22
      }, this), ", with the logic for calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dist}_r[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 73
      }, this), " being similar. Observe that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 6
        }, this), " has a neighbor to the left, we can potentially update ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}_l[i-1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 64
        }, this), " simply by extending the jump used to obtain ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{dist}_l[i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 129
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "From the pseudocode above, this type of transition is essentially the same as handling the prefix of possible Dijkstra transitions."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With these observations, we can reduce the number of possible edges from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 23
      }, this), ". The pseudocode for transitions is\r\nas follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// i = the current node\r\n// dist_l[i] = distance if previous jump was from left\r\n// dist_r[i] = distance if previous jump was from right\r\n// assume currently processing dist_l[i]\r\nif (i > 0) { pq.push({dist_l[i] + (p[i] - p[i - 1])}); }\r\n\r\nint next_left;  // next node to left with jump dist >= dist_l[i]\r\npq.push({p[i] - p[next_left], next_left});\r\n\r\nint next_right;  // next node to the right with jump dist >= dist_l[i]\r\npq.push({p[next_right] - p[i], next_right});\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This allows us to calculate the minimum rope length to reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 62
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 69
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-calculating-minlengthd",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-calculating-minlengthd",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Calculating ", _jsxDEV(_components.code, {
        children: "minLength(d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 17
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Starting at the temporary rope, we end up jumping to some other rope to\r\neventually reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 18
      }, this), ". ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dist}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 23
      }, this), " stores the minimal rope length\r\nto reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 10
      }, this), " from any other rope, so we can reuse it in calculating ", _jsxDEV(_components.code, {
        children: "minLength"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 69
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A naive way of computing our answer would look something like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int best = INF;\r\nfor (int i = 0; i < n; i++) {\r\n\tif (abs(p[i] - d) >= dist[i]) { best = min(best, p[i] - d); }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without loss of generality, assume that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[i] \\leq d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 41
      }, this), ". Then, we can rewrite the condition for\r\nupdating our best answer:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "d - p[i] \\geq \\text{dist}[i] \\implies d \\geq \\text{dist}[i] + p[i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the jump distance is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d - p[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 28
      }, this), ", we aim to find the maximal\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this), " amongst all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 20
      }, this), " satisfying the condition above. To do this,\r\nwe can sort all ropes by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{dist}[i] + p[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 26
      }, this), ", and compute the\r\nprefix maximum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 25
      }, this), " for each rope. Then, to query the best value, we use binary search to find the last ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 116
      }, this), " satisfying the condition."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By using similar logic for the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p[i] \\geq d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 43
      }, this), ", we can\r\nanswer each query in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 22
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
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
      lineNumber: 87,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 89,
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
