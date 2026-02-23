import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  cartCount: number = 0;
  totalPrice: number = 0;
  selectedCategory: string = 'All';
  showCategories: boolean = true;  

  products = [
    {
      name: 'ThunderRobot',
      price: 45000,
      available: true,
      image: 'images/thunder-robot.jpg',
      category: 'Devices'
    },
    {
      name: 'TecnoCamon40',
      price: 15000,
      available: false,
      image: 'images/tecno-camon-40.jpg',
      category: 'Devices'
    },
    {
      name: 'Headphone',
      price: 2000,
      available: true,
      image: 'images/wireless-headphone.jpg',
      category: 'Accessories'
    },
    {
      name: 'Keyboard',
      price: 1200,
      available: true,
      image: 'images/keyboard.jpg',
      category: 'Accessories'
    }
  ];

  addToCart(product: any) {
    if (product.available) {
      this.cartCount++;
      this.totalPrice += product.price;
      alert(product.name + ' added to cart!');
    }
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }

    return this.products.filter(
      product => product.category === this.selectedCategory
    );
  }

}