import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);

  constructor() { }

  getProductos(){
    return this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products');
  }
}
