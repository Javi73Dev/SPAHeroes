import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-hero',
  templateUrl: './layout-hero.component.html',
  styles: ``
})
export class LayoutHeroComponent {
  public menu = [
    { 
      label: 'Lista de Heroes', 
      icon: 'label', 
      url: './list-heroes'
    },
    { 
      label: 'Agregar Heroe', 
      icon: 'add', 
      url: './new-hero'
    },
    { 
      label: 'Buscar Heroe', 
      icon: 'search', 
      url: './filter-hero'
    }
  ]
}
