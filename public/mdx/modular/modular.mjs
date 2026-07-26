"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
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
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In ", _jsxDEV(_components.strong, {
        children: "modular arithmetic"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 4
      }, this), ", instead of working with integers themselves, we work\r\nwith their remainders when divided by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 39
      }, this), ". We call this taking modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 71
      }, this), ". For\r\nexample, if we take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m = 23"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 21
      }, this), ", then instead of working with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = 247"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 60
      }, this), ", we use\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\bmod 23 = 17"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), ". Usually, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 29
      }, this), " will be a large prime, given in the problem; the\r\ntwo most common values are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9 + 7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "998\\,244\\,353=119\\cdot 2^{23}+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 43
      }, this), ".\r\nModular arithmetic is used to avoid dealing with numbers that overflow built-in\r\ndata types, because we can take remainders, according to the following formulas:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a+b) \\bmod m = (a \\bmod m + b \\bmod m) \\bmod m"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a-b) \\bmod m = (a \\bmod m - b \\bmod m) \\bmod m"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a \\cdot b) \\pmod{m} = ((a \\bmod m) \\cdot (b \\bmod m)) \\bmod m"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "a^b \\bmod {m} = (a \\bmod m)^b \\bmod m"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-modular-exponentiation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-modular-exponentiation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Modular Exponentiation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Binary exponentiation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 1
      }, this), " can be used to efficiently compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ n \\mod m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 62
      }, this), ". To\r\ndo this, let's break down ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 27
      }, this), " into binary components. For example,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5 ^ {10}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 1
      }, this), " = ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5 ^ {1010_2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 14
      }, this), " = ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5 ^ 8 \\cdot 5 ^ 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 31
      }, this), ". Then, if we know ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 69
      }, this), " for\r\nall ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 5
      }, this), " which are powers of two (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 34
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 43
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 52
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\dots"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 61
      }, this), " ,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ {2^{\\lfloor{\\log_2n} \\rfloor}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 1
      }, this), ", we can compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x ^ n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 54
      }, this), " in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To deal with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 14
      }, this), ", observe that modulo doesn't affect multiplications, so we can\r\ndirectly implement the above \"binary exponentiation\" algorithm while adding a\r\nline to take results ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pmod m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---exponentiation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---exponentiation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Exponentiation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-modular-inverse",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-modular-inverse",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Modular Inverse"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "modular inverse"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 5
      }, this), " is the equivalent of the reciprocal in real-number\r\narithmetic; to divide ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 23
      }, this), " by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 30
      }, this), ", multiply ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 44
      }, this), " by the modular inverse of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 74
      }, this), ".\r\nWe'll only consider prime moduli ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 34
      }, this), " here."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, the inverse of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 29
      }, this), " modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p=10^9+7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 40
      }, this), " is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=\\frac{p+1}{2}=5\\cdot 10^8+4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 1
      }, this), ". This means that for any integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 66
      }, this), ","]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2x)\\cdot i\\equiv x\\cdot (2i)\\equiv x\\pmod{10^9+7}."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10i\\equiv 5\\pmod{10^9+7}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 14
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 197,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-exponentiation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-exponentiation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Exponentiation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 226,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Fermat%27s_little_theorem",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.strong, {
          children: "Fermat's Little Theorem"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 228,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 1
      }, this), "\r\n(not to be confused with Fermat's ", _jsxDEV(_components.strong, {
        children: "Last"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 229,
        columnNumber: 35
      }, this), " Theorem) states that all integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 229,
        columnNumber: 78
      }, this), "\r\nnot divisible by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 230,
        columnNumber: 18
      }, this), " satisfy ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a^{p - 1} \\equiv 1 \\pmod{p}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 230,
        columnNumber: 30
      }, this), ". Consequently,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a^{p-2} \\cdot a \\equiv 1 \\pmod{p}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 1
      }, this), ". Therefore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a^{p - 2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 49
      }, this), " is a modular inverse\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 4
      }, this), " modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-euclidean-division",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-euclidean-division",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Euclidean Division"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 275,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can also find modular inverses through Euclidean Division.\r\nGiven the prime modulus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m > a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 25
      }, this), " we have:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 277,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "m = k \\cdot a + r"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 280,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = \\lfloor \\frac{m}{a} \\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r = m \\mod a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 45
      }, this), ". Then:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 284,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\n         & 0 = k \\cdot a + r \\mod m        \\\\\r\n  \\iff{} & r = -k \\cdot a \\mod m           \\\\\r\n  \\iff{} & r \\cdot a^{-1} = -k \\mod m      \\\\\r\n  \\iff{} & a^{-1} = -k \\cdot r^{-1} \\mod m\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here is a short recursive implementation of the above formula:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 295,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The advantage of this approach is that we can precompute the inverse modular of numbers in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, MOD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 324,
        columnNumber: 102
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(MOD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 324,
        columnNumber: 116
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 324,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Because it takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log p)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 354,
        columnNumber: 18
      }, this), " time to compute a modular inverse modulo\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 355,
        columnNumber: 1
      }, this), ", frequent use of division inside a loop can significantly increase the\r\nrunning time of a program. If the modular inverse of the same number(s) is/are\r\nbeing used many times, it is a good idea to precalculate it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 354,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Also, one must always ensure that they do not attempt to divide by 0. Be aware\r\nthat after applying modulo, a nonzero number can become zero, so be very careful\r\nwhen dividing by non-constant values."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 359,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
