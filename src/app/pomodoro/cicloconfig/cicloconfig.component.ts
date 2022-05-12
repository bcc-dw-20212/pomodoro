import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cicloconfig',
  templateUrl: './cicloconfig.component.html',
  styleUrls: ['./cicloconfig.component.css']
})
export class CicloconfigComponent implements OnInit {
  @Input() tempo: number = 0;
  @Input() posicao: number = 0;

  @Output() altera_ciclo: EventEmitter<{pos: number, valor: number}> = new EventEmitter<{pos: number, valor: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  altera(operador: string){
    switch(operador){
      case '+': this.tempo += 60;
                break;
      case '-': this.tempo -= 60;
                break;
      default:
                break;
    }

    this.altera_ciclo.emit({pos: this.posicao, valor: this.tempo});
  }

}
