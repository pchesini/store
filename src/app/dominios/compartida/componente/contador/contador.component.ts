import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  contador = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {

    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.contador.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngAfterViewInit() {
  
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration')
    
  }

}
