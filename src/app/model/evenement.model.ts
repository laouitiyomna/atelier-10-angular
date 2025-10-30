import { Genre } from "./genre.model";

export class Evenement {
  idEvenement!: number;
  nomEvenement!: string;
  lieu!: string;
  dateEvenement!: Date;
  organisateur!:string;
  Genre!: Genre;
  email!: string;
}