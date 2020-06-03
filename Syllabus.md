# Stuff

 - [USACO -> CPH Topics](https://github.com/bqi343/USACO/blob/master/Contests/USACO%20Links/USACO%20Topics.md)
 - [Riya's website](https://www.vplanetcoding.com/courses)
 - [IOI Syllabus](https://people.ksp.sk/~misof/ioi-syllabus/ioi-syllabus.pdf)
 - [Darren's book](https://www.overleaf.com/project/5e73f65cde1d010001224d8a)
 - [Division-Specific Categorization](https://github.com/bqi343/USACO/blob/master/Contests/USACO%20Links/Division-Specific/Silver.md)
 - [Silver Categorization](https://docs.google.com/document/d/1ba2jr2PFrtxHuGfvdjYVKX-8VzkQAdhpiMLlpXxiAOM/edit)

Italics = mostly appears in higher divisions but still good to learn

# Intro

 - Assumed Prerequisites 
   - first half of AP Computer Science A
   - for loops, ifs
 - Containers
   - Arrays (C++11)
   - Vector / ArrayList
   - C++ pairs
   - Structs?
 - What is Competitive Programming?
   - how to practice, debug
   - good practices for contests
   - contest format
 - Introduction to Contests
   - format
   - plenty of examples involving file I/O
   - submitting, verdicts
 - Introductory Problems
   - Be explicit about how to implement things (say "arrays" or "for-loops" probably??)
   - ex. [Fence Painting](http://usaco.org/index.php?page=viewproblem2&cpid=567)
   - ex. [Word Processing](http://usaco.org/index.php?page=viewproblem2&cpid=987)

# Bronze

 - Rectangle Geometry :o
   - see book ch 7
   - ex. [Billboard](http://usaco.org/index.php?page=viewproblem2&cpid=759)
   - usually just loop over 2D array
 - Simulation
   - do what statement tells you to do
   - ex. [The Lost Cow](http://usaco.org/index.php?page=viewproblem2&cpid=735)
 - Brute Force (Complete Search)
   - CPH 5.1, 5.2, 5.3
   - try all possibilities
   - ex. [Tracing](http://usaco.org/index.php?page=viewproblem2&cpid=1037)
   - iterating through permutations
     - `next_permutation`
     - generating recursively
   - subsets with bitwise operations??
     - not sure when this is applicable
 - "Observation"
   - actually have to think a bit :D
   - ex. [Mad Scientist](http://usaco.org/index.php?page=viewproblem2&cpid=1012)
   - usually considered to be silver?

# Silver

 - Greedy
   - CPH 6
 - Containers from C++ standard template library (STL)
   - CPH 4
   - Linear
     - Queues / Deques
     - C++ Lists?
     - Linked List
     - Stacks
   - Log
     - Priority Queues
     - BST / TreeSet / TreeMap (Python doesn’t have log n map)
     - Sets / Maps
     - Multiset (F FOR JAVA) (just teach a workaround or smthn ig) TreeMap<value,numoccrances> (erase by value pitfall)
     - Custom comparator (prerequisite for basically all silver topics in Java)
   - HashSets / HashMaps
 - Sorting, Binary Search (BinSearch)
   - CPH 3
   - std::sort / Collections.sort
   - coord compress
   - ex. [Counting Haybales](http://usaco.org/index.php?page=viewproblem2&cpid=666)
 - Two Pointers (2P)
   - CPH 8.1
   - ex. [Diamond Collector](http://usaco.org/index.php?page=viewproblem2&cpid=643)
 - Prefix Sums (Psum)
   - CPH 9.1
   - aka Cumulative Sum, Partial Sums
   - ex. [Breed Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=572)
   - 2D
 - Graphs
   - [CSAcademy Lessons](https://csacademy.com/lessons/)
   - CPH 11, 12
   - Terminology
     - ex. bipartite graphs??
   - Flood Fill (FF)
     - finding the number of connected components in a graph
     - frequently on grid
       - ex. [Switching on the Lights](http://www.usaco.org/index.php?page=viewproblem2&cpid=570)
     - Depth First Search (DFS)
   - *Breadth First Search (BFS)*
   - *Disjoint Set Union (DSU)*
     - no silver question should require either of the last two, but good to know
 - Permutations 
   - Cycle Decomposition?
   - ex. [Swapity Swapity Swap](http://www.usaco.org/index.php?page=viewproblem2&cpid=1014)

# Gold

 - **Dynamic Programming (DP)**
   - CPH 7
   - Knapsack
   - LIS
   - on tree?
   - Bitmasks??
   - Range DP???
 - Amortized Analysis?
   - CPH 8.2, 8.3
 - Graphs
   - Shortest Path (SP)
     - **Dijkstra**
       - ex. [Milk Pumping](http://www.usaco.org/index.php?page=viewproblem2&cpid=969)
     - Bellman-Ford
     - Floyd-Warshall
     - SPFA??
     - CPH 13
   - *Lowest Common Ancestor (LCA)*
     - CPH 14, 18?
     - hasn’t been *required* aside from [cowland](http://www.usaco.org/index.php?page=viewproblem2&cpid=921)
       - *probably* won't see a repeat of this
     - [Milk Visits](http://www.usaco.org/index.php?page=viewproblem2&cpid=970) also mentions it
       - but no binary jumping required ...
   - **Minimum Spanning Tree (MST)**
     - CPH 15
     - ex. [Fencedin](http://www.usaco.org/index.php?page=viewproblem2&cpid=623)
     - Prim
     - Kruskal
   - **Topological Sort (TopoSort)**
     - CPH 16
     - ex. [Timeline](http://www.usaco.org/index.php?page=viewproblem2&cpid=1017)
 - 1D Range Queries (1DRQ)
   - mostly point update and sum query
   - ex. [Haircut](http://www.usaco.org/index.php?page=viewproblem2&cpid=1041)
 - **Number Theory**
   - Prime factorization, GCD, LCM
   - Modular Arithmetic
   - Fast Exponentiation 
   - ex. [Cow Poetry](http://usaco.org/index.php?page=viewproblem2&cpid=897)
 - Other
   - Bitset??
   - Combinatorics
     - Principle of Inclusion and Exclusion (PIE) once?
     - ex. [Cowpatibility](http://usaco.org/index.php?page=viewproblem2&cpid=862)
   - Geometry
     - Cross product, dot product, geometry primitives (shoelace, etc.)
     - Sweepline
     - CPH 29, 30.1?
   - Strings
     - CPH 26.1, 26.2, 26.3
     - Hashing (once)?
       - [Cownomics](http://www.usaco.org/index.php?page=viewproblem2&cpid=741)
     - Trie?