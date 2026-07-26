"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["In sets and maps where keys (or elements) are stored in sorted order, accessing\r\nor removing the next key higher or lower than some input key ", _jsxDEV(_components.code, {
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 62
      }, this), " is supported."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Keep in mind that insertion and deletion will take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 52
      }, this), " time\r\nfor sorted sets, which is more than the average ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 49
      }, this), " insertion and\r\ndeletion for hashsets, but less than the worst case ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 53
      }, this), "\r\ninsertion and deletion for hashsets."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-using-iterators",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-iterators",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using Iterators"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In Bronze, we avoided discussion of any set operations involving iterators."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-sorted-sets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sorted-sets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sorted Sets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 149,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["One limitation of sorted sets is that we can't efficiently access the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k^{th}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 278,
        columnNumber: 71
      }, this), "\r\nlargest element in the set, or find the number of elements in the set greater\r\nthan some arbitrary ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 280,
        columnNumber: 21
      }, this), ". In C++, these operations can be handled using a data\r\nstructure called an ", _jsxDEV(_components.a, {
        href: "/gold/PURS#order-statistic-tree",
        children: "order statistic tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 21
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 278,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-sorted-maps",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sorted-maps",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sorted Maps"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 283,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-multisets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-multisets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Multisets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 386,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "multiset"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 388,
        columnNumber: 3
      }, this), " is a sorted set that allows multiple copies of the same element."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 388,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-introductory-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introductory-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introductory Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 480,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-harder-example---bit-inversions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-harder-example---bit-inversions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Harder Example - Bit Inversions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 484,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 488,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We'll use iterators extensively."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 490,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the bit string be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s=s_0s_1s_2\\ldots,s_{n-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 492,
        columnNumber: 23
      }, this), ". In the set ", _jsxDEV(_components.code, {
        children: "dif"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 492,
        columnNumber: 63
      }, this), ", we store\r\nall indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 13
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_i\\neq s_{i-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 27
      }, this), " (including ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 66
      }, this), "). If the\r\nelements of ", _jsxDEV(_components.code, {
        children: "dif"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 494,
        columnNumber: 13
      }, this), " are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0=dif_1<dif_2<\\cdots<dif_k=n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 494,
        columnNumber: 23
      }, this), ", then the longest length is\r\nequal to"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 492,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max(dif_2-dif_1,dif_3-dif_2,\\ldots,dif_k-dif_{k-1})."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 497,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can store each of these differences in a multiset ", _jsxDEV(_components.code, {
        children: "ret"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 501,
        columnNumber: 54
      }, this), "; after each\r\ninversion, we'll need to output the maximum element of ", _jsxDEV(_components.code, {
        children: "ret"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 502,
        columnNumber: 56
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 501,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Inverting a bit at a 0-indexed position ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 504,
        columnNumber: 41
      }, this), " corresponds to inserting ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 504,
        columnNumber: 70
      }, this), " into\r\n", _jsxDEV(_components.code, {
        children: "dif"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 505,
        columnNumber: 1
      }, this), " if it not currently present or removing ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 505,
        columnNumber: 47
      }, this), " if it is, and then doing the\r\nsame with ", _jsxDEV(_components.code, {
        children: "x+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 506,
        columnNumber: 11
      }, this), ". Whenever we insert or remove an element of ", _jsxDEV(_components.code, {
        children: "dif"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 506,
        columnNumber: 61
      }, this), ", we should\r\nupdate ", _jsxDEV(_components.code, {
        children: "ret"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 507,
        columnNumber: 8
      }, this), " accordingly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 504,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Note that multiset has a high constant factor, so replacing ", _jsxDEV(_components.code, {
        children: "ret"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 641,
        columnNumber: 61
      }, this), " with a\r\npriority queue and an array that stores the number of times each integer occurs\r\nin the priority queue reduces the runtime by a factor of 2."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 641,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-harder-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-harder-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Harder Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 770,
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
