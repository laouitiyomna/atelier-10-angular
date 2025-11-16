import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-evenement',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './update-evenement.html',
  styles: [``],
})
export class UpdateEvenementComponent implements OnInit {
  myForm!: FormGroup;
 genres: Genre[] = [];
  currentEvenement!: Evenement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private evenementService: EvenementService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.genres = this.evenementService.listeGenres();
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentEvenement = this.evenementService.consulterEvenement(id);

    // Format de la date pour l'input
    const d = new Date(this.currentEvenement.dateEvenement!);
    const formattedDate = `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;

    // Création du formulaire avec validations
    this.myForm = this.fb.group({
      idEvenement: [this.currentEvenement.idEvenement, [Validators.required, Validators.pattern('^[0-9]*$')]],
      nomEvenement: [this.currentEvenement.nomEvenement, [Validators.required, Validators.minLength(3)]],
      lieu: [this.currentEvenement.lieu, [Validators.required, Validators.minLength(2)]],
      dateEvenement: [formattedDate, Validators.required],
      organisateur: [this.currentEvenement.organisateur, [Validators.required, Validators.minLength(3)]],
      email: [this.currentEvenement.email, [Validators.required, Validators.email]],
      idGenre: [this.currentEvenement.Genre?.idGenre, Validators.required],
    });
  }

  updateEvenement(): void {
    if (this.myForm.invalid) return;

    const formValues = this.myForm.getRawValue();

    const updatedEvenement: Evenement = {
      idEvenement: formValues.idEvenement,
      nomEvenement: formValues.nomEvenement,
      lieu: formValues.lieu,
      dateEvenement: formValues.dateEvenement,
      organisateur: formValues.organisateur,
      email: formValues.email,
      Genre: this.evenementService.consulterGenre(formValues.idGenre),
    };

    this.evenementService.updateEvenement(updatedEvenement);

    console.log('✅ Événement mis à jour avec succès :', updatedEvenement);
    this.router.navigate(['evenements']);
  }
}
