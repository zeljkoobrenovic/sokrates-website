import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.less']
})
export class GalleryPageComponent implements OnInit {
  title = 'website';
  projects: any[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('assets/projects.json').subscribe((data: any[]) => {
      console.log(data);
      this.projects = data;
    });
  }

  reportsLink(folder, projectId) {
    return 'https://d3axxy9bcycpv7.cloudfront.net/'
      + folder + '/' + projectId + '/reports/html/index.html';
  }
}
