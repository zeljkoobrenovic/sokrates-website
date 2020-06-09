---
layout: post
title:  "Usage: Configuration File"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: configuration
excerpt:
---

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


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}


###


{% highlight json %}
{% endhighlight %}





