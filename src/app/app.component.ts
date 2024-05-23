import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './product/products/products.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule, MatDialog} from '@angular/material/dialog'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ProductsComponent,
    MatToolbarModule,
  ],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  links: { label: string; link: string }[] = [
    // { label: 'products', link: '/product/products' },
    { label: 'create product', link: '/product/create' },
    { label: 'edit product', link: '/product/edit' },
  ];
  title = 'CRUD';

  constructor(private _dialog: MatDialog) {
    
  }
}
