"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_prob2_gold_open22.html",
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
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 5
      }, this), " be Bessie's ith instruction and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 43
      }, this), " be Elsie's jth instruction. Additionally, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "I(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 95
      }, this), " denote the set of unique expressions we can make by interleaving Bessie's first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 185
      }, this), " instructions and Elsie's first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 220
      }, this), " instructions. For example, in the sample:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "3\r\n12+\r\n+02\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "I(0, 0)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{0\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 14
        }, this), " (interleaving ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[\\ ]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 36
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[\\ ]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 47
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "I(0, 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{+y\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 14
        }, this), " (interleaving ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[\\ ]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 37
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[+y]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 48
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "I(2, 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{+y, +2y\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 14
        }, this), " (interleaving ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[*1, *2]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 42
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[+y]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 57
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "I(3, 3)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\{0, +x, +2x\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 14
        }, this), " (interleaving ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[*1, *2, +x]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 45
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[+y, *0, *2]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 64
        }, this), ")"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["So, how do we calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|I(i, j)|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 25
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 13
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 20
      }, this), " are 0, either Bessie or Elsie's instruction set will be empty, meaning the interleaving is uniquely determined and thus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\boxed{|I(i, 0)| = |I(0, i)| = 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 144
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\leq N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 188
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Great, but what if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 28
      }, this), " are both nonzero? Evidently, any interleaving of Bessie's first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 96
      }, this), " instructions and Elsie's first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 131
      }, this), " instructions must either end with instruction ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 181
      }, this), " or instruction ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 202
      }, this), ".\r\nWe can thus rewrite the expressions that end with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 51
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "I(i - 1, j) \\rightarrow a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 60
      }, this), " (let's denote this set as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 116
      }, this), ") and the ones that end with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 148
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "I(i, j - 1) \\rightarrow b_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 157
      }, this), " (let's denote this set as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 213
      }, this), ").\r\nWe also have the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["As long as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 15
        }, this), " isn't ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "*0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 27
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\boxed{|A| = |I(i - 1, j)|}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 36,
          columnNumber: 33
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["As long as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b_j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 15
        }, this), " isn't ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "*0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 27
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\boxed{|B| = |I(i, j - 1)|}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 37,
          columnNumber: 33
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "I(i, j) = A \\cup B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 38,
          columnNumber: 4
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Take some time to convince yourself of these, especially points 1 and 2!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "At this point, you may be tempted to conclude that"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "|I(i, j)| = |A \\cup B| = |A| + |B| = |I(i - 1, j)| + |I(i, j - 1)|"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Don't make this mistake!\r\nRemember the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.strong, {
          children: "Principle of Inclusion-Exclusion"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 14
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "|S \\cup T| = |S| + |T| - |S \\cap T|"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = \\{1, 2\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 17
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T = \\{2, 3\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 36
      }, this), ", we overcount ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 65
      }, this), " if we simply concatenate these two sets, so we need to subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|S \\cap T|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 133
      }, this), ", which, in this case, is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|\\{2\\}| = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 171
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In our case, we overcount ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|A \\cap B|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 27
      }, this), ". So which expressions are in this set? This is a crucial part of the solution, so make sure to spend some time thinking about it before reading the answer below! To make this easier, you may want to first assume neither Bessie nor Elsie has the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "*0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 285
      }, this), " instruction, as it's not too hard to figure out whether ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "I(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 346
      }, this), " contains the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 369
      }, this), " expression and reduces the number of edge cases we need to consider."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
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
