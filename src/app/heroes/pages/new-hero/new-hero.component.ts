import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styles: ``
})
export class NewHeroComponent  implements OnInit{
 // **** Inyección de los servicios ****
  heroesService: HeroesService = inject(HeroesService)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)
  snackBar: MatSnackBar = inject(MatSnackBar)
  dialog: MatDialog = inject(MatDialog)
// **** Inyección de los servicios **** 

  public heroForm = new FormGroup({
    id:   new FormControl<string>(''),
    name: new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    publisher:  new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:  new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    characters: new FormControl<string>('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    alt_img:    new FormControl(''),
  })

  public publishersMock = [
    {id: 'DC Comics', des: 'DC - Comics'},
    {id: 'Marcel Comics', des: 'Marcel - Comics'},
  ]

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }
  ngOnInit(): void {

    if ( !this.router.url.includes('edit-hero') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.$getHeroById( id ) ),
      ).subscribe( params => {
        console.log('esto busco',params)
        if ( !params ) {
          return this.router.navigateByUrl('/');
        }

        this.heroForm.reset( params );
        return;
      });

  }
  onSubmit():void{
    //const hero = this.heroForm.value as Hero
    if (this.heroForm.invalid) return;
    if ( this.currentHero.id ){
      this.heroesService.$updateHero(this.currentHero)
      .subscribe(hero => {
        this.showMessage(`Modificación exitosa`);
        setTimeout(() => {
          this.router.navigate(['/heroes']);
      }, 2000);
      });
      return;
    }
    this.heroesService.$addHero(this.currentHero)
    .subscribe(hero =>{
      this.router.navigate(['/heroes/edit-hero', hero.id ]);
      this.showMessage(`Héroe creado correctamente`);
      setTimeout(() => {
        this.router.navigate(['/heroes']);
    }, 2000);
    });
    
  }
  onDeleteHero() {
    if ( !this.currentHero.id ) throw Error('Campo es requerido');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.heroesService.$deleteHero( this.currentHero.id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });

  }
  
  showMessage( message: string ):void {
    this.snackBar.open( message, 'ok', {
      duration: 3000,
    })
  }
  onNameInput(event: any): void {
    const value = event.target.value.toUpperCase();
    this.heroForm.get('name')!.setValue(value);
  }
}
