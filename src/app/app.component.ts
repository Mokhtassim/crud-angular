import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './product/products/products.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { Links } from './product/product';
import { CreateComponent } from './product/create/create.component';
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
    MatDialogContent,
    MatDialogActions,
  ],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  links: Links[] = [
    { label: 'create product', link: '/product/create' },
    { label: 'edit product', link: '/product/edit' },
  ];
  title = 'CRUD';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
   const dialogRef = this.dialog.open(CreateComponent, {
      width: '250px',
      position: { left: '40%' },
      disableClose: true,
      backdropClass: 'backdrop-custom-class',
      hasBackdrop: true,
      panelClass: 'full-screen-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Additional logic after dialog close can be placed here
    });
  }

  
}
