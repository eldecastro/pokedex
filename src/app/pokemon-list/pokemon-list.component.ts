import { PokemonListService } from './../services/pokemon-list.service';
import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../models/pokedex';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokedex: Pokedex;

  constructor(private pokemonListService: PokemonListService) { }

  ngOnInit() {
    this.pokemonListService.getPokedex().subscribe(pokedex => {
      this.pokedex = pokedex;
    });
  }

}
