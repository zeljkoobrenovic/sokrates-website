---
layout: post
title:  "Sokrates Philosophy"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: philosophy
excerpt:
---

### Sokrates is an Experiment

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
* Technology independence.

In these aspects, Sokrates differs from many other powerful tools, such as SonarQube or SIG SAT.


### Know the Basic of Your Codebase

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

### Technology Independence

Sokrates is technology independent, but offer helpers for configuration and analysis of standard technologies.


### Why Art?

I use the term art rather than science and engineering because I am fed up with misuse of these terms. I borrow a lot free Donald Knuth in his emphasis on aesthetics, the creation of programs that are beautiful.

John Stuart Mill: "Art in general consists of the truths of science, arranged in the most convenient order for
    practice, instead of the order which is the most convenient for thought. "

Donald Knuth: "Computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty. A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better.”
