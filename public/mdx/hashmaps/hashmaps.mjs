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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-hashing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-hashing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Hashing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Hashing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), " refers to assigning a unique code to every variable/object which\r\nallows insertions, deletions, and searches in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 47
      }, this), " time, albeit with\r\na high constant factor, as hashing requires a large constant number of\r\noperations. However, as the name implies, elements are not ordered in any\r\nmeaningful way, so traversals of an unordered set will return elements in some\r\narbitrary order."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-custom-hashing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-custom-hashing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Custom Hashing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["However, this hash function is quite bad; if we insert\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0,0), (1,1), (2,2) \\ldots"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 1
      }, this), " then they will all be mapped to the same bucket (so\r\nit would easily be hacked in a Codeforces contest)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A better way to hash pairs would be to use polynomial hashing with a randomized\r\nbase (as described in ", _jsxDEV(_components.a, {
        href: "/gold/hashing",
        children: "this module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 23
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-anti-hash-tests",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-anti-hash-tests",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Anti-Hash Tests"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The built-in hashing algorithm for integers in C++ is vulnerable to pathological tests, causing abnormally slow runtimes. We describe the issue below and how to fix it. Java users are not affected (see ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/62393?#comment-464875",
        rel: "nofollow",
        target: "_blank",
        children: "this"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 203
      }, this), " comment)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.p, {
      children: ["In order to make your ", _jsxDEV(_components.code, {
        children: "unordered_map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 23
      }, this), " unhackable, the hash function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "H"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 69
      }, this), " you select must have the following property: it is hard to find integers ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 146
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 154
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x\\neq y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 168
      }, this), " but ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "H(x)\\equiv H(y) \\pmod{P}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 182
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 216
      }, this), " is the prime modulus corresponding to the number of buckets in your unordered map. Note that:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 256,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["The default hash function, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "H(x)=x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 257,
          columnNumber: 31
        }, this), ", obviously does not satisfy this property, because you can simply choose ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x=0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 257,
          columnNumber: 113
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y=P"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 257,
          columnNumber: 123
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 2
      }, this), "\n", _jsxDEV(_components.li, {
        children: "If open hacking is allowed, then any deterministic hash function does not satisfy this property, because a hacker could generate a test case specifically to break your solution. You should introduce randomness to ensure that your hash function changes from run to run."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 258,
        columnNumber: 2
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 257,
      columnNumber: 2
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here is a drop-in replacement for ", _jsxDEV(_components.code, {
        children: "unordered_map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 260,
        columnNumber: 35
      }, this), " that seems to work well in practice:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct chash {\r\n\t// any random-ish large odd number will do\r\n\tconst uint64_t C = uint64_t(2e18 * PI) + 71;\r\n\t// random 32-bit number\r\n\tconst uint32_t RANDOM = chrono::steady_clock::now().time_since_epoch().count();\r\n\tsize_t operator()(uint64_t x) const {\r\n\t\t// see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\n\t\treturn __builtin_bswap64((x ^ RANDOM) * C);\r\n\t}\r\n};\r\ntemplate <class K, class V> using cmap = unordered_map<K, V, chash>;\r\n// example usage: cmap<int, int>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-a-faster-hashmap-in-c",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-a-faster-hashmap-in-c",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "A Faster HashMap in C++"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 285,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In C++, it's usually faster to use ", _jsxDEV(_components.code, {
        children: "gp_hash_table<K, V>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 287,
        columnNumber: 36
      }, this), " instead of\r\n", _jsxDEV(_components.code, {
        children: "unordered_map<K, V>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 1
      }, this), ". Read / writes are much faster than ", _jsxDEV(_components.code, {
        children: "unordered_map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 59
      }, this), ".\r\nThe documentation is rather confusing, so I'll just summarize the most useful\r\nfunctions here. If you need a replacement for ", _jsxDEV(_components.code, {
        children: "unordered_set<K>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 290,
        columnNumber: 47
      }, this), ", use\r\n", _jsxDEV(_components.code, {
        children: "gp_hash_table<K, null_type>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 291,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 287,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-custom-hashing-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-custom-hashing-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Custom Hashing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Like ", _jsxDEV(_components.code, {
        children: "unordered_map"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 6
      }, this), ", ", _jsxDEV(_components.code, {
        children: "gp_hash_table"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 319,
        columnNumber: 23
      }, this), " is vulnerable to hash collisions if a\r\ncustom hash function isn't used. We recommend using the same custom hash\r\nwe used for unordered map above:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 319,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <ext/pb_ds/assoc_container.hpp>\r\nusing namespace __gnu_pbds;\r\n\r\ngp_hash_table<int, int, chash> table;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 323,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 323,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-resizing",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resizing",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resizing"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 330,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Unordered map has\r\n", _jsxDEV(_components.a, {
        href: "http://www.cplusplus.com/reference/unordered_map/unordered_map/reserve/",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "reserve"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 333,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 333,
        columnNumber: 1
      }, this), ".\r\nCalling this function before inserting any elements can result in a constant\r\nfactor speedup."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 332,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can modify the declaration of ", _jsxDEV(_components.code, {
        children: "gp_hash_table"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 337,
        columnNumber: 34
      }, this), " so that it supports the\r\n", _jsxDEV(_components.code, {
        children: "resize"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 338,
        columnNumber: 1
      }, this), " function, which operates similarly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 337,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "template <class K, class V>\r\nusing ht =\r\n    gp_hash_table<K, V, hash<K>, equal_to<K>, direct_mask_range_hashing<>,\r\n                  linear_probe_fn<>,\r\n                  hash_standard_resize_policy<hash_exponential_size_policy<>,\r\n                                              hash_load_check_resize_trigger<>, true>>;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 340,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["These are the same template arguments as the default ", _jsxDEV(_components.code, {
        children: "gp_hash_table"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 349,
        columnNumber: 54
      }, this), ", except\r\n", _jsxDEV(_components.code, {
        children: "false"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 1
      }, this), " has been changed to ", _jsxDEV(_components.code, {
        children: "true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 29
      }, this), ". This modification allows us to change the\r\nactual size of the hash table."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 349,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\tht<int, null_type> g;\r\n\tg.resize(5);\r\n\tcout << g.get_actual_size() << \"\\n\";  // 8\r\n\tcout << g.size() << \"\\n\";             // 0\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 353,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 353,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When calling ", _jsxDEV(_components.code, {
        children: "g.resize(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 362,
        columnNumber: 14
      }, this), ", ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 362,
        columnNumber: 29
      }, this), " is rounded up to the nearest power of 2. Then\r\nthe actual size of ", _jsxDEV(_components.code, {
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 363,
        columnNumber: 20
      }, this), " is changed to be equal to ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 363,
        columnNumber: 50
      }, this), " (unless ", _jsxDEV(_components.code, {
        children: "x < g.size()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 363,
        columnNumber: 62
      }, this), ", in\r\nwhich case an error is thrown)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 362,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Furthermore, if we construct ", _jsxDEV(_components.code, {
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 376,
        columnNumber: 30
      }, this), " with the following arguments:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 376,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "ht<int, null_type> g({}, {}, {}, {}, {1 << 16});\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 378,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 378,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["then the actual size of ", _jsxDEV(_components.code, {
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 382,
        columnNumber: 25
      }, this), " is always at least ", _jsxDEV(_components.code, {
        children: "1<<16"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 382,
        columnNumber: 48
      }, this), " (regardless of calls to\r\n", _jsxDEV(_components.code, {
        children: "resize"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 1
      }, this), "). The last argument ", _jsxDEV(_components.strong, {
        children: "must"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 30
      }, this), " be a power of 2 (or else errors will be\r\nthrown)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 382,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solving-3sum",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solving-3sum",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solving 3SUM"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 386,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Since all the values are quite small, you can use an array instead of a hashmap.\r\nBut if you didn't read the constraints carefully enough, you're in luck!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 390,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>  // see C++ Tips & Tricks\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\n\r\nusing vi = vector<int>;\r\n#define pb push_back\r\n#define rsz resize\r\n#define all(x) begin(x), end(x)\r\n#define sz(x) (int)(x).size()\r\n\r\nusing pi = pair<int, int>;\r\n#define f first\r\n#define s second\r\n#define mp make_pair\r\n\r\nvoid setIO(string name = \"\") {  // name is nonempty for USACO file I/O\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);  // see Fast Input & Output\r\n\t// alternatively, cin.tie(0)->sync_with_stdio(0);\r\n\tif (sz(name)) {\r\n\t\tfreopen((name + \".in\").c_str(), \"r\", stdin);  // see Input & Output\r\n\t\tfreopen((name + \".out\").c_str(), \"w\", stdout);\r\n\t}\r\n}\r\n\r\n#include <ext/pb_ds/assoc_container.hpp>\r\nusing namespace __gnu_pbds;\r\n\r\nint N, Q;\r\nlong long ans[5000][5000];\r\nvector<int> A;\r\n\r\nint main() {\r\n\tsetIO(\"threesum\");\r\n\tcin >> N >> Q;\r\n\tA.resize(N);\r\n\tfor (int i = 0; i < N; ++i) cin >> A[i];\r\n\tfor (int i = 0; i < N; ++i) {\r\n\t\tgp_hash_table<int, int> g({}, {}, {}, {}, {1 << 13});\r\n\t\t// initialize with certain capacity, must be power of 2\r\n\t\tfor (int j = i + 1; j < N; ++j) {\r\n\t\t\tint res = -A[i] - A[j];\r\n\t\t\tauto it = g.find(res);\r\n\t\t\tif (it != end(g)) ans[i][j] = it->second;\r\n\t\t\tg[A[j]]++;\r\n\t\t}\r\n\t}\r\n\tfor (int i = N - 1; i >= 0; --i)\r\n\t\tfor (int j = i + 1; j < N; ++j)\r\n\t\t\tans[i][j] += ans[i + 1][j] + ans[i][j - 1] - ans[i + 1][j - 1];\r\n\tfor (int i = 0; i < Q; ++i) {\r\n\t\tint a, b;\r\n\t\tcin >> a >> b;\r\n\t\tcout << ans[a - 1][b - 1] << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 400,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 400,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 460,
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
