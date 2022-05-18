import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { Person } from './starperson/models';

@Injectable({
  providedIn: 'root'
})
export class IfceserviceService {

  constructor(private cliente: HttpClient) { }

  checaSiteIFCE(){
    return this.cliente.get('https://swapi.dev/api/starships/2/');
  }

  getPersonagem(id: string | null) : Promise<any>{
    //return this.cliente.get(`https://swapi.dev/api/people/${id}/`);

    let p1 = new Promise((resolve, reject) => {
      this.cliente.get(`https://swapi.dev/api/people/${id}/`);
    });
    return p1;
  }
}
