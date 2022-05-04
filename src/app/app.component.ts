import { Component, Input, OnInit } from '@angular/core';
import { IfceserviceService } from './ifceservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pomodoro';
  nome: String = 'Felipe';
  sobrenome: String = "Bastos";
  idade: number = 34;

  constructor(private ifceservice: IfceserviceService){}

  ngOnInit(): void {
    this.ifceservice.checaSiteIFCE().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  getNome() : String {
    return this.nome;
  }

  onSobrenome(novo : Event): void {
    const elemento = novo.target as HTMLInputElement;
    this.sobrenome = elemento.value;
  }

  multiplica(valor: number) : number {
    return valor*this.idade;
  }

  grite() : void {
    alert('AAAAAAAaaaaahhhhH!!!!');
  }

  oInputFoiClicado(evt : {ph: String, re: String}) {
	alert(`O input com placeholder ${evt.ph} tem o padrão ${evt.re}.`);
  }
}
