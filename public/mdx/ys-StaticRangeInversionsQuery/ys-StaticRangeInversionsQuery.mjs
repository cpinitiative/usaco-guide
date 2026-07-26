"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Naive solution as described in the linked\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/83248",
        rel: "nofollow",
        target: "_blank",
        children: "CF Blog"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q\\sqrt N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\r\n#include <iostream>\r\n#include <vector>\r\n\r\nusing namespace std;\r\nusing ll = long long;\r\nusing P = pair<int, int>;\r\nconst int N = 1e5 + 1;\r\nconst int S = 300;\r\n\r\n// BeginCodeSnip{BIT (from PURS module)}\r\ntemplate <class T> class BIT {\r\n  private:\r\n\tint size;\r\n\tvector<T> bit;\r\n\tvector<T> arr;\r\n\r\n  public:\r\n\tBIT(int size) : size(size), bit(size + 1), arr(size) {}\r\n\r\n\t/** Sets the value at index ind to val. */\r\n\tvoid set(int ind, T val) { add(ind, val - arr[ind]); }\r\n\r\n\t/** Adds val to the element at index ind. */\r\n\tvoid add(int ind, T val) {\r\n\t\tarr[ind] += val;\r\n\t\tind++;\r\n\t\tfor (; ind <= size; ind += ind & -ind) { bit[ind] += val; }\r\n\t}\r\n\r\n\t/** @return The sum of all values in [0, ind]. */\r\n\tT pref_sum(int ind) {\r\n\t\tind++;\r\n\t\tT total = 0;\r\n\t\tfor (; ind > 0; ind -= ind & -ind) { total += bit[ind]; }\r\n\t\treturn total;\r\n\t}\r\n};\r\n// EndCodeSnip\r\n\r\nstruct Query {\r\n\tint l, r, i;\r\n};\r\n\r\nint main() {\r\n\tint n, k;\r\n\tcin >> n >> k;\r\n\tvector<int> a(n);\r\n\tfor (int i = 0; i < n; i++) { cin >> a[i]; }\r\n\tvector<int> b(a);\r\n\tsort(b.begin(), b.end());\r\n\tb.erase(unique(b.begin(), b.end()), b.end());\r\n\r\n\tauto id = [&](int x) { return lower_bound(b.begin(), b.end(), a[x]) - b.begin(); };\r\n\r\n\tvector<Query> q(k);\r\n\tfor (int i = 0; i < k; i++) {\r\n\t\tq[i].i = i;\r\n\t\tcin >> q[i].l >> q[i].r;\r\n\t}\r\n\tq.push_back({0, 0, -1});  // add dummy initial query\r\n\tsort(q.begin(), q.end(), [](Query x, Query y) {\r\n\t\tif (x.l / S != y.l / S) return x.l / S < y.l / S;\r\n\t\telse return x.r < y.r;\r\n\t});\r\n\r\n\tll res = 0;\r\n\tBIT<int> bit(n);\r\n\t// left -> whether we're modifying on the left\r\n\tauto edit = [&](int id, int x, bool left) {\r\n\t\tres +=\r\n\t\t    (left ? bit.pref_sum(id - 1) : bit.pref_sum(n - 1) - bit.pref_sum(id)) * x;\r\n\t\tbit.add(id, x);\r\n\t};\r\n\r\n\tvector<ll> ans(k);\r\n\tfor (int i = 0; i < q.size(); i++) {\r\n\t\tif (i) { ans[q[i].i] = res; }\r\n\t\tif (i + 1 >= q.size()) { break; }\r\n\t\twhile (q[i].l > q[i + 1].l) { edit(id(--q[i].l), 1, true); }\r\n\t\twhile (q[i].r < q[i + 1].r) { edit(id(q[i].r++), 1, false); }\r\n\t\twhile (q[i].l < q[i + 1].l) { edit(id(q[i].l++), -1, true); }\r\n\t\twhile (q[i].r > q[i + 1].r) { edit(id(--q[i].r), -1, false); }\r\n\t}\r\n\r\n\tfor (int i = 0; i < k; i++) { cout << ans[i] << '\\n'; }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "\"sweepline mo\""
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q\\sqrt N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\nconst int BLOCK = 320;\r\nint N, Q;\r\nvi A;\r\nV<AR<int, 3>> query;\r\n\r\nvoid init() {\r\n\tsetIO();\r\n\tre(N, Q);\r\n\tA.rsz(N);\r\n\tre(A);\r\n\tvi al;\r\n\ttrav(t, A) al.pb(t);\r\n\tremDup(al);\r\n\ttrav(t, A) t = int(lb(all(al), t) - begin(al));\r\n\tF0R(i, Q) {\r\n\t\tint l, r;\r\n\t\tre(l, r);\r\n\t\tr--;\r\n\t\tquery.pb({l, r, i});\r\n\t}\r\n}\r\n\r\nV<AR<int, 4>> adLes[100000], adGre[100000];\r\nint les[BLOCK * BLOCK], les_block[BLOCK], tot;\r\nint numLes(int x) { return les[x] + les_block[x / BLOCK]; }\r\nvoid insLes(int x) {\r\n\t++tot;\r\n\tfor (++x; x % BLOCK;) les[x++]++;\r\n\tfor (x /= BLOCK; x < BLOCK;) les_block[x++]++;\r\n}\r\nint numGre(int x) { return tot - numLes(x + 1); }\r\n\r\nvl dif;\r\nvi prevLes, prevGre;\r\n\r\nvoid preprocess_queries() {\r\n\tsort(all(query), [](AR<int, 3> a, AR<int, 3> b) {\r\n\t\treturn a[0] / BLOCK == b[0] / BLOCK ? a[1] < b[1] : a[0] < b[0];\r\n\t});\r\n\tprevLes.rsz(N), prevGre.rsz(N);\r\n\tdif.rsz(Q);\r\n\tint l = 0, r = 0;\r\n\ttrav(t, query) {\r\n\t\tif (l > t[0]) {  // add how many < x in range [cur,r]\r\n\t\t\tadLes[r].pb({t[0], l - 1, 1, t[2]});\r\n\t\t\tl = t[0];\r\n\t\t}\r\n\t\tif (r < t[1]) {  // add how many > x in range[l,cur]\r\n\t\t\tif (l) adGre[l - 1].pb({r + 1, t[1], -1, t[2]});\r\n\t\t\tr = t[1];  // (0,0) -> (0,1) -> (0,2)\r\n\t\t}\r\n\t\tif (l < t[0]) {  // subtract how many < x in range[cur,r]\r\n\t\t\tadLes[r].pb({l, t[0] - 1, -1, t[2]});\r\n\t\t\tl = t[0];\r\n\t\t}\r\n\t\tif (r > t[1]) {  // subtract how many > x in range[l,cur]\r\n\t\t\tif (l) adGre[l - 1].pb({t[1] + 1, r, 1, t[2]});\r\n\t\t\tr = t[1];\r\n\t\t}\r\n\t}\r\n\tF0R(i, N) {\r\n\t\tinsLes(A[i]);\r\n\t\tprevLes[i] = numLes(A[i]), prevGre[i] = numGre(A[i]);\r\n\t\ttrav(t, adLes[i]) {\r\n\t\t\tll sum = 0;\r\n\t\t\tFOR(j, t[0], t[1] + 1) sum += numLes(A[j]);\r\n\t\t\tdif[t[3]] += t[2] * sum;\r\n\t\t}\r\n\t\ttrav(t, adGre[i]) {\r\n\t\t\tll sum = 0;\r\n\t\t\tFOR(j, t[0], t[1] + 1) sum += numGre(A[j]);\r\n\t\t\tdif[t[3]] += t[2] * sum;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tinit();\r\n\tpreprocess_queries();\r\n\tll lastAns = 0;\r\n\tvl ans(Q);\r\n\tint l = 0, r = 0;\r\n\ttrav(t, query) {\r\n\t\twhile (l > t[0]) dif[t[2]] -= prevLes[--l];\r\n\t\twhile (r < t[1]) dif[t[2]] += prevGre[++r];\r\n\t\twhile (l < t[0]) dif[t[2]] += prevLes[l++];\r\n\t\twhile (r > t[1]) dif[t[2]] -= prevGre[r--];\r\n\t\tans[t[2]] = (lastAns += dif[t[2]]);\r\n\t}\r\n\ttrav(t, ans) ps(t);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 105,
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
