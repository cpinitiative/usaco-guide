---
id: dfs
title: Depth First Search
author: Siyong Huang
prerequisites: 
 - 
     - Bronze - Introduction to Graphs
---

 - Depth First Search (DFS)
 - Flood Fill
 - Graph Two-Coloring


<!-- END DESCRIPTION -->

## Depth First Search (DFS)

*Depth First Search*, more commonly DFS, is a fundamental graph algorithm that traverses an entire connected component. The rest of this document describes various applications of DFS. Of course, it is one possible way to implement flood fill. *Breadth first search* (BFS) is **not** required for silver.

 - [CSES Building Roads](https://cses.fi/problemset/task/1666)

### Tutorial

 - Recommended:
   - CPH 12.1
   - [CSAcademy DFS](https://csacademy.com/lesson/depth_first_search/)
 - Additional:
   - [CPC.7](https://github.com/SuprDewd/T-414-AFLV/tree/master/07_graphs_1)
   - [cp-algo DFS](https://cp-algorithms.com/graph/depth-first-search.html)
     - hard to parse if this is your first time learning about DFS
   - [Topcoder Graphs Pt 2](https://www.topcoder.com/community/data-science/data-science-tutorials/introduction-to-graphs-and-their-data-structures-section-2/)

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
   - [Count Cross](http://usaco.org/index.php?page=viewproblem2&cpid=716)
   - [Wormhole Sort (Normal)](http://www.usaco.org/index.php?page=viewproblem2&cpid=992)
     - also binary search on the answer
   - [Fence Planning](http://usaco.org/index.php?page=viewproblem2&cpid=944)
   - [Moo Particle](http://www.usaco.org/index.php?page=viewproblem2&cpid=1040)
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
 - [Switching on the Lights (Normal)](http://www.usaco.org/index.php?page=viewproblem2&cpid=570)
 - [Build Gates (Normal)](http://www.usaco.org/index.php?page=viewproblem2&cpid=596)
 - [Milk Pails (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=620)
 - [Where's Bessie?](http://usaco.org/index.php?page=viewproblem2&cpid=740)
 - [Why Did the Cow Cross the Road III, Silver (Normal)](http://usaco.org/index.php?page=viewproblem2&cpid=716)
 - [Multiplayer Moo (Hard)](http://usaco.org/index.php?page=viewproblem2&cpid=836)
 - [Snow Boots (Hard)](http://usaco.org/index.php?page=viewproblem2&cpid=811)
 - [Mooyo Mooyo](http://usaco.org/index.php?page=viewproblem2&cpid=860)

## Graph Two-Coloring

*Graph two-coloring* refers to assigning a boolean value to each node of the graph, dictated by the edge configuration
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