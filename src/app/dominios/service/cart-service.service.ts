import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart = signal<Producto[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, producto) => total + producto.precio,  0);
  })

  constructor() { }

  addToCart(product: Producto) {
    this.cart.update(state => [...state, product]);
  }
}
