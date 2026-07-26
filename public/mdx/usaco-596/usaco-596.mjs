"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_gates_silver_jan16.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Java)"
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
      children: ["Each fence can be thought of as two grid units. The reason we use two is for cases such as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "NESW"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 92
      }, this), ".\r\nIf we only use one grid unit per fence, there would be no area inside it, and thus we would undercount."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can model the fences, and floodfill to find the number of connected components. The region not\r\nenclosed by a fence is also counted as one connected component. By merging the regions enclosed\r\nby a fence with the region not enclosed by the fence, by means of a gate, we can ensure the farm\r\nis connected. The cows are able to go from a region enclosed by a fence into the region not enclosed\r\nby a fence and subsequently visit another region which is enclosed by a fence."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Therefore, the number of gates that must be used is equal to the number of regions enclosed by the fence,\r\nwhich is the number of connected components minus one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can perform floodfill and have the fences signify a stopping point. If a fence is seen, we no longer\r\ncontinue to floodfill in that direction. This is because floodfill is performed to simulate the cows' movement,\r\nand a cow cannot walk through a fence."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To count the number of connected components, we perform floodfill from every point in our boundaries (more\r\non that in the warning below). If we have already visited a point, we don't floodfill any further. If we\r\nhave to start a new floodfill, it means the point we're starting on was not reached from prior\r\nfloodfills, meaning it is in a separate component. Thus, we add one to our count of connected components."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-alternate-faster-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternate-faster-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternate Faster Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 230,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "It is possible to make the following 2 observations:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 232,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "For each contiguous closed region, there must be 1 gate. In a minimum state, each region has exactly 1 gate. For example, if there are 2 regions, there must be 2 gates."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 234,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Each time FJ comes across a node he has visited along an edge he has not crossed in either direction, he creates exactly 1 new region. In other words, FJ creates exactly 1 new contiguous closed region if all of these conditions are met:\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["FJ walks along an edge from point ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "a"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 236,
              columnNumber: 38
            }, this), " to ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "b"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 236,
              columnNumber: 45
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 236,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["He did not walk from ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "a"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 237,
              columnNumber: 25
            }, this), " to ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "b"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 237,
              columnNumber: 32
            }, this), " in the past"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 237,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["He did not walk from ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "b"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 238,
              columnNumber: 25
            }, this), " to ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "a"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 238,
              columnNumber: 32
            }, this), " in the past"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 238,
            columnNumber: 2
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              className: "language-math",
              children: "b"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 239,
              columnNumber: 4
            }, this), " is a point he had already visited"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 239,
            columnNumber: 2
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 236,
          columnNumber: 2
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 235,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 234,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Under these observations, we can use a set of visited edges and visited nodes, and keep track of the number of contiguous closed regions. This solution is about 10 times faster than flood filling due to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 204
      }, this), " lookup and insertion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 241,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 243,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 245,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 245,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 245,
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
