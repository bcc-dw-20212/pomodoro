import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './starperson/models';

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
}
