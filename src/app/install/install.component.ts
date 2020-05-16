import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.less']
})
export class InstallComponent implements OnInit {

  isSmallScreen = false;

  constructor(private httpClient: HttpClient, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe(result => this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)'));
  }

  ngOnInit() {
  }
}
