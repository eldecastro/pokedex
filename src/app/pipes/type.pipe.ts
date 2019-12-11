import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(pokemonList: Pokemon[], sel: string): Pokemon[] {
    if (!pokemonList) {
      return [];
     }
    if (!sel) {
      return pokemonList;
    }
    sel = sel.toLowerCase();
    return sel ? pokemonList.filter(pokemon => pokemon.typeFilter.includes(sel)) : pokemonList;
}

}
