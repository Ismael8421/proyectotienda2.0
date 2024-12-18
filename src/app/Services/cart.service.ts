import { Injectable } from '@angular/core';
import { Product } from '../Models/product.mode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  clearCart(): void {
    this.cart = [];
  }
}