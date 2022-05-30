import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie, Person, Planet, Vehicle, Specie, Starship } from './starperson/models';
import { AppState } from './store/app.reducers';
import * as fromStarActions from './starperson/store/starperson.actions';

@Injectable({
  providedIn: 'root'
})
export class IfceserviceService {
  id$ = this.store.select((state: AppState) => state.starperson.to_load);

  // Serviços podem ter injeção da store também.
  constructor(private cliente: HttpClient, private store: Store<AppState>) { }

  checaSiteIFCE() {
    return this.cliente.get('https://swapi.dev/api/starships/2/');
  }

  getPersonagem(): Observable<Person> {
    //return this.cliente.get(`https://swapi.dev/api/people/${id}/`);
    let loaded: Observable<Person> = new Observable<Person>();
    this.id$.subscribe(id => {
      loaded = this.cliente.get<Person>(`https://swapi.dev/api/people/${id}/`);
    });
    return loaded;
  }

  /* Por fins de simplicidade os métodos abaixo estão mal
     projetados, tendo como diferença apenas a conversão
     para a class final. */

  getNomePlaneta(url: string): Observable<Planet> {
    return this.cliente.get<Planet>(url);
  }

  getNomeFilme(url: string): Observable<Movie> {
    return this.cliente.get<Movie>(url);
  }

  getNomeEspecie(url: string): Observable<Specie> {
    return this.cliente.get<Specie>(url);
  }

  getNomeVeiculo(url: string): Observable<Vehicle> {
    return this.cliente.get<Vehicle>(url);
  }

  getNomeNave(url: string): Observable<Starship> {
    return this.cliente.get<Starship>(url);
  }
}
