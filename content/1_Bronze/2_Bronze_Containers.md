---
slug: /bronze/containers
title: Containers
author: Nathan Wang
order: 2
---

- todo write table of contents

<!-- END DESCRIPTION -->

// RIP java...

## Stacks

A Last-In-First-Out (LIFO) Data Structure.

- Reference: http://www.cplusplus.com/reference/stack/stack/ 
- Complexity: `O(1)`

Imagine a stack of cards. When we “push” a card into the stack, we put the card on the top of the stack. Then when we “pop” the top of the stack, we remove the topmost card of the stack.

Important Functions:
- `stack.push(element)`: inserts an element to the top of the stack.
- `stack.top()`: returns the topmost element of the stack (the element that was most recently added). Note that this does not remove the element from the stack.
- `stack.pop()`: removes the topmost element from the stack.
- `stack.empty()`: returns true of the stack is empty.
- `stack.size()`: returns the size of the stack.

Example:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
  stack<int> s;
  s.push(1);
  s.push(2);
  s.push(3);
  while (!s.empty()) {
    int next = s.top(); s.pop();
    cout << next << endl;
  }
}

/* Output:
 * 1
 * 2
 * 3
 */
```

**Basic Problems**:
- UVa 00514 - Rails
- UVa 00732 - Anagram by Stack
- UVa 01062 - Containers

## Queues

A First-In-First-Out (FIFO) Data Structure.

- Reference: http://www.cplusplus.com/reference/queue/queue/ 
- Complexity: `O(1)`

Imagine a line of people (a queue of people). When we push a person into the line, we append the person to the end of the line. When we pop a person from the line, we get the front-most person that has been waiting in line the longest.

Important Functions:
- `queue.push(element)`: Adds the element to the end of the queue.
- `queue.pop()`: Removes the front-most element.
- `queue.front()`: Returns the front-most element.
- `queue.size()`: Returns the size of the queue.
- `queue.empty()`: Tests whether or not the queue is empty.

Example:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
  queue<int> q;
  q.push(1);
  q.push(2);
  q.push(3);
  while (!q.empty()) {
    int next = q.front(); q.pop();
    cout << next << endl;
  }
}

/* Output:
 * 1
 * 2
 * 3
 */
```

## Deques

A double-ended queue (pronounced “deck”) that supports insertion and retrieval from two ends. Not very common in Silver.

- Reference: http://www.cplusplus.com/reference/deque/deque/
- Complexity: `O(1)` 

Important Functions:
- `deque.empty()`: Test whether container is empty
- `deque.size()`: Return size
- `deque.push_back()`: Add element to end
- `deque.push_front()`: Add element to beginning
- `deque.front()`: Access first element
- `deque.back()`: Access last element
- `deque.pop_back()`: Delete last element
- `deque.pop_front()`: Delete first element
- `deque.clear()`: Clear content

Example:

```cpp
#include <iostream>
#include <deque>

using namespace std;

int main() {
  deque<int> dq;
  dq.push_back(1);
  dq.push_front(2);
  // dq is [2, 1]
  cout << dq.front() << endl; // 2
  cout << dq.back() << endl; // 1
}
```

**Queue/Deque Basic Problems**:
- UVa 10172 - The Lonesome Cargo…
- UVa 10901 - Ferry Loading III
- UVa 11034 - Ferry Loading IV

## Priority Queues

A queue that always places the greatest element in front.

- Reference: http://www.cplusplus.com/reference/queue/priority_queue/
- Complexity: `O(log n)` for retrieval, `O(log n)` for insertion

Important Functions:
- `pq.empty()`: Test if container is empty.
- `pq.size()`: Return size of container.
- `pq.top()`: Access top element of container.
- `pq.push(el)`: Insert an element.
- `pq.pop()`: Remove top element.

Example:


```cpp
#include <iostream>
#include <queue>

using namespace std;

int main() {
  priority_queue<int> pq;
  pq.push(3);
  pq.push(2);
  pq.push(4);

  while (!pq.empty()) {
    int next = pq.top(); pq.pop();
    cout << next << endl;
  }
}

/* Output:
 * 4
 * 3
 * 2 
 */
```

