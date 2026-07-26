"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
    children: [_jsxDEV(_components.p, {
      children: ["If you've never encountered any ", _jsxDEV(_components.strong, {
        children: "number theory"
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
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-prime-factorization",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-prime-factorization",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Prime Factorization"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A positive integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 20
      }, this), " is called a ", _jsxDEV(_components.strong, {
        children: "divisor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 36
      }, this), " or a ", _jsxDEV(_components.strong, {
        children: "factor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 53
      }, this), " of a non-negative\r\ninteger ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 9
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 16
      }, this), " is divisible by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 36
      }, this), ", which means that there exists some\r\ninteger ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 9
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b = ka"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 23
      }, this), ". An integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n > 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 44
      }, this), " is ", _jsxDEV(_components.strong, {
        children: "prime"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 55
      }, this), " if its only\r\ndivisors are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 14
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 22
      }, this), ". Integers greater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 49
      }, this), " that are not prime are\r\n", _jsxDEV(_components.strong, {
        children: "composite"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Every positive integer has a unique ", _jsxDEV(_components.strong, {
        children: "prime factorization"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 37
      }, this), ": a way of\r\ndecomposing it into a product of primes, as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = {p_1}^{a_1} {p_2}^{a_2} \\cdots {p_k}^{a_k}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 11
      }, this), " are distinct primes and the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 45
      }, this), " are positive integers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, we will discuss how to find the prime factorization of any positive\r\ninteger."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This algorithm runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 24
      }, this), " time, because the for loop checks\r\ndivisibility for at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sqrt{n}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 26
      }, this), " values. Even though there is a while loop\r\ninside the for loop, dividing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 31
      }, this), " by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 38
      }, this), " quickly reduces the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 71
      }, this), ", which\r\nmeans that the outer for loop runs less iterations, which actually speeds up the\r\ncode."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's look at an example of how this algorithm works, for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = 252"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 59
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["At this point, the for loop terminates, because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 153,
        columnNumber: 49
      }, this), " is already 3 which is\r\ngreater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lfloor \\sqrt{7} \\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 14
      }, this), ". In the last step, we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 67
      }, this), " to the\r\nlist of factors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 17
      }, this), ", because it otherwise won't be added, for a final prime\r\nfactorization of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{2, 2, 3, 3, 7\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 156,
        columnNumber: 18
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 153,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---counting-divisors",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---counting-divisors",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Counting Divisors"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 160,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The most straightforward solution is just to do what the problem asks us to do -\r\nfor each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 10
      }, this), ", find the number of divisors of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 46
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 53
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\sqrt x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 23
      }, this), " time, which is just fast enough\r\nto get AC. However, we can actually speed this up to get an\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((x + n) \\log x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 243,
        columnNumber: 1
      }, this), " solution!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 241,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, let's discuss an important property of the prime factorization. Consider:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 245,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = {p_1}^{a_1} {p_2}^{a_2} \\cdots {p_k}^{a_k}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then the number of divisors of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 32
      }, this), " is simply\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a_1 + 1) \\cdot (a_2 + 1) \\cdots (a_k + 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Why is this true? The exponent of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 254,
        columnNumber: 35
      }, this), " in any divisor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 254,
        columnNumber: 59
      }, this), " must be in the\r\nrange ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, a_i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 7
      }, this), " and each different exponent results in a different set of\r\ndivisors, so each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 19
      }, this), " contributes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 37
      }, this), " to the product."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 254,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 1
      }, this), " can have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 14
      }, this), " distinct prime factors, so if we can find the\r\nprime factorization of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 24
      }, this), " efficiently, we can use it with the above property to\r\nanswer queries in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 19
      }, this), " time instead of the previous\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 1
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here's how we find the prime factorization of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 47
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 54
      }, this), " time\r\nwith ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(x \\log x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 6
      }, this), " preprocessing:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["For each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k \\leq 10^6"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 266,
          columnNumber: 13
        }, this), ", find any prime number that divides ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 266,
          columnNumber: 63
        }, this), ".\r\nTo find this, we can use the\r\n", _jsxDEV(_components.a, {
          href: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes",
          rel: "nofollow",
          target: "_blank",
          children: "Sieve of Eratosthenes"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 268,
          columnNumber: 4
        }, this), "\r\nwhich runs in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(n \\log n)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 269,
          columnNumber: 18
        }, this), ", where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 269,
          columnNumber: 49
        }, this), " is the larger numbers we consider.\r\nThere's also a version of the sieve that runs in\r\n", _jsxDEV(_components.a, {
          href: "https://codeforces.com/blog/entry/54090",
          rel: "nofollow",
          target: "_blank",
          children: "linear time"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 271,
          columnNumber: 4
        }, this), ", but we won't be needing it."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["We can find the prime factorization of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 272,
          columnNumber: 43
        }, this), " by repeatedly dividing\r\nit by the prime numbers we calculated earlier until ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 273,
          columnNumber: 56
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Using this method gives us the following code:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 275,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-gcd--lcm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-gcd--lcm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "GCD & LCM"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 402,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-gcd",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-gcd",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "GCD"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 404,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "greatest common divisor (GCD)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 406,
        columnNumber: 5
      }, this), " of two integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 406,
        columnNumber: 55
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 406,
        columnNumber: 63
      }, this), " is the largest\r\ninteger that is a factor of both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 34
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 42
      }, this), ". In order to find the GCD of two\r\n", _jsxDEV(_components.em, {
        children: "non-negative"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 408,
        columnNumber: 1
      }, this), " integers, we use the ", _jsxDEV(_components.strong, {
        children: "Euclidean Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 408,
        columnNumber: 37
      }, this), ", which is as\r\nfollows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 406,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(a, b) = \\begin{cases}\r\n\t a & b = 0 \\\\\r\n\t \\gcd(b, a \\bmod b) & b \\neq 0\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 411,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This algorithm can be implemented with a recursive function as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 418,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This function runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log ab)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 455,
        columnNumber: 23
      }, this), " time because\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a\\le b \\implies b\\pmod a <\\frac{b}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 455,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The worst-case scenario for the Euclidean algorithm is when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 458,
        columnNumber: 61
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 458,
        columnNumber: 69
      }, this), " are\r\nconsecutive Fibonacci numbers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 459,
        columnNumber: 31
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F_{n + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 459,
        columnNumber: 41
      }, this), ". In\r\nthis case, the algorithm will calculate that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(F_n, F_{n + 1}) = \\gcd(F_{n - 1}, F_n) = \\dots = \\gcd(0, F_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 1
      }, this), ".\r\nThis takes a total of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 462,
        columnNumber: 23
      }, this), " calls, which is proportional\r\nto ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log \\left(F_n F_{n+1}\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 463,
        columnNumber: 4
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 458,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-lcm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lcm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "LCM"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 469,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "least common multiple (LCM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 5
      }, this), " of two integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 53
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 61
      }, this), " is the smallest\r\ninteger divisible by both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 472,
        columnNumber: 27
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 472,
        columnNumber: 35
      }, this), ". The LCM can be calculated with the GCD\r\nusing this property:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 471,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\operatorname{lcm}(a, b) = \\frac{a \\cdot b}{\\gcd(a, b)}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 475,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Also, these two functions are associative, meaning that\r\nif we want to take the GCD or LCM of more than two elements, we can do so two at\r\na time, in any order. For example,"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 489,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(a_1, a_2, a_3, a_4) = \\gcd(a_1, \\gcd(a_2, \\gcd(a_3, a_4)))."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 493,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-eulers-totient-function",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-eulers-totient-function",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Euler's Totient Function"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 497,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-properties",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-properties",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Properties"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 519,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Euler's totient function - written using phi ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 46
      }, this), " -  counts the number of positive integers in the interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1,n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 114
      }, this), " which are coprime to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 143
      }, this), ". Two numbers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 160
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 521,
        columnNumber: 168
      }, this), "\r\nare coprime if their greatest common divisor is equal to 1 i.e. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "gcd(a,b)=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 522,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 521,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here are the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 524,
        columnNumber: 24
      }, this), " for the first 20 numbers:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 524,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The totient function is ", _jsxDEV(_components.strong, {
        children: "multiplicative"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 25
      }, this), " meaning that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(nm)=\\phi(n) \\cdot \\phi(m)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 57
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 97
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 105
      }, this), " are coprime - ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "gcd(n, m)=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 123
      }, this), ". For example ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(15)=\\phi(3 \\cdot 5)=\\phi(3) \\cdot \\phi(5) = 2 \\cdot 4 = 8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 150
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 534,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's take a look at some edge cases for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 536,
        columnNumber: 42
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 536,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If n is a prime number then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\phi(n)=n-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 537,
          columnNumber: 31
        }, this), " because ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "gcd(n, x)=1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 537,
          columnNumber: 53
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1 \\leq x < n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 537,
          columnNumber: 75
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 537,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If n is a power of a prime number, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n=p^q"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 538,
          columnNumber: 38
        }, this), " where p is a prime number and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1 \\leq q"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 538,
          columnNumber: 76
        }, this), " then", _jsxDEV(_components.br, {}, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 538,
          columnNumber: 91
        }, this), "\nthere are exactly ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p^{q-1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 539,
          columnNumber: 21
        }, this), " numbers divisible by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 539,
          columnNumber: 52
        }, this), ", so\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\phi(p^q)=p^{q} - p^{q-1} = p^{q-1}(p - 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 540,
          columnNumber: 3
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 538,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 537,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using the multiplicative property and the last edge case we can compute the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 542,
        columnNumber: 86
      }, this), " from the factorization of number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 542,
        columnNumber: 129
      }, this), ".\r\nLet the factorization be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n=p_1^{q_1} \\cdot p_2^{q_2} \\cdot \\ldots \\cdot p_k^{q_k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 543,
        columnNumber: 26
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 543,
        columnNumber: 91
      }, this), " is a prime factor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 543,
        columnNumber: 118
      }, this), ", then:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 542,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(n)=\\phi(p_1^{q_1}) \\cdot \\phi(p_2^{q_2}) \\cdot \\ldots \\cdot \\phi(p_k^{q_k}) = p_1^{q_1-1}(p_1 - 1) \\cdot p_2^{q_2-1}(p_2 - 1) \\cdot \\ldots \\cdot p_k^{q_k-1}(q_k - 1)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 545,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Below is an implementation for factorization in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 549,
        columnNumber: 49
      }, this), ". It can be a little bit tricky to understand why we subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans/p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 549,
        columnNumber: 134
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 549,
        columnNumber: 147
      }, this), ". For example\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans=p^q \\cdot x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 1
      }, this), " ,where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 26
      }, this), " is a prime factor and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 52
      }, this), " is the rest of the prime factorization. By subtracting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{ans}{p}=p^{q-1} \\cdot x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 111
      }, this), " we end up with:\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p^q \\cdot x - p^{q-1} \\cdot x = p^{q-1} \\cdot x \\cdot (p - 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 551,
        columnNumber: 1
      }, this), " which is exactly the form of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 551,
        columnNumber: 94
      }, this), " described a few lines above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 549,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Usually in problems we need to precompute the totient of all numbers between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 611,
        columnNumber: 78
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 611,
        columnNumber: 86
      }, this), ", then factorizing is not efficient. The idea is the same as the\r\nSieve of Eratosthenes. Since it's almost the same with the Sieve of Eratosthenes the time complexity will be: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 612,
        columnNumber: 111
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 611,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 665,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We are asked to compute the sum of GCDs for all pairs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 667,
        columnNumber: 55
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\le i < j \\le n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 667,
        columnNumber: 74
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 667,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=1}^{n} \\sum_{j=i+1}^{n} \\gcd(i,j)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 669,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's define a helper function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 673,
        columnNumber: 32
      }, this), " which computes the sum of GCDs for a fixed second element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 673,
        columnNumber: 97
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 673,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) = \\sum_{i=1}^{n} \\gcd(i, n)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 675,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This function sums ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(i, n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 20
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\le n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 41
      }, this), ". The terms where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(i, n) = d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 68
      }, this), " are exactly those where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 109
      }, this), " divides ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 121
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(\\frac{i}{d}, \\frac{n}{d}) = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 129
      }, this), ". The number of such integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 195
      }, this), " is given by Euler's totient function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\phi(\\frac{n}{d})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 236
      }, this), ". Thus, we can rewrite ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 278
      }, this), " as a sum over the divisors of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 679,
        columnNumber: 315
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 679,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n) = \\sum_{d|n} d \\cdot \\phi\\left(\\frac{n}{d}\\right)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 681,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 16
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 31
      }, this), " up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 41
      }, this), " efficiently. Instead of factoring every number, we iterate through every possible divisor ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 138
      }, this), " and update all its multiples ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 171
      }, this), ". For a fixed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 188
      }, this), ", we add the contribution ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\cdot \\phi(\\frac{j}{i})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 217
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 248
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 263
      }, this), " that are multiples of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 289
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 685,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, the problem asks for pairs where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 687,
        columnNumber: 43
      }, this), ". The value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 687,
        columnNumber: 62
      }, this), " includes the case ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 687,
        columnNumber: 87
      }, this), " (where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\gcd(j, j) = j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 687,
        columnNumber: 100
      }, this), "), which we must exclude. The answer for a given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 687,
        columnNumber: 165
      }, this), " is the prefix sum of these adjusted values:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 687,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{ans}[n] = \\sum_{j=1}^{n} (f(j) - j)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 689,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The total complexity of this precomputation is bounded by the harmonic series sum:\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=1}^{N} \\frac{N}{i} \\approx N \\ln N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 694,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 693,
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
      lineNumber: 736,
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
