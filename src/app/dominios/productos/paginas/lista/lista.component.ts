import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { Producto } from '../../../modelos/Producto'

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, ProductoComponent],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  productos = signal<Producto[]>([]);

  constructor() {
    const initProductos: Producto[]  = [
      {
        id: Date.now(),
        titulo: 'Pro 1',
        precio: 100,
        imagen: 'https://picsum.photos/640/640?r=23',
        fechaCreacion: new Date().toISOString()
      },
      {
        id: Date.now(),
        titulo: 'Pro 2',
        precio: 100,
        imagen: 'https://picsum.photos/640/640?r=12',
        fechaCreacion: new Date().toISOString()
      },
      {
        id: Date.now(),
        titulo: 'Pro 3',
        precio: 100,
        imagen: 'https://picsum.photos/640/640?r=1212',
        fechaCreacion: new Date().toISOString()
      },
      {
        id: Date.now(),
        titulo: 'Pro 1',
        precio: 100,
        imagen: 'https://picsum.photos/640/640?r=23',
        fechaCreacion: new Date().toISOString()
      },
      {
        id: Date.now(),
        titulo: 'Pro 2',
        precio: 100,
        imagen: 'https://picsum.photos/640/640?r=12',
        fechaCreacion: new Date().toISOString()
      },
      {
        id: Date.now(),
        titulo: 'Pro 3',
        precio: 100,
        imagen: 'https://picsum.photos/640/640?r=1212',
        fechaCreacion: new Date().toISOString()
      }
    ];
    this.productos.set(initProductos);
  }

  fromChild(event: string) {
    console.log('estamos en al padre');
    console.log(event);
  }

}
