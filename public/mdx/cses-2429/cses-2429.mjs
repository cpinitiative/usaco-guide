"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This problem asks us to count the number of valid ways to complete the grid while respecting the constraints imposed by characters ", _jsxDEV(_components.code, {
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 132
      }, this), " and ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 140
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Each row may contain:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "No marked cell,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Only an ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 11
        }, this), ","]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Only a ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 10,
          columnNumber: 10
        }, this), ","]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Or both."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similarly, each column may or may not already contain an ", _jsxDEV(_components.code, {
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 58
      }, this), " or ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The goal is to count the number of valid permutations of columns assigned to rows such that:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["All ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 7
        }, this), " constraints are satisfied,"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["All ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 7
        }, this), " constraints are satisfied,"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "And no conflicts occur."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-key-observation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-key-observation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Key Observation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A direct counting approach is difficult because constraints interact across rows and columns."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead of counting only valid permutations, we:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Count permutations under relaxed conditions,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Subtract invalid configurations,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Correct overcounting using the ", _jsxDEV(_components.strong, {
          children: "Principle of Inclusion–Exclusion (PIE)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 35
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Overcounting happens when there is a violation."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-what-is-a-violation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-what-is-a-violation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "What is a Violation?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In our construction, each row is assigned one column for ", _jsxDEV(_components.code, {
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 58
      }, this), " and one column for ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 81
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "violation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 3
      }, this), " occurs if these two assignments coincide — that is, both ", _jsxDEV(_components.code, {
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 74
      }, this), " and ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 82
      }, this), " end up in the same cell of a row. Such a configuration is invalid."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The Principle of Inclusion–Exclusion counts configurations where certain rows are allowed to violate this condition, and then corrects the overcounting using alternating signs."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-category-definitions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-category-definitions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Category Definitions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "C0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 3
        }, this), ": Number of rows containing neither ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 43
        }, this), " nor ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 51
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "C1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 3
        }, this), ": Number of rows that contain a ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 39
        }, this), " in column ", _jsxDEV(_components.code, {
          children: "c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 53
        }, this), ", where column ", _jsxDEV(_components.code, {
          children: "c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 71
        }, this), " contains no ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 87
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "C2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 3
        }, this), ": Number of rows that contain an ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 40
        }, this), " in column ", _jsxDEV(_components.code, {
          children: "c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 54
        }, this), ", where column ", _jsxDEV(_components.code, {
          children: "c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 72
        }, this), " contains no ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 88
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "C3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 53,
          columnNumber: 3
        }, this), ": Number of columns containing neither ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 53,
          columnNumber: 46
        }, this), " nor ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 53,
          columnNumber: 54
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "C4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 54,
          columnNumber: 3
        }, this), ": Number of columns without ", _jsxDEV(_components.code, {
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 54,
          columnNumber: 35
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "C5"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 3
        }, this), ": Number of columns without ", _jsxDEV(_components.code, {
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 35
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "These values summarize all available flexibility in the grid."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-applying-inclusionexclusion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applying-inclusionexclusion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applying Inclusion–Exclusion"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We iterate over three parameters:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 3
        }, this), ": number of rows chosen from ", _jsxDEV(_components.code, {
          children: "C0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 65,
          columnNumber: 35
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 66,
          columnNumber: 3
        }, this), ": number chosen from ", _jsxDEV(_components.code, {
          children: "C1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 66,
          columnNumber: 27
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 3
        }, this), ": number chosen from ", _jsxDEV(_components.code, {
          children: "C2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 27
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each triple ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j, k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 17
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Choose rows:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 71,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\binom{C_0}{i}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 72,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 72,
            columnNumber: 4
          }, this), "\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\binom{C_1}{j}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 73,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 73,
            columnNumber: 4
          }, this), "\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\binom{C_2}{k}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 74,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 74,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 72,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Choose matching columns from free columns:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\binom{C_3}{i}"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 77,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 77,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Arrange remaining free columns:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "(C_4 - i - j)!"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 80,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 80,
            columnNumber: 4
          }, this), "\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "(C_5 - i - k)!"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 81,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 81,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 80,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Match selected rows and columns:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 83,
          columnNumber: 4
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              className: "language-math",
              children: "i!"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 84,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 84,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 84,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Apply alternating sign:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 86,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(-1)^{i + j + k}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This sign is the heart of Inclusion–Exclusion:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Add configurations with 0 violations,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Subtract those with 1 violation,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Add back those with 2 violations,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Subtract 3 violations,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "And so on."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-final-formula",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-final-formula",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Final Formula"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The final answer is:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i,j,k}\r\n(-1)^{i+j+k}\r\n\\cdot\r\n\\binom{C_0}{i}\r\n\\binom{C_1}{j}\r\n\\binom{C_2}{k}\r\n\\binom{C_3}{i}\r\n\\cdot\r\ni!\r\n\\cdot\r\n(C_4-i-j)!\r\n\\cdot\r\n(C_5-i-k)!"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 106,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This formula counts all valid completions while correcting overcounting via the Inclusion–Exclusion Principle."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-further-optimisation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-further-optimisation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Further Optimisation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The direct implementation evaluates all triples ", _jsxDEV(_components.code, {
        children: "(i, j, k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 49
      }, this), ", which gives\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 1
      }, this), " time complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To improve this, fix a value of ", _jsxDEV(_components.code, {
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 33
      }, this), ". After fixing ", _jsxDEV(_components.code, {
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 51
      }, this), ", the remaining part of the formula becomes:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 130,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{j,k}\r\n(-1)^{j+k}\r\n\\cdot\r\n\\binom{C_1}{j}\r\n\\binom{C_2}{k}\r\n\\cdot\r\n(C_4 - i - j)!\r\n\\cdot\r\n(C_5 - i - k)!"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 132,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now observe:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 145,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 7
        }, this), " terms depend only on ", _jsxDEV(_components.code, {
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 32
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 148,
          columnNumber: 7
        }, this), " terms depend only on ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 148,
          columnNumber: 32
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 148,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["There is no interaction between ", _jsxDEV(_components.code, {
          children: "j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 149,
          columnNumber: 35
        }, this), " and ", _jsxDEV(_components.code, {
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 149,
          columnNumber: 43
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 149,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 147,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "So the double sum factorizes into:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left(\r\n\\sum_j\r\n(-1)^j\r\n\\binom{C_1}{j}\r\n(C_4 - i - j)!\r\n\\right)\r\n\\cdot\r\n\\left(\r\n\\sum_k\r\n(-1)^k\r\n\\binom{C_2}{k}\r\n(C_5 - i - k)!\r\n\\right)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 153,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Each of these can be computed in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 34
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.hr, {}, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 173,
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
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Space Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 23
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nconst ll MOD = 1e9 + 7;\r\nconst int MAXN = 505;\r\n\r\nll fact[MAXN], invfact[MAXN];\r\n\r\n// BeginCodeSnip{Binary Exponentiation}\r\nll binpow(ll a, ll b) {\r\n\tll r = 1;\r\n\twhile (b) {\r\n\t\tif (b & 1) r = r * a % MOD;\r\n\t\ta = a * a % MOD;\r\n\t\tb >>= 1;\r\n\t}\r\n\treturn r;\r\n}\r\n// EndCodeSnip\r\n// BeginCodeSnip{Combination Formula}\r\nll nCr(int n, int r) {\r\n\tif (r < 0 || r > n) return 0;\r\n\treturn fact[n] * invfact[r] % MOD * invfact[n - r] % MOD;\r\n}\r\n// EndCodeSnip\r\n// BeginCodeSnip{Formula from Editorial}\r\nll formula(int C0, int C1, int C2, int C3, int C4, int C5) {\r\n\tll ans = 0;\r\n\r\n\tfor (int i = 0; i <= min(C0, C3); i++) {\r\n\r\n\t\t// Compute sum over j\r\n\t\tll sumJ = 0;\r\n\t\tfor (int j = 0; j <= C1; j++) {\r\n\t\t\tif (C4 - i - j < 0) continue;\r\n\r\n\t\t\tll cur = nCr(C1, j) * fact[C4 - i - j] % MOD;\r\n\t\t\tif (j & 1) cur = (MOD - cur) % MOD;\r\n\r\n\t\t\tsumJ = (sumJ + cur) % MOD;\r\n\t\t}\r\n\r\n\t\t// Compute sum over k\r\n\t\tll sumK = 0;\r\n\t\tfor (int k = 0; k <= C2; k++) {\r\n\t\t\tif (C5 - i - k < 0) continue;\r\n\r\n\t\t\tll cur = nCr(C2, k) * fact[C5 - i - k] % MOD;\r\n\t\t\tif (k & 1) cur = (MOD - cur) % MOD;\r\n\r\n\t\t\tsumK = (sumK + cur) % MOD;\r\n\t\t}\r\n\r\n\t\tll cur = 1;\r\n\t\tcur = cur * nCr(C0, i) % MOD;\r\n\t\tcur = cur * nCr(C3, i) % MOD;\r\n\t\tcur = cur * fact[i] % MOD;\r\n\t\tcur = cur * sumJ % MOD;\r\n\t\tcur = cur * sumK % MOD;\r\n\r\n\t\tif (i & 1) cur = (MOD - cur) % MOD;\r\n\r\n\t\tans = (ans + cur) % MOD;\r\n\t}\r\n\r\n\treturn ans;\r\n}\r\n// EndCodeSnip\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tint n;\r\n\tcin >> n;\r\n\r\n\t// BeginCodeSnip{Pre-Compute}\r\n\tfact[0] = 1;\r\n\tfor (int i = 1; i <= n; i++) fact[i] = fact[i - 1] * i % MOD;\r\n\r\n\tinvfact[n] = binpow(fact[n], MOD - 2);\r\n\tfor (int i = n; i > 0; i--) invfact[i - 1] = invfact[i] * i % MOD;\r\n\t// EndCodeSnip\r\n\r\n\tvector<int> p(n, -1), q(n, -1);\r\n\tvector<bool> inA(n, false), inB(n, false);\r\n\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tstring s;\r\n\t\tcin >> s;\r\n\t\tfor (int j = 0; j < n; j++) {\r\n\t\t\tif (s[j] == 'A') {\r\n\t\t\t\tp[i] = j;\r\n\t\t\t\tinA[j] = true;\r\n\t\t\t}\r\n\t\t\tif (s[j] == 'B') {\r\n\t\t\t\tq[i] = j;\r\n\t\t\t\tinB[j] = true;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tint C0 = 0, C1 = 0, C2 = 0, C3 = 0, C4 = 0, C5 = 0;\r\n\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tif (p[i] == -1 && q[i] == -1) C0++;\r\n\t\tif (p[i] == -1 && q[i] != -1 && !inA[q[i]]) C1++;\r\n\t\tif (p[i] != -1 && q[i] == -1 && !inB[p[i]]) C2++;\r\n\t}\r\n\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tif (!inA[i] && !inB[i]) C3++;\r\n\t\tif (!inA[i]) C4++;\r\n\t\tif (!inB[i]) C5++;\r\n\t}\r\n\r\n\tcout << formula(C0, C1, C2, C3, C4, C5) << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 181,
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
