import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import {MatDialogModule, MatSelectModule, MatGridListModule, MatCardModule, MatInputModule} from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { TypePipe } from './pipes/type.pipe';

@NgModule({
   declarations: [
      AppComponent,
      PokemonListComponent,
      PokemonDetailsComponent,
      NavComponent,
      PokemonCardComponent,
      FilterPipe,
      TypePipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      HttpClientModule,
      MatCardModule,
      MatGridListModule,
      MatDialogModule,
      FormsModule,
      MatSelectModule,
      MatInputModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      PokemonDetailsComponent
   ]
})
export class AppModule { }
