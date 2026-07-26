"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Solving this problem all at once is extremely difficult: let's go through the subtasks first."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-subtasks-1-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtasks-1-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtasks 1-2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Due to the small bounds on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 28
      }, this), ", an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 36
      }, this), " solution suffices."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 8
      }, this), " as the length of the longest LBS (longest beautiful subsequence) that ends at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 103
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{trans}_k(y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 112
      }, this), " as all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 141
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\hspace{3pt} \\& \\hspace{3pt} y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 155
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 194
      }, this), " bits. We transition by iterating over all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j < i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 240
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j \\in \\texttt{trans}_{k_i}(a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 254
      }, this), ".  To reconstruct an optimal solution we define another array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prv}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 351
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{prv}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 373
      }, this), " is the most optimal index to include directly before index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 450
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Consider the first sample case: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 33
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a = \\{1, 2, 3, 4\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 42
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = \\{10, 0, 1, 0\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 68
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Base case:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 3
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[i] = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 18
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 47
        }, this), " (any single number forms an LBS) and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{prv}[i] = i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 88
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 3
        }, this), ": we try extending the longest LBS that ends at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_0 = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 67
        }, this), ". Because ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{bc}[a_0][a_1] == k_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 86
        }, this), ", our new LBS is valid, and we update ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[1] = \\texttt{dp}[0] + 1 = 2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 154
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{prv}[1] = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 200
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[2]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 3
        }, this), ": we try to extend the LBS from both ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 56
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 66
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "a_0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 4
            }, this), ": ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{bc}[a_0][a_2] == k_2 \\rightarrow \\texttt{dp}[2] = \\texttt{dp}[0] + 1 = 2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 11
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[2] = 0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 18,
              columnNumber: 98
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 18,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "a_1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 19,
              columnNumber: 4
            }, this), ": ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{bc}[a_1][a_2] == k_2 \\rightarrow \\texttt{dp}[2] = \\texttt{dp}[1] + 1 = 3"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 19,
              columnNumber: 11
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[2] = 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 19,
              columnNumber: 98
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["We take the larger of the two DP values, so ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[2] = 3"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 20,
              columnNumber: 48
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[2] = 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 20,
              columnNumber: 73
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[3]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 3
        }, this), ": we try to extend from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 43
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 50
        }, this), ", and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 61
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "a_0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 22,
              columnNumber: 4
            }, this), ": ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{bc}[a_0][a_3] \\neq k_3 \\rightarrow"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 22,
              columnNumber: 11
            }, this), " no transition"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "a_1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 23,
              columnNumber: 4
            }, this), ": ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{bc}[a_1][a_3] == k_3 \\rightarrow \\texttt{dp}[3] = \\texttt{dp}[1] + 1 = 3"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 23,
              columnNumber: 11
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[3] = 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 23,
              columnNumber: 98
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 23,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "a_2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 24,
              columnNumber: 4
            }, this), ": ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{bc}[a_2][a_3] == k_3 \\rightarrow \\texttt{dp}[3] = \\texttt{dp}[2] + 1 = 4"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 24,
              columnNumber: 11
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[3] = 2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 24,
              columnNumber: 98
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Taking the larger of the two options, ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[3] = 4"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 25,
              columnNumber: 42
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[3] = 2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 25,
              columnNumber: 67
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 25,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Final answer:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 3
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{len} = \\max(\\texttt{dp}[i]_{i \\in [0, n)}) = \\texttt{dp}[3] = \\boxed{4}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Reconstructing a solution:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Using our ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 28,
              columnNumber: 14
            }, this), " array and the ending index of the LBS, we can repeatedly find the optimal index to include before the current one."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 28,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["choose ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 29,
              columnNumber: 11
            }, this), " such that ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[i] = \\texttt{len} = 4 \\Rightarrow i = 3"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 29,
              columnNumber: 25
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 29,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["initialize ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "ans"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 30,
              columnNumber: 15
            }, this), " as ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\{i\\} = \\{3\\}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 30,
              columnNumber: 24
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 30,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["We repeatedly append ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}{[ans_0]}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 31,
              columnNumber: 25
            }, this), " to the front of ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "ans"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 31,
              columnNumber: 65
            }, this), ".\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "ans = \\{\\texttt{prv}[3], 3\\} = \\{2, 3\\}"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 32,
                  columnNumber: 5
                }, this)
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 32,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "ans = \\{\\texttt{prv}[2], 2, 3\\} = \\{1, 2, 3\\}"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 33,
                  columnNumber: 5
                }, this)
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 33,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "ans = \\{\\texttt{prv}[1], 1, 2, 3\\} = \\{0, 1, 2, 3\\}"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 34,
                  columnNumber: 5
                }, this)
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 34,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{prv}[0] = 0"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 35,
                  columnNumber: 5
                }, this), ", so we terminate."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 35,
                columnNumber: 3
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 32,
              columnNumber: 3
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 31,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Therefore, our final (0-indexed) answer will be ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "ans = \\boxed{\\{0, 1, 2, 3\\}}."
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 36,
              columnNumber: 52
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 36,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While the bounds on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 21
      }, this), " are now much larger (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\leq 10^5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 46
      }, this), "), the maximum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 83
      }, this), " is now only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M = 2^8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 101
      }, this), ". We can use this to optimize our solution: rather than looping over every possible previous index, we can loop over all possible previous values instead."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["More specifically, we define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}[i][x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 30
      }, this), " to be the length of the longest LBS that ends with ", _jsxDEV(_components.strong, {
        children: "value"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 102
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 112
      }, this), " (rather than index) and is a subset of the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 165
      }, this), " numbers. We have two transitions for each index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 217
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Include ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 11
        }, this), ": to calculate ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[i][a_i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 31
        }, this), ", we transition from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[i - 1][x]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 74
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\in \\texttt{trans}_{k_i}(a_i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 107
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Don't include ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 109,
          columnNumber: 17
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[i][x] = \\texttt{dp1}[i - 1][x]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 109,
          columnNumber: 24
        }, this), " for all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\leq M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 109,
          columnNumber: 78
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["This improves our time complexity to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 38
      }, this), ". Notice that, because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}[i][x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 78
      }, this), " only depends on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}[i - 1][...]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 115
      }, this), ", we can drop the first dimension."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 115,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the first sample case again: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n = 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 39
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a = \\{1, 2, 3, 4\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 48
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = \\{10, 0, 1, 0\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 74
      }, this), ". The maximum value is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M = 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 118
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Base case:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 118,
          columnNumber: 3
        }, this), " ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[a_0 = 1] = \\{1, 0\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 118,
          columnNumber: 18
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "all other DP values are initially 0"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 119,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{prv}[i] = i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 120,
              columnNumber: 4
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 120,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 119,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[a_1 = 2] = \\{2, 1\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 3
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["we loop over all states ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp1}[x]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 28
            }, this), " where ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x \\leq M"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 52
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 67
            }, this), " is in ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{trans}_{k_i}(a_i)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 77
            }, this), ". The values of ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 120
            }, this), " that satisfy these conditions are ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "0"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 158
            }, this), ", ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 163
            }, this), ", and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "4"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 172
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 122,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Out of these ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 123,
              columnNumber: 17
            }, this), "'s, ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp1}[x = 1]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 123,
              columnNumber: 24
            }, this), " has the greatest value of ", _jsxDEV(_components.code, {
              children: "len"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 123,
              columnNumber: 72
            }, this), ", so:\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp1}[a_1]. \\texttt{len} = \\texttt{dp1}[x].\\texttt{len} + 1 = 2"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 124,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 124,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp1}[a_1].\\texttt{end} = i = 1"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 125,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 125,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{prv}[i] = \\texttt{dp1}[x].\\texttt{end} = 0"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 126,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 126,
                columnNumber: 3
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 124,
              columnNumber: 3
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 123,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 122,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[a_2 = 3] = \\{3, 2\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 3
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["here, ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x \\in \\{1, 2\\}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 128,
              columnNumber: 10
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp1}[x = 2]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 128,
              columnNumber: 31
            }, this), " has the greater value, so:\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp1}[a_2]. \\texttt{len} = \\texttt{dp1}[x].\\texttt{len} + 1 = 3"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 129,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 129,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp1}[a_2].\\texttt{end} = i = 2"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 130,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 130,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{prv}[i] = \\texttt{dp1}[x].\\texttt{end} = 1"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 131,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 131,
                columnNumber: 3
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 129,
              columnNumber: 3
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 128,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 128,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[a_3 = 4] = \\{4, 3\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 3
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["here, ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "x \\in \\{0, 1, 2, 3\\}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 133,
              columnNumber: 10
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp1}[x = 3]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 133,
              columnNumber: 37
            }, this), " has the greatest value so:\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp1}[a_3]. \\texttt{len} = \\texttt{dp1}[x].\\texttt{len} + 1 = 4"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 134,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 134,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp1}[a_3].\\texttt{end} = i = 3"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 135,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 135,
                columnNumber: 3
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{prv}[i] = \\texttt{dp1}[x].\\texttt{end} = 2"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 136,
                  columnNumber: 5
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 136,
                columnNumber: 3
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 134,
              columnNumber: 3
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 133,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Final answer:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 137,
          columnNumber: 3
        }, this), " the max DP ", _jsxDEV(_components.code, {
          children: "len"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 137,
          columnNumber: 32
        }, this), " value, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\boxed{4}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 137,
          columnNumber: 45
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 141,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-3-alternate-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-3-alternate-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 3 (Alternate Solution)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In our previous solution for this Subtask 3, the loop from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0...M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 60
      }, this), " seems repetitive and motivates somehow restricting the search space of DP states. ", _jsxDEV(_components.strong, {
        children: ["How can we quickly process all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 183
        }, this), " in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{trans}_{k_i}(a_i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 190
        }, this), "?"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 150
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 215,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The most extreme way to optimize transitions is to embed the restrictions of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 78
      }, this), " directly in the DP state."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Concretely, define ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp2}[i][k]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 219,
          columnNumber: 22
        }, this), " as the maximum value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}[x]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 219,
          columnNumber: 67
        }, this), " over all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 219,
          columnNumber: 94
        }, this), " in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{trans}_k(i)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 219,
          columnNumber: 101
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To better understand this redefinition of our DP state, let's look at our sample again. Notice, in our computation of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}[a_3 = 4]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 119
      }, this), ", we process all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\in \\{0, 1, 2, 3\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 159
      }, this), " one by one. However, in our newly defined state, we can get the most optimal solution over all values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 284
      }, this), " simply by querying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp2}[a_3][k_3]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 307
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 221,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["In general, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp2}[a_i][k_i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 223,
          columnNumber: 15
        }, this), " is now an ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 223,
          columnNumber: 50
        }, this), " transition to find the longest LBS that ends at index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 223,
          columnNumber: 121
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, each state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp2}[i][k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 21
      }, this), " now encapsulates ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|\\texttt{trans}_k(i)| \\leq M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 59
      }, this), " of our original ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 106
      }, this), " states. Similarly, an LBS with fixed final value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 170
      }, this), " ", _jsxDEV(_components.strong, {
        children: ["affects ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 225,
          columnNumber: 186
        }, this), "  ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 225,
          columnNumber: 191
        }, this), " states"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 176
      }, this), " compared to one ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 231
      }, this), " state: namely, all states ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp2}[x][k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 272
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\in [0, M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 299
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = \\texttt{bc}[a_i][x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 225,
        columnNumber: 318
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 225,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-dp2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-dp2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation (", _jsxDEV(_components.code, {
        children: "dp2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 227,
        columnNumber: 21
      }, this), ")"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 227,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-4-full-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-4-full-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 4 (Full Solution)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 293,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In summary, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 295,
        columnNumber: 16
      }, this), " is the last number in an LBS:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 295,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 296,
          columnNumber: 3
        }, this), " (only one possible value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 296,
          columnNumber: 46
        }, this), ") ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\rightarrow \\mathcal{O}(M)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 296,
          columnNumber: 51
        }, this), " transition, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 296,
          columnNumber: 92
        }, this), " affected states"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 296,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 297,
          columnNumber: 3
        }, this), " (up to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "M"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 297,
          columnNumber: 25
        }, this), " possible values of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 297,
          columnNumber: 48
        }, this), ") ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\rightarrow \\mathcal{O}(1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 297,
          columnNumber: 53
        }, this), " transition,  ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(M)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 297,
          columnNumber: 95
        }, this), " affected states"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 297,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 296,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that, no matter how we define the DP state, these two complexities will always multiply to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 99
      }, this), ". Therefore, we want to find a restriction such that both complexities are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt{M})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 190
      }, this), ". This motivates using a blend of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 247
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 266
      }, this), ". Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 288
      }, this), " already restricts bits, it seems natural to consider applying ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 366
      }, this), " on some bits of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 397
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 299,
        columnNumber: 405
      }, this), " on the rest."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 299,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Concretely, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_x = \\texttt{l}(x, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 17
      }, this), " be the number represented by the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 75
      }, this), " leftmost bits of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 96
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_x = \\texttt{r}(x, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 104
      }, this), " be the number represented by the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bit\\_count}(x) - b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 162
      }, this), " rightmost bits. In our new DP state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j][k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 227
      }, this), ", we will:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 301,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["fix ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "l_x = i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 302,
          columnNumber: 7
        }, this), " (this is the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp1}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 302,
          columnNumber: 30
        }, this), " part of our new state)"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 302,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["restrict ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r_x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 303,
          columnNumber: 13
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r_x \\in \\texttt{trans}_k(j) \\Rightarrow \\texttt{bc}[r_x][j] = k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 303,
          columnNumber: 29
        }, this), " (this is the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp2}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 303,
          columnNumber: 108
        }, this), " part of our new state)"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 303,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["What are the time complexities of ", _jsxDEV(_components.em, {
        children: "transition"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 305,
        columnNumber: 35
      }, this), " and ", _jsxDEV(_components.em, {
        children: "affected states"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 305,
        columnNumber: 52
      }, this), " now?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 305,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-transition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-transition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Transition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's say we're currently processing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 38
      }, this), ". If we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 56
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\in \\texttt{trans}_{k_i}(a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 70
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bc}[x][a_i] = k_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 110
      }, this), ". By considering the left and right sides of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 182
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 190
      }, this), " separately, we can rewrite ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bc}[x][a_i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 223
      }, this), " as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bc}[l_x][l_{a_i}] + \\texttt{bc}[r_x][r_{a_i}] = k_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 248
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 310,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Example:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 14
      }, this), " = 01010, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 27
      }, this), " = 01101, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 42
      }, this), " = 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 311,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "01010 & 01101 = 01000 -> 1\r\n\r\n010   & 011   = 010   -> 1\r\n\r\n   10 &    01 =    00 -> 0\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 312,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 312,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "1 + 0 = \\boxed1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 319,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 320,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since our DP state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[l][r][k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 20
      }, this), " fixes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l_x = l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 49
      }, this), ", we should rewrite this equation to solve for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 105
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bc}[r_x][r_{a_i}] = k_i - \\texttt{bc}[l_x][l_{a_i}]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 112
      }, this), ". Note this restriction matches our ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 209
      }, this), " restriction of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{bc}[r_x][j] = k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 238
      }, this), ", so we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r = r_{a_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 276
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = k_i - \\texttt{bc}[l_x][l_{a_i}] = k_i - \\texttt{bc}[x][l_{a_i}]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 294
      }, this), ". As for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l = l_x = \\texttt{l}(x, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 372
      }, this), ", we simply enumerate all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 426
      }, this), " possibilities; therefore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\in [0, 2^b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 321,
        columnNumber: 458
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 321,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: ["In summary, the transitions to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 323,
          columnNumber: 34
        }, this), " are all states ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[l][r_{a_i}][k_i - \\texttt{bc}[l][l_{a_i}]]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 323,
          columnNumber: 55
        }, this), " where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "l \\in [0, 2^b)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 323,
          columnNumber: 118
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 323,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 323,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Because the only variable in the state is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 43
      }, this), ", the complexity of transition is the number of options for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 106
      }, this), " which is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\boxed{2^b}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 119
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 325,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-affected-states",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-affected-states",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Affected States"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We now have the length of the longest LBS that ends at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 56
      }, this), ". What ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[l][r][k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 68
      }, this), " states does this affect?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 329,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Starting with the obvious, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l = l_{a_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 28
      }, this), ". We also have the restriction that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{a_i} \\in \\texttt{trans}_k(r) \\Rightarrow k = \\texttt{bc}[r_{a_i}][r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 77
      }, this), ". Because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{a_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 160
      }, this), " is a constant, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 185
      }, this), " depends solely on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 331,
        columnNumber: 207
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 331,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: ["In summary, the states affected by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 333,
          columnNumber: 38
        }, this), " are all states ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{dp}[l_{a_i}][r][\\texttt{bc}[r_{a_i}][r]]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 333,
          columnNumber: 59
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 333,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 333,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 1
      }, this), " has to have the same amount of bits as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{a_i} = \\texttt{r}(a_i, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 44
      }, this), " which has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log_2{M} - b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 85
      }, this), " bits. Therefore, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 118
      }, this), " has ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{\\log_2M - b} = \\boxed{\\frac{M}{2^b}}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 126
      }, this), " possibilities."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 335,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To sum it all up, the complexity of transition is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 51
      }, this), " and the complexity of affected states is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\frac{M}{2^b})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 111
      }, this), ". To minimize the sum of these complexities, we should equate them. Because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M = 2 ^{20}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 215
      }, this), ", we find the optimal value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 259
      }, this), " to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\boxed{10}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 269
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 337,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 339,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the implementation below:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 341,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{l}(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 342,
          columnNumber: 3
        }, this), " denotes the 10 leftmost bits of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 342,
          columnNumber: 51
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 342,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{r}(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 343,
          columnNumber: 3
        }, this), " denotes the 10 rightmost bits of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 343,
          columnNumber: 52
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 343,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 342,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\sqrt{M})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 345,
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
