import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/productservice';

@Component({
  selector: 'app-manage-sales',
  templateUrl: './manage-sales.component.html',
  styleUrls: ['./manage-sales.component.css']
})

export class ManageSalesComponent implements OnInit {
  products: Product[];
  product: Product;
  isDetailMode = false;

  constructor(private productService: ProductService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
      }
    });
  }

  gotoDetail(id: string) {
    this.router.navigate(['/sales/detail', id]);
  }

  getSeverity(product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }

}
