import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetInfoComponent } from './components/pet-info/pet-info.component';


const appRoutes: Routes = [
    { path: '', component: PetListComponent },
    { path: 'pets', component: PetListComponent },
    { path: 'pets/:id', component: PetInfoComponent },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);