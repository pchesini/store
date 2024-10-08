import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from "../../../compartida/componente/contador/contador.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContadorComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export  class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber) 
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value) 
  }
}
