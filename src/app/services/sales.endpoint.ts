import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product, Sale } from '../domain/product';
import { environment } from 'src/environments/environment';
import { ProductService } from './productservice';

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    baseUrl = `${environment.apiUrl}/sales`;

    constructor(private http: HttpClient, private productServive: ProductService) { }

    getSales() {
        return this.http.get<Sale[]>(this.baseUrl);
    }

    getById(id: string) {
        return this.http.get<{ data: Sale }>(`${this.baseUrl}?/${id}`);
    }

    create(sale: Sale) {
        return this.http.post<any>(`${this.baseUrl}`, sale);
    }

    update(id: string, saleData: Sale) {
        return this.http.patch<Product>(`${this.baseUrl}/${id}`, saleData);
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