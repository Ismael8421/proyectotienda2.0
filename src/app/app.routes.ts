import { Routes } from '@angular/router';
import { CartComponent } from './Views/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Views/store-home/store-home.component').then(m => m.StoreHomeComponent)
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./Views/store-detail/store-detail.component').then(m => m.StoreDetailComponent)
    },
    {
        path: 'not-found/:id',
        loadComponent: () => import('./Views/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: 'cart',
        component: CartComponent
    }
];
