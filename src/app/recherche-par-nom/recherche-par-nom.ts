import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { SearchFilterPipe } from "../search-filter-pipe";
import { Auth } from '../services/auth';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-recherche-par-nom',
  imports: [RouterLink,CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styleUrls:[ './rechercheN.css']
})
export class RechercheParNom implements  OnInit{
  nomEvenement!: string;
  allevenements!: Evenement[];
  evenements: Evenement[] = []; 
  searchTerm!: string;
  IdGenre!: number;


  constructor(private evenementService: EvenementService , public auth: Auth, private router: Router) {}
  ngOnInit(): void {
      this.evenementService.listeEvenements1().subscribe (events => {
      console.log(events);
      this.evenements = events;
      
      
      
    })

    const loggedIn = this.auth.isloggedIn || localStorage.getItem('isloggedIn') === 'true';
  if (!loggedIn) {
    this.router.navigate(['/login']);
  }
    
  }

  supprimerEvenement(event: Evenement) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf){
  this.evenementService.supprimerProduit(event); 
this.evenements=this.evenementService.rechercherParGenre(this.IdGenre);}}

  onKeyUp(filterText: string) {
    this.evenements = this.allevenements.filter(item =>
      item.nomEvenement.toLowerCase().includes(filterText));
  }
    
}
