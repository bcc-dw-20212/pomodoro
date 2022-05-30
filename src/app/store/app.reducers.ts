/**
 * E é aqui que a mágica acontece para conseguirmos modularizar nossa store.
 * Utilizamos a class ActionReducerMap para juntar os reducers das nossas
 * múltiplas stores.
 * 
 * Como o estado global agora é mais complexo, note que passamos a usar
 * selectors ao carregar dados da store para os componentes.
 */

import { ActionReducerMap } from "@ngrx/store";
import { pomodoroReducer, PomodoroState } from "../pomodoro/store/pomodoro.reducers";
import { starpersonReducer, SWState } from "../starperson/store/starperson.reducers";

export interface AppState {
    pomodoro: PomodoroState,
    starperson: SWState,
}

export const AppReducer: ActionReducerMap<AppState> = {
    pomodoro: pomodoroReducer,
    starperson: starpersonReducer,
}