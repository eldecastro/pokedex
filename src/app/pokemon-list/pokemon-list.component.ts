import { PokemonListService } from './../services/pokemon-list.service';
import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../models/pokedex';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokedex: Pokemon[] = [];

  constructor(private pokemonListService: PokemonListService) { }

  ngOnInit() {
    this.pokemonListService.getPokedex().subscribe(pokelist => {
      pokelist.results.forEach(element => {
        this.pokedex.push(new Pokemon(element.name, element.url));
      });
    });
  }

}
