"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2019_solutions.zip",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
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
      id: "user-content-solution-1-magic-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1-magic-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1 (Magic DP)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this), ". ", _jsxDEV(_components.strong, {
        children: "Memory complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 41
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 64
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-code",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// DP: time O(n^2), mem O(n)\r\n#include <algorithm>\r\n#include <iostream>\r\n#include <string>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nint solve_noflip(string &s, string &t, int *loc) {\r\n\tint n = s.size();  // vertical\r\n\tint m = t.size();  // horizontal\r\n\tint res = 0;\r\n\tvector<short> forw_back_len(m + 1);\r\n\tvector<short> cur_v_len(n + m + 1);  // offset -n\r\n\tvector<short> cur_v_y(n + m + 1);\r\n\tfor (int i = 0; i <= n; ++i) cur_v_y[n - i] = i;\r\n\tvector<short> cur_h_len(m + 1);\r\n\tfor (int i = 0; i <= n; ++i) {\r\n\t\tfor (int j = 0; j <= m; ++j) forw_back_len[j] = max(0, forw_back_len[j] - 1);\r\n\t\tfor (int j = 0; j <= m; ++j) {\r\n\t\t\tint idx = n - i + j;\r\n\t\t\twhile (cur_v_y[idx] - cur_v_len[idx] == i) {\r\n\t\t\t\tint y = cur_v_y[idx];\r\n\t\t\t\t// x-j == y-i\r\n\t\t\t\tint x = y - i + j;\r\n\t\t\t\tforw_back_len[x] = max(forw_back_len[x], cur_v_len[idx]);\r\n\t\t\t\tif (y == n || x == m) {\r\n\t\t\t\t\tcur_v_y[idx] = -1;\r\n\t\t\t\t} else {\r\n\t\t\t\t\t++cur_v_y[idx];\r\n\t\t\t\t\tif (s[y] == t[x]) {\r\n\t\t\t\t\t\t++cur_v_len[idx];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tcur_v_len[idx] = 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\tvector<short> back_forw_len(m + 1);\r\n\t\tfor (int j = 0; j <= m; ++j) {\r\n\t\t\tint nj = j - cur_h_len[j];\r\n\t\t\tback_forw_len[nj] = max(back_forw_len[nj], cur_h_len[j]);\r\n\t\t}\r\n\t\tfor (int j = 1; j <= m; ++j) {\r\n\t\t\tback_forw_len[j] = max((int)back_forw_len[j], back_forw_len[j - 1] - 1);\r\n\t\t}\r\n\t\tfor (int j = 0; j <= m; ++j) {\r\n\t\t\tif (forw_back_len[j] + back_forw_len[j] > res) {\r\n\t\t\t\tres = forw_back_len[j] + back_forw_len[j];\r\n\t\t\t\tloc[0] = i - back_forw_len[j];\r\n\t\t\t\tloc[1] = j - forw_back_len[j];\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (i < n) {\r\n\t\t\tfor (int j = m - 1; j >= 0; --j) {\r\n\t\t\t\tif (s[i] == t[j]) {\r\n\t\t\t\t\tcur_h_len[j + 1] = cur_h_len[j] + 1;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tcur_h_len[j + 1] = 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tcur_h_len[0] = 0;\r\n\t\t}\r\n\t}\r\n\treturn res;\r\n}\r\n\r\nint solve(string &s, string &t, int *loc) {\r\n\tint loc_noflip[2];\r\n\tint res = solve_noflip(s, t, loc_noflip);\r\n\treverse(t.begin(), t.end());\r\n\tint loc_flip[2];\r\n\tint res_flip = solve_noflip(s, t, loc_flip);\r\n\tif (res_flip > res) {\r\n\t\tres = res_flip;\r\n\t\tloc[0] = loc_flip[0];\r\n\t\tloc[1] = (int)t.size() - loc_flip[1] - res;\r\n\t} else {\r\n\t\tfor (int i = 0; i < 2; ++i) loc[i] = loc_noflip[i];\r\n\t}\r\n\treturn res;\r\n}\r\n\r\nint main() {\r\n\tcin.sync_with_stdio(false);\r\n\tstring s, t;\r\n\tcin >> s >> t;\r\n\tint loc[2];\r\n\tint res = solve(s, t, loc);\r\n\tcout << res << '\\n';\r\n\tif (res) { cout << loc[0] << ' ' << loc[1] << '\\n'; }\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2-kmp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2-kmp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2 (KMP)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 113,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 22
      }, this), ". ", _jsxDEV(_components.strong, {
        children: "Memory complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 41
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 64
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 115,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the two strings be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 24
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 32
      }, this), ", and their lengths be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 58
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 66
      }, this), "\r\nrespectively."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For simplicity, assume that we can't flip the necklace over. (To handle the case\r\nwhere we can, just reverse ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 28
      }, this), ", run our algorithm again, and take the best\r\nresult.)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We essentially want to find two strings ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 49
      }, this), ", and two indices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 70
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 78
      }, this), "\r\nsuch that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 124,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "A"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 3
        }, this), " is a ", _jsxDEV(_components.strong, {
          children: "suffix"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 12
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[0 : i]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 26
        }, this), " and a ", _jsxDEV(_components.strong, {
          children: "prefix"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 43
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T[j + 1 : M - 1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 127,
          columnNumber: 57
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "B"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 128,
          columnNumber: 3
        }, this), " is a ", _jsxDEV(_components.strong, {
          children: "prefix"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 128,
          columnNumber: 12
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "S[i + 1 : N - 1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 128,
          columnNumber: 26
        }, this), " and a ", _jsxDEV(_components.strong, {
          children: "suffix"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 128,
          columnNumber: 51
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "T[0 : j]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 128,
          columnNumber: 65
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 128,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "|A| + |B|"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 3
        }, this), " is maximal."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can thus test each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 23
      }, this), " to find the best ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 44
      }, this), " for that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 57
      }, this), ", and then take the\r\nbest overall result."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 131,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find the best ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 18
      }, this), ", we first reverse ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 40
      }, this), " and split ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 54
      }, this), " at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 67
      }, this), ". This\r\nturns the subproblem into finding the longest common prefix/suffix between two\r\npairs of strings. This is a classical application of KMP, so we can solve this\r\nsubproblem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 15
      }, this), " time and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 137,
        columnNumber: 40
      }, this), " memory."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 134,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-code-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 139,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\nvector<int> pi(const string &s) {\r\n\tint n = (int)s.size();\r\n\tvector<int> pi_s(n);\r\n\tfor (int i = 1, j = 0; i < n; i++) {\r\n\t\twhile (j > 0 && s[j] != s[i]) { j = pi_s[j - 1]; }\r\n\t\tif (s[i] == s[j]) { j++; }\r\n\t\tpi_s[i] = j;\r\n\t}\r\n\treturn pi_s;\r\n}\r\nvector<int> calc(const string &s, const string &t) {\r\n\tvector<int> ret(s.size());\r\n\tstring cur = t + \"#\" + s;\r\n\tvector<int> p = pi(cur);\r\n\tfor (int i = 0; i < (int)s.size(); i++) ret[i] = p[i + t.size() + 1];\r\n\treturn ret;\r\n}\r\npair<int, pair<int, int>> solve(string s, string t) {\r\n\tt += \".\";\r\n\tstring s_rev = s;\r\n\treverse(s_rev.begin(), s_rev.end());\r\n\tpair<int, pair<int, int>> ans = {0, {0, 0}};\r\n\tfor (int i = 0; i < (int)t.size() - 1; i++) {\r\n\t\tstring t_rev = t;\r\n\t\treverse(t_rev.begin(), t_rev.end());\r\n\t\tvector<int> left = calc(s, t);\r\n\t\tvector<int> right = calc(s_rev, t_rev);\r\n\t\treverse(right.begin(), right.end());\r\n\t\tfor (int j = 0; j <= (int)s.size(); j++) {\r\n\t\t\tint l = j == 0 ? 0 : left[j - 1];\r\n\t\t\tint r = j == (int)s.size() ? 0 : right[j];\r\n\t\t\tans =\r\n\t\t\t    max(ans,\r\n\t\t\t        {l + r,\r\n\t\t\t         {j - l, (int)(2 * (t.size() - 1) - r + i) % (int)(t.size() - 1)}});\r\n\t\t}\r\n\t\trotate(t.begin(), t.begin() + 1, t.end());\r\n\t}\r\n\treturn ans;\r\n}\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\tstring s, t;\r\n\tcin >> s >> t;\r\n\tpair<int, pair<int, int>> ans = solve(s, t);\r\n\treverse(t.begin(), t.end());\r\n\tpair<int, pair<int, int>> cur = solve(s, t);\r\n\tcur.second.second = (int)t.size() - cur.second.second - cur.first;\r\n\tans = max(ans, cur);\r\n\tcout << ans.first << \"\\n\";\r\n\tif (ans.first) cout << ans.second.first << \" \" << ans.second.second << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 141,
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
