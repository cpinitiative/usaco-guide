---
id: graphs
title: "Graphs"
author: Benjamin Qi
prerequisites: 
 - 
     - Gold - Topological Sort
---

 - Eulerian Tours
 - SCCs
 - BCCs

<!-- END DESCRIPTION -->

Note: all except the third have not appeared on a recent USACO contest.

*Some problems sourced from [here](http://codeforces.com/blog/entry/54526?#comment-385354).*

## Eulerian Tours

Has not appeared on a recent USACO contest.

### Standard

 - [Mail Delivery](https://cses.fi/problemset/task/1691)
  - Undirected Euler Tour
 - [Teleporters](https://cses.fi/problemset/task/1693)
  - Directed Euler Tour

### Tutorial

 - CPH (19, Path & Circuits)

### Problems

 - [Matching Substrings](https://csacademy.com/contest/archive/task/matching-substrings/) [](87)

## Strongly Connected Components

### Standard

 - [CSES Planets & Kingdoms](https://cses.fi/problemset/task/1683)
   - find SCCs
 - [Giant Pizza](https://cses.fi/problemset/task/1684)
   - 2SAT

### Tutorial
 
  - Wikipedia
    - [Tarjan](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)
    - [Kosaraju](https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm)
  - CPH (17, Strong Connectivity)
  - [CPC.7](https://github.com/SuprDewd/T-414-AFLV/tree/master/07_graphs_1)
  - [CF 2-SAT](http://codeforces.com/blog/entry/16205)


### Problems

 - [Coin Collector](https://cses.fi/problemset/task/1686)
   - DP on SCCs
 - [USACO Old Gold: Grass](http://www.usaco.org/index.php?page=viewproblem2&cpid=516)
 - [Proving Equivalences](https://open.kattis.com/problems/equivalences) [](78)
 - [Festival](https://szkopul.edu.pl/problemset/problem/p9uJo01RR9ouMLLAYroFuQ-7/site/?key=statement) [](173)

## Biconnected Components

Related topics include

 - Articulation Points
 - Bridges
 - Block-Cut Tree

### Tutorial

 - [GeeksforGeeks](http://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/)
 - [Wikipedia](https://en.wikipedia.org/wiki/Biconnected_component)
 - [CF DFS Tree + Bridges](https://codeforces.com/blog/entry/68138)

### Problems

 - [CSES Forbidden Cities](https://cses.fi/problemset/task/1705)
   - compute block-cut tree
 - [USACO Plat: Push a Box](http://www.usaco.org/index.php?page=viewproblem2&cpid=769)
 - [Blockade](https://szkopul.edu.pl/problemset/problem/eDt8w290owtatmCjad0O0ywk/site/?key=statement)
 - [POLICIJA](http://wcipeg.com/problem/coi06p2)
 - [One-Way Streets](https://csacademy.com/contest/archive/task/one-way-streets/)
 - [Investment](https://dmoj.ca/problem/tle17c1p6)
