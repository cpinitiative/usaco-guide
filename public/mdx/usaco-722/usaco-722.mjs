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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_friendcross_platinum_feb17.html",
        rel: "nofollow",
        target: "_blank",
        children: "External Solution (Java)"
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Easy with the offline 2D BIT mentioned in the module."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\n/**\r\n * Description: point update and rectangle sum with offline 2D BIT.\r\n * For each of the points to be updated, $x\\in (0,SZ)$ and $y\\neq 0$.\r\n * Time: O(N\\log^2 N)\r\n * Memory: O(N\\log N)\r\n * Source: Own\r\n * Verification:\r\n * https://dmoj.ca/problem/occ19g4\r\n * http://www.usaco.org/index.php?page=viewproblem2&cpid=722 (753 ms)\r\n * http://www.usaco.org/index.php?page=viewproblem2&cpid=601 (679 ms)\r\n */\r\n\r\ntemplate <class T, int SZ> struct OffBIT2D {\r\n\tbool mode = 0;  // mode = 1 -> initialized\r\n\tvpi todo;       // locations of updates to process\r\n\tint cnt[SZ], st[SZ];\r\n\tvi val;\r\n\tvector<T> bit;  // store all BITs in single vector\r\n\tvoid init() {\r\n\t\tassert(!mode);\r\n\t\tmode = 1;\r\n\t\tint lst[SZ];\r\n\t\tF0R(i, SZ) lst[i] = cnt[i] = 0;\r\n\t\tsort(all(todo), [](const pi &a, const pi &b) { return a.s < b.s; });\r\n\t\ttrav(t, todo) for (int x = t.f; x < SZ; x += x & -x) if (lst[x] != t.s)\r\n\t\t    lst[x] = t.s,\r\n\t\t    cnt[x]++;\r\n\t\tint sum = 0;\r\n\t\tF0R(i, SZ) lst[i] = 0, st[i] = (sum += cnt[i]);\r\n\t\tval.rsz(sum);\r\n\t\tbit.rsz(sum);\r\n\t\treverse(all(todo));\r\n\t\ttrav(t, todo) for (int x = t.f; x < SZ; x += x & -x) if (lst[x] != t.s)\r\n\t\t    lst[x] = t.s,\r\n\t\t    val[--st[x]] = t.s;\r\n\t}\r\n\tint rank(int y, int l, int r) {\r\n\t\treturn ub(begin(val) + l, begin(val) + r, y) - begin(val) - l;\r\n\t}\r\n\tvoid UPD(int x, int y, T t) {\r\n\t\tfor (y = rank(y, st[x], st[x] + cnt[x]); y <= cnt[x]; y += y & -y)\r\n\t\t\tbit[st[x] + y - 1] += t;\r\n\t}\r\n\tvoid upd(int x, int y, T t) {\r\n\t\tif (!mode) todo.pb({x, y});\r\n\t\telse\r\n\t\t\tfor (; x < SZ; x += x & -x) UPD(x, y, t);\r\n\t}\r\n\tint QUERY(int x, int y) {\r\n\t\tT res = 0;\r\n\t\tfor (y = rank(y, st[x], st[x] + cnt[x]); y; y -= y & -y)\r\n\t\t\tres += bit[st[x] + y - 1];\r\n\t\treturn res;\r\n\t}\r\n\tT query(int x, int y) {\r\n\t\tassert(mode);\r\n\t\tT res = 0;\r\n\t\tfor (; x; x -= x & -x) res += QUERY(x, y);\r\n\t\treturn res;\r\n\t}\r\n\tT query(int xl, int xr, int yl, int yr) {\r\n\t\treturn query(xr, yr) - query(xl - 1, yr) - query(xr, yl - 1) +\r\n\t\t       query(xl - 1, yl - 1);\r\n\t}\r\n};\r\n\r\nOffBIT2D<int, 100005> OB;\r\nint N, K;\r\n\r\nint main() {\r\n\tsetIO(\"friendcross\");\r\n\tre(N, K);\r\n\tvpi pos(N + 1);\r\n\tFOR(i, 1, N + 1) {\r\n\t\tint x;\r\n\t\tre(x);\r\n\t\tpos[x].f = i;\r\n\t}\r\n\tFOR(i, 1, N + 1) {\r\n\t\tint x;\r\n\t\tre(x);\r\n\t\tpos[x].s = i;\r\n\t}\r\n\tFOR(i, 1, N + 1) OB.upd(pos[i].f, pos[i].s, 1);\r\n\tOB.init();\r\n\tll ans = 0;\r\n\tint ind = 1;\r\n\tFOR(i, 1, N + 1) {\r\n\t\twhile (ind < i - K) {\r\n\t\t\tOB.upd(pos[ind].f, pos[ind].s, 1);\r\n\t\t\t++ind;\r\n\t\t}\r\n\t\tans += OB.query(pos[i].f, N) + OB.query(N, pos[i].s) -\r\n\t\t       2 * OB.query(pos[i].f, pos[i].s);\r\n\t\t// add unfriendly crossing pairs with cow i and some cow < i\r\n\t}\r\n\tps(ans);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
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
      lineNumber: 371,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Use a segment tree + BIT (online) as mentioned in the solution to\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=601",
        rel: "nofollow",
        target: "_blank",
        children: "Mowing the Field"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 1
      }, this), ".\r\nYou will run into time / memory limits unless you optimize appropriately ..."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 373,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 377,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 379,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 379,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 379,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "My solution (from a while ago):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 381,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\r\n#include <iostream>\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int, int> pi;\r\n\r\n#define FOR(i, a, b) for (int i = a; i < b; i++)\r\n#define F0R(i, a) for (int i = 0; i < a; i++)\r\n\r\n#define f first\r\n#define s second\r\n\r\nint N, K, nex;\r\npi x[100001];\r\npair<int, pi> segbit[20000000];\r\nlong long ans = 0;\r\n\r\nint getnode(int in, int b) {\r\n\tif (b == 0) {\r\n\t\tif (!segbit[in].s.f) segbit[in].s.f = nex++;\r\n\t\treturn segbit[in].s.f;\r\n\t}\r\n\tif (!segbit[in].s.s) segbit[in].s.s = nex++;\r\n\treturn segbit[in].s.s;\r\n}\r\n\r\nvoid update(int in, int left, int right, int ind) {\r\n\tsegbit[in].f++;\r\n\tif (left == ind && right == ind) return;\r\n\tint mid = (left + right) / 2;\r\n\tif (mid >= ind) update(getnode(in, 0), left, mid, ind);\r\n\telse update(getnode(in, 1), mid + 1, right, ind);\r\n}\r\n\r\nint query(int ind, int left, int right, int high) {\r\n\tif (right <= high) return segbit[ind].f;\r\n\tint mid = (left + right) / 2, z = 0;\r\n\tif (segbit[ind].s.f) z += query(segbit[ind].s.f, left, mid, high);\r\n\tif (segbit[ind].s.s && mid + 1 <= high)\r\n\t\tz += query(segbit[ind].s.s, mid + 1, right, high);\r\n\treturn z;\r\n}\r\n\r\nvoid updb(int num, int pos) {\r\n\twhile (num <= N) {\r\n\t\tupdate(num, 1, N, pos);\r\n\t\tnum += (num & -num);\r\n\t}\r\n}\r\n\r\nvoid queryb(int mnum, int mpo, int mult) {\r\n\twhile (mnum) {\r\n\t\tans += mult * query(mnum, 1, N, mpo);\r\n\t\tmnum -= (mnum & -mnum);\r\n\t}\r\n}\r\n\r\nvoid init() {\r\n\tifstream cin(\"friendcross.in\");\r\n\tcin >> N >> K;\r\n\tnex = N + 1;\r\n\tF0R(i, N) {\r\n\t\tint a;\r\n\t\tcin >> a;\r\n\t\tx[a].f = i + 1;\r\n\t}\r\n\tF0R(i, N) {\r\n\t\tint b;\r\n\t\tcin >> b;\r\n\t\tx[b].s = i + 1;\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tofstream cout(\"friendcross.out\");\r\n\tinit();\r\n\tfor (int i = N; i > 0; --i) {\r\n\t\tint j = i + K + 1;\r\n\t\tif (j > N) continue;\r\n\t\tupdb(x[j].f, x[j].s);\r\n\t\tqueryb(N, x[i].s, 1);\r\n\t\tqueryb(x[i].f, N, 1);\r\n\t\tqueryb(x[i].f, x[i].s, -2);\r\n\t}\r\n\tcout << ans;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 383,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 473,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After generating the appropriate sequence of updates and queries, can apply\r\ndivide & conquer as described in the module."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 475,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 4"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 478,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let us consider an easier version; suppose that we just want to count the number\r\nof crossing pairs (ignoring whether the cows are friendly or not). To calculate\r\nthe number of crossing pairs, we can add the cows in road 1 in reverse, while\r\ncounting the number of cows that are added before in road 2. We can use a binary\r\nindexed tree to count this. This takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 484,
        columnNumber: 40
      }, this), " space and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 485,
        columnNumber: 1
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 480,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To count the number of unfriendly crossings, instead of keeping track of the\r\ncount for each BIT node, we maintain a sorted set representing the cow breeds.\r\nFor a breed ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 489,
        columnNumber: 13
      }, this), ", we query the number of breeds in the range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[1, b-k-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 489,
        columnNumber: 61
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[b+k+1, n]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 1
      }, this), ". We can use a\r\n", _jsxDEV(_components.a, {
        href: "/gold/PURS?lang=cpp#order-statistic-tree",
        children: "Order Statistic Tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 491,
        columnNumber: 1
      }, this), "\r\nin C++ to represent the cow breeds. Since each update takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 492,
        columnNumber: 61
      }, this), " operations,\r\nit would allocate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 19
      }, this), " nodes each update, thus resulting in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 494,
        columnNumber: 1
      }, this), " space and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 494,
        columnNumber: 33
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 487,
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
