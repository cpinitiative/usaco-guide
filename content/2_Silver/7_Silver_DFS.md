---
slug: /silver/dfs
title: "Depth First Search"
author: Siyong Huang
order: 7
---

 - Introduction to Graphs
 - Depth First Search (DFS)
 - Flood Fill
 - Graph Two-Coloring
 - Cycle Detection

<!-- END DESCRIPTION -->

## Introduction to Graphs

 - Recommended
   - CPH 11
   - [CSAcademy Graph Intro](https://csacademy.com/lesson/introduction_to_graphs)
   - [CSAcademy Graph Representations](https://csacademy.com/lesson/graph_representation)
     - Usually, adjacency lists are used.
 - Additional
   - [Topcoder Graphs Pt 1](https://www.topcoder.com/community/data-science/data-science-tutorials/introduction-to-graphs-and-their-data-structures-section-1/)
   - [Topcoder Graphs Pt 2](https://www.topcoder.com/community/data-science/data-science-tutorials/introduction-to-graphs-and-their-data-structures-section-2/)

## Depth First Search (DFS)

*Depth First Search*, more commonly DFS, is a fundamental graph algorithm that traverses an entire connected component. The rest of this document describes various applications of DFS. Of course, it is one possible way to implement flood fill. *Breadth first search* (BFS) is **not** required for silver.

 - [CSES Building Roads](https://cses.fi/problemset/task/1666)

### Tutorial

 - Recommended:
   - CPH 12.1
   - [CSAcademy DFS](https://csacademy.com/lesson/depth_first_search/)
 - Additional:
   - [cp-algo DFS](https://cp-algorithms.com/graph/depth-first-search.html)
     - hard to parse if this is your first time learning about DFS
   - [CPC.7](https://github.com/SuprDewd/T-414-AFLV/tree/master/07_graphs_1)

### Problems

 - CF
   - [PolandBall & Forest](http://codeforces.com/problemset/problem/755/C) [](56)
   - [Bear & Friendship](http://codeforces.com/problemset/problem/771/A)
   - [Journey](http://codeforces.com/contest/839/problem/C) [](54)
     - DFS on Tree
  - [Wizard's Tour](http://codeforces.com/contest/860/problem/D) [](59)
 - USACO
   - [Mootube, Silver (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=788)
   - [Closing the Barn, Silver (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=644)
   - [Moocast, Silver (Easy)](http://usaco.org/index.php?page=viewproblem2&cpid=668)
   - [Pails (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=620)
   - [Milk Visits (Normal)](http://www.usaco.org/index.php?page=viewproblem2&cpid=968)
 - Other
   - [POI Hotels](https://szkopul.edu.pl/problemset/problem/gDw3iFkeVm7ZA3j_16-XR7jI/site/?key=statement) [](61)
   - [Kattis Birthday Party (Easy)](https://open.kattis.com/problems/birthday)
     - DFS with each edge removed
    

## Flood Fill

[Flood Fill](https://en.wikipedia.org/wiki/Flood_fill) refers to finding the number of connected components in a graph, usually when the graph is a grid.

 - [CSES Counting Rooms](https://cses.fi/problemset/task/1192)
 - [CSES Labyrinth](https://cses.fi/problemset/task/1193)

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
The most common example of a two-colored graph is a *bipartite graph*, in which each edge connects two nodes of opposite colors.

 - [CSES Building Teams](https://cses.fi/problemset/task/1668)

### Tutorial

The idea is that we can arbitrarily label a node and then run DFS. Every time we visit a new (unvisited) node, we set its color based on the edge rule. When we visit a previously visited node, check to see whether its color matches the edge rule. For example, an implementation of coloring a bipartite graph is shown below.

```cpp
//UNTESTED

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
     - Note: CP-Algorithms uses BFS, but DFS accomplishes the same task

### Problems

 - [CF Bipartiteness](http://codeforces.com/contest/862/problem/B) [](49)
 - [The Great Revegetation (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=920)

## Cycle Detection

A *cycle* is a non-empty path of distinct edges that start and end at the same node. *Cycle detection* determines properties of cycles in a directed or undirected graph, such as whether each node of the graph is part of a cycle or just checking whether a cycle exists. 

A related topic is **strongly connected components**, a platinum level concept.

### Functional Graphs

Links:

 - CPH 16.3: successor paths
 - CPH 16.4: cycle detection in successor graph

In silver-level directed cycle problems, it is generally the case that each node has exactly one edge going out of it. This is known as a **successor graph** or a **functional graph.**

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

The same general idea is implemented below to find any cycle in a directed graph (if one exists).

```cpp
//UNTESTED

bool visited[MAXN], on_stack[MAXN];
vector<int> adj[MAXN];
vector<int> cycle;
bool dfs(int n)
{
	visited[n] = on_stack[n] = true;
	for(int u:adj[n])
	{
		if(on_stack[u])
			return cycle.push_back(v), cycle.push_back(u), on_stack[n] = on_stack[u] = false, true;
		else if(!visited[u])
		{
			if(dfs(u))
				if(on_stack[n])
					return cycle.push_back(n), on_stack[n] = false, true;
				else
					return false;
			if(!cycle.empty())
				return false;
		}
	}
	on_stack[n] = false;
	return false;
}
int main()
{
	//take input, etc
	for(int i = 1;cycle.empty() && i <= N;i++)
		dfs(i);
	if(cycle.empty())
		printf("No cycle found!\n");
	else
	{
		reverse(cycle.begin(), cycle.end());
		printf("Cycle of length %u found!\n", cycle.size());
		for(int n : cycle) printf("%d ", n);
		printf("\n");
	}
}
```

### Problems

 - [Codeforces 1020B. Badge (Very Easy)](https://codeforces.com/contest/1020/problem/B)
   - Try to solve the problem in O(N)!
 - [The Bovine Shuffle (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=764)
 - [Swapity Swapity Swap (Very Hard)](http://www.usaco.org/index.php?page=viewproblem2&cpid=1014)
 - [CSES Round Trip (undirected)](https://cses.fi/problemset/task/1669)
 - [CSES Round Trip II (directed)](https://cses.fi/problemset/task/1678)
 - POI
   - [Mafia](https://szkopul.edu.pl/problemset/problem/w3YAoAT3ej27YeiaNWjK57_G/site/?key=statement)
   - [Spies](https://szkopul.edu.pl/problemset/problem/r6tMTfvQFPAEfQioYMCQndQe/site/?key=statement)
   - [Frog](https://szkopul.edu.pl/problemset/problem/qDH9CkBHZKHY4vbKRBlXPrA7/site/?key=statement)

