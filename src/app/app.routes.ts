import { Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements';
import { AddEvenementComponent } from './add-evenement/add-evenement';
import { UpdateEvenementComponent } from './update-evenement/update-evenement';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
    {path: "evenements", component : EvenementsComponent},
    {path: "add-evenement", component : AddEvenementComponent},
    {path: "updateEvenement/:id", component: UpdateEvenementComponent},
    {path: "rechercheParGenre", component : RechercheParGenreComponent},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: "", redirectTo: "evenements", pathMatch: "full"}
];
