import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    baseUrl = ' http://localhost:3000/data';

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band",
        "Blue T-Shirt",
        "Bracelet",
        "Brown Purse",
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(this.baseUrl);
    }

    getById(id: string) {
        return this.http.get<{ data: Product }>(`${this.baseUrl}?code=${id}`);
    }

    create(product: Product) {
        return this.http.post<any>(`${this.baseUrl}`, product);
    }

    update(id: string, productData: Product) {
        console.log(id)
        return this.http.patch<Product>(`${this.baseUrl}/${id}`, productData);
    }

    delete(id: string) {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    deleteMultiple(ids: string[]) {
        console.log(ids)
        const httpOpt = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: ids,
        };
        return this.http.delete<void>(`${this.baseUrl}`, httpOpt);
    }

}