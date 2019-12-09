export class Pokemon {
  static pokemonCounter = 0;
  static pokemonApi = '';
  private id: string;
  private name: string;
  private types: string[] = [];
  private pokemonSpeciesUrl: string;
  private pokemonDetailsUrl: string;
  private pokemonPortraitUrl: string;
  private pokemonSpriteUrl: string;
  private order: any;


  constructor(name: string , url: string) {
    this.id = (++Pokemon.pokemonCounter).toString().padStart(3, '0');
    this.name = name;
    this.pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${Pokemon.pokemonCounter}`;
    this.pokemonDetailsUrl = `https://pokeapi.co/api/v2/pokemon/${Pokemon.pokemonCounter}`;
    this.pokemonPortraitUrl = `https://serebii.net/pokemon/art/${this.id}.png`;
    this.pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.pokemonCounter}.png`;
  }


  getName(): string {
    return this.name;
  }
  getID(): string {
    return this.id;
  }
  getPokemonSpriteUrl(): string {
    return this.pokemonSpriteUrl;
  }
  getPokemonPortraitUrl(): string {
    return this.pokemonPortraitUrl;
  }
  setType(type: string) {
    this.types.push(type);
  }
  getPokemonDetailsUrl(): string {
    return this.pokemonDetailsUrl;
  }
  getPokemonSpeciesUrl(): string {
    return this.pokemonSpeciesUrl;
  }
  setOrder(order: any) {
    this.order = order;
  }
  getOrder(): number {
    return this.order;
  }
}
