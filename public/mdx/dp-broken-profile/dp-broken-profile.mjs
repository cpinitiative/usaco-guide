"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
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
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Broken profile DP is a subset of bitmask DP. Problems falling under this\r\ncategory generally have the following properties:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "They're about filling a 2D grid."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "One of the dimensions is much smaller than the other."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "When filling the grid, each cell depends only on adjacent cells."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "The cells don't have many possible values (usually only 2)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The third property is especially important, as it means that we can process the\r\ncells column-by-column (imagine a snake wrapping around the grid). We then only\r\nneed to care about the rightmost processed cell in each row (hence the name\r\n\"broken profile\")."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The fourth property suggests that we should use a bitmask to represent that\r\nbroken profile."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll process the grid cells column-by-column, row-by-row. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 64
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 72
      }, this), "\r\ndenote the row and column of the current cell we are considering,\r\nand ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j][mask]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 5
      }, this), " be the number of ways to tile the grid so that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["All cells from cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(0, 0)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 23
        }, this), " to cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(i, j - 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 40
        }, this), " are ", _jsxDEV(_components.strong, {
          children: "covered"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 55,
          columnNumber: 57
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["All cells from cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(i + 1, j)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 23
        }, this), " to cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(N - 1, M - 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 44
        }, this), " are ", _jsxDEV(_components.strong, {
          children: "empty"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 56,
          columnNumber: 65
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "mask"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 57,
          columnNumber: 3
        }, this), " represents whether each of the remaining ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 57,
          columnNumber: 51
        }, this), " cells are ", _jsxDEV(_components.strong, {
          children: "empty"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 57,
          columnNumber: 65
        }, this), ", with\r\nthe ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 7
        }, this), "-th bit corresponding to the cell in row ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 58,
          columnNumber: 51
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, the following state would contribute toward\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[1][3][00101_2]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.img, {
        src: "/content/6_Advanced/broken-profile-state-example.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 31
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The answer will be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[N - 1][M - 1][0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 20
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We now have three cases when calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j][mask]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 42
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 7
        }, this), "-th bit of the mask is 0, meaning that cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(i, j)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 54
        }, this), " is ", _jsxDEV(_components.strong, {
          children: "covered"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 67,
          columnNumber: 66
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Case 1: we used a horizontal tile to cover it.\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: ["Cell ", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "(i, j - 1)"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 69,
                  columnNumber: 12
                }, this), " must have been empty, so there are\r\n", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp}[i - 1][j][mask \\oplus 2^i]"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 70,
                  columnNumber: 7
                }, this), " ways to do this."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 69,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 69,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 68,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Case 2: we used a vertical tile to cover it.\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: ["This is only possible if ", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "i > 0"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 72,
                  columnNumber: 32
                }, this), "."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 72,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: ["Cell ", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "(i,j-1)"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 73,
                  columnNumber: 12
                }, this), " must have been covered and cell ", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "(i-1,j)"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 73,
                  columnNumber: 54
                }, this), " must have been\r\nempty, so there are ", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "\\texttt{dp}[i - 1][j][mask \\oplus 2^{i - 1}]"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 74,
                  columnNumber: 24
                }, this), " ways\r\nto do this."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 73,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: ["This corresponds to\r\n", _jsxDEV(_components.code, {
                  children: "if (i && !(mask & (1 << i)) && !(mask & (1 << i - 1)))"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 77,
                  columnNumber: 7
                }, this), " in the code\r\nbelow."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 76,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 72,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 71,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 68,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 7
        }, this), "-th bit of the mask is 1, meaning that cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(i, j)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 54
        }, this), " is ", _jsxDEV(_components.strong, {
          children: "empty"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 79,
          columnNumber: 66
        }, this), ".\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Cell ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "(i, j - 1)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 80,
              columnNumber: 10
            }, this), " must have been covered, so there are\r\n", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\texttt{dp}[i - 1][j][mask \\oplus 2^i]"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 81,
              columnNumber: 5
            }, this), " ways to do this.\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: ["This is the same as case 1 of when the ", _jsxDEV(_components.code, {
                  className: "language-math",
                  children: "i"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 82,
                  columnNumber: 46
                }, this), "-th bit of the mask is 0, so we\r\nhandle them simultaneously in the code below."]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 82,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 82,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 80,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 80,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that the indices we need to use may become negative and will thus require\r\nwrapping. To simplify calculations and bypass this, simply drop the first two\r\ndimensions of the DP array, as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 32
      }, this), " depends only on\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i - 1][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 85,
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
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(NM 2^N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 92,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
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
      lineNumber: 187,
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
