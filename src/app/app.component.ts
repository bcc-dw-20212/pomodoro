import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input('app-sobrenome') sobrenome: String = "Bastos";

  title = 'pomodoro';
  nome: String = 'Felipe';
  idade: number = 34;

  getNome() : String {
    return this.nome;
  }

  multiplica(valor: number) : number {
    return valor*this.idade;
  }

  grite() : void {
    alert('AAAAAAAaaaaahhhhH!!!!');
  }
}
