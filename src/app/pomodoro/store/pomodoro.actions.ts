import { createAction, props } from "@ngrx/store";

// As actions são os eventos que podemos lançar para alterar o estado.

export const START_POMODORO: string = '[POMODORO] START_POMODORO';
export const DEC_RELOGIO: string = '[POMODORO] DECREMENTA RELÓGIO';
export const LIGA_RELOGIO: string = '[POMODORO] Liga o relógio';
export const INC_CONFIG: string = '[POMODORO] Incrementa configuração';
export const DEC_CONFIG: string = '[POMODORO] Decrementa configuraçao';
export const CTRL_BTN: string = '[POMODORO] Botão de controle';

export const startPomodoroApp = createAction(START_POMODORO, props<{ tempos: number[] }>());
export const decRelogio = createAction(DEC_RELOGIO);
export const ligaRelogio = createAction(LIGA_RELOGIO);
export const incConfig = createAction(INC_CONFIG, props<{pos: number}>());
export const decConfig = createAction(DEC_CONFIG, props<{pos: number}>());
export const ctrlBtn = createAction(CTRL_BTN);
