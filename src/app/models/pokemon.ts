export class Pokemon {
  static pokemonCounter = 0;
  static pokemonApi = '';
  id: string;
  name: string;
  pokemonSpeciesUrl: string;
  pokemonDetailsUrl: string;


  constructor(name: string , url: string) {
    this.id = (++Pokemon.pokemonCounter).toString().padStart(3, '0');
    this.name = name;
    this.pokemonDetailsUrl = `${url}/${name}`;


  }
}
