import { Component, EventEmitter, Output } from '@angular/core';
import { ScreenToggle } from "../../api/models/toggle-sidebar.model";

@Component({
  selector: 'app-side-nab',
  templateUrl: './side-nab.component.html',
  styleUrls: ['./side-nab.component.css']
})
export class SideNabComponent {
  @Output() onSidebarToggle: EventEmitter<ScreenToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;

  navData = [
    {
      routeLink: '',
      icon: 'pi pi-pencil',
      label: 'Manage Item',
    }
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.onSidebarToggle.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  closeSidebar() {
    this.collapsed = false;
  }
}
