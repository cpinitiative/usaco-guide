---
slug: /gold/mst
title: "Minimum Spanning Tree"
author: Benjamin Qi
order: 3
---

<div class="syllabus-only">
  Description: Todo
</div>

<!-- END DESCRIPTION -->

Standard Problems:

 - [Kattis Minimum Spanning Tree](https://open.kattis.com/problems/minspantree)
 - [CSES Road Reparation](https://cses.fi/problemset/task/1675)
   - equivalent to above

## Tutorial

 - CPH 15
 - Prim's Algorithm
   - [cp-algo](https://cp-algorithms.com/graph/mst_prim.html)
   - Similar to Dijkstra
 - Kruskal's Algorithm
   - [cp-algo 1](https://cp-algorithms.com/graph/mst_kruskal.html)
   - [cp-algo 2](https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html)
   - Requires "Disjoint Set Union" (DSU) data structure
     - [CSAcademy Disjoint-Set](https://csacademy.com/lesson/disjoint_data_sets)
     - DSU Complexity Proofs (optional of course)
       - [log\*n](https://en.wikipedia.org/wiki/Proof_of_O(log*n)\_time_complexity\_of_union%E2%80%93find)
       - [a(m,n)](https://dl.acm.org/doi/pdf/10.1145/321879.321884)

## USACO Gold Problems

 - MST
   - [Walk](http://usaco.org/index.php?page=viewproblem2&cpid=946)
     - Prim's is applicable, but the edge weights are special so you don't actually need to use an MST algo ...
   - [Fencedin](http://www.usaco.org/index.php?page=viewproblem2&cpid=623)
     - also special ...
 - DSU
   - [Mootube](http://www.usaco.org/index.php?page=viewproblem2&cpid=789)
     - same as [CSES Road Construction](https://cses.fi/problemset/task/1676)
   - [Closing the Farm](http://www.usaco.org/index.php?page=viewproblem2&cpid=646)
   - [Favorite Colors](http://www.usaco.org/index.php?page=viewproblem2&cpid=1042)
     - fairly tricky