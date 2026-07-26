"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-2d-rmq",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2d-rmq",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2D RMQ"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Quite rare, I've only needed this once."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-2d-bit",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2d-bit",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2D BIT"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Essentially, we just nest the loops that one would find in a 1D BIT to get\r\nN-dimensional BITs. We can then use\r\n", _jsxDEV(_components.a, {
        href: "https://brilliant.org/wiki/principle-of-inclusion-and-exclusion-pie/",
        rel: "nofollow",
        target: "_blank",
        children: "PIE"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " to\r\nquery subrectangles."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Also see\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/bqi343/USACO/tree/master/Implementations/content/data-structures/2D%20Range%20Queries%20(15.2)",
        rel: "nofollow",
        target: "_blank",
        children: "Benq's implementations"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 178,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-offline-2d-bit",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-offline-2d-bit",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Offline 2D BIT"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 198,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The intended complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 200,
        columnNumber: 28
      }, this), " with a good constant factor.\r\nThis requires updating points and querying rectangle sums ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 201,
        columnNumber: 59
      }, this), " times for points\r\nwith coordinates in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1,N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 31
      }, this), ". However, the 2D BITs mentioned above use\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 1
      }, this), " memory, which is too much."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 200,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since we know all of the updates and queries beforehand, we can reduce the\r\nmemory usage while maintaining a decent constant factor."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 205,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We could use an unordered map instead of a 2D array, but this gives\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 1
      }, this), " memory and time and the constant factors for both are\r\nterrible; a better solution is to compress the points to be updated so that you only need\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 1
      }, this), " memory."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The idea is to first figure out which BIT values ", _jsxDEV(_components.strong, {
        children: "along one dimension"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 213,
        columnNumber: 50
      }, this), " each update will affect.\r\nIn the below table, the updates are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1), (3, 3),"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 37
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(4, 2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 59
      }, this), ", and the cells they affect are blue, red, and green respectively."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can now compress each row in the same fashion as an offline 1D BIT (remember, each row in a 2D BIT is another 1D BIT)!\r\nFor example, we can compress the second row to a BIT of size 2, and map range queries ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 87
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\in [1, 4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 101
      }, this), " to a range query of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 136
      }, this), ",\r\nand queries with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\in [4, \\infty)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 18
      }, this), " to a range query of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 58
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Similarly, for row 4 (which becomes a BIT of size 3):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\in [1, 3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 252,
          columnNumber: 3
        }, this), " -> range query ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[1, 2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 252,
          columnNumber: 33
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\in [3, 4)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 253,
          columnNumber: 3
        }, this), " -> range query ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[1, 3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 253,
          columnNumber: 33
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\in [4, \\infty)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 254,
          columnNumber: 3
        }, this), " -> range query ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[1, 4)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 254,
          columnNumber: 38
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 254,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 252,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This only requires knowing the updates beforehand, not the queries!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 256,
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
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/1D%20Range%20Queries%20(9.2)/BIToff.h",
          rel: "nofollow",
          target: "_blank",
          children: "Benq's 1D offline BIT"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 260,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/2D%20Range%20Queries%20(15.2)/BIT2DOff%20(15.2).h",
          rel: "nofollow",
          target: "_blank",
          children: "Benq's 2D offline BIT"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 261,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's an implementation of the offline 2D BIT presented above that may be\r\neasier to understand, albeit significantly slower due to a high constant factor:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "And you might use it like so:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 341,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["It's a bit difficult to pass the above problem within the time limit. Make sure to use fast input (and not ", _jsxDEV(_components.code, {
        children: "endl"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 438,
        columnNumber: 108
      }, this), ")!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 438,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://github.com/thecodingwizard/competitive-programming/blob/master/DMOJ/Soriyas%20Programming%20Project.cpp",
          rel: "nofollow",
          target: "_blank",
          children: "thecodingwizard's implementation with 2D offline BIT above"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 440,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 440,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 440,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-1d-bit--divide--conquer",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-1d-bit--divide--conquer",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "1D BIT + Divide & Conquer"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 442,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The fastest way."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 444,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["mentioned in\r\n", _jsxDEV(_components.a, {
          href: "https://robert1003.github.io/2020/01/31/cdq-divide-and-conquer.html",
          rel: "nofollow",
          target: "_blank",
          children: "this article"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 447,
          columnNumber: 3
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 446,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.a, {
          href: "https://github.com/thecodingwizard/competitive-programming/blob/master/DMOJ/Soriya%20Programming%20Project%201d%20BIT%20cdq%20dnc.cpp",
          rel: "nofollow",
          target: "_blank",
          children: "thecodingwizard's (messy) implementation"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 448,
          columnNumber: 3
        }, this), "\r\nbased off above"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 446,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 451,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-2d-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2d-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2D Segment Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 516,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A segment tree of (maybe sparse) segment trees."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 518,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 535,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-note---memory-usage",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-note---memory-usage",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Note - Memory Usage"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 555,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Naively, inserting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 557,
        columnNumber: 20
      }, this), " elements into a sparse segment tree requires\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 558,
        columnNumber: 1
      }, this), " memory, giving a bound of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 558,
        columnNumber: 50
      }, this), " on 2D\r\nsegment tree memory. This is usually too much for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=C=10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 559,
        columnNumber: 51
      }, this), " and 256 MB\r\n(although it sufficed for \"Mowing the Field\" due to the 512MB memory limit).\r\nPossible ways to get around this:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 557,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Use arrays of fixed size rather than pointers."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 563,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Reduce the memory usage of sparse segment tree to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 564,
          columnNumber: 53
        }, this), " while\r\nmaintaining the same ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N\\log C)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 565,
          columnNumber: 24
        }, this), " insertion time (see the solution\r\nfor IOI Game below for details)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 564,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Use ", _jsxDEV(_components.a, {
          href: "/adv/treaps",
          children: "BBSTs"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 567,
          columnNumber: 7
        }, this), " instead of sparse segment trees. ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 567,
          columnNumber: 61
        }, this), "\r\nmemory, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N\\log N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 568,
          columnNumber: 11
        }, this), " insertion time."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 567,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 563,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 570,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Can also try the USACO problems from above."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 572,
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
