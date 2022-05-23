import { state } from "@angular/animations";
import { ActionsSubject, createReducer, on } from "@ngrx/store";

import * as PomodoroActions from "./pomodoro.actions";

// Estado da nossa app
export interface PomodoroState {
    tempos: number[],
    tempo_corrente: number,
    tempo: number,
    ligado: boolean,
    botao: number,
    alarme: HTMLAudioElement,
};

// Estado inicial.
export const initialState: PomodoroState = {
    tempos: [],
    tempo_corrente: 0,
    tempo: 0,
    ligado: false,
    botao: 0,
    alarme: new Audio("https://upload.wikimedia.org/wikipedia/commons/5/5c/Singapore_Public_Warning_System_siren.ogg"),
};

// Reducers (reação a eventos que fazem transição do estado atual para o próximo)
// A ideia é que o estado seja imutável, por isso nunca alteramos ele e retornamos
// e sim devolvemos uma cópia com as mudanças pontuais.
export const pomodoroReducer = createReducer(
    initialState,
    on(PomodoroActions.startPomodoroApp, (state, action) => {
        if (state.tempos.length === 0) {
            return {
                ...state,
                tempos: [...action.tempos],
                tempo_corrente: action.tempos[state.tempo],
            }
        } else {
            return {
                ...state
            };
        }
    }
    ),
    on(PomodoroActions.decRelogio, (state) => {
        if (state.ligado) {
            const sobra = state.tempo_corrente - 1;

            if (sobra <= 0) {
                state.alarme.loop = true;
                state.alarme.play();
                let tempo = state.tempo + 1;
                if(tempo >= state.tempos.length-1) {
                    tempo = -1;
                }
                return {
                    ...state,
                    ligado: false,
                    tempo: tempo,
                    tempo_corrente: state.tempos[state.tempo+1],
                    botao: 2,
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
    on(PomodoroActions.ligaRelogio, (state) => {
        let novo_botao: number = 0;
        switch (state.botao) {
            case 0: novo_botao = 1; break;
            case 1: novo_botao = 2; break;
            case 2: novo_botao = 1; break;
            default: novo_botao = 0;
        }
        state.alarme.pause();
        return {
            ...state,
            ligado: !state.ligado,
            botao: novo_botao,
        }
    }
    ),
    on(PomodoroActions.incConfig, (state, action) => {
        const tempos_novos = [...state.tempos]
        tempos_novos[action.pos] = state.tempos[action.pos] + 60;

        return {
            ...state,
            tempos: tempos_novos,
        }
    }
    ),
    on(PomodoroActions.decConfig, (state, action) => {
        const tempos_novos = [...state.tempos]
        tempos_novos[action.pos] = state.tempos[action.pos] - 60;

        return {
            ...state,
            tempos: tempos_novos,
        }
    }
    ),
    on(PomodoroActions.ctrlBtn, (state) => {
        let novo_botao = 0;
        switch (state.botao) {
            case 0: novo_botao = 1; break;
            case 1: novo_botao = 2; break;
            case 2: novo_botao = 1; break;
            default: novo_botao = 0;
        }
        return {
            ...state,
            botao: novo_botao,
        }
    }
    ),
)