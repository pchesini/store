import { Routes } from '@angular/router';
//import { ListaComponent } from './dominios/productos/paginas/lista/lista.component'
//import { AboutComponent } from './dominios/info/paginas/about/about.component';
import { NotFoundComponent } from './dominios/info/paginas/not-found/not-found.component';
import { LayoutComponent } from './dominios/compartida/layout/layout.component';
//import { ProductoComponent } from './dominios/productos/componentes/producto/producto.component';
//import { ProductoDetalleComponent } from './dominios/productos/componentes/producto-detalle/producto-detalle.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent:  () => import('./dominios/productos/paginas/lista/lista.component')
            },
            {
                path: 'about',
                loadComponent: () => import('./dominios/info/paginas/about/about.component')
            },
            {
                path: 'product/:id',
                loadComponent: () => import ('./dominios/productos/componentes/producto-detalle/producto-detalle.component')
            },
        ] 
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];
