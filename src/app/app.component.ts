import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './domain/product';
import { ProductService } from './services/productservice';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        InputTextModule,
        TextareaModule,
        InputNumberModule,
        SelectModule,
        RadioButtonModule,
        RatingModule,
        ToolbarModule,
        ToastModule
    ],
    providers: [ConfirmationService, MessageService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private productService = inject(ProductService);
    private messageService = inject(MessageService);
    private confirmationService = inject(ConfirmationService);

    productDialog = signal<boolean>(false);
    products = signal<Product[]>([]);
    product = signal<Product>({});
    selectedProducts = signal<Product[]>([]);
    submitted = signal<boolean>(false);

    statuses = [
        { label: 'INSTOCK', value: 'instock' },
        { label: 'LOWSTOCK', value: 'lowstock' },
        { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];

    ngOnInit() {
        this.productService.getProducts().then(data => this.products.set(data));
    }

    openNew() {
        this.product.set({});
        this.submitted.set(false);
        this.productDialog.set(true);
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const selected = this.selectedProducts();
                this.products.update(products =>
                    products.filter(val => !selected.includes(val))
                );
                this.selectedProducts.set([]);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    }

    editProduct(product: Product) {
        this.product.set({ ...product });
        this.productDialog.set(true);
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products.update(products =>
                    products.filter(val => val.id !== product.id)
                );
                this.product.set({});
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.productDialog.set(false);
        this.submitted.set(false);
    }

    saveProduct() {
        this.submitted.set(true);
        const currentProduct = this.product();

        if (currentProduct.name?.trim()) {
            if (currentProduct.id) {
                this.products.update(products => {
                    const index = this.findIndexById(currentProduct.id!, products);
                    products[index] = currentProduct;
                    return [...products];
                });
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                const newProduct = {
                    ...currentProduct,
                    id: this.createId(),
                    image: 'product-placeholder.svg'
                };
                this.products.update(products => [...products, newProduct]);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.productDialog.set(false);
            this.product.set({});
        }
    }

    findIndexById(id: string, products: Product[]): number {
        return products.findIndex(p => p.id === id);
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
