---
id: containers
title: Built-In C++ Containers
author: Darren Yao
description: Introduces C++ containers that are frequently used in competitive programming.
---

## Additional Resources

 - CPH 4 (Data Structures)
 - [PAPS 3.1, 3.5, 6.1](https://www.csc.kth.se/~jsannemo/slask/main.pdf)

# Data Structures

A **data structure** determines how data is stored (is it sorted? indexed? what operations does it support?). Each data structure supports some operations efficiently, while other operations are either inefficient or not supported at all. 

The C++ [standard library data structures](http://www.cplusplus.com/reference/stl/) are designed to store any type of data. We put the desired data type within the `<>` brackets when declaring the data structure, as follows:

```cpp
vector<string> v;
```

This creates a `vector` structure that only stores objects of type `string`.

For our examples below, we will primarily use the `int` data type, but note that you can use any data type including `string` and user-defined structures. 

Essentially every standard library data structure supports the `size()` method, which returns the number of elements in the data structure, and the `empty()` method, which returns `true` if the data structure is empty, and `false` otherwise. 

## Dynamic Arrays

You're probably already familiar with regular (static) arrays. Now, there are also dynamic arrays (`vector` in C++) that support all the functions that a normal array does, and can resize itself to accommodate more elements. In a dynamic array, we can also add and delete elements at the end in $O(1)$ time.

For example, the following code creates a dynamic array and adds the numbers $1$ through $10$ to it:

```cpp
vector<int> v;
for(int i = 1; i <= 10; i++){
    v.push_back(i);
}
```

When declaring a dynamic array we can give it an initial size, so it doesn't resize itself as we add elements to it. The following code initializes a `vector` with initial size $30$:

```cpp
vector<int> v(30);
```

However, we need to be careful that we only add elements to the end of the `vector`; insertion and deletion in the middle of the `vector` is $O(n)$.

```cpp
vector<int> v;
v.push_back(2); // [2]
v.push_back(3); // [2, 3]
v.push_back(7); // [2, 3, 7]
v.push_back(5); // [2, 3, 7, 5]
v[1] = 4; // sets element at index 1 to 4 -> [2, 4, 7, 5]
v.erase(v.begin() + 1); // removes element at index 1 -> [2, 7, 5]
// this remove method is O(n); to be avoided
v.push_back(8); // [2, 7, 5, 8]
v.erase(v.end()-1); // [2, 7, 5]
// here, we remove the element from the end of the list; this is O(1).
v.push_back(4); // [2, 7, 5, 4]
v.push_back(4); // [2, 7, 5, 4, 4]
v.push_back(9); // [2, 7, 5, 4, 4, 9]
cout << v[2]; // 5
v.erase(v.begin(), v.begin()+3); // [4, 4, 9]
// this erases the first three elements; O(n)
```

To iterate through a static or dynamic array, we can use either the regular for loop or the for-each loop.

```cpp
vector<int> v;
v.push_back(1); v.push_back(7); v.push_back(4); v.push_back(5); v.push_back(2);
int arr[] = {1, 7, 4, 5, 2};
for(int i = 0; i < v.size(); i++){
    cout << v[i] << " ";
}
cout << endl;
for(int element : arr){
    cout << element << " ";
}
cout << endl;
```
 
In order to sort a dynamic array, use `sort(v.begin(), v.end())` (or `sort(begin(v),end(v))`), whereas static arrays require `sort(arr, arr + N)` where $N$ is the number of elements to be sorted. The default sort function sorts the array in ascending order.
 
In array-based contest problems, we'll use one-, two-, and three-dimensional static arrays most of the time. However, we can also have static arrays of dynamic arrays, dynamic arrays of static arrays, and so on. Usually, the choice between a static array and a dynamic array is just personal preference.

## Iterators

An **iterator** allows you to traverse a container by pointing to an object within the container (although they are **not** the same thing as pointers). For example, `vector.begin()` returns an iterator pointing to the first element of the vector. Apart from the standard way of traversing a vector (by treating it as an array), you can also use iterators: 

```cpp
for (vector<int>::iterator it = myvector.begin(); it != myvector.end(); ++it) {
    cout << *it; //prints the values in the vector using the pointer
}
```

C++11 and later versions can automatically infer the type of an object if you use the keyword `auto`. This means that you can replace `vector<int>::iterator` with `auto` or `int` with `auto` in the for-each loop.

```cpp
for(auto element : v) {
    cout << element; //prints the values in the vector
}
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
