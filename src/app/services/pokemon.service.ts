import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonDetails } from '../models/pokemonDetails';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private http: HttpClient) { }

getPokemonDetails(url: string): Observable<PokemonDetails> {
  return this.http.get<PokemonDetails>(url).pipe();
}

}
