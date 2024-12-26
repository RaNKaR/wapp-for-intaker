import { Routes } from '@angular/router';

export const routes: Routes = [
  // main page
  {
    path: '',
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
  }
];
