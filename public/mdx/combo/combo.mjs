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
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["If you've never encountered any ", _jsxDEV(_components.strong, {
        children: "combinatorics"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 33
      }, this), " before, AoPS is a good place\r\nto start."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "If you prefer watching videos instead, here are some options:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-binomial-coefficients",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-binomial-coefficients",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Binomial Coefficients"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "binomial coefficient"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 5
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n}{k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 30
      }, this), " (pronounced as \"", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 61
      }, this), " choose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 72
      }, this), "\" or\r\nsometimes written as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{}_nC_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 22
      }, this), ") represents the number of ways to choose a subset\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 4
      }, this), " elements from a set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 31
      }, this), " elements. For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{4}{2} = 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 58
      }, this), ",\r\nbecause the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{1,2,3,4\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 17
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 35
      }, this), " subsets of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 50
      }, this), " elements:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{1, 2\\}, \\{1, 3\\}, \\{1, 4\\}, \\{2, 3\\}, \\{2, 4\\}, \\{3, 4\\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two ways to calculate binomial coefficients:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-method-1-pascals-triangle-dynamic-programming---mathcalon2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-1-pascals-triangle-dynamic-programming---mathcalon2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 1: Pascal's Triangle (Dynamic Programming) - ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 57
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Binomial coefficients can be recursively calculated as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\t\\binom{n}{k} = \\binom{n - 1}{k - 1} + \\binom{n - 1}{k}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The intuition behind this is to fix an element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 48
      }, this), " in the set and choose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k − 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 74
      }, this), "\r\nelements from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n − 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 15
      }, this), " elements if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 35
      }, this), " is included in the set or choose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 72
      }, this), "\r\nelements from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n − 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 15
      }, this), " elements, otherwise."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The base cases for the recursion are:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 87,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\t\\binom{n}{0} = \\binom{n}{n}  = 1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "because there is always exactly one way to construct an empty subset and a\r\nsubset that contains all the elements."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This recursive formula is commonly known as ", _jsxDEV(_components.a, {
        href: "https://brilliant.org/wiki/pascals-triangle/",
        rel: "nofollow",
        target: "_blank",
        children: "Pascal's\r\nTriangle"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 45
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A naive implementation of this would use a recursive formula, like below:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Additionally, we can optimize this from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 41
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 63
      }, this), "\r\nusing ", _jsxDEV(_components.a, {
        href: "/gold/intro-dp",
        children: "dynamic programming"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 7
      }, this), " (DP) by caching the values of\r\nsmaller binomials to prevent recalculating the same values over and over again.\r\nThe code below shows a bottom-up implementation of this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-method-2-factorial-definition-modular-inverses---mathcalon--log-mod",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-2-factorial-definition-modular-inverses---mathcalon--log-mod",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 2: Factorial Definition (Modular Inverses) - ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n + \\log MOD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 57
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 256,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 8
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\times (n - 1) \\times (n - 2) \\times \\ldots 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 16
      }, this), ". ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 67
      }, this), "\r\nrepresents the number of permutations of a set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 51
      }, this), " elements. See ", _jsxDEV(_components.a, {
        href: "https://artofproblemsolving.com/wiki/index.php/Factorial",
        rel: "nofollow",
        target: "_blank",
        children: "this AoPS\r\nArticle"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 69
      }, this), " for more\r\ndetails."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Another way to calculate binomial coefficients is as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\t\\binom{n}{k} = \\frac{n!}{k!(n-k)!}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 265,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Recall that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n}{k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 13
      }, this), " also represents the number of ways to choose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 73
      }, this), "\r\nelements from a set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 24
      }, this), " elements. One strategy to get all such combinations\r\nis to go through all possible permutations of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 51
      }, this), " elements, and only pick\r\nthe first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 11
      }, this), " elements out of each permutation. There are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 59
      }, this), " ways to do so.\r\nHowever, note the the order of the elements inside and outside the subset does\r\nnot matter, so the result is divided by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(n − k)!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 50
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 269,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since these binomial coefficients are large, problems typically require us to\r\noutput the answer modulo a large prime ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 40
      }, this), " such as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9 + 7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 52
      }, this), ". Fortunately, we\r\ncan use ", _jsxDEV(_components.a, {
        href: "/gold/modular",
        children: "modular inverses"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 9
      }, this), " to divide ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 53
      }, this), " by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 61
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(n - k)!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 70
      }, this), "\r\nmodulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 8
      }, this), " for any prime ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 26
      }, this), ". Computing inverse factorials ", _jsxDEV(_components.strong, {
        children: "online"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 60
      }, this), " can be\r\nvery time-consuming. Instead, we can ", _jsxDEV(_components.strong, {
        children: "precompute"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 280,
        columnNumber: 38
      }, this), " all factorials in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 1
      }, this), " time and inverse factorials in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n + \\log MOD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 49
      }, this), ".\r\nFirst, we compute the modular inverse of the largest factorial using binary\r\nexponentiation. For the rest, we use the fact that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(n!)^{-1} \\equiv\r\n(n!)^{-1}\\times (n+1)^{-1} \\times (n+1) \\equiv ((n+1)!)^{-1}\\times (n+1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 52
      }, this), ". See\r\nthe code below for the implementation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---binomial-coefficients",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---binomial-coefficients",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Binomial Coefficients"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 422,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first method for calculating binomial factorials is too slow for this\r\nproblem since the constraints on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 34
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 42
      }, this), " are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 \\leq b \\leq a \\leq 10^6)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 50
      }, this), "\r\n(recall that the first implementation runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 426,
        columnNumber: 47
      }, this), " time\r\ncomplexity). However, we can use the second method to answer each of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 427,
        columnNumber: 74
      }, this), "\r\nqueries in constant time by precomputing factorials and their modular inverses."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 424,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-derangements",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-derangements",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Derangements"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 591,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The number of derangements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 31
      }, this), " numbers, expressed as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "!n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 57
      }, this), ", is the number of\r\npermutations such that no element appears in its original position. Informally,\r\nit is the number of ways ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 597,
        columnNumber: 26
      }, this), " hats can be returned to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 597,
        columnNumber: 54
      }, this), " people such that no\r\nperson receives their own hat."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 595,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-method-1-principle-of-inclusion-exclusion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-1-principle-of-inclusion-exclusion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 1: Principle of Inclusion-Exclusion"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 600,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose we had events ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1, E_2, \\dots, E_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 602,
        columnNumber: 23
      }, this), ", where event ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 602,
        columnNumber: 59
      }, this), " corresponds to\r\nperson ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 603,
        columnNumber: 8
      }, this), " receiving their own hat. We would like to calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n! - \\lvert E_1\r\n\\cup E_2 \\cup \\dots \\cup E_n \\rvert"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 603,
        columnNumber: 64
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 602,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We subtract from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 606,
        columnNumber: 18
      }, this), " the number of ways for each event to occur; that is,\r\nconsider the quantity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n! - \\lvert E_1 \\rvert - \\lvert E_2 \\rvert - \\dots -\r\n\\lvert E_n \\rvert"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 607,
        columnNumber: 23
      }, this), ". This undercounts, as we are subtracting cases where more\r\nthan one event occurs too many times. Specifically, for a permutation where at\r\nleast two events occur, we undercount by one. Thus, add back the number of ways\r\nfor two events to occur. We can continue this process for every size of subsets\r\nof indices. The expression is now of the form:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 606,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n! - \\lvert E_1 \\cup E_2 \\cup \\dots \\cup E_n \\rvert = \\sum_{k = 1}^n (-1)^k \\cdot (\\text{number of permutations with $k$ fixed points})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 614,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a set size of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 618,
        columnNumber: 19
      }, this), ", the number of permutations with at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 618,
        columnNumber: 65
      }, this), " indices can\r\nbe computed by choosing a set of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 619,
        columnNumber: 39
      }, this), " that are fixed, and permuting the\r\nother indices. In mathematical terms:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 618,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "{n \\choose k}(n-k)! = \\frac{n!}{k!(n-k)!}(n-k)! = \\frac{n!}{k!}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 622,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, the problem now becomes computing"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 626,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n!\\sum_{k=0}^n\\frac{(-1)^k}{k!}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 628,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "which can be done in linear time."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 632,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-method-2-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-2-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 2: Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 702,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose person 1 received person ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 704,
        columnNumber: 34
      }, this), "'s hat. There are two cases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 704,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 706,
          columnNumber: 14
        }, this), " receives person 1's hat, then the problem is reduced to a\r\nsubproblem of size ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n - 2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 707,
          columnNumber: 23
        }, this), ". There are ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 707,
          columnNumber: 42
        }, this), " possibilities for ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 707,
          columnNumber: 68
        }, this), " in this\r\ncase, so we add to the current answer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(n - 1)\\cdot !(n - 2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 708,
          columnNumber: 42
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 706,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 709,
          columnNumber: 14
        }, this), " does not receive person 1's hat, then we can reassign person\r\n1's hat to be person ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 710,
          columnNumber: 25
        }, this), "'s hat (if they received person 1's hat, then this\r\nwould become first case). Thus, this becomes a subproblems with size ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 711,
          columnNumber: 73
        }, this), ",\r\nare there ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n - 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 712,
          columnNumber: 14
        }, this), " ways to choose ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 712,
          columnNumber: 37
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 709,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 706,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, we have"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 714,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "!n = (n - 1)(!(n - 2) + !(n - 1))"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 716,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["which can be computed in linear time with DP. The base cases are that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "!0 = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 721,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "!1 = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 721,
        columnNumber: 14
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 720,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-stars-and-bars",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-stars-and-bars",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Stars and Bars"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 797,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)",
        rel: "nofollow",
        target: "_blank",
        children: "Stars and Bars"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 816,
        columnNumber: 1
      }, this), " is a useful method in combinatorics that involves\r\ngrouping indistinguishable objects into distinguishable boxes. The number of ways to put ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 817,
        columnNumber: 90
      }, this), " indistinguishable objects into\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 818,
        columnNumber: 1
      }, this), " distinguishable boxes is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 816,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n+k-1}{n}=\\binom{n+k-1}{k-1}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 820,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The second binomial coefficient from above can be derived from the property of binomial coefficients: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n}{k}=\\binom{n}{n-k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 824,
        columnNumber: 103
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 824,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's take a look at a particular example for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n=3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 826,
        columnNumber: 47
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 826,
        columnNumber: 57
      }, this), " that has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 826,
        columnNumber: 72
      }, this), " possibilities. As the name implies, the visualization is usually done with stars\r\nseparated into groups by bars:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 826,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "||\\bigstar \\bigstar \\bigstar  \\\\\r\n|\\bigstar |\\bigstar \\bigstar  \\\\\r\n|\\bigstar \\bigstar| \\bigstar  \\\\\r\n\\bigstar \\bigstar \\bigstar ||  \\\\"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 829,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As you've probably noticed, there can be empty boxes - when we put all the stars in the first or second box. There may be cases in\r\nwhich the all the boxes should be non-empty. In that case, the number of ways to put ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 837,
        columnNumber: 86
      }, this), " indistinguishable objects into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 837,
        columnNumber: 121
      }, this), "\r\ndistinguishable ", _jsxDEV(_components.strong, {
        children: "non-empty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 838,
        columnNumber: 17
      }, this), " boxes is: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n-1}{k-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 838,
        columnNumber: 41
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 836,
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
      lineNumber: 842,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For this problem we should think the other way around: let's say that the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 844,
        columnNumber: 75
      }, this), " colors from which we choose are in fact boxes and instead of choosing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 844,
        columnNumber: 149
      }, this), " marbles we put them\r\nin the respective boxes. The problem has the restriction that we should pick at least one marble of all kinds, which means in our new perspective that all the boxes should be\r\nnon-empty. Thus, the answer is obtained by the second formula: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{n-1}{k-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 846,
        columnNumber: 64
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 844,
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
      lineNumber: 848,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 850,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(T \\cdot K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 850,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 850,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-expected-value",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-expected-value",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Expected Value"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 897,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["An expected value is the theoretical mean of a probability distribution. A ", _jsxDEV(_components.strong, {
        children: "random variable"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 76
      }, this), " is used to represent a possible probability distribution. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 158
      }, this), " be a random variable and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P(X = x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 187
      }, this), " be the probability that the result of the random variable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 256
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 263
      }, this), ". Then, the expected value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 296
      }, this), ", denoted as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 312
      }, this), ", is"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 919,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_x x \\cdot P(X = x)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 920,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 924,
        columnNumber: 18
      }, this), " be the probability distribution of a fair 6-sided die. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P(X = x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 924,
        columnNumber: 77
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{6}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 924,
        columnNumber: 91
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq x \\leq 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 924,
        columnNumber: 109
      }, this), ". Using the formula, we get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X] = \\frac{21}{6} = \\frac{7}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 924,
        columnNumber: 154
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 924,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 928,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 5
      }, this), " represent the probability distribution of the maximum number of candies a child gets. To get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 102
      }, this), ", we need ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P(X = x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 118
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq x \\leq k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 133
      }, this), ". ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\frac{x}{k})^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 152
      }, this), " is the probability that each child gets at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 218
      }, this), " candies. To get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P(X = x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 238
      }, this), ", we must subtract out the probability that each child gets strictly less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 327
      }, this), " candies, which is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\frac{x - 1}{k})^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 349
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 930,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Therefore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P(X = x) = (\\frac{x}{k})^n - (\\frac{x - 1}{k})^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 932,
        columnNumber: 12
      }, this), ", allowing us to calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 932,
        columnNumber: 89
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 932,
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
      lineNumber: 934,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 936,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 936,
        columnNumber: 22
      }, this), " (assuming power runs in constant time)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 936,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-linearity-of-expectation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-linearity-of-expectation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Linearity of Expectation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Linearity of expectation states that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X + Y] = E[X] + E[Y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1107,
        columnNumber: 38
      }, this), " no matter if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1107,
        columnNumber: 76
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1107,
        columnNumber: 84
      }, this), " are independent of each other. For example, if on a certain day Alice goes to the gym with a probability of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{10}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1107,
        columnNumber: 196
      }, this), " and her husband Bob goes to the gym with a probability of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{3}{10}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1107,
        columnNumber: 269
      }, this), ", the expected number of visits to the gym on a certain day amongst the couple is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{10} + \\frac{3}{10} = \\frac{2}{5}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1107,
        columnNumber: 365
      }, this), ". This works even though the decisions of one person may affect the other."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1107,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This can be generalized to a sequence of random variables ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_1, X_2, \\dots, X_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1109,
        columnNumber: 59
      }, this), " and arbitrary constants ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_1, c_2, \\dots, c_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1109,
        columnNumber: 106
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E\\left[\\sum_{i = 1}^{n} c_iX_i \\right] = \\sum_{i = 1}^{n}c_i \\cdot E[ X_i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1110,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "While this may seem impossible at first glance given the amount of different sequences of operations, linearity of expectation allows us to break down the expected value into the sum of smaller parts."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can break this down by decomposing the initial random variable into the sums\r\nof various ", _jsxDEV(_components.em, {
        children: "indicator"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1121,
        columnNumber: 12
      }, this), " random variables.\r\nLet ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X_u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1122,
        columnNumber: 5
      }, this), " be a variable that indicates whether node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1122,
        columnNumber: 53
      }, this), " was explicitly marked for removal.\r\nSince it's basically a boolean, it can only take on either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1123,
        columnNumber: 60
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1123,
        columnNumber: 67
      }, this), ",\r\nwhich also means that the probability that it's ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1124,
        columnNumber: 49
      }, this), " is equal to its expected value."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, let's consider how an operation affects node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1126,
        columnNumber: 51
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Either it chooses a node that can't reach ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1127,
          columnNumber: 46
        }, this), ", and nothing happens as far as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1127,
          columnNumber: 81
        }, this), " is concerned."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 1127,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["It chooses ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1128,
          columnNumber: 15
        }, this), " itself, making the indicator variable ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1128,
          columnNumber: 57
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 1128,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["It chooses another node that can reach ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1129,
          columnNumber: 43
        }, this), ", making the indicator variable ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1129,
          columnNumber: 78
        }, this), ".\r\nSince all nodes have an equal chance of being chosen, the chance that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "X_u=1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1130,
          columnNumber: 71
        }, this), "\r\nis ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\frac{1}{a_u}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1131,
          columnNumber: 4
        }, this), ", where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1131,
          columnNumber: 27
        }, this), " is the number of nodes that can reach ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 1131,
          columnNumber: 71
        }, this), " ", _jsxDEV(_components.em, {
          children: ["including ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "u"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 1131,
            columnNumber: 86
          }, this), " itself"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 1131,
          columnNumber: 75
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 1129,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We put the expected values of all the indicator variables back together, giving us our final answer."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1133,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 1135,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1137,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1137,
        columnNumber: 22
      }, this), " using a naive DFS or BFS."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1137,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-expected-products",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-expected-products",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Expected Products"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1225,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Linearity of expectation deals with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X + Y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1227,
        columnNumber: 37
      }, this), ", but what about ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X \\cdot Y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1227,
        columnNumber: 64
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1227,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X \\cdot Y] = E[X] \\cdot E[Y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1229,
        columnNumber: 1
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1229,
        columnNumber: 37
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1229,
        columnNumber: 45
      }, this), " are independent from each other.\r\nWe can reconsider the example of a fair 6-sided die to show that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X^2] \\neq E[X]^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1230,
        columnNumber: 66
      }, this), ".\r\nWe know that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X] = \\frac{7}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1231,
        columnNumber: 14
      }, this), ", so ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X]^2 = \\frac{7}{2} \\cdot \\frac{7}{2} = \\frac{49}{4}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1231,
        columnNumber: 39
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1229,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "On the other hand,"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1233,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E[X^2] = \\sum_x x^2 \\cdot P(X = x) = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1234,
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
      lineNumber: 1238,
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
