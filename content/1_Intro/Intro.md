---
id: intro
title: Introduction
author: Nathan Wang, Benjamin Qi, Darren Yao
description: Welcome to the guide! We'll introduce what programming competitions are and how this guide is organized.
---

A [programming competition](https://en.wikipedia.org/wiki/Competitive_programming) generally lasts for several hours and consists of a set of problems. These problems are not open problems; they have already been solved by the problem writers and testers and are designed to be solved in the short timeframe of a contest. In general, each problem in competitive programming is solved with a two-step process: 

 1. coming up with the algorithm, which involves problem solving skills and intuition
 2. implementing the algorithm, which requires programming skills to translate the algorithm into working code.

For each problem, you submit the completed code to a grader, which checks the answers calculated by your program against a set of predetermined test cases. For each problem, you are given a time limit (usually 2 seconds) and a memory limit (usually 256 [megabytes](https://en.wikipedia.org/wiki/Megabyte)) that your program must satisfy.

For those of you with experience in software development, note that competitive programming is quite different, as the goal is to write programs that compute the correct answer, run quickly, and can be implemented quickly. Note that nowhere was maintainability of code mentioned. You don't need to bother documenting your code because it only needs to be readable to you during the contest.

<optional-content title="More Information">

 - Videos
   - [William Lin - What is Competitive Programming?](https://www.youtube.com/watch?time_continue=1&v=ueNT-w7Oluw)
   - [Kamil Debowski - Interview with a Competitive Programmer](https://www.youtube.com/watch?v=F4rykKLcduI)
     - [Task](https://open.kattis.com/contests/mcpc19open/problems/basketballoneonone) that was mentioned in video.
 - Reading
   - [PAPC Ch 1](http://www.csc.kth.se/~jsannemo/slask/main.pdf)
   
</optional-content>

## USACO Contest Format

The [USA Computing Olympiad](http://www.usaco.org/index.php?page=contests) is a national programming competition that occurs four times a year, with December, January, February, and US Open (March) contests. The regular contests are four hours long, and the US Open is five hours long. Each contest contains three problems. Solutions are evaluated and scored against a set of predetermined test cases that are not visible to the student. Scoring is out of 1000 points, with each problem being weighted equally (\~333 points). There are four divisions of contests: Bronze, Silver, Gold, and Platinum. After each contest, students who meet the contest-dependent cutoff for promotion will compete in the next division for future contests.

## Guide Languages

- For Bronze and Silver, we will provide code snippets in C++, Java, and Python.
- For Gold, we will provide code snippets in C++ and Java and (sometimes) Python.
- For Platinum, code snippets may only be provided in one language (typically either C++ or Java).

All material in this guide will be grouped into **modules** such as the one you're reading right now.

### Guidelines

 - For Bronze, Silver, and Gold contestants, we aim to be a "**one stop shop**," meaning that this is the only site you have to use to be exposed to most (if not all) of the topics required for Bronze - Gold.
   - Hopefully, this will reduce the amount of time you have to spend finding quality training resources.
 - "**Don’t Reinvent the Wheel**:" we'll link to online resources that already exist whenever possible instead of rewriting tutorials ourselves.
 - **Not *just* a collection of links**
   - There are plenty of resources out there, but we do not expect you to click through all of them to find the information you want. 
   - This means in addition to the link itself, we will try our best to provide information about what the link is about as well as the quality of the link.
   - We won't write something like "learn DP, here are 50 links that can teach you that." Instead, we will write "learn DP by first reading this one article, then reading this other article. For reference, here are some other links you can explore as you wish."
 - For Platinum contestants, there are too many topics for us to effectively cover all of them. We'll try our best to cover the main topics, but if you want to do well in Platinum, you will have to find additional resources on your own in addition to this site.
   - Platinum modules may have more vague explanations compared to earlier divisions. If you're confused, you'll have to research the topic more on your own.

### Lesson

The first part of a module is the lesson.

 - Consists of text, videos, and simple problems.
 - Goal is to introduce you to the concept.
 - Everything should be completed in order.
 - Any problems here will generally be pure implementation.

### Practice

 - Link the relevant past USACO problems (and other recommended problems). 
 - Problems should be sorted in order of how they are recommended be completed. 
   - Add comments regarding difficulty and / or solution sketches.
 - Possibly include additional problems.