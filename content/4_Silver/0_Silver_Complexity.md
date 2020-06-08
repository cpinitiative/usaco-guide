

# Time/Space Complexity and Algorithm Analysis 
### Author: Darren Yao

In programming contests, there is a strict limit on program runtime. This means that in order to pass, your program needs to finish running within a certain timeframe. For USACO, this limit is 4 seconds for Java submissions. A conservative estimate for the number of operations the grading server can handle per second is {10}^8 (but is really closer to 5 \cdot 10^8 given good constant factors).


# Big O Notation and Complexity Calculations
We want a method of how many operations it takes to run each algorithm, in terms of the input size n. Fortunately, this can be done relatively easily using Big O notation, which expresses worst-case complexity as a function of n, as n gets arbitrarily large. Complexity is an upper bound for the number of steps an algorithm requires, as a function of the input size. In Big O notation, we denote the complexity of a function as O(f(n)), where f(n) is a function without constant factors or lower-order terms. We'll see some examples of how this works, as follows.

The following code is O(1), because it executes a constant number of operations.
```
int a = 5;
int b = 7;
int c = 4;
int d = a + b + c + 153;
```
Input and output operations are also assumed to be O(1).

In the following examples, we assume that the code inside the loops is O(1).

The time complexity of loops is the number of iterations that the loop runs. For example, the following code examples are both O(n).
```
for(int i = 1; i <= n; i++){
    // constant time code here
}
```

```
int i = 0;
while(i < n){
    // constant time node here
    i++;
}
```

Because we ignore constant factors and lower order terms, the following examples are also O(n):

```
for(int i = 1; i <= 5*n + 17; i++){
    // constant time code here
}
```

```
for(int i = 1; i <= n + 457737; i++){
    // constant time code here
}
```

We can find the time complexity of multiple loops by multiplying together the time complexities of each loop. This example is O(nm), because the outer loop runs O(n) iterations and the inner loop O(m).
```
for(int i = 1; i <= n; i++){
    for(int j = 1; j <= m; j++){
        // constant time code here
    }
}
```

In this example, the outer loop runs O(n) iterations, and the inner loop runs anywhere between 1 and n iterations (which is a maximum of n). Since Big O notation calculates worst-case time complexity, we must take the factor of n from the inner loop. Thus, this code is O(n^2).
```
for(int i = 1; i <= n; i++){
    for(int j = i; j <= n; j++){
        // constant time code here
    }
}
```

If an algorithm contains multiple blocks, then its time complexity is the worst time complexity out of any block. For example, the following code is O(n^2).
```
for(int i = 1; i <= n; i++){
    for(int j = 1; j <= n; j++){
        // constant time code here
    }
}
for(int i = 1; i <= n + 58834; i++){
    // more constant time code here
}
```

The following code is O(n^2 + nm), because it consists of two blocks of complexity O(n^2) and O(nm), and neither of them is a lower order function with respect to the other.
```
for(int i = 1; i <= n; i++){
    for(int j = 1; j <= n; j++){
        // constant time code here
    }
}
for(int i = 1; i <= n; i++){
    for(int j = 1; j <= m; j++){
        // more constant time code here
    }
}
```

# Common Complexities and Constraints
Complexity factors that come from some common algorithms and data structures are as follows:

- Mathematical formulas that just calculate an answer: O(1)
- Unordered set/map: O(1) per operation
- Binary search: O(log n)
- Ordered set/map or priority queue: O(log n) per operation
- Prime factorization of an integer, or checking primality or compositeness of an integer: O(\sqrt{n})
- Reading in n items of input: O(n)
- Iterating through an array or a list of n elements: O(n)
- Sorting: usually O(n log n) for default sorting algorithms (mergesort, for example Collections.sort or Arrays.sort on objects)
- Java Quicksort Arrays.sort function on primitives on pathological worst-case data sets, don't use this in CodeForces rounds
- Iterating through all subsets of size k of the input elements: O(n^k). For example, iterating through all triplets is O(n^3).
- Iterating through all subsets: O(2^n)
- Iterating through all permutations: O(n!)


Here are conservative upper bounds on the value of n for each time complexity. You can probably get away with more than this, but this should allow you to quickly check whether an algorithm is viable.

- n | Possible complexities 
- n <= 10 | O(n!), O(n^7), O(n^6) 
- n <= 20 | O(2^n \cdot n), O(n^5) 
- n <= 80 | O(n^4) 
- n <= 400 | O(n^3) 
- n <= 7500 | O(n^2) 
- n <= 7 * 10^4 | O(n \sqrt n) 
- n <= 5 * 10^5 | O(n \log n) 
- n <= 5 * 10^6 | O(n) 
- n <= 10^18 | O(\log^2 n), O(\log n), O(1) 





