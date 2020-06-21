---
layout: post
title:  "Analysis: Cleaning the Code"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: cleaning
excerpt:
---

“Storms don't come to teach us painful lessons, rather they were meant to wash us clean.” - Socrates

### Cleaning for Lines of Code Calculations

### Cleaning for Duplication Calculations

Before duplication is calculated, the code is cleaned to remove empty lines, comments, and frequently duplicated constructs such as imports.

Here is an example of code cleaning:

Before the cleaning:

{% highlight java %}
/*
 * Copyright (c) 2019 Željko Obrenović. All rights reserved.
 */

package nl.obren.sokrates.sourcecode.operations.impl;

import nl.obren.sokrates.sourcecode.operations.StringOperation;

import java.util.List;

public class LowerCaseOperation extends StringOperation {
    public LowerCaseOperation() {
        super("lowercase");
    }

    public LowerCaseOperation(List<String> params) {
        this();
        this.setParams(params);
    }

    @Override
    public String exec(String input) {
        return input.toLowerCase();
    }
}
{% endhighlight %}


{% highlight java %}
package nl.obren.sokrates.sourcecode.operations.impl;
import nl.obren.sokrates.sourcecode.operations.StringOperation;
import java.util.List;
public class LowerCaseOperation extends StringOperation {
    public LowerCaseOperation() {
        super("lowercase");
    }
    public LowerCaseOperation(List<String> params) {
        this();
        this.setParams(params);
    }
    @Override
    public String exec(String input) {
        return input.toLowerCase();
    }
}
{% endhighlight %}

After cleaning (removal of comments, empty lines, import statemants, and leading and trailing whitespaces in each line):

{% highlight java %}
public class LowerCaseOperation extends StringOperation {
public LowerCaseOperation() {
super("lowercase");
public LowerCaseOperation(List<String> params) {
this();
this.setParams(params);
@Override
public String exec(String input) {
return input.toLowerCase();
{% endhighlight %}


### Preview the Cleaning in Sokrates Explorer

