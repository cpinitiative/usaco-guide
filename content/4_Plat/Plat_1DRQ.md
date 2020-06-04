---
slug: /plat/1DRQ
title: "Platinum - 1D Range Queries"
author: Benjamin Qi
---

# Platinum - 1D Range Queries

Author: Benjamin Qi

## Static Range Queries

### Range Minimum Query

  - Tutorial
    - [Wikipedia](https://en.wikipedia.org/wiki/Range_minimum_query)
    - (add)

### General Static Range Queries (Online)

 - Static range queries in $O(1)$ time and $O(N\log N)$ preprocessing for any associative operation
   - (add)

### Divide & Conquer

 - [DMOJ Continued Fractions](https://dmoj.ca/problem/dmopc19c7p4)
 - [USACO Plat NonDec](http://www.usaco.org/index.php?page=viewproblem2&cpid=997)

## Segment Tree

Author: Benjamin Qi

This data structure allows you to do point update and range query in $O(\log N)$ time each for any associative operation. In particular, note that **lazy** updates allow you to range updates as well.

 - Tutorial
   - CPH 9.3, 28.1 (Segment Trees Revisited)
   - [Codeforces Tutorial](http://codeforces.com/blog/entry/18051)
   - [CSAcademy Tutorial](https://csacademy.com/lesson/segment_trees/)
   - [cp-algorithms](https://cp-algorithms.com/data_structures/segment_tree.html)
   - [Slides from CPC.3](https://github.com/SuprDewd/T-414-AFLV/tree/master/03_data_structures)
 - Special: Minimum Query w/ Number of Minimums


### Problems

 - Normal SegTree
   - [USACO Old Gold Seating](http://www.usaco.org/index.php?page=viewproblem2&cpid=231) (check ...)
   - [USACO Old Gold Optimal Milking](http://www.usaco.org/index.php?page=viewproblem2&cpid=365) (check ...)
   - [USACO Old Gold Marathon](http://www.usaco.org/index.php?page=viewproblem2&cpid=495) (check ...)
   - [USACO Plat Balancing](http://www.usaco.org/index.php?page=viewproblem2&cpid=624) (check ...)
   - [USACO Plat Nocross](http://www.usaco.org/index.php?page=viewproblem2&cpid=721)
   - [USACO Gold Springboards](http://www.usaco.org/index.php?page=viewproblem2&cpid=995)
     - can use segment tree with min query in place of the map mentioned in analysis
   - [POI Cards](https://szkopul.edu.pl/problemset/problem/qpsk3ygf8MU7D_1Es0oc_xd8/site/?key=statement) [](81)
 - Lazy Updates
   - [USACO Old Gold The Lazy Cow](http://www.usaco.org/index.php?page=viewproblem2&cpid=418) (check ...)
   - [USACO Plat Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=578)

## BIT Revisited

Binary Indexed Trees can support range increments in addition to range sum queries.

 - [GFG Range Update Point Query](https://www.geeksforgeeks.org/binary-indexed-tree-range-updates-point-queries/)
 - [GFG Range Update Range Query](https://www.geeksforgeeks.org/binary-indexed-tree-range-update-range-queries/)
 - [My Implementation](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/1D%20Range%20Queries%20(9.2)/BITrange.h)

Example problem:

 - [DMOJ Range Update Range Query](https://dmoj.ca/problem/acc3p4)

You can extend this to higher dimensions as well (USACO Camp - "Cows Play Global Thermonuclear War").

 - [Paper](https://arxiv.org/pdf/1311.6093.pdf)