---
id: containers-silver
title: Built-In C++ Containers (Silver)
author: Darren Yao
---

### [Deques](http://www.cplusplus.com/reference/deque/deque/)

A deque (usually pronounced "deck") stands for double ended queue and is a combination of a stack and a queue, in that it supports $O(1)$ insertions and deletions from both the front and the back of the deque. The four methods for adding and removing are `push_back`, `pop_back`, `push_front`, and `pop_front`. Not very common in Bronze / Silver.

```cpp
deque<int> d;
d.push_front(3); // [3]
d.push_front(4); // [4, 3]
d.push_back(7); // [4, 3, 7]
d.pop_front(); // [3, 7]
d.push_front(1); // [1, 3, 7]
d.pop_back(); // [1, 3]
```

### [Priority Queues](http://www.cplusplus.com/reference/queue/priority_queue/)

A priority queue supports the following operations: insertion of elements, deletion of the element considered highest priority, and retrieval of the highest priority element, all in $O(\log n)$ time according to the number of elements in the priority queue. Priority is based on a comparator function, but by default the highest element is at the top of the priority queue. The priority queue is one of the most important data structures in competitive programming, so make sure you understand how and when to use it. 

```cpp
priority_queue<int> pq;
pq.push(7); // [7]
pq.push(2); // [2, 7]
pq.push(1); // [1, 2, 7]
pq.push(5); // [1, 2, 5, 7]
cout << pq.top() << endl; // 7
pq.pop(); // [1, 2, 5]
pq.pop(); // [1, 2]
pq.push(6); // [1, 2, 6]
```

## Sets and Maps

A set is a collection of objects that contains no duplicates. There are two types of sets: unordered sets (`unordered_set` in C++), and ordered set (`set` in C++).

### Unordered Sets

The unordered set works by hashing, which is assigning a unique code to every variable/object which allows insertions, deletions, and searches in $O(1)$ time, albeit with a high constant factor, as hashing requires a large constant number of operations. However, as the name implies, elements are not ordered in any meaningful way, so traversals of an unordered set will return elements in some arbitrary order. The operations on an unordered set are `insert`, which adds an element to the set if not already present, `erase`, which deletes an element if it exists, and `count`, which returns 1 if the set contains the element and 0 if it doesn't.

```cpp
unordered_set<int> s;
s.insert(1); // [1]
s.insert(4); // [1, 4] in arbitrary order
s.insert(2); // [1, 4, 2] in arbitrary order
s.insert(1); // [1, 4, 2] in arbitrary order
// the add method did nothing because 1 was already in the set
cout << s.count(1) << endl; // 1
set.erase(1); // [2, 4] in arbitrary order
cout << s.count(5) << endl; // 0
s.erase(0); // [2, 4] in arbitrary order
// if the element to be removed does not exist, nothing happens

for(int element : s){
    cout << element << " ";
}
cout << endl;
// You can iterate through an unordered set, but it will do so in arbitrary order
```

### [Ordered Sets](http://www.cplusplus.com/reference/set/set/)

The second type of set data structure is the ordered or sorted set. Insertions, deletions, and searches on the ordered set require $O(\log n)$ time, based on the number of elements in the set. As well as those supported by the unordered set, the ordered set also allows four additional operations: `begin()`, which returns an iterator to the lowest element in the set, `end()`, which returns an iterator to the highest element in the set, `lower_bound`, which returns an iterator to the least element greater than or equal to some element `k`, and `upper_bound`, which returns an iterator to the least element strictly greater than some element `k`.

```cpp
set<int> s;
s.insert(1); // [1]
s.insert(14); // [1, 14]
s.insert(9); // [1, 9, 14]
s.insert(2); // [1, 2, 9, 14]
cout << *s.upper_bound(7) << '\n'; // 9
cout << *s.upper_bound(9) << '\n'; // 14
cout << *s.lower_bound(5) << '\n'; // 9
cout << *s.lower_bound(9) << '\n'; // 9
cout << *s.begin() << '\n'; // 1
auto it = s.end();
cout << *(--it) << '\n'; // 14
s.erase(s.upper_bound(6)); // [1, 2, 14]
```

