---
id: cyc
title: Cycle Detection & Functional Graphs
author: Siyong Huang
prerequisites: 
 - 
     - Silver - Depth First Search
---

<module-excerpt>

A *cycle* is a non-empty path of distinct edges that start and end at the same node.

</module-excerpt>

*Cycle detection* determines properties of cycles in a directed or undirected graph, such as whether each node of the graph is part of a cycle or just checking whether a cycle exists. 

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
 - [CSES Round Trip (undirected cycle)](https://cses.fi/problemset/task/1669)
 - [CSES Round Trip II (directed cycle)](https://cses.fi/problemset/task/1678)
 - POI
   - [Mafia](https://szkopul.edu.pl/problemset/problem/w3YAoAT3ej27YeiaNWjK57_G/site/?key=statement)
   - [Spies](https://szkopul.edu.pl/problemset/problem/r6tMTfvQFPAEfQioYMCQndQe/site/?key=statement)
   - [Frog](https://szkopul.edu.pl/problemset/problem/qDH9CkBHZKHY4vbKRBlXPrA7/site/?key=statement)

