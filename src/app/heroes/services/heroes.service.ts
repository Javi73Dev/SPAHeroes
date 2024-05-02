import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
    private baseUrl = environments.baseUrl;
    constructor(private http: HttpClient) { }

    $getHeroes(): Observable<Hero[]>{
        console.log(`${this.baseUrl}/heroes`)
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }
    
    $getHeroById(id: string): Observable<Hero | undefined> {
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(error => of(undefined))
        )
    }
    
    $getSuggestions(query: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`).pipe(
          map(heroes => heroes.filter(hero => 
            hero.name.toLowerCase().includes(query.toLowerCase())
          ))
        );
      }

    //endpoint para CRUD
    $addHero(hero: Hero): Observable<Hero>{
        return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero)
    }

    $updateHero(hero: Hero): Observable<Hero>{
        if (!hero.id) throw Error('Esta información es requerida')
        return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
    }
    $deleteHero(id: string): Observable<boolean>{
        return this.http.delete(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(error => of(false)),
            map(response => true)
        );
    }
    
}