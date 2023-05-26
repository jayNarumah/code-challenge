import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    baseUrl = `${environment.apiUrl}/data`;

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(this.baseUrl);
    }

    getById(id: string) {
        return this.http.get<Product>(`${this.baseUrl}/${id}`);
    }

    create(product: Product) {
        return this.http.post<Product>(`${this.baseUrl}`, product);
    }

    update(id: string, productData: Product) {
        return this.http.patch<Product>(`${this.baseUrl}/${id}`, productData);
    }

    delete(id: string) {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

}