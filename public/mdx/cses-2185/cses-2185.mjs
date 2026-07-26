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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can identify that given any integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 40
      }, this), ", the number of integers that are divisible by it between 1 and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 107
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lfloor\\frac{N}{c}\\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 114
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we consider each prime individually and find the number of multiples it has, we will find that there is an overlap\r\nfor each number that is a multiple of two primes. For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 64
      }, this), " is a multiple of both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 91
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 99
      }, this), ", so if we added up all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lfloor\\frac{N}{a[i]}\\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 126
      }, this), " for all\r\nprimes, we would still need to subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lfloor\\frac{N}{a[i] \\cdot a[j]}\\rfloor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 41
      }, this), " for all distinct i and j."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similarly, this subtraction would\r\nhave an overlap for each number that is a multiple of three primes. An example would be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "30"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 89
      }, this), ", a multiple of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 109
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 114
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 123
      }, this), ", so we would have\r\nsubtracted all multiples of both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 34
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 39
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "15"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 49
      }, this), ", which would mean that we must add back the number of integers that are multiples of three primes.\r\nThis extends for the entire array, requiring us to alternate adding and subtracting depending on how many primes we are currently multiplying."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Considering only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "30"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 18
      }, this), ", the full example would be that our answer is added ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 75
      }, this), " times for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 89
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 94
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 103
      }, this), " (subsets of array with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 130
      }, this), " prime), then subtracted ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 158
      }, this), "\r\ntimes for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 11
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 16
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "15"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 26
      }, this), " (subsets of array with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 54
      }, this), " primes), and finally added once for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "30"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 94
      }, this), " (subset of array with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 121
      }, this), " primes),\r\noverall only being counted once."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To implement this, we would need to go through each subset of the array, and add the number of multiples it has if the number of primes is not divisible by 2, and\r\nsubtract otherwise. This is known as the ", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/combinatorics/inclusion-exclusion.html",
        rel: "nofollow",
        target: "_blank",
        children: "Inclusion Exclusion Principle"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 42
      }, this), ".\r\nIn order to iterate through all subsets of the array, we can iterate from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 75
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^K-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 82
      }, this), " and use bit operators to find which indices we are using."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
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
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K\\cdot 2^K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
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
