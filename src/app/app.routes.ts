import { Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements';
import { AddEvenementComponent } from './add-evenement/add-evenement';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Register } from './register/register';
import { Login } from './login/login';
import { UpdateEvenementComponent } from './update-evenement/update-evenement';
import { Forbidden } from './forbidden/forbidden';
import { evenementGuard } from './evenement-guard';
import { ListeGenres } from './liste-genres/liste-genres';

export const routes: Routes = [
    {path: "evenements", component : EvenementsComponent},
    {path: "add-evenement", component : AddEvenementComponent, canActivate:[evenementGuard]},
    {path: "updateEvenement/:id", component: UpdateEvenementComponent},
    {path: "listeGenres", component : ListeGenres},
    {path: "rechercheParGenre", component : RechercheParGenreComponent},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: 'app-forbidden', component: Forbidden},
    {path:'register', component:Register},
    {path: 'login', component: Login},
    {path: "", redirectTo: "evenements", pathMatch: "full"}
];
