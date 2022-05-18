import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IfceserviceService } from '../ifceservice.service';
import { Person } from './models';

@Component({
  selector: 'app-starperson',
  templateUrl: './starperson.component.html',
  styleUrls: ['./starperson.component.css']
})
export class StarpersonComponent implements OnInit {
  pessoa : Observable<Person> = new Observable<Person>()

  constructor(private swservice: IfceserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pessoa = this.swservice.getPersonagem(id);
  }

}
