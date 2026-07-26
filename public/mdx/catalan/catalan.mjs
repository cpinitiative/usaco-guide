"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
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
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Catalan_number",
        rel: "nofollow",
        target: "_blank",
        children: "Catalan numbers"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 5
      }, this), " are a sequence of positive integers that can be very useful in counting problems in combinatorics.\r\nThe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 5
      }, this), "-th Catalan can be expressed as follows using binomial coefficients:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_n=\\frac{1}{n+1}\\cdot \\binom{2n}{n}=\\frac{(2n)!}{(n+1)!\\,n!}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "They also have the recurrence formula"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_{n+1}= \\sum^{n}_{i=0}{C_i \\cdot C_{n-i}} \\,\\,\\, \\text{ for } n \\ge 0 \\\\"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "which can also be expressed as"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_n=\\frac{2(2n-1)}{n+1} \\cdot C_{n-1}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 11
      }, this), " Catalan numbers are"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-applications",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applications",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applications"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The Catalan numbers can be used to represent a wide variety of things."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 14
      }, this), " is equal to the number of valid parenthesis expressions of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 86
      }, this), ".\r\nTake, for instance, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_3=5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 21
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "()()()"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "(())()"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "()(())"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "((()))"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "(()())"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It's also equal to the number of full binary trees with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 57
      }, this), " leaves.\r\nThe following image shows the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 31
      }, this), " binary trees with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 53
      }, this), " leaves:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/catalan-binary-trees.png",
        alt: "binary-trees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "C_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), " is also the number of monotonic lattice paths along the edges of a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\times n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 74
      }, this), " grid that don't pass above the diagonal.\r\nThe paths start in the lower left corner and ends in the upper right corner."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_4=14"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 24
      }, this), " paths in a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4 \\times 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 44
      }, this), " grid:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/catalan-lattice-paths.png",
        alt: "lattice points"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The next two examples are a bit more niche, but they're still interesting to think about."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider a convex polygon with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n+2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 32
      }, this), " sides divided into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 57
      }, this), " triangles by connecting vertices with non-intersecting lines.\r\nThe number of different ways to divide the polygon in this way is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 76
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here's the particular case for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n=3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 32
      }, this), " in which we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C_3=5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 55
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/catalan-polygons.png",
        alt: "polygons"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "C_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), " is also equal to the number of ", _jsxDEV(_components.a, {
        href: "https://mathcircle.berkeley.edu/sites/default/files/BMC6/pdf0607/catalan.pdf#page=2",
        rel: "nofollow",
        target: "_blank",
        children: "mountain ranges"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 38
      }, this), " of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 151
      }, this), " consisting of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 170
      }, this), " upstrokes and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 188
      }, this), " downstrokes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/catalan-mountain-strokes.png",
        alt: "mountains"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-derivations",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-derivations",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Derivations"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Using the \"mountain ranges\" interpretation, we can derive two nice bijective proofs for the Catalan formulas."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-reflection",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-reflection",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Reflection"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider complementary counting: we then need to characterize the paths that dip below ground level, i.e. the paths that touch the line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 137
      }, this), ". It turns out that for every such path ending at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2n, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 195
      }, this), ", we can biject it to a path ending at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2n, -2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 243
      }, this), " by reflecting a portion of the path, like so:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Catalan/reflection.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To be precise, the bijection is defined as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["To go from blue to red, we reflect the blue path about the first point that touches the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = -1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 87,
          columnNumber: 91
        }, this), ". Since we assumed the blue path touches ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = -1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 87,
          columnNumber: 140
        }, this), " at least once, this point is guaranteed to exist."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["To go from red to blue, we also reflect the red path about the first point that touches ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = -1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 88,
          columnNumber: 91
        }, this), ". This point is guaranteed to exist because the path starts at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 88,
          columnNumber: 162
        }, this), " and ends at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = -2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 88,
          columnNumber: 182
        }, this), ", which means it must cross ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y = -1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 88,
          columnNumber: 218
        }, this), " at some point."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 87,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Therefore, the number of blue paths equals the number of red paths, and the number of red paths is easy to count:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{\\# of red paths} = \\binom{\\text{up + down}}{\\text{down}} = \\binom{2n}{n + 1}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, the number of mountain ranges is the total number of paths minus the number of blue paths:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\n\\binom{2n}{n} - \\binom{2n}{n + 1} &= \\binom{2n}{n} - \\frac{n}{n + 1}\\binom{2n}{n} \\\\\r\n&= \\frac{1}{n + 1}\\binom{2n}{n}\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that we can generalize this bijection: to count the paths that cross ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = -k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 75
      }, this), ", we can instead count the number of paths that end at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2n, -2k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 138
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-exceedance",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-exceedance",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Exceedance"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This explanation offers more insight into why ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{n + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 47
      }, this), " appears in the final expression."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, let's define the ", _jsxDEV(_components.strong, {
        children: "exceedance"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 25
      }, this), " of a path as the total number of upstrokes it takes above ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 98
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Catalan/exceedance.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 111,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.em, {
        children: "A path with exceedance 5."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 113,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The core result is that for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 33
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 42
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 49
      }, this), ", the number of paths with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 90
      }, this), " ", _jsxDEV(_components.strong, {
        children: "is equal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 94
      }, this), ". Therefore, the number of mountain ranges, i.e. the number of paths with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 191
      }, this), ", is precisely ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{n + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 209
      }, this), " of the total number of paths."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 115,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To prove this equality, we will define a bijection between paths with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 82
      }, this), " and paths with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 112
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0 \\leq i \\lt n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 124
      }, this), ". Let's consider the following mapping: for a path with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 207
      }, this), ", we take the last downstroke that goes from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 255
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 266
      }, this), " and move it to the end of the path."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Catalan/mapping1.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 119,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This transformation indeed increases exceedance by 1, but unfortunately it is not bijective. One easy way to see this is the fact that the resultant path always ends in a downstroke, which clearly does not cover every possible path of exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 247
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thankfully, we can make an easy fix: after applying our current mapping, just swap the second half (i.e. the part originally after the red arrow) of the path with the first!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Catalan/mapping2.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can show that this mapping is invertible by verifying that it transforms the red arrow from the last downstroke from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 121
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 132
      }, this), ", to the first downstroke from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 171
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 182
      }, this), ". Therefore, we have established a bijection between paths with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 264
      }, this), " and paths with exceedance ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 294
      }, this), ", as desired."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Just for fun, here's an image from Wikipedia that demonstrates how this algorithm decreases the exceedance of various paths:\r\n", _jsxDEV(_components.img, {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Catalan_number_algorithm_table.png",
        alt: "500|center"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-bracket-sequences-i",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bracket-sequences-i",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bracket Sequences I"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
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
      lineNumber: 137,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The problem is a direct application of Catalan numbers. The answer for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 72
      }, this), " is the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N/2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 83
      }, this), " Catalan Number."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
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
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 143,
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
      lineNumber: 259,
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
