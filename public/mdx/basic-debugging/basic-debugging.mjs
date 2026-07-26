"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-printing-variables",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-printing-variables",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Printing Variables"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-basic-print-statements",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-basic-print-statements",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Basic Print Statements"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The most basic way that you might debug is adding a print statement. This is\r\ngreat and serves the purpose for the most part. For instance, we can write the\r\nbelow to check the value of ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 29
      }, this), " at a point in our code."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Such print statements are great on a basic level, and we can comment or define\r\nthem out of our main code when we need to compile and execute a more final\r\nversion of our code."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-standard-error-stream",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-standard-error-stream",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Standard Error Stream"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, as great as print statements are, they are annoying to work with and\r\nefficiently separate from the actual parts of our code. This is important for\r\nexample when we want an online judge (OJ) to read our output."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The standard error stream is a quick fix to this. Instead of\r\nprinting in the standard output stream, we can print in a whole new stream\r\ncalled the standard error stream instead."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Try running this program and you might be confused about the difference. The\r\ncontent in the error stream appears right alongside that in the standard output\r\nstream. But this is the beauty of it! And the best thing about it is, if we\r\nsubmit this program to an OJ, it won't notice the output in the error stream\r\nat all!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 158,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-assertions--warnings",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-assertions--warnings",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Assertions & Warnings"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 229,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Use ", _jsxDEV(_components.code, {
        children: "assert(cond)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 5
      }, this), " to check that a condition ", _jsxDEV(_components.code, {
        children: "cond"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 250,
        columnNumber: 46
      }, this), " holds. If it doesn't, then the program is terminated. For example, the following code snippet"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <cassert>\r\n#include <iostream>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tassert(false);\r\n\tcout << \"OK\" << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 252,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "produces:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "prog: main.cpp:6: int main(): Assertion `false' failed.\r\n/tmp/program/run.sh: line 1:   408 Aborted                 ./prog\r\nCommand exited with non-zero status 134\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 265,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 265,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you want to disable all asserts (say, before submitting) you can add\r\n", _jsxDEV(_components.code, {
        children: "#define NDEBUG"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this), " to the start of your program."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#define NDEBUG\r\n#include <cassert>\r\n#include <iostream>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tassert(false);\r\n\tcout << \"OK\" << endl;  // OK\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 274,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-stress-testing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-stress-testing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Stress Testing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If your code is getting WA, one option is to run your buggy solution against\r\nanother solution that you're relatively confident is correct on randomly\r\ngenerated test cases until you find a difference. Usually, small test cases\r\nwill suffice. See the video for details."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 288,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-option-1-a-single-program",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-option-1-a-single-program",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Option 1: A Single Program"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 312,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Write a single program including the two solutions and an input generator. If\r\nusing C++, you should wrap each solution in a separate namespace to avoid\r\ncompilation errors, like so:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 314,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nnamespace Solution1 {\r\n\r\nint solve(int x) { return x < 10; }\r\n\r\n}  // namespace Solution1\r\n\r\nnamespace Solution2 {\r\n\r\nint solve(int x) { return x < 11; }\r\n\r\n}  // namespace Solution2\r\n\r\nint main() {\r\n\tmt19937 rng(0);\r\n\twhile (true) {\r\n\t\tint x = rng() % 100;\r\n\t\tint out1 = Solution1::solve(x);\r\n\t\tint out2 = Solution2::solve(x);\r\n\t\tif (out1 != out2) {\r\n\t\t\tcout << x << \" \" << out1 << \" \" << out2 << endl;\r\n\t\t\texit(0);\r\n\t\t}\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 318,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Of course, you can only use this option if both solutions are written in the\r\nsame language."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 348,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-option-2-three-programs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-option-2-three-programs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Option 2: Three Programs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 351,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Another option is to write three different programs, one for the correct program,\r\none for the incorrect program, and one for generating inputs. Then\r\nyou can use the script below to find an input on which the correct and\r\nincorrect programs differ. If you want to learn how to write these scripts\r\nyourself, see ", _jsxDEV(_components.a, {
        href: "/general/cpp-command#linux",
        children: "this module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 357,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 353,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-debuggers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-debuggers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Debuggers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 496,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In essence, a debugger is a tool to \"trace code\" for you. Using a debugger\r\nvaries from language to language and even from IDE to different\r\nIDE, so we will only go over the basics of a debugger."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 548,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Pros of using a debugger:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 552,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "No need to write print statements so you save time."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 554,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "You can step through the code in real time."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 555,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "C++: Print the line where a runtime error was triggered."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 556,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 554,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Cons of using a debugger:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 558,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "It is not much different from just printing the values out at various points\r\nin your program."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 560,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Most competitive programmers do not use debuggers."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 562,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["You cannot see the overall \"output\" of your program at each stage. For\r\nexample, if you wanted to see every single value of ", _jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 564,
          columnNumber: 55
        }, this), " in the program,\r\nyou could not using a debugger."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 563,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 560,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-breakpoints",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-breakpoints",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Breakpoints"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 567,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A debugger allows you to pause a code in its execution and see the values as a\r\ngiven point in the debugger. To do this, set a \"breakpoint\" at a certain line of code. When the code runs to\r\nthat breakpoint, it will pause and you will be able to inspect all the different\r\nvariables at that certain instance."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 569,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There are two more useful and common operations. Once you are at the breakpoint,\r\nyou may want to see what happens after the current line is executed. This would\r\nbe the \"Step Over\" button that will allow you to move to the next line. Say you\r\nare at a line with the following code: ", _jsxDEV(_components.code, {
        children: "dfs(0, -1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 577,
        columnNumber: 40
      }, this), ", if you click \"step over\" the\r\ndebugger will ignore showing you what happens in this function and go to the\r\nnext line. If you click \"step in,\" however, you will enter the function and be\r\nable to step through that function."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 574,
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
