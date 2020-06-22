---
id: toposort
title: "Topological Sort"
author: Benjamin Qi, Michael Cao
prerequisites: 
 - 
     - Gold - Breadth First Search
 - 
     - Gold - Introduction to Dynamic Programming
---

To review, a **directed** graph consists of edges that can only be traversed in one direction. Additionally, a **acyclic** graph defines a graph which does not contain cycles, meaning you are unable to traverse across one or more edges and return to the node you started on. Putting these definitions together, a **directed acyclic** graph, sometimes abbreviated as DAG, is a graph which has edges which can only be traversed in one direction and does not contain cycles. 

A [topological sort](https://en.wikipedia.org/wiki/Topological_sorting) of a directed acyclic graph is a linear ordering of its vertices such that for every directed edge $u\to v$ from vertex $u$ to vertex $v$, $u$ comes before $v$ in the ordering. 

## Tutorial

 - CPH 16.1, 16.2
   - DFS
 - [cp-algorithms](https://cp-algorithms.com/graph/topological-sort.html)
   - DFS
 - [CSAcademy](https://csacademy.com/lesson/topological_sorting)
   - both BFS, DFS
   
Consider [Khan's Algorithm](https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm) for topological sorting.

## Dynamic Programming

One useful property of directed acyclic graphs is, as the name suggests, that there exists no cycles. If we consider each node in the graph as a state, we can perform dynamic programming on the graph if we process the states in an order that guarantees for every edge, $u\to v$ that $u$ is processed before $v$. Fortunately, this is the exact definition of a topological sort!

Let's consider a classical problem (see Longest Flight Route) where we must find the longest path in a Directed Acyclic Graph. Let `dp[curr] = longest path ending at the node curr`. Then, if we process states in topological order, the transition is relatively straightforward: `dp[curr] = max of all dp[prev] where prev represents a node with an edge going into the current node` (word better?). To reiterate, since the states a processed in topological order, we can guarantee that all possible `dp[prev]` are computed before we compute `dp[curr]`.

However, not all problems clearly give you directed acyclic graphs (see [Cave Paintings](http://usaco.org/index.php?page=viewproblem2&cpid=996)). An important step in many problems is to reduce the statement into a directed acyclic graph. See the editorial of the linked problem for more information.

## Example Problems

 - [CSES Course Schedule](https://cses.fi/problemset/task/1679)
 - [CSES Longest Flight Route](https://cses.fi/problemset/task/1680)
 - [CSES Game Routes](https://cses.fi/problemset/task/1681)

## Problems

 - USACO Gold
   - [Timeline](http://www.usaco.org/index.php?page=viewproblem2&cpid=1017)
     - Dynamic Programming on DAG.
   - [Milking Order](http://www.usaco.org/index.php?page=viewproblem2&cpid=838)
     - Binary search and check if a valid topological sort exists. 
 - Other
   - [Minimal Labels](http://codeforces.com/contest/825/problem/E) [](53)
   - [Quantum](https://open.kattis.com/contests/acpc17open/problems/quantumsuperposition) [](84)
