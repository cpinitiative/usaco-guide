# Silver - Graphs

Author: Siyong Huang

## Overview

- Prerequisites
- Depth First Search (DFS)
- Flood Fill
- Graph Two-Coloring
- Cycle Detection

## Prerequisites

 - [Graph Theory](https://csacademy.com/lesson/introduction_to_graphs)
 - [Graph Representations](https://csacademy.com/lesson/graph_representation)
   - Note: DFS is most commonly implemented with adjacency lists

## Depth First Search (DFS)

*Depth First Search*, more commonly DFS, is a fundamental graph algorithm that traverses an entire connected component. The rest of this document describe various applications of DFS.

### Tutorial

 - Recommended:
   - [CSAcademy BFS](https://csacademy.com/lesson/depth_first_search/)
 - Additional:
   - CPH Chapter 12
   - [cp-algo DFS](https://cp-algorithms.com/graph/depth-first-search.html)

### Problems

 - [Mootube, Silver (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=788)
 - [Closing the Barn, Silver (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=644)
 - [Moocast, Silver (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=668)
 - [Pails (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=620)
 - [Milk Visits (Normal)](http://www.usaco.org/index.php?page=viewproblem2&cpid=968)

## Flood Fill

*Flood Fill* refers to finding the number of connected components in a graph, frequently on a grid.

### Tutorial

 - Recommended:
   - Ch 10 of https://www.overleaf.com/project/5e73f65cde1d010001224d8a

### Problems

 - [Ice Perimeter (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=895)
 - [Switching on the Lights (Moderate)](http://www.usaco.org/index.php?page=viewproblem2&cpid=570)
 - [Build Gates (Moderate)](http://www.usaco.org/index.php?page=viewproblem2&cpid=596)
 - [Why Did the Cow Cross the Road III, Silver (Moderate)](http://usaco.org/index.php?page=viewproblem2&cpid=716)
 - [Multiplayer Moo (Hard)](http://usaco.org/index.php?page=viewproblem2&cpid=836)

## Graph Two-Coloring

*Graph two-colorings* is assigning a boolean value to each node of the graph, dictated by the edge configuration
The most common example of a two-colored graph is a *bipartite graph*, in which each edge connects two nodes of opposite colors

### Tutorial

The idea is that we can arbitrarily label a node and then run DFS. Every time we visit a new (unvisited) node, we set its color based on the edge rule. When we visit a previously visited node, check to see whether its color matches the edge rule. For example, an implementation of coloring a bipartite graph is shown below.

```cpp
bool is_bipartite = true;
void dfs(int node)
{
	visited[node] = true;
	for(int u:adj_list[node])
		if(visited[u])
		{
			if(color[u] == color[node])
				is_bipartite = false;
		}
		else
		{
			color[u] = !color[node];
			dfs(u);
		}
}
```

 - Additional:
   - [Bipartite Graphs: cp-alg bipartite check](https://cp-algorithms.com/graph/bipartite-check.html)
     - Note: CP Algorithm uses bfs, but dfs accomplishes the same task

### Problems

 - [The Great Revegetation (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=920)

## Cycle Detection

A *cycle* is a non-empty path of distinct edges that start and end at the same node.
*Cycle detection* determines properties of cycles in a graph, such as counting the number of cycles in a graph or determining whether a node is in a cycle. For most silver-level cycle problems, each node has only one out-degree, meaning that it's adjacency list is of size 1. If this is not the case, the problem generalizes to *Strongly Connected Components*, a platinum level concept.

### Tutorial

The following sample code counts the number of cycles in a graph where each node points to one other node. The "stack" contains nodes that can reach the current node. If the current node points to a node v on the stack (on_stack[v] is true), then we know that a cycle has been created. However, if the current node points to a node v that has been previously visited but is not on the stack, then we know that the current chain of nodes points into a cycle that has already been considered.

```cpp
//Each node points to next_node[node]

bool visited[MAXN], on_stack[MAXN];
int number_of_cycles = 0;
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

### Problems

 - [Codeforces 1020B. Badge (Very Easy)](https://codeforces.com/contest/1020/problem/B)
   - Try to solve the problem in O(N)!
 - [The Bovine Shuffle (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=764)
 - [Swapity Swapity Swap (Very Hard)](http://www.usaco.org/index.php?page=viewproblem2&cpid=1014)

