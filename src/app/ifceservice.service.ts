import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Person, Planet, Vehicle, Specie, Starship } from './starperson/models';

@Injectable({
  providedIn: 'root'
})
export class IfceserviceService {

  constructor(private cliente: HttpClient) { }

  checaSiteIFCE() {
    return this.cliente.get('https://swapi.dev/api/starships/2/');
  }

  getPersonagem(id: string): Observable<Person> {
    //return this.cliente.get(`https://swapi.dev/api/people/${id}/`);

    return this.cliente.get<Person>(`https://swapi.dev/api/people/${id}/`);
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
