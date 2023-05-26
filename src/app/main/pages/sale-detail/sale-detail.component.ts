import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/productservice';
import { SaleService } from 'src/app/services/sales.endpoint';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  product: Product;
  quantity: number;
  totalQuantity: number;

  constructor(
    private readonly route: ActivatedRoute,
    private messageService: MessageService,
    private productService: ProductService,
    private saleService: SaleService,
  ) { }
  ngOnInit(): void {
    this.route.data
      .subscribe({
        next: (data) => {
          this.product = data['data'];
          this.totalQuantity = +this.product.quantity;
        },
        error: (error) => {

        },
      });
  }

  buy() {
    if (this.totalQuantity < this.quantity || (this.totalQuantity - this.quantity) < 0 || this.quantity <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Invalid Quantity', life: 3000 });
      return;
    }
    const newQuantity = this.totalQuantity - this.quantity;
    const data = {
      ...this.product,
      quantity: newQuantity
    };
    const saleRecord = {
      id: (new Date()).toString(),
      productId: this.product.id,
      quantity: this.product.quantity,
      amount: (+this.product.quantity) * (+this.product.price),
    }

    this.productService.update(this.product.id, this.product).subscribe({
      next: () => { },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error occured', life: 3000 });
        return;
      }
    });

    this.saleService.create(saleRecord).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Transaction successfully', life: 3000 });
      },
      error: (error) => {

      },
    });
    this.quantity = 0;
  }

}
