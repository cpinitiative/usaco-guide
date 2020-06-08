---
slug: /plat/geo
title: "Geometry"
author: Benjamin Qi
order: 4
---

Geometry primitives and convex hull.

<!-- END DESCRIPTION -->

## Primitives

You should know basic operations like cross product and dot product. For platinum specifically, you should be fine as long as you know how to code convex hull.

### Tutorial

 - [CPC.12](https://github.com/SuprDewd/T-414-AFLV/tree/master/12_geometry)
   - basic geometry
   - convex hulls
   - polygon area
   - point in polygon
   - closest pair of points
 - CPH 29
 - [TopCoder - Basic Geometry Concepts](https://www.topcoder.com/community/competitive-programming/tutorials/geometry-concepts-basic-concepts/)
 - [CF - Point Class](https://codeforces.com/blog/entry/48122)
 - [C++ - std::complex](https://codeforces.com/blog/entry/22175)
 - [cp-algo - Geometry: "Elementary Operations"](https://cp-algorithms.com/)
 - [vlecomte - Geometry Handbook](https://codeforces.com/blog/entry/59129)
 - [My Templates](https://github.com/bqi343/USACO/tree/master/Implementations/content/geometry%20(13)/Primitives)

### Problems

 - Template Testing
   - [Kattis Segment Distance](https://open.kattis.com/problems/segmentdistance)
   - [Kattis Segment Intersection](https://open.kattis.com/problems/segmentintersection)
   - [Kattis Point in Polygon](https://open.kattis.com/problems/pointinpolygon)
   - [Kattis Polygon Area](https://open.kattis.com/problems/polygonarea)
   - [Kattis Max Collinear](https://open.kattis.com/problems/maxcolinear)
 - Misc
   - [Arpa & Geo](http://codeforces.com/problemset/problem/851/B)
   - [Tell Your World](http://codeforces.com/problemset/problem/849/B)
   - [Gleb & Pizza](http://codeforces.com/problemset/problem/842/B)
   - [Birthday Cake](https://open.kattis.com/problems/birthdaycake)
   - [Racing Off Track](https://open.kattis.com/contests/acpc17open/problems/racingofftrack)
   - [TopCoder Watchtower](https://community.topcoder.com/stat?c=problem_statement&pm=2014&rd=4685)

## Sweep Line

### Tutorial

 - CPH 30
 - [TopCoder Line Sweep](https://www.topcoder.com/community/competitive-programming/tutorials/line-sweep-algorithms/)

### Problems

 - [Cow Steepchase II (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=943)
   - :|
 - [Kattis Closest Pair](https://open.kattis.com/problems/closestpair2)

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

## Half-Plane Intersection / Convex Stuff

 - [Blogewoosh (Half-Plane Intersection w/ Ternary Search)](https://codeforces.com/blog/entry/61710)
 - [retrograd Half-Plane Intersection](https://codeforces.com/blog/entry/61710?#comment-457662)
 - [Petr (Linear Half-Plane Intersection)](https://petr-mitrichev.blogspot.com/2016/07/a-half-plane-week.html)
 - [KACTL LineContainer](https://github.com/kth-competitive-programming/kactl/blob/master/content/data-structures/LineContainer.h)
 - [Lichao Segment Tree](http://codeforces.com/blog/entry/51275?#comment-351510)

### Problems

 - [Bridges](https://csacademy.com/contest/archive/task/building-bridges/)
   - direct application of LineContainer
