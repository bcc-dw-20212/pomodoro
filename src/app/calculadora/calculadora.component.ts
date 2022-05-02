import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  listaNum: string[] = ['1','2','3','4','5','6','7','8','9','0', '+', '-','*', '/', '='];
  tela: string = "";
  edita : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(botao: string){
    if(botao === '='){
      const resposta = eval(this.tela);
      this.tela = resposta;
      return;
    }
    this.tela += botao;
  }

}
