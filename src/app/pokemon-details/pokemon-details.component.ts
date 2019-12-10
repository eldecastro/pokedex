import { PokemonDetails } from './../models/pokemonDetails';
import { PokemonService } from './../services/pokemon.service';
import { Pokemon } from './../models/pokemon';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon;
  pokemonDetails: PokemonDetails;

  constructor(
    // private pokemonService: PokemonService,
    private dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.pokemon = data.pokemon;
    }

  ngOnInit() {

    console.log(this.pokemon.typeFilter);

  }

  close() {
    this.dialogRef.close();
  }

}
