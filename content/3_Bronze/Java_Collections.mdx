---
id: collections
title: Built-In Java Collections
author: Darren Yao
description: Introduces data structures from Java Collections that are frequently used in competitive programming.
---

A **data structure** determines how data is stored (is it sorted? indexed? what operations does it support?). Each data structure supports some operations efficiently, while other operations are either inefficient or not supported at all.

Java default [`Collections`](https://docs.oracle.com/javase/7/docs/api/java/util/Collections.html) data structures are designed to store any type of object. However, we usually don't want this; instead, we want our data structures to only store one type of data, like integers, or strings. We do this by putting the desired data type within the `<>` brackets when declaring the data structure, as follows:

```java
ArrayList<String> list = new ArrayList<String>();
```

This creates an `ArrayList` structure that only stores objects of type `String`.

For our examples below, we will primarily use the `Integer` data type, but note that you can have Collections of any object type, including `Strings` , other Collections, or user-defined objects.

Collections data types always contain an `add` method for adding an element to the collection, and a `remove` method which removes and returns a certain element from the collection. They also support the `size()` method, which returns the number of elements in the data structure, and the `isEmpty()` method, which returns `true` if the data structure is empty, and `false` otherwise. 

## Dynamic Arrays

You're probably already familiar with regular (static) arrays. Now, there are also dynamic arrays (`ArrayList` in Java) that support all the functions that a normal array does, and can resize itself to accommodate more elements. In a dynamic array, we can also add and delete elements at the end in $O(1)$ time.

For example, the following code creates a dynamic array and adds the numbers $1\ldots 10$ to it:

```java
ArrayList<Integer> list = new ArrayList<Integer>();
for(int i = 1; i <= 10; i++){
    list.add(i);
}
```

When declaring a dynamic array we can give it an initial size, so it doesn't resize itself as we add elements to it. The following code initializes an `ArrayList` with initial size $30$:

```java
ArrayList<Integer> list = new ArrayList<Integer>(30);
```

However, we need to be careful that we only add elements to the end of the `ArrayList`; insertion and deletion in the middle of the `ArrayList` is $O(n)$.

```java
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(2); // [2]
list.add(3); // [2, 3]
list.add(7); // [2, 3, 7]
list.add(5); // [2, 3, 7, 5]
list.set(1, 4); // sets element at index 1 to 4 -> [2, 4, 7, 5]
list.remove(1); // removes element at index 1 -> [2, 7, 5]
// this remove method is O(n); to be avoided
list.add(8); // [2, 7, 5, 8]
list.remove(list.size()-1); // [2, 7, 5]
// here, we remove the element from the end of the list; this is $O(1)$.
System.out.println(list.get(2)); // 5
```

To iterate through a static or dynamic array, we can use either the regular for loop or the for-each loop.

```java
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(1); list.add(7); list.add(4); list.add(5); list.add(2);
int[] arr = {1, 7, 4, 5, 2};
for(int i = 0; i < list.size(); i++){ // regular
    System.out.println(list.get(i));
}
for(int element : arr){ // for-each
    System.out.println(element);
}
```
 
In order to sort a static or dynamic array, use `Arrays.sort(arr)` or `Collections.sort(list)` respectively. The default sort function sorts the array in ascending order.
 
In array-based contest problems, we'll use one-, two-, and three-dimensional static arrays most of the time. However, we can also have static arrays of dynamic arrays, dynamic arrays of static arrays, and so on. Usually, the choice between a static array and a dynamic array is just personal preference.

## Sets & Maps

A set is a collection of objects that contains no duplicates. There are two types of sets: unordered sets (`HashSet` in Java), and ordered set (`TreeSet` in Java).

### Unordered Sets

The unordered set works by hashing, which is assigning a unique code to every variable/object which allows insertions, deletions, and searches in $O(1)$ time, albeit with a high constant factor, as hashing requires a large constant number of operations. However, as the name implies, elements are not ordered in any meaningful way, so traversals of an unordered set will return elements in some arbitrary order. The operations on an unordered set are `add`, which adds an element to the set if not already present, `remove`, which deletes an element if it exists, and `contains`, which checks whether the set contains that element.

```java
HashSet<Integer> set = new HashSet<Integer>();
set.add(1); // [1]
set.add(4); // [1, 4] in arbitrary order
set.add(2); // [1, 4, 2] in arbitrary order
set.add(1); // [1, 4, 2] in arbitrary order
// the add method did nothing because 1 was already in the set
System.out.println(set.contains(1)); // true
set.remove(1); // [2, 4] in arbitrary order
System.out.println(set.contains(5)); // false
set.remove(0); // [2, 4] in arbitrary order
// if the element to be removed does not exist, nothing happens

for(int element : set){
    System.out.println(element);
}
// You can iterate through an unordered set, but it will do so in arbitrary order
```

### Ordered Sets

The second type of set data structure is the ordered or sorted set. Insertions, deletions, and searches on the ordered set require $O(\log n)$ time, based on the number of elements in the set. As well as those supported by the unordered set, the ordered set also allows four additional operations: `first`, which returns the lowest element in the set, `last`, which returns the highest element in the set, `lower`, which returns the greatest element strictly less than some element, and `higher`, which returns the least element strictly greater than it.

```java
TreeSet<Integer> set = new TreeSet<Integer>();
set.add(1); // [1]
set.add(14); // [1, 14]
set.add(9); // [1, 9, 14]
set.add(2); // [1, 2, 9, 14]
System.out.println(set.higher(7)); // 9
System.out.println(set.higher(9)); // 14
System.out.println(set.lower(5)); // 2
System.out.println(set.first()); // 1
System.out.println(set.last()); // 14
set.remove(set.higher(6)); // [1, 2, 14]
System.out.println(set.higher(23); // ERROR, no such element exists
```

The primary limitation of the ordered set is that we can't efficiently access the kth largest element in the set, or find the number of elements in the set greater than some arbitrary x. These operations can be handled using a data structure called an order statistic tree, but that is beyond the scope of this book.

### Maps

A map is a set of ordered pairs, each containing a key and a value. In a map, all keys are required to be unique, but values can be repeated. Maps have three primary methods: one to add a specified key-value pairing, one to retrieve the value for a given key, and one to remove a key-value pairing from the map. Like sets, maps can be unordered (`HashSet` in Java) or ordered (`TreeSet` in Java). In an unordered map, hashing is used to support $O(1)$ operations. In an ordered map, the entries are sorted in order of key. Operations are O(\log n), but accessing or removing the next key higher or lower than some input `k` is also supported.


### Unordered Maps

In the unordered map, the `put(key, value)` method assigns a value to a key and places the key and value pair into the map. The `get(key)` method returns the value associated with the key. The `containsKey(key)` method checks whether a key exists in the map. Lastly, `remove(key)` removes the map entry associated with the specified key. All of these operations are $O(1)$, but again, due to the hashing, this has a high constant factor.

```java
HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
map.put(1, 5); // [(1, 5)]
map.put(3, 14); // [(1, 5); (3, 14)]
map.put(2, 7); // [(1, 5); (3, 14); (2, 7)]
map.remove(2); // [(1, 5); (3, 14)]
System.out.println(map.get(1)); // 5
System.out.println(map.containsKey(7)); // false
System.out.println(map.containsKey(1)); // true
```


### Ordered Maps

The ordered map supports all of the operations that an unordered map supports, and additionally supports `firstKey` / `firstEntry` and `lastKey` /` lastEntry`, returning the lowest key/entry and the highest key/entry, as well as `higherKey` /` higherEntry` and `lowerKey` / `lowerEntry `, returning the lowest key/entry strictly higher than the specified key, or the highest key/entry strictly lower than the specified key.

```java
TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();
map.put(3, 5); // [(3, 5)]
map.put(11, 4); // [(3, 5); (11, 4)]
map.put(10, 491); // [(3, 5); (10, 491); (11, 4)]
System.out.println(map.firstKey()); // 3
System.out.println(map.firstEntry()); // (3, 5)
System.out.println(map.lastEntry()); // (11, 4)
System.out.println(map.higherEntry(4)); // (10, 491)
map.remove(11); // [(3, 5); (10, 491)]
System.out.println(map.lowerKey(4)); // 3
System.out.println(map.lowerKey(3)); // ERROR
```

A note on unordered sets and maps: In USACO contests, they're generally fine, but in CodeForces contests, you should always use sorted sets and maps. This is because the built-in hashing algorithm is vulnerable to pathological data sets causing abnormally slow runtimes, in turn causing failures on some test cases.

### Multisets

Lastly, there is the multiset, which is essentially a sorted set that allows multiple copies of the same element. While there is no `Multiset` in Java, we can implement one using the `TreeMap` from values to their respective frequencies. We declare the `TreeMap` implementation globally so that we can write functions for adding and removing elements from it.

```java
static TreeMap<Integer, Integer> multiset = new TreeMap<Integer, Integer>();

public static void main(String[] args){
    ...
}

static void add(int x){
    if(multiset.containsKey(x)){
        multiset.put(x, multiset.get(x) + 1);
    } else {
        multiset.put(x, 1);
    }
}

static void remove(int x){
    multiset.put(x, multiset.get(x) - 1);
    if(multiset.get(x) == 0){
        multiset.remove(x);
    }
}
```

The first, last, higher, and lower operations still function as intended; just use `firstKey`, `lastKey`, `higherKey`, and `lowerKey` respectively.
