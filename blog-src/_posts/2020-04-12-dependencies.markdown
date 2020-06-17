---
layout: post
title:  "Analysis: Finding Dependencies based on Text Patterns"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: dependencies
excerpt:
---

Looking anchors and targets

### Focus on Dependencies Between Components

The main dependency unit is a File to a Component
File to component as a pragmatic technique

Much simpler, technology independent, and robust mechanisms.

<pre>
src/
  vs/
    base/
      browser/
      common/
      node/
      parts/
      worker/
</pre>

Componentization based on the folder depth 3 (src/projects/*):

Example of VS Code

![](assets/images/sokrates/dependecies-patterns-components.png)

* Analyzed system has 6 links (arrows) between components.
* The number on the arrow represents the number of files from referring component that depend on files in referred component.
* These 6 links contain 105 dependencies.
* The following explicit meta-rules for finding dependencies are defined:
    * path like ".*[.]ts" AND content like "import .*from 'vs/base.*"
    * extract "base(/[a-zA-Z0-9_]+\|)"
    * replace "base(/)?", ""

<pre>
from: browser
to: common
evidence:
 - file: "src/vs/base/browser/browser.ts"
   contains "import { Emitter, Event } from 'vs/base/common/event';"

from: browser
to: common
evidence:
 - file: "src/vs/base/browser/canIUse.ts"
   contains "import * as platform from 'vs/base/common/platform';"

from: browser
to: common
evidence:
 - file: "src/vs/base/browser/contextmenu.ts"
   contains "import { IAction, IActionRunner } from 'vs/base/common/actions';"

from: browser
to: common
evidence:
 - file: "src/vs/base/browser/dnd.ts"
   contains "import { Disposable } from 'vs/base/common/lifecycle';"

from: browser
to: common
evidence:
 - file: "src/vs/base/browser/dom.ts"
   contains "import { TimeoutTimer } from 'vs/base/common/async';"

...

</pre>

![](assets/images/sokrates/dependencies-patterns-path.png)


### Build-in Dependency Finder Heuristics

With the Sokrates configuration file, you can define your own pattern based dependency finders using the Sokrates String Transformation Language (SSTL). For several common languages, Sokrates includes the build in pattern based dependency finders. You can use this build-in finders alon, or switch tem off and use your own configured finders. Here, I'll describe few heuristics used to define patter dependencies in Sokrates build-in dependency finders.

Build-in dependency finders use two types of heuristics:
* namespaces based dependency finders
* path based includes

The following heuristic is used in languages where files are organized in explicitly defined packages, modules or namespaces (e.g. Java, C#, Go, Scala, PHP, Groovy, Kotlin, Perl, Ruby, D):

* Heuristic: the analysis assumes that the names of packages, modules or namespaces are present in source files, and are unique components (e.g. two components do not have files in the same package, module or namespace)
* Limitation: not reliable if the same package, module or namespace is defined in two or more components
* Logic:
  * Finding component patterns: looking for package, modules or namespaces definitions, normally at the beginning of the file. Extract full package, module or namespace.
  * Find dependencies:
    * look for import statement to packages, modules or namespaces
    * extract full package, module or namespace name from the import statement
    * if the full name in the import statement can be found in package statements on the other component, then add the dependency to that component

Patterns that are likely to be unique for files in a components (e.g. java package heuristic)

![](assets/images/sokrates/dependencies-built-in-java-details.png)


![](assets/images/sokrates/dependencies-built-in-aggregated.png)


### Dynamic Links

Using Pattern-Based Dependency Finder to Look For Dynamic Links

Grey block as external "components", any string

The following explicit meta-rules for finding dependencies are defined:
content like ".*github[.]com/[a-zA-Z0-9\-_]+/[a-zA-Z0-9\-_]+.*"
extract ("github[.]com/[a-zA-Z0-9\-_]+/[a-zA-Z0-9\-_]+")

![](assets/images/sokrates/dependencies-patterns-dynamic-dependencies.png)

[VS Code Components and Dependecies](https://d3axxy9bcycpv7.cloudfront.net/ts/vscode/reports/html/Components.html)

<pre>
from: extensions/html-language-features
to: github.com/Microsoft/vscode-html-languageservice
evidence:
 - file: "extensions/html-language-features/package.nls.json"
   contains "	"html.customData.desc": "A list of relative file paths pointing to JSON files following the [custom data format](https://github.com/Microsoft/vscode-html-languageservice/blob/master/docs/customData.md).\n\nVS Code loads custom data on startup to enhance its HTML support for the custom HTML tags, attributes and attribute values you specify in the JSON files.\n\nThe file paths are relative to workspace and only workspace folder settings are considered.","

from: extensions/html-language-features
to: github.com/Microsoft/vscode-html-languageservice
evidence:
 - file: "extensions/html-language-features/schemas/package.schema.json"
   contains "					"markdownDescription": "A list of relative file paths pointing to JSON files following the [custom data format](https://github.com/Microsoft/vscode-html-languageservice/blob/master/docs/customData.md).\n\nVS Code loads custom data on startup to enhance its HTML support for the custom HTML tags, attributes and attribute values you specify in the JSON files.\n\nThe file paths are relative to workspace and only workspace folder settings are considered.","
</pre>
