import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IfceserviceService {

  constructor(private cliente: HttpClient) { }

  checaSiteIFCE(){
    return this.cliente.get('https://swapi.dev/api/starships/2/');
  }
}
