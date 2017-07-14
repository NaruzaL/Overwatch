import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path:'',
    component: CharacterListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'character/:id',
    component: CharacterDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
