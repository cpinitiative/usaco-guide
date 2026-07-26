"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_badmilk_bronze_dec15.html",
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
      id: "user-content-video-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-video-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Video Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By Yifan Ma"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 250,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can do a simple brute force to find out which milk could possibly be bad, and\r\nthen see how many people that milk could have infected in total."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 252,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since FJ needs one medicine for each person who could possibly get sick, we can\r\njust take the maximum possible number of infected people over all milk types\r\nthat could have possibly gone bad."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 255,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The main issue is checking if a milk could have been the one that went bad. To\r\nresolve this, let's treat both a person drinking milk and a person getting sick\r\nas a type of ", _jsxDEV(_components.em, {
        children: "event"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 14
      }, this), ". Then, we can have a list of events sorted by time. Note\r\nthat sick events must be before drinking events if they occur at the same time\r\nbecause one can only get sick if they drank the milk at a ", _jsxDEV(_components.em, {
        children: "strictly"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 59
      }, this), " earlier\r\npoint in time. The sample case in this format would be as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "With this list of events, we can then go through marking the people that could\r\nhave possibly gotten sick and checking each event where a person got sick if\r\nthey could have possibly gotten sick."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 282,
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
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(M(D+N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 288,
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
