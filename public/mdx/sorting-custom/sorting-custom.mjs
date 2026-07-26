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
    p: "p",
    pre: "pre",
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
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Sorting can apply to more than just numbers.\r\nFor example, many solutions to\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=992",
        rel: "nofollow",
        target: "_blank",
        children: "Wormhole Sort"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\r\ninvolve first sorting the list of edges by their weight."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example, the sample case gives us the following edges:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "1 2 9\r\n1 3 7\r\n2 3 10\r\n2 4 3\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After sorting, it should look like"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "2 4 3\r\n1 3 7\r\n1 2 9\r\n2 3 10\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We will describe several ways to do this below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-comparators",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-comparators",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Comparators"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Most sorting functions rely on moving objects with a lower value in front\r\nof objects with a higher value if sorting in ascending order, and vice versa if\r\nin descending order. This is done through comparing two objects at a time."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-variations",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-variations",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Variations"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 426,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-sorting-in-descending-order",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sorting-in-descending-order",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sorting in Descending Order"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 428,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-sorting-by-multiple-criteria",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sorting-by-multiple-criteria",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sorting by Multiple Criteria"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 475,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, suppose we wanted to sort a list of ", _jsxDEV(_components.code, {
        children: "Edge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 42
      }, this), "s in ascending order, primarily\r\nby width and secondarily by first vertex (", _jsxDEV(_components.code, {
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 478,
        columnNumber: 43
      }, this), "). We can do this quite similarly\r\nto how we handled sorting by one criterion earlier. What the comparator function\r\nneeds to do is to compare the weights if the weights are not equal, and\r\notherwise compare first vertices."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 477,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Try this slightly modified version of the sample input:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 584,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "2 2 7\r\n1 3 7\r\n2 3 10\r\n2 4 3\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 586,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 586,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While edges with width ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 593,
        columnNumber: 24
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 593,
        columnNumber: 32
      }, this), " will still assume the same positions, edges ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{2, 2, 7\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 593,
        columnNumber: 81
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{1, 3, 7\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 593,
        columnNumber: 99
      }, this), " will swap in the final ordering with the inclusion of the second criterion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 593,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-coordinate-compression",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-coordinate-compression",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Coordinate Compression"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 596,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Coordinate compression describes the process of mapping each value in a list to\r\nits index if that list was sorted. For example, the list ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{7, 3, 4, 1\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 599,
        columnNumber: 58
      }, this), " would\r\nbe compressed to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{3, 1, 2, 0\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 600,
        columnNumber: 18
      }, this), ". Notice that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 600,
        columnNumber: 48
      }, this), " is the least value in the\r\nfirst list, so it becomes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 601,
        columnNumber: 27
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 601,
        columnNumber: 36
      }, this), " is the greatest value, so it becomes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 601,
        columnNumber: 77
      }, this), ",\r\nthe largest index in the list."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 598,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we have values from a large range, but we only care about their relative\r\norder (for example, if we have to know if one value is above another),\r\ncoordinate compression is a simple way to help with implementation. For example,\r\nif we have a set of integers ranging from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 607,
        columnNumber: 43
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 607,
        columnNumber: 50
      }, this), ", we can't use them as\r\narray indices because we'd have to create an array of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 608,
        columnNumber: 60
      }, this), ", which would\r\ncause an MLE verdict. However, if there are only\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\leq 10^6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 610,
        columnNumber: 1
      }, this), " such integers, we can coordinate-compress their values, which\r\nguarantees that the values will all be in the range from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 611,
        columnNumber: 58
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 611,
        columnNumber: 65
      }, this), ", which\r\n", _jsxDEV(_components.em, {
        children: "can"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 612,
        columnNumber: 1
      }, this), " be used as array indices."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 604,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-example-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 616,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A good example of coordinate compression in action is in the solution of ", _jsxDEV(_components.em, {
        children: "USACO\r\nRectangular Pasture."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 618,
        columnNumber: 74
      }, this), " Again, we won't delve into the full solution but instead\r\ndiscuss how coordinate compression is applied. Since the solution uses\r\n", _jsxDEV(_components.a, {
        href: "/silver/more-prefix-sums#2d-prefix-sums",
        children: "2D-prefix"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 621,
        columnNumber: 1
      }, this), " sums (another Silver topic), it is helpful if\r\nall point coordinates are coordinate-compressed to the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 622,
        columnNumber: 62
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 622,
        columnNumber: 69
      }, this), " so\r\nthey can be used as array indices. Without coordinate compression, creating a\r\nlarge enough array would result in a ", _jsxDEV(_components.code, {
        children: "Memory Limit Exceeded"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 624,
        columnNumber: 38
      }, this), " verdict."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 618,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Below you will find the solution to Rectangular Pasture, which uses coordinate\r\ncompression at the beginning. Observe how a custom comparator is used to sort\r\nthe points:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 626,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "The solution to Rectangular Pasture directly replaces coordinates with their\r\ncompressed values, and forgets the real values of the coordinates because they\r\nare unnecessary. However, there may be problems for which we need to also\r\nremember the original values of coordinates that we compress."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 796,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-example-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 801,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This problem will require prefix sums and coordinate compression. However, the\r\nimplementation of coordinate compression in this solution will also require\r\nremembering values in addition to compressing them (as opposed to just replacing\r\nthe original values, as in the last problem). If you just want to focus on the\r\nimplementation of coordinate compression and how it can switch between\r\ncompressed indices and original values, see the contracted code below. ", _jsxDEV(_components.code, {
        children: "indices"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 810,
        columnNumber: 72
      }, this), "\r\nis a list of values that need to be compressed. After it gets sorted and has\r\nduplicate values removed, it is ready to use. The method ", _jsxDEV(_components.code, {
        children: "getCompressedIndex"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 812,
        columnNumber: 58
      }, this), "\r\ntakes in an original value, and ", _jsxDEV(_components.a, {
        href: "/silver/binary-search-sorted-array",
        children: "binary searches"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 813,
        columnNumber: 33
      }, this), " for its\r\nposition in ", _jsxDEV(_components.code, {
        children: "indices"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 814,
        columnNumber: 13
      }, this), " to get its corresponding compressed index. To go from a\r\ncompressed index to an original value, the code can just access that index in\r\n", _jsxDEV(_components.code, {
        children: "indices"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 816,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 805,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We also provide a more detailed explanation:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 818,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 1145,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h1, {
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
      lineNumber: 1156,
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
