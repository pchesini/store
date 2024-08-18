import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //private http = inject(HttpClient);

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Categoria[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
  
}
