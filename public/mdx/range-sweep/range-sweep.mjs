"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution---intersection-points",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---intersection-points",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Intersection Points"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can sweep from bottom to top (by the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 41
      }, this), " coordinate); storing two events for\r\nvertical segments (one for start and one for end) and one event for horizontal\r\nsegments."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can use a Binary Indexed Tree to store the number of ", _jsxDEV(_components.strong, {
        children: "active"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 57
      }, this), " vertical\r\nsegments for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 19
      }, this), " coordinate."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, every time we encounter the start of a vertical segment, we increment the\r\ncounter for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 13
      }, this), " in the BIT."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similarly, we decrement the counter for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 41
      }, this), " every time we see the end of a\r\nvertical segment."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we encounter a horizontal segment, we would query the number of active\r\nranges in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x_1, x_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 11
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 30
      }, this), " is the lower ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 49
      }, this), " coordinate and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 68
      }, this), " is the\r\nupper ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 7
      }, this), " coordinate of the segment."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Our answer would be the sum of all the queries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
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
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---springboards",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---springboards",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Springboards"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Naive DP:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(P^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 15
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first step is to create a DP to solve the first subtask. The states are the springboards and the transitions are between springboards. First, sort the springboards by the pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x_1, y_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 181
      }, this), " in increasing order. It is possible to show that for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 251
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 256
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 267
      }, this), ", Bessie cannot use springboard ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 306
      }, this), " then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 315
      }, this), " later."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each springboard ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 22
      }, this), ", let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 31
      }, this), " denote the minimum distance needed to walk to the start point of springboard ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 126
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}(a, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 5
      }, this), " be the walking distance from the end of springboard ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 79
      }, this), " and the start of springboard ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 112
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}(a, b) = x_1[b] + y_1[b] - x_2[a] - y_2[a]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then, the transitions are:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}[i] = \\min\\limits_{j < i, x_2[j] \\le x_1[i], y_2[j] \\le y_1[i]}(\\texttt{ans}[j] + \\texttt{dist}(j, i))"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 224,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Full Solution:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(P \\log P)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 20
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Optimizing the DP involves the use of a min point update range query segment tree. Let's first expand ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 230,
        columnNumber: 103
      }, this), " in the transition formula."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 230,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}[i] = \\min\\limits_{j < i, x_2[j] \\le x_1[i], y_2[j] \\le y_1[i]}(\\texttt{ans}[j] + x_1[i] + y_1[i] - x_2[j] - y_2[j])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 232,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}[i] = x_1[i] + y_1[i] + \\min\\limits_{j < i, x_2[j] \\le x_1[i], y_2[j] \\le y_1[i]}(\\texttt{ans}[j] - x_2[j] - y_2[j])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 235,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We notice that everything inside the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 38
      }, this), " statement only depends on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 71
      }, this), ". The segment tree stores ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}[j] - x_2[j] - y_2[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 100
      }, this), " at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_2[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 145
      }, this), ". We can separate the start and end of springboards to create two separate events for each springboard, still sorting by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 274
      }, this), ". When the event is the start of a springboard, update ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 239,
        columnNumber: 337
      }, this), " through a segment tree query. When the event is the end of a springboard, update the segment tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 239,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By processing in order, the first two conditions in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 57
      }, this), " statement are always satisfied. The third is where the segment tree comes into play, where querying the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, y_1[i]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 174
      }, this), " is sufficient to satisfy all constraints."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 241,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Due to the large ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 243,
        columnNumber: 18
      }, this), ", coordinate compression is required in the code."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 243,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 245,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 247,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(P \\log P)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 247,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-alternate-approach",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternate-approach",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternate Approach"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 469,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It turns out there is also a simpler though less straightforward method to solve this problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 471,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The problem boils down to having a data structure that supports the following\r\noperations:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 473,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Add a pair ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(a,b)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 476,
          columnNumber: 15
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For any ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 477,
          columnNumber: 12
        }, this), ", query the minimum value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 477,
          columnNumber: 44
        }, this), " over all pairs satisfying\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a\\le x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 478,
          columnNumber: 4
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 476,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This solution is described in the\r\n", _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_boards_gold_jan20.html",
        rel: "nofollow",
        target: "_blank",
        children: "official editorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 481,
        columnNumber: 1
      }, this), "\r\nand the ", _jsxDEV(_components.a, {
        href: "/adv/springboards",
        children: "other module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 482,
        columnNumber: 9
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 480,
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
      lineNumber: 484,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-lis-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lis-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "LIS Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 488,
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
