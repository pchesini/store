import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { Producto } from '../../../modelos/Producto'
import { HeaderComponent } from '../../../compartida/header/header.component'
import { CartServiceService } from 'src/app/dominios/service/cart-service.service';
import { ProductoService } from 'src/app/dominios/service/producto.service';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, ProductoComponent, HeaderComponent],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  productos = signal<Producto[]>([]);
  private cartService = inject(CartServiceService);
  private productService = inject(ProductoService);


ngOnInit() {
  this.productService.getProductos()
  .subscribe({
    next: (productos) => {
      this.productos.set(productos);
    },
    error: () => {
      
    }
  })
}
  

  addToCart(producto: Producto) {
    this.cartService.addToCart(producto)
  }

}
