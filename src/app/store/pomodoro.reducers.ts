import { state } from "@angular/animations";
import { ActionsSubject, createReducer, on } from "@ngrx/store";

import * as PomodoroActions from "./pomodoro.actions";

// Estado da nossa app
export interface PomodoroState {
    tempos: number[],
    tempo_corrente: number,
    tempo: number,
    ligado: boolean,
};

// Estado inicial.
export const initialState: PomodoroState = {
    tempos: [],
    tempo_corrente: 0,
    tempo: 0,
    ligado: false,
};

// Reducers (reação a eventos que fazem transição do estado atual para o próximo)
// A ideia é que o estado seja imutável, por isso nunca alteramos ele e retornamos
// e sim devolvemos uma cópia com as mudanças pontuais.
export const pomodoroReducer = createReducer(
    initialState,
    on(PomodoroActions.startPomodoroApp, (state, action) => ({
        ...state,
        tempos: [...action.tempos],
        tempo_corrente: action.tempos[state.tempo],
    })
    ),
    on(PomodoroActions.decRelogio, (state) => {
        if(state.ligado){
            console.log(state);
            const sobra = state.tempo_corrente - 1;

            if(sobra <= 0){
                return {
                    ...state,
                    ligado: false,
                    tempo: state.tempo+1,
                    tempo_corrente: state.tempos[state.tempo+1],
                }
            }

            return {
                ...state,
                tempo_corrente: sobra,
            }
        }

        return state;
    }
    ),
    on(PomodoroActions.ligaRelogio, (state) => ({
        ...state,
        ligado: !state.ligado,
    })
    ),
)