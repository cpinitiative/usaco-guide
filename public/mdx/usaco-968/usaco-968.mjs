"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_milkvisits_silver_dec19.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N + M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We perform a search on the tree, identifying connected components of cows that\r\nall have the same breed."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the sample test case, there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 36
      }, this), " connected components:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Component ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 13
        }, this), ": Farms ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 24
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 29
        }, this), ", and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 38
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Component ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 13
        }, this), ": Farm ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 23
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Component ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 13
        }, this), ": Farm ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 23
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Next, we assign the farms in each component a number corresponding to the component\r\nthey are in.\r\nFor example, in the sample test case, farm ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 44
      }, this), " would get the number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 69
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 74
      }, this), " would get\r\nthe number ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 12
      }, this), ", and so on and so forth."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When checking if a visiting farmer going from farm ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 52
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 59
      }, this), " will be happy,\r\nthere's two possible cases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Farms ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 10
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 18
        }, this), " are part of the same component. This means the path between\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 4
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 12
        }, this), " only contains cows of the same breed. If the farmer prefers milk\r\nfrom this breed, then we should output ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 43
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 51
        }, this), " otherwise."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Farms ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 10
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 18
        }, this), " are part of different components. This means that the\r\nfarmer will always be satisfied because the path between ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 61
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 69
        }, this), " contains\r\nboth breeds of cows, and so we should always output ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 56
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's a walkthrough for the sample test case queries:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Farms ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 10
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 18
        }, this), " are in the same component, and since Farmer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 66
        }, this), "'s preferred\r\ncow is Holstein, they will be satisfied. (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 46
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Farms ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 10
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 18
        }, this), " are in the same component, but since Farmer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 34,
          columnNumber: 66
        }, this), "'s preferred\r\ncow is Guernsey, they will be unsatisfied. (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 48
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Farms ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 10
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 18
        }, this), " are in different components, so Farmer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 61
        }, this), " will be\r\nsatisfied. (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 16
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Same logic as query ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 24
        }, this), ". (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 30
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Farm ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 9
        }, this), " is Guernsey, and Farmer ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 37
        }, this), "'s preferred cow is Holstein, they will\r\nbe unsatisfied. (", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 21
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
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
