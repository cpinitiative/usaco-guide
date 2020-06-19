---
id: 1DRQ
title: "1D Range Queries"
author: Benjamin Qi
prerequisites: 
 - 
     - Gold - Binary Indexed Trees
---

<module-excerpt>

General range queries for associative operations, including segment tree.

</module-excerpt>

## Static Range Queries

Given a static array $A[1],A[2],\ldots,A[N]$, you want to answer queries in the form $A[l]\ominus A[l+1]\ominus \cdots \ominus A[r]$ in $O(1)$ time each with $O(N\log N)$ time preprocessing, where $\ominus$ denotes any associative operation. In the case when $\ominus$ denotes `min`, preprocessing can be done in $O(N)$ time.

### Tutorial

 - [Range Minimum Query](https://en.wikipedia.org/wiki/Range_minimum_query)
   - Use for $O(1)$ LCA
   - CPH 9.1
   - [cp-algorithms RMQ](https://cp-algorithms.com/sequences/rmq.html)
   - [$O(1)$ Query RMQ with $O(N)$ build](https://codeforces.com/blog/entry/78931)

### Divide & Conquer

**Divide & conquer** can refer to many different techniques. In this case, we use it to answer $Q$ queries offline in $O((N+Q)\log N)$ time. 

Suppose that all queries satisfiy $L\le l\le r\le R$ (initially, $L=1$ and $R=N$). Letting $M=\left\lfloor \frac{L+R}{2}\right\rfloor$, we can compute 
$$lef[l]=A[l]\ominus A[l+1]\ominus \cdots \ominus A[M]$$ 
for all $L\le l\le M$ and 
$$rig[r]=A[M+1]\ominus A[M+2] \ominus \cdots\ominus A[r]$$ 
for each $M< r\le R$. Then the answer for all queries satisfying $l\le M<r$ is simply $lef[l]\ominus rig[r]$ due to the associativity condition. After that, we recurse on all query intervals completely contained within $[L,M]$ and $[M+1,R]$ independently.

Actually, this can be adjusted to answer queries online in $O(1)$ time each. See my implementation [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/Static%20Range%20Queries%20(9.1)/RangeQuery.h).

See my implementation [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/Static%20Range%20Queries%20(9.1)/RangeQuery.h).

#### Problems

 - [DMOJ Continued Fractions](https://dmoj.ca/problem/dmopc19c7p4)
 - [USACO Plat - NonDec](http://www.usaco.org/index.php?page=viewproblem2&cpid=997)
 - [JOI Secret](https://oj.uz/problem/view/JOI14_secret)

## Segment Tree

Author: Benjamin Qi

This data structure allows you to do point update and range query in $O(\log N)$ time each for any associative operation. In particular, note that **lazy** updates allow you to range updates as well.

### Tutorials

 - CPH 9.3, 28.1 (Segment Trees Revisited)
 - [Codeforces Tutorial](http://codeforces.com/blog/entry/18051)
 - [CSAcademy Tutorial](https://csacademy.com/lesson/segment_trees/)
 - [cp-algorithms](https://cp-algorithms.com/data_structures/segment_tree.html)
 - [Slides from CPC.3](https://github.com/SuprDewd/T-414-AFLV/tree/master/03_data_structures)

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
   - [CSES Area of Rectangles](https://cses.fi/problemset/task/1741)
     - use segment tree that keeps track of minimum and # of minimums
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