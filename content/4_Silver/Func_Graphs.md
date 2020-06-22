---
id: func-graphs
title: Functional Graphs
author: Siyong Huang
prerequisites: 
 - 
     - Silver - Depth First Search
description: A functional graph is a digraph in which every vertex has exactly one outgoing edge.
---

### Tutorial

 - CPH 16.3: successor paths
 - CPH 16.4: cycle detection in successor graph

Aka **successor graph**.

The following sample code counts the number of cycles in such a graph. The "stack" contains nodes that can reach the current node. If the current node points to a node `v` on the stack (`on_stack[v]` is true), then we know that a cycle has been created. However, if the current node points to a node `v` that has been previously visited but is not on the stack, then we know that the current chain of nodes points into a cycle that has already been considered.

```cpp
//UNTESTED

//Each node points to next_node[node]

bool visited[MAXN], on_stack[MAXN];
int number_of_cycles = 0, next_node[MAXN];
void dfs(int n)
{
  visited[n] = on_stack[n] = true;
  int u = next_node[n];
  if(on_stack[u])
    number_of_cycles++;
  else if(!visited[u])
    dfs(u);
  on_stack[n] = false;
}
int main()
{
  //read input, etc
  for(int i = 1;i <= N;i++)
    if(!visited[i])
      dfs(i);
}
```

(floyd's algo?)

### Problems

 - [CSES Planets Cycles](https://cses.fi/problemset/task/1751)
 - [CF 1020B. Badge (Very Easy)](https://codeforces.com/contest/1020/problem/B)
   - Try to solve the problem in $O(N)$!
 - USACO Silver
   - [Swapity Swapity Swap (Very Hard)](http://www.usaco.org/index.php?page=viewproblem2&cpid=1014)
     - permutation
   - [The Bovine Shuffle (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=764)
     - functional graph
 - POI
   - [Mafia](https://szkopul.edu.pl/problemset/problem/w3YAoAT3ej27YeiaNWjK57_G/site/?key=statement)
   - [Spies](https://szkopul.edu.pl/problemset/problem/r6tMTfvQFPAEfQioYMCQndQe/site/?key=statement)
   - [Frog](https://szkopul.edu.pl/problemset/problem/qDH9CkBHZKHY4vbKRBlXPrA7/site/?key=statement)