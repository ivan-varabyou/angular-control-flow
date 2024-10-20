import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'catalog', loadComponent: () => import('./components/catalog/catalog.component').then(m => m.CatalogComponent) },
    { path: 'games', loadComponent: () => import('./components/games/games.component').then(m => m.GamesComponent) },
    { path: 'switch', loadComponent: () => import('./components/switch/switch.component').then(m => m.SwitchComponent)},
    { path: 'elseif', loadComponent: () => import('./components/elseif/elseif.component').then(m => m.ElseifComponent)},
    { path: 'if', loadComponent: () => import('./components/if/if.component').then(m => m.IfComponent) },
];
