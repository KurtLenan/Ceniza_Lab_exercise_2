import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoriesComponent }
];