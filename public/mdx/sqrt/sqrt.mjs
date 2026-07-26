"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["You should already have done this problem in\r\n", _jsxDEV(_components.a, {
        href: "/gold/PURS",
        children: "Point Update Range Sum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), ", but here we'll present two more\r\napproaches. Both run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q\\sqrt N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 25
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-blocking",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-blocking",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Blocking"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We partition the array into blocks of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{block\\_size}=\\lceil \\sqrt{N}\r\n\\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 44
      }, this), ". Each block stores the sum of elements within it, and allows for the\r\ncreation of corresponding ", _jsxDEV(_components.code, {
        children: "update"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 27
      }, this), " and ", _jsxDEV(_components.code, {
        children: "query"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 40
      }, this), " operations."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Update Queries:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 21
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To update an element at location ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 34
      }, this), ", first find the corresponding block using\r\nthe formula ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{x}{\\texttt{block\\_size}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 13
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, apply the corresponding difference between the element currently stored at\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " and the element we want to change it to."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Sum Queries:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 18
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To perform a sum query from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0\\ldots r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 29
      }, this), ", calculate"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i = 0}^{R-1} \\texttt{blocks}[i] + \\sum_{R \\cdot \\texttt{block\\_size}}^r \\texttt{nums}[i]"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{blocks}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 7
      }, this), " represents the total sum of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 60
      }, this), "-th block, the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this), "-th block represents the sum of the elements from the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[i\\cdot\r\n\\texttt{block\\_size},(i + 1)\\cdot \\texttt{block\\_size})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 64
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R=\\left\\lceil\r\n\\frac{r}{\\texttt{block\\_size}} \\right\\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 63
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=l}^{r} \\texttt{nums}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 10
      }, this), " is the difference between the two\r\nsums ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=0}^{r}\\texttt{nums}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i=0}^{l-1}\\texttt{nums}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 43
      }, this), ",\r\nwhich each are calculated in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 30
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-combining-algorithms",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-combining-algorithms",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Combining Algorithms"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Doing this problem with DP has a time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 53
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["If we try prefix sums, the complexity is still ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can apply the DP algorithm to the steps where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i \\cdot x >= \\sqrt(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 222,
        columnNumber: 50
      }, this), " because the jump is bigger, thus resulting in a faster loop\r\nWe can apply prefix sums for the remaining cases where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i \\cdot x < \\sqrt(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 56
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This trick allows us to combine two ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 37
      }, this), " algorithm into one ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\sqrt(N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 75
      }, this), " algorithm."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 225,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-batching",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-batching",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Batching"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 269,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["See the CPH section on ", _jsxDEV(_components.a, {
        href: "/CPH.pdf#page=263",
        children: "batch processing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 24
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Maintain a \"buffer\" of the latest updates (up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sqrt N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 50
      }, this), "). The answer for each\r\nsum query can be calculated with prefix sums and by examining each update within\r\nthe buffer. When the buffer gets too large (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\ge \\sqrt N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 275,
        columnNumber: 45
      }, this), "), clear it and\r\nrecalculate prefix sums."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 273,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-mos-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mos-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Mo's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 413,
      columnNumber: 1
    }, this), "\n\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-additional-notes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-additional-notes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Additional Notes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 583,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Low constraints (ex. ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "n=5\\cdot 10^4"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 585,
            columnNumber: 24
          }, this), ") and/or high time limits (greater than\r\n2s) can be signs that square root decomposition is intended."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 585,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 585,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.a, {
            href: "/CPH.pdf#page=262",
            children: "CPH 262"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 588,
            columnNumber: 3
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 588,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 588,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.blockquote, {
          children: ["\n", _jsxDEV(_components.p, {
            children: ["In practice, it is not necessary to use the exact value of ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\sqrt n"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 590,
              columnNumber: 64
            }, this), " as a\r\nparameter, and instead we may use parameters ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "k"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 591,
              columnNumber: 50
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "n/k"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 591,
              columnNumber: 58
            }, this), " where ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "k"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 591,
              columnNumber: 70
            }, this), " is\r\ndifferent from ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\sqrt n"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 592,
              columnNumber: 20
            }, this), ". The optimal parameter depends on the problem and\r\ninput. For example, if an algorithm often goes through the blocks but rarely\r\ninspects single elements inside the blocks, it may be a good idea to divide\r\nthe array into ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "k<\\sqrt n"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 595,
              columnNumber: 20
            }, this), " blocks, each of which contains ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "n/k > \\sqrt n"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 595,
              columnNumber: 63
            }, this), "\r\nelements."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 590,
            columnNumber: 5
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 590,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 590,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If an update takes time proportional to the size of one block\r\n(", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\mathcal{O}(n/k)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 599,
            columnNumber: 4
          }, this), ") while a query takes time proportional to the number of\r\nblocks times ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\log n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 600,
            columnNumber: 16
          }, this), " (", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\mathcal{O}(k\\log n)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 600,
            columnNumber: 26
          }, this), ") then we can set\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "k\\approx \\sqrt{\\frac{n}{\\log n}}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 601,
            columnNumber: 3
          }, this), " to make both updates and queries take time\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\mathcal{O}(\\sqrt{n\\log n})"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 602,
            columnNumber: 3
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 598,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 598,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Solutions with worse complexities are not necessarily slower (at least for\r\nproblems with reasonable input sizes, ex. ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "n\\le 5\\cdot 10^5"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 605,
            columnNumber: 45
          }, this), "). I recall an\r\ninstance where a fast ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\mathcal{O}(n\\sqrt n\\log n)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 606,
            columnNumber: 25
          }, this), " solution passed (where\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\log n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 607,
            columnNumber: 3
          }, this), " came from a BIT) while an ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\mathcal{O}(n\\sqrt n)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 607,
            columnNumber: 38
          }, this), " solution did not.\r\nConstant factors are important!"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 604,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 604,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 585,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-on-trees",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-on-trees",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "On Trees"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 610,
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
      lineNumber: 624,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll use the ", _jsxDEV(_components.a, {
        href: "/gold/tree-euler",
        children: "Euler tour technique"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 626,
        columnNumber: 15
      }, this), " to flatten the tree into an array, upon which we can apply Mo's algorithm. If node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 626,
        columnNumber: 139
      }, this), "\r\nis the ancestor of node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 627,
        columnNumber: 25
      }, this), ", then the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 627,
        columnNumber: 49
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 627,
        columnNumber: 56
      }, this), " in our array is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[\\texttt{start}[x], \\texttt{start}[y]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 627,
        columnNumber: 76
      }, this), ".\r\nOtherwise, the path from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 628,
        columnNumber: 31
      }, this), " to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 628,
        columnNumber: 43
      }, this), " is equivalent to the subarray ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[\\texttt{end}[x],\\texttt{start}[y]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 628,
        columnNumber: 77
      }, this), ", plus the LCA itself, which is not included in the range.\r\nThis works because the Euler tour includes each node twice: once the DFS enters and once the DFS exits it. As only the nodes on our path will not be exited, this ensures we do not overcount any subtree nodes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 626,
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
      lineNumber: 631,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 633,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + Q)\\sqrt{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 633,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 633,
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
      lineNumber: 765,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-set-a",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-set-a",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Set A"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 767,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Problems where the best solution involves square root decomposition."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 769,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-set-b",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-set-b",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Set B"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 773,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Problems that can be solved without it. But you might as well try to use it!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 775,
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
