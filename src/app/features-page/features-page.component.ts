import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.less']
})
export class FeaturesPageComponent implements OnInit {
  languages: any[];

  isSmallScreen = false;

  constructor(private httpClient: HttpClient, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe(result => this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)'));
  }

  ngOnInit() {
    this.httpClient.get('assets/languages.json').subscribe((data: any[]) => {
      console.log(data);
      this.languages = data.sort((a, b) => (a.name < b.name) ? -1 : ((b.name < a.name) ? 1 : 0));
      this.languages.forEach(item => item.show = false);
    });
  }

  toggleDisplay(lang) {
    lang.show = !lang.show;
  }

  getUnits(lang: any) {
    let text = 'X';
    lang.featuresDescription.forEach(feature => {
      if (feature.toLowerCase().includes('no unit size')) {
        text = '-';
      }
    });
    return text;
  }

  getDependencies(lang: any) {
    let text = 'X';
    lang.featuresDescription.forEach(feature => {
      if (feature.toLowerCase().includes('no dependency analysis')) {
        text = '-';
      }
    });
    return text;
  }

  isSpecificFeature(feature: any) {
    return !(feature.toLowerCase().includes('all basic standard analyses supported'));
  }
}
