import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  constructor(public dialogRef: MatDialogRef<CreateComponent>) {
    dialogRef.disableClose = true;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
