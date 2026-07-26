"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["There are several main ", _jsxDEV(_components.strong, {
        children: "data types"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 24
      }, this), " that are used in contests: integers,\r\nfloating point numbers, booleans, characters, and strings. Assuming that you are\r\nfamiliar with the language you are using, this should be mostly review."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The normal ", _jsxDEV(_components.strong, {
        children: "32-bit integer"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 12
      }, this), " data type (", _jsxDEV(_components.code, {
        children: "int"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 42
      }, this), " in C++ and Java) supports values\r\nbetween ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-2\\,147\\,483\\,648"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 9
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2\\,147\\,483\\,647"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 33
      }, this), ", which is roughly equal to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pm 2 \\cdot 10^9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Some problems require you to use ", _jsxDEV(_components.strong, {
        children: "64-bit integers"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 34
      }, this), " (", _jsxDEV(_components.code, {
        children: "long long"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 55
      }, this), " in C++ and\r\n", _jsxDEV(_components.code, {
        children: "long"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 1
      }, this), " in Java) instead of 32-bit integers (", _jsxDEV(_components.code, {
        children: "int"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 45
      }, this), "). 64-bit integers are less\r\nlikely to have overflow issues, since they can store any number between\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-9\\,223\\,372\\,036\\,854\\,775\\,808"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9\\,223\\,372\\,036\\,854\\,775\\,807"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 40
      }, this), " which\r\nis roughly equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pm 9 \\times 10^{18}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 21
      }, this), ". In Python,\r\n", _jsxDEV(_components.a, {
        href: "https://docs.python.org/3.4/library/stdtypes.html#numeric-types-int-float-complex",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "int"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 123,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 1
      }, this), "s\r\nhave unlimited size."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Sometimes (but not always) a USACO problem statement (ex.\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=1041",
        rel: "nofollow",
        target: "_blank",
        children: "Haircut"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), ") will\r\ncontain a warning such as the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "Note that the large size of integers involved in this problem may require the\r\nuse of 64-bit integer data types (e.g., a \"long long\" in C/C++)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 130,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Contest problems are usually set such that the 64-bit integer is sufficient, so for lower divisions\r\nit might be a good idea to use 64-bit integers in place of 32-bit integers\r\neverywhere. Of course, you shouldn't do this when time and/or memory limits are\r\ntight, which may be the case in higher divisions of USACO. Also note that in\r\nJava, you will need to cast ", _jsxDEV(_components.code, {
        children: "long"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 29
      }, this), " back to ", _jsxDEV(_components.code, {
        children: "int"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 44
      }, this), " when accessing array indices."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Additionally, there exist 16-bit integers (", _jsxDEV(_components.code, {
        children: "short"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 139,
        columnNumber: 44
      }, this), " in C++ and Java). However,\r\nthese are generally not useful as the extra memory saved by using them is\r\nusually negligible. Unsigned integers (", _jsxDEV(_components.code, {
        children: "unsigned int"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 40
      }, this), ", ", _jsxDEV(_components.code, {
        children: "unsigned long long"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 56
      }, this), ", etc.)\r\nalso exist. They aren't used as frequently, though the 2-fold increase in size is sometimes the difference between overflowing and not overflowing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Floating point numbers"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 144,
        columnNumber: 1
      }, this), " are used to store decimal values. It is important to\r\nknow that floating point numbers are not exact, because the binary architecture\r\nof computers can only store decimals to a certain precision. Hence, we should\r\nalways expect that floating point numbers are slightly off, so it's generally a\r\nbad idea to compare two floating-point numbers for exact equality (", _jsxDEV(_components.code, {
        children: "=="
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 68
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Contest problems will usually accommodate the inaccuracy of floating point\r\nnumbers by checking if the ", _jsxDEV(_components.strong, {
        children: "absolute"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 28
      }, this), " or ", _jsxDEV(_components.strong, {
        children: "relative"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 151,
        columnNumber: 44
      }, this), " difference between your\r\noutput and the answer is less than some small constant like ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\epsilon=10^{-9}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 61
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If your output is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 21
        }, this), " and the answer is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 43
        }, this), ", the absolute difference is\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "|x-y|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If your output is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 156,
          columnNumber: 21
        }, this), " and the answer is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 156,
          columnNumber: 43
        }, this), ", the relative difference is\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\frac{|x-y|}{|y|}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 157,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 156,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 154,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is not the case for USACO, where problems generally have a unique correct\r\noutput. So when floating point is necessary, the output format will be something\r\nalong the lines of \"Print ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 27
      }, this), " times the maximum probability of receiving\r\nexactly one accepted invitation, rounded down to the nearest integer.\" (ex.\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=924",
        rel: "nofollow",
        target: "_blank",
        children: "Cow Dating"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 1
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Boolean"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 1
      }, this), " variables have two possible states: ", _jsxDEV(_components.code, {
        children: "true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 49
      }, this), " and ", _jsxDEV(_components.code, {
        children: "false"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 60
      }, this), ". We'll\r\nusually use booleans to mark whether a certain process is done, and arrays of\r\nbooleans to mark which components of an algorithm have finished. Booleans\r\nrequire 1 byte (8 bits) of storage, not 1 bit, wasting the other 7 bits of\r\nstorage. To use less memory, one can use bitsets (", _jsxDEV(_components.code, {
        children: "std::bitset"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 51
      }, this), " in C++ /\r\n", _jsxDEV(_components.code, {
        children: "BitSet"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 170,
        columnNumber: 1
      }, this), " in Java). Unfortunately, bitsets are not available in Python."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Character"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 1
      }, this), " variables represent a single character. They are returned when you\r\naccess the character at a certain index within a string. Characters are\r\nrepresented using the ASCII standard, which assigns each character to a\r\ncorresponding integer. This allows us to do arithmetic with them; for example,\r\nboth ", _jsxDEV(_components.code, {
        children: "cout << ('f' - 'a');"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 6
      }, this), " in C++ and ", _jsxDEV(_components.code, {
        children: "System.out.print('f' - 'a');"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 40
      }, this), " in Java\r\nwill print ", _jsxDEV(_components.code, {
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 12
      }, this), ". In Java, characters are 16 bits, while in C/C++, characters are\r\n8 bits."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Strings"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 1
      }, this), " are effectively arrays of characters. You can easily access the character at a certain\r\nindex and take substrings of the string (", _jsxDEV(_components.code, {
        children: "charAt()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.code, {
        children: "substring()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 57
      }, this), " in Java)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 180,
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
