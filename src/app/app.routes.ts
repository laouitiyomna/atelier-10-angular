import { Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements';
import { AddEvenementComponent } from './add-evenement/add-evenement';
import { UpdateEvenementComponent } from './update-evenement/update-evenement';

export const routes: Routes = [
    {path: "evenements", component : EvenementsComponent},
    {path: "add-evenement", component : AddEvenementComponent},
    {path: "updateEvenement/:id", component: UpdateEvenementComponent},
    {path: "", redirectTo: "evenements", pathMatch: "full"}
];
