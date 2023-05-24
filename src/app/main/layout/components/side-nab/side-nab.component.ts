import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ScreenToggle } from "../../api/models/toggle-sidebar.model";
import { SidebarService } from '../../api/services/sidebar.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-side-nab',
  templateUrl: './side-nab.component.html',
  styleUrls: ['./side-nab.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('350ms', style({ opacity: '1' }))
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('350ms', style({ opacity: '0' }))
      ])
    ]),
    // trigger('rotate', [
    //   transition(':enter', [
    //     style({ opacity: '0' }),
    //     animate('1000ms', style({ opacity: '1' }))
    //   ]),
    //   transition(':leave', [
    //     style({ opacity: '1' }),
    //     animate('350ms', style({ opacity: '0' }))
    //   ])
    // ])
  ]
})
export class SideNabComponent implements OnInit {
  darkMode: boolean;
  @Output() onSidebarToggle: EventEmitter<ScreenToggle> = new EventEmitter();
  @HostListener('window:resize', ['$event']) onResize(data: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.sidebarService.setWidth(this.screenWidth);
    }
  }
  collapsed = null;
  screenWidth = 0;

  navData = [
    {
      routeLink: '',
      icon: 'pi pi-pencil',
      label: 'Manage Item',
    },
    {
      routeLink: '/sales',
      icon: 'pi pi-save',
      label: 'Manage Sales',
    }
  ];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.sidebarService.setWidth(this.screenWidth);
    this.sidebarService.getMode().subscribe({
      next: (response) => {
        this.darkMode = response;
      }
    });

    this.sidebarService.isCollapsed().subscribe({
      next: (response) => {
        this.collapsed = response;
      }
    })
  }

  toggleSidebar() {
    console.log('Sidebar Toggle ... ');
    this.collapsed = !this.collapsed;
    this.sidebarService.setCollapsibe(this.collapsed);
    this.sidebarService.setWidth(this.screenWidth)

    // this.onSidebarToggle.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  changeMode() {
    console.log('Mode Change ..')
    this.darkMode = !this.darkMode;
    this.sidebarService.setMode(this.darkMode);
  }
}
