import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-evenement',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-evenement.html',
})
export class AddEvenementComponent implements OnInit {


  newEvenement = new Evenement();
  evenementForm!: FormGroup;
  genres!: Genre[];
  newidGenre!: number;
  newGenre!: Genre;


  constructor(private evenementService: EvenementService,
    private router: Router, private fb: FormBuilder
  ) { }

  addEvenement() {
  const formValues = this.evenementForm.value;

  // Vérification ID unique
  const existingIds = this.evenementService.listeEvenements().map(e => e.idEvenement);
  if (existingIds.includes(Number(formValues.idEvenement))) {
    alert("Cet ID existe déjà ! Veuillez en choisir un autre.");
    return;
  }

  const newEvenement: Evenement = {
    idEvenement: formValues.idEvenement,
    nomEvenement: formValues.nomEvenement,
    lieu: formValues.lieu,
    dateEvenement: formValues.dateEvenement,
    organisateur: formValues.organisateur,
    Genre: this.evenementService.consulterGenre(formValues.Genre),
    email: formValues.email,
  };

  this.evenementService.ajouterEvenement(newEvenement);
  this.router.navigate(['evenements']);
}


  ngOnInit(): void {
    this.genres = this.evenementService.listeGenres();

    this.evenementForm = this.fb.group({
      idEvenement: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nomEvenement: ['', [Validators.required, Validators.minLength(3)]],
      lieu: ['', Validators.required],
      dateEvenement: ['', Validators.required],
      organisateur: ['', Validators.required],
      Genre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }








}





