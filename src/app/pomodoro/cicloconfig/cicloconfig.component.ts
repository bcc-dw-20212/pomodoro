import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cicloconfig',
  templateUrl: './cicloconfig.component.html',
  styleUrls: ['./cicloconfig.component.css']
})
export class CicloconfigComponent implements OnInit {
  @Input() tempo: number = 0;
  @Input() posicao: number = 0;

  @Output() altera_ciclo: EventEmitter<{pos: number, ope: string}> = new EventEmitter<{pos: number, ope: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  altera(operador: string){
    this.altera_ciclo.emit({pos: this.posicao, ope: operador});
  }

}
