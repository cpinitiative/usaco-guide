---
id: cyc
title: Cycle Detection & Functional Graphs
author: Siyong Huang
prerequisites: 
 - 
     - Silver - Functional Graphs
 - 
     - Gold - Breadth First Search
description: A *cycle* is a non-empty path of distinct edges that start and end at the same node. (what about distinct vertices?)
---

*Cycle detection* determines properties of cycles in a directed or undirected graph, such as whether each node of the graph is part of a cycle or just checking whether a cycle exists. 

A related topic is **strongly connected components**, a platinum level concept.

## Undirected Graphs

 - [CSES Round Trip](https://cses.fi/problemset/task/1669)

BFS-Cycle

## Directed Graphs

 - [CSES Round Trip II](https://cses.fi/problemset/task/1678)

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

 - [CSES Graph Girth](https://cses.fi/problemset/task/1707)
   - shortest cycle

