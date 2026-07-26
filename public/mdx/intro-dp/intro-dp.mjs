"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Dynamic Programming"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " (DP) is an important algorithmic technique in\r\nCompetitive Programming from the gold division to competitions like the\r\nInternational Olympiad of Informatics. By breaking down the full task into\r\nsub-problems, DP avoids the redundant computations of brute force solutions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Although it is not too difficult to grasp the general ideas behind DP, the\r\ntechnique can be used in a diverse range of problems and is a must-know idea for\r\ncompetitors in the USACO Gold division."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-general-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "If you prefer watching videos instead, here are some options:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---frog-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---frog-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Frog 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The problem asks us to compute the minimum total cost it takes for a frog to\r\ntravel from stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 19
      }, this), " to stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N (N \\le 10^5)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 32
      }, this), " given that the frog can only\r\njump a distance of one or two. The cost to travel between any two stones ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 74
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 1
      }, this), " is given by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|h_i - h_j|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 17
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 38
      }, this), " represents the height of stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 75
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-without-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-without-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Without Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since there are only two options, we can use recursion to compute what would\r\nhappen if we jumped either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 28
      }, this), " stone, or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 42
      }, this), " stones. There are two\r\npossibilities, so recursively computing would require computing both a left and\r\nright subtree. Therefore, for every additional jump, each branch splits into\r\ntwo, which results in an exponential time complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, this can be sped up\r\nwith dynamic programming by keeping track of \"optimal states\" in order to avoid\r\ncalculating states multiple times. For example, recursively calculating jumps of length\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1,2,1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2,1,2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 13
      }, this), " reuses the state of stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 47
      }, this), ". Dynamic programming provides\r\nthe mechanism to cache such states."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-dynamic-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-dynamic-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Dynamic Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two main DP approaches:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Push DP"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 3
        }, this), ", where we update future states based on the current state"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Pull DP"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 3
        }, this), ", where we calculate the current state based on past states"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We present both approaches below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-push-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-push-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Push DP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There are only two options: jumping once, or jumping twice. Define\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 1
      }, this), " as the minimum cost to reach stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 53
      }, this), ". Then, our transitions are as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Jump one stone, incurring a cost of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "|\\text{height}_i - \\text{height}_{i+1}|"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 131,
            columnNumber: 39
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i + 1] = \\min(\\texttt{dp}[i + 1], \\texttt{dp}[i] + |\\text{height}_i - \\text{height}_{i + 1}|)"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Jump two stones, incurring a cost of\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "|\\text{height}_i - \\text{height}_{i + 2}|"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 138,
            columnNumber: 3
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 137,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i + 2] = \\min(\\texttt{dp}[i + 2], \\texttt{dp}[i] + |\\text{height}_i - \\text{height}_{i + 2}|)"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 139,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 131,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can start with the base case that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[0] = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 38
      }, this), ", since the frog is\r\nalready on that square, and proceed to calculate\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[1], \\texttt{dp}[2], \\ldots \\texttt{dp}[N - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 143,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-pull-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-pull-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Pull DP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There are two ways to get to stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 36
      }, this), ": from stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 52
      }, this), " and stone ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i - 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 70
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Jump from stone ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i - 1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 250,
            columnNumber: 19
          }, this), ", incurring a cost of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "|\\text{height}_i - \\text{height}_{i-1}|"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 250,
            columnNumber: 48
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 250,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i] = \\min(\\texttt{dp}[i], \\texttt{dp}[i - 1] + |\\text{height}_i - \\text{height}_{i - 1}|)"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 252,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Jump from stone ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "i - 2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 256,
            columnNumber: 19
          }, this), ", incurring a cost of\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "|\\text{height}_i - \\text{height}_{i - 2}|"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 257,
            columnNumber: 3
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 256,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{dp}[i] = \\min(\\texttt{dp}[i], \\texttt{dp}[i - 2] + |\\text{height}_i - \\text{height}_{i - 2}|)"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 258,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can start with the base case that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[0] = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 38
      }, this), ", since the frog is already on that square, and proceed to calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[1], \\texttt{dp}[2], \\ldots \\texttt{dp}[N - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 127
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 262,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-classical-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-classical-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Classical Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 369,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The next few modules provide examples of some classical problems: Dynamic\r\nProgramming problems which are well known. However, classical doesn't\r\nnecessarily mean common. Since so many competitors know about these problems,\r\nproblemsetters rarely set direct applications of them."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 371,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problemsets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problemsets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problemsets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 379,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.p, {
      children: "Some of these problems will be mentioned in the next few modules."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 419,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-introductory-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introductory-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introductory Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 421,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Easier problems that don't require many optimizations or complex states."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 423,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-harder-usaco",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-harder-usaco",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Harder USACO"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 436,
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
