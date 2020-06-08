---
slug: /plat/2DRQ
title: "2D Range Queries"
author: Benjamin Qi
order: 3
prerequisites: 
 - 
     - Platinum - 1D Range Queries
---

Extending Range Queries to 2D (and beyond).

<!-- END DESCRIPTION -->

See [my implementations](https://github.com/bqi343/USACO/tree/master/Implementations/content/data-structures/2D%20Range%20Queries%20(15.2)).

## Static Array Queries

 - [Multi-Dimensional RMQ (retrograd)](https://codeforces.com/blog/entry/53810)
 - GP of Serbia 2020 B

## 2D BIT

### Tutorials

 - [GFG 2D BIT](https://www.geeksforgeeks.org/two-dimensional-binary-indexed-tree-or-fenwick-tree/)
 - [TopCoder BIT](https://www.topcoder.com/community/competitive-programming/tutorials/binary-indexed-trees/)
 - Suppose that you want to update $N\approx 10^5$ points with both coordinates in the range $[1,N]$.
   - The 2D BITs mentioned above use $O(N^2)$ memory, which is too much.
   - Can be reduced to $O(N\log^2N)$ memory with unordered map, but this might also be too much (and too slow).
   - If you know the points to be updated beforehand then you can reduce to $O(N\log N)$ memory (and no maps).
     - [my 1D offline BIT](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/1D%20Range%20Queries%20(9.2)/BIToff.h)
     - [my 2D offline BIT](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/2D%20Range%20Queries%20(15.2)/BIT2DOff%20(15.2).h)

You can extend the 1D BIT solution for range update + range query (mentioned in 1DRQ) to higher dimensions as well (USACO Camp - "Cows Play Global Thermonuclear War").

 - [Paper](https://arxiv.org/pdf/1311.6093.pdf)

### Problems

 - [CSES Forest Queries II](https://cses.fi/problemset/task/1739)
   - [thecodingwizard's implementation](https://github.com/thecodingwizard/competitive-programming/blob/master/cses/Forest%20Queries%20II.cpp)
 - [DMOJ Soriya's Programming Project](https://dmoj.ca/problem/dmopc19c7p5)
   - intended complexity is $O(N\log^2 N)$
   - compressed 2D BIT
     - rather difficult to pass within time and memory limits
       - Make sure to use `\n` instead of `endl`!
     - [thecodingwizard's implementation with Benq's 2d offline bit](https://github.com/thecodingwizard/competitive-programming/blob/master/DMOJ/Soriyas%20Programming%20Project.cpp)
   - or do divide & conquer with a 1D BIT
     - same as first problem [here](https://robert1003.github.io/2020/01/31/cdq-divide-and-conquer.html)
     - [thecodingwizard's (messy) implementation](https://github.com/thecodingwizard/competitive-programming/blob/master/DMOJ/Soriya%20Programming%20Project%201d%20BIT%20cdq%20dnc.cpp) based off of article above
 - [IOI 2007 Pairs](https://wcipeg.com/problem/ioi0722)
 - [DMOJ Crowded Cities](https://dmoj.ca/problem/bfs17p6)
 - [USACO Plat Friendcross](http://www.usaco.org/index.php?page=viewproblem2&cpid=722)
 - [USACO Plat Mowing](http://www.usaco.org/index.php?page=viewproblem2&cpid=601)

## 2D Segment Tree

Note: no lazy propagation in 2D.

### Short Description

 - CSES 28.2, 28.4
 - Segment Tree (or BIT) nested inside segment tree
 - use 2D offline BIT instead whenever possible (faster, lower memory)

### Problems

 - [POI Tetris 3D](https://szkopul.edu.pl/problemset/problem/OQjANSOOD_-c38gh8p6g3Gxp/site/?key=statement)
 - [IOI 2013 Game](http://wcipeg.com/problem/ioi1323)