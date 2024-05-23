import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name = "";
  isEditable = true;
  getValue(event: Event): string {
    console.log("event", (event.target as HTMLInputElement).value)
    return (event.target as HTMLInputElement).value;
  }
  handleSubmit() {
    console.log('input: ', );
  }
}

