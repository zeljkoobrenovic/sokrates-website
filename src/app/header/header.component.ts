import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  mobile = false;

  constructor() {
  }

  ngOnInit() {
  }

  onResize(event) {
    this.mobile = event.target.innerWidth < 600;
  }

}
