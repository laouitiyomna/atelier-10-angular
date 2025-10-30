import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  
  evenements: Evenement[] = [];
  evenement!: Evenement;
  genres: Genre[] = [];
  evenementsRecherche: Evenement[] = [];  

  constructor() {
    this.genres = [
  { idGenre: 1, nomGenre: "Culturel" },
  { idGenre: 2, nomGenre: "Académique" },
  { idGenre: 3, nomGenre: "Sportif" },
  { idGenre: 4, nomGenre: "Scientifique" },
  { idGenre: 5, nomGenre: "Artistique" }
];

    
  this.evenements = [
  // 🎭 Culturel
  {
    idEvenement: 1,
    nomEvenement: "Festival International de Musique",
    lieu: "Hammamet",
    dateEvenement: new Date("2025-07-12"),
    organisateur: "Ministère de la Culture",
    Genre: { idGenre: 1, nomGenre: "Culturel" },
    email: "contact@culture.gov.tn"
  },
  {
    idEvenement: 2,
    nomEvenement: "Salon du Livre de Tunis",
    lieu: "Tunis",
    dateEvenement: new Date("2025-04-10"),
    organisateur: "Union des Éditeurs Tunisiens",
    Genre: { idGenre: 1, nomGenre: "Culturel" },
    email: "info@editeurs.tn"
  },

  // 🎓 Académique
  {
    idEvenement: 3,
    nomEvenement: "Journée des Projets Étudiants",
    lieu: "Sousse",
    dateEvenement: new Date("2025-05-14"),
    organisateur: "Institut Supérieur des Sciences Appliquées",
    Genre: { idGenre: 2, nomGenre: "Académique" },
    email: "contact@issa-sousse.tn"
  },

  // 🏅 Sportif
  {
    idEvenement: 4,
    nomEvenement: "Tournoi National de Basketball",
    lieu: "Sfax",
    dateEvenement: new Date("2025-10-05"),
    organisateur: "Fédération Tunisienne de Basketball",
    Genre: { idGenre: 3, nomGenre: "Sportif" },
    email: "ftbb@basket.tn"
  },
  {
    idEvenement: 5,
    nomEvenement: "Marathon de Tunis",
    lieu: "Tunis",
    dateEvenement: new Date("2025-11-18"),
    organisateur: "Fédération Tunisienne d’Athlétisme",
    Genre: { idGenre: 3, nomGenre: "Sportif" },
    email: "contact@fta.tn"
  },

  // 🔬 Scientifique
  {
    idEvenement: 6,
    nomEvenement: "Forum National de la Recherche et de l’Innovation",
    lieu: "Monastir",
    dateEvenement: new Date("2025-09-09"),
    organisateur: "Ministère de l’Enseignement Supérieur et de la Recherche Scientifique",
    Genre: { idGenre: 4, nomGenre: "Scientifique" },
    email: "research@mesrs.tn"
  },

  // 🎨 Artistique
  {
    idEvenement: 7,
    nomEvenement: "Exposition d’Art Contemporain",
    lieu: "La Marsa",
    dateEvenement: new Date("2025-05-10"),
    organisateur: "Galerie Le Violon Bleu",
    Genre: { idGenre: 5, nomGenre: "Artistique" },
    email: "info@violonbleu.tn"
  },
  {
    idEvenement: 8,
    nomEvenement: "Festival du Film Indépendant",
    lieu: "Sousse",
    dateEvenement: new Date("2025-08-22"),
    organisateur: "Association Culture et Lumière",
    Genre: { idGenre: 5, nomGenre: "Artistique" },
    email: "contact@culture-lumiere.tn"
  }
];


}

  listeEvenements1(): Observable<Evenement[]> {
    return of(this.evenements);}

  supprimerProduit(event: Evenement) { //supprimer le produit prod du tableau produits 
    const index = this.evenements.indexOf(event, 0); if (index > -1) { this.evenements.splice(index, 1); }
    //ou Bien /* this.produits.forEach((cur, index) => 
    // { if(prod.idProduit === cur.idProduit) { this.produits.splice(index, 1); } }); */ 
  }


  listeEvenements(): Evenement[] { return this.evenements; }


  ajouterEvenement(prod: Evenement) { this.evenements.push(prod); }


  consulterEvenement(id: number): Evenement { this.evenement = this.evenements.find(p => p.idEvenement == id)!; return this.evenement; }

  updateEvenement(event: Evenement) {
  const index = this.evenements.findIndex(e => e.idEvenement === event.idEvenement);
  if (index !== -1) {
    this.evenements[index] = event; // met à jour directement l'objet existant
  }
}



  listeGenres(): Genre[]
   { return this.genres; }


  consulterGenre(id:number): Genre{ return this.genres.find(cat => cat.idGenre == id)!; }

   rechercherParGenre(idGenre: number): Evenement[] {
    this.evenementsRecherche = [];
    this.evenements.forEach((cur, index) => {
      if (idGenre == cur.Genre?.idGenre) {
        console.log("cur " + cur);
        this.evenementsRecherche.push(cur);
      }
    });
    return this.evenementsRecherche;
  }

}
