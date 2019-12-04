import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokedex } from '../models/pokedex';


@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  pokemonListUrl: string = 'https://pokeapi.co/api/v2/pokemon';

constructor(private http: HttpClient) { }



}
