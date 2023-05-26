import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/productservice';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailResolver implements Resolve<Product> {


    constructor(
        private readonly productService: ProductService,
        private messageService: MessageService,
        private router: Router,
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const id = route.params['id'];


        return this.productService.getById(id)
            .pipe(
                map(response => {
                    console.log('resp', response)
                    return response
                }),
                catchError((error, caught) => {
                    this.messageService.add({ severity: 'error', summary: 'Oops!!!', detail: 'can not load the data', life: 3000 });
                    this.router.navigate(['/sales']);
                    return caught;
                }),
            );
    }
}
