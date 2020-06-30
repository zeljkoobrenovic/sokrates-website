---
layout: post
title:  "Sokrates Analysis Overview"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: processing
icon: process
excerpt: "Sokrates processes source code in multiple stages, some of which are optional. The analysis starts with scoping, continuing through an examination of individual files and units, ending with an aggregation of results and export of reports."
---

*“Sir Francis Bacon told a story, perhaps apocryphal, that illustrated just how empiricism was lost during the Middle Ages. The story was that a meeting of monks was taking place and the monks were **hotly debating the issue of how many teeth were in the mouth of a horse.** The problem was that they could not find the answer anywhere in Aristotle’s work. Then, a young monk, perhaps at his first such meeting, timidly suggested that, because they had all come to the meeting on horseback, that **one way to get the answer would be simply to go outside and count.** Bacon went on to say that the young monk was expelled from the meeting!”*


### Phases

Sokrates analysis approach consists of the following mechanisms:

* configuring
* scoping
* creating views on source code (logical decomposition, and cross-cutting concerns)
* basic sources code analyses at the file level
* optional enrichment of file measurements from update dates from a version control system
* categorization of measurements
* advanced cross-file analyses (dependencies and duplication)
* aggregation of data
*

![](assets/images/sokrates/analytics-processing-details.png)

**Figure 1:** The overview of Sokrates processing. Sokrates processes source code in multiple stages, some of which are optional. The analysis starts with scoping, continuing through an examination of individual files and units, ending with an aggregation of results and export of reports.*

#### Scoping

Firstly Sokrates scopes the project files ignoring irrelevant files and classifying the relevant files into primary and secondary ones.

#### Creating Views on the Source Code

Second, Sokrates creates multiples views on the source code: logical decompositions and cross-cutting concerns.  Each view is a list of files, with a name and with potential relations to other views. Sokrates creates these views to structure analysis, reporting, and exploration of source code.

#### Basic File-Level Analyses

Third, Sokrates performs basic analysis of individual files. Basic analyses include removing comments, counting the lines of code, and extracting units. Optionally, you can import data about file change histories (dates at which developers have updated each file), and associated them with each file.


#### Categorization of Basic Measurements

After collecting all the measurements, Sokrates classify them into categories. For example, Sokrates classifies files into five categories based on their size (lines of code): 1-100 (very small files), 100-200 (small files), 200-500 (medium size files), 501-1000 (long files), 1001+ (very long files).

#### Advanced Measurements

Four, Sokrates performs a set of more complex and computationally intensive cross-file analyses to identify dependencies and duplication among files and components.

#### Aggregating Results

After Sokrates has all the data at the file level and lists of duplicates and dependencies, it then proceeds with aggregating results. Sokrates aggregates data at the overall project level as well as at the level of components and cross-cutting concerns. For dependencies, duplication, and file change history, Sokrates also identifies links between components. These links show couplings between components, duplication between them, as well as their temporal coupling (the number of days when developers have changed two components simultaneously).


#### Using the Data
With basic and aggregated data ready, Sokrates then
* generates standard reports, providing a templates based story about measured data, enriched with visuals combining basic chart, Graphviz diagrams,  SVG images, and few 3D visualizations.
* provides an interactive explorer to browse quickly, search and visualize all the data, and
* store all the data into simple text and JSON files  if you want to analyze them further using your tools.


### Sokrates Pragmatic Approach

Sokrates is a practical source code analysis tool. Sokrates does not aim at replicating the level of details of many other tools, such as SonarQube. Instead, it leans on a few basic principles and techniques to get insights about your code without building a massive and complex tool.

The first thing I have learned pretty fast when building Sokrates is that it is extremely tough to build a proper fully-featured parser for any programming language.  Any software analysis tool needs a handful of such parsers. Contemporary software projects frequently include a dozen or more of different programming languages and dialects.

So how have I solved this problem? By not building fully-featured parsers.

 I've also learned when building Sokrates that you can go a long way with using a few simple, heuristic parsing techniques. You may lose details in the process, but if you focus on the essence, such simple heuristic techniques can offer you incredible value for money. In many instances, you may get the same details as more complex and expensive tools. And performance-wise, simple heuristic techniques often work order or magnitude faster.

In the following chapters, we outline a few of these techniques. The following is useful for those who want to contribute or use Sokrates source code. But it may also offer few insights into power and limitation of Sokrates analyses.
