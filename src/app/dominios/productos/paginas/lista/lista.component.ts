import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../componentes/producto/producto.component';
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, ProductoComponent],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
    fromChild(event: string) {
      console.log('estamos en al padre');
      console.log(event);
    }

}
