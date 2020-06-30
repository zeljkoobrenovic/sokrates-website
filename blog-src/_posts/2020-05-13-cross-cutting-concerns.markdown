---
layout: post
title:  "Cross-Cutting Concerns"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: cross-cutting-concerns
icon: concerns
excerpt: "Cross-cutting concerns are aspects of a software system, such as logging or security, that you cannot cleanly decompose from the rest of the system."
---

Cross-cutting concerns are aspects of a software system that cannot be cleanly decomposed from the rest of the system.

A single concern may be present in multiple files. One source code file may contain multiple concerns.

A Sokrates enables defining multiple groups of cross-cutting concerns for each system.

A cross-cutting concerns can be defined in two ways in Sokrates.

The first approach is based on explicit definition of each concern. In such explicit definitions, concerns are explicitly named and their files are selected based on explicitly defined path and content filters.

![](assets/images/sokrates/cross-cutting-concerns-static.png)

***Figure 1**: Classification of files based on the static list of cross-cutting concern rules. For each such rule, you need to specify a name of the concern and a list of regular expressions for including the files in the concern.*.

{% highlight json %}
{
    "name": "general",
    "concerns": [
        {
            "name": "exception handling",
            "sourceFileFilters": [
                {
                    "pathPattern": ".*[.]java",
                    "contentPattern": ".* try \\{.*",
                    "include": true,
                    "note": ""
                }
            ]
        },
        {
            "name": "logging",
            "sourceFileFilters": [
                {
                    "pathPattern": "",
                    "contentPattern": "import .*logging[.]Log.*",
                    "include": true,
                    "note": ""
                }
            ]
        },
        {
            "name": "file operations",
            "sourceFileFilters": [
                {
                    "pathPattern": "",
                    "contentPattern": "import .*java[.]io[.]File.*",
                    "include": true,
                    "note": ""
                }
            ]
        }
    ]
}
{% endhighlight %}

***Figure 2**: A fragment of the Sokrates configuration file for expectedly defining cross-cutting concerns.*


The second approach is based on dynamic definition of concerns and their names. In such dynamic definitions, concerns are not explicitly named, but their names are derived based on script with string transformations of file path or content.

![](assets/images/sokrates/cross-cutting-concerns-dynamic-1.png)
![](assets/images/sokrates/cross-cutting-concerns-dynamic-2.png)

***Figure 3**: Classification based on the dynamic cross-cutting concern rules. Sokrates derives names of concerns dynamically based on the string transformations of file paths or content.*


{% highlight json %}
{
    "name": "general",
    "concerns": [],
    "metaConcerns": [
        {
            "pathPattern": "",
            "contentPattern": "import (com|org)[.][a-z0-9_]+[.].*",
            "use": "content",
            "ignoreComments": false,
            "nameOperations": [
                {
                    "op": "extract",
                    "params": [
                        "(com|org)[.][a-z0-9_]+"
                    ]
                }
            ]
        }
    ]
}
{% endhighlight %}

***Figure 4**: A fragment of the Sokrates configuration file for dynamically defining cross-cutting concerns.*
