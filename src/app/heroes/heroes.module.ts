import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FilterHeroComponent } from './pages/filter-hero/filter-hero.component';
import { NewHeroComponent } from './pages/new-hero/new-hero.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { LayoutHeroComponent } from './pages/layout-hero/layout-hero.component';
import { HeroByIdComponent } from './pages/hero-by-id/hero-by-id.component';
import { MaterialModule } from '../material/material.module';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeroImagePipe } from './pipes/heroes/pipe/heroImage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    LayoutHeroComponent,
    FilterHeroComponent,
    NewHeroComponent,
    ListHeroesComponent,
    HeroByIdComponent,
    CardHeroComponent,
    HeroImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
