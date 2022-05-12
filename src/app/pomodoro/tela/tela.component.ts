import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {
  @Input() tempo_corrente: number = 0;
  @Input() display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getTempoMinutos() : string {
    let minutos: number = 0;
    let segundos: number = 0;

    minutos = Math.floor(this.tempo_corrente/60);
    segundos = this.tempo_corrente - minutos*60;

    const minutos_str: string = String(minutos).padStart(2, '0');
    const segundos_str: string = String(segundos).padStart(2, '0');

    return `${minutos_str}:${segundos_str}`
  }
}
