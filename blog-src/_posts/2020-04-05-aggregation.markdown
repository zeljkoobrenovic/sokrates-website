---
layout: post
title:  "Aggregating Measurements"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: aggregation
excerpt:
---

Through aggregation, Sokrates generates new summary views on data.

The input for aggregations and are:
* the file-level measurements (lines of code, history of charges, file age)
* unit-level measurements (lines of code, conditional complexity)
* a list of duplicates within and among the files
* the logical decompositions (each logical decomposition consists of components, and each component of lasts of files in that component)
* cross-cutting concerns (each concern contains the list of files)
* a list of dependencies among components (per logical decompo­sition)

Sokrates performs aggregation at three levels:
* the overall project level
* the file type level (based on file extension)
* the logical decomposition level

Aggregation at lines of code level, rather then count

### Project-Level Aggregation

![](assets/images/sokrates/aggregation-system-level.png)

### File-Type Aggregation

![](assets/images/sokrates/aggregation-extension.png)

### Logical-Decomposition Aggregations

![](assets/images/sokrates/aggregation-components-1.png)

![](assets/images/sokrates/aggregation-components-2.png)
