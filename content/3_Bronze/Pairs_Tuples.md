---
id: pairs-tuples
title: Pairs & Tuples
author: Aaron Chew, Benjamin Qi, Nathan Wang, Darren Yao
order: 6
description: A **pair** is a structure that holds two values, not necessarily of the same type. (tuples?)
---

## Pairs

## C++ 

### [Pair](http://www.cplusplus.com/reference/utility/pair/pair/)

 - `make_pair(a, b)`: Returns a pair with values a, b.
 - `pair.first`: The first value of the pair.
 - `pair.second`: The second value of the pair.

Of course, we can hold more than two values with something like `pair<int,pair<int,int>>`.

Example:

```cpp
#include <iostream>

using namespace std;

int main() {
  pair<string, int> myPair = make_pair("Testing", 123);
  cout << myPair.first << " " << myPair.second << endl; // Testing 123
}

/* Output
 * Testing 123
 */
```

### Tuple

(anyone use?)

## Java

Unfortunately there is no default class for pairs in java, so you have to create your own.

```java
class pair implements Comparable <pair>{
    int first;
    int second;
    public int compareTo(pair other) {
        return first==other.first?second-other.second:first-other.first;
    }
    pair(int a, int b) {
        first=a;
        second=b;
    }
}

```
If you have an array ```pair[]arr=new pair[100]```, make sure each element of this array is not null. You can call ```Arrays.sort(arr);``` on this array and it will sort it by all the ```first``` of the array and if there is a tie in ```first``` it will sort by ```second```.

You can also use an `int[]` as a pair, or if you're using a pair of two different types, you can use `Object[]`.

If you want to sort by 3 or more elements, it's a simple change. Just add a new variable in ```pair``` and make sure the comparable compares in the right order you want. 