## Pair

A structure that holds two values, not necessarily of the same type.

- Reference: http://www.cplusplus.com/reference/utility/pair/pair/

Important Functions:
- `make_pair(a, b)`: Returns a pair with values a, b.
- `pair.first`: The first value of the pair.
- `pair.second`: The second value of the pair.

Example

```cpp
#include <iostream>

using namespace std;

int main() {
  pair<string, int> myPair = make_pair("Testing", 123);
  cout << myPair.first << " " << myPair.second << endl;
}

/* Output
 * Testing 123
 */
```

## Maps

A sorted container that stores key-value pairs.

- Reference: http://www.cplusplus.com/reference/map/map/
- Complexity: `O(log n)` for retrieval. `O(log n)` for insertion.
              For unsorted maps, `O(1)` for both (plus hash function)
              
Note: C++ `map` is sorted. C++ `unordered_map` is unsorted. Java `HashMap` is unsorted. Java `TreeMap` is sorted.

Important Functions:

- `map.empty()`: Test if container is empty
- `map.size()`: Returns size of map
- `map.insert(make_pair(a, b))`: Inserts a key-value pair with key a and value b.
- `map.clear()`: Clears map
- `map[“test”]`: Returns corresponding value with key “test.”
- `map.count(“key”)`: Returns 1 if key exists, and 0 otherwise.

Example

```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
  map<string, int> myMap;
  myMap.insert(make_pair("testing", 123));
  myMap.insert(make_pair("hello", 456));
  cout << myMap["hello"] << endl; // 456

  // C++11 onwards
  for (auto const& x : myMap) {
    std::cout << x.first  // key
              << ':' 
              << x.second // value 
              << std::endl;
  }
}

/*
Output
------

456
hello: 456
testing: 123
*/
```

**Basic Problems**:

- UVa 10226 - Hardwood Species
- UVa 11286 - Conformity
- UVa 11572 - Unique Snowflakes

## Sets

A data structure that stores unique elements in a sorted order. The same element will not appear twice in a set.

- Reference: http://www.cplusplus.com/reference/set/set/
- Complexity: `O(log n)` for retrieval, `O(log n)` for insertion

## Multisets

A special set that allows for multiple identical elements.

- Reference: http://www.cplusplus.com/reference/set/multiset/
- Complexity: Same as Set

Important Functions:
- `set.empty()`: Test if container is empty.
- `set.size()`: Return size of set.
- `set.insert(el)`: Inserts the element into the set.
- `set.find(el)`: Returns an iterator to the element.
- `set.count(el)`: Returns the number of items in the set with value “el.”
- `set.erase(val)`: Erases **all instances** of `val` from the (multi)set.
- `set.erase(set.find(val))`: Erases **one instance** of `val` from the multiset.

**Multiset Warning:** If you want to remove a value *once*, make sure to use `multiset.erase(multiset.find(val))` rather than `multiset.erase(val)`. The latter will remove *all* instances of `val`.

Example:

```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
  set<int> mySet;
  mySet.insert(1);
  mySet.insert(3);
  cout << mySet.count(1) << " " << mySet.count(2) << endl; // 1 0

  multiset<int> myMultiSet;
  myMultiSet.insert(1);
  myMultiSet.insert(1);
  myMultiSet.insert(1);
  cout << myMultiSet.count(1) << endl; // 3

  myMultiSet.erase(myMultiSet.find(1));
  cout << myMultiSet.count(1) << endl; // 2

  myMultiSet.erase(1);
  cout << myMultiSet.count(1) << endl; // 0, NOT 1!!!!

  myMultiSet.insert(2);
  myMultiSet.insert(2);
  myMultiSet.insert(2);
  for (auto x : myMultiSet) {
    cout << x << " ";
    // outputs 2 2 2
  }
}
```

**Set/Multiset Problems**:

- UVa 00978 - Lemmings Battle
- UVa 11136 - Hoax or what
- UVa 11849 - CD

(actually I'm not sure if they're set problems or multiset problems)