import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
      {
        name: 'Laptop',
        price: 45000,
        available: true,
        image: 'images/thunder-robot.jpg'
      },
      {
        name: 'Phone',
        price: 15000,
        available: false,
        image: 'images/tecno-camon-40.jpg'
      },
      {
        name: 'Headphones',
        price: 2000,
        available: true,
        image: 'images/wireless-headphone.jpg'
      },
      {
        name: 'Keyboard',
        price: 1200,
        available: true,
        image: 'images/keyboard.jpg'
      }
    ];
  addToCart(product: any) {
   if (product.available) {
    alert(product.name + ' added to cart!');
  }
}

}