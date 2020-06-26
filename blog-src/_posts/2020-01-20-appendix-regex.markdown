---
layout: post
title:  "Appendix: Regular Expressions"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: regex
excerpt:
---

Jeff Atwood, the co-founder of StackOverflow.com, is a big fan of regular expressions. On a shortlist of his mandatory readings for software engineering is the [Regular Expression Cookbook](https://www.amazon.com/dp/1449319432/), and this is what he says:

> I may be a card carrying member of the "Keep It Simple Stupid" club, but I'm making a meteor sized exception for regular expressions. Written properly, they will save you a tremendous amount of time in string manipulation, and I've never run across a project where they didn't come in handy somewhere.
>
> Once you delve into the world of regular expressions, you may become drunk with the amazing power and potential they have, which results in things like Perl. Remember, absolute power corrupts absolutely. But it also rocks absolutely.

Thus spoke Jeff Atwood. Regular expressions have corrupted me, and in Sokrates, I am exploiting their power  shamelessly.

Sokrates is all about regular expressions. Sokrates is inspired by [**grep**](https://en.wikipedia.org/wiki/Grep), a command-line tool for searching text data sets for lines that match a regular expression. Its name comes from the ed command g/re/p (globally search for a regular expression and print matching lines). grep was originally developed for the Unix operating system, but later available for all Unix-like systems and some others.

Sokrates uses regular expressions for two main purposes:
* to filter and classify files, and
* to extract and manipulate text to name components, or identify dependencies.

Sokrates has two main use cases for regular expressions:
* Regular expressions as a filtering mechanism for files' scoping.
* Regular expressions as a part of Sokrates string transformation language (SSTL). You can use SSTL to define the names of components and identify dependencies among the components.

### File filtering and classification

As a file filtering mechanism, Sokrates uses a lot of regular expressions. Such a list has items with three values:
* a file path regex expression, defining when a file path is recognized. If left empty,
 Sokrates will include all files.
* a content regular expression, defining a string pattern that at least one line in a file needs to match. If left empty, Sokrates will include all files with matching paths regardless of their content.
* an inclusion flag. This flag describes if the item adds or removes files from the filtered lifter (if false, the rule defines an exception).

### String manipulation

### And Combined

### Regular Expressions and Software Architecture

Regular expressions are patterns. Or, more precisely, the way to define patterns. And software architecture is closely related to defining and identifying patterns in code.

Regular expressions are cross-platform, working at any text representation. This cross-platform aspect is also what makes them useful for software architecture. Software architecture patterns are not limited to any technology.

### To Probe Further

#### Online resources:

* [Regex One](https://regexone.com/)

* [Regex Crossword](https://regexcrossword.com/)

* [TryRegEX](http://tryregex.com/)

* [Regexr](https://regexr.com/)

* [Regex 101](https://regex101.com/)

* [Python Cource on Regular Expressions](https://www.python-course.eu/re.php)


#### Books:

<a href="https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/" target="_blank">
  <img src="assets/images/sokrates/book-regex-cookbook.png" width="300"
       style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);"/>
</a>

<a href="https://www.oreilly.com/library/view/mastering-regular-expressions/0596528124/" target="_blank">
  <img src="assets/images/sokrates/book-regex.png" width="300"
       style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);"/>
</a>

<a href="https://www.oreilly.com/library/view/introducing-regular-expressions/9781449338879/" target="_blank">
  <img src="assets/images/sokrates/book-regex-intro.png" width="300"
       style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);"/>
</a>