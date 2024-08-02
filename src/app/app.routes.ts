import { Routes } from '@angular/router';
import { ListaComponent } from './dominios/productos/paginas/lista/lista.component'
import { AboutComponent } from './dominios/info/paginas/about/about.component';
import { NotFoundComponent } from './dominios/info/paginas/not-found/not-found.component';
import { LayoutComponent } from './dominios/compartida/layout/layout.component';
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
        ]
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];
