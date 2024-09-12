import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/contenedor/contenedor.component').then(
        (c) => c.ContenedorComponent
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
