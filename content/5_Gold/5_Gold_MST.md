---
slug: /gold/mst
title: "Minimum Spanning Trees"
author: Benjamin Qi
order: 5
prerequisites: 
 - 
     - Gold - Shortest Paths
---

Disjoint Set Union and Minimum Spanning Trees

<!-- END DESCRIPTION -->

## Standard

 - [Kattis Minimum Spanning Tree](https://open.kattis.com/problems/minspantree)
   - same as [CSES Road Reparation](https://cses.fi/problemset/task/1675)

## Tutorial

 - CPH 15 (Spanning Trees)
 - Prim's Algorithm
   - [cp-algo](https://cp-algorithms.com/graph/mst_prim.html)
   - Similar to Dijkstra
 - Kruskal's Algorithm
   - [cp-algo 1](https://cp-algorithms.com/graph/mst_kruskal.html)
   - [cp-algo 2](https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html)
   - Requires "Disjoint Set Union" (DSU) data structure
     - [CSAcademy Disjoint-Set](https://csacademy.com/lesson/disjoint_data_sets)
     - [Topcoder Union Find](https://www.topcoder.com/community/data-science/data-science-tutorials/disjoint-set-data-structures/)
     - [CPC.3](https://github.com/SuprDewd/T-414-AFLV/tree/master/03_data_structures)
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

## Other Problems

  - [Birthday Gifts](https://www.hackerearth.com/practice/math/combinatorics/inclusion-exclusion/practice-problems/algorithm/mancunian-and-birthday-gifts-d44faa15/) [](73)
  - [Spanning Tree Fraction](https://www.hackerrank.com/contests/w31/challenges/spanning-tree-fraction) [](78)