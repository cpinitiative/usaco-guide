"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_art_platinum_open17.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (C++)"
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
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-initial-observation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-initial-observation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Initial Observation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There's just one small observation we should make before continuing with the actual problem,\r\nand it's that given the final canvas, it's optimal to assume that each color takes up only\r\nthe minimum rectangle needed to cover the cells that are shown."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example, if only these blue cells are present in the canvas:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/silver/usaco-744/given.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It's best to think that this is the rectangle Picowso painted:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/silver/usaco-744/filled.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-analysis",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-analysis",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Analysis"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The main issue with this problem is finding out which rectangles ", _jsxDEV(_components.em, {
        children: "must"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 66
      }, this), " overlap other rectangles,\r\nbecause as long as we know that color A overlaps color B, then color A can't possibly have been painted first."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, we can't iterate through all pairs of colors, since that would result in a complexity of at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 108
      }, this), ".\r\nSince that rules out considering things from the colors' angle, why not try considering it from each canvas cell's angle?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Given the observation we made, we know the bounding box of each rectangle.\r\nThus, with prefix sums, it's possible for us to figure out how many rectangles have been painted\r\non a single cell."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With this, we can construct our answer with the fact that if a cell has more than\r\n2 rectangles painted over it, than the color shown in the given painting can't possibly have been painted first.\r\nThus, we keep a set of all colors shown and update it accordingly, removing a color that's found to overlap some other color.\r\nAll colors not shown in the final canvas could have been painted first."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
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
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
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
