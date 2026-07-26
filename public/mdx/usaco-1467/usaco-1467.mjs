"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob1_bronze_jan25.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++, Python)"
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
      id: "user-content-case-1-a--0-and-b--0",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-case-1-a--0-and-b--0",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Case 1: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 25
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since no stars are moving, they can only disappear in image 2."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 3
        }, this), " means the star stayed across both images"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "G"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 3
        }, this), " means the star existed ", _jsxDEV(_components.strong, {
          children: "only in the first image"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 30
        }, this), ", and then disappeared in the second image."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "W"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 3
        }, this), " means in either picture there was no star.\r\nTo count how many stars were in image 2, we count how many ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 60
        }, this), "s and ", _jsxDEV(_components.code, {
          children: "G"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 69
        }, this), "s are present."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["For the above case with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 25
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 37
      }, this), " the answer would be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 65
      }, this), " stars."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-case-2-a-ne-0-or-b-ne-0",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-case-2-a-ne-0-or-b-ne-0",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Case 2: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A \\ne 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 13
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B \\ne 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 26
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["This will begin with some simple logic and extend later (for ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 64
        }, this), " stars)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 14
      }, this), " are non-zero we can tell that star ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 53
      }, this), " moved to star ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i+A, j+B)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 76
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So for every star (top-left to bottom-right) ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 46
      }, this), " if a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i+A, j+B)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 60
      }, this), " is present, we can tell that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i+A, j+B)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 102
      }, this), " was shifted and belongs to image 2."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["For example, when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 19
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 31
      }, this), ", we know the star at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 60
      }, this), " moved to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2, 3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 78
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "All of the shifted stars are:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(1,1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 3
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(2,3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 14
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(3,1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 3
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(4,3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 14
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(2,3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 3
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(3,5)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 14
        }, this), "\r\nand are from image 2, so removing the stars we know are in image-2 to gives us a minimum of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 93
        }, this), " stars."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We do not assign ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 18
      }, this), " stars as image-2-only since it is in both images."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-edge-cases",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-edge-cases",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Edge Cases"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A lot of edge cases come from ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 31
      }, this), " cells, for example with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 59
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 71
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 137,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["would result in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 17
      }, this), " since if we backtrack, a ", _jsxDEV(_components.code, {
        children: "W"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 47
      }, this), " cell points to ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 66
      }, this), " which is not possible for it to be in both images."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 160,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Another case with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 19
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 29
      }, this), " is"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "with the earlier logic we can point"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(1,1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 184,
          columnNumber: 3
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(2,1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 184,
          columnNumber: 14
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(1,2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 185,
          columnNumber: 3
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(2,2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 185,
          columnNumber: 14
        }, this), "\r\nwhich is !"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is because the ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 21
      }, this), " cell has to be pointed by something. This means that the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2,1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 82
      }, this), " in image 2 was deleted, and is actually from image 1."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "These are all the base rules so we can now structure the logic:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A=0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 192,
          columnNumber: 6
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B=0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 192,
          columnNumber: 16
        }, this), " then count how many ", _jsxDEV(_components.code, {
          children: "G"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 192,
          columnNumber: 42
        }, this), " & ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 192,
          columnNumber: 48
        }, this), "s occur."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise for every star not assigned to image 2, add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 193,
          columnNumber: 57
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 193,
          columnNumber: 65
        }, this), " to its coordinates and see where it leads."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If it leads to a star (not ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 194,
          columnNumber: 30
        }, this), ") then assign that to image 2."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For every ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 195,
          columnNumber: 13
        }, this), " cell, check if another star leads to it otherwise return ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 195,
          columnNumber: 74
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If a ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 196,
          columnNumber: 8
        }, this), " cell is led to by an star assigned to image 2, it should be unassigned from image 2."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
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
      lineNumber: 200,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(T\\cdot N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
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
