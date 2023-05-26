import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product, Sale } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/productservice';
import { PdfService } from '../../layout/api/services/pdf.service';
import { SaleService } from 'src/app/services/sales.endpoint';

@Component({
  selector: 'app-manage-sales',
  templateUrl: './manage-sales.component.html',
  styleUrls: ['./manage-sales.component.css']
})

export class ManageSalesComponent implements OnInit {
  products: Product[];
  sales: Sale[];
  product: Product;
  canShowSalesRecord = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private pdfService: PdfService,
    private saleService: SaleService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
      }
    });

    this.saleService.getSales().subscribe({
      next: (response) => {
        this.sales = response;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
      }
    });
  }

  gotoDetail(id: string) {
    this.router.navigate(['/sales/detail', id]);
  }

  getImageName(id: string) {
    this.products.find((item) => item.id == id);
  }
  getItemName(id: string) {
    const prod = this.products.find((item) => item.id == id);
    if (prod) {
      return prod.name;
    }
    return null;
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
  toggleTable() {
    this.canShowSalesRecord = !this.canShowSalesRecord;
  }

  download() {
    console.log('Download')
    this.pdfService.downloadPdf();
  }

}
