"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-subtask-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can find the minimum and maximum elements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 49
      }, this), " in some range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 67
      }, this), " by\r\nsimply querying ", _jsxDEV(_components.code, {
        children: "MinMax(l, r, &mn, &mx)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 17
      }, this), ". This lets us \"whittle down\" the range\r\nand reconstruct ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 17
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M \\leq \\frac{N + 1}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 26
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can then sweep through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 27
      }, this), " and find the largest gap."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-subtask-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We don't necessarily need to reconstruct ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 42
      }, this), " entirely to find the largest gap.\r\nNotice how if we know a lowerbound ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 36
      }, this), " on the answer and the range of all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 75
      }, this), ",\r\nthen we can simply query the range in blocks of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 54
      }, this), " to find the answer.\r\nThis works because the largest gap will always span at least two blocks."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So what is the lowerbound on the answer? If there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 55
      }, this), " elements that span a\r\nrange of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 15
      }, this), ", then the lowerbound is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{L + N - 1}{N - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 43
      }, this), " by the\r\npigeonhole principle. (This is a similar idea to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\alpha = 1/2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 54
      }, this), " solution for\r\nIMO 2020 P6)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Our algorithm thus looks like:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Find the range that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 23
        }, this), " spans in 1 query. This contributes ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N + 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 62
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 73
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Find ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 8
        }, this), " (the lowerbound on the answer) from the formula above."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Query the range in blocks of size ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 37
        }, this), ". Since there are ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 62
        }, this), " of these\r\nblocks and each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 19
        }, this), " is included in exactly 1 of these blocks, this\r\ncontributes ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2N - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 15
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 27
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This allows us to find the largest gap with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M \\leq 3N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 45
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"gap.h\"\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\ntypedef long long ll;\r\n\r\nconst ll MAXN = 1e18;\r\n\r\nll a[100000], j = 0;\r\n\r\nll findGap(int T, int N) {\r\n\tif (T == 1) {\r\n\t\tll l = 1, r = MAXN;\r\n\t\tll mn, mx;\r\n\t\tvector<ll> v;\r\n\t\tfor (ll i = 0; i < (N + 1) / 2; i++) {\r\n\t\t\tMinMax(l, r, &mn, &mx);\r\n\t\t\ta[j++] = mn;\r\n\t\t\ta[j++] = mx;\r\n\t\t\tl = mn + 1, r = mx - 1;\r\n\t\t}\r\n\t\tsort(a, a + N);\r\n\t\tll ans = 0;\r\n\t\tfor (ll i = 0; i < N - 1; i++) ans = max(ans, a[i + 1] - a[i]);\r\n\t\treturn ans;\r\n\t} else {\r\n\t\tll mn, mx;\r\n\t\tMinMax(1, MAXN, &mn, &mx);\r\n\t\tll step = (mx - mn + N - 2) / (N - 1);\r\n\t\tll ans = step, x, y, l = mn, i;\r\n\t\tfor (i = mn; i + step < mx; i += step + 1) {\r\n\t\t\tMinMax(i, i + step, &x, &y);\r\n\t\t\tif (x != -1) {\r\n\t\t\t\tans = max(ans, x - l);\r\n\t\t\t\tl = y;\r\n\t\t\t}\r\n\t\t}\r\n\t\tMinMax(i, mx, &x, &y);\r\n\t\tif (x != -1) ans = max(ans, x - l);\r\n\t\treturn ans;\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
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
