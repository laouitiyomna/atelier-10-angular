import { Evenement } from '../model/evenement.model';
import { Genre } from '../model/genre.model';

describe('Evenement model', () => {
  it('should create an Evenement instance', () => {
    const genre: Genre = { idGenre: 1, nomGenre: 'Culturel' };
    
    const evenement = new Evenement();
    evenement.idEvenement = 1;
    evenement.nomEvenement = 'Festival de Musique';
    evenement.lieu = 'Tunis';
    evenement.dateEvenement = new Date('2025-07-12');
    evenement.organisateur = 'Ministère de la Culture';
    evenement.Genre = genre;
    evenement.email = 'contact@culture.gov.tn';

    expect(evenement).toBeTruthy();
    expect(evenement.nomEvenement).toBe('Festival de Musique');
    expect(evenement.Genre.nomGenre).toBe('Culturel');
  });
});
