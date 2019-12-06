export interface Color {
	name: string;
	url: string;
}

export interface EggGroup {
	name: string;
	url: string;
}

export interface EvolutionChain {
	url: string;
}

export interface Habitat {
	name: string;
	url: string;
}

export interface Language {
	name: string;
	url: string;
}

export interface Name {
	language: Language;
	name: string;
}

export interface Pokedex {
	name: string;
	url: string;
}

export interface PokedexNumber {
	entry_number: number;
	pokedex: Pokedex;
}

export interface Shape {
	name: string;
	url: string;
}

export interface Pokemon {
	name: string;
	url: string;
}

export interface Variety {
	is_default: boolean;
	pokemon: Pokemon;
}

export interface RootObject {
	color: Color;
	egg_groups: EggGroup[];
	evolution_chain: EvolutionChain;
	evolves_from_species?: any;
	form_descriptions: any[];
	forms_switchable: boolean;
	gender_rate: number;
	habitat: Habitat;
	id: number;
	is_baby: boolean;
	name: string;
	order: number;
	pokedex_numbers: PokedexNumber[];
	shape: Shape;
	varieties: Variety[];
}
