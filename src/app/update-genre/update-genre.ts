import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Genre } from '../model/genre.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-genre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-genre.html',
  styleUrls: ['./style.css']
})
export class UpdateGenre implements OnChanges {

  @Input() genre!: Genre;
  @Input() ajout!: boolean;
  @Output() genreUpdated = new EventEmitter<Genre>();

  localGenre: Genre = { idGenre: 0, nomGenre: '' };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['genre'] && this.genre) {
      this.localGenre = { ...this.genre }; // toujours cloner
    }
  }

  saveGenre() {
    this.genreUpdated.emit({ ...this.localGenre });
  }
}
