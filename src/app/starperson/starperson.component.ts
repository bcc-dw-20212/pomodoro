import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IfceserviceService } from '../ifceservice.service';
import { Person } from './models';

@Component({
  selector: 'app-starperson',
  templateUrl: './starperson.component.html',
  styleUrls: ['./starperson.component.css']
})
export class StarpersonComponent implements OnInit {
  pessoa: Person = new Person();
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
    this.load(`${this.ids}`);
  }
}
