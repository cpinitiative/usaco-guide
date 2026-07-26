"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [_jsxDEV(_components.p, {
      children: "In this module, we assume that \"interactive\" means problems that allow a limited\r\nnumber of queries and \"communication\" means problems about communicating between\r\ntwo separate programs."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-interactive-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-interactive-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Interactive Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tip-1---exploit-the-limits",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tip-1---exploit-the-limits",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tip 1 - Exploit the Limits"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since almost all interactive problems have a limit on the number of queries you\r\nmay ask, you should use that limit to guide your thinking. There's no point in\r\ntrying to come up with a solution that uses ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 45
      }, this), " queries when the limit is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are three types of interactive problems:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Problems that directly tell you the target complexity of your solution (e.g.\r\nIOI 2014 Rail)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Problems that only tell you the maximum number of queries you may use (e.g.\r\nIOI 2013 Cave)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Problems that have a hidden limit on the number of queries (e.g. IOI 2015\r\nScales)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first type is nice because we get an idea of what our solution should look\r\nlike."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The second type is slightly less nice, but we can still approximate the target\r\ncomplexity (e.g. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N = 5000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 18
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q = 70000 \\implies N \\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 33
      }, this), " queries)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The third type is the least nice, but fortunately, we can sometimes still figure\r\nout the hidden limit. For example, in problems with relative scoring (like IOI\r\n2015 Scales), we can submit a solution that uses a fixed number of queries for\r\neach input and then reverse-engineer the limit from our score."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tip-2---divide-and-conquer",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tip-2---divide-and-conquer",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tip 2 - Divide and Conquer"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In most interactive problems, the solution is to ", _jsxDEV(_components.strong, {
        children: "divide and conquer"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 50
      }, this), ". This is\r\nusually either binary search (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 31
      }, this), " queries) or something like merge sort\r\n(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 2
      }, this), " queries)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Whenever you see large input limits and small query limits, you should\r\nimmediately think of binary search."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In this problem, we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N = 512"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 26
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q \\leq 9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 40
      }, this), ". Notice how ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^9 = 512"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 63
      }, this), " - this\r\nsuggests that we should binary search."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Indeed, that's the solution - try to come up with it yourself!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The solution is to binary search on the DFS order of the tree for the largest\r\nprefix without an easter egg. This works because any prefix of the DFS order is\r\na connected component."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"grader.h\"\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> graph[513], ord;\r\n\r\nvoid dfs(int node = 1, int parent = 0) {\r\n\tord.push_back(node);\r\n\tfor (int i : graph[node])\r\n\t\tif (i != parent) dfs(i, node);\r\n}\r\n\r\nint findEgg(int N, vector<pair<int, int>> bridges) {\r\n\tfor (int i = 1; i <= N; i++) graph[i].clear();\r\n\tord.clear();\r\n\tfor (pair<int, int> i : bridges) {\r\n\t\tgraph[i.first].push_back(i.second);\r\n\t\tgraph[i.second].push_back(i.first);\r\n\t}\r\n\tdfs();\r\n\tint l = 0, r = N - 1;\r\n\twhile (l != r) {\r\n\t\tint mid = (l + r + 1) / 2;\r\n\t\tif (query(vector<int>(ord.begin(), ord.begin() + mid))) r = mid - 1;\r\n\t\telse l = mid;\r\n\t}\r\n\treturn ord[l];\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-communication-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-communication-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Communication Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tip-1---dont-send-everything",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tip-1---dont-send-everything",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tip 1 - Don't Send Everything"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Don't worry about not being able to send all the available information - in most\r\ncases, you shouldn't be able to!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In this problem, we're asked to store and compare an integer with several other\r\nintegers."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since these numbers can go up to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{12} - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 34
      }, this), ", we can't just naively store and\r\naccess ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 8
      }, this), " (since that would take 24 operations)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Luckily, we can still store sufficient information about ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 58
      }, this), " - just not in\r\nbinary!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 107,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-solution---cmp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---cmp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - cmp"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 110,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's how our algorithm works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Consider ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 114,
          columnNumber: 12
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 114,
          columnNumber: 20
        }, this), " in base 4"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["First, encode each prefix of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 115,
          columnNumber: 32
        }, this), " ", _jsxDEV(_components.strong, {
          children: "(6 operations)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 115,
          columnNumber: 36
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Next, binary search for the longest common prefix ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 116,
          columnNumber: 53
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 116,
          columnNumber: 60
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 116,
          columnNumber: 68
        }, this), " ", _jsxDEV(_components.strong, {
          children: "(3\r\noperations)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 116,
          columnNumber: 72
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["If this prefix is of length 6, ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "A = B"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 118,
              columnNumber: 36
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 118,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 118,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Otherwise, consider the digit ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 119,
          columnNumber: 33
        }, this), " directly after this prefix for ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 119,
          columnNumber: 68
        }, this), ":\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["If ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "d > 1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 120,
              columnNumber: 8
            }, this), ", then we only need to check whether ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "4P + 3"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 120,
              columnNumber: 52
            }, this), " is encoded"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 120,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Otherwise, we only need to check whether ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "4P"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 121,
              columnNumber: 46
            }, this), " is encoded"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 121,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Check whether it is and return the answer ", _jsxDEV(_components.strong, {
              children: "(1 operation)"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 122,
              columnNumber: 47
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 122,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 120,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This algorithm uses only 10 operations instead of our original 24 - a\r\nsignificant improvement!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"cmp.h\"\r\n\r\nint delta[6]{1, 4097, 5121, 5377, 5441, 5457};\r\n\r\nvoid remember(int n) {\r\n\tfor (int i = 0; i < 6; i++) bit_set((n >> i * 2) + delta[i]);\r\n}\r\n\r\nint compare(int b) {\r\n\tint l = 0, r = 6;\r\n\twhile (l != r) {\r\n\t\tint mid = (l + r) / 2;\r\n\t\tif (bit_get((b >> mid * 2) + delta[mid])) r = mid;\r\n\t\telse l = mid + 1;\r\n\t}\r\n\r\n\tif (!l) return 0;\r\n\tint last_digit = (b >> l * 2 - 2) & 3;\r\n\tif (last_digit > 1) {\r\n\t\tif (bit_get((((b >> l * 2) << 2) + 3) + delta[l - 1])) return -1;\r\n\t\treturn 1;\r\n\t} else {\r\n\t\tif (bit_get(((b >> l * 2) << 2) + delta[l - 1])) return 1;\r\n\t\treturn -1;\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tip-2---brute-force",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tip-2---brute-force",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tip 2 - Brute Force"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 156,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Sometimes, the amount of information that we can send is (slightly) more than\r\nthe amount of information we need to decode."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 158,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this case, we can simply map each piece of information we want to decode to a\r\npiece of information that we can send."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In this problem, we want to encode and decode an array of 64 integers less than\r\n256 using an unordered sequence of 320 integers less than 256."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 166,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The number of arrays of 64 integers less than 256 is slightly less than the\r\nnumber of increasing sequences of 320 integers less than 256, so we can just map\r\neach array to an increasing sequence (using bignums) and send that sequence."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tip-3---xor",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tip-3---xor",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tip 3 - XOR"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 173,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["XOR has a nice property where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A \\oplus B \\oplus A = B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 31
      }, this), ". This lets us solve many\r\nproblems where the data sent is corrupted or the receiver doesn't know what data\r\nthe sender sent."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-solution---coins",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---coins",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Coins"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the XOR-sum of the positions with heads-up coins be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 57
      }, this), ". Notice how if we\r\nflip coin ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "X \\oplus c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 11
      }, this), ", then the new XOR-sum of the positions with heads-up coins is\r\nnow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 5
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This allows Shahrnaz to determine ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 187,
        columnNumber: 35
      }, this), " after Arnavaz flips exactly 1 coin!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"coins.h\"\r\n\r\nstd::vector<int> coin_flips(std::vector<int> b, int c) {\r\n\tstd::vector<int> flips(1);\r\n\tint xr = c;\r\n\tfor (int i = 0; i < b.size(); i++) { xr ^= b[i] * i; }\r\n\tflips[0] = xr;\r\n\treturn flips;\r\n}\r\n\r\nint find_coin(std::vector<int> b) {\r\n\tint xr = 0;\r\n\tfor (int i = 0; i < b.size(); i++) { xr ^= b[i] * i; }\r\n\treturn xr;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 189,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 189,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 207,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["CEOI tasks can be found ", _jsxDEV(_components.a, {
        href: "http://ceoi.inf.elte.hu/tasks-archive/",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 25
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 211,
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
