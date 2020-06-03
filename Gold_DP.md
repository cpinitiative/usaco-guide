# Gold - Dynamic Programming (DP)
Author: Michael Cao

## Prerequisites
Assumes familiarity with recursion, Bit Operations (for Bitmask DP), and Trees (for Tree DP).

## Introduction to DP
* CPH Chapter 7
* [Topcoder DP]([https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/](https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/))
* [HackerRank DP]([https://www.hackerrank.com/topics/dynamic-programming](https://www.hackerrank.com/topics/dynamic-programming))

## Classical DP Problems
Tutorials for most problems (excluding USACO) can be found on Chapter 7 of CPH.
* Knapsack
	* [Unbounded]([https://www.hackerrank.com/challenges/unbounded-knapsack/problem](https://www.hackerrank.com/challenges/unbounded-knapsack/problem))
	* [0/1]([https://www.hackerrank.com/contests/srin-aadc03/challenges/classic-01-knapsack/problem](https://www.hackerrank.com/contests/srin-aadc03/challenges/classic-01-knapsack/problem))
	* [Large Capacity + Small Values]([https://atcoder.jp/contests/dp/tasks/dp_e](https://atcoder.jp/contests/dp/tasks/dp_e))
	* [Talent Show]([http://www.usaco.org/index.php?page=viewproblem2&cpid=839](http://www.usaco.org/index.php?page=viewproblem2&cpid=839))
* Longest Increasing Subsequence
	* [LIS in Quadratic Time]([https://leetcode.com/problems/longest-increasing-subsequence/](https://leetcode.com/problems/longest-increasing-subsequence/))
		* Try to improve to $O(NlogN)$. 
	* [Sort It Out]([http://www.usaco.org/index.php?page=viewproblem2&cpid=865](http://www.usaco.org/index.php?page=viewproblem2&cpid=865))
* Coin Change
	* [Unordered]([https://cses.fi/problemset/task/1635](https://cses.fi/problemset/task/1635))
	* [Ordered]([https://cses.fi/problemset/task/1636](https://cses.fi/problemset/task/1636))
	* [Minimum Coins]([https://cses.fi/problemset/task/1634](https://cses.fi/problemset/task/1634))
* Paths on a Grid
	* [Count Paths](https://atcoder.jp/contests/dp/tasks/dp_h)
	* [Palindromic Paths]([http://www.usaco.org/index.php?page=viewproblem2&cpid=553](http://www.usaco.org/index.php?page=viewproblem2&cpid=553))
* Edit Distance
	* [Standard]([https://www.hackerrank.com/contests/cse-830-homework-3/challenges/edit-distance](https://www.hackerrank.com/contests/cse-830-homework-3/challenges/edit-distance))
	* [Landscaping (Silver)]([http://www.usaco.org/index.php?page=viewproblem2&cpid=126](http://www.usaco.org/index.php?page=viewproblem2&cpid=126))
* Longest Common Subsequence
	* [Standard]([https://leetcode.com/problems/longest-common-subsequence/](https://leetcode.com/problems/longest-common-subsequence/))

## Tree DP
* Tutorials:
	* [DP on Trees (Codeforces)]([https://codeforces.com/blog/entry/20935](https://codeforces.com/blog/entry/20935))
* Problems
	* [Subtree]([https://atcoder.jp/contests/dp/tasks/dp_v](https://atcoder.jp/contests/dp/tasks/dp_v))
	* [Independent Set]([https://atcoder.jp/contests/dp/tasks/dp_p](https://atcoder.jp/contests/dp/tasks/dp_p))
	* [Barn Painting]([http://www.usaco.org/index.php?page=viewproblem2&cpid=766](http://www.usaco.org/index.php?page=viewproblem2&cpid=766))
	* [Delegation]([http://usaco.org/index.php?page=viewproblem2&cpid=1019](http://usaco.org/index.php?page=viewproblem2&cpid=1019))

## Bitmask DP
* Tutorials:
	* CPH Chapter 10
	* [Dynamic Programming Over Subsets (Codeforces)]([https://codeforces.com/blog/entry/337](https://codeforces.com/blog/entry/337))
	*  [Dynamic Programming and Bit Masking (HackerEarth)]([https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/](https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/))
* Problems:
	* [Moovie Moving]([http://www.usaco.org/index.php?page=viewproblem2&cpid=515](http://www.usaco.org/index.php?page=viewproblem2&cpid=515))
	* [Matching]([https://atcoder.jp/contests/dp/tasks/dp_o](https://atcoder.jp/contests/dp/tasks/dp_o))
	* [Square Subsets]([https://codeforces.com/contest/895/problem/C](https://codeforces.com/contest/895/problem/C))
	* [Guards in the Storehouse]([https://codeforces.com/problemset/problem/845/F](https://codeforces.com/problemset/problem/845/F))

## Practice Problems
* [Atcoder DP Contest (Extremely Good)]([https://atcoder.jp/contests/dp/tasks](https://atcoder.jp/contests/dp/tasks))
* [CSES DP Section]([https://cses.fi/problemset/list/](https://cses.fi/problemset/list/))
* USACO (Not Ordered By Difficulty)
	* [Exercise (OEIS-able)]([http://www.usaco.org/index.php?page=viewproblem2&cpid=1043](http://www.usaco.org/index.php?page=viewproblem2&cpid=1043))
	* [Delegation]([http://www.usaco.org/index.php?page=viewproblem2&cpid=1019](http://www.usaco.org/index.php?page=viewproblem2&cpid=1019))
	* [Time is Mooney]([http://www.usaco.org/index.php?page=viewproblem2&cpid=993](http://www.usaco.org/index.php?page=viewproblem2&cpid=993))
	* [Mortal Cowmbat]([http://usaco.org/index.php?page=viewproblem2&cpid=971](http://usaco.org/index.php?page=viewproblem2&cpid=971))
	* [Snakes]([http://www.usaco.org/index.php?page=viewproblem2&cpid=945](http://www.usaco.org/index.php?page=viewproblem2&cpid=945))
	* [Painting the Barn]([http://usaco.org/index.php?page=viewproblem2&cpid=923](http://usaco.org/index.php?page=viewproblem2&cpid=923))
	* [Cow Poetry (Fast Exponentiation)]([http://usaco.org/index.php?page=viewproblem2&cpid=897](http://usaco.org/index.php?page=viewproblem2&cpid=897))
	* [Teamwork]([http://usaco.org/index.php?page=viewproblem2&cpid=863](http://usaco.org/index.php?page=viewproblem2&cpid=863))
	* [Talent Show]([http://www.usaco.org/index.php?page=viewproblem2&cpid=839](http://www.usaco.org/index.php?page=viewproblem2&cpid=839))
	* [Taming the Herd]([http://www.usaco.org/index.php?page=viewproblem2&cpid=815](http://www.usaco.org/index.php?page=viewproblem2&cpid=815))
	* [Stamp Painting]([http://www.usaco.org/index.php?page=viewproblem2&cpid=791](http://www.usaco.org/index.php?page=viewproblem2&cpid=791))
	* [Why Did The Cow Cross the Road I]([http://www.usaco.org/index.php?page=viewproblem2&cpid=717](http://www.usaco.org/index.php?page=viewproblem2&cpid=717))
	* [Why Did The Cow Cross the Road II]([http://www.usaco.org/index.php?page=viewproblem2&cpid=718](http://www.usaco.org/index.php?page=viewproblem2&cpid=718))
	* [Hoof Paper Scissors]([http://www.usaco.org/index.php?page=viewproblem2&cpid=694](http://www.usaco.org/index.php?page=viewproblem2&cpid=694))
	* [Cow Checklist]([http://www.usaco.org/index.php?page=viewproblem2&cpid=670](http://www.usaco.org/index.php?page=viewproblem2&cpid=670))
	* [Circular Barn Revisited]([http://www.usaco.org/index.php?page=viewproblem2&cpid=622](http://www.usaco.org/index.php?page=viewproblem2&cpid=622))
	* [Radio Contact]([http://www.usaco.org/index.php?page=viewproblem2&cpid=598](http://www.usaco.org/index.php?page=viewproblem2&cpid=598))
	* [248]([http://www.usaco.org/index.php?page=viewproblem2&cpid=647](http://www.usaco.org/index.php?page=viewproblem2&cpid=647))
	* [Fruit Feast]([http://www.usaco.org/index.php?page=viewproblem2&cpid=574](http://www.usaco.org/index.php?page=viewproblem2&cpid=574))
* [Codeforces DP Problem List]([http://codeforces.com/blog/entry/325](http://codeforces.com/blog/entry/325))
