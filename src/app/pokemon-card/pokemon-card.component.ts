import { PokemonDetailsComponent } from './../pokemon-details/pokemon-details.component';
import { Pokemon } from './../models/pokemon';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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
