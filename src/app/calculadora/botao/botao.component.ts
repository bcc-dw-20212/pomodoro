import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  @Input() valor : string = '0';

  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clicou(event: Event){
    this.clicked.emit(this.valor);
  }

}
