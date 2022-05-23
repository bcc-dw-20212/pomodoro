import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PomodoroActions from './store/pomodoro.actions';
import * as fromPomodoroReducer from './store/pomodoro.reducers';

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {
  tick: Number = 0;

  constructor(private store: Store<{ appPomodoro: fromPomodoroReducer.PomodoroState }>) {
  }

  startClock() {
    if (this.tick == 0) {
      const num = setInterval(() => {
        this.store.dispatch(PomodoroActions.decRelogio());
      }, 1000);
      this.tick = new Number(num);
    }
  }
}
