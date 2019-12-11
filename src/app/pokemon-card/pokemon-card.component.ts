import { PokemonDetailsComponent } from './../pokemon-details/pokemon-details.component';
import { Pokemon } from './../models/pokemon';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, private dialog: MatDialog) { }

  ngOnInit() {
    this.pokemonService.getPokemonDetails(this.pokemon.getPokemonDetailsUrl()).subscribe(details => {
      this.pokemon.setDetails(details);
  });
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      pokemon: this.pokemon
    };

    this.dialog.open(PokemonDetailsComponent, dialogConfig);
}

}
