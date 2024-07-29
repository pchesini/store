import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<router-outlet />'
})
export class AppComponent {
  title = 'store';
}
