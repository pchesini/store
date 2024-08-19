import { Pipe, PipeTransform } from '@angular/core';
//libreria de js, se debe instalar
import { formatDistance } from 'date-fns';
@Pipe({
  name: 'intervaloTiempo',
  standalone: true
})
export class IntervaloTiempoPipe implements PipeTransform {

  
  transform(value: string): string {
    try {
      const date = new Date(value);
      const today = new Date();

      if (isNaN(date.getTime())) {
        throw new Error('Fecha inválida');
      }

      return formatDistance(today, date);
    } catch (error) {
      // Convertimos el tipo de 'error' a 'Error'
      const errorMessage = (error as Error).message;
      console.error('Error en IntervaloTiempoPipe:', errorMessage);
      return 'Fecha inválida';
    }
  }
}
  
  
  /* transform(value: string): string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);
  } */




