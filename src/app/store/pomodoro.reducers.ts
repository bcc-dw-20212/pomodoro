import { createReducer, on } from "@ngrx/store";

import * as PomodoroActions from "./pomodoro.actions";

// Estado da nossa app
export interface PomodoroState {
    tempos: number[],
};

// Estado inicial.
export const initialState: PomodoroState = {
    tempos: [],
};

// Reducers (reação a eventos que fazem transição do estado atual para o próximo)
// A ideia é que o estado seja imutável, por isso nunca alteramos ele e retornamos
// e sim devolvemos uma cópia com as mudanças pontuais.
export const pomodoroReducer = createReducer(
    initialState,
    on(PomodoroActions.startPomodoroApp, (state, action) => ({
        ...state,
        tempos: [...action.tempos],
    })
    )
)