---
layout: post
title:  "Cross-Cutting Concerns"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: cross-cutting-concerns
excerpt: Cross-cutting concerns are aspects of a software system that cannot be cleanly decomposed from the rest of the system.
---
> * Cross-cutting concerns are aspects of a software system that cannot be cleanly decomposed from the rest of the system.
* A single concern may be present in multiple files. One source code file may contain multiple concerns.
* A Sokrates enables defining multiple groups of cross-cutting concerns for each system.
* A cross-cutting concerns can be defined in two ways in Sokrates.
* The first approach is based on explicit definition of each concern. In such explicit definitions, concerns are explicitly named and their files are selected based on explicitly defined path and content filters.
* The second approach is based on dynamic definition of concerns and their names. In such dynamic definitions, concerns are not explicitly named, but their names are derived based on script with string transformations of file path or content.

![](assets/images/sokrates/cross-cutting-concerns-static.png)

![](assets/images/sokrates/cross-cutting-concerns-dynamic-1.png)

![](assets/images/sokrates/cross-cutting-concerns-dynamic-2.png)

### Examples

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
