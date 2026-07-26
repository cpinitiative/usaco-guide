"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2012_solutions.zip",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
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
      children: ["If we can cover the highway using circles of radius ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 53
      }, this), ", then we can also\r\ncover the highway using circles of radius ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_2 > r_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 43
      }, this), ". This suggests that we\r\nshould binary search for the answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-checking-a-radius",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-checking-a-radius",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Checking a Radius"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If a circle covers a part of a highway, it covers a line segment. Using the\r\nPythagorean theorem (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a^2 + b^2 = c^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 22
      }, this), "), we can find the coordinates of the\r\nendpoints of each such segment. Let the segment from the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 58
      }, this), "-th tower be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 74
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Checking whether a radius is good now becomes checking whether the union of\r\nthese segments is a single segment that completely covers the highway."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can solve this in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 22
      }, this), " time by sorting the segments by\r\ntheir left endpoints and then merging each segment into the union if it\r\nintersects the union of the previous segments."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Unfortunately, this is just a bit too slow (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N \\log L)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 45
      }, this), " in\r\ntotal) and only scores 50 points."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Luckily, we don't have to sort the segments!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-a-nice-property",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-a-nice-property",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "A Nice Property"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Why would we need to sort the segments in the first place?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Imagine we had three segments ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 31
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 36
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 45
      }, this), " in that order in the unsorted\r\nlist. Watch what happens when these segments are arranged as shown below:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/silver/baltic-12-mobile/hack.png",
        alt: "Hack"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without sorting, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 18
      }, this), " wouldn't be part of the union since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f \\cap g = \\emptyset"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 58
      }, this), ".\r\nHowever, the actual union contains all three segments."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["But what if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 13
      }, this), " completely covers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 35
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/silver/baltic-12-mobile/antihack.png",
        alt: "Antihack"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this case, it doesn't matter that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 38
      }, this), " isn't a part of the union, since\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f \\cup g \\cup h = f \\cup h"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), " anyway."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The nice thing about this particular problem is that if we have segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 73
      }, this), "\r\ncoming after segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 22
      }, this), " in the list but ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 44
      }, this), "'s left endpoint is to the left\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 4
      }, this), "'s left endpoint, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 32
      }, this), " must completely cover ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 60
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Why is this true? The only time we will have segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 54
      }, this), " coming after segment\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), " in the list but ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 23
      }, this), "'s left endpoint is to the left of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 63
      }, this), "'s left\r\nendpoint is when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i > x_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 18
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_i < y_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 34
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/silver/baltic-12-mobile/circles.png",
        alt: "Circles"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Clearly, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 10
      }, this), " completely covers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 34
      }, this), ". We can therefore apply our algorithm for\r\na sorted list and still get the correct answer!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This gets rid of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 22
      }, this), " factor in our original complexity and so the final\r\ncomplexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log L)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 15
      }, this), ", which is good enough for 100 points."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
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
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n#define x first\r\n#define y second\r\nusing namespace std;\r\n\r\npair<long long, long long> p[1000000];\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tint n, len;\r\n\tcin >> n >> len;\r\n\tfor (int i = 0; i < n; i++) cin >> p[i].x >> p[i].y;\r\n\r\n\tdouble l = 0, r = 2.5e9;\r\n\twhile (r - l > 1e-3) {\r\n\t\tdouble mid = (l + r) / 2, curr = 0;\r\n\t\tfor (int i = 0; i < n; i++) {\r\n\t\t\tdouble delta = sqrt(mid * mid - p[i].y * p[i].y);\r\n\t\t\tdouble a = p[i].x - delta, b = p[i].x + delta;\r\n\t\t\tif (a <= curr) curr = max(curr, b);\r\n\t\t}\r\n\r\n\t\tif (curr >= len) r = mid;\r\n\t\telse l = mid;\r\n\t}\r\n\r\n\tcout << fixed << setprecision(4) << l;\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 96,
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
