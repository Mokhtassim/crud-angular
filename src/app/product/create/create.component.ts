import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
  });
  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private productService: ProductService
  ) {
    dialogRef.disableClose = true;
  }

  onSubmit(): void {
    const product: Product = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
    };
    console.log('submit', this.productForm.value);
    this.productService.create(product).subscribe(
      () => {
        this.dialogRef.close();
        console.log('save success');
      },
      (error) => {
        console.error('error', error);
      }
    );
  }
}
