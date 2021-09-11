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
  filter = '';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('assets/projects.json').subscribe((data: any[]) => {
      this.projects = data;
    });
  }

  projectsList() {
    const searchTerm = this.filter.toLowerCase();
    const filteredProjectGroups = [];

    this.projects.forEach(group => {
      const filteredGroup = {
        title: group.title,
        folder: group.folder,
        projects: group.projects.filter(p => !searchTerm || p.name.toLowerCase().includes(searchTerm))
      };
      if (filteredGroup.projects.length > 0) {
        filteredProjectGroups.push(filteredGroup);
      }
    });

    return filteredProjectGroups;
  }

  projectsCount() {
    let count = 0;
    this.projectsList().forEach(group => count += group.projects.length);
    return count;
  }

  reportsLink(folder, projectId) {
    return 'https://d3axxy9bcycpv7.cloudfront.net/'
      + folder + '/' + projectId + '/html/index.html';
  }
}
