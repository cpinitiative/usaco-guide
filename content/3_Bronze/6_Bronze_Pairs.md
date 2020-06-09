---
slug: /bronze/pairs
title: Pairs & Tuples
author: ?
order: 6
---

## [Pair](http://www.cplusplus.com/reference/utility/pair/pair/)

A structure that holds two values, not necessarily of the same type (not built into java!). 

 - `make_pair(a, b)`: Returns a pair with values a, b.
 - `pair.first`: The first value of the pair.
 - `pair.second`: The second value of the pair.

Example

```cpp
#include <iostream>

using namespace std;

int main() {
  pair<string, int> myPair = make_pair("Testing", 123);
  cout << myPair.first << " " << myPair.second << endl; // Testing 123
  vector<pair<int,int>> v = {{2,4},{1,3},{3,4},{3,1}}; 
  sort(begin(v),end(v)); // {(1, 3), (2, 4), (3, 1), (3, 4)}
}

/* Output
 * Testing 123
 */
```
