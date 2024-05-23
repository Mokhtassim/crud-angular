import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';
import { Pageable, Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:8080/products';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  //get all products
  getAll(pageable: Pageable): Observable<any> {
    return this.httpClient
      .get(
        `${this.apiURL}/getALLPages?page=${pageable.page}&size=${pageable.size}`
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('err', err);
          return throwError(err);
        })
      );
  }

  //create product
  create(product: Product): Observable<any> {
    return this.httpClient
      .post(`${this.apiURL}/add`, product, this.httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('err', err);
          return throwError(err);
        })
      );
  }

  //update product
  update(product: Product): Observable<any> {
    return this.httpClient
      .put(`${this.apiURL}/update`, product, this.httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('err', err);
          return throwError(err);
        })
      );
  }

  //delete product
  delete(id: number) {
    return this.httpClient.delete(`${this.apiURL}/delete?id=${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('err', err);
        return throwError(err);
      })
    );
  }
}
