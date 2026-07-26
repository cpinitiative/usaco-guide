"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_balancing_silver_feb16.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Java)"
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
      id: "user-content-video-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Varun Ragunath"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 204,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's have two lists of the cows: one sorted by x-coordinate, the other by y-coordinate."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Lets say that we had one cow at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{x}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 33
      }, this), " = 1, and another cow at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{x}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 71
      }, this), " = 999999.\r\nNotice that whatever vertical fence that we place between those two cows, they will always be in different regions. This same logic applies for horizontal fences.\r\nThus, we we only need to consider fence positions at x + 1 or y + 1, because they will always split the cows into different regions, due to being odd positions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So, we can brute force each possible vertical fence between adjacent cows in our list sorted by x-coordinates where there is at max ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 133
      }, this), " possibilities."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, for each vertical fence, we want to find the position of a horizontal fence that minimizes the answer.\r\nTo do this, we can maintain two lists representing cows to the left and right of the vertical fence. We can then loop through our cow list sorted by y-coordinates, and if any cow is to the left of the vertical fence, we add it to the left list, and if they are to the right, we add them to the right list."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Again, we can brute force through each possible horizontal fence between adjacent cows in our list sorted by y-coordinates, where there is at max ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 147
      }, this), " possibilites, while keeping track of how many cows are to the left and right. For each partition, we can find how many cows are in each quadrant by utilizing the sizes of the left and right lists, and the count of cows to the left and right. The answer at this case is the max out of all four quadrants."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The final answer is the minimum out of all such answers."
    }, undefined, false, {
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
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 221,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 432,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 434,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 434,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 434,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The solution to the\r\n", _jsxDEV(_components.a, {
        href: "/problems/usaco-617-load-balancing/solution",
        children: "Bronze version"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 437,
        columnNumber: 1
      }, this), " of this problem\r\nruns in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 438,
        columnNumber: 9
      }, this), " time, but is not fast enough to pass the Silver\r\nversion. One way to speed up the Bronze solution is to check only a constant\r\nnumber of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 440,
        columnNumber: 11
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 440,
        columnNumber: 19
      }, this), "-coordinates that are close to the median ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 440,
        columnNumber: 64
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 440,
        columnNumber: 71
      }, this), ",\r\nrespectively. This would improve the time complexity to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 441,
        columnNumber: 57
      }, this), ".\r\nHowever, such a solution cannot be correct. For example, consider the case where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=999"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i=y_i=2i-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 13
      }, this), ". Then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M=333"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 34
      }, this), ", and the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 51
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 59
      }, this), " coordinates we\r\nneed to select to obtain this ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 444,
        columnNumber: 31
      }, this), " are rather far away from their respective\r\nmedians."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 436,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Nevertheless, we can still speed up the Bronze solution by a constant factor by\r\nchecking fewer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 16
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 24
      }, this), " coordinates. Note that if we increase the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 449,
        columnNumber: 1
      }, this), "-coordinate of the north-south fence by two and there are still at most\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{3}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 450,
        columnNumber: 1
      }, this), " cows to the left of the fence, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 450,
        columnNumber: 51
      }, this), " stays the same or\r\ndecreases. Thus, we can reduce the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 451,
        columnNumber: 46
      }, this), "-coordinates we need to check to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{3}+\\mathcal O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 1
      }, this), ". Similarly, the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 55
      }, this), "-coordinates we need to\r\ncheck is also ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{3}+\\mathcal O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 453,
        columnNumber: 15
      }, this), ". This reduces the number of operations\r\nin the Bronze solution by a factor of 9, which is enough to pass the Silver\r\nversion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 447,
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
