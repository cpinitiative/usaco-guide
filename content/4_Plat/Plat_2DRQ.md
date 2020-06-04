---
slug: /plat/2DRQ
title: "2D Range Queries"
author: Benjamin Qi
order: 4
---

<div class="syllabus-only">
  Description: Todo
</div>

<!-- END DESCRIPTION -->

See [my implementations](https://github.com/bqi343/USACO/tree/master/Implementations/content/data-structures/2D%20Range%20Queries%20(15.2)).

## Static Array Queries

 - [Multi-Dimensional RMQ (retrograd)](https://codeforces.com/blog/entry/53810)
 - GP of Serbia 2020 B

## 2D BIT

### Tutorials

 - [GFG 2D BIT](https://www.geeksforgeeks.org/two-dimensional-binary-indexed-tree-or-fenwick-tree/)
 - [TopCoder BIT](https://www.topcoder.com/community/competitive-programming/tutorials/binary-indexed-trees/)

### Problems

 - [CSES Forest Queries II](https://cses.fi/problemset/task/1739)
 - [DMOJ Soriya's Programming Project](https://dmoj.ca/problem/dmopc19c7p5)
   - compressed 2D BIT
   - or do divide & conquer with a 1D BIT
 - [IOI 2007 Pairs](https://wcipeg.com/problem/ioi0722)
 - [DMOJ Crowded Cities](https://dmoj.ca/problem/bfs17p6)

## 2D Segment Tree

 - Short Description
   - CSES 28.2, 28.4
   - Segment Tree (or BIT) nested inside segment tree
   - use 2D offline BIT whenever possible rather than an online 2D segment tree (faster, lower memory)
 - Problems
   - [USACO Plat Friendcross](http://www.usaco.org/index.php?page=viewproblem2&cpid=722)
   - [USACO Plat Mowing](http://www.usaco.org/index.php?page=viewproblem2&cpid=601)
   - [POI Tetris 3D](https://szkopul.edu.pl/problemset/problem/OQjANSOOD_-c38gh8p6g3Gxp/site/?key=statement)
   - [IOI 2013 Game](http://wcipeg.com/problem/ioi1323)