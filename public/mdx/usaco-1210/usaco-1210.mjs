"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://usaco.org/current/data/sol_prob2_gold_feb22.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Python, Java)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 17
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 26
      }, this), " because we will always get the sample test case and add it to our final answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 5
      }, this), " be the expected value after at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 47
      }, this), " submissions. We are trying to find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 86
      }, this), ". To get the expected value of the final submission, we can find the relation between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 177
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 187
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To do this we can find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 24
      }, this), " in terms of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x -1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 57
      }, this), " which is the probability of getting exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 107
      }, this), " test cases."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 7
      }, this), " submissions, you expect to get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 44
      }, this), " test cases. There are three posibilites if you decide to resubmit."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Case 1: If you get less test cases than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 41
      }, this), ", you don't want to resubmit."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Case 2: If you get more test cases than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 41
      }, this), ", you do want to resubmit."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Case 3: If you get the same number of test cases as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 53
      }, this), ", it doesn't matter if you resubmit. In this case it wouldn't hurt to resubmit or stay the same so we can combine this with Case 1 (or Case 2)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The probability that you get less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 52
      }, this), " test cases is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\sum_{i=0}}^{E_{x - 1}} p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 76
      }, this), ". We can multiply this by the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 136
      }, this), " to get the expected value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 175
      }, this), " if we stop before the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 203
      }, this), "th submission and we get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1} \\cdot {\\sum_{i=0}}^{E_{x - 1}} p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 231
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The probability that you get more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 40
      }, this), " test cases is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\sum_{i=\\lfloor E_{x-1} \\rfloor + 1}}^T p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 64
      }, this), ". The expected value of getting more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 152
      }, this), " test cases is the sum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 187
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\lfloor E_{x-1} \\rfloor + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 196
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 231
      }, this), " of the probability of getting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 265
      }, this), " test cases multiplied by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 294
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\sum_{\\lfloor E_{x-1} \\rfloor + 1}}^T p_i i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 301
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In addition, these formulas for both cases can help us mathematically prove that you can merge Case 3 with either Case 1 or 2. The only difference between both cases is whether the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i = E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 182
      }, this), " will belong to the first or second summation. If we merge it with Case 1, the term of the summation will become ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1} \\cdot p_{E_{x-1}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 308
      }, this), ". If we merge it with Case 3, it would also become ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_{x-1} \\cdot p_{E_{x-1}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 386
      }, this), ". This happens because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i \\cdot E_{x-1} = p_i \\cdot i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 436
      }, this), " is only satisfied when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=E_{x-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 493
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Adding the two parts gives our final expression for the expected value:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x = E_{x -1} \\cdot \\sum_{i=0}^{\\lfloor E_{x - 1} \\rfloor} p_i + \\sum_{i=\\lfloor E_{x - 1} + 1 \\rfloor}^{T} i p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can solve the problem by simulating each test case and recalculating the summations for each test case in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(TK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 110
      }, this), ". However, this can easily be sped up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(T^2 + K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 158
      }, this), " by pre-calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 190
      }, this), " using Pascal's identity and by precalculating the prefix sums of both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 266
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p_i i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 276
      }, this), " so we can get the values of the summations in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 330
      }, this), " instead of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(T)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 348
      }, this), ". This gives us the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 380
      }, this), " test cases but is not good enough."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In order to fully solve the question, we need to remove the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 61
      }, this), " factor. We can do this if we are able to process multiple values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 136
      }, this), " in a single step."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Claim: We can process multiple queries if the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\sum_{i=0}}^{\\lfloor E_{x - 1} \\rfloor} p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 57
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\sum_{i=\\lfloor E_{x - 1} + 1 \\rfloor}}^{T} i p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 108
      }, this), " don't change between queries."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Proof:\r\nLet ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a = {\\sum_{i=0}}^{\\lfloor E_{x - 1} \\rfloor} p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 5
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b = {\\sum_{i=\\lfloor E_{x - 1} + 1 \\rfloor}}^{T} i p_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 60
      }, this), ". Then our formula becomes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x = E_{x - 1} \\cdot a + b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 7
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 15
      }, this), " are constant, we can extend this formula and get"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x = a \\cdot (a \\cdot ... (a \\cdot E_{x - k} + b) ... + b) + b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Simplifying gives us a geometric sequence."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x = a^k \\cdot E_{x - k} + a^{k - 1}b + a^{k - 2} + ... + b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can rewrite the second through last term using the formula for a geometric series."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x = a^k \\cdot E_{x - k} + \\frac{b(a^k - 1)}{a - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here is more information about ", _jsxDEV(_components.a, {
        href: "https://artofproblemsolving.com/wiki/index.php/Geometric_sequence",
        rel: "nofollow",
        target: "_blank",
        children: "geometric series"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 24
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 32
      }, this), " won't always remain the same. We can binary search on the max number of submissions Bessie can make before the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 157
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 165
      }, this), " change. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 177
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 185
      }, this), " will change when the value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\lfloor E_x \\rfloor}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 219
      }, this), " changes. The conditions for binary search are fulfilled because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 307
      }, this), " is a non-decreasing function."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since there are at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 25
      }, this), " values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 39
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 46
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 54
      }, this), " can change at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 77
      }, this), " times so the resulting time complexity will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(T^2 + T \\log K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 128
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(T^2 + T \\log K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
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
