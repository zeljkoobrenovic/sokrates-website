---
layout: post
title:  "Intro: Sokrates Philosophy"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: philosophy
excerpt:
---

Sokrates is an experimental tool that I have build both as a way to deal with issues in my daily practice, as well as to explore how far a person can go by following a simple approach to building code analysis tools. Sokrates implements my vision on how to document and analyze software architectures of complex and simple software systems.

Sokrates is for anyone interested in software architecture in practice. Sokrates follows several premises (borrowing last two from Grady Booch):

* Any software architecture documentation disconnected from source code is doomed to become outdated and useless quickly.
* The best formal and unambiguous specification of a software-intensive system is its executable code.
* However, executable code as a specification is insufficient for visualizing, reasoning about, understanding, and communicating about that system.

Sokrates provides a pragmatic way to describe critical elements of software architectures and connect them explicitly to the source code. Based on a formal description of different software architecture aspects, Sokrates generates reports and visualization to help you reason, understand, and communicate about the software system.

### Know the Basic of Your Codebase

On the one hand, you can use Sokrates as a bottom-up, reverse engineering tool, deriving architectural views from existing source code. On the other hand, you can use Sokrates in a top-down fashion, as a control tool monitoring deviations of source code from defining architectural rules.

Sokrates primary about being able to get quick answers to basic, simple questions about your source code:

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

As a control tools, Sokrates can serve as an early warning system around these basic measurments:
* Duplication above some threshold,
* System or a a component becoming too big
* Units becoming more complex
* Unwanted dependencies among components are introduced.


### Who Should Use Sokrates

While the general answer to this questions is "anyone interested in software architecture in practice," my goal was to create a tool that ordinary software developers and software architects could use in daily work, regardless of how big or small is their project and what other tools they use.

### Use Metrics to Start a Discussion, Not to Kill It

## About the Name

Examined life

Exploration, dialog with the source code


### What Sokrates Is (Not)?

Sokrates is more of a text analysis tool. Sokrates borrows ideas from code spelunking tools, in particular, grep, adding structure on top of regex source code searches.

Sokrates comes with both command-line interface and interactive GUI code explorer.

In these aspects, Sokrates differs from many other powerful tools, such as SonarQube or SIG SAT. It is not a replacement for these tools.

### Intellectual Control

Sokrates is about intellectual control. Rather than running sophisticated statistical and machine learning tools to understand your code, Sokrates goes back to the basics. You are using simple explicit expressions to understand and explain your system. "Intellectual control through simplicity" could easily be the Sokrates' main motto.

The focus on intellectual control also means that there is little "magic" in Sokrates. Everything related to Sokrates configuration and analysis ic clearly stated and explicitly described. For instance, when initializing the configuration, Sokrates uses a long list of standard configuration settings to scope the system automatically. But even though automated, Sokrates explicitly writes down the chosen configuration in the configuration file, and you can change them.


### Design Principles

Sokrates explores several areas, all centered around the idea of obtaining and maintaining intellectual control over your software projects.

Sokrates follows the following design principles:

* Transparency. Sokrates' analyses contain no magic. Sokrates reports explicitly explain why some values are there and give you lists of files to double-check the results.
* Simplicity and directness.
* Do not replace thinking.
* Power of individuals. It should be possible for an individual to build a part of Sokrates' analysis in their projects from scratch.
* Technology independence. Sokrates is technology independent, but offer helpers for configuration and analysis of standard technologies.
* Simple Portable Data Exports
* Playable / Art

### Why Art?

I use the term art rather than science and engineering because I am fed up with misuse of these terms. I borrow a lot free Donald Knuth in his emphasis on aesthetics, the creation of programs that are beautiful.

John Stuart Mill: "Art in general consists of the truths of science, arranged in the most convenient order for
    practice, instead of the order which is the most convenient for thought. "

Donald Knuth: "Computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty. A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better.”
