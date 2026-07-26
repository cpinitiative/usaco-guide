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
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/43203",
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
      children: "First, to reduce our problem, we observe the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Being divisible by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 23
        }, this), " means that our number is equivalent to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 66
        }, this), ", mod ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 75
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{count\\_magic}(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 8
        }, this), " define all the magic numbers ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\leq x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 64
        }, this), ".\r\nThe frequency of magic numbers in the range ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "[a, b]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 48
        }, this), " is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{count\\_magic}(b) - \\texttt{count\\_magic}(a - 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 60
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then, we can use a somewhat typical DP state to model the problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j][k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 5
      }, this), " represent all the possibilities, when:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We have considered the first ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 32
        }, this), " digits"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Our number is equivalent to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 31
        }, this), ", mod ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 40
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), " represents if our number is \"free\" or not\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["If the first ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 17,
              columnNumber: 18
            }, this), " digits in our number match up with the bound or not"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 17,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, after considering all of our digits, we consider all the numbers equivalent\r\nto ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 4
      }, this), " mod ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 12
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here are some key points to consider when implementing the problem:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Handling ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 12
        }, this), " in string form is annoying. Instead, we can consider the values of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{count\\_magic}(a)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 85
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{count\\_magic}(b)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 116
        }, this), ", then manually handle ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 165
        }, this), " on its own."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Note how the problem guarantees that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 40
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 48
        }, this), " are the same length. This means that we can effectively ignore leading zeroes in our implementation."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
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
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M \\cdot D)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "D"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 54
      }, this), " is the number of digits\r\nin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 4
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 12
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
