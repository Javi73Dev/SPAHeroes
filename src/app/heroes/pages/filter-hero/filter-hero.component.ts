import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-filter-hero',
  templateUrl: './filter-hero.component.html',
  styles: ``
})
export class FilterHeroComponent {
  heroesService: HeroesService = inject(HeroesService)
  public filterInput = new FormControl ('')
  public heroes: Hero [] = [];
  public selectedHero?: Hero
  private debounceTimer?: NodeJS.Timeout;


  searchHero(query: string): void {
    this.heroesService.$getSuggestions(query)
      .subscribe(heroes => this.heroes = heroes);
  }
  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.filterInput.setValue( hero.name );

    this.selectedHero = hero;

  }
  onQueryChanged(query: string = ''){
    if(this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(()=>{
      this.searchHero(query)
    },1000)
   
  }
}
