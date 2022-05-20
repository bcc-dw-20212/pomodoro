import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IfceserviceService } from '../ifceservice.service';
import { Movie, Person, Planet, Vehicle, Specie, Starship } from './models';

@Component({
  selector: 'app-starperson',
  templateUrl: './starperson.component.html',
  styleUrls: ['./starperson.component.css']
})
export class StarpersonComponent implements OnInit {
  pessoa: Person = new Person();
  planeta: string = '';
  filmes: string[] = [];
  especies: string[] = [];
  veiculos: string[] = [];
  naves: string[] = [];
  showForm: boolean = true;
  ids: number = 0;

  constructor(private swservice: IfceserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.load(id);
  }

  private load(id: string | null): void {
    if (typeof id === 'string') {
      this.showForm == false;
      this.swservice.getPersonagem(id).subscribe(
        (p: Person) => {
          this.pessoa = p;
          this.swservice.getNomePlaneta(p.homeworld).subscribe(
            (plan: Planet) => {
              this.planeta = plan.name;
            }
          );
          for(let filme of p.films){
            this.swservice.getNomeFilme(filme).subscribe(
              (fil: Movie) => {
                this.filmes.push(fil.title);
              }
            )
          }
          for(let specie of p.species){
            this.swservice.getNomeEspecie(specie).subscribe(
              (spc: Specie) => {
                this.especies.push(spc.name);
              }
            )
          }
          for(let vei of p.vehicles){
            this.swservice.getNomeVeiculo(vei).subscribe(
              (sts: Vehicle) => {
                this.veiculos.push(sts.name);
              }
            )
          }
          for(let nave of p.starships){
            this.swservice.getNomeNave(nave).subscribe(
              (sts: Starship) => {
                this.naves.push(sts.name);
              }
            )
          }
        }
      )
    } else {
      this.showForm = true;
    }

    this.ids = Number(id);
  }

  carregar() {
    this.router.navigate([`/swp/${this.ids}`]);
    this.pessoa.name = '';
    this.especies = [];
    this.filmes = [];
    this.veiculos = [];
    this.naves = [];
    this.load(`${this.ids}`);
  }
}
