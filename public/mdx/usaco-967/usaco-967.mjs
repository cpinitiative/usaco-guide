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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://usaco.org/current/data/sol_meetings_silver_dec19.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This problem is extremely hard for Silver, so don't feel bad if you get stuck on it!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
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
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-initial-analysis",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-initial-analysis",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Initial Analysis"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First of all, what really happens during a meeting?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The cows do \"bounce\" off from each other, but that's\r\nreally hard to think about ", _jsxDEV(_components.em, {
        children: "and"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 28
      }, this), " implement."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "An alternative way to approach this meeting mechanic is that\r\nthe cows swap weights and continue on their way.\r\nIf we think about it like that, then we have all the times\r\nthe cows will reach the barn because we have their positions and speeds."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Of course, now we have to account for the weights of the cows."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's first think about it from the leftmost left-going cow.\r\nIf it's the leftmost cow overall, nothing will happen.\r\nHowever, if there's some cows to the left of it,\r\nit will always take on the weight of the leftmost right-going cow\r\nbecause that's the cow it will meet last.\r\nMore precisely, it will always take on the weight of the leftmost cow ", _jsxDEV(_components.em, {
        children: "overall"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 71
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Moving on the second leftmost left-going cow (if there is one),\r\nit will take on the weight of the second leftmost cow ", _jsxDEV(_components.em, {
        children: "overall"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 55
      }, this), ", because\r\nthe leftmost cow's weight has been taken."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This pattern generalizes to the following two rules:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If a cow is going left and is the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 37
        }, this), "-th leftmost left-going cow,\r\nit will always take on the position of the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 46
        }, this), "-th leftmost cow ", _jsxDEV(_components.em, {
          children: "overall"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 66
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If a cow is going ", _jsxDEV(_components.em, {
          children: "right"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 21
        }, this), " and is the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 40
        }, this), "-th ", _jsxDEV(_components.em, {
          children: "right"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 47
        }, this), "most right-going cow,\r\nit will always take on the position of the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 46
        }, this), "-th rightmost cow overall."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With this rule and the previous observations, we can figure out the times\r\nat which cows will reach exits and the weights they will reach it with,\r\nand thus we will know the time at which half the total cows' weight\r\nwill have reached a barn."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-final-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-final-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Final Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Given that we have the end time, we just have to efficiently count the number\r\nof meetings that will occur before that time."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To do this, we iterate through all cows in order, for each left-going cow\r\nseeing how many right-going cows are within their range. We can do this\r\nwith a queue and the observation that a left-going cow at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 68
      }, this), " and\r\na right-going cow at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 31
      }, this), " can meet if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l<r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 47
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r+2e \\geq l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 57
      }, this), ",\r\nwhere ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 7
      }, this), " is the ending time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
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
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
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
