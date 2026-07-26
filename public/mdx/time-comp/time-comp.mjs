"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["In programming contests, your program needs to finish running within a certain\r\ntimeframe in order to receive credit. For USACO, this limit is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 64
      }, this), " seconds for\r\nC++ submissions, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 22
      }, this), " seconds for Java/Python submissions. A conservative\r\nestimate for the number of \r\nthe grading server can handle per second is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 45
      }, this), ", but it could be closer to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5 \\cdot 10^8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), " given good constant factors."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-complexity-calculations",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-complexity-calculations",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Complexity Calculations"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We want a method to calculate how many operations it takes to run each\r\nalgorithm, in terms of the input size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 39
      }, this), ". Fortunately, this can be done\r\nrelatively easily using\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Big_O_notation",
        rel: "nofollow",
        target: "_blank",
        children: "Big O notation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), ", which expresses\r\nworst-case time complexity as a function of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 45
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 52
      }, this), " gets arbitrarily large.\r\nComplexity is an upper bound for the number of steps an algorithm requires as a\r\nfunction of the input size. In Big O notation, we denote the complexity of a\r\nfunction as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(f(n))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 13
      }, this), ", where constant factors and lower-order terms\r\nare generally omitted from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 28
      }, this), ". We'll see some examples of how this works, as\r\nfollows."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The following code is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 23
      }, this), ", because it executes a constant number of\r\noperations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Input and output operations are also assumed to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 52
      }, this), ". In the\r\nfollowing examples, we assume that the code inside the loops is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The time complexity of loops is the number of iterations that the loop runs. For\r\nexample, the following code examples are both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 47
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Because we ignore constant factors and lower order terms, the following examples\r\nare also ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 10
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can find the time complexity of multiple loops by multiplying together the\r\ntime complexities of each loop. This example is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(nm)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 189,
        columnNumber: 49
      }, this), ", because the\r\nouter loop runs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 17
      }, this), " iterations and the inner loop ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(m)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 64
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In this example, the outer loop runs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 38
      }, this), " iterations, and the inner\r\nloop runs anywhere between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 227,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 227,
        columnNumber: 36
      }, this), " iterations (which is a maximum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 227,
        columnNumber: 74
      }, this), ").\r\nSince Big O notation calculates worst-case time complexity, we treat the inner\r\nloop as a factor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 229,
        columnNumber: 21
      }, this), ". Thus, this code is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 38
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 226,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["If an algorithm contains multiple blocks, then its time complexity is the worst\r\ntime complexity out of any block. For example, the following code is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 268,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The following code is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2 + m)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 315,
        columnNumber: 23
      }, this), ", because it consists of two blocks\r\nof complexity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 316,
        columnNumber: 15
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(m)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 316,
        columnNumber: 38
      }, this), ", and neither of them is a\r\nlower order function with respect to the other."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 315,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-common-complexities-and-constraints",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-common-complexities-and-constraints",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Common Complexities and Constraints"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 362,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Complexity factors that come from some common algorithms and data structures are\r\nas follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 364,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Mathematical formulas that just calculate an answer: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 374,
          columnNumber: 56
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Binary search: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(\\log n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 375,
          columnNumber: 18
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 375,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Sorted set/map or priority queue: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(\\log n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 376,
          columnNumber: 37
        }, this), " per operation"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 376,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Prime factorization of an integer, or checking primality or compositeness of\r\nan integer naively: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(\\sqrt{n})"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 378,
          columnNumber: 23
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Reading in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 379,
          columnNumber: 14
        }, this), " items of input: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 379,
          columnNumber: 34
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 379,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Iterating through an array or a list of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 380,
          columnNumber: 43
        }, this), " elements: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 380,
          columnNumber: 57
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 380,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Sorting: usually ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n \\log n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 381,
          columnNumber: 20
        }, this), " for default sorting algorithms\r\n(mergesort, ", _jsxDEV(_components.code, {
          children: "Collections.sort"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 382,
          columnNumber: 15
        }, this), ", ", _jsxDEV(_components.code, {
          children: "Arrays.sort"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 382,
          columnNumber: 35
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 381,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Java Quicksort ", _jsxDEV(_components.code, {
          children: "Arrays.sort"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 383,
          columnNumber: 18
        }, this), " function on primitives: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n^2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 383,
          columnNumber: 56
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["See ", _jsxDEV(_components.a, {
              href: "/bronze/intro-ds",
              children: "Introduction to Data Structures"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 384,
              columnNumber: 9
            }, this), " for details."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 384,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 384,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Iterating through all subsets of size ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 385,
          columnNumber: 41
        }, this), " of the input elements:\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n^k)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 386,
          columnNumber: 3
        }, this), ". For example, iterating through all triplets is\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n^3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 387,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Iterating through all subsets: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(2^n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 388,
          columnNumber: 34
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 388,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Iterating through all permutations: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n!)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 389,
          columnNumber: 39
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 389,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 374,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here are conservative upper bounds on the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 391,
        columnNumber: 52
      }, this), " for each time complexity.\r\nYou might get away with more than this, but this should allow you to quickly\r\ncheck whether an algorithm is viable."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 391,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-constant-factor",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-constant-factor",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Constant Factor"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 419,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Constant factor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 423,
        columnNumber: 1
      }, this), " refers to the idea that different operations with the same\r\ncomplexity take slightly different amounts of time to run. For example, three\r\naddition operations take a bit longer than a single addition operation. Another\r\nexample is that although binary search on an array and insertion into an ordered\r\nset are both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 427,
        columnNumber: 14
      }, this), ", binary search is noticeably faster."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 423,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Constant factor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 429,
        columnNumber: 1
      }, this), " is entirely ignored in Big O notation. This is fine most of\r\nthe time, but if the time limit is particularly tight, you may receive time\r\nlimit exceeded (TLE) with the intended complexity. When this happens, it is\r\nimportant to keep the constant factor in mind. For example, a piece of code that\r\niterates through all ", _jsxDEV(_components.em, {
        children: "ordered"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 433,
        columnNumber: 22
      }, this), " triplets runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 433,
        columnNumber: 49
      }, this), " time might be\r\nsped up by a factor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 434,
        columnNumber: 24
      }, this), " if we only need to iterate through all ", _jsxDEV(_components.em, {
        children: "unordered"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 434,
        columnNumber: 67
      }, this), "\r\ntriplets."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 429,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "For now, don't worry about optimizing constant factors -- just be aware of them."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 440,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-formal-definition-of-big-o-notation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-formal-definition-of-big-o-notation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Formal Definition of Big O notation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 442,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 444,
        columnNumber: 5
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 444,
        columnNumber: 13
      }, this), " be non-negative functions from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathbb{R}_{\\ge 0}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 444,
        columnNumber: 48
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathbb{R}_{\\ge 0}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 444,
        columnNumber: 72
      }, this), ". If there exist\r\npositive constants ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 30
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) \\le c \\cdot g(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 44
      }, this), " whenever ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\ge n_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 77
      }, this), ", we\r\nsay that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) = \\mathcal{O}(g(n))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 446,
        columnNumber: 10
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 444,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Therefore, we ", _jsxDEV(_components.em, {
        children: "could"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 15
      }, this), " say that the time complexity of a linear function, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 74
      }, this), ", is also ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n/2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 100
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 120
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 139
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 159
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 179
      }, this), ", etc.\r\nHowever, we usually just write the simplest function out of those that are the most restrictive, which in the case of our linear function above, is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 449,
        columnNumber: 149
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 448,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-quiz",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quiz",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quiz"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 464,
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
