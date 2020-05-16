import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.less']
})
export class ConfigurationPageComponent implements OnInit {
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe(result => this.isSmallScreen = breakpointObserver.isMatched('(max-width: 799px)'));
  }

  ngOnInit() {
  }

  getMetadataFragment() {
    return '"metadata" : {\n' +
      '  "name" : "Sokrates",\n' +
      '  "description" : "A pragmatic source code analyzer.",\n' +
      '  "logoLink" : "https://sokrat.org/assets/logo.png",\n' +
      '  "links" : [ {\n' +
      '    "label" : "sokrat.org",\n' +
      '    "href" : "https://sokrat.org/"\n' +
      '  } ]\n' +
      '},';
  }

  getExternsionsAndIgnoreFragment() {
    return '...\n"srcRoot": "..",\n' +
      '"extensions" : [ "java", "html", "xml", "md", "txt" ],\n' +
      '"ignore" : [ {\n' +
      '    "pathPattern" : ".*/node_modules/.*",\n' +
      '    "contentPattern" : "",\n' +
      '    "include" : true,\n' +
      '    "note" : ""\n' +
      '  }, {\n' +
      '    "pathPattern" : ".*/target/.*",\n' +
      '    "contentPattern" : "",\n' +
      '    "include" : true,\n' +
      '    "note" : "Compiled files"\n' +
      '  }\n]\n' +
      '...';
  }

  getScopeFragments() {
    return '...\n  "main" : {\n' +
      '    "name" : "main",\n' +
      '    "sourceFileFilters" : [ {\n' +
      '      "pathPattern" : ".*",\n' +
      '      "contentPattern" : "",\n' +
      '      "include" : true,\n' +
      '      "note" : ""\n' +
      '    } ]\n' +
      '  },\n' +
      '  "test" : {\n' +
      '    "name" : "test",\n' +
      '    "sourceFileFilters" : [ {\n' +
      '      "pathPattern" : ".*/test/.*",\n' +
      '      "contentPattern" : "",\n' +
      '      "include" : true,\n' +
      '      "note" : "Test files"\n' +
      '    } ]\n' +
      '  },\n' +
      '  "generated" : {\n' +
      '    "name" : "generated",\n' +
      '    "sourceFileFilters" : [ {\n' +
      '      "pathPattern" : "",\n' +
      '      "contentPattern" : "// This file is autogenerated by .*",\n' +
      '      "include" : true,\n' +
      '      "note" : ""\n' +
      '    } ]\n' +
      '  },\n' +
      '  "buildAndDeployment" : {\n' +
      '    "name" : "build and deployment",\n' +
      '    "sourceFileFilters" : [ {\n' +
      '      "pathPattern" : ".*/pom[.]xml",\n' +
      '      "contentPattern" : "",\n' +
      '      "include" : true,\n' +
      '      "note" : "Maven configuration"\n' +
      '    } ]\n' +
      '  },\n' +
      '  "other" : {\n' +
      '    "name" : "other",\n' +
      '    "sourceFileFilters" : [ {\n' +
      '      "pathPattern" : ".*[.](md|txt)",\n' +
      '      "contentPattern" : "",\n' +
      '      "include" : true,\n' +
      '      "note" : "Text files"\n' +
      '    } ]\n' +
      '  },\n...';
  }

  getLogicalDecompositionFragment() {
    return '  "logicalDecompositions" : [ {\n' +
      '    "name" : "primary",\n' +
      '    "scope" : "main",\n' +
      '    "filters" : [ {\n' +
      '      "pathPattern" : "",\n' +
      '      "contentPattern" : "",\n' +
      '      "include" : true,\n' +
      '      "note" : ""\n' +
      '    } ],\n' +
      '    "componentsFolderDepth" : 1,\n' +
      '    "components" : [ ],\n' +
      '    "metaComponents" : [ ],\n' +
      '    "includeRemainingFiles" : true,\n' +
      '    "dependenciesFinder" : {\n' +
      '      "useBuiltInDependencyFinders" : true,\n' +
      '      "rules" : [ ],\n' +
      '      "metaRules" : [ ]\n' +
      '    } "renderingOptions" : {\n' +
      '      "orientation" : "TB"\n' +
      '    }\n' +
      '  }, {\n' +
      '    "name" : "package level",\n' +
      '    "scope" : "main",\n' +
      '    "filters" : [ ],\n' +
      '    "componentsFolderDepth" : 19,\n' +
      '    "components" : [ ],\n' +
      '    "metaComponents" : [ ],\n' +
      '    "includeRemainingFiles" : false,\n' +
      '    "dependenciesFinder" : {\n' +
      '      "useBuiltInDependencyFinders" : true,\n' +
      '      "rules" : [ ],\n' +
      '      "metaRules" : [ ]\n' +
      '    } "renderingOptions" : {\n' +
      '      "orientation" : "TB"\n' +
      '    }\n' +
      '  } ],';
  }

  getLogicalDecompositionMetaDependenciesFragment() {
    return `
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
    ],
    `;
  }

  getCrossCuttingConcernFragment() {
    return '  "crossCuttingConcerns" : [ {\n' +
      '    "name" : "general",\n' +
      '    "concerns" : [ {\n' +
      '      "name" : "exception handling",\n' +
      '      "sourceFileFilters" : [ {\n' +
      '        "pathPattern" : ".*[.]java",\n' +
      '        "contentPattern" : ".* try \\\\{.*",\n' +
      '        "include" : true,\n' +
      '        "note" : ""\n' +
      '      } ]\n' +
      '    }, {\n' +
      '      "name" : "logging",\n' +
      '      "sourceFileFilters" : [ {\n' +
      '        "pathPattern" : "",\n' +
      '        "contentPattern" : "import .*logging[.]Log.*",\n' +
      '        "include" : true,\n' +
      '        "note" : ""\n' +
      '      } ]\n' +
      '    }, {\n' +
      '      "name" : "file operations",\n' +
      '      "sourceFileFilters" : [ {\n' +
      '        "pathPattern" : "",\n' +
      '        "contentPattern" : "import .*java[.]io[.]File.*",\n' +
      '        "include" : true,\n' +
      '        "note" : ""\n' +
      '      } ]\n' +
      '    }, {\n' +
      '      "name" : "javafx",\n' +
      '      "sourceFileFilters" : [ {\n' +
      '        "pathPattern" : "",\n' +
      '        "contentPattern" : "import javafx.*",\n' +
      '        "include" : true,\n' +
      '        "note" : ""\n' +
      '      } ]\n' +
      '    } ]\n' +
      '  } ],';
  }

  getGoalsAndControlsFragment() {
    return '    "goalsAndControls": [ {\n' +
      '        "goal": "Keep system small and simple",\n' +
      '        "description": "",\n' +
      '        "controls": [ {\n' +
      '            "metric": "DUPLICATION_PERCENTAGE",\n' +
      '            "description": "Number of files",\n' +
      '            "desiredRange": {\n' +
      '                "min": "0",\n' +
      '                "max": "5",\n' +
      '                "tolerance": "1"\n' +
      '            }\n' +
      '        } ]\n' +
      '        }\n' +
      '    ],\n';
  }

  getCompareResultsWithFragment() {
    return '    "compareResultsWith": [ {\n' +
      '        "label": "reference",\n' +
      '        "analysisResultsPath": "history/start/analysisResults.json"\n' +
      '    }],\n';
  }

  getSummaryFindingsFragment() {
    return '"summaryFindings": ["note 1", "note 2"]';
  }

  getMetaConcernsFragment() {
    return `
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
    `;
  }

  getLandscapeConfig() {
    return '{\n' +
      '  "metadata": {\n' +
      '    "name": "",\n' +
      '    "description": "",\n' +
      '    "logoLink": "",\n' +
      '    "links": []\n' +
      '  },\n' +
      '  "analysisRoot": "",\n' +
      '  "groups": [\n' +
      '    {\n' +
      '      "metadata": {\n' +
      '        "name": "",\n' +
      '        "description": "",\n' +
      '        "logoLink": "",\n' +
      '        "links": []\n' +
      '      },\n' +
      '      "projects": [\n' +
      '        {\n' +
      '          "analysisResultsPath": "<...>/reports/data/analysisResults.json",\n' +
      '          "htmlReportsIndexPath": "<...>/reports/html/index.html",\n' +
      '          "note": ""\n' +
      '        }\n' +
      '      ],\n' +
      '      "subGroups": []\n' +
      '    }\n' +
      '  ]\n' +
      '}\n';
  }
}
