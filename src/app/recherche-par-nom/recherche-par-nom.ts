import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { SearchFilterPipe } from "../search-filter-pipe";



@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styleUrls:[ './rechercheN.css']
})
export class RechercheParNom implements  OnInit{
  nomEvenement!: string;
  allevenements!: Evenement[];
  evenements: Evenement[] = []; 
  searchTerm!: string;
  IdGenre!: number;


  constructor(private evenementService: EvenementService) {}
  ngOnInit(): void {
      this.evenementService.listeEvenements1().subscribe (events => {
      console.log(events);
      this.evenements = events;
    })
  }

  onKeyUp(filterText: string) {
    this.evenements = this.allevenements.filter(item =>
      item.nomEvenement.toLowerCase().includes(filterText));
  }
    
}
