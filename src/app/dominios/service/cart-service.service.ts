import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../modelos/Producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart = signal<Producto[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, producto) => total + producto.price,  0);
  })

  constructor(private http: HttpClient) { }

  addToCart(producto: Producto) {
    this.cart.update(state => [...state, producto]);
  }
}
