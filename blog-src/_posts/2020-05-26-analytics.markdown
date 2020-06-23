---
layout: post
title:  "Understanding Sokrates Analytics"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: analytics
excerpt:
---

### Understanding Sokrates Analytics Approach

Sokrates analysis approach consists of the following mechanisms:

* scoping
* creating views on source code (logical decomposition, and cross-cutting concerns)
* basic sources code analyses at the file level
* optional enrichment of file measurements from update dates from a version control system
* categorization of measurements
* advanced cross-file analyses (dependencies and duplication)
* aggregation of data
*

### Scoping

Firstly Sokrates scopes the project files ignoring irrelevant files and classifying the relevant files into primary and secondary ones.

### Creating Views on the Source Code

Second, Sokrates creates multiples views on the source code: logical decompositions and cross-cutting concerns.  Each view is a list of files, with a name and with potential relations to other views. Sokrates creates these views to structure analysis, reporting, and exploration of source code.

### Basic File-Level Analyses

Third, Sokrates performs basic analysis of individual files. Basic analyses include removing comments, counting the lines of code, and extracting units. Optionally, you can import data about file change histories (dates at which developers have updated each file), and associated them with each file.


### Categorization of Basic Measurements

After collecting all the measurements, Sokrates classify them into categories. For example, Sokrates classifies files into five categories based on their size (lines of code): 1-100 (very small files), 100-200 (small files), 200-500 (medium size files), 501-1000 (long files), 1001+ (very long files).

### Advanced Measurements

Four, Sokrates performs a set of more complex and computationally intensive cross-file analyses to identify dependencies and duplication among files and components.

### Aggregating Results

After Sokrates has all the data at the file level and lists of duplicates and dependencies, it then proceeds with aggregating results. Sokrates aggregates data at the overall project level as well as at the level of components and cross-cutting concerns. For dependencies, duplication, and file change history, Sokrates also identifies links between components. These links show couplings between components, duplication between them, as well as their temporal coupling (the number of days when developers have changed two components simultaneously).


### Using the Data
With basic and aggregated data ready, Sokrates then
* generates standard reports, providing a templates based story about measured data, enriched with visuals combining basic chart, Graphviz diagrams,  SVG images, and few 3D visualizations.
* provides an interactive explorer to browse quickly, search and visualize all the data, and
* store all the data into simple text and JSON files  if you want to analyze them further using your tools.
