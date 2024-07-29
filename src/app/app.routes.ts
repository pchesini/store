import { Routes } from '@angular/router';
import { ListaComponent } from './dominios/productos/paginas/lista/lista.component'
import { AboutComponent } from './dominios/info/paginas/about/about.component';
export const routes: Routes = [
    {
        path: '',
        component: ListaComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
