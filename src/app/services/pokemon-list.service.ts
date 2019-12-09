import { PokemonDetails } from './../models/pokemonDetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pokedex } from '../models/pokedex';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  pokemonBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  getAllParam = '?offset=00&limit=807';
  pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=00&limit=807';
  pokedex: Pokemon[] = [];
  myMethod$: Observable<any>;

constructor(private http: HttpClient) { }

  getPokedex(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.pokemonBaseUrl + this.getAllParam);
  }
  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }

  // setPokedex(data){
  //   this.pokedex = data;
  // }
}
