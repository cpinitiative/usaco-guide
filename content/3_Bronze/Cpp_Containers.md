---
id: containers
title: Built-In C++ Containers
author: Darren Yao
---

<module-excerpt>

Introduces C++ [containers](http://www.cplusplus.com/reference/stl/) that are frequently used in competitive programming.

</module-excerpt>

A **data structure** determines how data is stored (is it sorted? indexed? what operations does it support?). Each data structure supports some operations efficiently, while other operations are either inefficient or not supported at all. 

# Containers

The C++ standard library data structures are designed to store any type of data. We put the desired data type within the `<>` brackets when declaring the data structure, as follows:

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

## Stacks and the Various Types of Queues

### [Stacks](http://www.cplusplus.com/reference/stack/stack/)

A stack is a **Last In First Out** (LIFO) data structure that supports three operations, all in $O(1)$ time:

 - `push`: adds an element to the top of the stack
 - `pop`: removes an element from the top of the stack
 - `top`: retrieves the element at the top without removing it

Think of it like a real-world stack of papers (or cards).

```cpp
stack<int> s;
s.push(1); // [1]
s.push(13); // [1, 13]
s.push(7); // [1, 13, 7]
cout << s.top() << endl; // 7
s.pop(); // [1, 13]
cout << s.size() << endl; // 2
```

### [Queues](http://www.cplusplus.com/reference/queue/queue/ )

A queue is a First In First Out (FIFO) data structure that supports three operations, all in $O(1)$ time. 

 - `push`: insertion at the back of the queue
 - `pop`, deletion from the front of the queue 
 - `front`: which retrieves the element at the front without removing it.

```cpp
queue<int> q;
q.push(1); // [1]
q.push(3); // [3, 1]
q.push(4); // [4, 3, 1]
q.pop(); // [4, 3]
cout << q.front() << endl; // 3
```
