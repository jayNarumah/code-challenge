import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/domain/product';
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

  constructor(private readonly route: ActivatedRoute,
    private messageService: MessageService,
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
    const newQuantity = this.totalQuantity - this.quantity;
    const data = {
      ...this.product,
      quantity: newQuantity
    };
    this.saleService.create(data, this.quantity).subscribe({
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Operation Successfully', life: 3000 });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
      }
    });
  }

}
