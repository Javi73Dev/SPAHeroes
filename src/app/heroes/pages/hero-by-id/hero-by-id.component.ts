import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-by-id',
  templateUrl: './hero-by-id.component.html',
  styles: ``
})
export class HeroByIdComponent implements OnInit{
  heroesService: HeroesService = inject(HeroesService)
  public hero?: Hero;
  constructor(private activateRoute: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.$getHeroById(id)),
    ).subscribe(hero => {
      if (!hero) return this.router.navigate(['heroes/list-heroes'])
        this.hero = hero;
      return;
    })
  }
}
