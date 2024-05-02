import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHeroComponent } from './pages/layout-hero/layout-hero.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { FilterHeroComponent } from './pages/filter-hero/filter-hero.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroByIdComponent } from './pages/hero-by-id/hero-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeroComponent,
    children: [
      {
        path: 'new-hero',
        component: NewHeroComponent
      },
      {
        path: 'filter-hero',
        component: FilterHeroComponent
      },
      {
        path: 'list-heroes',
        component: ListHeroesComponent
      },
      {
        path: 'edit-hero/:id',
        component: NewHeroComponent
      },
      {
        path: ':id',
        component: HeroByIdComponent
      },
      {
        path: '**',
        redirectTo: 'list-heroes'
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
