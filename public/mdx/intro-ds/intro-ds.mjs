"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "data structure"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 3
      }, this), " determines how data is organized so that information can be\r\nused efficiently. Each data structure supports some operations efficiently,\r\nwhile other operations are either inefficient or not supported at all. Since\r\ndifferent operations are supported by each data structure, you should carefully\r\nevaluate which data structure will work best for your particular problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h1, {
      id: "user-content-pairs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-pairs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Pairs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 512,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we want to store a collection of points on the 2D plane, then we can use a\r\ndynamic array of ", _jsxDEV(_components.strong, {
        children: "pairs"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 515,
        columnNumber: 18
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 514,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-memory-allocation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-memory-allocation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Memory Allocation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 679,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "One thing to keep in mind when using arrays is the memory limit. Usually the\r\nUSACO memory limit is 256 MB. To estimate how many values can be stored within\r\nthis limit:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 681,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Calculate the total memory size in bytes: for 256 MB, that's ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "256\\cdot 10^6"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 685,
          columnNumber: 65
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 685,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Divide by the size, in bytes, of an ", _jsxDEV(_components.code, {
          children: "int"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 686,
          columnNumber: 40
        }, this), " (4), or a ", _jsxDEV(_components.code, {
          children: "long long"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 686,
          columnNumber: 56
        }, this), " (8), etc. For\r\nexample, the number of ", _jsxDEV(_components.code, {
          children: "int"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 687,
          columnNumber: 27
        }, this), "s that you are able to store is bounded above by\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\frac{256\\cdot 10^6}{4}=64\\cdot 10^6"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 688,
          columnNumber: 4
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 686,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Be aware that\r\n", _jsxDEV(_components.a, {
          href: "https://stackoverflow.com/questions/2860234/what-is-overhead",
          rel: "nofollow",
          target: "_blank",
          children: "program overhead"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 690,
          columnNumber: 4
        }, this), "\r\n(which can be very significant, especially with recursive functions) will\r\nreduce the amount of memory available."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 689,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 685,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
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
      lineNumber: 694,
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
      lineNumber: 977,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Nothing to see here! To reiterate, arrays of fixed size should suffice for\r\nessentially every Bronze problem, but dynamic arrays, pairs, and tuples can\r\ngreatly simplify implementation at times. You'll see some examples of these in\r\nthe following module."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 979,
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
