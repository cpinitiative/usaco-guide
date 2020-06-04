---
slug: /plat/geo
title: "Geometry"
author: Benjamin Qi
order: 6
---

<div class="syllabus-only">
  Description: Todo
</div>

<!-- END DESCRIPTION -->

## Primitives

You should know basic operations like cross product and dot product. For platinum specifically, you should be fine as long as you know how to code convex hull.

### Tutorial

 - CPH 29, 30.1
 - [TopCoder](https://www.topcoder.com/community/competitive-programming/tutorials/geometry-concepts-basic-concepts/)
 - [CF - Point Class](https://codeforces.com/blog/entry/48122)
 - [C++ - std::complex](https://codeforces.com/blog/entry/22175)
 - [cp-algo - "Elementary Operations"](https://cp-algorithms.com/)
 - [vlecomte - geo book](https://codeforces.com/blog/entry/59129)
 - [My Templates](https://github.com/bqi343/USACO/tree/master/Implementations/content/geometry%20(13)/Primitives)

## Sweep Line

 - [TopCoder Line Sweep](https://www.topcoder.com/community/competitive-programming/tutorials/line-sweep-algorithms/)
 - [Cow Steepchase II (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=943)
   - :|

## Convex Hull

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
 - [AGC 44 Random Pawn](https://atcoder.jp/contests/agc044/tasks/agc044_e)
   - Generalization of "Balance"

(old)


[CPC.12](https://github.com/SuprDewd/T-414-AFLV/tree/master/12_geometry)

## 4
  * Misc Stuff to Know
    * Topics
      * std::complex, pair operators
      * Closest Pair
      * MaxCollinear
      * Point in Polygon
      * Polygon Area
      * Line Segment Intersection
    * Tutorial  
      * [TopCoder](https://www.topcoder.com/community/data-science/data-science-tutorials/geometry-concepts-basic-concepts/)
      * [Point Class](http://codeforces.com/blog/entry/48122)
      * [Easy Geo w/ std::complex](http://codeforces.com/blog/entry/22175)
      * [Geo Book](http://codeforces.com/blog/entry/59129)
      * CPH (29, Geometry)
    * Problems
      * [Arpa & Geo](http://codeforces.com/problemset/problem/851/B)
      * [Tell Your World](http://codeforces.com/problemset/problem/849/B)
      * [Gleb & Pizza](http://codeforces.com/problemset/problem/842/B)
      * [Birthday Cake](https://open.kattis.com/problems/birthdaycake)
      * [Racing Off Track](https://open.kattis.com/contests/acpc17open/problems/racingofftrack)
      * [TopCoder Watchtower](https://community.topcoder.com/stat?c=problem_statement&pm=2014&rd=4685)
  * Convex Hull
    * Tutorial
      * CPH (30, Sweep Line Algorithms)
      * [TopCoder Line Sweep](https://www.topcoder.com/community/data-science/data-science-tutorials/line-sweep-algorithms/)
    * Topics
      * Convex Hull
        * [Wikipedia](https://en.wikipedia.org/wiki/Convex_hull_algorithms)
        * Andrew's Monotone Chain (I prefer)
        * Graham Scan
      * Additional
        * [Lichao Segment Tree](http://codeforces.com/blog/entry/51275?#comment-351510)
      * Half-Plane Intersection
        * [Blogewoosh (Ternary Search)](https://codeforces.com/blog/entry/61710)
        * [retrograd](https://codeforces.com/blog/entry/61710?#comment-457662)
        * [Petr (Linear](https://petr-mitrichev.blogspot.com/2016/07/a-half-plane-week.html)
        * LineContainer
          * maintaining separate ones for bottom and top hulls should suffice?
    * Problem(s)
      * [Bridges](https://csacademy.com/contest/archive/task/building-bridges/)
      * [Fence Orthogonality](https://open.kattis.com/problems/fenceortho)
      * [A2OJ](https://a2oj.com/category?ID=22)
