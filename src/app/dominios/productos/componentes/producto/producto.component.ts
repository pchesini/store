import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input({required: true}) img: string = '';
  @Input({required: true}) precio: number = 0;
  @Input({required: true}) titulo: string = '';
  
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('hola este es un msg desde el hijo ' + this.titulo);
  }
}
