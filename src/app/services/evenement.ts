import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements: Evenement[] = [];
  evenement!: Evenement;

genres: Genre[] = [];

  constructor() {
    this.genres = [ {idGenre : 1, nomGenre : "Culturel"}, 
      {idGenre : 2, nomGenre : "Académique"},
      {idGenre : 3, nomGenre : "Sportif"}];

    
  this.evenements = [
    {
      idEvenement: 1,
      nomEvenement: "Festival International de Musique",
      lieu: "Hammamet",
      dateEvenement: new Date("2025-07-12"),
      organisateur: "Ministère de la Culture",
      Genre: { idGenre: 1, nomGenre: "Culturel" }
    },
    {
      idEvenement: 2,
      nomEvenement: "Conférence sur l’Intelligence Artificielle",
      lieu: "Tunis",
      dateEvenement: new Date("2025-03-25"),
      organisateur: "Université de Tunis El Manar",
      Genre: { idGenre: 2, nomGenre: "Technologique" }
    },
    {
      idEvenement: 3,
      nomEvenement: "Tournoi National de Basketball",
      lieu: "Sfax",
      dateEvenement: new Date("2025-10-05"),
      organisateur: "Fédération Tunisienne de Basketball",
      Genre: { idGenre: 3, nomGenre: "Sportif" }
    }
  ];
}


  supprimerProduit(event: Evenement) { //supprimer le produit prod du tableau produits 
    const index = this.evenements.indexOf(event, 0); if (index > -1) { this.evenements.splice(index, 1); }
    //ou Bien /* this.produits.forEach((cur, index) => 
    // { if(prod.idProduit === cur.idProduit) { this.produits.splice(index, 1); } }); */ 
  }


  listeEvenements(): Evenement[] { return this.evenements; }


  ajouterEvenement(prod: Evenement) { this.evenements.push(prod); }


  consulterEvenement(id: number): Evenement { this.evenement = this.evenements.find(p => p.idEvenement == id)!; return this.evenement; }

  updateEvenement(event: Evenement) {
    
    const index = this.evenements.indexOf(event, 0);
    if (index > -1) {
      this.evenements.splice(index, 1); //supprimer l'ancien éléments
      this.evenements.splice(index, 0, event); // insérer le nouvel élément
    }
  }


  listeGenres(): Genre[]
   { return this.genres; }


  consulterGenre(id:number): Genre{ return this.genres.find(cat => cat.idGenre == id)!; }

}
