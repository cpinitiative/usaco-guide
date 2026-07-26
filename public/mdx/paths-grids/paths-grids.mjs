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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A common archetype of DP Problems involves a 2D grid of square cells (like graph\r\npaper), and we have to analyze \"paths.\" A ", _jsxDEV(_components.strong, {
        children: "path"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 43
      }, this), " is a sequence of cells whose\r\nmovement is restricted to one direction on the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 48
      }, this), "-axis and one direction on the\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "-axis (for example, you may only be able to move down or to the right).\r\nUsually, the path also has to start in one corner of the grid and end on another\r\ncorner. The problem may ask you to count the number of paths that satisfy some\r\nproperty, or it may ask you to find the max/min of some quantity over all paths."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Usually, the sub-problems in this type of DP are a sub-rectangle of the whole\r\ngrid. For example, consider a problem in which we count the number of paths from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(N, M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 13
      }, this), " when we can only move in the positive ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 60
      }, this), "-direction and the\r\npositive ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 10
      }, this), "-direction."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[x][y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 5
      }, this), " be the number of paths in the sub-rectangle whose\r\ncorners are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 26
      }, this), ". We know that the first cell in a path counted\r\nby ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[x][y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 4
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 27
      }, this), ", and we know the last cell is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 66
      }, this), ".\r\nHowever, the second-to-last cell can either be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x-1, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 48
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y-1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 62
      }, this), ". Thus,\r\nif we pretend to append the cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 34
      }, this), " to the paths that end on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x-1, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 68
      }, this), " or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y-1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), ", we construct paths that end on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 44
      }, this), ". Working backwards like that\r\nmotivates the following recurrence:\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[x][y] = \\texttt{dp}[x-1][y] + \\texttt{dp}[x][y-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this), ". We can use this\r\nrecurrence to calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[N][M]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 25
      }, this), ". Keep in mind that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[1][1] = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), " because the path to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 45
      }, this), " is just a single cell. In\r\ngeneral, thinking about how you can append cells to paths will help you\r\nconstruct the correct DP recurrence."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When using the DP recurrence, it's important that you compute the DP values in\r\nan order such that the dp-value for a cell is known before you use it to compute\r\nthe dp-value for another cell. In the example problem above, it's fine to\r\niterate through each row from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 31
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 38
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Note how the coordinates in the code are in the form (x coordinate, y\r\ncoordinate). Most of the time, it's more convenient to think of points as (row,\r\ncolumn) instead, which swaps the order of the coordinates, though the code uses\r\nthe former format to be consistent with the definition of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[x][y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 59
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---grid-paths",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---grid-paths",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Grid Paths"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this problem, we are directly given a 2D grid of cells, and we have to count\r\nthe number of paths from corner to corner that can only go down (positive ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 75
      }, this), "\r\ndirection) and to the right (positive ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 39
      }, this), " direction), with a special catch. The\r\npath can't use a cell marked with an asterisk."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We come close to being able to use our original recurrence, but we have to\r\nmodify it. Basically, if a cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 33
      }, this), " is normal, we can use the recurrence\r\nnormally. But, if cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 24
      }, this), " has an asterisk, the dp-value is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 66
      }, this), ", because no\r\npath can end on a trap."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "  \\texttt{dp}[x][y] =\r\n\\begin{cases}\r\n\\texttt{dp}[x-1][y] + \\texttt{dp}[x][y-1] & \\text{if $(x, y)$ is not a trap} \\\\\r\n0, & \\text{if $(x, y)$ is a trap}\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The code for the DP recurrence doesn't change much:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Note how the coordinates are now in the form (row, column) when reading in the\r\ninput."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 239,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---longest-common-subsequence",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---longest-common-subsequence",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Longest Common Subsequence"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Longest_common_subsequence_problem",
        rel: "nofollow",
        target: "_blank",
        children: "longest common subsequence"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 1
      }, this), "\r\nis a classical string problem, but where's the grid?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 258,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In fact, we can create a grid to solve it. Think about the following algorithm\r\nto create any (not necessarily the longest) subsequence between two strings ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 77
      }, this), "\r\nand ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 5
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 262,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We start with two pointers, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 266,
          columnNumber: 31
        }, this), ", and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 266,
          columnNumber: 40
        }, this), ", each beginning at ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 266,
          columnNumber: 63
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "We do some \"action\" at each time step, until there are no more available\r\n\"actions\". An \"action\" can be any of the following:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Increase the value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 270,
          columnNumber: 26
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 270,
          columnNumber: 33
        }, this), " (only works if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i < |A|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 270,
          columnNumber: 52
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Increase the value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 271,
          columnNumber: 26
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 271,
          columnNumber: 33
        }, this), " (only works if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j < |B|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 271,
          columnNumber: 52
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Increase the value of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 272,
          columnNumber: 26
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 272,
          columnNumber: 34
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 272,
          columnNumber: 41
        }, this), " only if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A_i = B_j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 272,
          columnNumber: 53
        }, this), ". Append that\r\ncharacter ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 273,
          columnNumber: 14
        }, this), " (or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B_j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 273,
          columnNumber: 24
        }, this), ") to the common subsequence. (only works if\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i < |A|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 274,
          columnNumber: 4
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "j < |B|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 274,
          columnNumber: 18
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "We know that this process creates a common subsequence because characters\r\nwhich are common to both strings are found from left to right."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 276,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This algorithm can also be illustrated on a grid. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A := xabcd"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 55
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B := yazc"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 280,
        columnNumber: 1
      }, this), ". Then, the current state of the algorithm can be defined as a\r\nspecific point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 16
      }, this), " using the values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 45
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 53
      }, this), " that we discussed\r\npreviously. The process of increasing pointers can be seen as moving right (if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 1
      }, this), " is increased), moving down (if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 36
      }, this), " is increased), or moving diagonally (if\r\nboth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 14
      }, this), " increase). See that each diagonal movement adds one to the\r\nlength of the common subsequence."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 279,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, we re-phrase \"the length of the longest increasing subsequence\" as \"the\r\nmaximum number of 'diagonal movements' (\"action 3\" in the above algorithm) in a\r\npath from the top-left corner to the bottom-right corner on the grid.\" Thus, we\r\nhave constructed a grid-type DP problem."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 287,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In the above grid, see how the bolded path has diagonal movements at characters\r\n\"a\" and \"c\". That means the longest common subsequence between \"xabcd\" and\r\n\"yazc\" is \"ac\"."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 303,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Based on the three \"actions\", which are also the three possible movements of the\r\npath, we can create a DP-recurrence to find the longest common subsequence:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j] =\r\n\\begin{cases}\r\n\\max(\\texttt{dp}[i-1][j], \\texttt{dp}[i][j-1]) & \\text{if }A_i \\neq B_j \\\\\r\n\\texttt{dp}[i-1][j-1]+1, & \\text{if }A_i = B_j\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 310,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 420,
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
