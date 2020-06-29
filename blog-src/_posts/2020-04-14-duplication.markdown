---
layout: post
title:  "Duplication Analysis"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: duplication
icon: duplication
excerpt: "For duplication, Sokrates look at places in code where there are six or more lines of code that are the same."
---

### Analyzing Duplication

For duplication, Sokrates look at places in code where there are six or more lines of code that are exactly the same. I reuse the treshold of siz lines as it is used in tools that measure duplication (e.g. see [Simian](https://www.harukizaemon.com/simian/features.html)).

code ==> cleaned code ==> list of duplications ==> aggregation

![](assets/images/sokrates/duplication-processing.png)

You should aim at having as little as possible (<5%) of duplicated code as high-level of duplication can lead to maintenance difficulties, poor factoring, and logical contradictions.

### Aggregating Duplication Analysis Results

At the overall project's level

At the extension's level

At logical decompositions' level

### Duplication as Coupling

Socrates also uses duplicates to show similarities among components as dependencies. Here, I borrow the idea from [Marting Folwer's](https://martinfowler.com) article [Reducing Coupling](https://martinfowler.com/ieeeSoftware/coupling.pdf), MartinFlower.com (IEEE Software article):
   * "*There are several ways to describe coupling, but it boils down to this: If changing one module in a program requires changing another module, then coupling exists. ... Duplication always implies coupling, because changing one piece of duplicate code implies changing the other.*"

Sokrates, draws a dependency diagram with each dependency defined as a number of lines duplicated between the components. Here is an example fromSokrates analysis:


### To Probe Further

I always wanted to say something smart about duplication and why it is bad. But others have done it years ago, and much better. So I will satisfy my wish to talk about duplication by quoting few of the online resources:

* [Avoid Repetition](https://martinfowler.com/ieeeSoftware/repetition.pdf), MartinFlower.com (IEEE Software article)
   * "*Avoiding repetition is a simple principle that leads to good design.*"
   * "*I have an increasing sense that a pig-headed determination to remove all repetition can lead you a long way toward a good design and can help you apply and understand the patterns that are common in good designs.*"
* [Refactoring duplicated code](https://sourcemaking.com/refactoring/smells/duplicate-code), sourcemaking.com
   * "*Merging duplicate code simplifies the structure of your code and makes it shorter.*"
   * "*Simplification + shortness = code that is easier to simplify and cheaper to support.*"
* [Beck Design Rules](https://martinfowler.com/bliki/BeckDesignRules.html), MartinFowler.com
   * "*[No duplication] is a notion expressed elsewhere as DRY [Don't Repeat Yourself] or SPOT [Single Point Of Truth], Kent expressed it as saying everything should be said "Once and only Once." Many programmers have observed that the exercise of eliminating duplication is a powerful way to drive out good designs.*"
* [Code Smells / Duplicated Code](https://blog.codinghorror.com/code-smells/), Jeff Atwood, codinghorror.com:
   * "*Duplicated code is the bane of software development. Stamp out duplication whenever possible. You should always be on the lookout for more subtle cases of near-duplication, too. Don't Repeat Yourself!*"
* [Code Duplication](https://medium.com/javarevisited/code-duplication-1e1f759a7fe3), Donald Raab
   * "*So, duplication sucks. The more rabidly a person hates duplication, the more I trust their opinions on managing information. A programmer, upon noticing some redundancy, should be thrown into a panic, begin hyperventilating, and stammer something about “¡El diablo! !El diablo está en mi software!. — Ryan King*"
* [The Cut-and-Paste Programming Software Development Anti-Pattern](https://sourcemaking.com/antipatterns/cut-and-paste-programming), sourcemaking.com
   * "*Cut-and-Paste Programming is a very common, but degenerate form of software reuse which creates maintenance nightmares.*"

