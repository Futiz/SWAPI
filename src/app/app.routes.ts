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
  },
  {
    path: 'planets',
    loadComponent: () =>
      import('./planets/planets.component').then((m) => m.PlanetsComponent)
  },
  {
    path: 'films',
    loadComponent: () =>
      import('./films/films.component').then((m) => m.FilmsComponent)
  },
  {
    path: 'vehicles',
    loadComponent: () =>
      import('./vehicles/vehicles.component').then((m) => m.VehiclesComponent)
  },
  {
    path: 'starships',
    loadComponent: () =>
      import('./starships/starships.component').then((m) => m.StarshipsComponent)
  },
  {
    path: 'species',
    loadComponent: () =>
      import('./species/species.component').then((m) => m.SpeciesComponent)
  }

];