import { createAction, props } from "@ngrx/store";

// As actions são os eventos que podemos lançar para alterar o estado.

export const START_POMODORO: string = '[POMODORO] START_POMODORO';

export const startPomodoroApp = createAction(START_POMODORO, props<{ tempos: number[] }>());