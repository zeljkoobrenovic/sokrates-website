import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-config-landscape',
  templateUrl: './config-landscape.component.html',
  styleUrls: ['./config-landscape.component.less']
})
export class ConfigLandscapeComponent implements OnInit {

  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe(result => this.isSmallScreen = breakpointObserver.isMatched('(max-width: 799px)'));
  }

  ngOnInit() {
  }

  getConfiguration() {
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
