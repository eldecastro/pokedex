// export interface Pokedex {
//   count: number;
//   next: string;
//   previous?: any;
//   results: PokeList[];
// }

// export interface PokeList {
//   name: string;
//   url: string;
// }

export interface Result {
  name: string;
  url: string;
}

export interface Pokedex {
  count: number;
  next: string;
  previous?: any;
  results: {[key: string]: Result};
}
