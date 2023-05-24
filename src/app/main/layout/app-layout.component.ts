import { Component, OnInit } from '@angular/core';
import { ScreenToggle } from './api/models/toggle-sidebar.model';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  title = 'Centaur';
  screenWidth = 0;
  isCollapsed = false;


  ngOnInit(): void {

  }

  sidenabToggle(data: ScreenToggle) {
    this.screenWidth = data.screenWidth;
    this.isCollapsed = data.collapsed
  }

  getClass() {
    return '';
  }
}
