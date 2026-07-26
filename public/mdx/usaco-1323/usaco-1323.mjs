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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["Note: This section is intended to walk you through the ", _jsxDEV(_components.em, {
        children: "problem-solving process"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 56
      }, this), "\r\nof how to arrive at the solution, rather than just stating the solution immediately;\r\nideally, this problem-solving process can be applied to other problems as well"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you have feedback on how well this format works for you / whether you found this section helpful,\r\nand the current date is not yet April 2024, please email me at ", _jsxDEV(_components.a, {
        href: "mailto:nathan.r.wang@gmail.com",
        children: "nathan.r.wang@gmail.com"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 64
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-process",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-process",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Process"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you just want the full solution, scroll down to the \"Explanation\" section below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-step-1-solving-the-sample-inputs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-1-solving-the-sample-inputs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step 1: Solving the Sample Inputs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first step is solving the sample inputs by hand. The goal is to make sure you fully understand what the problem is asking you to do."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-step-2-coming-up-with-more-test-cases",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-2-coming-up-with-more-test-cases",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step 2: Coming up with more test cases"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Next, let's try coming up with more test cases we can solve by hand. Focus on two types of test cases:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A lot of ", _jsxDEV(_components.strong, {
          children: "simple test cases"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 13
        }, this), " that have some pattern to them. We want to use these to uncover patterns that we might be able to use to solve the problem. Examples: ", _jsxDEV(_components.code, {
          children: "BFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 169
        }, this), ", ", _jsxDEV(_components.code, {
          children: "BFFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 176
        }, this), ", ", _jsxDEV(_components.code, {
          children: "BFFBFFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 184
        }, this), ", etc."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Edge cases"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 4
        }, this), " -- as many as you can think of!"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As you come up with these test cases, try to ", _jsxDEV(_components.strong, {
        children: "group them into patterns"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 46
      }, this), " (especially for the simple test cases). For example, ", _jsxDEV(_components.code, {
        children: "BFB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 128
      }, this), ", ", _jsxDEV(_components.code, {
        children: "BFFB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 135
      }, this), ", ", _jsxDEV(_components.code, {
        children: "BFFFB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 143
      }, this), " can be grouped together into a pattern like ", _jsxDEV(_components.code, {
        children: "BF...FB"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 195
      }, this), ". The goal is to come up with solutions to each of these patterns, and then try to come up with a solution to the general problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "I came up with ~30 test cases, but the exact number doesn't really matter. Don't spend too much time on this (I spent ~4 minutes?); you can always come up with more later."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-step-3-solving-test-cases-by-hand",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-3-solving-test-cases-by-hand",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step 3: Solving test cases by hand"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, we'll solve the test cases we came up with earlier by hand, trying to uncover patterns in how we solve them. Not all test case categories will have generalizable / nice solutions, and that's fine!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As an example, here's what I wrote for one of the patterns I came up with."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-pattern-1-bffb",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-pattern-1-bffb",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Pattern 1: BF...FB"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "BB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 61,
          columnNumber: 9
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "BFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 10
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 15
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "BFFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 63,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 63,
          columnNumber: 11
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 63,
          columnNumber: 16
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "BFFFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 12
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 17
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 22
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "BFFFFB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 13
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 18
        }, this), ", ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 23
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-possible-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-possible-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Possible Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Do you see any patterns? (You might need to write out more cases.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "I arrived at the solution above solely by pattern-matching; I have no idea if it's correct. Let's try to convince ourself as to why it's correct (or if it's actually wrong)!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 78,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Can you convince yourself that this solution is correct?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you're stuck, try using this strategy:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Add constraints (simplify the problem as much as possible) until we reach a problem that we can solve / prove. For example, one constraint we might add is \"assume the length of the string is even.\""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Add back the constraints one at a time and update your solution / proof until we arrive back at the original problem."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-try-it-yourself",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-try-it-yourself",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Try it yourself!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For this step, feel free to follow along by solving the test cases I came up with, or you can also use the test cases that you came up with."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For every pattern, try to come up with a possible solution, as well as a justification as to why that solution is correct. Not all patterns will have nice solutions -- if you can't think of anything, just move on! (Also, don't be afraid if your solution has a bunch of different cases -- \"nice\" solutions can still have different cases!)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You may also find it helpful to skip a complicated pattern and come back to it later after you've solved some simpler patterns. Sometimes a complicated pattern's solution is just a combination of the solution of two easier patterns!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-step-4-constructing-a-general-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-step-4-constructing-a-general-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Step 4: Constructing a general solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now, try to come up with a solution for the general problem using some of the solutions we came up with earlier."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 130,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you're stuck, the strategy from above is still applicable:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 132,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Add constraints (simplify the problem as much as possible) until we reach a problem that we can solve / prove."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Add back the constraints one at a time and update your solution / proof until we arrive back at the original problem."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You can also go back to step 2 (come up with new small test cases / new patterns and try to find solutions to those) if you are stuck."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 137,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-concluding-thoughts",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-concluding-thoughts",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Concluding Thoughts"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "I hope this section on the problem-solving process I used to solve this problem was helpful! This process isn't specific to this problem, so hopefully you can apply a similar process to other problems as well."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 153,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you have feedback on whether you found this section helpful / what can be improved, and the current date is not yet April 2024, please email me at ", _jsxDEV(_components.a, {
        href: "mailto:nathan.r.wang@gmail.com",
        children: "nathan.r.wang@gmail.com"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 151
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 155,
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
      lineNumber: 157,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-subtask-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-subtask-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Subtask 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For Subtask 1, we can brute-force generate every possible string S. If the string has length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 94
      }, this), ", then there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 114
      }, this), " possible such strings (in the worst case where the entire string is F). Each string takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 210
      }, this), " time to compute an answer, so in total this solution takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^n \\cdot n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 286
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-full-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-full-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Full Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 163,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, assume the starting / ending character is not F."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Split the string into \"sections\" such that each section has one starting character that isn't F, one ending character that isn't F, and a bunch of F's in the middle. The edge characters of each \"section\" can overlap. For the sample input ", _jsxDEV(_components.code, {
        children: "BFFFFFEBFE"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 239
      }, this), ", our sections are:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "BFFFFFE"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 169,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "EB"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 170,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "BFE"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We will get an answer for each section and then combine the answers to get the answer for the whole string."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-solving-each-section",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solving-each-section",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solving each section"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's start by finding the lowest / highest possible excitement of each section. We will do this with casework:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Is the starting / ending character the same?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Is the length of the section even?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 5
      }, this), " be the length of the section."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 182,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-case-1-starting--ending-is-same",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-case-1-starting--ending-is-same",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Case 1: Starting / ending is same"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 4
      }, this), " is even, min is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 24
      }, this), " and max is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 39
      }, this), ". Otherwise, min is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 64
      }, this), " and max is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 79
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-case-2-starting--ending-is-different",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-case-2-starting--ending-is-different",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Case 2: Starting / ending is different"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 4
      }, this), " is even, min is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 24
      }, this), " and max is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 39
      }, this), ". Otherwise, min is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 64
      }, this), " and max is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 79
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 5
      }, this), " be the min and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 24
      }, this), " be the max. We can achieve any value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x, x+2, x+4, \\ldots y-2, y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 194,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Start with the string that yields ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 35
      }, this), "; it's something like BEBEBEB. Changing one E to become a B will increase our answer by 2."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 196,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we examine something like BFFFB, note that it is impossible to achieve an answer of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 88
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 198,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-combining-sections",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-combining-sections",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Combining sections"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 200,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can add the min / max values from every section together to get the min / max values for the whole string. If we let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 121
      }, this), " be the min for the whole string and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 161
      }, this), " be the max for the whole string, our possible answers are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x, x+2, x+4, \\ldots, y-2, y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 223
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-handling-fs-on-the-first--last-character",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-handling-fs-on-the-first--last-character",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Handling F's on the first / last character"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 204,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 5
      }, this), " be the number of F's at the start of the string and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 61
      }, this), " be the number of F's at the end of the string. By inspection, these F's contribute a minimum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 161
      }, this), " to our excitement level and a maximum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x + y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 206
      }, this), " to our excitement level."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that in this special case where F is on the edge of the string, we can actually achieve any value in between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 115
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x+y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 123
      }, this), "! For example, take the string FFFB. We can get 0 by doing EBEB, 1 by doing BEBB, 2 by doing EBBB, and 3 by doing BBBB."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As a result, as long as one of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 32
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 39
      }, this), " is not ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 50
      }, this), ", we can achieve an excitement level for our overall string of every value in between min and max. However, if both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 169
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 177
      }, this), " are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 185
      }, this), ", then we still can only get excitement levels in increments of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 252
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We also need to take care to handle the case where the entire string is F's properly."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 212,
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
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Ben's code, which is a lot more concise and takes advantage of some nice similarities between cases:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 508,
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
