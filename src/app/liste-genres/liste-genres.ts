import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { EvenementService } from '../services/evenement';
import { CommonModule } from '@angular/common';
import { UpdateGenre } from "../update-genre/update-genre";

@Component({
  selector: 'app-liste-genres',
  standalone: true,
  imports: [CommonModule, UpdateGenre],
  templateUrl: './liste-genres.html',
  styleUrls: ['./liste-genres.css']
})
export class ListeGenres implements OnInit {

  genres: Genre[] = [];
  updatedGen!: Genre;
  ajout = true;

  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.chargerGenres();
  }

  chargerGenres() {
    this.genres = this.evenementService.listeGenres();
    this.resetForm();
  }

  trackByIdGenre(index: number, genre: Genre): number {
    return genre.idGenre;
  }

  selectGenre(gen: Genre) {
    this.updatedGen = { ...gen };
    this.ajout = false;
  }

  genreUpdated(updated: Genre) {
  if (this.ajout) {
    // Générer un id unique
    updated.idGenre = this.genres.length > 0 
      ? Math.max(...this.genres.map(g => g.idGenre)) + 1 
      : 1;

    // Ajouter via le service (le tableau du service est le même que this.genres)
    this.evenementService.ajouterGenre(updated);
  } else {
    this.evenementService.updateGenre(updated);
  }

  this.resetForm();
}

  resetForm() {
    this.updatedGen = { idGenre: 0, nomGenre: "" };
    this.ajout = true;
  }
}
