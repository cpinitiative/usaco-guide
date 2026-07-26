"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
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
    children: [_jsxDEV(_components.h1, {
      id: "user-content-single-string",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-single-string",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Single String"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-knuth-morris-pratt-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-knuth-morris-pratt-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Knuth-Morris-Pratt Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Define an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 17
      }, this), " of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|S|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 33
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 49
      }, this), " is equal to the length of the longest nontrivial suffix of the prefix ending at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 149
      }, this), " that coincides with a prefix of the entire string. Formally,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i] = \\max \\{k \\: | \\: 1 \\leq k < i \\text{ and } S[0:k - 1] \\equiv S[i - (k - 1): i] \\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In other words, for a given index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 35
      }, this), ", we would like to compute the length of the longest substring that ends at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 114
      }, this), ", such that this string also happens to be a prefix of the ", _jsxDEV(_components.em, {
        children: "entire"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 176
      }, this), " string. One such string that satisfies this criteria is the prefix ending at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 262
      }, this), "; we will be disregarding this solution for obvious reasons."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For instance, for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = \\text{``abcabcd\"}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 19
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S = [0, 0, 0, 1, 2, 3, 0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 44
      }, this), ", and the prefix function of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = \\text{``aabaaab\"}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 104
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S = [0, 1, 0, 1, 2, 2, 3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 131
      }, this), ". In the second example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[4] = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 187
      }, this), " because the prefix of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 231
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{``aa\"})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 236
      }, this), " is equivalent to the substring of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 293
      }, this), " that ends at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 316
      }, this), ". In the same way, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[6] = 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 338
      }, this), " because the prefix of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 382
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{``aab\"}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 387
      }, this), ") is equal to the substring of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 440
      }, this), " that ends at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 463
      }, this), ". For both of these samples, there is no longer substring that satisfies these criteria."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The purpose of the KMP algorithm is to efficiently compute the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 64
      }, this), " array in linear time. Suppose we have already computed the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 131
      }, this), " array for indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\dots i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 157
      }, this), ", and need to compute the value for index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 209
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Firstly, note that between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 43
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 59
      }, this), " can be at most one greater. This occurs when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[\\pi_S[i]] = S[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 119
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/kmp_example1.png",
        alt: "KMP Example 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the example above, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i] = 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 23
      }, this), ", meaning that the suffix of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 73
      }, this), " is equivalent to a prefix of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 113
      }, this), " of the entire string. It follows that if the character at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 184
      }, this), " of the string is equal to the character at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 240
      }, this), ", then the match is simply extended by a single character. Thus, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i + 1] = \\pi_S[i] + 1 = 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 312
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the general case, however, this is not necessarily true. That is to say, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[\\pi_S[i]] \\neq S[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 77
      }, this), ". Thus, we need to find the largest index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < \\pi_S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 146
      }, this), " such that the prefix property holds (ie ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[:j - 1] \\equiv S[i - j + 1:i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 201
      }, this), "). For such a length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 255
      }, this), ", we repeat the procedure in the first example by comparing characters at indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 340
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 348
      }, this), ": if the two are equal, then we can conclude our search and assign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i + 1] = j + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 422
      }, this), ", and otherwise, we find the next smallest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 487
      }, this), " and repeat. Indeed, notice that the first example is simply the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 566
      }, this), " begins as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 580
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/kmp_example2.png",
        alt: "KMP Example 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the second example above, we let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 37
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The only thing that remains is to be able to efficiently find all the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 71
      }, this), " that we might possibly need. To recap, if the position we're currently at is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 152
      }, this), ", to handle transitions we need to find the largest index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 213
      }, this), " that satisfies the prefix property ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[:k - 1] \\equiv S[j - k + 1 : j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 252
      }, this), ". Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 295
      }, this), ", this value is simply ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[j - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 325
      }, this), ", a value that has already been computed. All that remains is to handle the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 426
      }, this), ". If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[0] = S[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 438
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i + 1] = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 457
      }, this), ", otherwise ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i + 1] = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 487
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Claim:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 1
      }, this), " The KMP algorithm runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 38
      }, this), " for computing the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 73
      }, this), " array on a string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 99
      }, this), " of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 113
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 1
      }, this), " Note that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 22
      }, this), " doesn't actually change through multiple iterations. This is because on iteration ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 108
      }, this), ", we assign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j = \\pi_S[i - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 123
      }, this), ". However, in the previous iteration, we assign ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 189
      }, this), " to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 210
      }, this), ". Furthermore, note that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 238
      }, this), " is always non-negative. In each iteration of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 287
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 292
      }, this), " is only increased by at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 325
      }, this), " in the if statement. Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 356
      }, this), " remains non-negative and is only increased a constant amount per iteration, it follows that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 452
      }, this), " can only decrease by at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 485
      }, this), " times through all iterations of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 521
      }, this), ". Since the inner loop is completely governed by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 573
      }, this), ", the overall complexity amortizes to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 614
      }, this), ". ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\blacksquare"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 632
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 112,
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
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-z-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-z-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Z Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 132,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The Z-algorithm is very similar to KMP, but it uses a different function than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 79
      }, this), " and it has an interesting different application than string matching."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of using ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 18
      }, this), ", it uses the ", _jsxDEV(_components.strong, {
        children: "z-function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 37
      }, this), ".\r\nGiven a position, this function gives the length of the longest string that's both the prefix of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 98
      }, this), "\r\nand of the suffix of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 22
      }, this), " starting at the given position."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's some examples of what this function might look like:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "aabxaayaab"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 141,
          columnNumber: 3
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\rightarrow"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 141,
          columnNumber: 16
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Z=[10,1,0,0,2,1,0,3,1,0]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 141,
          columnNumber: 30
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "aabxaabxcaabxaabxay"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 3
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\rightarrow"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 25
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Z=[18,1,0,0,4,1,0,0,0,8,1,0,0,5,1,0,0,1,0]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 39
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's also take a closer look at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Z_9=8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 34
      }, this), " (0-indexed) for the second string.\r\nThe value for this position is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 32
      }, this), " because that's the longest common prefix\r\nbetween the string itself ", _jsxDEV(_components.strong, {
        children: "aabxaabxcaabx"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 27
      }, this), "aabxay and the suffix starting\r\nat position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 13
      }, this), " ", _jsxDEV(_components.strong, {
        children: "aabxaabx"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 17
      }, this), "ay (also 0-indexed)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To efficiently compute this array, we maintain the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 52
      }, this), " interval such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_{l...r}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 80
      }, this), " is also a prefix, i.e. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Z_l=r-l+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 115
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 149,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say we have a position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 24
      }, this), " anywhere in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l,r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 40
      }, this), ".\r\nWe would then have these two cases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i + Z_{i-l} < r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 7
        }, this), ", we know that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "Z_i = Z_{i-l}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 39
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i + Z_{i-l} \\geq r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 15
        }, this), ", meaning that the answer can expand beyond ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 79
        }, this), ".\r\nThus, we compare character by character from there on."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 154,
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
      lineNumber: 158,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 160,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
      id: "user-content-palindromes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-palindromes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Palindromes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 236,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-manacher",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-manacher",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Manacher"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 238,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Manacher's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 1
      }, this), " functions similarly to the ", _jsxDEV(_components.strong, {
        children: "Z-Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 53
      }, this), ". It\r\ndetermines the longest palindrome centered at each character."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 262,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's denote ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 14
      }, this), " as the maximum diameter of a palindrome centered at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 73
      }, this), ".\r\nManacher's algorithm makes use of the previously determined ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 61
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 75
      }, this), " incalculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 97
      }, this), ". The main idea is that for a palindrome centered at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 156
      }, this), " with the borders ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "left"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 177
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "right"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 188
      }, this), " the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 200
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < j \\le right"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 208
      }, this), ") values are - probably - mirrors\r\nof the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 8
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "left \\le k < i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 16
      }, this), ") values on the left side of the palindrome.\r\nProbably because for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 27
      }, this), " the maximum palindrome might cross the right border.\r\nThis way the algorithm only considers the palindrome centers that could lead to the expansion of the maximum palindrome."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 265,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-palindromic-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-palindromic-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Palindromic Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 377,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "Palindromic Tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 379,
        columnNumber: 3
      }, this), " is a tree-like data structure that behaves similarly to\r\nKMP. Unlike KMP, in which the only empty state is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 380,
        columnNumber: 51
      }, this), ", the Palindromic Tree has\r\ntwo empty states: length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 381,
        columnNumber: 26
      }, this), ", and length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 381,
        columnNumber: 42
      }, this), ". This is because appending a\r\ncharacter to a palindrome increases the length by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 382,
        columnNumber: 51
      }, this), ", meaning a single\r\ncharacter palindrome must have been created from a palindrome of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 73
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 379,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
      id: "user-content-multiple-strings",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-multiple-strings",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Multiple Strings"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 396,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-tries",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tries",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 398,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "A trie is a tree-like data structure that stores strings. Each node is a string, and each edge is a character."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 408,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The root is the empty string, and every node is represented by the characters along the path from the root to that node.\r\nThis means that every prefix of a string is an ancestor of that string's node."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 410,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-aho-corasick",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-aho-corasick",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Aho-Corasick"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 485,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "The Aho-Corasick algorithm stores the pattern words in a trie structure, described above.\r\nIt uses the trie to transition from a state to anoother.\r\nSimilar to KMP algorithm, we want to reuse the information we have already processed."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 503,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "suffix link"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 3
      }, this), " or ", _jsxDEV(_components.strong, {
        children: "failure link"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 22
      }, this), " for a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 50
      }, this), " is a special edge that points to the longest proper suffix of the string corresponding to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 149
      }, this), ".\r\nThe suffix links for the root and all its immediate children point to the root node.\r\nFor all other nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 509,
        columnNumber: 21
      }, this), " with parent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 509,
        columnNumber: 37
      }, this), " and letter ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 509,
        columnNumber: 52
      }, this), " on the edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p \\rightarrow u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 509,
        columnNumber: 68
      }, this), " the suffix link\r\ncan be computed by following ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 30
      }, this), "'s failure link and transitioning to letter ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 77
      }, this), " from there."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 507,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While processing the string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 512,
        columnNumber: 29
      }, this), " the algorithm maintains the current node in the trie such that word\r\nformed in the node is equal to the longest suffix ending in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 513,
        columnNumber: 61
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 512,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, when transitioning from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 515,
        columnNumber: 38
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 515,
        columnNumber: 45
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 515,
        columnNumber: 54
      }, this), " there only are two choices:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 515,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "node"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 516,
          columnNumber: 7
        }, this), " does have an outgoing edge with letter ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_{i+1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 516,
          columnNumber: 53
        }, this), ", then move down the edge."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 516,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, follow the failure link of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 517,
          columnNumber: 42
        }, this), " and transition to letter ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S_{i+1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 517,
          columnNumber: 73
        }, this), " from there."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 517,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 516,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The image below depicts how the structure looks like for the words ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[a, ag, c, caa, gag, gc, gca]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 519,
        columnNumber: 68
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 519,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["There is a special case when some words are substring of other words in the wordlist. This could lead to some problems depending on the implementation. ", _jsxDEV(_components.a, {
        href: "https://www.youtube.com/watch?v=OFKxWFew_L0",
        rel: "nofollow",
        target: "_blank",
        children: "Dictionary links"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 526,
        columnNumber: 153
      }, this), " can solve this problem.\r\nThey act like suffix links that point to the first suffix that is also a word in the wordlist. The code below constructs the structure using a BFS."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 526,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 529,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(m\\sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 529,
        columnNumber: 22
      }, this), " - where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 529,
        columnNumber: 53
      }, this), " is the size of the alphabet and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sigma"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 529,
        columnNumber: 89
      }, this), " the size of the alphabet"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 529,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 631,
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
