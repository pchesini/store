import { Pipe, PipeTransform } from '@angular/core';
//libreria de js, se debe instalar
import { formatDistance } from 'date-fns';
@Pipe({
  name: 'intervaloTiempo',
  standalone: true
})
export class IntervaloTiempoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);
  }

}


