---
layout: post
title:  "Usage: Configuration File"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: configuration
excerpt:
---

### Configuration as a Software Architecture Documentation

### Configuration File for Individual Projects

Sokrates configuration is defined in a JSON file.

You can use init command to generate default file for your project (see Download tab for details).

The default location of the configuration file is  <your-project>/_sokrates/config.json

See an example of a Sokrates configuration file ⤇

Based on this configuration Sokrates will generate a number of reports. The default reports folders is  <your-project>/_sokrates/reports/

![](assets/images/sokrates/config-overview.png)

See an example of a Sokrates report ⤇


### Description of the project

name, logo, descritpion, external links

{% highlight json %}
"metadata":{
  "name":"Sokrates",
  "description":"A pragmatic source code analyzer.",
  "logoLink":"https://sokrat.org/assets/logo.png",
  "links":[
     {
        "label":"sokrat.org",
        "href":"https://sokrat.org/"
     }
  ]
}
{% endhighlight %}

### Define the scope: source code root, included and ignored files

which extensions and files to analyze, and which to ignore

{% highlight json %}
{
"srcRoot":"..",
"extensions":[
  "java",
  "html",
  "xml",
  "md",
  "txt"
],
"ignore":[
  {
     "pathPattern":".*/node_modules/.*",
     "contentPattern":"",
     "include":true,
     "note":""
  },
  {
     "pathPattern":".*/target/.*",
     "contentPattern":"",
     "include":true,
     "note":"Compiled files"
  }
]
}
{% endhighlight %}


### Files classification: What is main code, test code, generated code, build & deployment code, 3rd party code...

* For analysis purposes Sokrates separate files in scope into several categories: main, test, generated, deployment and build, and other.
* The main category contains all manually created source code files that are being used in the production.
* Files in the main category are used as input for other analyses: logical decomposition, cross-cutting concerns, duplication, file size, unit size, and conditional complexity.
* Test source code files are used only for testing of the product. These files are normally not deployed to production.
* Build and deployment source code files are used to configure or support build and deployment process.
* Generated source code files are automatically generated files that have not been manually changed after generation.
* While a source code folder may contain a number of files, Sokrates is primarily interested in the source code files that are being written and maintained by developers.
* Files containing binaries, documentation, or third-party libraries, for instance, are excluded from analysis. The exception are third-party libraries that have been changed by developers.

{% highlight json %}
{
    "main": {
        "name": "main",
        "sourceFileFilters": [
            {
                "pathPattern": ".*",
                "contentPattern": "",
                "exception": false,
                "note": ""
            }
        ],
        "files": []
    },
    "test": {
        "name": "test",
        "sourceFileFilters": [
            {
                "pathPattern": ".*/[Tt]est/.*",
                "contentPattern": "",
                "exception": false,
                "note": "Test files"
            }
        ],
        "files": []
    },
    "generated": {
        "name": "generated",
        "sourceFileFilters": [],
        "files": []
    },
    "buildAndDeployment": {
        "name": "build and deployment",
        "sourceFileFilters": [],
        "files": []
    },
    "other": {
        "name": "other",
        "sourceFileFilters": [],
        "files": []
    }
}
{% endhighlight %}


### Define logical decompositions: one or more ways to looks at components in the system

* Logical decomposition is a representation of the organization of the main source code, where every and each file is put in exactly one logical component.

* A software system can have one or more logical decompositions.
* A logical decomposition can be defined in two ways.
* First approach is based on the folders structure. Components are mapped to folders at defined folder depth relative to the source code root.
* Second approach is based on explicit definition of each component. In such explicit definitions, components are explicitly named and their files are selected based on explicitly defined path and content filters.
* A logical decomposition is considered invalid if a file is selected into two or more components.This constraint is introduced in order to facilitate measuring of dependencies among components.
* Files not assigned to any component are put into a special "Unclassified" component.

{% highlight json %}
{
   "logicalDecompositions":[
      {
         "name":"primary",
         "scope":"main",
         "filters":[

         ],
         "componentsFolderDepth":0,
         "components":[
            {
               "name":"Logging",
               "sourceFileFilters":[
                  {
                     "pathPattern":".*/LoggingService/.*",
                     "contentPattern":"",
                     "exception":false,
                     "note":""
                  },
                  {
                     "pathPattern":".*/LogQueueProbe/.*",
                     "contentPattern":"",
                     "exception":false,
                     "note":""
                  },
                  {
                     "pathPattern":".*/Logging/.*",
                     "contentPattern":"",
                     "exception":false,
                     "note":""
                  }
               ],
               "files":[

               ]
            }
         ],
         "metaComponents":[

         ],
         "includeRemainingFiles":true,
         "dependenciesFinder":{
            "useBuiltInDependencyFinders":true,
            "rules":[

            ],
            "metaRules":[

            ]
         },
         "renderingOptions":{
            "orientation":"TB"
         },
         "includeExternalComponents":true,
         "duplicationLinkThreshold":50
      }
   ]
}
{% endhighlight %}


### Define cross-cutting concerns: aspects of a software system that cannot be cleanly decomposed from the rest of the system

* Cross-cutting concerns are aspects of a software system that cannot be cleanly decomposed from the rest of the system.
* A single concern may be present in multiple files. One source code file may contain multiple concerns.

