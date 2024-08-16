import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto/producto.component';
import { ProductoService } from '../../../service/producto.service';
import { CartServiceService } from '../../../service/cart-service.service';
@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent {
  @Input() id?: string;
  producto = signal<Producto | null>(null);
  cover = signal('');
  private productoService = inject(ProductoService );
  private cartService = inject(CartServiceService);

  ngOnInit() {
    if (this.id) {
      this.productoService.getOne(this.id)
      .subscribe({
        next: (producto) => {
          this.producto.set(producto);
          if (producto.images.length > 0) {
            this.cover.set(producto.images[0])
          }
        }
      })
    }
    
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const producto = this.producto();
    if (producto) {
      this.cartService.addToCart(producto);
    }
  }
}
