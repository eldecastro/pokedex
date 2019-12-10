import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './models/pokemon';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemonList: Pokemon[], searchText: string): Pokemon[] {
    if (!pokemonList) {
     return [];
    }

    if (!searchText) {
      return pokemonList;
    }

    searchText = searchText.toLowerCase();

    return pokemonList.filter( it => {
    return it.getName().toLowerCase().includes(searchText);
    });
  }

}
