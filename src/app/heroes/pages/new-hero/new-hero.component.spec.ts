import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // Importa By
import { NewHeroComponent } from './new-hero.component';

describe('NewHeroComponent', () => {
  let component: NewHeroComponent;
  let fixture: ComponentFixture<NewHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewHeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onDeleteHero when delete button is clicked', () => {
    const deleteButton = fixture.debugElement.query(By.css('button[mat-flat-button][color="warn"]'));
    deleteButton.triggerEventHandler('click', null);
    
    
    spyOn(component, 'onDeleteHero');
    expect(component.onDeleteHero).toHaveBeenCalled();
  });
});
