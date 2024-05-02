import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroByIdComponent } from './hero-by-id.component';

describe('HeroByIdComponent', () => {
  let component: HeroByIdComponent;
  let fixture: ComponentFixture<HeroByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
