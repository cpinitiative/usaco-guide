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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-checking-for-out-of-bounds",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-checking-for-out-of-bounds",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Checking for Out of Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Writing to an out of bounds array index is known as\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Buffer_overflow",
        rel: "nofollow",
        target: "_blank",
        children: "buffer overflow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), ". C++ may or\r\nmay not produce a runtime error upon buffer overflow. For example,\r\nthe following code results in a runtime error on\r\n", _jsxDEV(_components.a, {
        href: "https://ide.usaco.guide",
        rel: "nofollow",
        target: "_blank",
        children: "ide.usaco.guide"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), ", but outputs 4 on my computer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tvector<int> invalid_vec{1};\r\n\tvector<int> valid_vec{1234};\r\n\tcout << valid_vec[0] << \"\\n\";  // outputs 1234\r\n\tfor (int i = 0; i < 10; i++) {\r\n\t\tinvalid_vec[i] = i;  // may or may not error\r\n\t}\r\n\tcout << valid_vec[0] << \"\\n\";  // may output 4\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To ensure that an error is raised when accessing an out of bounds index,\r\nyou can use\r\n", _jsxDEV(_components.a, {
        href: "https://www.cplusplus.com/reference/vector/vector/at",
        rel: "nofollow",
        target: "_blank",
        children: "vector::at"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " instead of\r\n", _jsxDEV(_components.a, {
        href: "https://www.cplusplus.com/reference/vector/vector/operator%5B%5D",
        rel: "nofollow",
        target: "_blank",
        children: "vector::operator[]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\r\nlike so:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tvector<int> invalid_vec{1};\r\n\tvector<int> valid_vec{1234};\r\n\tcout << valid_vec.at(0) << \"\\n\";  // outputs 1234\r\n\tfor (int i = 0; i < 10; i++) {\r\n\t\tinvalid_vec.at(i) = i;  // throws std::out_of_range\r\n\t}\r\n\tcout << valid_vec.at(0) << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "C++ will now check the bounds when we access the vectors and will\r\nproduce the following output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "1234\r\nterminate called after throwing an instance of 'std::out_of_range'\r\n  what():  vector::_M_range_check: __n (which is 1) >= this->size() (which is 1)\r\n1 zsh: abort      ./$1 $@[2,-1]\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-unspecified-evaluation-order",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-unspecified-evaluation-order",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Unspecified Evaluation Order"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here is some unexpected behavior you might come across when trying to create a\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/83241#comment-705458",
        rel: "nofollow",
        target: "_blank",
        children: "trie"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 1
      }, this), " or a persistent\r\nsegment tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> res{-1};\r\n\r\nint add_element() {\r\n\tres.push_back(-1);\r\n\treturn res.size() - 1;  // index of added element\r\n}\r\n\r\nint main() {\r\n\tfor (int i = 0; i < 5; ++i) {\r\n\t\tres[i] = add_element();\r\n\t\tcout << i << \" \" << res[i] << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Compiling and running the above code with ", _jsxDEV(_components.code, {
        children: "-std=c++17"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 43
      }, this), " gives the intended output:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "0 1\r\n1 2\r\n2 3\r\n3 4\r\n4 5\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["But compiling and running with ", _jsxDEV(_components.code, {
        children: "-std=c++14"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 32
      }, this), " gives something unexpected:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "0 -1\r\n1 -1\r\n2 3\r\n3 -1\r\n4 5\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For both ", _jsxDEV(_components.code, {
        children: "-std=c++17"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 10
      }, this), " and ", _jsxDEV(_components.code, {
        children: "-std=c++14"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 27
      }, this), ", the intended output is produced\r\nif the result of ", _jsxDEV(_components.code, {
        children: "add_element()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 18
      }, this), " is saved to a temporary variable."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 111,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> res{-1};\r\n\r\nint add_element() {\r\n\tres.push_back(-1);\r\n\treturn res.size() - 1;  // index of added element\r\n}\r\n\r\nint main() {\r\n\tfor (int i = 0; i < 10; ++i) {\r\n\t\tint tmp = add_element();\r\n\t\tres[i] = tmp;\r\n\t\tcout << i << \" \" << res[i] << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The problem is that ", _jsxDEV(_components.code, {
        children: "res[i] = add_element();"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 21
      }, this), " only works if ", _jsxDEV(_components.code, {
        children: "add_element()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 61
      }, this), " is\r\nevaluated before ", _jsxDEV(_components.code, {
        children: "res[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 18
      }, this), " is. If ", _jsxDEV(_components.code, {
        children: "res[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 34
      }, this), " is evaluated first, and ", _jsxDEV(_components.em, {
        children: "then"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 67
      }, this), "\r\n", _jsxDEV(_components.code, {
        children: "add_element()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 1
      }, this), " results in the memory for ", _jsxDEV(_components.code, {
        children: "res"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 43
      }, this), " being reallocated, then ", _jsxDEV(_components.code, {
        children: "res[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 73
      }, this), "\r\nis invalidated. The order in which ", _jsxDEV(_components.code, {
        children: "res[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 36
      }, this), " and ", _jsxDEV(_components.code, {
        children: "add_element()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 49
      }, this), " are evaluated is\r\nunspecified (at least before C++17)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["See\r\n", _jsxDEV(_components.a, {
        href: "https://stackoverflow.com/questions/38501587/what-are-the-evaluation-order-guarantees-introduced-by-c17#:~:text=In%20C%2B%2B17%2C%20it,of%20the%20object%20is%20evaluated",
        rel: "nofollow",
        target: "_blank",
        children: "this"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 1
      }, this), "\r\nStackOverflow post for some discussion about why this is the case\r\n(", _jsxDEV(_components.a, {
        href: "https://stackoverflow.com/questions/18040037",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 145,
        columnNumber: 2
      }, this), "'s a similar issue)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-gcc-warning-options",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-gcc-warning-options",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "GCC Warning Options"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 147,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this section and the following one we'll go over options you can add to your\r\n", _jsxDEV(_components.code, {
        children: "g++"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 1
      }, this), " compile command to aid in debugging."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 149,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Here are the warning options that Ben uses:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 170,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "-Wall -Wextra -Wshadow -Wconversion -Wfloat-equal -Wduplicated-cond -Wlogical-op\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We give examples for some of these below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content--wall",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--wall",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-Wall"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Enables many (but not all) warning options, including ", _jsxDEV(_components.code, {
        children: "-Wuninitialized"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 55
      }, this), " and\r\n", _jsxDEV(_components.code, {
        children: "-Wunused-variable"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint x;\r\n\tcout << x;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 198,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Compile Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp: In function ‘int main()’:\r\nmain.cpp:6:10: warning: ‘x’ is used uninitialized in this function [-Wuninitialized]\r\n    6 |  cout << x;\r\n      |          ^\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content--wextra",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--wextra",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-Wextra"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 217,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Enables some warning options not enabled by ", _jsxDEV(_components.code, {
        children: "-Wall"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 45
      }, this), ", such as\r\n", _jsxDEV(_components.code, {
        children: "-Wmissing-field-initializers"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 220,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct s {\r\n\tint f, g, h;\r\n};\r\n\r\nint main() { s x = {3, 4}; }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 222,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Compile Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 233,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp: In function ‘int main()’:\r\nmain.cpp:7:18: warning: missing initializer for member ‘s::h’ [-Wmissing-field-initializers]\r\n    7 |     s x = { 3, 4 };\r\n      |                  ^\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 235,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content--wconversion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--wconversion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-Wconversion"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 242,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Warns for implicit conversions that may alter a value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 244,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tdouble x = 5.5;\r\n\tint y = x;\r\n\tcout << y;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 246,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 246,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Compile Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 257,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp: In function ‘int main()’:\r\nmain.cpp:6:13: warning: conversion from ‘double’ to ‘int’ may change value [-Wfloat-conversion]\r\n    6 |     int y = x;\r\n      |             ^\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content--wshadow",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--wshadow",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-Wshadow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint x;\r\n\r\nint main() {\r\n\tint x = 5;\r\n\tcout << x;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 277,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Compile Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 289,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp: In function ‘int main()’:\r\nmain.cpp:7:6: warning: declaration of ‘x’ shadows a global declaration [-Wshadow]\r\n    7 |  int x = 5;\r\n      |      ^\r\nmain.cpp:4:5: note: shadowed declaration is here\r\n    4 | int x;\r\n      |     ^\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 291,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 291,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content--wfloat-equal",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--wfloat-equal",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-Wfloat-equal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 301,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 301,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Warns if floating-point values are used in equality comparisons."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 303,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tdouble x = 1.0 / 49 * 49;\r\n\tcout << (x == 1.0);  // 0\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 305,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 305,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Compile Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 315,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp: In function ‘int main()’:\r\nmain.cpp:6:16: warning: comparing floating-point with ‘==’ or ‘!=’ is unsafe [-Wfloat-equal]\r\n    6 |     cout << (x == 1.0);\r\n      |              ~~^~~~~~\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-gcc-debug-options",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-gcc-debug-options",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "GCC Debug Options"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 324,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content--fsanitizeundefined",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--fsanitizeundefined",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.a, {
        href: "https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "-fsanitize=undefined"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 342,
          columnNumber: 6
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 342,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 342,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-example-array-out-of-bounds",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-array-out-of-bounds",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example: Array Out of Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 344,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without ", _jsxDEV(_components.code, {
        children: "-fsanitize=undefined"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 346,
        columnNumber: 9
      }, this), ", this program executes successfully and outputs\r\ngarbage:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 346,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint v[5];\r\n\tcout << v[5] << endl;  // may output an arbitrary integer\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 349,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 349,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With ", _jsxDEV(_components.code, {
        children: "-fsanitize=undefined"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 359,
        columnNumber: 6
      }, this), ", this program still executes successfully,\r\nbut the following runtime error is printed to standard error:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 359,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp:6:13: runtime error: index 5 out of bounds for type 'int [5]'\r\nmain.cpp:6:13: runtime error: load of address 0x7ffc4efaf2d4 with insufficient space for an object of type 'int'\r\n0x7ffc4efaf2d4: note: pointer points here\r\n  11 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  f0 15 40 00 00 00 00 00  00 00 00 00 00 00 00 00\r\n              ^\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 362,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 362,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-example-vector-out-of-bounds",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-vector-out-of-bounds",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example: Vector Out of Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 370,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The code below produces a segmentation fault:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 372,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tvector<int> v;\r\n\tcout << v[-1] << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 374,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Output:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 384,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "/tmp/program/run.sh: line 1:    71 Segmentation fault      ./prog\r\nCommand exited with non-zero status 139\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 386,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With ", _jsxDEV(_components.code, {
        children: "-fsanitize=undefined"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 391,
        columnNumber: 6
      }, this), ", a slightly more informative error message is\r\nproduced:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 391,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "/opt/rh/devtoolset-10/root/usr/include/c++/10/bits/stl_vector.h:1046:34: runtime error: applying non-zero offset 18446744073709551612 to null pointer\r\n/tmp/program/run.sh: line 1:  1845 Segmentation fault      ./prog\r\nCommand exited with non-zero status 139\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 394,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 394,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-example-integer-overflow",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-integer-overflow",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example: Integer Overflow"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 400,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint x = 1 << 30;\r\n\tcout << x + x << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 402,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 402,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With ", _jsxDEV(_components.code, {
        children: "-fsanitize=undefined"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 6
      }, this), ", this program still executes successfully,\r\nbut the following runtime error is printed to standard error:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 412,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp:6:14: runtime error: signed integer overflow: 1073741824 * 2 cannot be represented in type 'int'\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 415,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 415,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-example-detecting-multiple-errors",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-detecting-multiple-errors",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example: Detecting Multiple Errors"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 419,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By default, the undefined behavior sanitizer will attempt to continue after\r\ndetecting an error. For example, the following program with\r\n", _jsxDEV(_components.code, {
        children: "-fsanitize=undefined"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 423,
        columnNumber: 1
      }, this), " produces multiple runtime errors:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 421,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tcout << (1 << 32) << endl;\r\n\tcout << (1 << 32) << endl;\r\n\tcout << (1 << 32) << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 425,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 425,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Standard Error:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 436,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp:5:13: runtime error: shift exponent 32 is too large for 32-bit type 'int'\r\nmain.cpp:6:13: runtime error: shift exponent 32 is too large for 32-bit type 'int'\r\nmain.cpp:7:13: runtime error: shift exponent 32 is too large for 32-bit type 'int'\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 438,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 438,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To disable this behavior and exit after the first detected error, we can use\r\n", _jsxDEV(_components.code, {
        children: "-fsanitize=undefined"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 1
      }, this), " with ", _jsxDEV(_components.code, {
        children: "-fno-sanitize-recover"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 29
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 444,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Standard Error:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 447,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "main.cpp:5:13: runtime error: shift exponent 32 is too large for 32-bit type 'int'\r\nCommand exited with non-zero status 1\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 449,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 449,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content--fsanitizeaddress",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--fsanitizeaddress",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-fsanitize=address"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 454,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 454,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-example-vector-out-of-bounds-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-vector-out-of-bounds-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example: Vector Out of Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 466,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Recall that this example from the previous subsection gives a segmentation fault:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 468,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tvector<int> v;\r\n\tcout << v[-1] << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 470,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 470,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Compiling with ", _jsxDEV(_components.code, {
        children: "-fsanitize=address"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 480,
        columnNumber: 16
      }, this), " gives:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 480,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["For more helpful information we should additionally compile with the ", _jsxDEV(_components.code, {
        children: "-g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 502,
        columnNumber: 70
      }, this), " flag,\r\nwhich generates a file containing debugging information based on the line\r\nnumbering of the program."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 502,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-example-array-out-of-bounds-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-array-out-of-bounds-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example: Array Out of Bounds"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 528,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint v[5];\r\n\tcout << v[5] << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 530,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 530,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With ", _jsxDEV(_components.code, {
        children: "-fsanitize=address -g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 540,
        columnNumber: 6
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 540,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content--d_glibcxx_debug",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content--d_glibcxx_debug",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "-D_GLIBCXX_DEBUG"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 598,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 598,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This enables debug mode, which replaces each STL container with its\r\ncorresponding debug container."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 600,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Recall that the following program gives a segmentation fault."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 613,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tvector<int> v;\r\n\tcout << v[-1] << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 615,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 615,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With ", _jsxDEV(_components.code, {
        children: "-D_GLIBCXX_DEBUG"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 625,
        columnNumber: 6
      }, this), " the following output is produced:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 625,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-using-the-lldb-debugger",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-the-lldb-debugger",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using the LLDB Debugger"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 652,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Recall the example from ", _jsxDEV(_components.a, {
        href: "#checking-for-out-of-bounds",
        children: "Checking Out of Bounds"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 663,
        columnNumber: 25
      }, this), "\r\nsection where the output didn't contain the number of the line where the\r\nruntime error occurred. Below, we show how to use ", _jsxDEV(_components.code, {
        children: "lldb"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 665,
        columnNumber: 51
      }, this), " to output the line\r\nnumber. Assume the C++ source code is named ", _jsxDEV(_components.code, {
        children: "prog.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 666,
        columnNumber: 45
      }, this), " and the executable\r\nis named ", _jsxDEV(_components.code, {
        children: "prog"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 667,
        columnNumber: 10
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 663,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Add ", _jsxDEV(_components.code, {
          children: "-g"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 669,
          columnNumber: 8
        }, this), " to the compile command and compile."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 669,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Start debug mode on ", _jsxDEV(_components.code, {
          children: "prog"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 670,
          columnNumber: 24
        }, this), " using ", _jsxDEV(_components.code, {
          children: "lldb prog"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 670,
          columnNumber: 37
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 670,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Start running the program using ", _jsxDEV(_components.code, {
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 671,
          columnNumber: 36
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 671,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Show the stack backtrace using ", _jsxDEV(_components.code, {
          children: "bt"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 672,
          columnNumber: 35
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 672,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 669,
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
