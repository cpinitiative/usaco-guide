"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-a--3-b--0",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-a--3-b--0",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 5
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 14
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Although the problem asks us to solve this subtask on a general graph, it's always helpful to consider a simpler one first. So, let's consider solving this problem on a chain!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 7
      }, this), ", we know we can't afford to make a single wrong move. From this, it immediately follows that if a node in our chain has degree 2, its two incident edges ", _jsxDEV(_components.em, {
        children: "must have different marks."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 168
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Moreover, the marks of the two incident edges must uniquely determine a direction for Catherine. For instance, the following marking will not work:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "https://gcdnb.pbrd.co/images/r5bLyfKiR88B.png?o=1",
        alt: "img"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["because in order to satisfy ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 29
      }, this), ", Catherine must select the edge marked ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 76
      }, this), " when starting at node 1, and the edge marked ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 125
      }, this), " when starting at node 2, but this is impossible since from her perspective, the two nodes are identical."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From the two observations above, it follows that if four nodes are connected in sequence, the marks of the 3 edges connecting them must all be different. One easy way to do this is assign each edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 199
      }, this), " a mark of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min(d(u), d(v)) \\mod 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 218
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d(u)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 251
      }, this), " denotes the distance from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 289
      }, this), " to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 301
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To solve the general case, we can notice that this specific method of marking actually generalizes to any graph! The proof and Catherine's resultant strategy are left as exercises to the reader."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-a--2-b--6-m--n---1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-a--2-b--6-m--n---1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        className: "language-math",
        children: "A = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 5
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 14
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M = N - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 23
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Again, let's first consider solving this problem on a chain."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's return to our first observation from the previous subtask, which was that two edges incident to the same node had to have different marks. Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B = 6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 152
      }, this), ", this condition is no longer necessary. In fact, we can show that for most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 235
      }, this), ", this condition is necessarily false."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, let's assume we have a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 35
      }, this), " with degree 2 whose incident edges both have mark ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 89
      }, this), ". Since both marks are the same, her first move could go in either direction, so we need to guarantee that Catherine will be able to determine whether she's going the right way after no more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B/2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 288
      }, this), " moves."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If Catherine reaches either end of the chain within ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B/2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 53
      }, this), " moves, she has either reached her destination or knows that she must turn around. If she does not reach either end, she will have seen a sequence of exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B/2 + 2 = 5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 216
      }, this), " marks, from which she must be able to deduce her direction."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we're dealing with a chain, let's write the edge weights as an array (for instance, we can represent the above graph as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 0, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 127
      }, this), "). We now just need a array of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 176
      }, this), " consisting of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 198
      }, this), "'s and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 208
      }, this), "'s which satisfies the following property:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "For each subarray of length 5, its reverse cannot also be a subarray."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An example of an array which violates this condition is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 0, 0, 0, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 57
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As we observed earlier, we can assume there's at least one occurrence of the subarray ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 87
      }, this), " in our array, so let's try to extend it to the left and right such that the above condition is still satisfied."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that our condition precludes the existence of 3 consecutive ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 66
      }, this), "'s, so we can extend our subarray to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 0, 0, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 106
      }, this), ". If we add one element to both sides from here, only two possibilities remain: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 1, 0, 0, 1, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 200
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, 1, 0, 0, 1, 0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 224
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From here, note that in order to get to an array of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 58
      }, this), ", we can just repeat this size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 96
      }, this), " array over and over. Chain case—solved!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Solving the general tree case requires one more crucial observation. Notice that when a node has degree more than 2, we can uniquely identify its edge to its parent by using a different mark for that edge than all the other incident edges. This doesn't work for degree-2 nodes because Catherine would see one of each mark and be unable to distinguish them. Luckily, we've already solved the degree-2 situation in our above analysis of chains, so we can combine these two observations to get the full solution."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
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