The primary limitation of the ordered set is that we can't efficiently access the $k^{th}$ largest element in the set, or find the number of elements in the set greater than some arbitrary $x$. These operations can be handled using a data structure called an order statistic tree (see Gold - Binary Indexed Trees).

### [Maps](http://www.cplusplus.com/reference/map/map/)

A map is a set of ordered pairs, each containing a key and a value. In a map, all keys are required to be unique, but values can be repeated. Maps have three primary methods: one to add a specified key-value pairing, one to retrieve the value for a given key, and one to remove a key-value pairing from the map. Like sets, maps can be unordered (`unordered_map` in C++) or ordered (`map` in C++). In an unordered map, hashing is used to support $O(1)$ operations. In an ordered map, the entries are sorted in order of key. Operations are $O(\log n)$, but accessing or removing the next key higher or lower than some input `k` is also supported.

### Unordered Maps

In an unordered map `m`, the `m[key] = value` operator assigns a value to a key and places the key and value pair into the map. The operator `m[key]` returns the value associated with the key. If the key is not present in the map, then `m[key]` is set to 0. The `count(key)` method returns the number of times the key is in the map (which is either one or zero), and therefore checks whether a key exists in the map. Lastly, `erase(key)` and `erase(it)` removes the map entry associated with the specified key or iterator. All of these operations are $O(1)$, but again, due to the hashing, this has a high constant factor.

```cpp
unordered_map<int, int> m;
m[1] = 5; // [(1, 5)]
m[3] = 14; // [(1, 5); (3, 14)]
m[2] = 7; // [(1, 5); (3, 14); (2, 7)]
m.erase(2); // [(1, 5); (3, 14)]
cout << m[1] << '\n'; // 5
cout << m.count(7) << '\n' ; // 0
cout << m.count(1) << '\n' ; // 1
```

### Ordered Maps

The ordered map supports all of the operations that an unordered map supports, and additionally supports `lower_bound` and `upper_bound`, returning the iterator pointing to the lowest entry not less than the specified key, and the iterator pointing to the lowest entry strictly greater than the specified key respectively.

```cpp
map<int, int> m;
m[3] = 5; // [(3, 5)]
m[11] = 4; // [(3, 5); (11, 4)]
m[10] = 491; // [(3, 5); (10, 491); (11, 4)]
cout << m.lower_bound(10)->first << " " << m.lower_bound(10)->second << '\n'; // 10 491
cout << m.upper_bound(10)->first << " " << m.upper_bound(10)->second << '\n'; // 11 4
m.erase(11); // [(3, 5); (10, 491)]
if (m.upper_bound(10) == m.end())
{
    cout << "end" << endl; // Prints end
}
```

A note on unordered sets and maps: In USACO contests, they're generally fine, but in CodeForces contests, you should always use sorted sets and maps. This is because the built-in hashing algorithm is vulnerable to pathological data sets causing abnormally slow runtimes, in turn causing failures on some test cases (see [neal's blog](https://codeforces.com/blog/entry/62393)). Alternatively, use a different hashing algorithm.

### [Multisets](http://www.cplusplus.com/reference/set/multiset/)

Lastly, there is the multiset, which is essentially a sorted set that allows multiple copies of the same element. In addition to all of the regular set operations, the multiset `count()` method returns the number of times an element is present in the multiset. (Actually, you shouldn't use `count()` because this takes time **linear** in the number of matches.)


The `begin()`, `end()`, `lower_bound()`, and `upper_bound()` operations work the same way they do in the normal sorted set. 

**Warning:** If you want to remove a value *once*, make sure to use `multiset.erase(multiset.find(val))` rather than `multiset.erase(val)`. The latter will remove *all* instances of `val`.

```cpp
multiset<int> ms;
ms.insert(1); // [1]
ms.insert(14); // [1, 14]
ms.insert(9); // [1, 9, 14]
ms.insert(2); // [1, 2, 9, 14]
ms.insert(9); // [1, 2, 9, 9, 14]
ms.insert(9); // [1, 2, 9, 9, 9, 14]
cout << ms.count(4) << '\n'; // 0
cout << ms.count(9) << '\n'; // 3
cout << ms.count(14) << '\n'; // 1
ms.erase(ms.find(9));
cout << ms.count(9) << '\n'; // 2
ms.erase(9);
cout << ms.count(9) << '\n'; // 0
```
