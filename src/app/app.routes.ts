import { Routes } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { ViewComponent } from './product/view/view.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // { path: 'product/products', component: ProductsComponent },
  { path: 'product/create', component: CreateComponent },
  { path: 'product/edit', component: EditComponent },
  { path: 'product/:postId/view', component: ViewComponent },
];
