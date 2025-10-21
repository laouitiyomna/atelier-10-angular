import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EvenementService } from '../services/evenement';
import { Genre } from '../model/genre.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-genre',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recherche-par-genre.html',
  styleUrls: ['./recherche.css']
})
export class RechercheParGenreComponent implements OnInit {
  evenements: Evenement [] = [];
  IdGenre!: number;
  genres:Genre[]=[];

  constructor(private evenementService: EvenementService ) { 
    this.genres=evenementService.listeGenres();
    this.evenements = [];
  } 

  onChange(){
    console.log(this.IdGenre);
    this.evenements=this.evenementService.rechercherParGenre(this.IdGenre);
  }

 supprimerEvenement(event: Evenement) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf){
  this.evenementService.supprimerProduit(event); 
this.evenements=this.evenementService.rechercherParGenre(this.IdGenre);}}

ngOnInit(): void {
  
}

}
