import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteserviceService {

  constructor(private http: HttpClient) { }

  getQuoteOfTheDay(): Observable<any> {
    return this.http.get('https://zenquotes.io/api/random/3d8e3c179ae7361cea6f51995061873e16423516');
  }
}
