import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../modelos/Producto';
import { CartServiceService } from '../../service/cart-service.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private CartServiceService = inject(CartServiceService);
  cart = this.CartServiceService.cart;
  total = this.CartServiceService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

 
}
