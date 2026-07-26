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
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "An XOR basis is a minimal set of linearly independent binary vectors that can represent any vector in a given set through XOR combinations. In computational problems, constructing an XOR basis involves iteratively adding vectors to the basis while ensuring each new vector remains independent by reducing it with existing basis vectors. This basis allows efficient representation and manipulation of binary vector spaces, enabling quick determination of linear independence and facilitating solutions to various optimization and combinatorial problems."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "XOR basis involves two parts:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Represent each given number in its base 2 form, considering it as a vector in the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "{\\mathbb{Z_2^d}}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 35,
            columnNumber: 85
          }, this), " vector space, where ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "d"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 35,
            columnNumber: 126
          }, this), " is the maximum possible number of bits. The XOR operation on these numbers is equivalent to the addition of the corresponding vectors in the vector space ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "{\\mathbb{Z_2^d}}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 35,
            columnNumber: 284
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Relate the answers to the queries of the second type with the basis of the vectors found in Part 1.\r\nBy constructing an XOR basis from the set of vectors, we can efficiently answer various queries about linear independence, redundancy, and other properties related to the XOR combinations of the given numbers. This basis provides a compact representation that allows for quick computation and manipulation of the vector space."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-important-terms",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-important-terms",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Important terms"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-vector-space-mathbbz_2d",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-vector-space-mathbbz_2d",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Vector Space ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_2^d}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 19
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_2}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_m}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 21
      }, this), " is the set of remainders upon division by m. Therefore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_2}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 96
      }, this), " is the set of remainders upon division by 2. Hence ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_2}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 166
      }, this), " is simply the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{0, 1\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 203
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_2^d}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), ":  It represents the set of all binary vectors of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 78
      }, this), ", where each component of the vector belongs to the field\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{\\mathbb{Z_2}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this), ", which consists of two elements: 0 and 1."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-linear-span",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-linear-span",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Linear Span"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The span of a set of vectors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{S = \\{v_1, v_2,..., v_n \\}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 30
      }, this), " in a vector space ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 81
      }, this), " consists of all vectors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 109
      }, this), " that can be represented as linear combination of the vectors in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 177
      }, this), ". Mathematically, the span of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 210
      }, this), " is defined as:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{align*}\r\nspan(s) = \\bigg\\{\\sum_{i=1}^{n} c_i v_i \\bigg| v_i \\in S, c_i \\in \\{0, 1\\} \\bigg\\}\r\n\\end{align*}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This mean that any vector ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 27
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 34
      }, this), " can be expressed as a liner combination fo the vectors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v_1, v_2,...,v_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 93
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 117
      }, this), ", where each coefficient ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 145
      }, this), " is either 0 or 1. The span of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 181
      }, this), " represents the subspace of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 212
      }, this), " that is generated by the vectors in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 252
      }, this), ", encompassing all possible combinations of those vectors. Understanding the span of a set of vectors is crucial for determining the reach or extent of the vector's influence within the vector space."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-basis",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-basis",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Basis"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A set of vectors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = \\{v_1, v_2,....,v_n\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 18
      }, this), " is termed the basis of a vector space ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 84
      }, this), " if the span of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 103
      }, this), " covers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 114
      }, this), " entirely and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 131
      }, this), " is linearly independent. In other words, any vector in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 190
      }, this), "  can be expressed as a linear combination of the vectors in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 254
      }, this), ", and no vector in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 276
      }, this), " can be represented as a linear combination of the others. The number of vectors in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 363
      }, this), " , denoted as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 380
      }, this), ", is defined as the dimension of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 416
      }, this), ", represented by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dim(V)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 436
      }, this), ". Understanding the basis and dimension of a vector space is crucial for analyzing its structure, solving linear equations, and performing transformations in various mathematical and computational contexts."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---xor-closure",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---xor-closure",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Xor Closure"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You are given a set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 24
      }, this), " integer values. You should find the minimum number of values that you need to add to the set such that the following will hold true:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["For every two integers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 26
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 34
        }, this), " in the set, their bitwise xor ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A \\oplus B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 68
        }, this), " is also in the set."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The solution involves constructing an XOR basis from a set of binary vectors and computing a value based on this basis. Each vector is inserted into the XOR basis by attempting to minimize it through XOR-ing with existing basis vectors, ensuring that the vector remains linearly independent. If the vector cannot be fully reduced to zero, it is added to the basis. This ensures that the basis only contains the minimal set of vectors needed to represent the space spanned by the input vectors."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Once the basis is constructed, the final result is calculated as  ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{basis.size()}- n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 67
      }, this), ". Here ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{basis.size()}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 97
      }, this), " represents the total number of distinct vectors that can be formed using the basis, including the zero vector. By subtracting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 244
      }, this), ", the number of input vectors, we adjust for the actual number of vectors, providing insight into their linear independence and redundancy. The computed value is then printed as the output, reflecting the difference between the total possible combinations and the number of given vectors."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You might be wondering why this method of reduction works. For instance, if the basis elements were currently ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1_2, 11_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 111
      }, this), " and you tried inserting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 149
      }, this), ", you'd end up with a result of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 187
      }, this), ". This is clearly wrong, since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 223
      }, this), " is not independent of the basis ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1_2, 11_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 262
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 132,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, the catch is that every other basis element must be reduced via the same method. This means ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1_2, 11_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 102
      }, this), " is not actually a valid basis: properly reduced, it should be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1_2, 10_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 178
      }, this), " instead."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["More generally, this reduction guarantees that, if bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 56
      }, this), " is the MSB of one basis element, it must be switched off in every basis element after it: this is why this method of reduction works without having to maintain the basis vectors in sorted order."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---trees-and-xor-queries-again",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---trees-and-xor-queries-again",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Trees and XOR Queries Again"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You are given a tree consisting of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 36
      }, this), " vertices. There is an integer written on each vertex; the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 98
      }, this), "-th vertex has integer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 124
      }, this), " written on it. You have to process ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 167
      }, this), " queries. The ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 184
      }, this), "-th query consists of three integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 224
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 233
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 245
      }, this), ". For this query, you have to answer if it is possible to choose a set of vertices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v_1,v_2,…,v_m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 335
      }, this), " (possibly empty) such that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["every vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v_j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 16
        }, this), " is on the simple path between ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 54
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 142,
          columnNumber: 66
        }, this), " (endpoints can be used as well);"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "a_{v_1} \\oplus a_{v_2} \\oplus \\dots \\oplus a_{v_m} = k_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 143,
          columnNumber: 3
        }, this), ", where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\oplus"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 143,
          columnNumber: 71
        }, this), " denotes the bitwise XOR operator."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 145,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["To efficiently compute XOR bases on paths in a tree, we use a method involving tree rooting, ", _jsxDEV(_components.strong, {
        children: "Lowest Common Ancestor (LCA)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 94
      }, this), ", and properties of ", _jsxDEV(_components.strong, {
        children: "XOR bases"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 146
      }, this), ". The process begins by rooting the tree and using LCA to split any path into two vertical paths. For each vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 273
      }, this), ", we maintain a list of \"interesting\" vertices that significantly influence the XOR base when traversing from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 388
      }, this), " to the root. Due to the properties of XOR bases, these lists are small, with a maximum size of 20."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 149,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The core idea is to build these lists for all vertices efficiently. For a vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 82
      }, this), ", its list is derived from its parent's list. If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 136
      }, this), " adds a new element to the XOR base of its parent's list, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 199
      }, this), " is added to its list; otherwise, one element in the parent's list is replaced. This propagation ensures that the size of each list remains manageable and enables efficient construction of these lists in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(nB^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 408
      }, this), " time, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 440
      }, this), " is the size of the XOR base, typically 20."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When answering a query, the XOR base for any path is obtained by combining the lists from the two vertical paths derived from the LCA. This merging and computation can be done in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(B^2 + \\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 153,
        columnNumber: 180
      }, this), " time per query, providing an efficient solution for the problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 153,
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
      lineNumber: 297,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Some harder tasks:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 310,
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
