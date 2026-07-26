"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
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
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Prefix sums are a technique used to quickly calculate the sum of any subarray.\r\nBy precomputing cumulative sums in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 36
      }, this), " time, subsequent queries can be computed in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 97
      }, this), " time.\r\nThis technique can be generalized to invertible operations,\r\nsuch as ", _jsxDEV(_components.a, {
        href: "https://usaco.guide/silver/intro-bitwise#xor-operation",
        rel: "nofollow",
        target: "_blank",
        children: "bitwise XOR"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 9
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---static-range-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---static-range-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Static Range Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's say we have a one-indexed integer array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 47
      }, this), " of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 70
      }, this), " and we\r\nwant to compute the value of"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}[a]+\\texttt{arr}[a+1]+\\cdots+\\texttt{arr}[b]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 5
      }, this), " different pairs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 25
      }, this), " satisfying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\le a\\le b\\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 44
      }, this), ". We'll use the\r\nfollowing example with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N = 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 24
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Naively, for every query, we can iterate through all entries from index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 73
      }, this), " to\r\nindex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 7
      }, this), " to add them up. Since we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 41
      }, this), " queries and each query requires a\r\nmaximum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 12
      }, this), " operations to calculate the sum, our total time\r\ncomplexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NQ)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 15
      }, this), ". For most problems of this nature, the\r\nconstraints will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N, Q \\leq 10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 21
      }, this), ", so ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "NQ"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 42
      }, this), " is on the order of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^{10}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 66
      }, this), ". This\r\nis ", _jsxDEV(_components.strong, {
        children: "not"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 4
      }, this), " acceptable; it will almost certainly exceed the time limit."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead, we can use prefix sums to process these array sum queries. We designate\r\na prefix sum array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 20
      }, this), ". First, because we're 1-indexing the array,\r\nset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[0]=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 5
      }, this), ", then for indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 46
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq k \\leq N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 60
      }, this), ",\r\ndefine the prefix sum array as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[k]=\\sum_{i=1}^{k} \\texttt{arr}[i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Basically, what this means is that the element at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 57
      }, this), " of the prefix sum\r\narray stores the sum of all the elements in the original array from index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 75
      }, this), " up\r\nto ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 4
      }, this), ". This can be calculated easily in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 42
      }, this), " by the following\r\nformula for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\le k\\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 18
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[k]=\\texttt{prefix}[k-1]+\\texttt{arr}[k]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For the example case, our prefix sum array looks like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now, when we want to query for the sum of the elements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 59
      }, this), " between\r\n(1-indexed) indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 29
      }, this), " inclusive, we can use the following formula:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=L}^{R} \\texttt{arr}[i] = \\sum_{i=1}^{R} \\texttt{arr}[i] - \\sum_{i=1}^{L-1} \\texttt{arr}[i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Using our definition of the elements in the prefix sum array, we have"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=L}^{R} \\texttt{arr}[i]= \\texttt{prefix}[R]-\\texttt{prefix}[L-1]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we are only querying two elements in the prefix sum array, we can\r\ncalculate subarray sums in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 28
      }, this), " per query, which is much better than\r\nthe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 5
      }, this), " per query that we had before. Now, after an\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), " preprocessing to calculate the prefix sum array, each of the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), " queries takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 19
      }, this), " time. Thus, our total time complexity is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N+Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this), ", which should now pass the time limit."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's do an example query and find the subarray sum between indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 69
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b = 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 1
      }, this), ", inclusive, in the 1-indexed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{arr}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 38
      }, this), ". From looking at the\r\noriginal array, we see that this is"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 106,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=2}^{5} \\texttt{arr}[i] = 6 + 4 + 2 + 5 = 17."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Using prefix sums:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 143,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prefix}[5] - \\texttt{prefix}[1] = 18 - 1 = 17."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 145,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["These are also known as\r\n", _jsxDEV(_components.a, {
        href: "https://mathworld.wolfram.com/PartialSum.html",
        rel: "nofollow",
        target: "_blank",
        children: "partial sums"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 180,
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
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
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
      lineNumber: 308,
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
      lineNumber: 312,
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
