import { Routes } from '@angular/router';
import { ListaComponent } from './dominios/productos/paginas/lista/lista.component'
import { AboutComponent } from './dominios/info/paginas/about/about.component';
import { NotFoundComponent } from './dominios/info/paginas/not-found/not-found.component';
import { LayoutComponent } from './dominios/compartida/layout/layout.component';
//import { ProductoComponent } from './dominios/productos/componentes/producto/producto.component';
import { ProductoDetalleComponent } from './dominios/productos/componentes/producto-detalle/producto-detalle.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListaComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'product/:id',
                component: ProductoDetalleComponent
            },
        ]
        /*            {
                path: '',
                loadComponent: () => import('./domains/products/pages/list/list.component')
            },
            {
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component')
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component')
            }
        ]
*/ 
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];
