---
layout: post
title:  "Background: Sokrates Philosophy"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: philosophy
icon: sokrates
excerpt: "\"Konw your code! The unexamined code is not worth maintaining.\" Sokrates helps you to understand your code by makes visible the size, complexity and coupling of software."
---

Sokrates helps you to understand your code by makes visible the size, complexity and coupling of software. With Sokrates, my goal was to create a tool that ordinary software developers and software architects could use in daily work, regardless of how big or small is their project and what other tools they use.

Sokrates is primary about being able to get quick answers to basic, simple questions about your source code:

* How much code do you here?
* How much of it you’ve written yourself?
* How much of it you maintain?
* Which programming languages do you use?
* What is your primary or main code, the one used to define the structure and logic of the system in production?
* What is your secondary code, the one needed to test and build your system, but itself is not running in production?
* Do you generate some part of your codebase? How?
* How duplicated is your codebase? Why?
* How big are your files?
* How many units do you have? How big are they? How complex?
* How files in your codebase depend on each other?


### Sokrates: Practical Tools vs. Experiment

Sokrates is an experimental tool that I have build both as a way to deal with issues in my daily practice, as well as to explore how far a person can go by following a simple approach to building code analysis tools. Sokrates implements my vision on how to document and analyze software architectures of complex and simple software systems.

The result of my adventure is dual. First, I think I have managed to build a pretty useful and elegant tool. And learned a lot so to share it and hopefully influence new generations of practical and straightforward software analysis tools.

Sokrates is a simple tool, but because it follows a philosophy of one designer, it hopefully has conceptual integrity at a higher level than any other powerful enterprise tools. This book describes what I have learned during my work and building Sokrates. It is, in many aspects, subjective, presenting my view, experiences, and ideas. Nevertheless, I do think that you can learn something from it. I would also like to invite others to share their experiences. If many of us do this knowledge sharing, we will create a solid base of expertise and knowledge, validated in practice, that someone could use to create a mere generic and universal overview. I also believe this, while subjective, my experiences are relevant as I have built and analyzed software systems and worked mostly in practice, but with a strong research background. Most importantly, all that I will describe is implemented in the Sokrates tool and validated or at least used in practice in complex, messy reality. While no one has conducted a formal study to prove my ideas, successful usage in daily work gives me the confidence that what I am saying is useful.

Sokrates is both a book and a software tool. The text and the software are the two sides of the same coin. As a book, Sokrates presents a summary of the lessons I have learned on how to understand source code. But without the software, such a text would be very abstract and boring. The similar also applies to the software side of Sokrates soon. It isn't easy to understand how to use Soknotes in a full power way without understanding its philosophy.

![](assets/images/sokrates/intro-book-vs-software.png)
***Figure 1**: Sokrates book and Sokrates software tool are the two sides of the same coin. Developing software enabled me to implement ideas and tests them in practice, and to build a useful, proven tools. Writing a book helped me to organizes ideas, and obtain new insights, and share the lessons learned.*

The journey to this book was through building Soknotes software. As I was using Soknetes in my daily work, I was making notes for this book. And as I have started to write the book, I also started to change some parts of Sokrates based on what I have learned. What I also hope to achieve by uniting a text and software is that you could get more than a mere manual for yet another analysis tool. Sokrates comes with more generic and universal philosophy, which I hope is useful beyond the tool. I also hope the book and the too will help you to build your tools.

## Teaching You How To Fish

*"Anyone who holds a true opinion without understanding is like a blind man on the right road." Sokrates*

*"give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime"*

With Sokrates project, including this book, I do not want to only create a tool. I want to teach you how to build such tools yourself. Whether you decided to use Sokrates, or only its ideas, I believe that understanding how the tool work will help you to better understand the analysis results, and to better use them to make decisions.


## Design Principles

Sokrates explores several areas, all centered around the idea of obtaining and maintaining intellectual control over your software projects.

Sokrates follows the following design principles:

* Transparency. Sokrates' analyses contain no magic. Sokrates reports explicitly explain why some values are there and give you lists of files to double-check the results.
* Technology independence. Sokrates is technology independent, but offer helpers for configuration and analysis of standard technologies.
* Do not replace thinking.
* Power of individuals. It should be possible for an individual to build a part of Sokrates' analysis in their projects from scratch.
* Simple Portable Data Exports
* Playable / Art
* Use Metrics to Start a Discussion, Not to Kill It


## About the Name

"[The unexamined life is not worth living](https://en.wikipedia.org/wiki/The_unexamined_life_is_not_worth_living)"

"*Socrates believed that philosophy – the love of wisdom – was the most important pursuit above all else. For some, he exemplifies more than anyone else in history the pursuit of wisdom through questioning and logical argument, by examining and by thinking. **His 'examination' of life in this way spilled out into the lives of others, such that they began their own 'examination' of life,** but he knew they would all die one day, as saying that a life without philosophy – an 'unexamined' life – was not worth living.*"


As software is eating the world, examining life nowadays inevitably means examining software. And our life, at least mine, is huge part dedicated maintaining the software. So unexamined life is not worth living for many of us means unexamined software is not worth maintaining.



