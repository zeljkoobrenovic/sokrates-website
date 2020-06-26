---
layout: post
title:  "Sokrates Configuration File"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: configuring
excerpt:
---

Sokrates analyses take two inputs:
* the actual source code, including all folders and files, and
* a configuration file, which describes how Sokrates should view and analyze the source code.

Based on these two inputs, Sokrates produces analysis reports and data files with analysis details.

Sokrates configuration file is a JSON file. The default location of the configuration file is  &lt;your-project&gt;/_sokrates/config.json. The example of a configuration file, you can [see here](https://d3axxy9bcycpv7.cloudfront.net/java/junit5/config.json) .

![](assets/images/sokrates/config-overview.png)

The file has several sections, you can use to:
* describe your project with a name, logo, summary text, and to add external links
* [define the scope](scoping), including the location of the source code root, file extensions and files to analyze, ignored files, files classification, defining what is main code, test code, generated code, build & deployment code, or other code…
* define [logical decompositions](logical-decomposition): one or more ways to looks at components in the system
* define [cross-cutting concerns](cross-cutting-concerns): aspects of a software system that cannot be cleanly decomposed from the rest of the system
* set goals and controls: define measurements and alarms to keep your system within the desired values
* provide analysis reference points: for comparison and trend analysis
* add summary findings: manually added one-line insights and notes
* perform advanced configuration: meta-rules for components, concerns and dependencies

You can find more details about the Sokrates configuration file in [Appendix: Sokrates Configuration File](configuration/).


### Automatically Generating a Configuration File

While you can always start from scratch and write a configuration file in any text editor, the most natural way to bootstrap configuration process is by using the [Sokrates' init command](cli/). This command traverses the source code folders looking for standard conventions and populates the configuration file with all found conventions. For instance, the init command excludes binary files based on their extensions, adds ignoring rules for known third-party libraries, adds rules for the location of test code, or rules for identifying generated code.

![](assets/images/sokrates/cmd-init.png)


### Configuration as a Software Architecture Documentation

On the one hand, you can look at the Sokrates configuration file as a mere input for analysis. On the other hand, this configuration file encodes the patterns used in source code to classify files, define components, and cross-cutting concerns.

Sokrates provides a pragmatic way to describe critical elements of software architectures and connect them explicitly to the source code. Based on a formal description of different software architecture aspects, Sokrates generates reports and visualization to help you reason, understand, and communicate about the software system.

You configure Sokrates primarily with regular expressions. And regular expressions are patterns. Or, more precisely, the way to define patterns. And software architecture is closely related to establishing and identifying patterns in source code. Regular expressions are also cross-platform, working at any text representation. This cross-platform aspect is also what makes them useful for software architecture.

In the end, you get a live, concise, platform-independent, and up-to-date documentation that is always connected to and validated against your source code.

