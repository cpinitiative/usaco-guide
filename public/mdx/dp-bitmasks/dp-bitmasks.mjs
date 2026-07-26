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
      id: "user-content-bitmask-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bitmask-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bitmask DP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
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
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[S][i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 5
      }, this), " be the number of routes that visit all the cities in the subset\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this), " and end at city ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 21
      }, this), ". The transitions will then be:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[S][i] = \\sum_{x \\in adj[i]} dp[S  \\setminus \\{i\\}][x] \\text{ if $x \\in S$}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S  \\setminus \\{i\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 7
      }, this), " is the subset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 42
      }, this), " without city ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 59
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^N \\cdot N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-merging-subsets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-merging-subsets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Merging Subsets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 166,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In some problems, for a set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 168,
        columnNumber: 29
      }, this), ", it is not sufficient to transition from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S  \\setminus \\{i\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 168,
        columnNumber: 74
      }, this), ".\r\nInstead, it is necessary to transition from all ", _jsxDEV(_components.em, {
        children: "strict"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 49
      }, this), " subsets of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 69
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Though it may seem like we have to do ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^N \\cdot 2^N) = \\mathcal{O}(4^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 39
      }, this), " transitions,\r\nthere's really only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(3^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 21
      }, this), " transitions!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To see why, let's count the number of ordered pairs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(T, S)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 53
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T \\subset S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 68
      }, this), ".\r\nInstead of counting directly, notice that each element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 56
      }, this), " is either:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 174,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["In ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 176,
          columnNumber: 7
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 176,
          columnNumber: 15
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "In neither"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["In ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 178,
          columnNumber: 7
        }, this), " but not in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 178,
          columnNumber: 22
        }, this), ".\r\nIf ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 4
        }, this), " is in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 14
        }, this), " but not in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 29
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 34
        }, this), " isn't a valid subset."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given that each element can be in three possible states, our overall complexity is actually ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(3^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 93
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To implement this, we can do some bitwise tricks:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["When we subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 18
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{submask}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 27
      }, this), ", the rightmost bit flips to a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 76
      }, this), " and all bits to the right of it will become ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 124
      }, this), ".\r\nApplying the bitwise AND with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{mask}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 200,
        columnNumber: 31
      }, this), " removes all extra bits not in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{mask}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 200,
        columnNumber: 77
      }, this), ".\r\nFrom this process, we can get all strict subsets in increasing order by calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{mask} \\oplus \\texttt{submask}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 201,
        columnNumber: 85
      }, this), ", which does set subtraction."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 199,
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
      lineNumber: 205,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The goal of this problem is to partition the nodes into sets such that the nodes in each set form a complete graph.\r\nLet ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[S]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 5
      }, this), " be the minimum number of partitions such that in each partition, the graph formed is a complete graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 207,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can first find which sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 30
      }, this), " form a complete graph, setting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[T]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 65
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 85
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 93
      }, this), " otherwise.\r\nThis can be done naively in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^N \\cdot N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 29
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^N \\cdot N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 61
      }, this), "\r\nby setting the adjacency list as a bitmask and using bit manipulations if a set of nodes is a complete graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then we can transition as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[S] = \\min_{T \\subset S} (\\texttt{dp}[T] + \\texttt{dp}[S \\setminus T])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 215,
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
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(3^N + 2^N \\cdot N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 221,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 277,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-application---bitmask-over-primes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application---bitmask-over-primes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application - Bitmask over Primes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 281,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-rough-idea",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-rough-idea",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Rough Idea"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 283,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In some number theory problems, it helps to represent each\r\nnumber with a bitmask of its prime divisors. For example, the set\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{6, 10, 15 \\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 1
      }, this), " can be represented by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{0b011, 0b101, 0b110 \\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 40
      }, this), " (in\r\nbinary), where the bits correspond to divisibility by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 3, 5]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 289,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 285,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then, here are some equivalent operations between masks and these integers:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 291,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Bitwise AND is GCD"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Bitwise OR is LCM"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Iterating over bits is iterating over prime divisors"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 295,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Iterating over submasks is iterating over divisors\r\nChoosing a set with GCD ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 297,
          columnNumber: 25
        }, this), " is equivalent to choosing a set of bitmasks that AND\r\nto ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 298,
          columnNumber: 4
        }, this), ". For example, we can see that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{6, 10 \\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 298,
          columnNumber: 38
        }, this), " doesn't have GCD ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 298,
          columnNumber: 68
        }, this), " because\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0b011 \\& 0b101 = 0b001 \\neq 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 299,
          columnNumber: 1
        }, this), ". On the other hand, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{6, 10, 15 \\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 299,
          columnNumber: 53
        }, this), " has GCD ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 299,
          columnNumber: 78
        }, this), "\r\nbecause ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0b011 \\& 0b101 \\& 0b110 = 0b000 = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 300,
          columnNumber: 9
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 296,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 293,
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
      lineNumber: 302,
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
