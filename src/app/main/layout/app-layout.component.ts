import { Component, Injectable, OnInit } from '@angular/core';
import { ScreenToggle } from './api/models/toggle-sidebar.model';
import { SidebarService } from './api/services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})

@Injectable({ providedIn: 'root' })
export class AppLayoutComponent implements OnInit {
  title = 'Centaur';
  screenWidth = null;
  isCollapsed = null;
  darkMode = false;

  constructor(private sidebarService: SidebarService) {

  }

  ngOnInit(): void {
    this.sidebarService.getWidth().subscribe({
      next: (response) => {
        this.screenWidth = response;
      }
    });

    this.sidebarService.getMode().subscribe({
      next: (response) => {
        this.darkMode = response;
      }
    });

    this.sidebarService.isCollapsed().subscribe({
      next: (response) => {
        this.isCollapsed = response;
        console.log('Body', this.isCollapsed)
      }
    });

  }
}
