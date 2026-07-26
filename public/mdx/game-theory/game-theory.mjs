"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
      id: "user-content-nim",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-nim",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Nim"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-rules",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-rules",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Rules"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Nim might be one of the most well-known examples in game theory. In this game\r\nthere are considered ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 22
      }, this), " piles of some item. The problem uses sticks, while some\r\nothers use stones; we'll be using sticks to stay consistent with the CSES\r\nproblem. Regardless, players take turns removing a nonzero number of sticks from\r\na certain pile, and the player who takes the last stick wins."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's represent the current state of the piles with\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x_1, x_2, x_3, \\ldots, x_n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 1
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 39
      }, this), " is the number of sticks in pile ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 77
      }, this), ".\r\nYou'll soon see that it doesn't matter whether we include empty piles in our\r\narray."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We now propose something that may seem unintuitive at first:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "The player who moves first can always win if the xor-sum of the sizes of the\r\npiles is nonzero."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-proof",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-proof",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Proof"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For our own sanity, we'll refer to a state with a xor-sum of 0 as a \"losing\r\nstate\" and a state with a nonzero xor-sum as a \"winning state.\""
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To prove this, we have to show that from a losing state,\r\nany move we make will result in a winning state, and from a winning state,\r\nat least one move that we can make will result in a losing state.\r\nNotice that when we make our move, the\r\ngame switches to a \"sub-game\" of sorts where the second player becomes the first\r\nplayer. Thus, moving to a winning state for the next turn means that they win\r\nand we lose."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, it's probably good to prove our base cases first. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 60
      }, this), " is a losing\r\nstate, since the first player can't make any moves and thus loses. On the other\r\nhand, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 7
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 19
      }, this), " is any positive integer is a winning state since we can\r\ntake ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 6
      }, this), " sticks from the only pile. As we can see, the first state has a xor-sum\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 4
      }, this), " while the second has a xor-sum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 42
      }, this), " which is nonzero."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-losing-rightarrow-winning",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-losing-rightarrow-winning",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Losing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\rightarrow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 13
      }, this), " Winning"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's first prove that any losing state will move to a winning state for the\r\nother player."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since XOR is a commutative and associative operation, we can assume WLOG that\r\nthe move we make is on pile ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 29
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The current xor-sum of the state is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1 \\oplus x_2 \\oplus \\dots x_n=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 37
      }, this), ". Notice\r\nthat this can be thought of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 29
      }, this), " XOR the xor-sum of the rest of the numbers.\r\nLet's call that xor-sum of everything else ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 44
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the xor-sum is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 22
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1=y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 27
      }, this), ". Removing any number of sticks from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 71
      }, this), " will\r\nbreak this equality and turn ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_1 \\oplus y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 30
      }, this), " nonzero, which is precisely the\r\ndefinition for our winning state."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-winning-rightarrow-losing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-winning-rightarrow-losing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Winning ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\rightarrow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 14
      }, this), " Losing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now we have to prove that any ", _jsxDEV(_components.em, {
        children: "winning"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 31
      }, this), " state can move to a losing state for the\r\nother player. Notice the use of ", _jsxDEV(_components.em, {
        children: "can"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 33
      }, this), " instead of ", _jsxDEV(_components.em, {
        children: "will"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 50
      }, this), " in our statement due to\r\nhow these games work."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This time, let's define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 25
      }, this), " as the xor-sum of ", _jsxDEV(_components.em, {
        children: "all"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 47
      }, this), " the piles instead of all\r\nexcept for one. Then, say we have an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 38
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i > y \\oplus x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 54
      }, this), ". Note\r\nthat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\oplus x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 6
      }, this), " is the xor-sum of all the other elements, since XOR is its\r\nown inverse."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With this, we can take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i - (y \\oplus x_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 24
      }, this), " sticks from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 59
      }, this), ", then makes it\r\nequivalent to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y \\oplus x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 15
      }, this), " and the xor-sum of the whole board will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 73
      }, this), ",\r\nthus forming a losing state for the second player."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["But all of this hinges on the existence of an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 47
      }, this), " such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i > y \\oplus x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 1
      }, this), ". Does it ", _jsxDEV(_components.em, {
        children: "always"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 31
      }, this), " exist?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 14
      }, this), " is the position of the most significant bit in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 65
      }, this), ". Then, we\r\nknow that there must exist some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 33
      }, this), " with a set bit at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 57
      }, this), " as well. Whether ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 78
      }, this), "\r\nis the most significant bit in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 32
      }, this), " or not, XOR-ing the two gives a result with\r\na ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 3
      }, this), " at bit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 14
      }, this), ". This then guarantees that there exists an\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_i > y \\oplus x_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-sprague-grundy-theorem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sprague-grundy-theorem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sprague-Grundy theorem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Before we get into this theorem, we first have to define what \"nimbers\"\r\n(sometimes referred to as \"grundy values\") are. Each nimber — say 0, 3, or 4 —\r\nrepresents a one-pile game of Nim with that many stones. Notice that for any\r\npositive nimber, the first player always wins since they can take all the stones\r\nfrom the pile and leave none for the second. On the other hand, the nimber 0 is\r\na losing state, since the first player can't take any more stones."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "What the Sprague-Grundy theorem\r\nallows us to do is to reduce the state of certain types of games into a nimber."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The way we do this is with a recursive definition. If we can compute the nimbers\r\nof all states ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 15
      }, this), " reachable from a certain state ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 52
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 62
      }, this), " itself can be\r\nreduced to the nimber"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 220,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n(s)=\\text{mex}(r_1, r_2, \\dots, r_k)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 224,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For convenience, we have defined ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 34
      }, this), " as the function that reduces game states to\r\nnimbers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{mex}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 231,
        columnNumber: 5
      }, this), " function takes a list of numbers and returns the smallest\r\nnon-negative integer that is ", _jsxDEV(_components.em, {
        children: "not"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 30
      }, this), " included in the list. Notice that the name is\r\na portmanteau of \"min\" and \"excluded\"."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 231,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-one-pile-example",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-one-pile-example",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "One-pile Example"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 235,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's take a look at an altered version case of Nim. Here's there's only one\r\npile, but each player can only remove 1, 2, or 3 stones."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 237,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["According to the theorem, the nimber value is the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{mex}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 240,
        columnNumber: 51
      }, this), " of the reachable\r\nnimber value. In the case of this game, each state can reach the previous ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 75
      }, this), "\r\nvalues because we can only remove 1, 2 or 3 stones in one move."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 240,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's how the values are computed:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 244,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(0) = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 246,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 246,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(1) = \\text{mex}(0) = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 247,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 247,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(2) = \\text{mex}(0, 1) = 2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 248,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(3) = \\text{mex}(0, 1, 2) = 3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 249,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(4) = \\text{mex}(1, 2, 3) = 0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 250,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(5) = \\text{mex}(2, 3, 0) = 1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 251,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(6) = \\text{mex}(3, 0, 1) = 2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 252,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          className: "language-math",
          children: "n(7) = \\text{mex}(0, 1, 2) = 3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 253,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 246,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This gives us the following table of nimber values:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 255,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's the table of nimber values:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 257,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/nim.png",
        alt: "Nimber table"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["All nimber reductions that are equal to 0 are losing states; see ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n(0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 66
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n(4)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 262,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 261,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Recall that a winning state means that you can put the other player in a losing\r\nstate. On the other hand, a losing state means that every move results in a\r\nwinning state for the opponent. For example, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n(4)=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 46
      }, this), " because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 63
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 68
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 77
      }, this), "\r\nare winning. Similarly, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n(8) = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 25
      }, this), ", because we can't reach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 267,
        columnNumber: 60
      }, this), " in a single move."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 264,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-multiple-pile-example",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-multiple-pile-example",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Multiple-pile Example"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 269,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "How about we try reducing multiple-pile Nim games with this theorem?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We know that a state is a losing state if the xor-sum is 0. This matches up\r\nexactly with how our nimbers work, as the 0 nimber represents a losing state."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 273,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus, to reduce a Nim game of multiple piles to a nimber, we can take the\r\nxor-sum of the nimbers of the single piles. Notice that the nimber of only one\r\npile is the size of the pile."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Nimber#Addition",
        rel: "nofollow",
        target: "_blank",
        children: "equivalent to the formula using mex"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 281,
        columnNumber: 1
      }, this), ",\r\nbut a proof of that is beyond the scope of this module. We merely try to give\r\nsome intuition for why this is true."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 280,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n([p_1, \\dots, p_n])=\\bigoplus_{i=1}^n n(p_i)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 285,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This xor-sum reduction can be extended to more things than just Nim. If we can\r\ndecompose a game into multiple disjoint parts where one player makes a chooses a\r\nsubgame then makes a move, then the nimbers of these games can be combined with\r\nthe xor-sum."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 289,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-applications",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applications",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applications"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 294,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-s-nim",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-s-nim",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "S-Nim"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 296,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
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
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can compute the nimber values of each pile with the mex definition and then\r\ncombine them using the XOR operator."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
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
      lineNumber: 305,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(PK+ML)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 307,
        columnNumber: 50
      }, this), " is the maximum pile size."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-chessboard-game-again",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-chessboard-game-again",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Chessboard Game, Again!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 399,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 403,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here we see a case of using the xor-sum to combine things that aren't straight\r\nNim games."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 405,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this problem, we can decompose each game into a bunch of subgames, where each\r\nsubgame is a single coin. Players choose the subgame (coin) and then make a\r\nmove."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 408,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We first apply the mex formula to calculate nimbers for individual coins, and\r\nthen combine them at the end with a xor-sum"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 412,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
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
      lineNumber: 415,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 417,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(TK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 417,
        columnNumber: 22
      }, this), ", since the board is constant size."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 417,
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
      lineNumber: 507,
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
