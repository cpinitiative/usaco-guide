"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/55701",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 5
      }, this), " uses a solution with Boruvka's Algorithm. There is a simpler solution using divide and conquer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Firstly, note that because there is essentially an edge between any pair of nodes, the values of the nodes themselves can be considered unordered. Thus, the answer will not change if we sort the elements."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Secondly, note that duplicate elements can be removed. This is because duplicate elements can be connected with an edge of 0 cost."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After these two steps, we have obtained a sorted array with no duplicates whose answer is the same as the original problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now consider some subarray ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 28
      }, this), " as well as some bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 57
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0 \\leq l \\leq r < N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 62
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0 \\leq b < 30"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 85
      }, this), "). Partition the subarray into two sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 140
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 148
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 159
      }, this), " contains all elements with bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 194
      }, this), " set, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 207
      }, this), " contains other elements. We will be assuming that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 261
      }, this), " is the first different bit; that is, all elements in the subarray have the same bits for all bits greater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 376
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 9
      }, this), " is the first different bit and because the array is sorted, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 73
      }, this), " contains some prefix of the subarray and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 118
      }, this), " contains some suffix. That is to say, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L = A[l:m - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 160
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R = [m : r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 181
      }, this), " for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l < m \\leq r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 204
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Lemma:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), " In a minimum xor spanning tree, there is exactly 1 edge between an element in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 90
      }, this), " and an element in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 112
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " By definition, a spanning tree must connect all vertices, which implies the existence of at least 1 edge between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 125
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 133
      }, this), ". Assume there is two edges between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 172
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 180
      }, this), ", with endpoints ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(l_1, r_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 200
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(l_2, r_2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 217
      }, this), " respectively, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1, l_2 \\in L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 250
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_1, r_2 \\in R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 271
      }, this), ". The tree is constructed in one of the following ways, where solid lines represent edges and dashed lines represent paths."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/gold/cf-888G/double1.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/gold/cf-888G/double2.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without loss of generality, disconnect ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(l_2, r_2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 40
      }, this), ". The spanning tree becomes disconnected, with either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 106
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 115
      }, this), " in the component that ", _jsxDEV(_components.em, {
        children: "does not"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 143
      }, this), " contain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 162
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 172
      }, this), ". It is always more optimal to connect this node to the corresponding edge node. That is, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 270
      }, this), " is not in the same component as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 308
      }, this), ", then an edge between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 336
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 346
      }, this), " will always be better than one between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 391
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 401
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/gold/cf-888G/single.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By definition, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 16
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 26
      }, this), " share a bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 44
      }, this), ", so the xor of their values does not contain bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 97
      }, this), ", whereas ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2 \\texttt{ xor } r_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 110
      }, this), " always contains ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 151
      }, this), ".\r\nNote that this implies that it is always better to connect ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 60
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 69
      }, this), "; however, this configuration may not be optimal. The proof is analogous if instead ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 158
      }, this), " is disconnected. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\blacksquare"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 181
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, the divide and conquer algorithm will proceed as follows: We will partition the subarray into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 101
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 109
      }, this), ". This step takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 130
      }, this), " time. Note that if either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 173
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 180
      }, this), " is empty (if all numbers in the range contain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 230
      }, this), " or if none of them contain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 261
      }, this), "), we immediately recurse with the same subarray and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 317
      }, this), " as the bit. Next, we will choose an element from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 374
      }, this), " and an element ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 393
      }, this), " with a minimum pairwise xor, and add this to the answer. Lastly, recursively run the algorithm on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 495
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 503
      }, this), " with bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 516
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "How do we find two values such that their xor is minimized? One way to do this efficiently is with a trie. In the trie, each number is represented as a string of its binary representation, starting with the most significant digit and ending with the least. For xor queries, we can do a greedy traversal from root to leaf. When a transition exists that corresponds to the current bit of the query number, we greedily take that transition; otherwise, we are forced to take the unoptimal transition, and add the weight of that bit to the answer."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
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
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), " Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 26
      }, this), " be the length of the array, and let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 66
      }, this), " be the value of an arbitrary element. There are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log a \\approx 30"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 118
      }, this), " levels of recursion, each containing exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 183
      }, this), " elements. Furthermore, each insertion/query in the trie takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 249
      }, this), " time, since we have to traverse at most the number of distinct bits in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 342
      }, this), ". Combining this information, the total time complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log^2 a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 404
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
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
