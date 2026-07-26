"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_prob1_silver_open21.html",
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
    }, this), "\n", _jsxDEV(_components.h1, {
      id: "user-content-video-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Ruben Jing"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note: The video solution might not be the same as other solutions. Code in C++, Python, and Java."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
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
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To simulate Bessie traveling through the maze, we use DFS. During DFS, we keep track of the state of the game board."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If during DFS, we find a move, represented by 'M' or 'O' followed by\r\ntwo numbers representing the coordinate on the moo-tac-toe game board, we\r\nupdate our board as long as the square is empty."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example, if our board looks like"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: ". M .\r\n. O .\r\n. . .\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["and we get ", _jsxDEV(_components.code, {
        children: "M22"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 12
      }, this), ", no update is made. However, if we get ", _jsxDEV(_components.code, {
        children: "O32"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 57
      }, this), ", our board will be updated to"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: ". M .\r\n. O .\r\n. O .\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After updating our board, we check if Bessie has won. We can hard code every winning possibility\r\nsince there are few cases to check."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "During DFS, if we revisit a square in our current board state, we stop iterating. However,\r\nif we have visited a square but with a different board state, we can continue iteration."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In order to keep track of which positions we have visited with which board, we can use a three dimensional\r\narray. The first two dimensions represent position and the last dimension represents state."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice how each square in the board only has three possibilities: blank, O, or M. We can assign\r\nblank to 0, O to 1, and M to 2."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Due to there being only three possibilities, we can make the board into a ternary number, e.g."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "0 2 0\r\n0 1 0\r\n0 0 0\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "becomes"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        children: "020010000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We convert the ternary number into a decimal to assure uniqueness. We only have 9 characters in the board,\r\nso the general formula to convert from ternary to decimal is:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{board[row][column]} \\times 3^{3 \\times \\text{row} + \\text{column}}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for every cell in the board. The biggest number will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "19682"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 57
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can keep the board as a string to make our implementation more clear and intuitive. This approach will suffice for\r\nC++ and Java."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Unfortunately, due to Python's slow nature, this solution must be sped up. We do not keep the board as a string but rather\r\nkeep it in its ternary form."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To extract a character at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 33
      }, this), " from the board, we divide by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3^i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 66
      }, this), " to remove the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 92
      }, this), " digits and then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "%3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 112
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To add a new character ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 24
      }, this), " at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 37
      }, this), " with board ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 52
      }, this), ", we have the following operation:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "b = (b \\% 3^i) + c \\times 3^i + (b - b \\% 3^{i + 1})"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["which effectively adds the character before index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 51
      }, this), ", the new character, and the characters after index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 106
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 78,
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
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
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
