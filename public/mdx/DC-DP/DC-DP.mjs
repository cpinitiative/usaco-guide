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
      id: "user-content-overview",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-overview",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Overview"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Consider a dynamic programming problem with the following formula"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(i,j) = \\min_{0\\leq k \\leq j} ( dp(i-1, k-1) + C(k,j)),"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C(i,j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 7
      }, this), " is a cost function and you can compute it in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 61
      }, this), " time.\r\nFurthermore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(i,j) =0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 14
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j<0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 31
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The straightforward implementation gives a runtime of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(mn^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 55
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\leq i <  m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 68
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\leq j < n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 87
      }, this), ".\r\nDivide & Conquer DP allows this to be optimized to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(mn \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 52
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i,j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 10
      }, this), ", let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}(i,j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 21
      }, this), " be the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 55
      }, this), " that minimizes the right hand side of the equation.\r\nDivide & Conquer DP ", _jsxDEV(_components.strong, {
        children: "only applies if"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 21
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}(i,j) \\leq \\text{opt}(i,j+1)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Often, proving this with the given cost function is challenging,\r\nbut if the cost function satisfies the ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/86306",
        rel: "nofollow",
        target: "_blank",
        children: "quadrangle inequality"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 40
      }, this), ", the condition holds."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can then apply the idea behind Divide & Conquer.\r\nFix a given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 13
      }, this), ". First, compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}(i,n/2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 33
      }, this), ".\r\nThen compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}(i, n/4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 14
      }, this), " using the fact that it is less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}(i, n/2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 83
      }, this), ".\r\nSimilarly, we can compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}(i, 3n/4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 27
      }, this), " and recursively split the ranges in half, keeping track on the lower and upper bounds. Refer to the code below for more details."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To begin analyzing the complexity of the Divide & Conquer, first note that there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(\\log{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 86
      }, this), " levels in the recursion. We claim that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 138
      }, this), " steps are being done at each level. Let the total length of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{opt}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 209
      }, this), " intervals (denoted by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "rl"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 244
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "rr"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 253
      }, this), " in the code) in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 278
      }, this), "th level be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 293
      }, this), ", and observe that any time an interval from level ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 349
      }, this), " of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 363
      }, this), " is split, the resulting interval(s) have total length at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 429
      }, this), ". Furthermore, at level ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 460
      }, this), ", at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 473
      }, this), " splits are performed, so we have that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_{k + 1} \\leq S_k + 2^k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 517
      }, this), ". Applying the bound inductively with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_0 = n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 581
      }, this), " gives that for each level ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 617
      }, this), ","]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_k < n + 2^k \\in O(n)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, the complexity of each Divide & Conquer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(n\\log{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 50
      }, this), ", and the complexity of the entire DP computation is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(mn\\log{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 116
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---circular-barn",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---circular-barn",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Circular Barn"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You should already be familiar with the ", _jsxDEV(_components.a, {
        href: "/plat/convex-hull-trick#problems",
        children: "CHT solution"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We iterate through the possibilities of the location of the first door.\r\nFor each of the first doors, we can now view the barn linearly.\r\nAll further calculations will be done assuming the barn is a linear sequence of doors starting at the first opened door."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(i,k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 5
      }, this), " denote the location of the last door if we place ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 64
      }, this), " doors optimally among the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 100
      }, this), " rooms.\r\nThe idea is that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(i,k) \\leq dp(i+1, k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 18
      }, this), ".\r\nAssume this was not true for the sake of contradiction.\r\nThen ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(i,k) > dp(i+1,k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 6
      }, this), ", so we also have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(i+1,k) \\leq i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 45
      }, this), ".\r\nBut then we could have used the best possible setup for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i+1,k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 57
      }, this), " in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i,k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 74
      }, this), " setup as well, since all open doors are among the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 138
      }, this), " rooms anyways."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the monotonicity condition is held, we can now perform Divide & Conquer DP.\r\nFix the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 18
      }, this), " and compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp(n/2, k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 34
      }, this), ".\r\nThen compute it for the left and right halves of the array."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
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
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2 k \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 22
      }, this), ", since we need to check ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 74
      }, this), " rooms for the optimal first barn position."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
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
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["JOI Bubblesort English Statement: You are given an array of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 68
      }, this), "\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 \\le N \\le 100,000)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 166,
        columnNumber: 1
      }, this), ". You must choose two numbers in this array and swap\r\nthem. After swapping these two numbers, you sort the array using a bubble sort\r\nalgorithm. What is the minimum number of bubble sort swaps necessary, assuming\r\nyou choose the two initial numbers to swap optimally? The two initial numbers\r\nthat you swap do not count towards the minimum number of bubble sort swaps."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 165,
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
