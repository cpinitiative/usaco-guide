"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "The suffix array of a string is the sorted array of all possible suffixes of the string.\r\nEach suffix is usually represented by its starting index."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, if our string were ", _jsxDEV(_components.code, {
        children: "abcbcba"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 33
      }, this), ", the suffix array would be as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-construction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-construction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Construction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The general philosophy behind the construction of a suffix array is to sort incrementally.\r\nWe first start by comparing the first character of each suffix, and then double the amount we compare until we're comparing the entire length of the string.\r\nIf this sounds really abstract, don't worry!\r\nAll the implementation details will be hammered out below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-initial-transformation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-initial-transformation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Initial Transformation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For convenience, let's start by appending a \"null character\" of sorts to the end of the string.\r\nThis acts as a tiebreaker and will ensure we never hit the end of a suffix while comparing two suffixes.\r\n", _jsxDEV(_components.code, {
        children: "$"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this), " or the space character are possible options, as the ASCII code of either are less than ", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 92
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To avoid out of bounds issues, we'll also append the string to itself.\r\nNotice that since any comparisons would have stopped at the null character, this has no effect on the order of the suffix array."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After implementing these two transformations, the strings we compare would look like this (still using ", _jsxDEV(_components.code, {
        children: "abcbcba"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 104
      }, this), " as an example):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The last suffix that starts with ", _jsxDEV(_components.code, {
        children: "$"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 34
      }, this), " will ", _jsxDEV(_components.em, {
        children: "always"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 43
      }, this), " come first; it doesn't particularly matter."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-sorting",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sorting",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sorting"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As stated earlier, let's first just consider the first character in each substring and sort it:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "From here we start doubling the length of string we compare.\r\nTo get to the point where we efficiently compare suffixes, let's first do some analysis."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say we just sorted all the suffixes by the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 50
      }, this), " characters, and we're now comparing the first four characters of suffixes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 128
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 136
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["If the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 14
      }, this), " characters of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 39
      }, this), " were already less than or greater than those of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 98
      }, this), ", nothing changes.\r\nHowever, in this case they aren't; we're going to have to compare the right half."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 113,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["How might we do this?\r\nWell, the cool thing is that since we just sorted ", _jsxDEV(_components.em, {
        children: "all"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 51
      }, this), " suffixes by the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 79
      }, this), ", we actually have information about the right halves already!\r\nThe right half of the first four characters of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 55
      }, this), " is just the first two characters of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 102
      }, this), ".\r\nSimilarly, the right half of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 37
      }, this), " is the first two characters of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 79
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To compare these half-suffixes, after each iteration of sorting we can assign each half-baked suffix a number representing its position in the array.\r\nIf two half-baked suffixes are equal, then they would get the same number.\r\nThese numbers are usually called ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Equivalence_class",
        rel: "nofollow",
        target: "_blank",
        children: "equivalence classes"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 34
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Applying this augmentation to our array sorted by the first character, we would now have:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-optimization",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimization",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimization"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we're doing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 19
      }, this), " sorts ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 49
      }, this), " times, our current algorithm as it stands is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 103
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although this is adequate, it can sometimes be a bit too slow especially when creating a suffix array is often just the first step in many problems.\r\nFortunately, we can fix this!\r\nSince everything we're comparing is in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 50
      }, this), ", we can use ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Radix_sort",
        rel: "nofollow",
        target: "_blank",
        children: "radix sort"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 71
      }, this), " to remove a log factor from our complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 146,
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
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 152,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "It's recommended that you also test your implementation against a brute force\r\nsolution for many small strings."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 333,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's a small script that outputs a test case and its answer:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 336,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-lcp-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lcp-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "LCP Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 420,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The LCP array is a common auxiliary array based on the suffix array that stores the ", _jsxDEV(_components.strong, {
        children: "longest common prefix"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 422,
        columnNumber: 85
      }, this), " (LCP) between adjacent elements of the suffix array."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 422,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Taking our example string from above, such an array would look like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 424,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Each row contains the LCP between the row's string and that of the previous row."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 440,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-construction-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-construction-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Construction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 442,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An algorithm often used to construct this LCP array starts by calculating the LCP for the suffix starting at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 444,
        columnNumber: 110
      }, this), " and its previous suffix.\r\nIt then calculates the LCP for the suffix starting at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 55
      }, this), " and ", _jsxDEV(_components.em, {
        children: "its"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 63
      }, this), " previous suffix, and so on and so forth.\r\nThe reason for this calculation order is so that we can apply a clever optimization that is best described through our example."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 444,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say we just finished calculating the LCP for the row of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 448,
        columnNumber: 64
      }, this), ".\r\nOur next step, then, would be to calculate the LCP for suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 449,
        columnNumber: 63
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 448,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One might think that we would have to start comparing the prefixes all over again for this suffix, but we actually don't have to!\r\nRemember that we just calculated the LCP of suffixes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 54
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 62
      }, this), " to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 72
      }, this), " characters, which means that the suffixes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 118
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 126
      }, this), ", and all the suffixes between them in the array (despite there not being any in our example) must have at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 452,
        columnNumber: 242
      }, this), " characters in common."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 451,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["What this means is that we can just start comparing from the third character to compute the LCP for the row of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 454,
        columnNumber: 119
      }, this), " instead of starting all over."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 454,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In general, we keep a variable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start\\_at}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 32
      }, this), " which keeps the number of common characters we know the current suffix has with its predecessor in the suffix array.\r\nThis variable tells us how many characters we can skip, as we know they're equal.\r\nAfter each computation of an LCP, we set this variable equal to its value minus one, except when the LCP is already ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 458,
        columnNumber: 117
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 456,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You'll see an implementation of this algorithm in the next section."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 460,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 462,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now that we've constructed this LCP array, let's see an application of it."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 464,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A crucial observation to be made for this problem is that every substring can be represented as a prefix of some suffix.\r\nWe know that suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 469,
        columnNumber: 21
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N-i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 469,
        columnNumber: 29
      }, this), " (recall that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 469,
        columnNumber: 48
      }, this), " is the length of the string) possible prefixes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 468,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that the number of prefixes of suffix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 46
      }, this), " that are duplicates is just the longest common prefix between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 112
      }, this), " and its predecessor.\r\nWith this, we can iterate through the LCP array and calculate our answer in one fell swoop."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 471,
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
      lineNumber: 474,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 476,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-burrows-wheeler-transform",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-burrows-wheeler-transform",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Burrows-Wheeler Transform"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 687,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-run-enumerate",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-run-enumerate",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Run Enumerate"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 701,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 721,
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
