import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetInfoComponent } from './components/pet-info/pet-info.component';
import { AboutPetStoreComponent } from './components/about-pet-store/about-pet-store.component';
import { PetEditorComponent } from './components/pet-editor/pet-editor.component';


const appRoutes: Routes = [
    { path: '', component: PetListComponent },
    { path: 'about', component: AboutPetStoreComponent },
    { path: 'pets', component: PetListComponent },
    { path: 'add-pet', component: PetEditorComponent },
    { path: 'edit-pet/:id', component: PetEditorComponent },
    { path: 'pets/:id', component: PetInfoComponent },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);