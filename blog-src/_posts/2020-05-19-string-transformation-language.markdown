---
layout: post
title:  "Foundations: Sokrates String Transformation Language (SSTL)"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: sstl
excerpt:
---


The Sokrates String Transformation Language (SSTL) is a simple embedded programming language enabling you to transform a phrase extracted from a file path or file content into another string.

You define SSTL scripts as a simple list of commands with parameters, a processing pipeline. Each next command takes as an input the result of the previous command.

SSTL supports the following commands:
* extract (regex1)
* replace (regex, string)
* append (text)
* prepend (text)
* trim
* lowercase
* uppercase

 Sokrates uses SSTL in several places:
 - to define dynamic names of components in
 logical decompositions
 - to define dynamic names of cross-cutting concerns
 - to find components names for dependencies

### Examples

{% highlight json %}
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
{% endhighlight %}


![](assets/images/sokrates/sstl-example-1.png)

{% highlight json %}
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
{% endhighlight %}
