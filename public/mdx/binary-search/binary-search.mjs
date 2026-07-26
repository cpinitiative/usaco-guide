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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "Note that the video above covers both binary search modules."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we binary search, we start with a search space of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 61
      }, this), "\r\nwhich we know the answer lies in. Then each iteration of the binary search cuts\r\nthe search space in half, so the algorithm tests ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 50
      }, this), " values.\r\nThis is efficient and much better than testing each possible value in the search\r\nspace."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-binary-search-on-monotonic-functions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-binary-search-on-monotonic-functions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Binary Search on Monotonic Functions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's say we have a boolean function ", _jsxDEV(_components.code, {
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 38
      }, this), ". Usually, in such problems, we want\r\nto find the maximum or minimum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 41
      }, this), " such that ", _jsxDEV(_components.code, {
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 55
      }, this), " is true. Similarly\r\nto how binary search on an array only works on a sorted array, binary search on\r\nthe answer only works if the answer function is\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Monotonic_function",
        rel: "nofollow",
        target: "_blank",
        children: "monotonic"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this), ", meaning that it\r\nis always non-decreasing or always non-increasing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-the-maximum-x-such-that-fx--true",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-the-maximum-x-such-that-fx--true",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding The Maximum ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 25
      }, this), " Such That ", _jsxDEV(_components.code, {
        children: "f(x) = true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 39
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We want to construct a function ", _jsxDEV(_components.code, {
        children: "lastTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 33
      }, this), " such that ", _jsxDEV(_components.code, {
        children: "lastTrue(lo, hi, f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 54
      }, this), "\r\nreturns the last ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 18
      }, this), " in the range ", _jsxDEV(_components.code, {
        children: "[lo,hi]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 35
      }, this), " such that ", _jsxDEV(_components.code, {
        children: "f(x) = true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 55
      }, this), ". If no such\r\n", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 1
      }, this), " exists, then ", _jsxDEV(_components.code, {
        children: "lastTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 18
      }, this), " should return ", _jsxDEV(_components.code, {
        children: "lo-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This can be done with binary search if ", _jsxDEV(_components.code, {
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 40
      }, this), " satisfies both of the following\r\nconditions:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          children: "f(x) = true"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          children: "f(y) = true"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 26
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\leq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 48
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          children: "f(x) = false"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 6
        }, this), ", then ", _jsxDEV(_components.code, {
          children: "f(y) = false"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 27
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\geq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 50
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, if ", _jsxDEV(_components.code, {
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 17
      }, this), " is given by the following function:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "f(1) = true\r\nf(2) = true\r\nf(3) = true\r\nf(4) = true\r\nf(5) = true\r\nf(6) = false\r\nf(7) = false\r\nf(8) = false\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["then ", _jsxDEV(_components.code, {
        children: "lastTrue(1, 8, f) = 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        children: "lastTrue(7, 8, f) = 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 34
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
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
      }, this), "Implementation 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Verify that this implementation doesn't call ", _jsxDEV(_components.code, {
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 46
      }, this), " on any values outside of the\r\nrange ", _jsxDEV(_components.code, {
        children: "[lo, hi]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 7
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
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
      }, this), "Implementation 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 227,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This approach is based on interval jumping. Essentially, we start from the\r\nbeginning of the array, make jumps, and reduce the jump length as we get closer\r\nto the target element. We use powers of 2, very similar to\r\n", _jsxDEV(_components.a, {
        href: "/plat/bin-jump",
        children: "Binary Jumping"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 229,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-the-minimum-x-such-that-fx--true",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-the-minimum-x-such-that-fx--true",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding The Minimum ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 290,
        columnNumber: 25
      }, this), " Such That ", _jsxDEV(_components.code, {
        children: "f(x) = true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 290,
        columnNumber: 39
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 290,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We want to construct a function ", _jsxDEV(_components.code, {
        children: "firstTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 292,
        columnNumber: 33
      }, this), " such that ", _jsxDEV(_components.code, {
        children: "firstTrue(lo, hi, f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 292,
        columnNumber: 55
      }, this), "\r\nreturns the first ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 19
      }, this), " in the range ", _jsxDEV(_components.code, {
        children: "[lo,hi]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 36
      }, this), " such that ", _jsxDEV(_components.code, {
        children: "f(x) = true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 293,
        columnNumber: 56
      }, this), ". If no such\r\n", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 1
      }, this), " exists, then ", _jsxDEV(_components.code, {
        children: "firstTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 18
      }, this), " should return ", _jsxDEV(_components.code, {
        children: "hi+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 44
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 292,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similarly to the previous part, this can be done with binary search if ", _jsxDEV(_components.code, {
        children: "f(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 296,
        columnNumber: 72
      }, this), "\r\nsatisfies both of the following conditions:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 296,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          children: "f(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 299,
          columnNumber: 6
        }, this), " is true, then ", _jsxDEV(_components.code, {
          children: "f(y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 299,
          columnNumber: 27
        }, this), " is true for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\geq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 299,
          columnNumber: 50
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          children: "f(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 300,
          columnNumber: 6
        }, this), " is false, then ", _jsxDEV(_components.code, {
          children: "f(y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 300,
          columnNumber: 28
        }, this), " is false for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y \\leq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 300,
          columnNumber: 52
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 300,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 299,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We will need to do the same thing, but when the condition is satisfied, we will\r\ncut the right part, and when it's not, the left part will be cut."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-example---maximum-median",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---maximum-median",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Maximum Median"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 389,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Statement:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 393,
        columnNumber: 1
      }, this), " Given an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 393,
        columnNumber: 31
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 393,
        columnNumber: 49
      }, this), " integers, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 393,
        columnNumber: 69
      }, this), " is odd,\r\nwe can perform the following operation on it ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 394,
        columnNumber: 46
      }, this), " times: take any element of the\r\narray and increase it by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 395,
        columnNumber: 26
      }, this), ". We want to make the median of the array as large\r\nas possible after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 396,
        columnNumber: 19
      }, this), " operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 393,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Constraints:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 398,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq n \\leq 2 \\cdot 10^5, 1 \\leq k \\leq 10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 398,
        columnNumber: 18
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 398,
        columnNumber: 71
      }, this), " is\r\nodd."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 398,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To get the current median, we first sort the array in ascending order."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 401,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, notice that to increase the current value to a value, say ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 403,
        columnNumber: 64
      }, this), ".\r\nAll values currently greater than or equal to the median, must remain greater than or equal to the median."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 403,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, say we have the sorted array\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1,1,2,3,4,4,5,5,6,8,8]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 1
      }, this), ". The current median is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 50
      }, this), ", so to increase the median to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 84
      }, this), ", we have to increase the current median by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 131
      }, this), " and we also have to increase the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 168
      }, this), "'s to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 407,
        columnNumber: 177
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 406,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Following this idea, to increase the median to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 409,
        columnNumber: 48
      }, this), ", we need to increase all values in the second half of the array to some value greater than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 409,
        columnNumber: 155
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 409,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, we binary search for the maximum possible median. We know that the number of operations required to raise\r\nthe median to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 15
      }, this), " increases monotonically as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 46
      }, this), " increases, so we can use binary\r\nsearch. For a given median value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 413,
        columnNumber: 34
      }, this), ", the number of operations required to raise\r\nthe median to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 414,
        columnNumber: 15
      }, this), " is"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 411,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=(n+1)/2}^{n} \\max(0, x - \\texttt{arr}[i])."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 416,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If this value is less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 420,
        columnNumber: 40
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 420,
        columnNumber: 50
      }, this), " can be the median, so our\r\ncheck function returns ", _jsxDEV(_components.code, {
        children: "true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 421,
        columnNumber: 24
      }, this), ". Otherwise, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 421,
        columnNumber: 43
      }, this), " cannot be the median, so our check\r\nfunction returns ", _jsxDEV(_components.code, {
        children: "false"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 422,
        columnNumber: 18
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 420,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-common-mistakes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-common-mistakes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Common Mistakes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 555,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-mistake-1---off-by-one",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mistake-1---off-by-one",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Mistake 1 - Off By One"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 557,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the code from CSAcademy's\r\n", _jsxDEV(_components.a, {
        href: "https://csacademy.com/lesson/binary_search/",
        rel: "nofollow",
        target: "_blank",
        children: "Binary Search on Functions"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 560,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 559,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This results in an infinite loop if ", _jsxDEV(_components.code, {
        children: "left=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 627,
        columnNumber: 37
      }, this), " and ", _jsxDEV(_components.code, {
        children: "right=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 627,
        columnNumber: 50
      }, this), "! To fix this, set\r\n", _jsxDEV(_components.code, {
        children: "middle = (left+right+1)/2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 628,
        columnNumber: 1
      }, this), " instead."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 627,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-mistake-2---not-accounting-for-negative-bounds",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mistake-2---not-accounting-for-negative-bounds",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Mistake 2 - Not Accounting for Negative Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 630,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider a slightly modified version of ", _jsxDEV(_components.code, {
        children: "firstTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 632,
        columnNumber: 41
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 632,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This code does not necessarily work if ", _jsxDEV(_components.code, {
        children: "lo"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 695,
        columnNumber: 40
      }, this), " is negative! Consider the following\r\nexample:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 695,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This is because dividing an odd negative integer by two will round it up instead\r\nof down."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 738,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-mistake-3---integer-overflow",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mistake-3---integer-overflow",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Mistake 3 - Integer Overflow"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 802,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The first version of ", _jsxDEV(_components.code, {
        children: "firstTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 804,
        columnNumber: 22
      }, this), " won't work if ", _jsxDEV(_components.code, {
        children: "hi-lo"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 804,
        columnNumber: 48
      }, this), " initially exceeds\r\n", _jsxDEV(_components.code, {
        children: "INT_MAX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 805,
        columnNumber: 1
      }, this), ", while the second version of ", _jsxDEV(_components.code, {
        children: "firstTrue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 805,
        columnNumber: 40
      }, this), " won't work if ", _jsxDEV(_components.code, {
        children: "lo+hi"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 805,
        columnNumber: 66
      }, this), " exceeds\r\n", _jsxDEV(_components.code, {
        children: "INT_MAX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 806,
        columnNumber: 1
      }, this), " at any point during execution. If this is an issue, use ", _jsxDEV(_components.code, {
        children: "long long"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 806,
        columnNumber: 67
      }, this), "s\r\ninstead of ", _jsxDEV(_components.code, {
        children: "int"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 807,
        columnNumber: 12
      }, this), "s."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 804,
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
      lineNumber: 810,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-usaco",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-usaco",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "USACO"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 812,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-general",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 816,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-quiz",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quiz",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quiz"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 820,
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
