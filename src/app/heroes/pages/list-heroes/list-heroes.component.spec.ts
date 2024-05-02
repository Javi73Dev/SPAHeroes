import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHeroesComponent } from './list-heroes.component';
import { HeroesService } from '../../services/heroes.service';
import { of } from 'rxjs';
import { Publisher } from '../../interfaces/hero.interface';

describe('ListHeroesComponent', () => {
  let component: ListHeroesComponent;
  let fixture: ComponentFixture<ListHeroesComponent>;
  let mockHeroesService: jasmine.SpyObj<HeroesService>;

  beforeEach(async () => {
    mockHeroesService = jasmine.createSpyObj('HeroesService', ['getHeroes']);
    
    await TestBed.configureTestingModule({
      declarations: [ ListHeroesComponent ],
      providers: [{ provide: HeroesService, useValue: mockHeroesService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display heroes from the service', () => {
    const mockHeroes = [
      { id: '1', name: 'Hero 1', publisher: Publisher.DCComics, alter_ego: 'Alter Ego 1', characters: 'Characters 1', alt_img: 'alt_img_1.jpg' },
      { id: '2', name: 'Hero 2', publisher: Publisher.DCComics, alter_ego: 'Alter Ego 2', characters: 'Characters 2', alt_img: 'alt_img_2.jpg' },
      { id: '3', name: 'Hero 3', publisher: Publisher.Marcel, alter_ego: 'Alter Ego 3', characters: 'Characters 3', alt_img: 'alt_img_3.jpg' }
    ];

    mockHeroesService.$getHeroes.and.returnValue(of(mockHeroes));

    fixture.detectChanges();

    const heroElements = fixture.nativeElement.querySelectorAll('.hero');
    expect(heroElements.length).toBe(mockHeroes.length);

    mockHeroes.forEach((hero, index) => {
      expect(heroElements[index].textContent).toContain(hero.name);
    });
  });
});
