export interface Sprite {
  front_default: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface PokemonDetails {
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: Sprite;
  types: Types[];
  weight: number;
}

