import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pageable, Product, ResponseProducts } from '../product';
import { ProductService } from '../product.service';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  columnsProcduct = ['id', 'name', 'price'];
  products: Product[] = [];
  pageable: Pageable = {
    page: 0,
    size: 2,
  };
  totalElements: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService
      .getAll(this.pageable)
      .subscribe((data: ResponseProducts) => {
        this.products = data.content;
        this.totalElements = data.totalElements;
        console.log('totalElement', this.totalElements);
      });
  }

  onChangePageable(event: PageEvent): void {
    this.pageable = {
      page: event.pageIndex,
      size: event.pageSize,
    };
    this.loadProducts();
  }
}
