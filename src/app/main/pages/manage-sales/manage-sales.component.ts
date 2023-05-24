import { Component, OnInit } from '@angular/core';
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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      }
    });
  }

  gotoDetail(data: Product) {
    this.product = data;
    this.isDetailMode = true;
  }

}
