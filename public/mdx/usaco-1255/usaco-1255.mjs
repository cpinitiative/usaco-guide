"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
        href: "https://usaco.org/current/data/sol_prob2_silver_dec22.html",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, consider the case ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 26
      }, this), ", when both farmers remove cows from one room."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Each farmer can remove either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 31
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 36
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 41
      }, this), ", but not ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 54
      }, this), " or any multiples of it. This motivates us to consider ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1 \\bmod 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 112
      }, this), " in our game. The player starting with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1\\bmod 4\\neq 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 164
      }, this), " should take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1\\bmod 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 195
      }, this), " cows to force the other player into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1\\bmod 4=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 244
      }, this), ", who will always give the first player an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1\\bmod 4\\neq 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 301
      }, this), ", since they cannot take any multiple of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 360
      }, this), " to maintain the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 380
      }, this), " remainder.\r\nThe first player can now repeat the process until ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1 = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 51
      }, this), ", resulting in a win."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Therefore, when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_1 \\bmod 4 \\neq 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 17
      }, this), ", Farmer John will win. Otherwise, Farmer Nhoj will win."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, we consider the case ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N>1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 27
      }, this), ".  Since each room is independent, we treat the overall game as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 96
      }, this), " individual games. For each room, we define the attacker as the guaranteed winner and the defender as the guaranteed loser."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The next pair of moves on a room will only be done when all the other rooms have been visited.\r\nThus, the players use the following strategies:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "The attacker in a room reduces the number of cows as fast as possible to return to this room and potentially win sooner."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The defender would like this to play slow instead to maximize the chances of winning early at another room.\r\nLet the total amount of operations to finish room ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 51
        }, this), " individually be ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 71
        }, this), ".\r\nThe game's winner will be the winner of the room with the minimum ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\left\\lceil\\frac{T_i}2\\right\\rceil"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 67
        }, this), " (if tied, the one with the minimum room number)."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To minimize the number of rounds, the attacker can use a modified version of his strategy when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 96
      }, this), ". Instead of taking away ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i\\bmod 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 126
      }, this), " cows, they can take away any ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p\\equiv a_i\\mod 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 168
      }, this), " cows as long as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 204
      }, this), " is prime and less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 231
      }, this), ".\r\nTo compute the largest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p<x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 24
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p\\equiv x\\mod 4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 40
      }, this), ", first use a sieve to find all primes, and keep an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 115
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\leq i<4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 126
      }, this), " for the most recent prime ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_i=p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 164
      }, this), " we found where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p\\bmod 4=i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 187
      }, this), ". As we iterate on values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 228
      }, this), ", we store ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m_x=t_{x\\bmod 4}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 242
      }, this), " to represent the largest equivalent prime."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["On the other hand, the defender can block this speedup by relying on the fact that there are no primes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p>4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 104
      }, this), " that satisfy ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p\\bmod 4=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 123
      }, this), ", resulting in no speedups when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i\\bmod 4=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 167
      }, this), ".\r\nIf the defender takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 23
      }, this), " cows from their ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i\\bmod 4=2=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 43
      }, this), " and hand back ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i\\bmod 4=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 74
      }, this), " each time, there will be no way for the attacker to speed up the game anymore."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Thus:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["When ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_i\\bmod4\\in\\{1,3\\}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 8
        }, this), ", the only speedup the attacker can apply is removing ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "m_{a_i}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 83
        }, this), " initially, resulting in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T_i=1+\\frac{a_i-m_{a_i}}2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 117
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, there are no speedups with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T_i=\\frac{a_i}2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 41
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We first compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 18
      }, this), " for each room, and then find the minimum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left\\lceil\\frac{T_i}2\\right\\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 68
      }, this), " (if tied, with smallest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 129
      }, this), "), and output the winner of that room."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
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
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
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
