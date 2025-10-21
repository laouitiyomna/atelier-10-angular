import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evenements',
  imports: [CommonModule,RouterLink],
  templateUrl:'./evenements.html',
  styleUrls: ['./evenement.css']
  
})
export class EvenementsComponent implements OnInit { 
  evenements : Evenement []=[]; 


  constructor(private evenementService: EvenementService )
   { this.evenements = evenementService.listeEvenements(); }

  supprimerEvenement(event: Evenement) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
   this.evenementService.supprimerProduit(event); }



  ngOnInit(): void {

  }
}
