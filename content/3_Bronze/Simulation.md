---
id: simulation
title: "Simulation"
author: Darren Yao
description: In many problems, we can just simulate what we're told to do by the problem statement. 
---

Since there's no formal algorithm involved, the intent of the problem is to assess competence with one's programming language of choice and knowledge of built-in data structures. At least in USACO Bronze, when a problem statement says to find the end result of some process, or to find when something occurs, it's usually sufficient to simulate the process naively.

## Example 1

### Statement

Alice and Bob are standing on a 2D plane. Alice starts at the point $(0, 0)$, and Bob starts at the point $(R, S)$ ($1 \leq R, S \leq 1000$). Every second, Alice moves $M$ units to the right, and $N$ units up. Every second, Bob moves $P$ units to the left, and $Q$ units down. ($1 \leq M, N, P, Q \leq 10$). Determine if Alice and Bob will ever meet (be at the same point at the same time), and if so, when.

#### Input Format

The first line of the input contains $R$ and $S$.

The second line of the input contains $M$, $N$, $P$, and $Q$.

#### Output Format

Please output a single integer containing the number of seconds after the start at which Alice and Bob meet. If they never meet, please output $-1$.

### Solution

We can simulate the process. After inputting the values of $R$, $S$, $M$, $N$, $P$, and $Q$, we can keep track of Alice's and Bob's $x$- and $y$-coordinates. To start, we initialize variables for their respective positions. Alice's coordinates are initially \((0, 0)\), and Bob's coordinates are $(R, S)$ respectively. Every second, we increase Alice's $x$-coordinate by $M$ and her $y$-coordinate by $N$, and decrease Bob's $x$-coordinate by $P$ and his $y$-coordinate by $Q$.

Now, when do we stop? First, if Alice and Bob ever have the same coordinates, then we are done. Also, since Alice strictly moves up and to the right and Bob strictly moves down and to the left, if Alice's $x$- or $y$-coordinates are ever greater than Bob's, then it is impossible for them to meet. 

Example Java code is displayed below. Here, as in other examples, input processing will be omitted).

```java
int ax = 0; int ay = 0; // alice's x and y coordinates
int bx = r; int by = s; // bob's x and y coordinates
int t = 0; // keep track of the current time
while(ax < bx && ay < by){
    // every second, update alice's and bob's coordinates and the time
    ax += m; ay += n;
    bx -= p; by -= q;
    t++;
}
if(ax == bx && ay == by){ // if they are in the same location
    out.println(t); // they meet at time t
} else {
    out.println(-1); // they never meet
}
out.close(); // flush the output
```

For C++, replaces lines such as `out.println(t)` with `cout << t << endl`.


## Example 2

### Statement

There are $N$ buckets ($5 \leq N \leq 10^5$), each with a certain capacity $C_i$ ($1 \leq C_i \leq 100$). One day, after a rainstorm, each bucket is filled with $A_i$ units of water ($1\leq A_i \leq C_i$). Charlie then performs the following process: he pours bucket 1 into bucket 2, then bucket 2 into bucket 3, and so on, up until pouring bucket $N-1$ into bucket $N$. When Charlie pours bucket $B$ into bucket $B+1$, he pours as much as possible until bucket $B$ is empty or bucket $B+1$ is full. Find out how much water is in each bucket once Charlie is done pouring.

#### Input Format

The first line of the input contains $N$. 

The second line of the input contains the capacities of the buckets, $C_1, C_2, \dots, C_N$.

The third line of the input contains the amount of water in each bucket $A_1, A_2, \dots, A_N$.

#### Output Format

Please print one line of output, containing $N$ space-separated integers: the final amount of water in each bucket once Charlie is done pouring.

### Solution

Once again, we can simulate the process of pouring one bucket into the next. The amount of milk poured from bucket $B$ to bucket $B+1$ is the smaller of the amount of water in bucket $B$ (after all previous operations have been completed) and the remaining space in bucket $B+1$, which is $C_{B+1} - A_{B+1}$. We can just handle all of these operations in order, using an array C to store the maximum capacities of each bucket, and an array A to store the current water level in each bucket, which we update during the process. Example code is below (note that arrays are zero-indexed, so the indices of our buckets go from $0$ to $N-1$ rather than from $1$ to $N$).

Java:

```java
for(int i = 0; i < n-1; i++){
    int amt = Math.min(A[i], C[i+1]-A[i+1]);
    // the amount of water to be poured is the lesser of
    // the amount of water in the current bucket and
    // the amount of additional water that the next bucket can hold
    A[i] -= amt; // remove the amount from the current bucket
    A[i+1] += amt; // add it to the next bucket
}

for(int i = 0; i < n; i++){
    pw.print(A[i] + " ");
    // print the amount of water in each bucket at the end
}
pw.println(); // print newline
pw.close(); // flush the output
```

C++:

```cpp
for(int i = 0; i < n-1; i++){
    int amt = min(A[i], C[i+1]-A[i+1]);
    // the amount of water to be poured is the lesser of
    // the amount of water in the current bucket and
    // the amount of additional water that the next bucket can hold
    A[i] -= amt; // remove the amount from the current bucket
    A[i+1] += amt; // add it to the next bucket
}

for(int i = 0; i < n; i++){
    cout << A[i] << " ";
    // print the amount of water in each bucket at the end
}
cout << endl;
```


## USACO Bronze Problems

speeding: http://usaco.org/index.php?page=viewproblem2&cpid=568

angry: http://usaco.org/index.php?page=viewproblem2&cpid=592

block: http://usaco.org/index.php?page=viewproblem2&cpid=664

shell: http://usaco.org/index.php?page=viewproblem2&cpid=891

Team Tic Tac Toe: 831

- [Mixing Milk](http://www.usaco.org/index.php?page=viewproblem2&cpid=855)
- [Milk Measurement](http://www.usaco.org/index.php?page=viewproblem2&cpid=761)
- [The Lost Cow](http://www.usaco.org/index.php?page=viewproblem2&cpid=735)
- [Why Did the Cow Cross the Road III](http://www.usaco.org/index.php?page=viewproblem2&cpid=713)
- [Mowing the Field](http://www.usaco.org/index.php?page=viewproblem2&cpid=593)
- [The Bovine Shuffle](http://usaco.org/index.php?page=viewproblem2&cpid=760)
- [Circular Barn](http://usaco.org/index.php?page=viewproblem2&cpid=616)