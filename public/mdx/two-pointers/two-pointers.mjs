"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
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
      id: "user-content-two-pointers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-two-pointers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Two Pointers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "Two Pointers"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 5
      }, this), " method iterates two pointers across an array to track indices satisfying some condition. There are two common variations:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Two pointers starting at different ends of the array and moving towards each other."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Two pointers moving in the same direction at different speeds. This variation is known as the ", _jsxDEV(_components.strong, {
          children: "Sliding Window"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 98
        }, this), " algorithm."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-sum-of-two-values",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sum-of-two-values",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sum of Two Values"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---sum-of-two-values",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---sum-of-two-values",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Sum of Two Values"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The \"Opposite Ends\" method allows us to find the target pair in linear time if the array is sorted. Instead of checking every possible pair (which would take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 159
      }, this), " time), we use the sorted property to narrow down the search space in a single pass."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We want to find two indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 29
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 37
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i + a_j = x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 51
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can start by sorting the array. Then, we can initialize a left pointer at the beginning of the array (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 106
      }, this), ") and a right pointer at the end (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r=N-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 145
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l < r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 7
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a[l] + a[r] == x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 7
        }, this), ", we have found the target sum."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a[l] + a[r] < x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 7
        }, this), ", the sum is too small. To increase the sum, we increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "l"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 82
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a[l] + a[r] > x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 7
        }, this), ", the sum is too large. To decrease the sum, we decrement ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 82
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since the array is sorted, moving the left pointer to the right will never decrease the sum, and moving the right pointer to the left will never increase the sum."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-sliding-window",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sliding-window",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sliding Window"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 153,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "Sliding Window"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 5
      }, this), " method is a variation of the two pointers technique where two pointers move in the same direction to maintain a specific range or \"window\" of elements. While standard two pointers often move towards each other, the sliding window technique is used to find a contiguous subarray that satisfies a condition."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 155,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---books",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---books",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Books"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We want to find the longest contiguous segment of books that can be read within ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 81
      }, this), " minutes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To accomplish this, we can define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 35
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 55
      }, this), " to represent the beginning and end of the segment. Both will start at the beginning of the array. These numbers can be thought of as pointers, hence the name \"two pointers.\""]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 163,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For every value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 20
      }, this), " in increasing order, let's increase ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 72
      }, this), " until the total time for the segment is maximized while being less than or equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 165,
        columnNumber: 173
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 1
      }, this), " will store the maximum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{right} - \\texttt{left}+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 48
      }, this), " (segment size) that we have encountered so far."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After incrementing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{left}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 20
      }, this), " by one, the time used decreases, hence the right pointer never has to move leftwards. Thus:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Since both pointers will move at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 41
        }, this), " times, the overall time complexity is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 171,
          columnNumber: 83
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As an example, consider the first case in the sample inputs:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can move the right pointer to index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 205,
        columnNumber: 40
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 205,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The sum of the values in this range is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 40
      }, this), ", and there are ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 59
      }, this), " values. So, the current maximum segment length is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 113
      }, this), ". By incrementing the left pointer by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 167
      }, this), ", we can subtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 188
      }, this), " from the sum of values to get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 222
      }, this), ". The array then looks like:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 237,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Now, we can move the right pointer to the end. This makes the sum of values ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1+2+1=4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 77
      }, this), " and the length of the segment equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 126
      }, this), ". So, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 135
      }, this), " is now ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 269,
        columnNumber: 157
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 269,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Since the right pointer has reached the end of the array, we are done at this point. This leaves us with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{ans}=3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 302,
        columnNumber: 106
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's an animation of the above example:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 304,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 311,
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
      lineNumber: 395,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-quiz",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quiz",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quiz"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 399,
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
