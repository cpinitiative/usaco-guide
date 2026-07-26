"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
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
      id: "user-content-subsets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subsets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subsets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
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
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---apple-division",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---apple-division",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Apple Division"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\le 20"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 7
      }, this), ", we can solve this by trying all possible divisions\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 4
      }, this), " apples into two sets and finding the one with the minimum difference in\r\nweights. Here are two ways to do this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-generating-subsets-recursively",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generating-subsets-recursively",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generating Subsets Recursively"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first method would be to write a recursive function which searches over all\r\npossibilities."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["At some index, we either add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{weight}_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 30
      }, this), " to the first set or the second\r\nset, storing two sums ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sum}_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 23
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sum}_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 44
      }, this), " with the sum of\r\nvalues in each set."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then, we return the difference between the two sums once we've reached the end\r\nof the array."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-generating-subsets-with-bitmasks",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generating-subsets-with-bitmasks",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generating Subsets with Bitmasks"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "bitmask"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 3
      }, this), " is an integer whose binary representation is used to represent a\r\nsubset. In the context of this problem, if the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 48
      }, this), "'th bit is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 71
      }, this), " in a particular bitmask,\r\nwe say the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 12
      }, this), "'th apple is in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 31
      }, this), ". If not, we'll say it's in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 64
      }, this), ".\r\nWe can iterate through all subsets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 36
      }, this), " if we check all bitmasks ranging from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 8
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's do a quick demo with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 28
      }, this), ".\r\nThese are the integers from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 29
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^3-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 36
      }, this), " along with their\r\nbinary representations and the corresponding elements included in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 67
      }, this), ".\r\nAs you can see, all possible subsets are accounted for."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 147,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "With this concept, we can implement our solution."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You'll notice that our code contains some fancy bitwise operations:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "1 << x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 3
        }, this), " for an integer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 27
        }, this), " is another way of writing ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2^x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 57
        }, this), ", which, in binary,\r\nhas only the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 172,
          columnNumber: 16
        }, this), "'th bit turned on."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          children: "&"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 173,
          columnNumber: 7
        }, this), " (AND) operator will take two integers and return a new integer.\r\n", _jsxDEV(_components.code, {
          children: "a & b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 174,
          columnNumber: 3
        }, this), " for integers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 174,
          columnNumber: 24
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 174,
          columnNumber: 32
        }, this), " will return a new integer whose ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 174,
          columnNumber: 68
        }, this), "th bit is\r\nturned on if and only if the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 175,
          columnNumber: 32
        }, this), "'th bit is turned on for both ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 175,
          columnNumber: 65
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 175,
          columnNumber: 73
        }, this), ".\r\nThus, ", _jsxDEV(_components.code, {
          children: "mask & (1 << x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 176,
          columnNumber: 9
        }, this), " will return a positive value only if the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 176,
          columnNumber: 68
        }, this), "'th bit is\r\nturned on in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "mask"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 177,
          columnNumber: 16
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you wanna learn more about them, we have a\r\n", _jsxDEV(_components.a, {
        href: "/silver/intro-bitwise",
        children: "dedicated module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 1
      }, this), " for bitwise operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Optionally, since the two sets are identical, we can set the last number to always be in the second set. This would translate to iterating on masks from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 154
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{n-1}-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 161
      }, this), ", instead of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{n}-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 185
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 282,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-permutations",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-permutations",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Permutations"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 284,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "permutation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 286,
        columnNumber: 3
      }, this), " is a reordering of a list of elements."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-lexicographical-order",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lexicographical-order",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lexicographical Order"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 290,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This term is mentioned quite frequently, ex. in\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=988",
        rel: "nofollow",
        target: "_blank",
        children: "USACO Bronze - Photoshoot"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 292,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Think about how are words ordered in a dictionary. (In fact, this is where the\r\nterm \"lexicographical\" comes from.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 297,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In dictionaries, you will see that words beginning with the letter ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 300,
        columnNumber: 68
      }, this), " appears\r\nat the very beginning, followed by words beginning with ", _jsxDEV(_components.code, {
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 57
      }, this), ", and so on. If two\r\nwords have the same starting letter, the second letter is used to compare them;\r\nif both the first and second letters are the same, then use the third letter to\r\ncompare them, and so on until we either reach a letter that is different, or we\r\nreach the end of some word (in this case, the shorter word goes first)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Permutations can be placed into lexicographical order in almost the same way. We\r\nfirst group permutations by their first element; if the first element of two\r\npermutations are equal, then we compare them by the second element; if the\r\nsecond element is also equal, then we compare by the third element, and so on."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example, the permutations of 3 elements, in lexicographical order, are"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 312,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 314,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that the list starts with permutations beginning with 1 (just like a\r\ndictionary that starts with words beginning with ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 50
      }, this), "), followed by those\r\nbeginning with 2 and those beginning with 3. Within the same starting element,\r\nthe second element is used to make comparisons."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 318,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Generally, unless you are specifically asked to find the lexicographically\r\nsmallest/largest solution, you do not need to worry about whether permutations\r\nare being generated in lexicographical order. However, the idea of\r\nlexicographical order does appear quite often in programming contest problems,\r\nand in a variety of contexts, so it is strongly recommended that you familiarize\r\nyourself with its definition."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 323,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Some problems will ask for an ordering of elements that satisfies certain\r\nconditions. In these problems, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\leq 10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 35
      }, this), ", we can just iterate through all\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N!=N\\cdot (N-1)\\cdot (N-2)\\cdots 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 332,
        columnNumber: 1
      }, this), " permutations and check each permutation for\r\nvalidity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 330,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---creating-strings-i",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---creating-strings-i",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Creating Strings I"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 335,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-generating-permutations-recursively",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-generating-permutations-recursively",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Generating Permutations Recursively"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 343,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This is just a slight modification of method 1 from CPH."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 347,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll use the recursive function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{search}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 349,
        columnNumber: 34
      }, this), " to find all the permutations\r\nof the string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 15
      }, this), ". First, keep track of how many of each character there are in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 351,
        columnNumber: 1
      }, this), ". For each function call, add an available character to the current string,\r\nand call ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{search}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 10
      }, this), " with that string. When the current string has the\r\nsame size as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 353,
        columnNumber: 14
      }, this), ", we've found a permutation and can add it to the list of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{perms}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 354,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 349,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-backtracking",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-backtracking",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Backtracking"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 568,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-resources-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 572,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---chessboard--queens",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---chessboard--queens",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Chessboard & Queens"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 583,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-by-generating-permutations",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-by-generating-permutations",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "By Generating Permutations"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 585,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A brute-force solution that checks all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\binom{64}{8}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 587,
        columnNumber: 40
      }, this), " possible queen\r\ncombinations will have over 4 billion arrangements to check, making it too slow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 587,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We have to brute-force a bit smarter:\r\nnotice that we can directly generate permutations so that no two queens are\r\nattacking each other due to being in the same row or column."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 590,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since no two queens can be in the same column, it makes sense\r\nto lay one out in each row.\r\nIt remains to figure out how to vary the ", _jsxDEV(_components.em, {
        children: "rows"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 596,
        columnNumber: 42
      }, this), " each queen is in.\r\nThis can be done by generating all permutations from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\cdots 8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 597,
        columnNumber: 54
      }, this), ", with the\r\nnumbers representing which row each queen is in."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 594,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, the permutation ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[6, 0, 5, 1, 4, 3, 7, 2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 600,
        columnNumber: 30
      }, this), " results in this\r\nqueen arrangement:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 600,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Doing this cuts down the number of arrangements we have to check down to\r\na much more manageable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "8!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 708,
        columnNumber: 24
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 707,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h4, {
      id: "user-content-using-backtracking",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-backtracking",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using Backtracking"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 915,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "According to CPH:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 917,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "A backtracking algorithm begins with an empty solution and extends the\r\nsolution step by step. The search recursively goes through all different ways\r\nhow a solution can be constructed."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 919,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 919,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since the bounds are small, we can recursively backtrack over all ways to place\r\nthe queens, storing the current state of the board."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 923,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "At each level, we try to place a queen at all squares that aren't blocked\r\nor attacked by other queens.\r\nAfter this, we recurse, then remove this queen and backtrack."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 926,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Finally, we increment the answer when we've placed all eight queens."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 930,
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
      lineNumber: 1086,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You can find more problems at the CP2 link given above or at\r\n", _jsxDEV(_components.a, {
        href: "https://train.usaco.org/",
        rel: "nofollow",
        target: "_blank",
        children: "USACO Training"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1091,
        columnNumber: 1
      }, this), ". However, these sorts of problems\r\nappear much less frequently than they once did."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1090,
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
