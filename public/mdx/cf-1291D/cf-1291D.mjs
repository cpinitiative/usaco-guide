"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/73563",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (C++)"
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, we can consider the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l = r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 39
      }, this), ", meaning the substring has length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 81
      }, this), ". A reducible anagram\r\nrequires the substring to be split into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\geq 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 41
      }, this), " segments, which is impossible for length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 93
      }, this), ".\r\nThus, a substring of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 29
      }, this), " has an irreducible anagram."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the following cases, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l \\neq r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We consider the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[l] \\neq s[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 28
      }, this), ". We can create an anagram where all occurrences of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 96
      }, this), "\r\nare in the front, and the rest of the string follows. This is an irreducible anagram. We can make sure\r\nthat the last segment contains no occurrences of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 50
      }, this), ". This is possible as all the occurrences are in the front."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To illustrate this, consider the scenario where our string is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{abbbb}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 63
      }, this), ". We can create the\r\nanagram ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{bbbba}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 9
      }, this), ". This anagram is irreducible because in order to include ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 81
      }, this), ", we must\r\nuse the entire string, showing how it cannot be reduced."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Next, we consider the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[l] = s[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 34
      }, this), ". Whether or not the substring has an irreducible anagram\r\nvaries from case to case."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Start by considering the case where the substring only contains one distinct character. This does not have an irreducible\r\nanagram because its only anagram is itself. Because its only anagram is itself, any segments that we choose\r\nwill always be anagrams of each other, meaning it only has a reducible anagram."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From the previous examples, it can be seen that having ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t[l]=s[l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 56
      }, this), " and/or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t[r]=s[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 75
      }, this), " does not help with\r\ncreating an irreducible anagram. If this happens, we can split the string into two segments, one of\r\nlength one at either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 22
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 29
      }, this), ", and another of everything else. For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s=\\text{abcca}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 79
      }, this), ",\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{aabcc}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), " is not an irreducible anagram because we can have a segment ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 76
      }, this), " and another ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 97
      }, this), ".\r\nThus it is optimal to have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t[l]\\neq s[l]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 28
      }, this), " AND ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t[r]\\neq s[r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 25
      }, this), " has two distinct characters, and let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 66
      }, this), " have an irreducible anagram ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 98
      }, this), ".\r\nAdditionally, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[0] = \\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 19
      }, this), ". The same explanation applies when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[0] = \\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 72
      }, this), ", but the\r\nletters will be flipped (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}\\to\\text{b and b}\\to\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 26
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 8
      }, this), " as the leftmost position where the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 57
      }, this), "s on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[0:x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 72
      }, this), " is greater than\r\nor equal to the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 27
      }, this), "s on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t[0:x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 42
      }, this), ". ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 52
      }, this), " is the position where the number of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "s in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 16
      }, this), " are equal to the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 47
      }, this), "s in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 62
      }, this), ": the further right you go, the more\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), "s you get, so the first position this condition holds is when the number of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "s are equal. Because we only have two distinct characters, the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 84
      }, this), "s must also\r\nbe the same. If we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 25
      }, this), " total characters and a number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 64
      }, this), "s, which we call ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 91
      }, this), ", we must\r\nhave ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x + 1 - n \\ \\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 6
      }, this), "s in both strings. Thus, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s[0:x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 53
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t[0:x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 66
      }, this), " are also anagrams: if there are\r\nthe same number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 20
      }, this), "s in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 35
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 43
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 52
      }, this), "s in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 67
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 75
      }, this), ", then they must be anagrams. Because the\r\nfirst and last characters are equal, meaning the last character is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 68
      }, this), ", we know ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 88
      }, this), " must\r\ncome before the last character, as adding an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 46
      }, this), " won't help with increasing the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 88
      }, this), " count.\r\nThis implies the existence of another anagram."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given that one anagram exists from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0:x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 36
      }, this), ", we know that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 58
      }, this), " is a reducible anagram, a contradiction to what\r\nwe asserted before. The remaining substring must be an anagram as well because the number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 94
      }, this), "s\r\nin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 4
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 12
      }, this), " are equal, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 31
      }, this), "s in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 46
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 54
      }, this), " are also equal. In essence,\r\nit's just saying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{some number} - \\text{another number} = \\text{some number} - \\text{another number}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 18
      }, this), ",\r\nwhere ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{some number}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 7
      }, this), " can be the total number of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 55
      }, this), "s or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 70
      }, this), "s, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{another number}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 87
      }, this), "\r\ncan be the number of that same character that was in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0:x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 54
      }, this), ". The left hand side and right hand side can\r\nrepresent ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 11
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 19
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The case where three distinct characters exist is a bit more complicated. In order to assure that the first character of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 122
      }, this), " and\r\nan anagram are different, we can insert all occurrences of the last distinct character to appear to the front. Next, to assure that\r\nthe last character of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 23
      }, this), " and an anagram are different, we can insert all occurrences of the last character after the last distinct\r\ncharacter, if they are different (if they are the same, we don't need to do anything). Now, we can insert the rest of the string\r\nin any order. This anagram is irreducible. The last character in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 66
      }, this), " will be one of the first characters in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 109
      }, this), ", forcing us to\r\nuse the entire string if we wish to create an anagram."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can generalize these observations: a string has at least one irreducible\r\nanagram if any of these three conditions hold:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "The string has three or more different characters"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The first and last character are different"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The string is of length 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The last two conditions are easy to check. However, to check the first condition, we\r\nmust use prefix sums. For each of the 26 letters of the alphabet, we can hold a prefix\r\nsum counting how many times the letter has been seen. If on an interval, three letters\r\nhave been seen at least once, then the string is an irreducible anagram."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 71,
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
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(|s| + q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 22
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|s|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 51
      }, this), " is the length of string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 81
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 89
      }, this), " is the number of queries"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 78,
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