{% highlight json %}
{
   "crossCuttingConcerns":[
      {
         "name":"general",
         "concerns":[
            {
               "name":"exception handling",
               "sourceFileFilters":[
                  {
                     "pathPattern":".*[.]java",
                     "contentPattern":".* try \\{.*",
                     "include":true,
                     "note":""
                  }
               ]
            },
            {
               "name":"logging",
               "sourceFileFilters":[
                  {
                     "pathPattern":"",
                     "contentPattern":"import .*logging[.]Log.*",
                     "include":true,
                     "note":""
                  }
               ]
            },
            {
               "name":"file operations",
               "sourceFileFilters":[
                  {
                     "pathPattern":"",
                     "contentPattern":"import .*java[.]io[.]File.*",
                     "include":true,
                     "note":""
                  }
               ]
            },
            {
               "name":"javafx",
               "sourceFileFilters":[
                  {
                     "pathPattern":"",
                     "contentPattern":"import javafx.*",
                     "include":true,
                     "note":""
                  }
               ]
            }
         ]
      }
   ]
}
{% endhighlight %}


### Set goals and controls: define measurements and alarms to keep your system within the desired values

Controls enable you to set alarms for any of the Sokrates metrics. An alarm is defined with a desired range and tolerance.

{% highlight json %}
{
    "goalsAndControls": [
        {
            "goal": "Keep the system simple and easy to change",
            "description": "Aim at keeping the system size modest (less than 200,000 LOC is good), duplication low (less than 5% is good), files small (no files longer than 1000 LOC is good), and units simple (no units with more than 25 decision points is good).",
            "controls": [
                {
                    "metric": "LINES_OF_CODE_MAIN",
                    "description": "Total number of lines of main code",
                    "desiredRange": {
                        "min": "0",
                        "max": "200000",
                        "tolerance": "20000"
                    }
                },
                {
                    "metric": "DUPLICATION_PERCENTAGE",
                    "description": "System duplication",
                    "desiredRange": {
                        "min": "0",
                        "max": "5",
                        "tolerance": "1"
                    }
                },
                {
                    "metric": "NUMBER_OF_FILES_1001_PLUS",
                    "description": "The number of very large files",
                    "desiredRange": {
                        "min": "0",
                        "max": "0",
                        "tolerance": "1"
                    }
                },
                {
                    "metric": "CONDITIONAL_COMPLEXITY_DISTRIBUTION_26_PLUS_COUNT",
                    "description": "Number of very complex units",
                    "desiredRange": {
                        "min": "0",
                        "max": "0",
                        "tolerance": "1"
                    }
                }
            ]
        }
    ]
}
{% endhighlight %}


### Provide analysis reference points: for comparison and trend analysis

Controls enable you to set alarms for any of the Sokrates metrics. An alarm is defined with a desired range and tolerance.

{% highlight json %}
{
   "compareResultsWith": [
     {
        "label": "reference",
        "analysisResultsPath": "history/start/analysisResults.json"
    }
  ]
}
{% endhighlight %}


### Add summary findings: manually added one-line insights and notes

Optional few bullets to summarize the systems.

{% highlight json %}
{
    "summaryFindings": [
        "note 1",
        "note 2"
    ]
}
{% endhighlight %}


### Perform advanced configuration: meta-rules for components, concerns and dependencies


* One of the most powerful features of Sokrates is the possibility to use meta rules to define components, concerns and dependencies.
* A meta rule is a search pattern (content and/or path) combined with the string operations to process found string to get the name that to define a component, concern or a dependency to a component.
* Meta rules can be used in logical decompositions (the metaComponents field), dependency finders (the metaRules field), and in cross-cutting concerns (the metaConcerns field)
* The Following operations are supported:
    * extract (regex1, regex2,...)
    * replace (regex, replaceString)
    * append (text)
    * prepend (text)
    * trim
    * tolowercase
    * touppercase

Example (components and dependencies finder with meta rules):

{% highlight json %}
{
    "logicalDecompositions": [
        {
            "name": "package level",
            "scope": "main",
            "filters": [],
            "componentsFolderDepth": 0,
            "components": [],
            "metaComponents": [
                {
                    "pathPattern": ".*[.]java",
                    "contentPattern": "package nl[.]obren[.]sokrates[.].*",
                    "use": "content",
                    "ignoreComments": true,
                    "nameOperations": [
                        {
                            "op": "extract",
                            "params": [
                                "nl[.]obren[.]sokrates[.][a-zA-Z0-9_]+[.][a-zA-Z0-9_]+"
                            ]
                        },
                        {
                            "op": "replace",
                            "params": [
                                "nl[.]obren[.]sokrates[.]",
                                ""
                            ]
                        }
                    ]
                }
            ],
            "includeRemainingFiles": false,
            "dependenciesFinder": {
                "useBuiltInDependencyFinders": false,
                "rules": [],
                "metaRules": [
                    {
                        "pathPattern": ".*[.]java",
                        "contentPattern": "import nl[.]obren[.]sokrates[.].*",
                        "use": "content",
                        "ignoreComments": true,
                        "nameOperations": [
                            {
                                "op": "extract",
                                "params": [
                                    "nl[.]obren[.]sokrates[.][a-zA-Z0-9_]+[.][a-zA-Z0-9_]+"
                                ]
                            },
                            {
                                "op": "replace",
                                "params": [
                                    "nl[.]obren[.]sokrates[.]",
                                    ""
                                ]
                            }
                        ]
                    }
                ]
            },
            "renderingOptions": {
                "orientation": "TB"
            }
        }
    ]
}
{% endhighlight %}

Example (cross-cutting concerns with meta rules):

{% highlight json %}
{
    "crossCuttingConcerns": [
        {
            "name": "java technology",
            "concerns": [ ],
            "metaConcerns": [
                {
                    "pathPattern": "",
                    "contentPattern": "import[ ]+java[.].*",
                    "use": "content",
                    "ignoreComments": false,
                    "nameOperations": [
                        {
                            "op": "extract",
                            "params": [
                                "java[.][a-zA-Z0-9_]+"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
{% endhighlight %}







