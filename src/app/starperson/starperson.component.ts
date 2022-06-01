import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IfceserviceService } from '../ifceservice.service';
import { AppState } from '../store/app.reducers';
import * as fromStarActions from './store/starperson.actions';
import { Movie, Person, Planet, Vehicle, Specie, Starship } from './models';

@Component({
  selector: 'app-starperson',
  templateUrl: './starperson.component.html',
  styleUrls: ['./starperson.component.css']
})
export class StarpersonComponent implements OnInit {
  starState: Observable<Person> = new Observable<Person>();
  loaded: Observable<boolean> = new Observable<boolean>();
  error: Observable<boolean> = new Observable<boolean>();
  planeta: Observable<string> = new Observable<string>();
  filmes: Observable<string[]> = new Observable<string[]>();
  especies: string[] = [];
  veiculos: string[] = [];
  naves: string[] = [];
  showForm: boolean = true;
  ids: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.load(id);

    // Observe que aqui melhoramos o carregamento de partes da store, usando um selector
    // (no caso escrevemos a função selector inline, na forma de uma arrow function).
    this.starState = this.store.select<Person>((state: AppState) => state.starperson.person_loaded);
    this.loaded = this.store.select<boolean>((state: AppState) => state.starperson.loaded);
    this.error = this.store.select<boolean>((state) => state.starperson.error);
    this.planeta = this.store.select<string>((state: AppState) => state.starperson.planet);
    
  }

  private load(id: string | null): void {
    if (typeof id === 'string') {
      this.store.dispatch(fromStarActions.loadPerson({ id: new Number(id) }));
      // Desativamos temporariamente pois vamos cuidar disso aqui com Effects em breve.
      //(p: Person) => {
      //  this.pessoa = p;
      //  this.swservice.getNomePlaneta(p.homeworld).subscribe(
      //    (plan: Planet) => {
      //      this.planeta = plan.name;
      //    }
      //  );
      //  for(let filme of p.films){
      //    this.swservice.getNomeFilme(filme).subscribe(
      //      (fil: Movie) => {
      //        this.filmes.push(fil.title);
      //      }
      //    )
      //  }
      //  for(let specie of p.species){
      //    this.swservice.getNomeEspecie(specie).subscribe(
      //      (spc: Specie) => {
      //        this.especies.push(spc.name);
      //      }
      //    )
      //  }
      //  for(let vei of p.vehicles){
      //    this.swservice.getNomeVeiculo(vei).subscribe(
      //      (sts: Vehicle) => {
      //        this.veiculos.push(sts.name);
      //      }
      //    )
      //  }
      //  for(let nave of p.starships){
      //    this.swservice.getNomeNave(nave).subscribe(
      //      (sts: Starship) => {
      //        this.naves.push(sts.name);
      //      }
      //    )
      //  }
      //}
      //)

    this.ids = Number(id);
    }
  }

  carregar() {
    this.router.navigate([`/swp/${this.ids}`]);
    this.especies = [];
    this.veiculos = [];
    this.naves = [];
    this.load(`${this.ids}`);
  }
}
