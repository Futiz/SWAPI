import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'people',
    loadComponent: () =>
      import('./people/people.component').then((m) => m.PeopleComponent)
  }
];