import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //private http = inject(HttpClient);

  
  constructor(private http: HttpClient) { }

  getProductos(categoria_id?: string){
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    if (categoria_id) {
      url.searchParams.set('categoryId', categoria_id);
    }
    return this.http.get<Producto[]>(url.toString());
  }
  getOne(id: string) {
    return this.http.get<Producto>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

}
