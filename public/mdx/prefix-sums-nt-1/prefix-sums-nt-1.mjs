"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [_jsxDEV(_components.p, {
      children: "In this module we introduce how to compute prefix sums of certain number-theoretic functions in sublinear time. Here are some examples:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.p, {
      children: "This module (part 1) will focus on topics relating to the first two focus problems.\r\nPrime counting and related applications will be deferred to part 2."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-multiplicative-functions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-multiplicative-functions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Multiplicative Functions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The functions that we'd like to compute prefix sums over in the first two focus problems are both ", _jsxDEV(_components.strong, {
        children: "multiplicative"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 99
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-definition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-definition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Definition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If a function ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f: \\mathbb{Z}^+ \\rightarrow \\mathbb{C}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 18
        }, this), " maps positive integers\r\nto complex numbers, it's an arithmetic function."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 7
        }, this), " is an arithmetic function, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(1) = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 41
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(p\\cdot q) =\r\nf(p) \\cdot f(q)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 56
        }, this), " for any coprime positive integers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 55
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "q"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 60
        }, this), ", it's a\r\nmultiplicative function."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 7
        }, this), " is multiplicative and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(p \\cdot q)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 36
        }, this), " = ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f(p)\\cdot f(q)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 53
        }, this), " for any\r\npositive integers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 22
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "q"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 27
        }, this), ", it's a completely multiplicative function."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 4
      }, this), " is a multiplicative function, then for a positive integer\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = \\prod_{i=1}^{k} p_i^{k_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), ", we have"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) = \\prod_{i=1}^{k} f(p_i^{k_i})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 4
      }, this), " is a completely multiplicative function, then for a positive integer\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = \\prod_{i=1}^{k} p_i^{k_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), ", we have"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) = \\prod_{i=1}^{k} f(p_i)^{k_i}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-examples",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-examples",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Examples"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Common multiplicative functions are"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Divisor function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\sigma_k(n) = \\sum_{d|n} d^k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 21
        }, this), ", representing the sum of the\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 3
        }, this), "th powers of divisors of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 31
        }, this), ". Note that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\sigma_k(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 46
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "σ^k(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 64
        }, this), " are\r\ndifferent."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Divisor count function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\tau(n) = \\sigma_0(n) = \\sum_{d|n} 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 27
        }, this), ", representing\r\nthe count of divisors of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 28
        }, this), ", also denoted as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 49
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Divisor sum function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\sigma(n) = \\sigma_1(n) = \\sum_{d|n} d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 25
        }, this), ", representing\r\nthe sum of divisors of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 26
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Euler's totient function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\varphi(n) = \\sum_{i=1}^n [(n,i)=1] \\cdot 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 29
        }, this), ",\r\nrepresenting the count of positive integers less than or equal to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 53,
          columnNumber: 69
        }, this), " and\r\ncoprime to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 54,
          columnNumber: 14
        }, this), ". Additionally,\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\sum_{i=1}^n [(n,i)=1] \\cdot i = "
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 3
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\frac{n\\varphi(n) +\r\n[n=1]}{2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 39
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\varphi(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 16
        }, this), " is even."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Möbius function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mu(n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 57,
          columnNumber: 20
        }, this), ", serving as the multiplicative inverse of the\r\nidentity function in Dirichlet convolution, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mu(1) = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 47
        }, this), ", for a square-free\r\nnumber ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n = \\prod_{i=1}^t p_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 10
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mu(n) = (-1)^t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 35
        }, this), ", and for a number with\r\nsquare factors, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mu(n) = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 60,
          columnNumber: 19
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Unit function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "e(n) = [n=1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 18
        }, this), ", serving as the identity element in Dirichlet\r\nconvolution, completely multiplicative."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Constant function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "I(n) = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 63,
          columnNumber: 22
        }, this), ", completely multiplicative."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Identity function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "id(n) = n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 22
        }, this), ", completely multiplicative."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Power function: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "id^k(n) = n^k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 19
        }, this), ", completely multiplicative."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The two classic formulas regarding the Möbius function and the Euler function\r\nare:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "[n=1] = \\sum_{d|n} \\mu(d)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 70,
          columnNumber: 3
        }, this), ", Interpreting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mu(d)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 70,
          columnNumber: 47
        }, this), " as the coefficients of\r\nthe inclusion-exclusion principle proves it."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "n = \\sum_{d|n} \\varphi(d)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 3
        }, this), ". To prove it, we can count the number of occurrences of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\frac{1}{n}(1 \\leq i \\leq n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 91
        }, this), " in its simplest fraction form."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As this module is supposed to serve as a gentle introduction to this topic,\r\nwe will usually describe only the simplest solution that passes the given constraints.\r\nSolutions with asymptotically better time complexities can be found in blogs\r\nsuch as the following, though keep in mind that they might not be much\r\nfaster under the given constraints."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-warm-up",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-warm-up",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Warm-Up"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's start with introducing a set of numbers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 47
      }, this), " we often work with when computing\r\nprefix sums of multiplicative functions up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 47
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Exercise for the reader: How large can this set be?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["An important property of this set is that if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x\\in Q_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 46
      }, this), " then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q_x \\subseteq Q_N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 62
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 106,
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
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---sum-of-divisors",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---sum-of-divisors",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Sum of Divisors"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Hint: The time complexity is the same as for the previous problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 166,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dirichlet-convolution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dirichlet-convolution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dirichlet Convolution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 245,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "Dirichlet convolution"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 5
      }, this), " of number-theoretic functions ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 61
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 69
      }, this), " is defined\r\nas ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(f*g)(n) = \\sum_{d|n} f(d) \\cdot g(\\frac{n}{d})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 4
      }, this), ". Dirichlet convolution\r\nsatisfies commutativity, associativity, and distributivity with respect to\r\naddition. There exists an identity function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e(n) = [n=1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 45
      }, this), " such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f*e = f = e*f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 1
      }, this), "。If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 28
      }, this), " are multiplicative functions, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f*g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 67
      }, this), " is also\r\nmultiplicative."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A common technique with Dirichlet convolution involves dealing with the\r\nconvolution of a function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 27
      }, this), " and the identity function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "I"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 57
      }, this), ". For\r\nexample, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = \\prod_{i=1}^{t} p_i^{k_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g=f* I"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 49
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(n) = \\sum_{d|n} f(d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 64
      }, this), ".\r\nIf ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 4
      }, this), " is multiplicative, then we have"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 256,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(n) = \\prod_{i=1}^{t} \\sum_{j=0}^{k_i} f(p_i^j)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 261,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we wish to recover ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 23
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 32
      }, this), ", we can write ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g* \\mu = (f* I)* \\mu=f* (I* \\mu)=f* e=f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 50
      }, this), ". That is, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) = \\sum_{d|n} g(d) \\cdot \\mu\\left(\\frac{n}{d}\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 102
      }, this), ". This is known as ", _jsxDEV(_components.strong, {
        children: "Möbius inversion"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 179
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 265,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-example---dirichlet-convolution-and-prefix-sums",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---dirichlet-convolution-and-prefix-sums",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Dirichlet Convolution and Prefix Sums"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 267,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{f_x | x \\in Q_N\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{g_x | x \\in Q_N\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 33
      }, this), ", then if we define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h=f*g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 74
      }, this), ",\r\nwe can compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{h_x | x \\in Q_N\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 16
      }, this), " in sublinear time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 274,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
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
      lineNumber: 288,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-example---dirichlet-inverse-and-prefix-sums",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---dirichlet-inverse-and-prefix-sums",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Dirichlet Inverse and Prefix Sums"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 383,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose instead of finding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h=f*g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 28
      }, this), " given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 50
      }, this), ", we'd like to recover ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 76
      }, this), "\r\ngiven ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 385,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 390,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-implementation-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 400,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---totient-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---totient-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Totient Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 496,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 500,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 510,
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
      lineNumber: 609,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first two problems are from the first resource."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 611,
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
