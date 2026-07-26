"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
      children: "We wish to solve problems that are of the following form:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Consider a set of functions ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{f_i(x)\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 31
        }, this), " on some range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l,r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 58
        }, this), " such that for\r\nany two functions ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 21
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f_j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 31
        }, this), ", there exists some ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 56
        }, this), " such that"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.ul, {
        children: ["\n", _jsxDEV(_components.li, {
          children: ["For all ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "x \\in [l,m]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 7,
            columnNumber: 13
          }, this), ", ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "f_i(x)\\le f_j(x)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 7,
            columnNumber: 28
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.li, {
          children: ["For all ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "x \\in [m,r]"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 8,
            columnNumber: 13
          }, this), ", ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "f_i(x)\\ge f_j(x)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 8,
            columnNumber: 28
          }, this)]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.p, {
        children: ["Answer queries of the form \"what is the maximum/minimum ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f_i(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 59
        }, this), " for some\r\ngiven ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x\\in [l,r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 9
        }, this), ",\" given that we have a way of finding ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 60
        }, this), " efficiently."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A sufficient (but not necessary) set of conditions:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["All the functions are continuous along the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l,r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 52
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "No two functions intersect at more than one point."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The most common case is where each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_i(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 36
      }, this), " is of the form ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_ix+b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 60
      }, this), ". Given two\r\nlines ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_i(x)=a_ix+b_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_j(x)=a_jx+b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 29
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i<a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 57
      }, this), ", their\r\nintersection point at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m=\\frac{b_i-b_j}{a_j-a_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 23
      }, this), " can be found in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), " time. Then it's clear that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["For all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x\\le m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 11
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f_i(x)\\ge f_j(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 21
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x\\ge m"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 11
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f_i(x)\\le f_j(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 21
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The linear case is known as the ", _jsxDEV(_components.strong, {
        children: "convex hull trick"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 33
      }, this), " because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max_i(f_i(x))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 63
      }, this), "\r\nas a function of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 18
      }, this), " is concave up (similarly, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min_i(f_i(x))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 48
      }, this), " as a function of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " is concave down). Check the images from the CF tutorial below if you don't\r\nknow what this means."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Some possible nonlinear forms of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_i(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 34
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "f_i(x)=x^2+a_ix+b_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Reduces to the linear case, since we can ignore the ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x^2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 34,
              columnNumber: 57
            }, this), " term when\r\ncomparing two functions."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 34,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "f_i(x) = \\sqrt{x - a_i} + b_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["If this function is defined for all ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x\\in [l,r]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 37,
              columnNumber: 41
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 37,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Note that when ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "a_i<a_j"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 38,
              columnNumber: 20
            }, this), ", ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\sqrt{x-a_i}-\\sqrt{x-a_j}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 38,
              columnNumber: 31
            }, this), " is strictly decreasing\r\nover the range ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x\\in [a_j,\\infty)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 39,
              columnNumber: 20
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 38,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this module, we'll focus on the special case of CHT where \"slopes\" of\r\nfunctions are monotonic. This specific case is solvable in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 60
      }, this), "\r\nusing a ", _jsxDEV(_components.code, {
        children: "std::deque"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 9
      }, this), " in C++. For the more general ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 51
      }, this), " CHT\r\n(which involves a ", _jsxDEV(_components.code, {
        children: "std::multiset"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 19
      }, this), "), see ", _jsxDEV(_components.a, {
        href: "/adv/LC",
        children: "the LineContainer module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---the-fair-nut-and-rectangles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---the-fair-nut-and-rectangles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - The Fair Nut and Rectangles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I won't analyse this problem in great detail since the Codeforces blog in the\r\nresources already does so, but essentially, we sort the rectangles by\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 1
      }, this), "-coordinate and get the following DP recurrence:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i] = p_i \\cdot q_i - a_i + \\max_{j < i}(-p_j \\cdot q_i + dp[j])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice how the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-p_j \\cdot q_i + dp[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 16
      }, this), " part of the recurrence describes a\r\nstraight line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = mx + c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since we sorted the rectangles and no two rectangles are nested, the slopes of\r\nthe lines we insert are strictly increasing. The query positions are also\r\nstrictly increasing."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means we can solve this problem using CHT in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 51
      }, this), " time! Here is\r\nmy implementation:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nstruct Rect {\r\n\tll x, y, a;\r\n\tbool operator<(Rect B) { return x < B.x; }\r\n};\r\n\r\nRect a[1000001];\r\nll dp[1000001];\r\n\r\ndouble slope(int i, int j) { return (double)(dp[i] - dp[j]) / (a[i].x - a[j].x); }\r\n\r\nint main() {\r\n\tiostream::sync_with_stdio(false);\r\n\tcin.tie(0);\r\n\tll n;\r\n\tcin >> n;\r\n\tfor (int i = 1; i <= n; i++) { cin >> a[i].x >> a[i].y >> a[i].a; }\r\n\tsort(a + 1, a + n + 1);\r\n\r\n\tdeque<ll> q;\r\n\tq.push_back(0);\r\n\tfor (int i = 1; i <= n; i++) {\r\n\t\twhile (q.size() > 1 && slope(q[0], q[1]) >= a[i].y) q.pop_front();\r\n\r\n\t\tll j = q.front();\r\n\t\tdp[i] = max(dp[i - 1], a[i].x * a[i].y - a[i].a + dp[j] - a[j].x * a[i].y);\r\n\r\n\t\twhile (q.size() > 1 && slope(q[q.size() - 2], q.back()) <= slope(q.back(), i))\r\n\t\t\tq.pop_back();\r\n\t\tq.push_back(i);\r\n\t}\r\n\r\n\tcout << dp[n];\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 87,
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
      lineNumber: 128,
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
