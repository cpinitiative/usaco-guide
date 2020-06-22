---
id: PURQ
title: "1D Point Update Range Query"
author: Benjamin Qi
prerequisites: 
 - 
     - Gold - Point Update Range Sum
description: Range queries for any associative operation over an array with updates, using segment tree.
---

A **segment tree** allows you to do point update and range query in $O(\log N)$ time each for any associative operation. Historically, no gold problem has required the use of a segment tree in place of a binary indexed tree, but it's still good to know (and you might find it simpler).

### Tutorials

 - CPH 9.3, 28.1 (Segment Trees Revisited)
 - [Codeforces Tutorial](http://codeforces.com/blog/entry/18051)
 - [CSAcademy Tutorial](https://csacademy.com/lesson/segment_trees/)
 - [cp-algorithms](https://cp-algorithms.com/data_structures/segment_tree.html)
 - [Slides from CPC.3](https://github.com/SuprDewd/T-414-AFLV/tree/master/03_data_structures)

### Problems

Can try solving some of the BIT questions w/ segtree.

 - CSES
   - [Range Minimum Queries II](https://cses.fi/problemset/task/1649)
     - just min segtree
   - [Subarray Sum Queries](https://cses.fi/problemset/task/1190)
   - [Hotel Queries](https://cses.fi/problemset/task/1143)
 - Normal SegTree
   - [USACO Gold Springboards](http://www.usaco.org/index.php?page=viewproblem2&cpid=995)
     - can use segment tree with min query in place of the map mentioned in analysis
   - [USACO Old Gold Seating](http://www.usaco.org/index.php?page=viewproblem2&cpid=231) (check ...)
   - [USACO Old Gold Optimal Milking](http://www.usaco.org/index.php?page=viewproblem2&cpid=365) (check ...)
   - [USACO Old Gold Marathon](http://www.usaco.org/index.php?page=viewproblem2&cpid=495) (check ...)
   - [USACO Plat Balancing](http://www.usaco.org/index.php?page=viewproblem2&cpid=624) (check ...)
   - [USACO Plat Nocross](http://www.usaco.org/index.php?page=viewproblem2&cpid=721)
   - [POI Cards](https://szkopul.edu.pl/problemset/problem/qpsk3ygf8MU7D_1Es0oc_xd8/site/?key=statement) [](81)
   - [CSES Area of Rectangles](https://cses.fi/problemset/task/1741)
     - use segment tree that keeps track of minimum and # of minimums
