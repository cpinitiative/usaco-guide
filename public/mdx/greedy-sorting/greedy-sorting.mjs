"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A greedy algorithm chooses the best move at each individual step, in the hope\r\nof reaching the best global result."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Usually, when using a greedy algorithm, there is a ", _jsxDEV(_components.strong, {
        children: "value function"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 52
      }, this), " that\r\ndetermines which choice is considered most optimal. For example, we often want\r\nto maximize or minimize a certain quantity, so we take the largest or smallest\r\npossible value in the next step."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here, we'll focus on problems where some sorting step is involved."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---studying-algorithms",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---studying-algorithms",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Studying Algorithms"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Steph wants to improve her knowledge of algorithms over winter break. She has a\r\ntotal of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 10
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq X \\leq 10^4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 15
      }, this), ") minutes to dedicate to learning algorithms.\r\nThere are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 11
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq N \\leq 100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 16
      }, this), ") algorithms, and each one of them requires\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq a_i \\leq 100"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 8
      }, this), ") minutes to learn. Find the maximum number of\r\nalgorithms she can learn."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---studying-algorithms",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---studying-algorithms",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Studying Algorithms"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first observation we make is that Steph should prioritize learning\r\nalgorithms from easiest to hardest; in other words, start with learning the\r\nalgorithm that requires the least amount of time, and then choose further\r\nalgorithms in increasing order of time required. Let's look at the following\r\nexample:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "X = 15, \\qquad N = 6, \\qquad a_i = \\{ 4, 3, 8, 4, 7, 3 \\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After sorting the array, we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{ 3, 3, 4, 4, 7, 8 \\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 34
      }, this), ". Within the maximum of\r\n15 minutes, Steph can learn four algorithms in a total of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3+3+4+4 = 14"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 59
      }, this), "\r\nminutes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The implementation of this algorithm is very simple. We sort the array, and then\r\ntake as many elements as possible while the sum of times of algorithms chosen so\r\nfar is less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 18
      }, this), ". Sorting the array takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 47
      }, this), " time, and\r\niterating through the array takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 35
      }, this), " time, for a total time\r\ncomplexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---the-scheduling-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---the-scheduling-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - The Scheduling Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["There are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 11
      }, this), " events, each described by their starting and ending times. You can\r\nonly attend one event at a time, and if you choose to attend an event, you must\r\nattend the entire event. Traveling between events is instantaneous. What's the\r\nmaximum number of events you can attend?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-bad-greedy---earliest-starting-next-event",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bad-greedy---earliest-starting-next-event",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bad Greedy - Earliest Starting Next Event"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "One possible ordering for a greedy algorithm would always select the next\r\npossible event that begins as soon as possible. Let's look at the following\r\nexample, where the selected events are highlighted in red:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 135,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In this example, the greedy algorithm selects two events, which is optimal.\r\nHowever, this doesn't always work, as shown by the following counterexample:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In this case, the greedy algorithm selects to attend only one event. However,\r\nthe optimal solution would be the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 209,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-correct-greedy---earliest-ending-next-event",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-correct-greedy---earliest-ending-next-event",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Correct Greedy - Earliest Ending Next Event"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 244,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead, we can select the event that ends as early as possible. This correctly\r\nselects the three events."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 246,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In fact, this algorithm always works. A brief explanation of correctness is as\r\nfollows. If we have two events ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 32
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 42
      }, this), ", with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 54
      }, this), " ending later than\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 1
      }, this), ", then it is always optimal to select ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 44
      }, this), ". This is because selecting\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 284,
        columnNumber: 1
      }, this), " gives us more choices for future events. If we can select an event to go\r\nafter ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 285,
        columnNumber: 7
      }, this), ", then that event can also go after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 285,
        columnNumber: 48
      }, this), ", because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 285,
        columnNumber: 63
      }, this), " ends first.\r\nThus, the set of events that can go after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 286,
        columnNumber: 43
      }, this), " is a subset of the events that\r\ncan go after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 14
      }, this), ", making ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 28
      }, this), " the optimal choice."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 281,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For the following code, let's say we have the array ", _jsxDEV(_components.code, {
        children: "events"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 289,
        columnNumber: 53
      }, this), " of events, which\r\neach contain a start and an end point."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 289,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-when-greedy-fails",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-when-greedy-fails",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "When Greedy Fails"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 376,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We'll provide a few common examples of when greedy fails, so that you can avoid\r\nfalling into obvious traps and wasting time getting wrong answers in contest."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 378,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-coin-change",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-coin-change",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Coin Change"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 381,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This problem gives several coin denominations, and asks for the minimum number\r\nof coins needed to make a certain value. Greedy algorithms can be used to solve\r\nthis problem only in very specific cases (it can be proven that it works for the\r\nAmerican as well as the Euro coin systems). However, it doesn't work in the\r\ngeneral case. For example, let the coin denominations be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{1, 3, 4\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 58
      }, this), ", and say\r\nthe value we want is 6. The optimal solution is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{3, 3\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 388,
        columnNumber: 49
      }, this), ", which requires only\r\ntwo coins, but the greedy method of taking the highest possible valued coin that\r\nfits in the remaining denomination gives the solution ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{4, 1, 1\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 390,
        columnNumber: 55
      }, this), ", which is\r\nincorrect."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 383,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-knapsack",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-knapsack",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Knapsack"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 393,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The knapsack problem gives a number of items, each having a ", _jsxDEV(_components.strong, {
        children: "weight"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 395,
        columnNumber: 61
      }, this), " and a\r\n", _jsxDEV(_components.strong, {
        children: "value"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 396,
        columnNumber: 1
      }, this), ", and we want to choose a subset of these items. We are limited to a\r\ncertain weight, and we want to maximize the value of the items that we take."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 395,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's take the following example, where we have a maximum capacity of 4:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 399,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["If we use greedy based on highest value first, we choose item A and then we are\r\ndone, as we don't have remaining weight to fit either of the other two. Using\r\ngreedy based on value per weight again selects item A and then quits. However,\r\nthe optimal solution is to select items B and C, as they combined have a higher\r\nvalue than item A alone. In fact, there is no working greedy solution. The\r\nsolution to this problem uses ", _jsxDEV(_components.strong, {
        children: "dynamic programming"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 416,
        columnNumber: 31
      }, this), ", which is covered in gold."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 411,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 418,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-cses",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-cses",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "CSES"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 420,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-other",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-other",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Other"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 424,
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
