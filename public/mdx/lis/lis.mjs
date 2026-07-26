"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this tutorial, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 23
      }, this), " be the array we want to find the LIS for."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-slow-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 5
      }, this), " be the length of the longest increasing subsequence that ends on\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), ". We can then naively compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 37
      }, this), " (and thus the LIS) in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), " time:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "We can do much better than this though!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-fast-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-fast-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Fast Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 5
      }, this), " be an array (0-indexed) where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 41
      }, this), " is the smallest element from\r\nthe first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 11
      }, this), " elements of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 27
      }, this), " with an increasing sequence of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 69
      }, this), "\r\nending on it (or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 18
      }, this), " if there is no such element)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, let our array be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 18, 7, 20, 18, 5, 18, 15, 13, 19, 9]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 31
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this case, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 15
      }, this), " would be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 5, 15]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 30
      }, this), ". Some example sequences satisfying\r\nthese are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 11
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 5]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 18
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2, 5, 15]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Lemma 1:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 14
      }, this), " forms a strictly increasing sequence."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 113,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), " Assume for a contradiction that for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 53
      }, this), ", we have\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j - 1] \\geq L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 1
      }, this), ". Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_0, a_1, \\dots, a_{j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 31
      }, this), " be any increasing\r\nsubsequence of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 23
      }, this), " ending on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 41
      }, this), " (so ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j = L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 54
      }, this), "). Notice\r\nthat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_0, a_1, \\dots, a_{j - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 6
      }, this), " is an increasing subsequence of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 74
      }, this), ".\r\nThus, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 7
      }, this), " has to be greater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 39
      }, this), ". From that, we can write this\r\nequation: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j - 1] \\leq a_{j-1} < a_j = L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 11
      }, this), ", which is exactly what we\r\nwanted."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 115,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Lemma 2:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 1
      }, this), " The length of the LIS ending on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 46
      }, this), " is equal to the least\r\nindex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 7
      }, this), " (with 0-indexing) such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[j] \\geq A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 39
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 1
      }, this), " Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 16
      }, this), " be defined as it is in the statement. First of all, since\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1] > L_i[j - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), ", there is an increasing sequence of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 68
      }, this), " ending\r\nat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 4
      }, this), ", as we can append ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 33
      }, this), " to the end of the sequence of length\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 1
      }, this), ". By Lemma 1, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 18
      }, this), " is strictly increasing, so ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i[k] \\geq A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 51
      }, this), " for all\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\geq j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this), ". This means that there cannot be a LIS ending at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 61
      }, this), " longer\r\nthan ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 6
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Lemma 3:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 1
      }, this), " At most 1 element differs between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 48
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_{i + 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 58
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 1
      }, this), " Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 16
      }, this), " be defined as it was in Lemma 2. We need to set\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_{i + 1}[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 1
      }, this), " to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 22
      }, this), " since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1] \\leq L_i[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 39
      }, this), ".\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L_{i + 1}[k] = L_i[k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 1
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\neq j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 33
      }, this), ", though, since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1] > L_i[k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 59
      }, this), "\r\nfor all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k < j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 9
      }, this), " and there are no increasing sequences ending on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i + 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 65
      }, this), " for\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k > j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 135,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find and update the described ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 34
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 41
      }, this), " time, we can use a\r\nlist with binary search, or we can use a sorted set (as demonstrated in the\r\nsolution for PCB)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-fast-solution-rmq-data-structures",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-fast-solution-rmq-data-structures",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Fast Solution (RMQ Data Structures)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 22
      }, this), ", but perhaps a constant factor\r\nslower than the previous solution."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that the following solution assumes knowledge of a basic PURQ data\r\nstructure for RMQ (range max query). Suitable implementations include a segment\r\ntree or a modified Fenwick tree, but both of these are generally considered\r\nPlatinum level topics. However, this solution has the advantage of being more\r\nintuitive if you're deriving LIS on the spot."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 5
      }, this), " be the length of the LIS of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 50
      }, this), " that ends with the element\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\in a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 224,
        columnNumber: 1
      }, this), ". Our base case is obviously ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[a[0]] = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 224,
        columnNumber: 39
      }, this), " (we have an LIS\r\ncontaining only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 17
      }, this), ", which has length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 42
      }, this), "). Since LIS exhibits optimal\r\nsubstructure, we transition as follows, processing\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\forall t \\in a[1 \\dots n-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 227,
        columnNumber: 1
      }, this), " from left to right (which we must do in order to\r\nmaintain the property that our subsequence strictly increases in this\r\ndirection):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[t] = \\max_{0 \\leq k < t} \\texttt{dp}[k] + 1."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 231,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 4
      }, this), " is now a RMQ data structure, the change in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[t]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 61
      }, this), " is\r\nmerely a point update, while the calculation of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max\\limits_{0 \\leq k < t} \\texttt{dp}[k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 1
      }, this), " is a range query."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 235,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our final answer is just an RMQ from end to end (or, alternatively, you could\r\nkeep a running max of the answer in another variable and change it with each\r\nupdate). This method actually gives us the leisure to process online as long as\r\nour elements are small enough to be used as indices, or if we use a more\r\nadvanced data structure such as a sparse segment tree. If we are willing to\r\nprocess offline as we often can, however, we can avoid using a more advanced\r\ntechnique: it suffices to collect the array elements and sort them to coordinate\r\ncompress, creating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 246,
        columnNumber: 20
      }, this), " with those compressed IDs instead."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 239,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The implementation follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 248,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---pcb",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---pcb",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - PCB"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 442,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This problem asks us to find the minimum number of disjoint sets of\r\nnon-intersecting segments. This seems quite intimidating, so let's break it up\r\ninto two parts:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 446,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Finding a set of non-intersecting segments"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 450,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Minimizing the number of these sets"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 451,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 450,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application-1---non-intersecting-segments",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application-1---non-intersecting-segments",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application 1 - Non-intersecting Segments"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 453,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, what can we say about two segments ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(l_1, r_1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 455,
        columnNumber: 43
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(l_2, r_2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 455,
        columnNumber: 60
      }, this), " if they\r\nintersect (assuming ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1 < l_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 21
      }, this), ")?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 455,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since these segments are straight, notice how ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_1 < l_2 \\implies r_1 > r_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 458,
        columnNumber: 47
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 458,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that a set of non-intersecting segments satisfies\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_i < l_j \\implies r_i < r_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 1
      }, this), " for all pairs ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 46
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 460,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 463,
        columnNumber: 5
      }, this), " be an array where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A[i] = x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 463,
        columnNumber: 27
      }, this), " means that the segment with its right\r\nendpoint at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 464,
        columnNumber: 22
      }, this), " has its left endpoint at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 464,
        columnNumber: 60
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 463,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we were asked to find the maximum size of a set of non-intersecting segments,\r\nthe answer would be the LIS of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 467,
        columnNumber: 32
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 466,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application-2---minimum-number-of-increasing-sequences",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application-2---minimum-number-of-increasing-sequences",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application 2 - Minimum Number of Increasing Sequences"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 469,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Continuing from application 1, we now want to find the minimum number of\r\nincreasing subsequences required to cover ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 472,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 471,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Luckily for us, there's a simple (though not so obvious) solution to this."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 474,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Lemma (Easy):"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 1
      }, this), " The minimum number of increasing subsequences required to\r\ncover ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 7
      }, this), " is at least the size of longest non-increasing subsequence of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 73
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 476,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.em, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 479,
        columnNumber: 1
      }, this), " No two elements of any non-increasing subsequence can be part of the\r\nsame increasing subsequence."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 479,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Claim:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 482,
        columnNumber: 1
      }, this), " The minimum number of increasing subsequences required to cover ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 482,
        columnNumber: 76
      }, this), "\r\nis equal to the size of longest non-increasing subsequence of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 483,
        columnNumber: 63
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 482,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Wrong Proof 1:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 485,
        columnNumber: 1
      }, this), " See\r\n", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/sequences/longest_increasing_subsequence.html#toc-tgt-13",
        rel: "nofollow",
        target: "_blank",
        children: "cp-algo"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 486,
        columnNumber: 1
      }, this), "\r\n(note that this link describes partitioning ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 487,
        columnNumber: 45
      }, this), " into non-increasing subsequences\r\nrather than increasing subsequences). However, it's not correct because the\r\nprocess of unhooking and reattaching might never terminate. For example,\r\nconsider partitioning ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A=(3,1,2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 23
      }, this), " into the non-increasing subsequences\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1=(3,1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 491,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2=(2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 491,
        columnNumber: 17
      }, this), ". Then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 491,
        columnNumber: 33
      }, this), " will be moved from the front of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 491,
        columnNumber: 69
      }, this), " to the\r\nfront of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 492,
        columnNumber: 10
      }, this), " on the first step, back to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 492,
        columnNumber: 43
      }, this), " on the second step, and so on."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 485,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Wrong Proof 2:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 494,
        columnNumber: 1
      }, this), "\r\n", _jsxDEV(_components.a, {
        href: "https://math.stackexchange.com/questions/3739994/find-minimum-number-of-increasing-subsequences",
        rel: "nofollow",
        target: "_blank",
        children: "This"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 495,
        columnNumber: 1
      }, this), "\r\nis essentially the same as the above."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 494,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Motivation:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 498,
        columnNumber: 1
      }, this), " Consider the obvious greedy strategy to construct the collection\r\nof increasing subsequences (essentially\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Patience_sorting",
        rel: "nofollow",
        target: "_blank",
        children: "patience sorting"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 500,
        columnNumber: 1
      }, this), "). For each\r\nelement ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 501,
        columnNumber: 9
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 501,
        columnNumber: 16
      }, this), " from left to right, add it to the increasing subsequence with\r\nlast element less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 502,
        columnNumber: 24
      }, this), " such that the value of this last element is\r\nmaximized. If no such increasing subsequence currently exists, then start a new\r\nincreasing subsequence with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 504,
        columnNumber: 29
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 498,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This algorithm performs exactly the same steps as the algorithm to compute the\r\nlength of the longest non-increasing subsequence, so it follows that they return\r\nthe same result."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 506,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 1
      }, this), " Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 16
      }, this), " denote the length of longest non-increasing subsequence\r\nending at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 511,
        columnNumber: 11
      }, this), ". Then the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 511,
        columnNumber: 27
      }, this), "'s satisfying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f_i=t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 511,
        columnNumber: 46
      }, this), " for a fixed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 511,
        columnNumber: 66
      }, this), " are an\r\nincreasing subsequence for each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 512,
        columnNumber: 33
      }, this), ". So we have covered ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 512,
        columnNumber: 57
      }, this), " with (size of\r\nlongest non-increasing subsequence) increasing subsequences, done."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 510,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Do you see why this is equivalent to the sketch?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 515,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Alternative Proof:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 517,
        columnNumber: 1
      }, this), " This is just a special case of\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Dilworth%27s_theorem",
        rel: "nofollow",
        target: "_blank",
        children: "Dilworth's Theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 518,
        columnNumber: 1
      }, this), ". See\r\nthe inductive proof."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 517,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-code",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 521,
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
      lineNumber: 610,
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
