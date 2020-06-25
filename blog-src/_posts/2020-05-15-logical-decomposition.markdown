---
layout: post
title:  "Understanding Logical Decomposition"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: logical-decomposition
excerpt: Logical decomposition is a representation of, or a view on the organization of the main source code. In such a view every and each file is put in exactly one logical component.
---
> * Logical decomposition is a representation of, or a view on the organization of the main source code. In such a view every and each file is put in exactly one logical component.
* A Sokrates enables defining multiple logical decompositions for each system.
* In Sokrates, a logical decomposition is considered invalid if a file is selected into two or more components.This constraint is introduced in order to facilitate measuring of dependencies among components.
* Files not assigned to any component are put into a special "Unclassified" component.
* A logical decomposition can be defined in three ways in Sokrates.
* First approach is based on the folders structure. Components are mapped to folders at defined folder depth relative to the source code root folder.
* Second approach is based on explicit definition of each component. In such explicit definitions, components are explicitly named and their files are selected based on explicitly defined path and content filters.
* Third approach is based on dynamic definition of components and their names. In such dynamic definitions, components are not explicitly named, but the name is derived based on script with string transformations of file path or content.

### Defining Logical Decompositions

You can define logical decomposition in Sokrates with two mechanisms:
* by exploiting already existing hierarchical organization of source code folders; and
* by using regular expressions to filter and classify files in components.

### File Structure Componentization

The first approach to define logical decompositions works in projects where physical file structure reflects well the logical project structure. For instance, many projects organize source code into subprojects where each subfolder in the root of the project contains a subproject. Sokrates code follows this organization, see [the Sokrates' GitHub source code root](https://github.com/zeljkoobrenovic/sokrates/).

To define a logical decomposition based on the file structure, all you need to do is to specify the folder depth you want to use.

![](assets/images/sokrates/logical-decomposition-folder-depth.png)

### Static Components

Defining logical decomposition with regular expressions is a more complex but much more flexible and powerful approach.

In its simplest form, you can use regular expressions to classify files into pre-defined components. For each such component, you need to specify a name and a list of regular expressions for including the files. This approach is straightforward, but its main drawback is the need to explicitly define and name each component.

![](assets/images/sokrates/logical-decomposition-static.png)

### Dynamic Components

An even more flexible approach is to name components dynamically based on the string transformations of file paths or content. For instance, in one of the projects I worked on, we defined each component with a "lib-" prefix. Instead of listing all components manually, we can define a simple rule that will add components dynamically. This rule will work perfectly as long as we use the "lib-" convention in naming components.

![](assets/images/sokrates/logical-decomposition-dynamic-1.png)

![](assets/images/sokrates/logical-decomposition-dynamic-2.png)


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
