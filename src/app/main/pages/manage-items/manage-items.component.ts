import { Component } from '@angular/core';
import 'jspdf-autotable';
import "jspdf-autotable";
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/productservice';
import { PdfService } from '../../layout/api/services/pdf.service';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent {
  productDialog: boolean;

  products: Product[];

  product: Product;
  tableRows = 10;

  selectedProducts: Product[];
  isUpdateMode = false;

  submitted: boolean;

  statuses: any[];

  constructor(
    private pdfService: PdfService,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (resp) => {
        this.products = resp;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
      }
    });

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.isUpdateMode = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedProducts.forEach((currentValue) => {
          this.productService.delete(currentValue.id).subscribe({
            next: (response) => { },
            error: () => {
              this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
            }
          })
        });

        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });

      }
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
    this.isUpdateMode = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.delete(product.id).subscribe({
          next: (response) => {
            console.log(response)
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
          }
        });
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim) {
      if (this.isUpdateMode) {
        this.productService.update(this.product.id, this.product).subscribe({
          next: (resp) => {
            this.products[this.findIndexById(this.product.id)] = this.product;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
          }
        });
      }
      else {
        const length = this.products.length + 1;
        this.product.id = (length + 500).toString();

        //to check whether the generated id already exist in the record
        const found = this.products.find((item) => item.id == this.product.id);
        if (found) {
          this.saveProduct();
        }

        this.product.image = 'product-placeholder.svg';
        this.product.code = this.createId();
        this.productService.create(this.product).subscribe({
          next: (response) => {
            this.products.push(response);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Oops !!!', detail: 'Error occurred', life: 3000 });
          }
        });
        this.isUpdateMode = false;
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};

      this.isUpdateMode = false;
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  download() {
    this.pdfService.downloadPdf();
  }
}
