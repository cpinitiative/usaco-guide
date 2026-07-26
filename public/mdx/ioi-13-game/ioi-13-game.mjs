"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(Q \\log R \\cdot \\log C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We're asked to handle point updates and range GCD queries on a 2D grid. This\r\nimplies that we should use a 2D range-query data structure like a 2D segment\r\ntree (N.B. not a Fenwick tree, as the GCD function has no inverse)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In 1D (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 8
      }, this), "), this can be solved by a fairly straightforward use of a segment\r\ntree: each node stores the GCD of its two children. Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 59
      }, this), " can be quite big,\r\nthis needs to be a sparse segment tree; another alternative would be a balanced\r\nbinary tree like a treap."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, a sparse 2D segment tree uses ", _jsxDEV(_components.em, {
        children: "just"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 40
      }, this), " a bit too much memory, and only\r\nscores 80 points. Fortunately for us, there are two ways to get around this!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-approach-1---sparse-segment-tree-of-bbsts",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-1---sparse-segment-tree-of-bbsts",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 1 - Sparse segment tree of BBSTs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although BBSTs use 4 times less memory than segment trees, a BBST of BBSTs (e.g.\r\na ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Range_tree",
        rel: "nofollow",
        target: "_blank",
        children: "range tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 3
      }, this), ") is rather unpleasant\r\nto implement. However, a segment tree of BBSTs is much nicer to implement, and\r\nis good enough to score 100 points!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In my implementation below, I use an\r\n", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/data_structures/treap.html#toc-tgt-6",
        rel: "nofollow",
        target: "_blank",
        children: "implicit treap"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\r\nbecause they support point updates and range queries. Each segment tree node\r\nstores a treap, and updating a node involves changing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(\\log C)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 55
      }, this), "\r\nvalues in its treap (similar to updating a 2D segment tree node)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"game.h\"\r\n\r\n#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nll gcd(ll x, ll y) { return !y ? x : gcd(y, x % y); }\r\nint rnd() { return ((rand() % (1 << 15)) << 16) + (rand() % (1 << 15)); }\r\n\r\nstruct TreapNode {\r\n\tTreapNode *l, *r;\r\n\tint pos, key, mn, mx;\r\n\tll val, g;\r\n\r\n\tTreapNode(int position, ll value) {\r\n\t\tl = r = nullptr;\r\n\t\tmn = mx = pos = position;\r\n\t\tkey = rnd();\r\n\t\tval = g = value;\r\n\t}\r\n\r\n\tvoid update() {\r\n\t\tg = val;\r\n\t\tif (l) g = gcd(g, l->g);\r\n\t\tif (r) g = gcd(g, r->g);\r\n\t\tmn = (l ? l->mn : pos);\r\n\t\tmx = (r ? r->mx : pos);\r\n\t}\r\n};\r\n\r\nstruct Treap {\r\n\tTreapNode *root;\r\n\r\n\tTreap() {\r\n\t\troot = nullptr;\r\n\t\tsrand(rnd());\r\n\t}\r\n\r\n\tvoid split(TreapNode *t, int pos, TreapNode *&l, TreapNode *&r) {\r\n\t\tif (t == nullptr) {\r\n\t\t\tl = r = nullptr;\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tif (t->pos < pos) {\r\n\t\t\tsplit(t->r, pos, l, r);\r\n\t\t\tt->r = l;\r\n\t\t\tl = t;\r\n\t\t} else {\r\n\t\t\tsplit(t->l, pos, l, r);\r\n\t\t\tt->l = r;\r\n\t\t\tr = t;\r\n\t\t}\r\n\t\tt->update();\r\n\t}\r\n\r\n\tTreapNode *merge(TreapNode *l, TreapNode *r) {\r\n\t\tif (!l || !r) return l ? l : r;\r\n\t\tif (l->key < r->key) {\r\n\t\t\tl->r = merge(l->r, r);\r\n\t\t\tl->update();\r\n\t\t\treturn l;\r\n\t\t} else {\r\n\t\t\tr->l = merge(l, r->l);\r\n\t\t\tr->update();\r\n\t\t\treturn r;\r\n\t\t}\r\n\t}\r\n\r\n\tbool find(int pos) {\r\n\t\tTreapNode *t = root;\r\n\t\twhile (t) {\r\n\t\t\tif (t->pos == pos) return true;\r\n\t\t\tif (t->pos > pos) t = t->l;\r\n\t\t\telse t = t->r;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n\r\n\tvoid update(TreapNode *t, int pos, ll val) {\r\n\t\tif (t->pos == pos) {\r\n\t\t\tt->val = val;\r\n\t\t\tt->update();\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tif (t->pos > pos) update(t->l, pos, val);\r\n\t\telse update(t->r, pos, val);\r\n\t\tt->update();\r\n\t}\r\n\r\n\tvoid insert(int pos, ll val) {\r\n\t\tif (find(pos)) update(root, pos, val);\r\n\t\telse {\r\n\t\t\tTreapNode *l, *r;\r\n\t\t\tsplit(root, pos, l, r);\r\n\t\t\troot = merge(merge(l, new TreapNode(pos, val)), r);\r\n\t\t}\r\n\t}\r\n\r\n\tll query(TreapNode *t, int st, int en) {\r\n\t\tif (t->mx < st || en < t->mn) return 0;\r\n\t\tif (st <= t->mn && t->mx <= en) return t->g;\r\n\r\n\t\tll ans = (st <= t->pos && t->pos <= en ? t->val : 0);\r\n\t\tif (t->l) ans = gcd(ans, query(t->l, st, en));\r\n\t\tif (t->r) ans = gcd(ans, query(t->r, st, en));\r\n\t\treturn ans;\r\n\t}\r\n\tll query(int st, int en) {\r\n\t\tif (!root) return 0;\r\n\t\treturn query(root, st, en);\r\n\t}\r\n};\r\n\r\nstruct Segtree {\r\n\tSegtree *l, *r;\r\n\tTreap treap;\r\n\tint lo, hi;\r\n\r\n\tSegtree() { l = r = nullptr; }\r\n\tSegtree(int st, int en) {\r\n\t\tl = r = nullptr;\r\n\t\tlo = st, hi = en;\r\n\t}\r\n\r\n\tvoid new_left() {\r\n\t\tif (!l) l = new Segtree(lo, (lo + hi) / 2);\r\n\t}\r\n\tvoid new_right() {\r\n\t\tif (!r) r = new Segtree((lo + hi) / 2 + 1, hi);\r\n\t}\r\n\tvoid fix(int pos) {\r\n\t\tll val = 0;\r\n\t\tif (l) val = gcd(val, l->treap.query(pos, pos));\r\n\t\tif (r) val = gcd(val, r->treap.query(pos, pos));\r\n\t\ttreap.insert(pos, val);\r\n\t}\r\n\r\n\tvoid update(int x, int y, ll val) {\r\n\t\tif (hi < x || x < lo) return;\r\n\t\tif (lo == hi) {\r\n\t\t\ttreap.insert(y, val);\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (x <= (lo + hi) / 2) {\r\n\t\t\tnew_left();\r\n\t\t\tl->update(x, y, val);\r\n\t\t} else {\r\n\t\t\tnew_right();\r\n\t\t\tr->update(x, y, val);\r\n\t\t}\r\n\t\tfix(y);\r\n\t}\r\n\r\n\tll query(int t, int b, int st, int en) {\r\n\t\tif (hi < t || b < lo) return 0;\r\n\t\tif (t <= lo && hi <= b) return treap.query(st, en);\r\n\r\n\t\tll ans = 0;\r\n\t\tif (l) ans = gcd(ans, l->query(t, b, st, en));\r\n\t\tif (r) ans = gcd(ans, r->query(t, b, st, en));\r\n\t\treturn ans;\r\n\t}\r\n};\r\n\r\nSegtree segtree;\r\n\r\nvoid init(int R, int C) {\r\n\tsrand(12341234);\r\n\tsegtree = Segtree(0, R - 1);\r\n}\r\n\r\nvoid update(int P, int Q, ll K) { segtree.update(P, Q, K); }\r\n\r\nll calculate(int P, int Q, int U, int V) { return segtree.query(P, U, Q, V); }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-approach-2---memory-optimized-2d-sparse-segment-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-approach-2---memory-optimized-2d-sparse-segment-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Approach 2 - Memory-optimized 2D sparse segment tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 207,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although the previous approach is somewhat simpler, this approach was intended,\r\nand involves optimizing the memory usage of a sparse segment tree from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log(\\text{size of range}))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 47
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 209,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Essentially, we don't instantiate nodes in the segment tree if they are not leaf\r\nnodes and only contain a single leaf node in their subtree, as those nodes are\r\nredundant. What we end up with is a segment tree with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 55
      }, this), " leaves and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2N - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 215,
        columnNumber: 70
      }, this), "\r\nnodes. See ", _jsxDEV(_components.a, {
        href: "/plat/sparse-seg?lang=cpp#solution",
        children: "the sparse segment tree module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 12
      }, this), "\r\nfor more details."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that we can only apply this trick to the segment trees of the ", _jsxDEV(_components.strong, {
        children: "columns"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 68
      }, this), ".\r\nThis means that the memory complexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(Q \\log R)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 220,
        columnNumber: 42
      }, this), ", which is good\r\nenough to score 100 points."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"game.h\"\r\n#include <stdlib.h>\r\n\r\ntypedef long long ll;\r\n\r\nstatic int R, C;\r\n\r\nstruct X_NODE {\r\n\tX_NODE(int s, int e) : s(s), e(e), left(NULL), right(NULL), value(0LL) {}\r\n\tint s, e;\r\n\tX_NODE *left, *right;\r\n\tll value;\r\n};\r\n\r\nstruct Y_NODE {\r\n\tY_NODE() : left(NULL), right(NULL), xtree(1, C) {}\r\n\tY_NODE *left, *right;\r\n\tX_NODE xtree;\r\n} *root;\r\n\r\nll gcd2(ll x, ll y) {\r\n\tif (y == 0) return x;\r\n\treturn gcd2(y, x % y);\r\n}\r\n\r\nvoid init(int r, int c) {\r\n\tR = r, C = c;\r\n\troot = new Y_NODE();\r\n}\r\n\r\nvoid update2(X_NODE *node, int q, ll k) {\r\n\tint s = node->s, e = node->e, m = (s + e) >> 1;\r\n\tif (s == e) {\r\n\t\tnode->value = k;\r\n\t\treturn;\r\n\t}\r\n\tX_NODE **child = &(q <= m ? node->left : node->right);\r\n\tif (*child == NULL) {\r\n\t\t*child = new X_NODE(q, q);\r\n\t\t(*child)->value = k;\r\n\t} else if ((*child)->s <= q && q <= (*child)->e) {\r\n\t\tupdate2(*child, q, k);\r\n\t} else {\r\n\t\tdo {\r\n\t\t\tif (q <= m) e = m;\r\n\t\t\telse s = m + 1;\r\n\t\t\tm = (s + e) >> 1;\r\n\t\t} while ((q <= m) == ((*child)->e <= m));\r\n\t\tX_NODE *nnode = new X_NODE(s, e);\r\n\t\tif ((*child)->e <= m) nnode->left = *child;\r\n\t\telse nnode->right = *child;\r\n\t\t*child = nnode;\r\n\t\tupdate2(*child, q, k);\r\n\t}\r\n\tnode->value =\r\n\t    gcd2(node->left ? node->left->value : 0, node->right ? node->right->value : 0);\r\n}\r\n\r\nll query2(X_NODE *node, int s, int e) {\r\n\tif (node == NULL || node->s > e || node->e < s) return 0;\r\n\tif (s <= node->s && node->e <= e) { return node->value; }\r\n\treturn gcd2(query2(node->left, s, e), query2(node->right, s, e));\r\n}\r\n\r\nvoid update1(Y_NODE *node, int s, int e, int p, int q, ll k) {\r\n\tint m = (s + e) >> 1;\r\n\tif (s == e) {\r\n\t\tupdate2(&node->xtree, q, k);\r\n\t\treturn;\r\n\t}\r\n\tif (p <= m) {\r\n\t\tif (node->left == NULL) node->left = new Y_NODE();\r\n\t\tupdate1(node->left, s, m, p, q, k);\r\n\t} else {\r\n\t\tif (node->right == NULL) node->right = new Y_NODE();\r\n\t\tupdate1(node->right, m + 1, e, p, q, k);\r\n\t}\r\n\tll v = gcd2(node->left ? query2(&node->left->xtree, q, q) : 0,\r\n\t            node->right ? query2(&node->right->xtree, q, q) : 0);\r\n\tupdate2(&node->xtree, q, v);\r\n}\r\n\r\nvoid update(int p, int q, ll k) {\r\n\t++p, ++q;\r\n\tupdate1(root, 1, R, p, q, k);\r\n}\r\n\r\nll query1(Y_NODE *node, int s, int e, int p, int q, int u, int v) {\r\n\tif (node == NULL || s > u || e < p) return 0;\r\n\tif (p <= s && e <= u) return query2(&node->xtree, q, v);\r\n\tint m = (s + e) >> 1;\r\n\treturn gcd2(query1(node->left, s, m, p, q, u, v),\r\n\t            query1(node->right, m + 1, e, p, q, u, v));\r\n}\r\n\r\nll calculate(int p, int q, int u, int v) {\r\n\t++p, ++q, ++u, ++v;\r\n\treturn query1(root, 1, R, p, q, u, v);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 223,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 223,
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
