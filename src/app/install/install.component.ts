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

  getBatch() {
    return '# remove the temporary analysis folder\n' +
      'rm -rf analysis\n' +
      '\n' +
      '# remove the reports folder\n' +
      'rm -rf reports\n' +
      '\n' +
      '# create temporary analysis folder\n' +
      'mkdir analysis\n' +
      'mkdir analysis/_sokrates\n' +
      '#create the reports folder\n' +
      'mkdir reports\n' +
      '\n' +
      '# copy Sokrates cofiguration file to the temporary folder\n' +
      'cp config.json analysis/_sokrates\n' +
      '\n' +
      'cd analysis\n' +
      '\n' +
      '# install latest version of Sokrates\n' +
      'curl -O https://d2bb1mtyn3kglb.cloudfront.net/builds/sokrates-0.9.jar\n' +
      '\n' +
      '# checkout the code\n' +
      'git clone https://github.com/zeljkoobrenovic/sokrates.git\n' +
      'mv temp-git-dir/* .\n' +
      'rm -rf temp-git-dir\n' +
      '\n' +
      '# run analysis\n' +
      'java -jar -Xmx10g sokrates-0.9.jar generateReports -reportAll\n' +
      '\n' +
      '# copy generated reports to the reports folder\n' +
      'cp -r _sokrates/reports/* ../reports\n' +
      '\n' +
      'cd ..\n' +
      '# remove the temporary analysis folder\n' +
      'rm -rf analysis\n';
  }
}
