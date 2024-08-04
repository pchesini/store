import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/dominios/modelos/Producto';
import { IntervaloTiempoPipe } from "../../../compartida/pipes/intervalo-tiempo.pipe";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, IntervaloTiempoPipe],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input({required: true}) producto!: Producto 

  
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.producto);
  }
  
}
export { Producto };

