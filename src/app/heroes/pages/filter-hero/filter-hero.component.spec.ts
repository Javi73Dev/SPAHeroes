import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeroComponent } from './filter-hero.component';

describe('FilterHeroComponent', () => {
  let component: FilterHeroComponent;
  let fixture: ComponentFixture<FilterHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
