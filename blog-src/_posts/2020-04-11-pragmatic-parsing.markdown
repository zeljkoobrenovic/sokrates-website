---
layout: post
title:  "Analysis: Pragmatic Source Code Parsing"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: pragmatic-parsing
excerpt:
---

"pragmatic: dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations"

Sokrates is a practical source code analysis tool. Sokrates does not aim at replicating the level of details of many other tools, such as SonarQube. Instead, it leans on a few basic principles and techniques to get insights about your code without building a massive and complex tool.

### The Challenge

The first thing I have learned pretty fast when building Sokrates is that it is extremely tough to build a proper fully-featured parser for any programming language.  Any software analysis tool needs a handful of such parsers. Contemporary software projects frequently include a dozen or more of different programming languages and dialects.

So how have I solved this problem? By not building fully-featured parsers.

 I've also learned when building Sokrates that you can go a long way with using a few simple, heuristic parsing techniques. You may lose details in the process, but if you focus on the essence, such simple heuristic techniques can offer you incredible value for money. In many instances, you may get the same details as more complex and expensive tools. And performance-wise, simple heuristic techniques often work order or magnitude faster.

In the rest of this chapter, we outline a few of these techniques. The following is useful for those who want to contribute or use Sokrates source code. But it may also offer few insights into power and limitation of Sokrates analyses.

### Know What You Want. And Why.

E.g. dependencies between units, from which line a dependency has been made to which unit
vs. dependencies between files and components. The second is much simpler, and for many architectural analyses sufficient (or even better as it reduced necessary details)

I've never needed such a level of detial in practice.

### Use What is Already Available

Counting files, folders, file sizes

### Cleaning of the Code

### Limit the Search to Prevent Accidental DoS

### Extracting Unit Based on Balanced Brackets

### Extracting Unit Based on Assumption of Proper Formatting
