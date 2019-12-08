export class Pokemon {
  static pokemonCounter = 0;
  static pokemonApi = '';
  id: string;
  name: string;
  pokemonSpeciesUrl: string;
  pokemonDetailsUrl: string;
  pokemonPortraitUrl: string;
  pokemonSpriteUrl: string;


  constructor(name: string , url: string) {
    this.id = (++Pokemon.pokemonCounter).toString().padStart(3, '0');
    this.name = name;
    this.pokemonDetailsUrl = `${url}/${name}`;
    this.pokemonPortraitUrl = `https://serebii.net/pokemon/art/${this.id}.png`;
    this.pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.pokemonCounter}.png`;


  }
}
