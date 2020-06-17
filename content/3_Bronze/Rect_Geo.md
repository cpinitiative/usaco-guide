---
id: rect-geo
title: "Rectangle Geometry"
author: Darren Yao, Michael Cao
---

"Geometry" problems on USACO Bronze are usually quite simple and limited to intersections and unions of squares or rectangles. 

<!-- END DESCRIPTION -->

 - Some only include two or three squares or rectangles, in which case you can simply draw out cases on paper. This should logically lead to a solution. 
 - Also, the coordinates typically only go up to $1000$, so a program that performs $\approx 1000^2$ operations (ex. with a nested loop) should pass.

## Rectangle Class (Java)

A useful class in `Java` for dealing with rectangle geometry problems is the built-in [`Rectangle`](https://docs.oracle.com/javase/8/docs/api/java/awt/Rectangle.html) class. To create a new rectangle, use the following constructor:

```java
//creates a rectangle with upper-left corner at (x,y) with a specified width and height
Rectangle newRect = new Rectangle(x, y, width, height); 
```

The `Rectangle` class supports numerous useful methods. 

 - `firstRect.intersects(secondRect)`: checks if two rectangles intersect.
 - `firstRect.union(secondRect)`: returns a rectangle representing the union of two rectangles.
 - `firstRect.contains(x, y)`: checks whether the integer point (x,y) exists in firstRect.
 - `firstRect.intersect(secondRect)`: returns a rectangle representing the intersection of two rectangles.

This class can often lessen the implementation needed in a lot of bronze problems and CodeForces problems.

For example, here is a nice implementation of the problem [Blocked Billboard](http://usaco.org/index.php?page=viewproblem2&cpid=759) ([editorial](http://www.usaco.org/current/data/sol_billboard_bronze_dec17.html)).

<details>

<summary>Java Solution</summary>

```java
import java.awt.Rectangle; //need to use Rectangle class

public class BlockedBillboard{
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(new File("billboard.in"));
        PrintWriter pw = new PrintWriter(new FileWriter("billboard.out"));
        Rectangle firstRect = new Rectangle(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        Rectangle secondRect = new Rectangle(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        Rectangle truck = new Rectangle(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        pw.println(getArea(firstRect) + getArea(secondRect) 
                - getArea(firstRect.intersect(truck)) - getArea(secondRect.intersect(truck)));
        pw.close();
    }
    public static long getArea(Rectangle r){
        return r.getHeight() * r.getWidth()
    }
}
```
</details>

(someone test code pls)

## Rectangle Class (C++)

Unfortunately, C++ doesn't have a built in rectangle class, so you need to write the functions yourself. Here is the solution to Blocked Billboard written in C++ (thanks, Brian Dean!).

<details>

<summary>C++ Solution</summary>

```cpp
struct Rect{
    int x1, y1, x2, y2;
    int area(Rect r){
        return (y2 - y1) * (x2 - x1);
    }
};

int intersect(Rect p, Rect q){
  int xOverlap = max(0, min(p.x2, q.x2) - max(p.x1, q.x1));
  int yOverlap = max(0, min(p.y2, q.y2) - max(p.y1, q.y1));
  return xOverlap * yOverlap;
}

int main(){
  ifstream cin ("billboard.in");
  ofstream cout ("billboard.out");

  Rect a, b, t;  // billboards a, b, and the truck
 
  cin >> a.x1 >> a.y1 >> a.x2 >> a.y2;
  cin >> b.x1 >> b.y1 >> b.x2 >> b.y2;
  cin >> t.x1 >> t.y1 >> t.x2 >> t.y2;

  cout << area(a) + area(b) - intersect(a, t) - intersect(b, t);
}
```
</details>

## Problems

 - USACO Bronze
   - [Fence Painting](http://usaco.org/index.php?page=viewproblem2&cpid=567)
     - 1D geometry!!
   - [Square Pasture](http://usaco.org/index.php?page=viewproblem2&cpid=663)
   - [Blocked Billboard](http://usaco.org/index.php?page=viewproblem2&cpid=759)
     - Rectangles
   - [Blocked Billboard II](http://usaco.org/index.php?page=viewproblem2&cpid=783)
     - Also rectangles
 - Other
   - [CF 587 (Div. 3) C: White Sheet](https://codeforces.com/contest/1216/problem/C)
     - See this code (TODO; codeforces is down) for a nice implementation using the Java Rectangle class.

