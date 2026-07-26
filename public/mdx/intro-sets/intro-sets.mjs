"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "set"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 3
      }, this), " is a collection of unique elements. Sets have three primary methods:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "one to add an element"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: "one to remove an element"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: "one to check whether an element is present"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 2
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 2
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 3
      }, this), " is a collection of entries, each consisting of a ", _jsxDEV(_components.strong, {
        children: "key"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 60
      }, this), " and a ", _jsxDEV(_components.strong, {
        children: "value"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 74
      }, this), ". In\r\na map, all keys are required to be unique (i.e., they will form a set), but values can be repeated. Maps have\r\nthree primary methods:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "one to add a specified key-value pairing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "one to remove a key-value pairing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "one to retrieve the value for a given key"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["C++ and Java both have two implementations of sets and maps; one uses ", _jsxDEV(_components.strong, {
        children: "sorting"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 71
      }, this), " while the other uses ", _jsxDEV(_components.strong, {
        children: "hashing."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 104
      }, this), " Python's implementation of sets and maps uses hashing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-sets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Sorted sets store elements in sorted order. All primary methods (adding, removing, and checking) run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 105
      }, this), " worst-case time, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 150
      }, this), " is the number\r\nof elements in the set."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-hashsets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-hashsets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Hashsets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Hashsets store elements using hashing. Roughly, a hashset consists of some number of buckets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 94
      }, this), ", and each element is mapped to a bucket via a hash function. If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B\\approx N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 162
      }, this), " and the hash function independently maps each distinct element to a uniformly random bucket, then no bucket is expected to contain many elements, and all primary methods will all run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 361
      }, this), " ", _jsxDEV(_components.em, {
        children: "expected"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 377
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 119,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---distinct-numbers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---distinct-numbers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Distinct Numbers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 238,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This problem asks us to calculate the number of distinct values in a given list."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 240,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-method-1---sorted-set",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-1---sorted-set",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 1 - Sorted Set"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Because sets only store one copy of each value, we can insert all the numbers\r\ninto a set, and then print out the size of the set."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 244,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-method-2---hashset",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-2---hashset",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 2 - Hashset"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-method-3---sorting",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-3---sorting",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 3 - Sorting"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 490,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Check out the ", _jsxDEV(_components.a, {
        href: "/solutions/cses-1621",
        children: "solution"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 492,
        columnNumber: 15
      }, this), " involving sorting."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 492,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-maps",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-maps",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Maps"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 496,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In sorted maps, the pairs are sorted in order of key. As with sorted sets, all primary methods run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 500,
        columnNumber: 103
      }, this), " worst-case time, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 500,
        columnNumber: 148
      }, this), " is the number of pairs in the map."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 500,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In hashmaps, the pairs are hashed to buckets by the key, and as with hashsets, all primary methods run in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 502,
        columnNumber: 107
      }, this), " expected time under some assumptions about the hash function."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 502,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-iterating-over-maps",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-iterating-over-maps",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Iterating Over Maps"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 597,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["While you are free to change the ", _jsxDEV(_components.em, {
        children: "values"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 689,
        columnNumber: 34
      }, this), " in a map when iterating over it (as\r\ndemonstrated above), it is generally a bad idea to insert or remove elements of\r\na map while iterating over it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 689,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---associative-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---associative-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Associative Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 906,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To solve this problem efficiently, we need a data structure that can:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 908,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Assign a value to any index ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 910,
          columnNumber: 31
        }, this), " (where ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 910,
          columnNumber: 42
        }, this), " can be as large as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "10^{18}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 910,
          columnNumber: 65
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 910,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Retrieve the value at any index ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 911,
          columnNumber: 35
        }, this), " quickly."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 911,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 910,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A regular array won't work because the indices can be extremely large, making it impossible to allocate enough memory. However, since all values are initially ", _jsxDEV(_components.code, {
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 913,
        columnNumber: 160
      }, this), " and only a small subset of indices will ever be set or queried, we can use a ", _jsxDEV(_components.strong, {
        children: "map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 913,
        columnNumber: 241
      }, this), " (also called an associative array or dictionary) to store only the indices that have been assigned a value."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 913,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["When we receive a ", _jsxDEV(_components.code, {
          children: "0 k v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 915,
          columnNumber: 21
        }, this), " query, we set ", _jsxDEV(_components.code, {
          children: "a[k] = v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 915,
          columnNumber: 43
        }, this), " in the map."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 915,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["When we receive a ", _jsxDEV(_components.code, {
          children: "1 k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 916,
          columnNumber: 21
        }, this), " query, we print ", _jsxDEV(_components.code, {
          children: "a[k]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 916,
          columnNumber: 43
        }, this), " if it exists in the map, or ", _jsxDEV(_components.code, {
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 916,
          columnNumber: 78
        }, this), " otherwise."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 916,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 915,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This approach is efficient because both operations are fast in maps, and we only store the keys that are actually used."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 918,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that we use 64-bit integers since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 920,
        columnNumber: 40
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 920,
        columnNumber: 48
      }, this), " may be large."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 920,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 1022,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Some of these problems can be solved by sorting alone, though sets or maps could\r\nmake their implementation easier."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1024,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 1029,
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
