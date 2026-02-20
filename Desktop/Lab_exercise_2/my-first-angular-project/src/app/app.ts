import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProductsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}