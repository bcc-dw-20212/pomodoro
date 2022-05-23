import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromPomodoroReducer from '../store/pomodoro.reducers';
import * as PomodoroActions from '../store/pomodoro.actions';
import { Observable } from 'rxjs';
import { QuoteserviceService } from './quoteservice.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  tempos: number[] = [10, 5 * 60, 25 * 60, 5 * 60, 25 * 60, 45 * 60];
  tempo_corrente: number;
  tempo: number = 0;
  ligado: boolean = false;

  // Itens que vem da store são observables
  tempoDaStore: Observable<fromPomodoroReducer.PomodoroState>;

  botao: number = 0;

  alarme: HTMLAudioElement;

  // A store é injetada e a gente informa quais partes dela queremos trazer.
  constructor(private router: Router, private store: Store<{ appPomodoro: fromPomodoroReducer.PomodoroState }>) {
    this.tempo_corrente = this.tempos[this.tempo];

    this.alarme = new Audio("https://upload.wikimedia.org/wikipedia/commons/5/5c/Singapore_Public_Warning_System_siren.ogg");
    this.alarme.loop = true;


    // Carregando dados da Store
    this.tempoDaStore = this.store.select('appPomodoro');

    // Acessando os dados do estado programaticamente por meio de subscribe
    this.tempoDaStore.subscribe((state) => {
      for (let tempo of state.tempos) {
        console.log(tempo);
      }
    })

  }

  ngOnInit(): void {
    this.store.dispatch(PomodoroActions.startPomodoroApp({ tempos: [10, 5 * 60, 25 * 60, 5 * 60, 25 * 60, 45 * 60] }));

    setInterval(() => {
      this.ligado && this.tempo_corrente--;

      this.checaTempo();
    }, 1000);
  }

  checaTempo(): void {
    if (this.tempo_corrente <= 0) {
      this.ligado = false;
      this.botao = 0;
      this.tempo++;
      this.tempo_corrente = this.tempos[this.tempo];

      this.alarme.play();

      if (this.tempo == this.tempos.length - 1) this.tempo = -1;
    }


  }

  botaoClicado(texto: string): void {
    this.ligado = !this.ligado;

    this.alarme.pause();

    switch (this.botao) {
      case 0: this.botao = 1; break;
      case 1: this.botao = 2; break;
      case 2: this.botao = 1; break;
      default: this.botao = 0;
    }
  }

  corrige(data: { pos: number, valor: number }): void {
    this.tempos[data.pos] = data.valor;

    console.log(this.tempos);
  }

  /* Injetei lá no construtor o router, e abaixo podemos programaticamente navegar nas rotas conforme alguma lógica. */
  mudandoRotaComCodigo() {
    // Algum processamento prévio
    this.router.navigate(['/outra']);
  }

  resetConfig() {
    this.store.dispatch(PomodoroActions.startPomodoroApp({ tempos: [10, 5 * 60, 25 * 60, 5 * 60, 25 * 60, 45 * 60] }));
  }
}
