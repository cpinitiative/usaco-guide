"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-lagrangian-relaxation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lagrangian-relaxation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lagrangian Relaxation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Lagrangian Relaxation involves transforming a constraint on a variable into a cost ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 84
      }, this), " and binary searching for the optimal ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 131
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The problem gives us a length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 31
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\le N \\le 3 \\cdot 10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 36
      }, this), ") array of integers in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[-10^9,10^9]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 95
      }, this), ". We are given some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 129
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\le K \\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 134
      }, this), ") and are asked to choose at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 183
      }, this), " disjoint subarrays such that the sum of elements included in a subarray is maximized."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-intuition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-intuition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Intuition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The main bottleneck of any dynamic programming solution to this problem is having to store the number of subarrays we have created so far."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's try to find a way around this. Instead of storing the number of subarrays we have created so far, we assign a penalty of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 128
      }, this), " for creating a new subarray (i.e. every time we create a subarray we penalize our sum by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 227
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This leads us to the sub-problem of finding the maximal sum and number of subarrays used if creating a new subarray costs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 123
      }, this), ". We can solve this in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 155
      }, this), " time with dynamic programming."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 5
      }, this), " be the maximal achievable sum with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 44
      }, this), " penalty and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 66
      }, this), " be the number of subarrays used to achieve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 113
      }, this), ". Then the ", _jsxDEV(_components.strong, {
        children: ["maximal possible sum achievable if we use exactly ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 179
        }, this), " subarrays is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v+\\lambda c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 196
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 127
      }, this), ". Note that we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 230
      }, this), " to undo the penalty."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our goal is to find some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 26
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c=K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 46
      }, this), " (assuming ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 62
      }, this), " is at most the number of positive elements). As we increase ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 126
      }, this), ", it makes sense for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 156
      }, this), " to decrease since we are penalizing subarrays more. Thus, we can try to binary search for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 250
      }, this), " to make ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c=K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 268
      }, this), " and set our answer to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v+\\lambda c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 299
      }, this), " at the optimal ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 328
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This idea almost works but there are still some very important caveats and conditions that we have not considered."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-geometry",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-geometry",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Geometry"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 5
      }, this), " be the maximal sum if we use at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 49
      }, this), " subarrays. We want to find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 80
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first condition is that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 29
      }, this), " ", _jsxDEV(_components.strong, {
        children: "must be concave or convex"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 36
      }, this), ". Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 73
      }, this), " is increasing in this problem, the means that we need ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 134
      }, this), " to be concave: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x) - f(x - 1) \\ge f(x + 1) - f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 156
      }, this), ". In other words, this means that the more subarrays we add, the less we increase the sum by. We can intuitively see that this is true."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Consider the following graphs of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 34
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)-\\lambda x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 45
      }, this), ". In this example, we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda=5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 88
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Here is where the fact that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 29
      }, this), " is concave comes in. Because the slope is non-increasing, we know that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x) - \\lambda x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 107
      }, this), " will ", _jsxDEV(_components.strong, {
        children: "first increase, then stay the same, and finally decrease"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 131
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 5
      }, this), " be the optimal maximal achievable sum with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 61
      }, this), " penalty and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 83
      }, this), " be the number of subarrays used to achieve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 139
      }, this), " (note that if there are multiple such possibilities, we set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 212
      }, this), " to be the ", _jsxDEV(_components.strong, {
        children: "maximal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 235
      }, this), " number of subarrays to achieve ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 278
      }, this), "). These values can be calculated in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 327
      }, this), " time using the dynamic programming approach described above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we assign the penalty of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 31
      }, this), ", we are trying to find the maximal sum if creating a subarray reduces our sum by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 122
      }, this), ". So ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 136
      }, this), " will be the ", _jsxDEV(_components.strong, {
        children: "maximum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 161
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x) - \\lambda x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 176
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 199
      }, this), " will equal to the rightmost ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 240
      }, this), " that ", _jsxDEV(_components.strong, {
        children: "maximizes"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 249
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x) - \\lambda x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 263
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given the shape of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x) - \\lambda x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 20
      }, this), ", we know that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x) - \\lambda x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 53
      }, this), " will be maximized at all points where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 110
      }, this), " is equal to the slope of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 145
      }, this), " (these points are red in the graph above). If there are no such points it will be maximized at the rightmost point where the slope is less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 296
      }, this), ". So this means that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 326
      }, this), " will be the rightmost ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 361
      }, this), " at which the slope of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 387
      }, this), " is still greater or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 423
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now we know exactly what ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 26
      }, this), " represents: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 48
      }, this), " is the slope and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 75
      }, this), " is the rightmost ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 105
      }, this), " at which the slope of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 131
      }, this), " is still greater or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 167
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We binary search for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 22
      }, this), " and find the highest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 53
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda) \\ge K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 73
      }, this), ". Let the optimal value be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda_{\\texttt{opt}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 118
      }, this), ". Then our answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v(\\lambda_{\\texttt{opt}}) + \\lambda_{\\texttt{opt}} K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 163
      }, this), ". Note that this works even if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda_{\\texttt{opt}}) \\neq K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 248
      }, this), " since  ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda_{\\texttt{opt}})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 290
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 322
      }, this), " will be on the same line with slope ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lambda_{\\texttt{opt}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 362
      }, this), " in that case."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Because calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(\\lambda)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 38
      }, this), " with the dynamic programming solution described above will take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 115
      }, this), " time, this solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log{\\sum A[i]})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 160
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 106,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\n#define ll long long\r\n\r\nint main() {\r\n\tint n, k;\r\n\tcin >> n >> k;\r\n\r\n\tint a[n];\r\n\tfor (int &i : a) { cin >> i; }\r\n\r\n\t/**\r\n\t * @return the maximum sum along with the number of subarrays used\r\n\t * if creating a subarray penalizes the sum by \"lmb\" and\r\n\t * there is no limit to the number of subarrays you can create\r\n\t */\r\n\tauto solve_lambda = [&](ll lmb) {\r\n\t\tpair<ll, ll> dp[n][2];\r\n\r\n\t\tdp[0][0] = {0, 0};\r\n\t\tdp[0][1] = {a[0] - lmb, 1};\r\n\r\n\t\tfor (int i = 1; i < n; i++) {\r\n\t\t\tdp[i][0] = max(dp[i - 1][0], dp[i - 1][1]);\r\n\r\n\t\t\tdp[i][1] =\r\n\t\t\t    max(make_pair(dp[i - 1][0].first + a[i] - lmb, dp[i - 1][0].second + 1),\r\n\t\t\t        make_pair(dp[i - 1][1].first + a[i], dp[i - 1][1].second));\r\n\t\t}\r\n\r\n\t\treturn max(dp[n - 1][0], dp[n - 1][1]);\r\n\t};\r\n\r\n\tll lo = 0;\r\n\tll hi = 1e18;\r\n\twhile (lo < hi) {\r\n\t\tll mid = (lo + hi + 1) / 2;\r\n\t\tsolve_lambda(mid).second >= k ? lo = mid : hi = mid - 1;\r\n\t}\r\n\r\n\tcout << solve_lambda(lo).first + lo * k << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 154,
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
