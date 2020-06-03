# Gold - Shortest Path

Author: Benjamin Qi

[CPC.7](https://github.com/SuprDewd/T-414-AFLV/tree/master/07_graphs_1)

## Breadth First Search

### Tutorial

 - [CSAcademy BFS](https://csacademy.com/lesson/breadth_first_search)
 - [cp-algo BFS](https://cp-algorithms.com/graph/breadth-first-search.html)
 - [cp-algo 0/1 BFS](https://cp-algorithms.com/graph/01_bfs.html)

### Problems

 - [Cow Navigation](http://www.usaco.org/index.php?page=viewproblem2&cpid=695)
 - [Dream](http://www.usaco.org/index.php?page=viewproblem2&cpid=575)
 - [Lasers](http://www.usaco.org/index.php?page=viewproblem2&cpid=671)

## Shortest Path

### Non-Negative Edge Weights

 * [Kattis SSSP Non-Negative](https://open.kattis.com/problems/shortestpath1)

For non-negative weights, use *Dijkstra's Algorithm:*

#### Tutorial

 * CSES 13.2
 * [cp-algo Dijkstra (Dense Graphs)](https://cp-algorithms.com/graph/dijkstra_sparse.html)
 * [cp-algo Dijkstra (Sparse Graphs)](https://cp-algorithms.com/graph/dijkstra_sparse.html)
   * Usually, it's this one that's applicable.

#### USACO Gold Problems 

 * [Milk Pumping](http://www.usaco.org/index.php?page=viewproblem2&cpid=969)
   * fairly standard application
 * [Shortcut](http://usaco.org/index.php?page=viewproblem2&cpid=899)
 * [Fine Dining](http://usaco.org/index.php?page=viewproblem2&cpid=861)

### All Pairs

 * [Kattis All Pairs Shortest Path](https://open.kattis.com/problems/allpairspath)

Use the *Floyd-Warshall* algorithm.

#### Tutorial

 * CSES 13.3
 * [cp-algo Floyd-Warshall](https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html)

#### USACO Gold Problems 

 * [Moortal Cowmbat](http://usaco.org/index.php?page=viewproblem2&cpid=971)
   * Use APSP before running DP.

### Negative Edge Weights

Hasn't appeared in recent USACO Gold as far as I know.

 * [Kattis SSSP Negative](https://open.kattis.com/problems/shortestpath3)

Can also modify Dijkstra's so it works with negative edge weights but not negative cycles. Running time bound no longer applies.
