"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
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
      children: "The general idea is the following: we can try finding the answer\r\nby placing the circle's boundary on each point, then sweep - or rotate -\r\nthe circle around the point to see the maximum number of points that can be inside the circle.\r\nThe picture below depicts how the sweep works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/platinum/leetcode-1453/angular-sweep.png",
        alt: "angular-sweep"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The sweeping around point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 27
      }, this), " can be done in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\cdot \\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 46
      }, this), " by\r\ncomputing for each point the angle of entering and exiting the circle. Afterward\r\ntraverse the sorted array of angles while keeping track of active points i.e.\r\npoints lying inside the circle. The considered angles will be relative\r\nto the center of the circle. Let's analyze how to find the entrance angle for\r\na point:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.img, {
        src: "/solutions/platinum/leetcode-1453/angular-sweep-enter.png",
        alt: "angular-sweep"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\r\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll express the values of the angles in radians. The angle of entering the circle in this case is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\alpha"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 101
      }, this), "\r\nwhich can be expressed as: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\alpha = b - a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 28
      }, this), ". Angle ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 52
      }, this), " is right above the x-axis so it's just ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\arctg"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 95
      }, this), ".\r\nConsider that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b=\\angle{QPO}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 15
      }, this), " is an angle in the right triangle ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\triangle QPL"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 65
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 88
      }, this), " is the dimetral opposite point of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 126
      }, this), " on the\r\ncircle, therefore ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\angle{PQL}=90\\degree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 19
      }, this), ". In this case, knowing that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "PL=2 \\cdot r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 71
      }, this), " - diameter - and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "PQ=\\texttt{dist}(P,Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 103
      }, this), ", the angle ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 138
      }, this), "\r\ncan be conveniently expressed as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\arccos"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 34
      }, this), ". Consequently, the angles ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a, b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 70
      }, this), " have the following formulas:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "a=\\arctg{\\frac{Q_y-P_y}{Q_x-P_x}}\\\\\r\nb=\\arccos{\\frac{\\texttt{dist}(P,Q)}{2 \\cdot r}}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now that we know how to find the entrance angle, it'll be easier to find the exit angle.\r\nWith the same notations as the previous one - ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a, b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 47
      }, this), " having the same formulas - consider this:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.img, {
        src: "/solutions/platinum/leetcode-1453/angular-sweep-exit.png",
        alt: "angular-sweep-exit"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\r\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It can be observed that: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\beta = a + b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 26
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This algorithm is known as ", _jsxDEV(_components.a, {
        href: "https://www.geeksforgeeks.org/angular-sweep-maximum-points-can-enclosed-circle-given-radius/",
        rel: "nofollow",
        target: "_blank",
        children: "angular sweep"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 28
      }, this), "\r\nor ", _jsxDEV(_components.em, {
        children: "disk partial covering problem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 4
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
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
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 \\cdot \\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
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
