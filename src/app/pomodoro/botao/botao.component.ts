import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-pomo',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoPomoComponent implements OnInit {
  @Input() label: number = 0;

  @Output() clique: EventEmitter<string> = new EventEmitter<string>();

  botao_labels: string[] = ['iniciar', 'pausar', 'continuar'];

  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado(): void {
    this.clique.emit('clique');
  }
}
