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
      id: "user-content-string-hashing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-string-hashing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "String Hashing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-template",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-template",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Template"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As mentioned in the articles above, there is no need to calculate modular\r\ninverses."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This implementation calculates"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{hsh}[i + 1] = \\left(\\sum_{x = 0}^i B^{i - x} \\cdot S[x]\\right) \\bmod M"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The hash of any particular substring ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S[a : b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 38
      }, this), " is then calculated as"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left(\\sum_{x = a}^b B^{b - x} \\cdot S[x] \\right) \\bmod M = (\\texttt{hsh}[b + 1] - \\texttt{hsh}[a] \\cdot B^{b - a + 1}) \\bmod M"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["using prefix sums. This is nice because the highest power of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 62
      }, this), " in that\r\npolynomial will always be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B^{b - a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 27
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 130,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9 + 9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 7
      }, this), " is prime, the probability of collision when using this hash is\r\nat most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{10^9 + 9} < 10^{-4}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 9
      }, this), ", by the Schwarz-Zippel lemma. This means\r\nthat if you select any two ", _jsxDEV(_components.strong, {
        children: "different"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 28
      }, this), " strings of length at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 68
      }, this), " and a\r\nrandom base modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9 + 9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 20
      }, this), " (e.g. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9973"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 37
      }, this), " in the code), the probability that\r\nthey hash to the same value is at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^{-4}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 40
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-searching-for-strings",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-searching-for-strings",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Searching For Strings"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation---one-hash",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation---one-hash",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation - One Hash"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll use a ", _jsxDEV(_components.a, {
        href: "/gold/sliding",
        children: "sliding window"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 13
      }, this), " over ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "H"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 50
      }, this), " to find the \"matches\" with\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we don't care about relative order when comparing two substrings, we can\r\nstore frequency tables of the characters in the current window and in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 71
      }, this), ". When\r\nwe slide the window, at most two values in that table change. To compare two\r\nsubstrings, we simply compare the 26 values in each table."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 196,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we only needed to count the number of matches, then the above alone would\r\nsuffice (in fact, ", _jsxDEV(_components.a, {
        href: "https://dmoj.ca/problem/ioi06p1",
        rel: "nofollow",
        target: "_blank",
        children: "IOI 2006 Writing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 19
      }, this), " is just\r\nthat). However, we need to count the ", _jsxDEV(_components.strong, {
        children: "distinct"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 38
      }, this), " permutations of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 67
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "H"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 203,
        columnNumber: 74
      }, this), ", so\r\nwe need to be a bit more clever."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 201,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "One way to solve this is by storing the polynomial hashes of each match in a\r\nset, since we expect different permutations to have different polynomial\r\nhashes. The answer would simply be the size of that set at the end."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using a relatively small modulus such as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M=10^9+9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 42
      }, this), " will not pass (see the\r\nnote above regarding the birthday paradox). Instead, we use ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M=2^{61}-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 61
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
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
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O((|N| + |H|) \\cdot \\Sigma)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\Sigma"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 68
      }, this), " is\r\nthe size of the alphabet."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 215,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Failure Probability:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O\\left(\\frac{|N||H|^2}{M}\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 26
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation---two-hashes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation---two-hashes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation - Two Hashes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "An alternative solution without frequency tables would be to hash the substrings\r\nthat we're trying to match. Since order doesn't matter, we need to modify our\r\nhash function slightly."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In particular, instead of computing the ", _jsxDEV(_components.strong, {
        children: "polynomial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 306,
        columnNumber: 41
      }, this), " hash of the substrings,\r\ncompute the product ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(B + s_1)(B + s_2) \\dots (B + s_k) \\bmod M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 21
      }, this), " as the hash\r\n(again, using two modulos). This hash is nice because the relative order of the\r\nletters doesn't matter, as multiplication is commutative. Furthermore,\r\nas any two strings with different frequency tables map to different polynomials\r\nin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 4
      }, this), ", they hash to the same value with probability at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{|N|}{M}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 62
      }, this), "\r\nover the choice of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 312,
        columnNumber: 20
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 306,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since this hash requires the modular inverse, there's an extra ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 314,
        columnNumber: 64
      }, this), " factor\r\nin the time complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 314,
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
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O((|N| + |H|) \\log M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 319,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Failure Probability:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O\\left(\\frac{|N||H|^2}{M}\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 26
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 321,
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
      lineNumber: 412,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
      id: "user-content-xor-hashingzobrist-hashing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-xor-hashingzobrist-hashing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "XOR Hashing/Zobrist Hashing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 422,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Hashing can also be used to check if sets of elements are equal. To do this, we first randomly generate a hash value for each unique element. Typically, the hash value is an integer in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 2^{63}-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 196
      }, this), " since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{63}-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 218
      }, this), " is the maximum value of a 64-bit signed integer. The hash of a set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 296
      }, this), " is the XOR sum of the hash values of all the elements in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 357
      }, this), ". Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\oplus x = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 368
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 393
      }, this), ", we can delete an element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 423
      }, this), " from set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 436
      }, this), " by applying the hash value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 470
      }, this), " again on the hash. The probability of a collision of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 527
      }, this), " sets is approximately ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N^2}{M}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 553
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 576
      }, this), " is the maximum possible hash value."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 428,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 432,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each distinct numerical value in the arrays, we generate a random positive 64-bit integer.\r\nWith this map, we can build the prefix XOR hashes for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 435,
        columnNumber: 55
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 435,
        columnNumber: 63
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 434,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An issue we have to deal with is duplicate elements, as XORing an element with\r\nitself will result in a value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 438,
        columnNumber: 34
      }, this), " and will be equivalent it never having\r\nexisted in the first place.\r\nTo fix this, we use a set to detect duplicate subsequent values and only XOR\r\nan element with the prefix hash if it's new."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 437,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, to answer a query, we check if the XOR hashes at the given indices are the same."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 443,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 445,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 447,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N + Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 447,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 447,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 537,
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
