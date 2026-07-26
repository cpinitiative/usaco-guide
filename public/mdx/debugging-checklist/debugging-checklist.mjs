"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "This module is based on the resources above. I've included the content that is\r\nmost relevant to USACO."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-pre-submit",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-pre-submit",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Pre-Submit"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Your code should be readable (to yourself at the very least).\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Following style tips from the\r\n", _jsxDEV(_components.a, {
              href: "/general/adding-solution#code-conventions",
              children: "Adding Solutions"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 34,
              columnNumber: 5
            }, this), " module may\r\nhelp with this."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 33,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-wrong-answer-or-runtime-error",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-wrong-answer-or-runtime-error",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Wrong Answer (or Runtime Error)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Is your output format correct?"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Did you remove debug output before submitting?"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 40,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 40,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Do you handle all corner cases (such as ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "N=1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 41,
            columnNumber: 43
          }, this), ") / special cases?"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["For problems with multiple independent test cases (such as\r\n", _jsxDEV(_components.a, {
            href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=1141",
            rel: "nofollow",
            target: "_blank",
            children: "this one"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 43,
            columnNumber: 3
          }, this), "), are\r\nyou clearing all data structures between test cases?"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Keep in mind that your solution might only behave incorrectly when a test\r\ncase is followed by a smaller test case."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 45,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Have you understood the problem correctly? Read the full problem statement\r\nagain."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Read your code again."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Confusing ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "N"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 50,
              columnNumber: 15
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "M"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 50,
              columnNumber: 23
            }, this), ", ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "i"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 50,
              columnNumber: 28
            }, this), " and ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "j"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 50,
              columnNumber: 36
            }, this), ", etc.?"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 50,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.a, {
            href: "https://en.wikipedia.org/wiki/Variable_shadowing#C++",
            rel: "nofollow",
            target: "_blank",
            children: "Shadowed"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 51,
            columnNumber: 3
          }, this), " or unused or\r\nuninitialized variables?"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["(C++) Compiling with\r\n", _jsxDEV(_components.a, {
              href: "/general/debugging-cpp#gcc-warning-options",
              children: "warning options"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 54,
              columnNumber: 5
            }, this), "\r\n(", _jsxDEV(_components.code, {
              children: "-Wall -Wshadow"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 55,
              columnNumber: 6
            }, this), ") should detect these."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 53,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 53,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Any ", _jsxDEV(_components.em, {
            children: "undefined behavior"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 56,
            columnNumber: 7
          }, this), "? It can result in different outputs locally vs online\r\n(ex. maybe you are passing the sample case locally but not when you submit to\r\nthe USACO judge). Try running your code in multiple places (ex.\r\n", _jsxDEV(_components.a, {
            href: "https://ide.usaco.guide/",
            rel: "nofollow",
            target: "_blank",
            children: "USACO Guide IDE"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 59,
            columnNumber: 3
          }, this), ",\r\n", _jsxDEV(_components.a, {
            href: "https://codeforces.com/problemset/customtest",
            rel: "nofollow",
            target: "_blank",
            children: "Codeforces Custom Test"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 60,
            columnNumber: 3
          }, this), ") and\r\nsee if you always get the same result. Common examples of undefined behavior\r\ninclude:"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: "(C++) Uninitialized variables"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 64,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 64,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: ["(C++) Not returning anything from non-", _jsxDEV(_components.code, {
                children: "void"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 65,
                columnNumber: 43
              }, this), " functions"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 65,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 65,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: "(C++) Array out of bounds"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 66,
              columnNumber: 5
            }, this), "\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: ["Considering using ", _jsxDEV(_components.code, {
                  children: "::at"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 67,
                  columnNumber: 25
                }, this), " as mentioned\r\n", _jsxDEV(_components.a, {
                  href: "/general/debugging-cpp/#checking-for-out-of-bounds",
                  children: "here"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 68,
                  columnNumber: 7
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 67,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 67,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 66,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: ["(C++ / Java)\r\n", _jsxDEV(_components.a, {
                href: "https://stackoverflow.com/questions/4240748/allowing-signed-integer-overflows-in-c-c",
                rel: "nofollow",
                target: "_blank",
                children: "Signed integer overflow"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 70,
                columnNumber: 5
              }, this)]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 69,
              columnNumber: 5
            }, this), "\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: "USACO problems usually contain a note of the following form if the output\r\nformat requires 64-bit rather than 32-bit integers, but it's easy to miss:"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 72,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 72,
              columnNumber: 5
            }, this), "\n", _jsxDEV(_components.blockquote, {
              children: ["\n", _jsxDEV(_components.p, {
                children: ["Note that the large size of integers involved in this problem may require\r\nthe use of 64-bit integer data types (e.g., a ", _jsxDEV(_components.code, {
                  children: "long long"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 76,
                  columnNumber: 53
                }, this), " in C/C++).\""]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 75,
                columnNumber: 7
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 75,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 69,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["\n", _jsxDEV(_components.p, {
              children: ["(C++) Shifting a 32-bit integer by ", _jsxDEV(_components.code, {
                className: "language-math",
                children: "\\ge 32"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 78,
                columnNumber: 40
              }, this), " bits"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 78,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 78,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["In C++, compiling with\r\n", _jsxDEV(_components.a, {
            href: "/general/debugging-cpp#gcc-debug-options",
            children: "instrumentation options"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 81,
            columnNumber: 3
          }, this), " (", _jsxDEV(_components.code, {
            children: "-fsanitize=address,undefined"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 81,
            columnNumber: 72
          }, this), ") can help catch\r\nthese."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 80,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Add ", _jsxDEV(_components.a, {
            href: "/general/basic-debugging#assertions--warnings",
            children: "assertions"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 84,
            columnNumber: 7
          }, this), " and resubmit."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 84,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Floating point numbers"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 85,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Any NaNs (ex. taking the square root of a negative number)?"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 86,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Try using a type with more precision (ex. ", _jsxDEV(_components.code, {
              children: "long double"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 87,
              columnNumber: 47
            }, this), " instead of ", _jsxDEV(_components.code, {
              children: "double"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 87,
              columnNumber: 72
            }, this), "\r\nin C++)."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 87,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "Are you printing the output to the correct amount of precision?"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 89,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 86,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Are you sure your algorithm works?"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 90,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Go through the algorithm for a simple case / write some testcases to run\r\nyour algorithm on."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 91,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Write a test case generator and compare the outputs of your solution against\r\nthat of a (simpler) slow solution, or a model solution if available.\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: ["See ", _jsxDEV(_components.a, {
                  href: "/general/basic-debugging#stress-testing",
                  children: "stress testing"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 95,
                  columnNumber: 11
                }, this), " for more\r\ninformation."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 95,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 95,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 93,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 91,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-runtime-error",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-runtime-error",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Runtime Error"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Any undefined behavior? (see above)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Any assertions that might fail?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Any possible division by 0? (mod 0 for example)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Any possible infinite recursion?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Invalidated pointers or iterators?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Are you using too much memory?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-time-limit-exceeded",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-time-limit-exceeded",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Time Limit Exceeded"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Do you have any possible infinite loops?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "What is the complexity of your algorithm?"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Did you remove debug output before submitting (ex. are you printing a lot of\r\ninformation to ", _jsxDEV(_components.a, {
          href: "/general/basic-debugging#standard-error-stream",
          children: "standard error"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 112,
          columnNumber: 18
        }, this), ")?"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Unnecessary copying of data? C++ - Consider passing variables by reference."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["C++ - Try substituting ", _jsxDEV(_components.code, {
          children: "array"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 114,
          columnNumber: 26
        }, this), "s in place of ", _jsxDEV(_components.code, {
          children: "vector"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 114,
          columnNumber: 47
        }, this), "s."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-last-resort",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-last-resort",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Last Resort"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Rewrite your solution from the start.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Be sure to save a copy of your original solution. It's always possible that\r\nyou might introduce more bugs in your new solution."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 119,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 119,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-before-posting-on-the-usaco-guide-forum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-before-posting-on-the-usaco-guide-forum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Before Posting on the ", _jsxDEV(_components.a, {
        href: "https://forum.usaco.guide/",
        rel: "nofollow",
        target: "_blank",
        children: "USACO Guide Forum"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 26
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If you have found a small test case on which your program fails and you know\r\nwhy the expected output is correct, you should be able to figure out why your\r\nprogram is incorrect on your own.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Add print statements to your code and compare their outputs to what you get\r\nwhen you simulate your program by hand."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 127,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "Check for undefined behavior as described above."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 129,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If you haven't found a small test case on which your solution fails,\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Try downloading the official test data and seeing if your solution fails on\r\nany small test cases."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 131,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "If that doesn't work, then try generating a small test case on which your\r\nsolution fails as described above."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 133,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
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
