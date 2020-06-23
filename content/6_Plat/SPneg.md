---
id: sp-neg
title: "Shortest Paths with Negative Edge Weights"
author: Benjamin Qi
prerequisites: 
 - Gold - Shortest Paths with Non-Negative Edge Weights
description: Applications of Bellman-Ford.
---

 - Hasn't appeared in recent USACO Gold as far as I know. 
 - If no negative cycles, can use [Shortest Path Faster Algorithm](https://en.wikipedia.org/wiki/Shortest_Path_Faster_Algorithm) or modify Dijkstra slightly (though the same running time bound no longer applies).

### Tutorial
 
 - CPH 13.1
 - [cp-algo Bellman Ford](https://cp-algorithms.com/graph/bellman_ford.html)
 - [Topcoder Graphs Pt 3](https://www.topcoder.com/community/data-science/data-science-tutorials/introduction-to-graphs-and-their-data-structures-section-3/)

### Problems

 - General
   - [CSES High Score](https://cses.fi/problemset/task/1673)
   - [Kattis SSSP Negative](https://open.kattis.com/problems/shortestpath3)
   - [CSES (Negative) Cycle Finding](https://cses.fi/problemset/task/1197)

## Simple Linear Programming

You can also use shortest path algorithms to solve the following problem (a very simple [linear program](https://en.wikipedia.org/wiki/Linear_programming)).

> Given variables $x_1,x_2,\ldots,x_N$ with constraints in the form $x_i-x_j\ge c$, compute a feasible solution.

 - [Linear Programming Trick](https://www.cs.rit.edu/~spr/COURSES/ALG/MIT/lec18.pdf)

### Problems

  - [Restore Array](https://oj.uz/problem/view/RMI19_restore)
  - [Art](https://codeforces.com/gym/102394/problem/A) (basically same as above)
  - Timeline (Camp)
    - equivalent to [Timeline (Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=1017) except $N,C\le 5000$ and negative values of $x$ are possible.