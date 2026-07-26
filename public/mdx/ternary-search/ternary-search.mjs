"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In competitive programming, we are often asked to find the minimum or maximum value we can attain under some conditions. More specifically,\r\nwe are often asked to formulate some function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 47
      }, this), ", and find the maximum or minimum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 96
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If our function happens to be ", _jsxDEV(_components.strong, {
        children: "unimodal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 31
      }, this), ", we can use either\r\nternary search or binary search to find the mode of our function\r\nefficiently."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-definitions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-definitions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Definitions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A function is unimodal if one of the following conditions holds:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The function ", _jsxDEV(_components.strong, {
          children: "strictly increases"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 17
        }, this), " first, then reaches a maximum, then ", _jsxDEV(_components.strong, {
          children: "strictly decreases"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 76
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The function ", _jsxDEV(_components.strong, {
          children: "strictly decreases"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 17
        }, this), " first, then reaches a minimum, then ", _jsxDEV(_components.strong, {
          children: "strictly increases"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 76
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
      children: ["Let's assume that we want to find the local minimum of our function. Then, a\r\nfunction is convex if ", _jsxDEV(_components.strong, {
        children: "consecutive differences are non-decreasing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 23
      }, this), ". In calculus\r\nterms, if the derivative of the function is non-decreasing, the function is convex."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that this implies that a convex function is also a unimodal function."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-ternary-search",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-ternary-search",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Ternary Search"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For now, let's assume that we want to find the minimum of our function, and that our function is unimodal. This means that the second condition holds, meaning our function ", _jsxDEV(_components.strong, {
        children: "strictly decreases"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 173
      }, this), " first, reaches its minimum, then ", _jsxDEV(_components.strong, {
        children: "strictly increases"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 229
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The idea behind ternary search is somewhat similar to binary search. At every\r\nstep of our algorithm, we want to cut out some large portion of our search\r\nspace from being considered."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's consider two points ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 27
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 37
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l < m_1 < m_2 < r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 50
      }, this), ". Here,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 9
      }, this), " are the endpoints of our current search space. This ends up dividing\r\nour search space into three sections."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, we just do a bit of casework to see if we can eliminate any sections."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "f(m_1) > f(m_2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 4
        }, this), " means that we can eliminate ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, m_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 50
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "f(m_1) < f(m_2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 4
        }, this), " means that we can eliminate ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(m_2, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 50
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "f(m_1) = f(m_2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 4
        }, this), " means that we can eliminate ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, m_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 50
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(m_2, r]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 65
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Typically, we treat case 3 as being analogous to cases 1 and 2."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As a mini-proof for why the way we handle case 1 is correct, consider the\r\nfollowing:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(m_1) > f(m_2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 6
        }, this), ", then we know the following two facts:"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.ul, {
        children: ["\n", _jsxDEV(_components.li, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "f(m_1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 60,
            columnNumber: 6
          }, this), " is not the minimum"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.li, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "f(m_1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 61,
            columnNumber: 5
          }, this), " cannot be on the strictly increasing side of the function\r\nRegarding the second point, if ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "f(m_1) > f(m_2)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 62,
            columnNumber: 34
          }, this), " and ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "m_1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 62,
            columnNumber: 56
          }, this), " was on the strictly increasing side of the function, that would imply ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "m_1 > m_2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 62,
            columnNumber: 132
          }, this), ", which is a contradiction."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.p, {
        children: ["Thus, we can conclude that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 30
        }, this), " remains on the strictly decreasing section of our function. Because of this, we can conclude that our minimum will not be in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[l, m_1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 171
        }, this), ", so we can eliminate this section from our search space."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now that we know how to strategically remove sections of our search space,\r\nthe question remains on how to choose the best values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 58
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 68
      }, this), ".\r\nThe optimal way is to divide our search space into thirds, so we have:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1 = l + \\frac{r - l}{3}, \\ m_2 = r - \\frac{r - l}{3}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 70,
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
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The time complexity of ternary search takes on the following recurrence:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "T(n) = T \\left(\\frac{2n}{3} \\right) + \\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Per the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)",
        rel: "nofollow",
        target: "_blank",
        children: "Master theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 9
      }, this), ", this is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 106
      }, this), " if we are working with integers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we are ternary searching with a fixed error margin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\epsilon"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 55
      }, this), ", the\r\ntime complexity becomes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}\\left( \\log\\left( \\frac{n}{\\epsilon} \\right) \\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "If our function only takes in integers, then our implementation looks a little\r\ndifferent."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-binary-search",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-binary-search",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Binary Search"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Actually, in the case of our function only taking in integers, binary search\r\nis often a better option, as it's shorter and requires less calls to our function\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 166,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 164,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, if we are working with floating points, binary search may be a bit more\r\nproblematic because of loss of precision. For this reason, ternary\r\nsearch is still sometimes preferable."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The way the binary search approach works is that it finds the first point where\r\nthe function becomes strictly increasing. This works because we assume that\r\nour function takes the form of strictly decreasing, reaching its minimum,\r\nthen strictly increasing. Thus, the first point where our function becomes strictly\r\nincreasing is the turning point of our function, which is the minimum."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 203,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---haybale-distribution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---haybale-distribution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Haybale Distribution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 209,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's define a function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 25
      }, this), " that evaluates the cost of transporting all the haybales if we deliver the haybales at point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 125
      }, this), ". Can we show that this\r\nfunction is either unimodal or convex?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 215,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An important fact to know when showing that a function is convex is that\r\n", _jsxDEV(_components.strong, {
        children: "the sum of convex functions is convex"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 7
      }, this), " is the sum of all the individual cost functions for each barn.\r\nThe cost function for a given barn is convex, so it turns out that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 222,
        columnNumber: 68
      }, this), "\r\nis also convex!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 221,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given that a convex function is unimodal, this allows us to\r\nternary search on it. Thus, we can find the minimum in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 56
      }, this), "\r\nper query."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 225,
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
      lineNumber: 229,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q) \\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 231,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that the implementation below uses binary search instead, as it's a bit\r\neasier to implement."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 233,
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
      lineNumber: 323,
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
