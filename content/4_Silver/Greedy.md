---
id: greedy
title: "Greedy Algorithms"
author: Darren Yao
prerequisites: 
 - 
     - Silver - Sorting with Custom Comparators
---

**Greedy** algorithms select the optimal choice at each step instead of looking at the solution space as a whole. This reduces the problem to a smaller problem at each step.

<!-- END DESCRIPTION -->

Greedy does not refer to a single algorithm, but rather a way of thinking that is applied to problems. There's no one way to do greedy algorithms. Hence, we use a selection of well-known examples to help you understand the greedy paradigm. 

Usually, when using a greedy algorithm, there is a heuristic or value function that determines which choice is considered most optimal. Usually (but not always) some sorting step is involved.

## Additional Resources

 - CPH 6
 - [CPC.5](https://github.com/SuprDewd/T-414-AFLV/tree/master/05_greedy_algorithms)

## Example: Studying Algorithms

### Statement

Steph wants to improve her knowledge of algorithms over winter break. She has a total of $X$ ($1 \leq X \leq 10^4$) minutes to dedicate to learning algorithms. There are $N$ ($1 \leq N \leq 100$) algorithms, and each one of them requires $a_i$ ($1 \leq a_i \leq 100$) minutes to learn. Find the maximum number of algorithms she can learn.

### Solution

The first observation we make is that Steph should prioritize learning algorithms from easiest to hardest; in other words, start with learning the algorithm that requires the least amount of time, and then choose further algorithms in increasing order of time required. Let's look at the following example:

$$X = 15, \qquad N = 6, \qquad a_i = \{ 4, 3, 8, 4, 7, 3 \}$$

After sorting the array, we have $\{ 3, 3, 4, 4, 7, 8 \}$. Within the maximum of 15 minutes, Steph can learn four algorithms in a total of $3+3+4+4 = 14$ minutes.
The implementation of this algorithm is very simple. We sort the array, and then take as many elements as possible while the sum of times of algorithms chosen so far is less than $X$. Sorting the array takes $O(N \log N)$ time, and iterating through the array takes $O(N)$ time, for a total time complexity of $O(N \log N)$.

```java
// read in the input, store the algorithms in int[] algorithms
Arrays.sort(algorithms);
int count = 0; // number of minutes used so far
int i = 0;
while(count + algorithms[i] <= x){
    // while there is enough time, learn more algorithms
    count += algorithms[i];
    i++;
}
pw.println(i); // print the ans
pw.close();
```

## The Scheduling Problem

There are $N$ events, each described by their starting and ending times. Jason would like to attend as many events as possible, but he can only attend one event at a time, and if he chooses to attend an event, he must attend the entire event. Traveling between events is instantaneous.

### Bad Greedy: Earliest Starting Next Event
One possible ordering for a greedy algorithm would always select the next possible event that begins as soon as possible. Let's look at the following example, where the selected events are highlighted in red:

<!-- \begin{center}
    \begin{tikzpicture}[ultra thick]
        \draw[red](1, 2.5) -- (4, 2.5);
        \draw(2, 2) -- (5, 2);
        \draw[red](5, 1.5) -- (7, 1.5);
        \draw(6, 1) -- (7, 1);
    \end{tikzpicture}
\end{center} -->

In this example, the greedy algorithm selects two events, which is optimal. However, this doesn't always work, as shown by the following counterexample:

<!-- \begin{center}
    \begin{tikzpicture}[ultra thick]
        \draw[red](1, 2.5) -- (10, 2.5);
        \draw(2, 2) -- (5, 2);
        \draw(6, 1.5) -- (7, 1.5);
        \draw(8, 1) -- (11, 1);
    \end{tikzpicture}
\end{center} -->

In this case, the greedy algorithm selects to attend only one event. However, the optimal solution would be the following:

<!-- \begin{center}
    \begin{tikzpicture}[ultra thick]
        \draw(1, 2.5) -- (10, 2.5);
        \draw[red](2, 2) -- (5, 2);
        \draw[red](6, 1.5) -- (7, 1.5);
        \draw[red](8, 1) -- (11, 1);
    \end{tikzpicture}
\end{center} -->

### Correct Greedy: Earliest Ending Next Event

Instead, we can select the event that ends as early as possible. This correctly selects the three events.

<!-- \begin{center}
    \begin{tikzpicture}[ultra thick]
        \draw(1, 2.5) -- (10, 2.5);
        \draw[red](2, 2) -- (5, 2);
        \draw[red](6, 1.5) -- (7, 1.5);
        \draw[red](8, 1) -- (11, 1);
    \end{tikzpicture}
\end{center} -->

In fact, this algorithm always works. A brief explanation of correctness is as follows. If we have two events $E_1$ and $E_2$, with $E_2$ ending later than $E_1$, then it is always optimal to select $E_1$. This is because selecting $E_1$ gives us more choices for future events. If we can select an event to go after $E_2$, then that event can also go after $E_1$, because $E_1$ ends first. Thus, the set of events that can go after $E_2$ is a subset of the events that can go after $E_1$, making $E_1$ the optimal choice.

For the following code, let's say we have the array `events` of events, which each contain a start and an end point. We'll be using the following static class to store each event (a review of the previous chapter!)

```java
static class Event implements Comparable<Event>{
    int start; int end;
    public Event(int s, int e){
        start = s; end = e;
    }
    public int compareTo(Event e){
        return Integer.compare(this.end, e.end);
    }
}
```

```java
// read in the input, store the events in Event[] events.
Arrays.sort(events); // sorts by comparator we defined above
int currentEventEnd = -1; // end of event currently attending
int ans = 0; // how many events were attended?
for(int i = 0; i < n; i++){ // process events in order of end time
    if(events[i].start >= currentEventEnd){ // if event can be attended
    // we know that this is the earliest ending event that we can attend
    // because of how the events are sorted
        currentEventEnd = events[i].end;
        ans++;
    }
}
pw.println(ans);
pw.close();
```

## When Greedy Fails

We'll provide a few common examples of when greedy fails, so that you can avoid falling into obvious traps and wasting time getting wrong answers in contest.

### Coin Change

This problem gives several coin denominations, and asks for the minimum number of coins needed to make a certain value. Greedy algorithms can be used to solve this problem only in very specific cases (it can be proven that it works for the American as well as the Euro coin systems). However, it doesn't work in the general case. For example, let the coin denominations be $\{1, 3, 4\}$, and say the value we want is 6. The optimal solution is $\{3, 3\}$, which requires only two coins, but the greedy method of taking the highest possible valued coin that fits in the remaining denomination gives the solution $\{4, 1, 1\}$, which is incorrect.

### Knapsack

The knapsack problem gives a number of items, each having a weight and a value, and we want to choose a subset of these items. We are limited to a certain weight, and we want to maximize the value of the items that we take.

Let's take the following example, where we have a maximum capacity of 4:
<!-- \begin{center}
    \begin{tabular}{c c c c}
    \toprule
        Item & Weight & Value & Value Per Weight \\
    \midrule
        A & 3 & 18 & 6 \\
        B & 2 & 10 & 5 \\
        C & 2 & 10 & 5 \\
    \bottomrule
    \end{tabular}
\end{center} -->

If we use greedy based on highest value first, we choose item A and then we are done, as we don't have remaining weight to fit either of the other two. Using greedy based on value per weight again selects item A and then quits. However, the optimal solution is to select items B and C, as they combined have a higher value than item A alone. In fact, there is no working greedy solution. The solution to this problem uses **dynamic programming**, which is covered in gold.

# Problems

 - USACO Silver
   - [Lemonade Line](http://usaco.org/index.php?page=viewproblem2&cpid=835)
   - [Why Did the Cow Cross the Road](http://www.usaco.org/index.php?page=viewproblem2&cpid=714)
     - first step: sort!
   - [Berry Picking](http://www.usaco.org/index.php?page=viewproblem2&cpid=990)
   - [Rest Stops](http://www.usaco.org/index.php?page=viewproblem2&cpid=810)
   - [High Card Wins](http://usaco.org/index.php?page=viewproblem2&cpid=571)
 - Misc
   - [Sure Bet](https://csacademy.com/contest/archive/task/sure-bet/)
   - [Did you Mean...](http://codeforces.com/contest/860/problem/A)
   - [Permutation](http://codeforces.com/problemset/problem/864/D)
   - [Bus](http://codeforces.com/problemset/problem/864/C)
   - [Kayaking](http://codeforces.com/problemset/problem/863/B)