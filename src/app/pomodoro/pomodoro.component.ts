import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteserviceService } from './quoteservice.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  qod: Observable<{q: string, a: string, h: string}> = new Observable<{q: string, a: string, h: string}>();

  tempos: number[] = [25*60, 5*60, 25*60, 5*60, 25*60, 45*60];
  tempo_corrente: number;
  tempo: number = 0;
  ligado: boolean = false;
  botao_labels: string[] = ['iniciar', 'pausar', 'continuar'];
  botao: number = 0;

  alarme: HTMLAudioElement;

  constructor(private quote: QuoteserviceService) {
    this.tempo_corrente = this.tempos[this.tempo];

    this.alarme = new Audio("https://upload.wikimedia.org/wikipedia/commons/5/5c/Singapore_Public_Warning_System_siren.ogg");
    this.alarme.loop = true;

    this.quote.getQuoteOfTheDay().subscribe((data) => {
      console.log('OI oi oi');
      console.log(data);
      this.qod = data;
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.ligado && this.tempo_corrente--;

      this.checaTempo();
    }, 1000);
  }

  checaTempo() : void {
    if(this.tempo_corrente <= 0) {
      this.ligado = false;
      this.botao = 0;
      this.tempo++;
      this.tempo_corrente = this.tempos[this.tempo];

      this.alarme.play();

      if(this.tempo == this.tempos.length - 1) this.tempo = -1;
    }


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

  botaoClicado() : void {
    this.ligado = !this.ligado;

    this.alarme.pause();

    switch(this.botao){
      case 0: this.botao = 1; break;
      case 1: this.botao = 2; break;
      case 2: this.botao = 1; break;
      default: this.botao = 0;
    }
  }

  getLabel() : string {
    return this.botao_labels[this.botao];
  }
}
