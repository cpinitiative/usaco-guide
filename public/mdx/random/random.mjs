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
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Sometimes, we can use randomized algorithms to solve tasks quite difficult for deterministic algorithms."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---ghd",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---ghd",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Ghd"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Let the answer be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 19
      }, this), ". The key observation for this problem is that a randomly selected integer in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 100
      }, this), " has at least a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 119
      }, this), " chance to be divisible by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 159
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, we can repeat the following procedure ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 45
      }, this), " times to find the optimal answer with probability ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1-\\frac{1}{2^S}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 99
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 7
        }, this), " be a randomly selected value in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 43
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For each divisor ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d \\mid x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 20
        }, this), ", determine how many numbers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 59
        }, this), " divides into in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 79
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Take our answer to be the maximum of all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 44
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\geq \\frac{n}{2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 58
        }, this), " numbers in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 88
        }, this), " are divisible by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 109
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = 15"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 12
      }, this), ", and estimate the number of testcases in Codeforces to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "500"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 79
      }, this), ", our probability of success is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1-\\frac{1}{2^{15}})^{500} \\approx .984"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 116
      }, this), ", which is acceptable."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
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
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our approach has a time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}\\left(S \\cdot \\left(N\\log A + d(A)^2 + \\sqrt{A}\\right)\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 39
      }, this), "\r\n, with the log factor occurring due to GCD computation, and the sqrt due to factoring."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nconst int MAX_N = 1e6 + 5;\r\nconst int S = 15;\r\n\r\nmt19937 rng(chrono::steady_clock::now().time_since_epoch().count());\r\nlong long a[MAX_N], dv[MAX_N], cnt[MAX_N];\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tint n;\r\n\tcin >> n;\r\n\tfor (int i = 0; i < n; i++) cin >> a[i];\r\n\r\n\tlong long ans = 0;\r\n\tfor (int s = 0; s < S; s++) {\r\n\t\tlong long x = a[rng() % n];\r\n\t\tint ind = 0;\r\n\t\tfor (int d = 1; 1ll * d * d <= x; d++) {\r\n\t\t\tif (x % d == 0) {\r\n\t\t\t\tdv[ind++] = d;\r\n\t\t\t\tif (d * d != x) dv[ind++] = x / d;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tsort(dv, dv + ind);\r\n\t\tfill(cnt, cnt + ind, 0);\r\n\r\n\t\tfor (int i = 0; i < n; i++) cnt[lower_bound(dv, dv + ind, gcd(a[i], x)) - dv]++;\r\n\r\n\t\tfor (int i = 0; i < ind; i++)\r\n\t\t\tfor (int j = 0; j < i; j++)\r\n\t\t\t\tif (dv[i] % dv[j] == 0) cnt[j] += cnt[i];\r\n\r\n\t\tfor (int i = 0; i < ind; i++)\r\n\t\t\tif (cnt[i] + cnt[i] >= n) ans = max(ans, dv[i]);\r\n\t}\r\n\r\n\tcout << ans << '\\n';\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---count-on-a-tree-ii-striking-back",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---count-on-a-tree-ii-striking-back",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Count on a Tree II Striking Back"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Trying to solve this problem directly - explicitly finding values for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 71
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(c,d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 84
      }, this), " - is quite difficult. Supporting online queries of range count distinct along with updates is quite difficult to achieve on an array in reasonable complexity, and the fact that this problem occurs on a tree, with relative large bound for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\leq 500"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 331
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 344
      }, this), " makes it clear that solving for the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 395
      }, this), " is not intended."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead, we can attempt to use the property given in the statement that either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(a,b) \\geq 2f(c,d)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 80
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(c,d) \\geq 2f(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 105
      }, this), ". This inspires the following thought - if we map each color to a random number, the path minimum along the path with more distinct colors will ", _jsxDEV(_components.em, {
        children: "probably"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 270
      }, this), " be a smaller value."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We attempt to formalize this approach, and push the probability to an acceptable bound. Notably, the probability of failure is too high when we do the aforementioned random process once. To remedy this, we proceed as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["First we fix ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 16
        }, this), " to be the number of \"simulations\" that we run."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Next, for each possible color ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1 \\leq c \\leq n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 33
        }, this), ", we define ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v_{cj}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 62
        }, this), " as an independent random value within ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[0,1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 109
        }, this), ", for each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1 \\leq j \\leq S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 127
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Then, we construct ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 22
        }, this), " trees ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 32
        }, this), ", of the same structure as the initial tree, but with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v_{c_u i}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 91
        }, this), " marked on a node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 120
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For each query comparing ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a,b,c,d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 104,
          columnNumber: 28
        }, this), ", we output ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{Yes}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 104,
          columnNumber: 49
        }, this), " if"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i\\leq S} \\text{PathMin}(T_i,a,b) < \\sum_{i\\leq S} \\text{PathMin}(T_i,c,d)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{No}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 5
      }, this), " otherwise."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This approach should \"combine\" the probabilities in a way that makes the more likely event (the path with more distinct values achieving a smaller value) exponentially more likely. For some intuition on this, if we flip a coin weighted with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{2}{3}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 242
      }, this), " probability to be heads once, there is a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{1}{3}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 297
      }, this), " probability it comes up tails more than heads. However, if we flip it ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "99"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 381
      }, this), " times, the probability it comes up more tails more than heads becomes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{k=50}^{99} \\binom{99}{k} \\left(\\frac{1}{3}\\right)^k \\left(\\frac{2}{3}\\right)^{99-k} \\approx .000309"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Calculating the exact probability that our approach works is more difficult than the coin toss example, but follows the same principle of failure becoming exponentially more unlikely across several trials. We can use some assumptions (notably the central limit theorem) to calculate a rough approximation of the probability of success. Here is a graph of the probability of passing the problem given a certain value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 420
      }, this), ". Note that the probability of success remains is largely the same across different counts of distinct colors along the path."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/random-graph.png",
        alt: "Graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The graph was generated for the probability of answering ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4\\cdot10^4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 58
      }, this), " queries correctly in a row. This assumption is reasonable because the test data consists of only 1 large test case."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The python code used to generate the estimates is shown below:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-py",
        children: "import math\r\nfrom scipy.stats import norm\r\n\r\n\r\ndef clt_probability(k, S):\r\n\t\"\"\"\r\n\tComputes the probability that the sum of S minima from 2k random draws\r\n\tis less than the sum of S minima from k random draws, as approximated by the CLT.\r\n\r\n\tThe CLT approximation is given by:\r\n\r\n\t   P(B<A) ≈ Φ(  (sqrt(S) * [k/((k+1)(2k+1)]) ) / sqrt( k/((k+1)^2(k+2)) + 2k/((2k+1)^2(2k+2)) ) )\r\n\r\n\t:param k: The number of draws for each minimum:\r\n\t\t\t- The first group uses k draws.\r\n\t            \t- The second group uses 2k draws.\r\n\t:param S: The number of independent trials (sums over S minima).\r\n\t:return: The approximated probability that the sum of the minima\r\n\t\t from 2k draws is less than that from k draws.\r\n\t\"\"\"\r\n\tnumerator = math.sqrt(S) * k / ((k + 1) * (2 * k + 1))\r\n\r\n\tvar_X = k / (((k + 1) ** 2) * (k + 2))\r\n\tvar_Y = 2 * k / (((2 * k + 1) ** 2) * (2 * k + 2))\r\n\r\n\tdenominator = math.sqrt(var_X + var_Y)\r\n\r\n\tz_score = numerator / denominator\r\n\r\n\tprobability = norm.cdf(z_score)\r\n\r\n\treturn probability\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 124,
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
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By supporting path queries with HLD, we can solve this problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(S\\cdot(n + m\\log^2n))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 67
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"bits/stdc++.h\"\r\nusing namespace std;\r\n\r\nusing us = unsigned short;\r\n\r\nconst int MAX_N = 5e5 + 1;\r\nconst int S = 150;\r\nconst us INF = 65535;\r\n\r\nus va[MAX_N][S];\r\nint n, m, c[MAX_N];\r\n\r\nnamespace SGT {\r\nconst int L = 1 << 19;\r\nus seg[2 * L][S];\r\n\r\nvoid build() {\r\n\tfor (int i = L - 1; i; i--) {\r\n\t\tfor (int j = 0; j < S; j++) {\r\n\t\t\tseg[i][j] = min(seg[2 * i][j], seg[2 * i + 1][j]);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nvoid point_update(int idx, int v) {\r\n\tint pos = L + idx;\r\n\tfor (int j = 0; j < S; j++) { seg[pos][j] = va[v][j]; }\r\n\tpos /= 2;\r\n\twhile (pos) {\r\n\t\tint left = pos * 2, right = left + 1;\r\n\t\tfor (int j = 0; j < S; j++) { seg[pos][j] = min(seg[left][j], seg[right][j]); }\r\n\t\tpos /= 2;\r\n\t}\r\n}\r\n\r\ninline us range_min(int l, int r, int j) {\r\n\tus res = INF;\r\n\tfor (l += L, r += L + 1; l < r; l /= 2, r /= 2) {\r\n\t\tif (l & 1) res = min(res, seg[l++][j]);\r\n\t\tif (r & 1) res = min(res, seg[--r][j]);\r\n\t}\r\n\treturn res;\r\n}\r\n}  // namespace SGT\r\n\r\nnamespace HLD {\r\nconst int MAX_N = 5e5 + 1;\r\nint f[MAX_N], depth[MAX_N], heavy[MAX_N], head[MAX_N], pos[MAX_N], cp = 0;\r\nvector<int> adj[MAX_N];\r\n\r\nvoid clear(int n) {\r\n\tfor (int i = 0; i < n; i++) { adj[i].clear(); }\r\n\tcp = 0;\r\n}\r\n\r\nvoid add_edge(int u, int v) {\r\n\tadj[u].push_back(v);\r\n\tadj[v].push_back(u);\r\n}\r\n\r\nint dfs(int v) {\r\n\tint sz = 1, msz = 0;\r\n\tfor (int nxt : adj[v]) {\r\n\t\tif (nxt != f[v]) {\r\n\t\t\tf[nxt] = v;\r\n\t\t\tdepth[nxt] = depth[v] + 1;\r\n\r\n\t\t\tint csz = dfs(nxt);\r\n\t\t\tsz += csz;\r\n\t\t\tif (csz > msz) {\r\n\t\t\t\tmsz = csz;\r\n\t\t\t\theavy[v] = nxt;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn sz;\r\n}\r\n\r\nvoid decompose(int v, int h) {\r\n\thead[v] = h;\r\n\tpos[v] = cp++;\r\n\tfor (int j = 0; j < S; j++) SGT::seg[SGT::L + pos[v]][j] = va[c[v]][j];\r\n\tif (heavy[v] != -1) decompose(heavy[v], h);\r\n\tfor (int nxt : adj[v]) {\r\n\t\tif (nxt == f[v] || nxt == heavy[v]) continue;\r\n\t\tdecompose(nxt, nxt);\r\n\t}\r\n}\r\n\r\ninline void init() {\r\n\tmemset(heavy, -1, sizeof(heavy));\r\n\tdfs(0);\r\n\tdecompose(0, 0);\r\n}\r\n\r\nus path_min(int a, int b, int j) {\r\n\tus res = INF;\r\n\twhile (head[a] != head[b]) {\r\n\t\tif (depth[head[a]] > depth[head[b]]) swap(a, b);\r\n\t\tres = min(res, SGT::range_min(pos[head[b]], pos[b], j));\r\n\t\tb = f[head[b]];\r\n\t}\r\n\r\n\tif (depth[a] > depth[b]) swap(a, b);\r\n\tres = min(res, SGT::range_min(pos[a], pos[b], j));\r\n\treturn res;\r\n}\r\n}  // namespace HLD\r\n\r\nvoid solve() {\r\n\tcin >> n >> m;\r\n\tfor (int i = 0; i < n; i++) cin >> c[i];\r\n\tHLD::clear(n);\r\n\tfor (int i = 1; i < n; i++) {\r\n\t\tint u, v;\r\n\t\tcin >> u >> v;\r\n\t\tu--, v--;\r\n\t\tHLD::add_edge(u, v);\r\n\t}\r\n\r\n\tHLD::init();\r\n\tSGT::build();\r\n\r\n\tint cnt = 0;\r\n\tfor (int i = 0; i < m; i++) {\r\n\t\tint tp;\r\n\t\tcin >> tp;\r\n\t\tif (tp == 1) {\r\n\t\t\tint x, y;\r\n\t\t\tcin >> x >> y;\r\n\t\t\tx ^= cnt;\r\n\t\t\ty ^= cnt;\r\n\t\t\tSGT::point_update(HLD::pos[x - 1], y);\r\n\t\t} else {\r\n\t\t\tint a, b, cc, d;\r\n\t\t\tcin >> a >> b >> cc >> d;\r\n\t\t\ta ^= cnt, b ^= cnt, cc ^= cnt, d ^= cnt;\r\n\t\t\ta--, b--, cc--, d--;\r\n\r\n\t\t\tlong long c1 = 0, c2 = 0;\r\n\t\t\tfor (int j = 0; j < S; j++) {\r\n\t\t\t\tc1 += HLD::path_min(a, b, j);\r\n\t\t\t\tc2 += HLD::path_min(cc, d, j);\r\n\t\t\t}\r\n\r\n\t\t\tif (c1 < c2) {\r\n\t\t\t\tcnt++;\r\n\t\t\t\tcout << \"Yes\\n\";\r\n\t\t\t} else {\r\n\t\t\t\tcout << \"No\\n\";\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tmt19937 rng(1434);\r\n\tfor (int i = 1; i < MAX_N; i++) {\r\n\t\tfor (int j = 0; j < S; j++) { va[i][j] = rng() % (INF + 1); }\r\n\t}\r\n\r\n\tint test_num;\r\n\tcin >> test_num;\r\n\tfor (int t = 0; t < test_num; t++) { solve(); }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 163,
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
      lineNumber: 335,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Some of the listed problems do not require random algorithms as a solution, but can be made significantly easier through using random algorithms."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 337,
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
