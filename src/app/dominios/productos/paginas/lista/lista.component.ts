import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { Producto } from '../../../modelos/Producto'
import { HeaderComponent } from '../../../compartida/header/header.component'
import { CartServiceService } from 'src/app/dominios/service/cart-service.service';
import { ProductoService } from 'src/app/dominios/service/producto.service';
import { Categoria } from 'src/app/dominios/modelos/categoria';
import { CategoriaService } from 'src/app/dominios/service/categoria.service';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, ProductoComponent, HeaderComponent, RouterLinkWithHref,],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  productos = signal<Producto[]>([]);
  categorias = signal<Categoria[]>([]);
  private cartService = inject(CartServiceService);
  private productoService = inject(ProductoService);
  private categoriaService = inject(CategoriaService);
  @Input() categoria_id?: string;


  ngOnInit() {
    this.getCategorias();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProductos();
  }

  addToCart(product: Producto) {
    this.cartService.addToCart(product)
  }
  private getProductos() {
    this.productoService.getProductos(this.categoria_id)
    .subscribe({
      next: (productos) => {
        this.productos.set(productos);
      },
      error: () => {
        
      }
    })
  }
  private getCategorias() {
    this.categoriaService.getAll()
    .subscribe({
      next: (data) => {
        this.categorias.set(data);
      },
      error: () => {
        
      }
    })
  }

  

}
