import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(pokemonList: Pokemon[], selectedType: string): Pokemon[] {
    if (!pokemonList) {
      return [];
     }
    if (!selectedType) {
      return pokemonList;
    }
    selectedType = selectedType.toLowerCase();
    return selectedType ? pokemonList.filter(pokemon => pokemon.typeFilter.includes(selectedType)) : pokemonList;
}

}
