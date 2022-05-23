import { createAction, props } from "@ngrx/store";

// As actions são os eventos que podemos lançar para alterar o estado.

export const START_POMODORO: string = '[POMODORO] START_POMODORO';
export const DEC_RELOGIO: string = '[POMODORO] DECREMENTA RELÓGIO'
export const LIGA_RELOGIO: string = '[POMODORO] Liga o relógio'

export const startPomodoroApp = createAction(START_POMODORO, props<{ tempos: number[] }>());
export const decRelogio = createAction(DEC_RELOGIO);
export const ligaRelogio = createAction(LIGA_RELOGIO);