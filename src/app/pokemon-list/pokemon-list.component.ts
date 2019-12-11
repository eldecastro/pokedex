import { Observable } from 'rxjs';
import { PokemonListService } from './../services/pokemon-list.service';
import { Component, OnInit, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})


export class PokemonListComponent implements OnInit {
  test: Observable<Pokemon[]>;
  pokedex: Pokemon[] = [];
  searchText: string;
  selectedType: string;


  constructor(private pokemonListService: PokemonListService) { }

  searchTextReceiver($event) {
    this.searchText = $event;
  }
  typeFilterReceiver(name: string) {
    this.selectedType = name;
  }

  ngOnInit() {
    this.pokemonListService.getPokedex().subscribe(pokelist => {
      pokelist.results.forEach(pokemon => {
        this.pokedex.push(new Pokemon(pokemon.name, pokemon.url));
      });
  });

  }
}
