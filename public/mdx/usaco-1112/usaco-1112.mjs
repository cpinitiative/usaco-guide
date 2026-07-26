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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob3_silver_feb21.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++, Java)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Firstly, let's consider solving this problem in 1D, where we pick intervals from the list ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 91
      }, this), ", the values for an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\times N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 117
      }, this), " pasture."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 5
      }, this), " be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 16
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(j)<100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 24
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 36
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(j)=100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 43
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 59
      }, this), " if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g(j)>100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 66
      }, this), ".\r\nWe must find a range of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 25
      }, this), "'s in which there are no ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 53
      }, this), "'s, and at least one ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 78
      }, this), ".\r\nWe precompute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 15
      }, this), ".\r\nThe objective is now counting the number of intervals with no ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 63
      }, this), "'s and at least one ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 87
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Next, we sweep ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 16
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 25
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 32
      }, this), ", and keep track of the last index at which we encounter ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 92
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 100
      }, this), "'s as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 110
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j_{-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 120
      }, this), ", respectively.\r\nFor an interval to be picked, it must include a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 49
      }, this), ", so the starting index must be no later than the last ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 107
      }, this), " we encounter;\r\nthe interval cannot include a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 31
      }, this), ", so the starting index must be later than the last ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 87
      }, this), " we encounter.\r\nThus, any range with a starting index in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(j_{-1}, j_0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 52
      }, this), " and an ending index at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 91
      }, this), " works, provided ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j_{-1}<j_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 111
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'(j)\\in\\{0,1\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 128
      }, this), ".\r\nTherr are are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j_0-j_{-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 15
      }, this), " intervals; we accumulate those numbers if the conditions are satisfied to get our answer.\r\nWe initialize both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j_0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j_{-1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 30
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 42
      }, this), ", so that they produce no accumulation initially, and that all possibilities of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, j_0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 125
      }, this), " will be counted if a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 157
      }, this), " has not occurred yet."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, we generalize this onto two dimensions, where we pick subrectangles from an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N\\times N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 82
      }, this), " pasture. We denote the values in the pasture ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 139
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i,j\\in[1,N]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 153
      }, this), ".\r\nFirst, we consider the cases where the rectangle's bounds include ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 67
      }, this), " and  ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 78
      }, this), ", leaving us the choice of the interval for the left and right bounds.\r\nAs in the 1D case, we sweep from left to right for the right endpoint, and build a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 84
      }, this), " to track feasibility of the left endpoint by column.\r\nAny ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "<100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 5
      }, this), " element in a column blocks selection, and any ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "=100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 58
      }, this), " element allows selection, so ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 94
      }, this), " is marked ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 109
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 117
      }, this), " if these conditions hold for any element in a column, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 179
      }, this), " otherwise.\r\nWe then proceed as in the 1D case for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 39
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We now generalize to the case where the subrectangle can have arbitrary vertical bounds ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 89
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i=i_2\\geq i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 101
      }, this), ".\r\nNaively, we would proceed as we would in our previous case, while only using elements in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i\\in[i_1,i_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 90
      }, this), " in each column to compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 132
      }, this), "; however, recomputing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 159
      }, this), " each time is too inefficient.\r\nThus, we use an incremental approach:\r\nAt each possible ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 18
      }, this), ", we reset ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 34
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 45
      }, this), "s, before we loop over ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 71
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 81
      }, this), ".\r\nAt each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 9
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'(j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 16
      }, this), " accounts for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G(i_1\\ldots i_2-1,j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 37
      }, this), ", so we update it to account for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G(i_2,j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 92
      }, this), " at each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 111
      }, this), " before using our previous approach.\r\nTracking the array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 20
      }, this), " cumulatively gives us ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 47
      }, this), " time complexity for each choice of top and bottom rows, so overall we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 138
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
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
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
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
