import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './domain/product';
import { ProductService } from './services/productservice';
import { SidebarService } from './main/layout/api/services/sidebar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService, MessageService, ProductService]
})
export class AppComponent implements OnInit {
    darkMode: boolean;
    constructor(private sidebarService: SidebarService) { }

    ngOnInit(): void {
        this.sidebarService.getMode().subscribe({
            next: (response) => {
                this.darkMode = response;
            }
        });

    }
}