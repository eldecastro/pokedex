import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css']
})
export class SearchAndFilterComponent implements OnInit {
  typeSelect = ['Fire', 'Water', 'Grass', 'Flying', 'Dark', 'Ghost', 'Dragon', 'Psychic',
                'Fairy', 'Fighting', 'Normal', 'Poison', 'Ground', 'Rock', 'Bug', 'Steel',
                'Electric', 'Ice'];
  searchText: string;
  selectedType: string;
  @Output() searchTextEmitter = new EventEmitter<string>();
  @Output() typeEmitter = new EventEmitter<string>();
  constructor() { }

  emitSearchText() {
    this.searchTextEmitter.emit(this.searchText);
  }
  emitTypeFilter() {
    this.typeEmitter.emit(this.selectedType);
  }

  ngOnInit() {
  }

}
