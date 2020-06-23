---
id: hull
title: "Convex Hull"
author: Benjamin Qi
description: Smallest convex polygon containing a set of points on a grid.
prerequisites: 
 - Platinum - Geometry Primitives
---

## [Convex Hull](https://en.wikipedia.org/wiki/Convex_hull_algorithms)

 - [Kattis Convex Hull](https://open.kattis.com/problems/convexhull)

### Tutorial

 - Graham Scan
   - [cp-algo](https://cp-algorithms.com/geometry/grahams-scan-convex-hull.html)
   - [My Implementation](https://github.com/bqi343/USACO/blob/master/Implementations/content/geometry%20(13)/Polygons/ConvexHull2.h)
 - Monotone Chain
   - CPH 30.3 (brief)
   - [Wikipedia](https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain)
   - [My Implementation](https://github.com/bqi343/USACO/blob/master/Implementations/content/geometry%20(13)/Polygons/ConvexHull%20(13.2).h)

### Problems

 - [USACO Plat Balance](http://www.usaco.org/index.php?page=viewproblem2&cpid=864)
 - [USACO Plat Falling](http://www.usaco.org/index.php?page=viewproblem2&cpid=998)
 - [USACO Old Gold - Fencing](http://www.usaco.org/index.php?page=viewproblem2&cpid=534)
 - [USACO Old Gold - Cow Curling](http://www.usaco.org/index.php?page=viewproblem2&cpid=382)
 - [Kattis Fence Orthogonality](https://open.kattis.com/problems/fenceortho)
 - [AGC 44 Random Pawn](https://atcoder.jp/contests/agc044/tasks/agc044_e)
   - Generalization of "Balance"

Minkowski addition?

## Half-Plane Intersection / Convex Stuff

 - [Blogewoosh (Half-Plane Intersection w/ Ternary Search)](https://codeforces.com/blog/entry/61710)
 - [retrograd Half-Plane Intersection](https://codeforces.com/blog/entry/61710?#comment-457662)
 - [Petr (Linear Half-Plane Intersection)](https://petr-mitrichev.blogspot.com/2016/07/a-half-plane-week.html)
 - [KACTL LineContainer](https://github.com/kth-competitive-programming/kactl/blob/master/content/data-structures/LineContainer.h)
 - [Lichao Segment Tree](http://codeforces.com/blog/entry/51275?#comment-351510)

### Problems

 - [Bridges](https://csacademy.com/contest/archive/task/building-bridges/)
   - direct application of LineContainer
