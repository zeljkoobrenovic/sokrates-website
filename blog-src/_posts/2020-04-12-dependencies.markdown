---
layout: post
title:  "Analysis: Finding Dependencies based on Text Patterns"
date:   2020-05-25 19:12:01 +0100
author: by Željko Obrenović (zeljkoobrenovic.com)
permalink: dependencies
excerpt:
---

Looking anchors and targets

### File to Component

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


Patterns that are likely to be unique for files in a components (e.g. java package heuristic)

File to component as a pragmatic technique

