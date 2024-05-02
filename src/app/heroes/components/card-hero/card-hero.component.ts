import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.css'
})
export class CardHeroComponent implements OnInit {
  @Input() public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw Error ('Héroe requerido');
  }
}
