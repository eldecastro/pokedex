import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
   declarations: [
      AppComponent,
      PokemonListComponent,
      PokemonDetailsComponent,
      NavComponent,
      PokemonCardComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      HttpClientModule,
      MatCardModule,
      MatGridListModule,
      MatDialogModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [PokemonDetailsComponent]
})
export class AppModule { }
