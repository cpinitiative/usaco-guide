"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "From CPH:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "A sliding window is a constant-size subarray that moves from left to right\r\nthrough the array."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For each position of the window, we wish to compute some information."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
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
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The most straightforward way to do this is to maintain a sorted set of integers\r\ncontaining the integers inside the window. If the window currently spans the\r\nrange ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\dots j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 7
      }, this), ", we observe that sliding the range forward to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i+1 \\dots j+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 65
      }, this), "\r\nremoves ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 9
      }, this), " and adds ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{j+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 24
      }, this), " to the window. We can support these two\r\noperations and query for the minimum / maximum in the set in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-with-two-pointers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-two-pointers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Two Pointers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In general, it isn't required for the subarray to have constant size as long as\r\nboth the left and right endpoints of the subarray only move to the right."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 106,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We keep a pointer for the left boundary of the window and expand the right boundary until we find a song already in our subarray. Checking songs can be done with a set."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then, we erase the left boundary from the set and move the left pointer up by one. We do this until the right boundary\r\nis able to expand. The left boundary is removed until the song immediately after the right boundary isn't in\r\nour current window's set. The left boundary is removed to provide more flexibility for expanding the right boundary."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The answer is the largest distance between the left and right pointers."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-sliding-window-maximum-in-mathcalon",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-sliding-window-maximum-in-mathcalon",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Sliding Window Maximum in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 30
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 199,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 203,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-method-1---deque",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-1---deque",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 1 - Deque"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-monotonoic-queue",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-monotonoic-queue",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Monotonoic Queue"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A monotonic queue is one that is always increasing or decreasing. It is implemented by ensuring the newest\r\nelements are larger or smaller than the previous elements. If not, the previous elements are popped until\r\nthe condition is met."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 224,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "We keep a decreasing monotonic queue for finding a sliding window maximum. An\r\nincreasing monotonic queue would only work for finding the sliding window minimum,\r\nas it removes large numbers and keeps small numbers."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A decreasing monotonic queue removes elements that are smaller than our current\r\nelement and only keeps elements larger than our current element in order to\r\nmaintain monotonicity. In this case, a decreasing monotonic queue works well\r\nas any elements smaller than our current element will serve no use to us finding\r\na sliding window maximum."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 311,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A monotonic queue is similar to a ", _jsxDEV(_components.a, {
        href: "https://usaco.guide/gold/stacks#application---nearest-smaller-element",
        rel: "nofollow",
        target: "_blank",
        children: "monotonic stack"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 35
      }, this), ",\r\nbut due to its deque implementation, a monotonic queue has access to both the front and end,\r\nmaking it efficient for sliding window problems. A monotonic stack is useful for nearest greater/smaller element."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-deque---storing-indices",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-deque---storing-indices",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Deque - Storing Indices"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 321,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This is method 2 from cp-algo."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 323,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The solution is a monotonic queue with the added window size constraints. We print the\r\nfirst element (which is the largest, because the queue is decreasing), and then pop it if\r\nit is the boundary of our current window. We pop it because the first element is also the\r\noldest due to the FIFO nature of queues, meaning it must be removed to shift the window right.\r\nThen, we remove any numbers that are smaller than our current number to maintain monotonicity."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 325,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-deque---storing-values",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-deque---storing-values",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Deque - Storing Values"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 402,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Method 1 from CP Algorithms is a similar approach but stores the value itself rather than indices."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 404,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Inserting an element is the same process, but deleting an element is different. Because no\r\nindices are given this time, we check if the front of the queue is the same as the left boundary\r\nof the sliding window. If it is, then we remove it to ensure our window constraints are met."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 406,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-method-2---two-stacks",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-2---two-stacks",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 2 - Two Stacks"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 484,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Method 3 from cp-algo. Not as common but nice to know!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 486,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We use two stacks ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 19
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 29
      }, this), " to simulate our maximum queue. Every time we add an element to it, we push the element itself and the maximum in stack ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 154
      }, this), " after adding this element to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 189
      }, this), ". To pop out the front element from our queue, we just pop the top element from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 274
      }, this), ". Since elements in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 299
      }, this), " are stored in the order of how we added them, i.e. the last added element is at the top of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 396
      }, this), ", we just have to pop all of them out and push them into the stack ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 468
      }, this), " when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 479
      }, this), " is empty. After that, these elements in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 525
      }, this), " will be in reversed order, i.e. the first added element will be at the top of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 609
      }, this), ", and we can pop them out as from normal stacks to simulate the dequeue operation of our queue. To find the maximum among all elements in our queue, we just have to return the maximum of both stacks, which is stored in the top element when we added it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 488,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, we can solve the problem by removing the first element and adding a new element to the queue to simulate our sliding window. As each operation of our queue takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 169
      }, this), " time, and we add each of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 211
      }, this), " elements once, we get a time complexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 258
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 490,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 729,
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
