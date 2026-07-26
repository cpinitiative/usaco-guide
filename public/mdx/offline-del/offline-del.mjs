"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Using a persistent data structure or rollbacking, you are able to simulate\r\ndeleting from a data structure while only using insertion operations."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-dsu-with-rollback",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dsu-with-rollback",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "DSU With Rollback"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "DSU with Rollback"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " is an extension to DSU that saves merges and can undo the previous ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 90
      }, this), " merges."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Adding on to the usual DSU, we can store the parent\r\nand sizes of nodes that are being merged before each merge. This allows us revert each node to their parents before the merge so that the rollback function can use the information to undo the merges."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can store each state of the DSU using an integer, captured by the snapshot function which returns the number of old merges that has not been rolled back. It's similar to taking a picture of something, and years later going back into your photo album and scrolling up until you find this picture."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, if history array stores ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{(1, 2), (3, 4), (1, 3)\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 38
      }, this), ", this means that before our most recent unite, the representative element for component ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 155
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 162
      }, this), ", and before that the representative element for component ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 224
      }, this), " is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 231
      }, this), ". If we want to roll back two unites, we would pop the last two elements of the history array and update the representative elements in order."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Furthermore, we can extend this array to roll back component sizes or anything else our DSU may track!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dynamic-connectivity",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dynamic-connectivity",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dynamic Connectivity"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 111,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Dynamic Connectivity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), " is the most common problem using the deleting trick.\r\nThese types of problems involve determining whether pairs of nodes are in the same connected component while edges are being inserted and removed."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 113,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---vertex-add-component-sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---vertex-add-component-sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Vertex Add Component Sum"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For dynamic connectivity problems, we say for every query, there's an interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[l, r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 80
      }, this), " where it's active. Obviously, for each edge add/remove query, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l = "
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 151
      }, this), " (the index of the query which adds the edge), and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r = "
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 208
      }, this), " (the index of the query which removes the edge) ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 263
      }, this), ". If an edge never gets removed, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r = q - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 305
      }, this), ". Note that we assign intervals such that for queries outside the interval, they are completely unaffected by this query. We can use similar reasoning to construct intervals for type ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 499
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 507
      }, this), " queries."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can now construct a query tree. If our interval is encapsulated by the the tree's interval, then we can add our query to the node corresponding to the interval. When answering queries, as we enter the interval, we can process all the operations inside the interval. As we exit the interval, we need to undo them. If we are at a leaf, we can answer type ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 357
      }, this), " queries since we have processed all queries outside this interval ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[i, i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 427
      }, this), ". Since we are processing intervals by halves each time, the depth is at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 140,
        columnNumber: 513
      }, this), ", similar to divide and conquer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["See the code below for implementation details. Note that similar to unite operations, we can also perform and undo operations of type ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 135
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
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
