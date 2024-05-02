import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styles: ``
})
export class ListHeroesComponent implements OnInit{
  public heroes: Hero[] = [];
  heroesService: HeroesService = inject(HeroesService)
  public heroes$: Observable<Hero[]> | undefined;

  ngOnInit(): void {
    //he definido el observable heroes$ para usar la pipe async en HTML. 
    this.heroes$ = this.heroesService.$getHeroes();
  }

}


