---
slug: /intro/getting-started
title: Getting Started
author: Nathan Wang
order: 1
---


<ul class="syllabus-only">
  <li>Contest Format</li>
  <li>Choosing a Language</li>
  <li>Practicing and Debugging</li>
  <li>Contest Strategies</li>
</ul>

<!-- END DESCRIPTION -->

Todo:
- Video clip from Brian Dean
  - Explains what USACO is all about & how it works

## Choosing a Language

If you're in Bronze, **Don't worry about the language!** If you already know a language, just use it. You can always switch languages down the road.

In general, we recommend the following:

- For Bronze contestants, any of C++/Java/Python will do.
  - If you know multiple languages, we recommend you pick C++ over Java, and Java over Python.
- For Silver, Gold, and Platinum, we recommend C++/Java.
  - If you know multiple languages, we recommend you pick C++ over Java.

Note: A majority of high level contestants use C++ and Java. Between those, C++ is more popular.

Keep in mind that it's easy to switch languages down the road! Don't get caught up on which language to choose. Just pick the one you feel most comfortable with!

## Why C++?

Although both Python and Java receive two times the C++ time limit in USACO, this is not the case for other websites (ex. CodeForces). Even with the extended time limits, Python and Java sometimes have trouble passing time limits.

  - Rewriting the C++ solution for [Wormsort](http://www.usaco.org/index.php?page=viewproblem2&cpid=992) in Python gets TLE on 2/10 cases. 

    <details>

    <summary>Python3 8/10</summary>

    ```py
    # 8/10 test cases ...

    fin = open("wormsort.in","r")
    lines = [line for line in fin]
    N,M = map(int,lines[0].split())
    p = list(map(lambda x: int(x)-1,lines[1].split()))

    ed = []
    for i in range(2,len(lines)):
      a,b,w = map(int,lines[i].split())
      a -= 1
      b -= 1
      ed.append([w,a,b])
    ed.sort()
    ed.reverse()

    adj = [[] for i in range(N)]
    vis = [0 for i in range(N)]
    cnt = 0

    def dfs(x):
      global cnt
      if vis[x] != 0:
        return
      vis[x] = cnt
      for i in adj[x]:
        dfs(i)

    def ok(mid):
      global cnt
      for i in range(N):
        vis[i] = 0
        adj[i].clear()
      for i in range(mid):
        a,b = ed[i][1],ed[i][2]
        adj[a].append(b)
        adj[b].append(a)
      for i in range(N):
        if vis[i] == 0:
          cnt += 1
          todo = [i]
          ind = 0
          while ind < len(todo):
            x = todo[ind] 
            ind += 1
            vis[x] = cnt
            for i in adj[x]:
              if vis[i] == 0:
                vis[i] = -cnt
                todo.append(i)
      ok = True
      for i in range(N):
        if vis[i] != vis[p[i]]:
          ok = False
      return ok

    lo,hi = 0,M
    while lo < hi:
      mid = (lo+hi)//2
      if ok(mid):
        hi = mid
      else:
        lo = mid+1

    fout = open("wormsort.out","w")

    fout.write(str(-1 if lo == 0 else ed[lo-1][0]))
    fout.write('\n')
    ```

    </details>

  - A similar solution in Java requires almost 3s, which is fairly close to the time limit of 4s.

    <details>

    <summary>Java</summary>

    ```java
    import java.io.*; // from Nick Wu
    import java.util.*;
    public class wormsort {
      public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new FileReader("wormsort.in"));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        loc = new int[n];
        component = new int[n];
        edges = new LinkedList[n];
        for(int i = 0; i < n; i++) edges[i] = new LinkedList<>();
        lhs = new int[m];
        rhs = new int[m];
        weight = new int[m];
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++) loc[i] = Integer.parseInt(st.nextToken())-1;
        for(int i = 0; i < m; i++) {
          st = new StringTokenizer(br.readLine());
          lhs[i] = Integer.parseInt(st.nextToken())-1;
          rhs[i] = Integer.parseInt(st.nextToken())-1;
          weight[i] = Integer.parseInt(st.nextToken());
        }
        br.close();
        int minW = 0;
        int maxW = 1000000001;
        while(minW != maxW) {
          int mid = (minW + maxW + 1) / 2;
          if(valid(mid)) minW = mid;
          else maxW = mid-1;
        }
        if(minW > 1e9) minW = -1;
        PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("wormsort.out")));
        pw.println(minW);
        pw.close();
      }
      static int[] loc, lhs, rhs, weight;
      static LinkedList<Integer>[] edges;
      static int[] component;
      private static void dfs(int curr, int label) {
        if(component[curr] == label) return;
        component[curr] = label;
        for(int child: edges[curr]) dfs(child, label);
      }
      private static boolean valid(int minW) {
        Arrays.fill(component, -1);
        for(int i = 0; i < edges.length; i++) edges[i].clear();
        for(int i = 0; i < lhs.length; i++) {
          if(weight[i] >= minW) {
            edges[lhs[i]].add(rhs[i]);
            edges[rhs[i]].add(lhs[i]);
          }
        }
        int numcomps = 0;
        for(int i = 0; i < component.length; i++) {
          if(component[i] < 0) {
            dfs(i, numcomps++);
          }
        }
        for(int i = 0; i < loc.length; i++) {
          if(component[i] != component[loc[i]]) return false;
        }
        return true;
      }
    }
    ```

    </details>

Also, Java lacks features such as `#define`, `typedef`, and `auto` that are present in C++ (which some contestants use extensively).