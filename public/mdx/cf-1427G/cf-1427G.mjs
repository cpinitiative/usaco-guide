"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/83553",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial"
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
      children: "I assume that you've"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["heard of\r\n", _jsxDEV(_components.a, {
          href: "https://en.wikipedia.org/wiki/Dual_linear_program",
          rel: "nofollow",
          target: "_blank",
          children: "linear programming duality"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 3
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "read the parts of the editorial mentioning min-cost flow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This explanation is meant to clarify how the min-cost flow graph is derived."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Essentially, we want to find the best possible lower bound on the answer, which\r\nturns out to be equal to the answer by duality."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As the editorial mentions, you want to minimize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum c_{u,v}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 49
      }, this), " subject to some\r\ninequalities of the form"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{Eq}(u,v)=\\left[c_{u,v}\\ge x_u-x_v\\right]."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_{u,v}\\ge 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 6
      }, this), ", and some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 31
      }, this), " are fixed (for tiles on the boundary) while\r\nthe others are unbounded (if we ignore the constraint that each\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i\\in [1,10^9]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "). Essentially, to find we want a linear combination of these\r\nequations"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{Eq}=\\sum a_{u,v}\\text{Eq}(u,v)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "such that the following conditions are satisfied."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_{u,v}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 8
        }, this), " corresponds to the flow on an edge of the min-cost flow graph,\r\nso these must be non-negative."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["On the LHS of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{Eq}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 17
        }, this), ", no ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c_{u,v}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 33
        }, this), " has coefficient greater than one. This\r\ncorresponds to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_{u,v}+a_{v,u}\\le 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 18
        }, this), ", meaning that the flow on each edge of\r\nthe min-cost flow graph is at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 38
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The coefficients of each non-constant ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x_u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 41
        }, this), " on the RHS of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\text{Eq}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 61
        }, this), " are\r\nzero. This means that in the min-cost flow graph, each vertex (aside from the\r\nsource and the sink) has the same in-flow as out-flow."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The constant on the right side is maximized (we want the best possible lower\r\nbound)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Example:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), " (should hopefully clarify the above)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Suppose that"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_{4,5}\\ge x_4-x_5"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_{2,5}\\ge x_2-x_5"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_{5,1}\\ge x_5-x_1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_{5,3}\\ge x_5-x_3"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["and that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i=i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 10
      }, this), " for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\le i\\le 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 27
      }, this), " while ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 47
      }, this), " is unbounded. What is the\r\nminimum possible value of"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum c_{u,v}=c_{4,5}+c_{2,5}+c_{5,1}+c_{5,3}?"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Solution:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 1
      }, this), " In this case, the answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4-1=3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 43
      }, this), ". We can show that this is a\r\nlower bound by choosing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{4,5}=1, a_{2,5}=0, a_{5,1}=1, a_{5,3}=0."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then we get the linear combination"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{Eq}=a_{4,5}\\cdot \\left[c_{4,5}\\ge x_4-x_5\\right]+a_{5,1}\\cdot \\left[c_{5,1}\\ge x_5-x_1\\right]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\cdot \\left[c_{4,5}\\ge x_4-x_5\\right]+1\\cdot \\left[c_{5,1}\\ge x_5-x_1\\right]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{Eq}=[c_{4,5}+c_{5,1}\\ge x_4-x_1]."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It follows that"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum c_{u,v}\\ge c_{4,5}+c_{5,1}\\ge x_4-x_1=4-1=3."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This corresponds to a min cost flow graph with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 48
      }, this), " vertices plus a source and a\r\nsink where all edges have capacity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 36
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Draw edges from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 19
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 26
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 31
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 38
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 43
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 50
        }, this), ", and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 59
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 66
        }, this), " with cost\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Drawing edges from the source to vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 43
        }, this), " with cost ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 57
        }, this), " and from the source\r\nto vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 104,
          columnNumber: 13
        }, this), " with cost ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 104,
          columnNumber: 27
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Drawing edges from vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 29
        }, this), " to the sink with cost ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "-3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 55
        }, this), " and from vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 76
        }, this), "\r\nto the sink with cost ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 106,
          columnNumber: 25
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Finding the maximum cost flow from the source to the sink. In this case, we\r\njust send one unit of flow from"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{source}\\to 4\\to 5\\to 1\\to \\text{sink}."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the original problem the edges go both ways (not just one way), but the idea\r\nis similar."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 114,
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
