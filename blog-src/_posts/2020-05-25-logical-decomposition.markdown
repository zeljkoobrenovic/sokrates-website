---
layout: post
title:  "Logical Decomposition"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: logical-decomposition
excerpt:
---


You can define logical decomposition in Sokrates with two mechanisms:
* by exploiting already existing hierarchical organization of source code folders; and
* by using regular expressions to filter and classify files in components.

The first approach to define logical decompositions works in projects where physical file structure reflects well the logical project structure. For instance, many projects organize source code into subprojects where each subfolder in the root of the project contains a subproject. Sokrates code follows this organization, see [the Sokrates' GitHub source code root](https://github.com/zeljkoobrenovic/sokrates/).

To define a logical decomposition based on the file structure, all you need to do is to specify the folder depth you want to use.

Defining logical decomposition with regular expressions is a more complex but much more flexible and powerful approach.

In its simplest form, you can use regular expressions to classify files into pre-defined components. For each such component, you need to specify a name and a list of regular expressions for including the files. This approach is straightforward, but its main drawback is the need to explicitly define and name each component.

 An even more flexible approach is to name components dynamically based on the
string transformations of file paths or content. For instance, in one of the projects I worked on, we defined each component with a "lib-" prefix. Instead of listing all components manually, we can define a simple rule that will add components dynamically. This rule will work perfectly as long as we use the "lib-" convention in naming components.

### Examples

{% highlight json %}
{
   "logicalDecompositions":[
      {
         "name":"primary",
         "componentsFolderDepth":1
      },
      {
         "name":"package level",
         "componentsFolderDepth":19
      }
   ]
}
{% endhighlight %}
