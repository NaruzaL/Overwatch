import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';


const appRoutes: Routes = [
  {
    path:'',
    component: CharacterListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
