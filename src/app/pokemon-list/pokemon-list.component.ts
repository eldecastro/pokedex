import { Observable } from 'rxjs';
import { PokemonListService } from './../services/pokemon-list.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})


export class PokemonListComponent implements OnInit {
  typeSelect = ['Fire', 'Water', 'Grass', 'Flying', 'Dark', 'Ghost', 'Dragon', 'Psychic',
                'Fairy', 'Fighting', 'Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Steel',
                'Electric', 'Ice'];
  test: Observable<Pokemon[]>;
  pokedex: Pokemon[] = [];
  searchText: string;
  sel: string;


  constructor(private pokemonListService: PokemonListService) { }

  ngOnInit() {
    this.pokemonListService.getPokedex().subscribe(pokelist => {
      pokelist.results.forEach(pokemon => {
        this.pokedex.push(new Pokemon(pokemon.name, pokemon.url));
      });
  });

  }
}
