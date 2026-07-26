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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-euclidean-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-euclidean-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Euclidean Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The original Euclidean Algorithm computes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 43
      }, this), " and looks like this:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-extended-euclidean-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-extended-euclidean-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Extended Euclidean Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The extended Euclidean algorithm computes integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 52
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 60
      }, this), " such that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "ax+by=\\gcd(a,b)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can slightly modify the version of the Euclidean algorithm given above to\r\nreturn more information!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-recursive-version",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-recursive-version",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Recursive Version"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 174,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "becomes"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The pair will equal to the first two returned elements of the array in the\r\niterative version. Looking at this version, we can prove by induction that when\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 9
      }, this), " are distinct positive integers, the returned pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x,y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 63
      }, this), " will\r\nsatisfy ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|x|\\le \\frac{b}{2\\gcd(a,b)}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 9
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|y|\\le \\frac{a}{2\\gcd(a,b)}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 43
      }, this), ".\r\nFurthermore, there can only exist one pair that satisfies these conditions!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 254,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that this works when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a,b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 27
      }, this), " are quite large (say, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\approx 2^{60}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 55
      }, this), ") and we\r\nwon't wind up with overflow issues."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-application---modular-inverse",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application---modular-inverse",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application - Modular Inverse"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["It seems that when multiplication / division is involved in this problem,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n^2 < \\texttt{LLONG\\_MAX}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 276,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 275,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-application---chinese-remainder-theorem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application---chinese-remainder-theorem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application - Chinese Remainder Theorem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 318,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-for-two-congruences",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-for-two-congruences",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "For Two Congruences"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 345,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
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
      lineNumber: 347,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Chinese_remainder_theorem",
        rel: "nofollow",
        target: "_blank",
        children: "Chinese Remainder Theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 349,
        columnNumber: 5
      }, this), " - also referred to as CRT - yields a unique\r\nsolution to a system of simultaneous modular congruences with pairwise coprime moduli. More specifically, CRT determines a number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 131
      }, this), " that\r\nwhen divided by the given divisors leaves the given remainders. Mathematically, it solves the following system of modular congruences:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 349,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\equiv a_1 \\pmod{m_1} \\\\\r\nx \\equiv a_2 \\pmod{m_2} \\\\\r\nx \\equiv a_3 \\pmod{m_3} \\\\\r\n\\vdots\\\\\r\nx \\equiv a_k \\pmod{m_k} \\\\\r\n\\tag{1}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 353,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The above system has exactly one solution modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 363,
        columnNumber: 50
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 363,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll focus on the particular case for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 365,
        columnNumber: 40
      }, this), "; for two coprime moduli:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 365,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\equiv a_1 \\pmod{m_1} \\\\\r\nx \\equiv a_2 \\pmod{m_2} \\\\\r\n\\tag{2}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 367,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 373,
          columnNumber: 7
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n_2 "
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 373,
          columnNumber: 17
        }, this), "be the modular inverse of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 373,
          columnNumber: 49
        }, this), " modulo ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 373,
          columnNumber: 62
        }, this), " and the modular inverse of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 373,
          columnNumber: 95
        }, this), "\r\nmodulo ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 374,
          columnNumber: 8
        }, this), ", respectively, thus the properties hold: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n_1 \\cdot m_1 \\equiv 1 \\pmod{m_2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 374,
          columnNumber: 55
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n_2 \\cdot m_2 \\equiv 1 \\pmod{m_1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 374,
          columnNumber: 95
        }, this), ".\r\nIt's worth mentioning that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 375,
          columnNumber: 28
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 375,
          columnNumber: 38
        }, this), " always exists because ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\gcd(m_1,m_2)=1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 375,
          columnNumber: 66
        }, this), ". We can define a solution ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 375,
          columnNumber: 110
        }, this), " as:"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 373,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 373,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = a_1 \\cdot m_2 \\cdot n_2 + a_2 \\cdot m_1 \\cdot n_1 \\pmod{m_1\\cdot m_2}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 377,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It satisfies both equations:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 381,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Modulo ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 382,
          columnNumber: 10
        }, this), " we have ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\equiv a_1 \\cdot m_2 \\cdot n_2 \\pmod{m_1} \\iff x \\equiv a_1 \\pmod{m_1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 382,
          columnNumber: 24
        }, this), " since ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_2 \\cdot n_2 \\equiv 1 \\pmod{m_1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 382,
          columnNumber: 105
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 382,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Modulo ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 383,
          columnNumber: 10
        }, this), " we have ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\equiv a_2 \\cdot m_1 \\cdot n_1 \\pmod{m_2} \\iff x \\equiv a_2 \\pmod{m_2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 383,
          columnNumber: 24
        }, this), " since ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_1 \\cdot n_1 \\equiv 1 \\pmod{m_2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 383,
          columnNumber: 105
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 382,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now that we have a solution ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\pmod{M}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 29
      }, this), " it only remains to show that it is indeed the only valid\r\nsolution modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1 \\cdot m_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 17
      }, this), ". Assuming that there is a different valid solution ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 84
      }, this), " we have: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1 | y-x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 97
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_2 | y-x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 110
      }, this), ",\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_3 | y-x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 1
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ldots"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 14
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_k | y-x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 24
      }, this), ", then it follows that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1 \\cdot m_2 \\cdots m_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 58
      }, this), " divides ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y-x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 93
      }, this), ", since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_1, m_2, \\ldots, m_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 106
      }, this), " are relatively\r\nprime. This means that: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\equiv x \\pmod{m_1 \\cdot m_2 \\cdots m_k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 388,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 385,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
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
      lineNumber: 390,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 392,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(T \\cdot \\log{MN})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 392,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 392,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-for-several-congruences",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-for-several-congruences",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "For Several Congruences"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 454,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using the same notations as in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 32
      }, this), ", consider ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_i = \\frac{M}{m_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 48
      }, this), " - the product of all moduli excluding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 108
      }, this), " - and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_i' \\equiv n_i^{-1} \\pmod{m_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 120
      }, this), ".\r\nBy similar arguments as before, the unique solution mod ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 457,
        columnNumber: 57
      }, this), " is:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 456,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = \\sum_{i=1}^{n}{a_i \\cdot n_i \\cdot n_i'} \\pmod{M}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 459,
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
