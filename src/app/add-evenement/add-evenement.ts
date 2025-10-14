import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evenement',
  imports: [FormsModule],
  templateUrl: './add-evenement.html',
})
export class AddEvenementComponent implements OnInit {
  
   newEvenement = new Evenement();

   genres! : Genre[];
    newidGenre! : number;
     newGenre! : Genre;

  constructor(private evenementService: EvenementService ,
    private router :Router
  ) { }

   addEvenement(){ // console.log(this.newEvenement); 
    this.newGenre = this.evenementService.consulterGenre(this.newidGenre); this.newEvenement.Genre = this.newGenre;
   this.evenementService.ajouterEvenement(this.newEvenement);
  this.router.navigate(['evenements']); }
  
  
  ngOnInit(): void {
    this.genres = this.evenementService.listeGenres();
  }

 

}
