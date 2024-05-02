import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styles: ``
})
export class ListHeroesComponent implements OnInit{
  public heroes: Hero[] = [];
  heroesService: HeroesService = inject(HeroesService)
 
  ngOnInit(): void {
    this.heroesService.$getHeroes()
    .subscribe(heroes => this.heroes = heroes)
    
  }

}


