---
id: sp
title: "Shortest Paths with Non-Negative Edge Weights"
author: Benjamin Qi
prerequisites: 
 - Gold - Breadth First Search
description: Introduces Dijkstra's Algorithm for a single source as well as Floyd-Warshall for All-Pairs Shortest Path.
---

## Non-Negative Edge Weights

Use *Dijkstra's Algorithm*.

### Standard

 - [Kattis SSSP Non-Negative](https://open.kattis.com/problems/shortestpath1)
 - [CSES Shortest Routes I](https://cses.fi/problemset/task/1671)

### Tutorial

 - CSES 13.2
 - [cp-algo Dijkstra (Dense Graphs)](https://cp-algorithms.com/graph/dijkstra_sparse.html)
 - [cp-algo Dijkstra (Sparse Graphs)](https://cp-algorithms.com/graph/dijkstra_sparse.html)
   - Usually, it's this one that's applicable.
 - [CPC.8](https://github.com/SuprDewd/T-414-AFLV/tree/master/08_graphs_2)

### Problems 

 - CSES
   - [CSES Flight Discount](https://cses.fi/problemset/task/1195)
   - [CSES Flight Routes](https://cses.fi/problemset/task/1196)
   - [CSES Investigation](https://cses.fi/problemset/task/1202)
 - USACO
   - [Milk Pumping](http://www.usaco.org/index.php?page=viewproblem2&cpid=969)
     - fairly standard application
   - [Shortcut](http://usaco.org/index.php?page=viewproblem2&cpid=899)
   - [Fine Dining](http://usaco.org/index.php?page=viewproblem2&cpid=861)
 - Other
   - [Lane Switching](https://open.kattis.com/contests/acpc17open/problems/laneswitching)
   - [Robot Turtles](https://open.kattis.com/problems/robotturtles) [](100)

## All Pairs Shortest Path (APSP)

Use the *Floyd-Warshall* algorithm.

### Standard

 - [CSES Shortest Routes II](https://cses.fi/problemset/task/1672)
 - [Kattis APSP (with negative weights)](https://open.kattis.com/problems/allpairspath)

### Tutorial

 - CPH 13.3
 - [cp-algo Floyd-Warshall](https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html)

### Problems

 - [USACO Moortal Cowmbat](http://usaco.org/index.php?page=viewproblem2&cpid=971)
   - Use APSP before running DP.
 - [SPOJ Arbitrage](https://www.spoj.com/problems/ARBITRAG/)