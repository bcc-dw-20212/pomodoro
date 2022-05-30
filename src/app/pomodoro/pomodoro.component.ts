import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromPomodoroReducer from './store/pomodoro.reducers';
import * as PomodoroActions from './store/pomodoro.actions';
import { Observable } from 'rxjs';
import { PomodoroService } from './pomodoro.service';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  tempos_padrao: number[] = [10, 9, 8, 7, 6, 5];

  // Itens que vem da store são observables
  state: Observable<fromPomodoroReducer.PomodoroState>;

  // A store é injetada e a gente informa quais partes dela queremos trazer.
  constructor(private router: Router,
              private store: Store<AppState>,
              private clock: PomodoroService) {
    // Carregando dados da Store
    this.state = this.store.select((state: AppState) => state.pomodoro);

    // Acessando os dados do estado programaticamente por meio de subscribe
    //this.tempoDaStore.subscribe((state) => {
    //  for (let tempo of state.tempos) {
    //    console.log(tempo);
    //  }
    //})
    this.store.dispatch(PomodoroActions.startPomodoroApp({ tempos: this.tempos_padrao }));
  }

  ngOnInit(): void {
    this.clock.startClock();
  }

  botaoClicado(texto: string): void {
    this.store.dispatch(PomodoroActions.ligaRelogio());
  }

  corrige(data: { pos: number, ope: string }): void {
    switch(data.ope){
      case '+':
        this.store.dispatch(PomodoroActions.incConfig({pos: data.pos}));
        break;
      case '-':
        this.store.dispatch(PomodoroActions.decConfig({pos: data.pos}));
        break;
    }
  }

  /* Injetei lá no construtor o router, e abaixo podemos programaticamente navegar nas rotas conforme alguma lógica. */
  mudandoRotaComCodigo() {
    // Algum processamento prévio
    this.router.navigate(['/outra']);
  }
}
