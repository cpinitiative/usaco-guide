"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/tasks.php",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
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
      children: ["A naive method would be to iterate through each pair of clones and calculate the number\r\nof positions with different genomes in near ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 45
      }, this), " time.\r\nThis seems to be virtually impossible, so we should probably try a different method."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["What if we somehow managed to check each clone against all the other clones at the same time?\r\nThis way we could iterate through each character and maintain an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 66
      }, this), " time complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can precalculate for each position the number of ", _jsxDEV(_components.code, {
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 53
      }, this), "s, ", _jsxDEV(_components.code, {
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 59
      }, this), "s, ", _jsxDEV(_components.code, {
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 65
      }, this), "s, and ", _jsxDEV(_components.code, {
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 75
      }, this), "s that all the clones have.\r\nThen, when checking a single subject, we see how many of the other genomes have been found at that position\r\nand sum up all the differences at the end."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, this brings up another problem: there's no way to check which genome belongs to which clone!\r\nIf our subject differs from one clone by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 42
      }, this), " positions and from another clone by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 84
      }, this), " positions, our\r\ncurrent algorithm would have no idea that they aren't the actual villain, as the total difference of the\r\ntwo is still ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 14
      }, this), ", the same as if the subject differed from both by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 69
      }, this), " positions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To address this problem, we can assign each clone a random weight ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 67
      }, this), ".\r\nThen, instead of just calculating the ", _jsxDEV(_components.em, {
        children: "number"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 39
      }, this), " of clones with a certain genome at a certain position,\r\nwe calculate the sum of the weights of these clones.\r\nThis allows us to differentiate between a genome difference due to clone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 74
      }, this), " versus a genome difference due to clone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 118
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
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
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
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
