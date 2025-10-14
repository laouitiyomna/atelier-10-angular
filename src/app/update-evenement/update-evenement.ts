import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-evenement',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl:"./update-evenement.html",
  styles: ``
})

export class UpdateEvenementComponent implements OnInit {

 genres! : Genre[];
 updatedGenreId! : number;

updateEvenement() {
//console.log(this.currentProduit); 
this.evenementService.updateEvenement(this.currentEvenement);
this.router.navigate(['evenements']);
this.currentEvenement.Genre=this.evenementService.consulterGenre(this.updatedGenreId);
}
  currentEvenement = new Evenement();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private evenementService: EvenementService) { }
  ngOnInit() { // console.log(this.route.snapshot.params.id); 
    this.currentEvenement = this.evenementService.consulterEvenement(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentEvenement);
    this.genres = this.evenementService.listeGenres();
    this.updatedGenreId=this.currentEvenement.Genre.idGenre;
  }
}


